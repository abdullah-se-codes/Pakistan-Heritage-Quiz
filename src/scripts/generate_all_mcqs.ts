import { GoogleGenAI, Type, Schema } from '@google/genai';
import fs from 'fs';

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: { headers: { 'User-Agent': 'aistudio-build' } }
});

const mcqSchema: Schema = {
  type: Type.ARRAY,
  items: {
    type: Type.OBJECT,
    properties: {
      question: { type: Type.STRING },
      difficulty: { type: Type.STRING, enum: ['Foundation', 'Intermediate', 'Scholar'] },
      contextSnippet: { type: Type.STRING },
      options: {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            id: { type: Type.STRING },
            text: { type: Type.STRING },
            isCorrect: { type: Type.BOOLEAN },
            explanation: { type: Type.STRING }
          },
          required: ['id', 'text', 'isCorrect', 'explanation']
        }
      },
      funFact: { type: Type.STRING }
    },
    required: ['question', 'difficulty', 'contextSnippet', 'options', 'funFact']
  }
};

async function generateCategoryQuestions(categoryName: string, categoryIcon: string, topicPrompt: string, targetCount: number = 105) {
  console.log(`Starting generation for category: "${categoryName}" (target: ${targetCount})...`);
  const allQuestions: any[] = [];
  const seenQuestions = new Set<string>();

  let batchNum = 1;
  while (allQuestions.length < targetCount) {
    const needed = targetCount - allQuestions.length;
    const requestCount = Math.min(40, needed + 5);
    console.log(`Generating batch ${batchNum} for ${categoryName}, requesting ${requestCount} items (current: ${allQuestions.length}/${targetCount})...`);

    const prompt = `Generate ${requestCount} completely UNIQUE, historically accurate, authentic, and high-quality Multiple Choice Questions (MCQs) for the quiz category "${categoryName}".
Topic domain & focus: ${topicPrompt}

Existing questions already created in this category (DO NOT DUPLICATE ANY OF THESE OR SIMILAR TOPICS):
${Array.from(seenQuestions).slice(-30).map(q => `- ${q}`).join('\n')}

Requirements for EACH question:
1. Question must be distinct, factual, well-researched, engaging, and clear.
2. Must have 4 options: exactly ONE option with isCorrect: true, and THREE with isCorrect: false.
3. Option IDs must be "A", "B", "C", "D".
4. Provide a rich, informative explanation for why the option is correct or incorrect.
5. Provide a short contextSnippet and an interesting funFact.
6. Assign difficulty as 'Foundation', 'Intermediate', or 'Scholar'.
7. Absolutely zero placeholder text, generic questions, or repetition.`;

    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3.7-flash',
        contents: prompt,
        config: {
          responseMimeType: 'application/json',
          responseSchema: mcqSchema,
          temperature: 0.7,
        }
      });

      const parsed = JSON.parse(response.text || '[]');
      let addedInBatch = 0;
      for (const item of parsed) {
        if (!item.question || seenQuestions.has(item.question.trim().toLowerCase())) continue;
        if (!item.options || item.options.length !== 4) continue;
        const correctCount = item.options.filter((o: any) => o.isCorrect).length;
        if (correctCount !== 1) continue;

        seenQuestions.add(item.question.trim().toLowerCase());
        allQuestions.push(item);
        addedInBatch++;
        if (allQuestions.length >= targetCount) break;
      }
      console.log(`[${categoryName}] Batch ${batchNum} added ${addedInBatch} questions. Total now: ${allQuestions.length}/${targetCount}`);
    } catch (err) {
      console.error(`[${categoryName}] Error in batch ${batchNum}:`, err);
      await new Promise(res => setTimeout(res, 2000));
    }
    batchNum++;
  }

  return allQuestions.slice(0, targetCount);
}

export async function run() {
  const categories = [
    {
      name: 'Pakistan Movement',
      icon: 'Flag',
      file: 'src/data/movement.ts',
      varName: 'MOVEMENT_QUESTIONS',
      startId: 101,
      prompt: 'Pakistan Movement (1857 to 1947), Two-Nation Theory, Sir Syed Ahmad Khan, Aligarh Movement, Scientific Society 1864, Simla Deputation 1906, founding of All-India Muslim League in Dhaka, Nawab Salimullah, 1916 Lucknow Pact, 14 Points of Jinnah, 1930 Allahabad Address by Allama Iqbal, Choudhry Rahmat Ali "Now or Never", 1940 Lahore Resolution (A.K. Fazlul Huq, Chaudhry Khaliquzzaman), Cripps Mission 1942, Gandhi-Jinnah talks 1944, Simla Conference 1945, 1946 General Elections sweep, Cabinet Mission 1946, Direct Action Day August 16 1946, 3rd June Plan 1947, Radcliffe Boundary Commission, Referendums in Sylhet and NWFP, Princely states accession (Bahawalpur Nawab Sadiq, Swat Wali, Kalat, Khairpur), founding female stalwarts Fatima Jinnah, Begum Raana Liaquat Ali Khan, Begum Jahanara Shahnawaz, Begum Salma Tassaduq Hussain.'
    },
    {
      name: 'National Icons',
      icon: 'Award',
      file: 'src/data/icons.ts',
      varName: 'ICONS_QUESTIONS',
      startId: 201,
      prompt: 'National Icons, Leaders, Thinkers, Philanthropists, Poets, and Pioneers of Pakistan: Quaid-e-Azam Muhammad Ali Jinnah, Madar-e-Millat Fatima Jinnah, Allama Muhammad Iqbal (Shair-e-Mashriq, Asrar-e-Khudi, Bang-e-Dra, Bal-e-Jibril), Liaquat Ali Khan (Shaheed-e-Millat), Abdul Sattar Edhi & Bilquis Edhi (Edhi Foundation, world\'s largest volunteer ambulance network, cradle baby service), Dr. Ruth Pfau (German physician who spent 50+ years in Pakistan eradicating leprosy with Marie Adelaide Leprosy Centre), Faiz Ahmad Faiz (Lenin Peace Prize, Dast-e-Saba, Subh-e-Azadi, Zindan Nama), Ahmad Faraz, Habib Jalib (revolutionary poet), Hafeez Jullundhri (author of Qaumi Taranah), Ahmed Ghulamali Chagla (composer of national anthem tune), Noor Jehan (Malika-e-Tarannum, 1965 patriotic war songs), Nusrat Fateh Ali Khan (Shahenshah-e-Qawwali, international collaborations), Mehdi Hassan (Shahenshah-e-Ghazal), Abdur Rahman Chughtai (master watercolor painter, stamps), Sadequain (calligraphy murals, Mangla Dam mural), Ismail Gulgee, Arfa Karim (youngest Microsoft Certified Professional at age 9), Malala Yousafzai (Nobel Peace Laureate at age 17), Hakim Mohammed Said (Hamdard Foundation, Madinat al-Hikmah).'
    },
    {
      name: 'Science & Innovation',
      icon: 'Atom',
      file: 'src/data/science.ts',
      varName: 'SCIENCE_QUESTIONS',
      startId: 301,
      prompt: 'Science, Technology, Engineering, Medicine, Space, Nuclear and Innovations in Pakistan: Dr. Abdus Salam (1979 Nobel Laureate in Physics, Electroweak unification, ICTP Trieste founder), Dr. Atta-ur-Rahman (organic chemistry, UNESCO Science Prize, higher education and digital university expansion), SUPARCO (founded 1961 by Dr. Salam, Rehbar-I launch with NASA at Sonmiani 1962, Badr-1 first satellite 1990, PakSAT-1R, ICUBE-Qamr lunar satellite onboard Chang\'e 6 in May 2024), Dr. Salimuzzaman Siddiqui (HEJ Research Institute founder, isolated medicinal alkaloid compounds from Neem tree such as Nimbin and Ajmaline from Rauwolfia serpentina), Tarbela Dam (world\'s largest earth and rock-filled dam by volume on Indus River), Mangla Dam (Jhelum River), Karakoram Highway (KKH / N-35, 8th wonder of the world civil engineering feat connecting Hasan Abdal to Khunjerab Pass), Chagai-I and Chagai-II nuclear tests (Youm-e-Takbeer May 28 1998, Ras Koh Hills Balochistan), PAEC, KRL, SIUT (Sindh Institute of Urology and Transplantation founded by Dr. Adibul Hasan Rizvi providing 100% free lifelong kidney transplants and dialysis with medical bioethics), Shaukat Khanum Memorial Cancer Hospital, Sialkot sports manufacturing innovations (thermo-bonded footballs for FIFA World Cups including Telstar, Al Rihla, Brazuca), NADRA (National Database and Registration Authority, pioneering computerized national identity cards and biometric databases), IT unicorns & startups (Careem co-founded by Mudassir Sheikha).'
    },
    {
      name: 'Culture & Heritage',
      icon: 'BookOpen',
      file: 'src/data/culture.ts',
      varName: 'CULTURE_QUESTIONS',
      startId: 401,
      prompt: 'Culture, Heritage, Archaeology, Ancient Civilizations, Architecture, Languages, Festivals, Cuisine, and World Heritage Sites in Pakistan: Indus Valley Civilization (Mohenjo-daro "Mound of the Dead" in Larkana, Great Bath, Priest-King sculpture, Dancing Girl; Harappa in Sahiwal; Mehrgarh in Balochistan dating to 7000 BCE Neolithic farming), Gandhara civilization (Taxila ancient seat of learning, Dharmarajika Stupa, Sirkap, Jaulian monastery, Buddhist Greco-Buddhist sculpture), Mughal architectural masterpieces (Badshahi Mosque built 1673 by Aurangzeb, Lahore Fort with Sheesh Mahal, Shalamar Gardens, Wazir Khan Mosque in Lahore famed for fresco tiles, Hiran Minar in Sheikhupura, Shah Jahan Mosque in Thatta), Rohtas Fort (built by Sher Shah Suri near Jhelum, UNESCO World Heritage site), Makli Necropolis in Thatta (one of the largest funerary sites in the world with half a million tombs), Takht-i-Bahi Buddhist monastic complex in Mardan, Sufi heritage and shrines (Data Darbar of Hazrat Ali Hujwiri in Lahore, Lal Shahbaz Qalandar in Sehwan Sharif, Shah Abdul Latif Bhittai in Bhit Shah, Baba Farid Ganjshakar in Pakpattan, Hazrat Bulleh Shah in Kasur, Sachal Sarmast in Ranipur, Hazrat Bahauddin Zakariya in Multan), Languages (Urdu national language, Punjabi, Sindhi with Arabic script, Pashto, Balochi, Saraiki, Kashmiri, Shina, Balti, Brahui, Hindko), Traditional sports & festivals (Shandur Polo Festival at 3,700m "roof of the world" between Chitral and Gilgit, Lok Virsa folk festival in Islamabad, Chilam Joshi & Uchal festivals of the Kalash indigenous people in Chitral), Pakistani Truck Art (Phool Patti tradition and vibrant floral motifs), UNESCO Intangible Cultural Heritage list.'
    },
    {
      name: 'Military Gallantry',
      icon: 'Shield',
      file: 'src/data/military.ts',
      varName: 'MILITARY_QUESTIONS',
      startId: 501,
      prompt: 'Military History, Gallantry, Nishan-e-Haider recipients, Historic Battles, Air Combat, and Defense of Pakistan: Nishan-e-Haider (Pakistan\'s highest military gallantry award, established 1957, named after Hazrat Ali): Captain Muhammad Sarwar Shaheed (1948 Kashmir War at Uri, first recipient), Major Tufail Mohammad Shaheed (1958 Lakshmipur East Pakistan), Major Raja Aziz Bhatti Shaheed (1965 Battle of Burki / BRB Canal defending Lahore), Pilot Officer Rashid Minhas Shaheed (1971 PAF T-33 jet, youngest & sole Pakistan Air Force recipient), Major Muhammad Akram Shaheed (1971 Battle of Hilli), Major Shabbir Sharif Shaheed (1971 Sulemanki sector, only individual awarded both Nishan-e-Haider and Sitara-e-Jurat), Sowar Muhammad Hussain Shaheed (1971 Zafarwal / Shakargarh sector, first soldier / Jawan recipient), Lance Naik Muhammad Mahfuz Shaheed (1971 Wagah / Attari sector), Captain Karnal Sher Khan Shaheed (1999 Kargil conflict, Gultari sector / Tiger Hill bravery recognized by enemy commanders), Havildar Lalak Jan Shaheed (1999 Kargil conflict, Northern Light Infantry), Hilal-e-Kashmir recipient Naik Saif Ali Janjua (declared equivalent to Nishan-e-Haider); 1965 War air defense (Squadron Leader Muhammad Mahmood Alam "MM Alam" world record downing 5 Hawker Hunter jets in under 60 seconds over Sargodha), Defense Day (September 6 commemorating 1965 defense of Lahore and Sialkot Chawinda tank battle), Air Force Day (September 7), Navy Day (September 8 commemorating Operation Dwarka by PNS Ghazi and fleet), Siachen Glacier conflict (Operation Meghdoot 1984, highest battlefield in the world at over 20,000 feet), Women in Pakistan Armed Forces (Major General Shahida Malik first female general, Lieutenant General Nigar Johar first female three-star general, Flight Lieutenant Marium Mukhtiar first female fighter pilot martyred in line of duty).'
    },
    {
      name: 'Sports & Global Feats',
      icon: 'Trophy',
      file: 'src/data/sports.ts',
      varName: 'SPORTS_QUESTIONS',
      startId: 601,
      prompt: 'Sports, Athletics, Global Records, and World Feats of Pakistan: Squash dynasty (Jahangir Khan\'s Guinness World Record 555 consecutive match winning streak from 1981 to 1986 and 10 consecutive British Open titles; Jansher Khan winning 8 World Open and 6 British Open titles; Khan dynasty Hashim Khan, Roshan Khan, Azam Khan, Mohibullah Khan); Field Hockey dominance (Pakistan winning 3 Olympic Gold Medals: Rome 1960 defeating India, Mexico City 1968, Los Angeles 1984; 4 Hockey World Cup titles: 1971 Barcelona inaugural, 1978 Buenos Aires, 1982 Bombay, 1994 Sydney; Hockey legends Hassan Sardar, Shahbaz Ahmed Sr. "Maradona of Hockey", Samiullah Khan "Flying Horse", Akhtar Rasool, Islahuddin Siddiqui, Munir Dar); Cricket triumphs & records (1992 ICC Cricket World Cup victory in Melbourne under Imran Khan, 2009 ICC T20 World Cup champions under Younis Khan at Lord\'s, 2017 ICC Champions Trophy victory under Sarfaraz Ahmed against India at The Oval, Wasim Akram "King of Swing" and first bowler to 500 ODI wickets, Waqar Younis reverse swing yorkers, Shoaib Akhtar "Rawalpindi Express" fastest delivery in cricket history at 161.3 km/h in 2003 World Cup, Javed Miandad unforgettable last-ball six in Austral-Asia Cup Final Sharjah 1986, Hanif Mohammad legendary 16-hour marathon 337 vs West Indies, Inzamam-ul-Haq, Babar Azam); Mountaineering & High Altitude (Pakistan home to 5 of the world\'s 14 Eight-Thousanders: K2 / Godwin-Austen 8,611m, Nanga Parbat "Killer Mountain", Gasherbrum I, Broad Peak, Gasherbrum II; legendary climbers Ali Sadpara, Sajid Sadpara, Nazir Sabir, Ashraf Aman, Samina Baig first Pakistani woman to summit Everest and K2, Shehroze Kashif youngest climber to summit K2 and Everest); Snooker & Billiards (Muhammad Yousaf 1994 IBSF World Amateur Champion, Muhammad Asif 3-time IBSF World Champion in 2012, 2019, 2024); Olympic Athletics (Arshad Nadeem historic Olympic Gold Medal at Paris 2024 with monumental Olympic Record javelin throw of 92.97 meters, Pakistan\'s first individual track & field Olympic gold); Wrestling & Boxing (Gama Pehlwan "The Great Gama" Ghulam Mohammad Baksh undefeated 50-year career world champion, Bholu Brothers, Inam Butt World Beach Games double Gold Medalist in wrestling, Syed Hussain Shah 1988 Seoul Olympics boxing Bronze medalist).'
    }
  ];

  // Run all 6 categories in parallel
  await Promise.all(categories.map(async (cat) => {
    try {
      const questions = await generateCategoryQuestions(cat.name, cat.icon, cat.prompt, 105);
      
      const code = `import { QuizQuestion } from '../types';

export const ${cat.varName}: QuizQuestion[] = [
${questions.map((q, idx) => `  {
    id: ${cat.startId + idx},
    category: '${cat.name}',
    categoryIcon: '${cat.icon}',
    difficulty: '${q.difficulty}',
    question: ${JSON.stringify(q.question)},
    contextSnippet: ${JSON.stringify(q.contextSnippet)},
    options: ${JSON.stringify(q.options, null, 6)},
    funFact: ${JSON.stringify(q.funFact)}
  }`).join(',\n')}
];
`;

      fs.writeFileSync(cat.file, code, 'utf8');
      console.log(`[COMPLETED] Saved ${questions.length} unique questions to ${cat.file}`);
    } catch (e) {
      console.error(`Failed category ${cat.name}:`, e);
    }
  }));

  console.log('All 6 categories generated successfully with 105+ unique questions each!');
}

run().catch(console.error);
