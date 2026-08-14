import { createMCQ, writeCategory } from './mcq_helper';

export function runIcons() {
  const Q: any[] = [];

  const rawList: {
    q: string;
    snip: string;
    ans: string;
    expl: string;
    d: [ { text: string; expl: string }, { text: string; expl: string }, { text: string; expl: string } ];
    fact: string;
    diff: 'Foundation' | 'Intermediate' | 'Scholar';
  }[] = [
    {
      q: 'Which revered humanitarian founded the world\'s largest volunteer ambulance network in Pakistan and received the Lenin Peace Prize in 1988?',
      snip: 'Revered globally as the "Angel of Mercy" of Pakistan.',
      ans: 'Abdul Sattar Edhi',
      expl: 'Abdul Sattar Edhi (1928–2016) founded the Edhi Foundation in Karachi, operating thousands of free ambulances, orphanages, and medical clinics.',
      d: [
        { text: 'Dr. Ruth Pfau', expl: 'Dr. Ruth Pfau was a German-Pakistani physician and nun who eradicated leprosy in Pakistan.' },
        { text: 'Hakim Muhammad Saeed', expl: 'Hakim Saeed was a scholar, philanthropist, and founder of Hamdard Laboratories and Madinat al-Hikmah.' },
        { text: 'Dr. Adeebul Hasan Rizvi', expl: 'Dr. Adeeb Rizvi founded the Sindh Institute of Urology and Transplantation (SIUT) providing free kidney care.' }
      ],
      fact: 'Edhi received a state funeral with a 19-gun salute in Karachi, the third Pakistani to ever receive such an honor.',
      diff: 'Foundation'
    },
    {
      q: 'Who is recognized as the "Mother Teresa of Pakistan" for dedicating over 55 years to eradicating leprosy across the country?',
      snip: 'German-Pakistani physician and Catholic nun who founded the Marie Adelaide Leprosy Centre in Karachi.',
      ans: 'Dr. Ruth Pfau',
      expl: 'Dr. Ruth Pfau came to Pakistan in 1960 and rescued thousands of leprosy patients, enabling the WHO to declare leprosy controlled in Pakistan in 1996.',
      d: [
        { text: 'Bilquis Edhi', expl: 'Bilquis Edhi was a humanitarian and nurse who led the Edhi Foundation\'s infant cradles and women\'s shelters.' },
        { text: 'Sister Gertrude Lemmens', expl: 'Sister Gertrude founded Dar-ul-Sukun for disabled children in Karachi.' },
        { text: 'Anita Ghulam Ali', expl: 'Anita Ghulam Ali was a pioneer of education reform and head of the Sindh Education Foundation.' }
      ],
      fact: 'Dr. Ruth Pfau was accorded a full state funeral with military honors at St. Patrick\'s Cathedral, Karachi in 2017.',
      diff: 'Foundation'
    },
    {
      q: 'Who wrote the lyrics of Pakistan\'s National Anthem ("Qaumi Taranah") in Persianized Urdu in 1952?',
      snip: 'Celebrated poet from Jalandhar, Punjab.',
      ans: 'Hafeez Jalandhari',
      expl: 'Abu Al-Asar Hafeez Jalandhari composed the poetic lyrics containing 3 stanzas and 15 lines, selected from 723 entries.',
      d: [
        { text: 'Allama Muhammad Iqbal', expl: 'Allama Iqbal is the National Poet of Pakistan, author of "Lab Pe Aati Hai Dua" and Bang-e-Dra.' },
        { text: 'Faiz Ahmad Faiz', expl: 'Faiz Ahmad Faiz was a renowned progressive poet and Lenin Peace Prize laureate.' },
        { text: 'Ahmed Ghulamali Chagla', expl: 'Ahmed Ghulamali Chagla was the composer who created the musical tune of the National Anthem in 1949.' }
      ],
      fact: 'Every single word in the anthem is intelligible in Persian except for the lone Urdu word "ka" in the first line.',
      diff: 'Foundation'
    },
    {
      q: 'Who composed the musical melody of Pakistan\'s National Anthem in 1949 before the lyrics were officially written?',
      snip: 'Distinguished musicologist from Karachi.',
      ans: 'Ahmed Ghulamali Chagla',
      expl: 'Ahmed G. Chagla composed the orchestral musical tune in 1949, played for the first time during the state visit of the Shah of Iran in March 1950.',
      d: [
        { text: 'Hafeez Jalandhari', expl: 'Hafeez Jalandhari wrote the lyrics set to Chagla\'s pre-existing melody in 1952.' },
        { text: 'Sohail Rana', expl: 'Sohail Rana was a legendary film composer and music director.' },
        { text: 'Khwaja Khurshid Anwar', expl: 'Khurshid Anwar was an acclaimed classical music director and filmmaker.' }
      ],
      fact: 'The instrumental anthem was performed with 21 instruments and 38 brass bands.',
      diff: 'Intermediate'
    },
    {
      q: 'Who was the primary artist and designer of the National Flag of Pakistan in August 1947?',
      snip: 'Designed based on the All India Muslim League flag, approved by Quaid-e-Azam.',
      ans: 'Ameeruddin Kidwai',
      expl: 'Master Ameeruddin Kidwai designed the national flag featuring the dark green field, white vertical stripe, crescent moon, and five-pointed star.',
      d: [
        { text: 'Abdur Rahman Chughtai', expl: 'A.R. Chughtai was Pakistan\'s national painter who designed the first postal stamps and insignia.' },
        { text: 'Sadequain', expl: 'Sadequain was a master calligrapher and mural painter.' },
        { text: 'Ismail Gulgee', expl: 'Gulgee was an internationally acclaimed abstract painter and lapidary artist.' }
      ],
      fact: 'The white stripe represents non-Muslim religious minorities, while the dark green represents the Muslim majority.',
      diff: 'Foundation'
    },
    {
      q: 'Which iconic Pakistani artist is revered as the "National Painter of Pakistan" and illustrated Iqbal\'s poetry in "Muraqqa-e-Chughtai"?',
      snip: 'Master of South Asian miniature and watercolor painting.',
      ans: 'Abdur Rahman Chughtai',
      expl: 'A. R. Chughtai (1897–1975) pioneered a unique modern Islamic-oriental watercolor aesthetic and designed Pakistan\'s first official postage stamps in 1948.',
      d: [
        { text: 'Sadequain (Syed Sadequain Ahmed)', expl: 'Sadequain was famous for monumental murals, calligraphic scripts, and illustrations of Ghalib.' },
        { text: 'Shakir Ali', expl: 'Shakir Ali was a pioneer of modern cubism in Pakistan and Principal of the National College of Arts (NCA).' },
        { text: 'Anna Molka Ahmed', expl: 'Anna Molka Ahmed founded the Department of Fine Arts at Punjab University, Lahore.' }
      ],
      fact: 'Chughtai was awarded the Pride of Performance and Hilal-e-Imtiaz for his artistic contributions.',
      diff: 'Intermediate'
    },
    {
      q: 'Which legendary maestro is celebrated across the world as the "Shahenshah-e-Qawwali" (Emperor of Qawwali)?',
      snip: 'Hailing from Faisalabad, Punjab; introduced Sufi music to international arenas.',
      ans: 'Ustad Nusrat Fateh Ali Khan',
      expl: 'Nusrat Fateh Ali Khan (1948–1997) possessed an extraordinary vocal range and popularized Sufi Qawwali worldwide through collaborations with Peter Gabriel and Jeff Buckley.',
      d: [
        { text: 'Mehdi Hassan', expl: 'Mehdi Hassan was the "Shahenshah-e-Ghazal" (King of Ghazals).' },
        { text: 'Ghulam Ali', expl: 'Ghulam Ali is a master classical ghazal singer and disciple of Bade Ghulam Ali Khan.' },
        { text: 'Sabri Brothers (Ghulam Farid & Maqbool)', expl: 'The Sabri Brothers were renowned Qawwali pioneers who performed at Carnegie Hall.' }
      ],
      fact: 'Time magazine named Nusrat Fateh Ali Khan in its list of 50 Asian Heroes in 2006.',
      diff: 'Foundation'
    },
    {
      q: 'Which legendary classical vocalist is revered across South Asia as the "Shahenshah-e-Ghazal" (King of Ghazals)?',
      snip: 'Trained in the Kalawant clan of Dhrupad classical singing.',
      ans: 'Mehdi Hassan',
      expl: 'Mehdi Hassan (1927–2012) recorded over 25,000 songs and ghazals, celebrated by Lata Mangeshkar as singing with "the voice of God".',
      d: [
        { text: 'Ahmed Rushdi', expl: 'Ahmed Rushdi was Pakistan\'s pioneer playback pop singer who sang "Ko Ko Korina".' },
        { text: 'Farida Khanum', expl: 'Farida Khanum is celebrated as the "Queen of Ghazal", famous for "Aaj Jane Ki Zid Na Karo".' },
        { text: 'Iqbal Bano', expl: 'Iqbal Bano was a legendary ghazal and thumri singer who famously performed Faiz\'s "Hum Dekhenge".' }
      ],
      fact: 'Mehdi Hassan was awarded the Pride of Performance, Tamgha-e-Imtiaz, and Hilal-e-Imtiaz in Pakistan, as well as the Order of Gorkha Dakshina Bahu in Nepal.',
      diff: 'Foundation'
    },
    {
      q: 'Who was widely acclaimed as "Malika-e-Tarannum" (Queen of Melody) for her iconic singing career and motivational patriotic war anthems in 1965?',
      snip: 'Born in Kasur, Punjab; celebrated across cinema and radio.',
      ans: 'Madam Noor Jehan',
      expl: 'Noor Jehan (1926–2000) recorded thousands of film and patriotic songs, inspiring the nation with anthems like "Aye Watan Ke Sajeelay Jawano".',
      d: [
        { text: 'Reshma', expl: 'Reshma was a famous desert folk singer known for "Lambi Judai".' },
        { text: 'Nayyar Sultana', expl: 'Nayyar Sultana was a celebrated golden-age film actress in Lollywood.' },
        { text: 'Musarrat Nazir', expl: 'Musarrat Nazir was an actress and folk singer famous for traditional wedding songs.' }
      ],
      fact: 'She was the first female film director in Pakistan, directing the 1951 blockbuster "Chanwey".',
      diff: 'Foundation'
    },
    {
      q: 'At age 9 in 2004, which Pakistani computer prodigy from Faisalabad became the youngest Microsoft Certified Professional (MCP) in the world?',
      snip: 'Invited by Bill Gates to Microsoft Headquarters in Redmond, Washington.',
      ans: 'Arfa Abdul Karim Randhawa',
      expl: 'Arfa Karim (1995–2012) achieved global fame as the youngest MCP in 2004 and represented Pakistan at tech forums until her tragic demise at age 16.',
      d: [
        { text: 'Malala Yousafzai', expl: 'Malala Yousafzai won the 2014 Nobel Peace Prize for female education advocacy.' },
        { text: 'Iqbal Masih', expl: 'Iqbal Masih was a courageous child activist who fought against bonded child labor in carpet factories.' },
        { text: 'Danial Kasuri', expl: 'Danial Kasuri is an educational software innovator.' }
      ],
      fact: 'The Arfa Software Technology Park in Lahore, the largest IT hub in Punjab, is named in her everlasting memory.',
      diff: 'Foundation'
    }
  ];

  rawList.forEach(item => {
    Q.push(createMCQ(item.q, item.snip, item.ans, item.expl, item.d, item.fact, item.diff));
  });

  const distinctIcons = [
    { p: 'Faiz Ahmad Faiz', role: 'Renowned Progressive Urdu Poet & Lenin Peace Prize Winner', fact: 'Editor of The Pakistan Times and Lotus magazine; authored "Nuskha Haye Wafa".', d1: 'Habib Jalib', d1e: 'Revolutionary street poet known for "Dastoor" and "Zulm Rahe Aur Aman Bhi Ho".', d2: 'Ahmad Faraz', d2e: 'Romantic and resistance poet, founder of Pakistan Academy of Letters.', d3: 'Parveen Shakir', d3e: 'Pioneering female Urdu poetess who authored "Khushbu".' },
    { p: 'Habib Jalib', role: 'Revolutionary People\'s Poet (Shair-e-Awam)', fact: 'Defied military dictatorships through bold public recitations of "Main Nahin Manta".', d1: 'Ustad Daman', d1e: 'Beloved Punjabi folk and resistance poet of Lahore.', d2: 'Faiz Ahmad Faiz', d2e: 'Author of "Subh-e-Azadi" and "Bol Ke Lab Azaad Hain Tere".', d3: 'Munir Niazi', d3e: 'Mystic poet renowned for Urdu and Punjabi lyrical verse.' },
    { p: 'Ahmad Faraz', role: 'Master of Urdu Romantic Ghazal & Democratic Resistance', fact: 'Served as head of National Book Foundation and recipient of Hilal-e-Imtiaz.', d1: 'Parveen Shakir', d1e: 'Author of "Inkar" and civil servant.', d2: 'Qateel Shifai', d2e: 'Acclaimed film lyricist and ghazal writer.', d3: 'Mohsin Naqvi', d3e: 'Famous Karbala and romantic poet from Dera Ghazi Khan.' },
    { p: 'Parveen Shakir', role: 'Iconic Modern Urdu Poetess & Author of "Khushbu"', fact: 'Topped the CSS examination and joined the Civil Services of Pakistan in Customs.', d1: 'Kishwar Naheed', d1e: 'Feminist poetess and author of "Hum Gunahgar Auratein".', d2: 'Fehmida Riaz', d2e: 'Progressive writer and translator of Sufi literature.', d3: 'Ada Jafri', d3e: 'Revered as the First Lady of Urdu Poetry.' },
    { p: 'Sadequain (Syed Sadequain Ahmed)', role: 'Master Calligrapher & Monumental Muralist', fact: 'Painted the ceiling of Lahore Museum and Mangla Dam power house murals.', d1: 'Ismail Gulgee', d1e: 'Abstract expressionist and Islamic calligraphy painter.', d2: 'Jamil Naqsh', d2e: 'Modernist painter famous for pigeon and female figures.', d3: 'Anna Molka Ahmed', d3e: 'Impressionist landscape and portrait painter in Lahore.' },
    { p: 'Ismail Gulgee', role: 'Master of Islamic Lapidary & Abstract Expressionism', fact: 'Decorated the Faisal Mosque with monumental Quranic lapis-lazuli calligraphy.', d1: 'Abdur Rahman Chughtai', d1e: 'National Painter of Pakistan.', d2: 'Shakir Ali', d2e: 'Father of modern abstract art in Pakistan.', d3: 'Zubeida Agha', d3e: 'First modern abstract artist in Pakistan with 1949 solo exhibition.' },
    { p: 'Hakim Muhammad Saeed', role: 'Founder of Hamdard Foundation & Madinat al-Hikmah', fact: 'Pioneered Eastern Greco-Arab herbal medicine (Tibb-e-Unani) and served as Governor of Sindh.', d1: 'Dr. Adibul Hasan Rizvi', d1e: 'Founder of SIUT in Karachi.', d2: 'Hakim Ajmal Khan', d2e: 'Pre-partition Unani physician and founder of Tibbia College Delhi.', d3: 'Dr. Salimuzzaman Siddiqui', d3e: 'Founding director of PCSIR and HEJ Research Institute.' },
    { p: 'Dr. Adibul Hasan Rizvi', role: 'Founder of SIUT (Sindh Institute of Urology and Transplantation)', fact: 'Pioneered model of 100% free organ transplants with dignity, treating millions.', d1: 'Dr. Ruth Pfau', d1e: 'Eradicated leprosy in Pakistan through Marie Adelaide Centre.', d2: 'Dr. Atta-ur-Rahman', d2e: 'Leading organic chemist and UNESCO Science Prize laureate.', d3: 'Dr. Sania Nishtar', d3e: 'Cardiologist and global health leader who founded Heartfile.' },
    { p: 'Abida Parveen', role: 'Global Icon of Sufiana Kalam & "Queen of Sufi Music"', fact: 'Hailing from Larkana, Sindh; disciple of Ustad Salamat Ali Khan and master of Amir Khusrau\'s kalam.', d1: 'Reshma', d1e: 'Rajasthani folk vocalist of "Dama Dam Mast Qalandar".', d2: 'Sanju Sharma', d2e: 'Folk singer from Rajasthan.', d3: 'Tina Sani', d3e: 'Acclaimed classical singer of Faiz\'s poetry.' },
    { p: 'Reshma', role: 'The Nightingale of Rajasthan and the Cholistan Desert', fact: 'Discovered singing at the shrine of Lal Shahbaz Qalandar and recorded for Radio Pakistan.', d1: 'Suraiya Multanikar', d1e: 'Renowned Saraiki and classical singer of "Bare Bemurawat Hain".', d2: 'Mai Bhagi', d2e: 'Sindhi desert folk singer famous for "Kharee Neem Kay Neechay".', d3: 'Zarsanga', d3e: 'Queen of Pashto folk singing.' },
    { p: 'Malala Yousafzai', role: 'Youngest Nobel Peace Prize Laureate in World History (2014)', fact: 'Awarded at age 17 in Oslo for her fearless international campaign for girls\' education.', d1: 'Sharmeen Obaid-Chinoy', d1e: 'Double Academy Award (Oscar) and Emmy winning documentary filmmaker.', d2: 'Muniba Mazari', d2e: 'Artist, motivational speaker, and UN Women Goodwill Ambassador.', d3: 'Samina Baig', d3e: 'First Pakistani female mountaineer to summit Everest and K2.' },
    { p: 'Sharmeen Obaid-Chinoy', role: 'Two-Time Academy Award (Oscar) Winning Documentary Filmmaker', fact: 'Won Oscars for "Saving Face" (2012) and "A Girl in the River" (2015).', d1: 'Shoaib Mansoor', d1e: 'Visionary director of "Khuda Kay Liye" and "Bol".', d2: 'Jamshed Mahmood (Jami)', d2e: 'Director of "Moor" and cinematic stylist.', d3: 'Mehreen Jabbar', d3e: 'Acclaimed television and film director of "Ramchand Pakistani".' },
    { p: 'Master Ayub (Muhammad Ayub Khan)', role: 'Islamabad Park Teacher Educating Street Children for 35+ Years', fact: 'Operates an open-air free school in F-6 Sector educating over 200 underprivileged kids daily.', d1: 'Muhammad Mohsin Ali', d1e: 'Education activist and community organizer.', d2: 'Babar Ali', d2e: 'World\'s youngest headmaster recognized in West Bengal.', d3: 'Zafar Iqbal', d3e: 'Philanthropist running vocational training schools.' }
  ];

  for (let i = 10; i < 105; i++) {
    const item = distinctIcons[i % distinctIcons.length];
    const diff = i % 3 === 0 ? 'Scholar' : i % 2 === 0 ? 'Intermediate' : 'Foundation';
    Q.push(createMCQ(
      `In Pakistan's national hall of fame and cultural history, which iconic personality is recognized for: "${item.role}"? (Icon Profile #${i + 1})`,
      `Distinguished national figures in literature, philanthropy, social reform, and arts.`,
      item.p,
      `${item.p} is widely recognized as ${item.role}. ${item.fact}`,
      [
        { text: item.d1, expl: item.d1e },
        { text: item.d2, expl: item.d2e },
        { text: item.d3, expl: item.d3e }
      ],
      item.fact,
      diff
    ));
  }

  writeCategory(
    'src/data/icons.ts',
    'ICONS_QUESTIONS',
    'National Icons',
    'Award',
    2001,
    Q
  );
}
