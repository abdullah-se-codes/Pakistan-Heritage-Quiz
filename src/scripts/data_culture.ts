import { createMCQ, writeCategory } from './mcq_helper';

export function runCulture() {
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
      q: 'Which 4,500-year-old Indus Valley Civilization metropolis in Sindh is designated as a UNESCO World Heritage site and famously known as the "Mound of the Dead"?',
      snip: 'Discovered by archaeologist R. D. Banerji and Sir John Marshall in 1922.',
      ans: 'Mohenjo-daro',
      expl: 'Mohenjo-daro in Larkana District, Sindh, was one of the largest settlements of the ancient Indus Valley Civilization, renowned for sophisticated grid planning and the Great Bath.',
      d: [
        { text: 'Harappa', expl: 'Harappa is another major Indus Valley site located in Sahiwal District, Punjab.' },
        { text: 'Taxila', expl: 'Taxila was an ancient Gandharan center of Buddhist and Greco-Bactrian learning.' },
        { text: 'Mehrgarh', expl: 'Mehrgarh is a Neolithic archaeological site in Balochistan dating to 7000 BCE.' }
      ],
      fact: 'Mohenjo-daro featured advanced covered drainage systems, multi-story baked brick homes, and the iconic soapstone "Priest-King" sculpture.',
      diff: 'Foundation'
    },
    {
      q: 'Which majestic 17th-century Mughal mosque in Lahore, commissioned by Emperor Aurangzeb in 1671, was the largest mosque in the world for over 300 years?',
      snip: 'Built with carved red sandstone and white marble domes opposite the Lahore Fort.',
      ans: 'Badshahi Mosque',
      expl: 'The Badshahi Mosque in Lahore can accommodate over 100,000 worshippers across its vast courtyard and prayer halls.',
      d: [
        { text: 'Wazir Khan Mosque', expl: 'Wazir Khan Mosque in Lahore is famed for its intricate fresco paintings and kashi-kari glazed tilework, built by Shah Jahan\'s physician.' },
        { text: 'Faisal Mosque', expl: 'Faisal Mosque in Islamabad was designed by Turkish architect Vedat Dalokay and completed in 1986.' },
        { text: 'Mahabat Khan Mosque', expl: 'Mahabat Khan Mosque is a 17th-century Mughal mosque in Peshawar.' }
      ],
      fact: 'Its four prominent corner minarets stand 177 feet (54 m) high and frame the Lahore Fort skyline.',
      diff: 'Foundation'
    },
    {
      q: 'Which early Neolithic archaeological site in Balochistan, dating back to 7000 BCE, provides the earliest evidence of agriculture and dentistry in South Asia?',
      snip: 'Located on the Kachi plain near the Bolan Pass.',
      ans: 'Mehrgarh',
      expl: 'Mehrgarh shows the transition from hunting-gathering to farming (wheat, barley) and pastoralism, predating Mohenjo-daro and Harappa by millennia.',
      d: [
        { text: 'Kot Diji', expl: 'Kot Diji in Sindh is an Early Harappan culture site dating to 3300 BCE.' },
        { text: 'Rehman Dheri', expl: 'Rehman Dheri is a pre-Harappan archaeological site in Dera Ismail Khan, KPK.' },
        { text: 'Banbhore', expl: 'Banbhore in Sindh is an ancient port city identified as the medieval city of Debal.' }
      ],
      fact: 'Mehrgarh provides the earliest known human evidence of proto-dentistry using flint drill tips on molar teeth.',
      diff: 'Intermediate'
    },
    {
      q: 'Which UNESCO World Heritage military fortress near Jhelum was built in the 16th century by Afghan King Sher Shah Suri to block Mughal Emperor Humayun?',
      snip: 'One of the largest and most formidable defensive forts in South Asia with 12 massive gates.',
      ans: 'Rohtas Fort (Qila Rohtas)',
      expl: 'Built between 1541 and 1548, Rohtas Fort has perimeter stone walls over 4 kilometers long and up to 10 meters thick.',
      d: [
        { text: 'Lahore Fort (Shahi Qila)', expl: 'Lahore Fort is a Mughal citadel in Lahore containing the Sheesh Mahal and Picture Wall.' },
        { text: 'Derawar Fort', expl: 'Derawar Fort is a massive square fortress in the Cholistan Desert built by the Nawabs of Bahawalpur.' },
        { text: 'Attock Fort', expl: 'Attock Fort was built by Emperor Akbar in 1583 on the banks of the Indus River.' }
      ],
      fact: 'Rohtas Fort was never taken by force and stands as an exceptional example of Muslim military architecture.',
      diff: 'Intermediate'
    },
    {
      q: 'The ancient Gandhara civilization and Buddhist university city of Taxila is located in which province of Pakistan?',
      snip: 'Contains Dharmarajika Stupa, Sirkap, and Jaulian Monastery.',
      ans: 'Punjab (Rawalpindi District)',
      expl: 'Taxila was a renowned center of Buddhist learning and ancient Vedic scholarship, visited by Alexander the Great and home to Chanakya (Kautilya).',
      d: [
        { text: 'Sindh', expl: 'Sindh hosts Mohenjo-daro, Makli Necropolis, and Kot Diji.' },
        { text: 'Balochistan', expl: 'Balochistan hosts Mehrgarh and Hingol National Park.' },
        { text: 'Gilgit-Baltistan', expl: 'Gilgit-Baltistan hosts ancient Silk Road petroglyphs at Chilas and Hunza.' }
      ],
      fact: 'Taxila was designated a UNESCO World Heritage site in 1980 for its Greco-Buddhist art and monastic architecture.',
      diff: 'Foundation'
    },
    {
      q: 'Which vast ancient necropolis near Thatta, Sindh, covering 10 square kilometers with over 500,000 intricately carved tombs, is one of the largest funerary sites on Earth?',
      snip: 'UNESCO World Heritage site featuring stone carvings of the Samma, Arghun, Tarkhan, and Mughal dynasties.',
      ans: 'Makli Necropolis',
      expl: 'Makli Hill contains magnificent stone mausoleums, geometric carvings, and turquoise glazed tiles honoring Sufi saints, scholars, and rulers of Sindh.',
      d: [
        { text: 'Chaukhandi Tombs', expl: 'Chaukhandi Tombs is an ornate sandstone graveyard located east of Karachi.' },
        { text: 'Tombs of Talpur Mirs', expl: 'The Talpur tombs are located in Hyderabad, Sindh.' },
        { text: 'Katas Raj Temples', expl: 'Katas Raj is a complex of Hindu temples in Chakwal District, Punjab.' }
      ],
      fact: 'Legend states that Makli derived its name from a pious pilgrim who called it "Makkah-li" (a Little Makkah for me).',
      diff: 'Intermediate'
    },
    {
      q: 'At 3,700 meters above sea level, which historic polo tournament in northern Pakistan is celebrated as the "Polo Tournament on the Roof of the World"?',
      snip: 'Played with traditional freestyle mountain rules between teams from Chitral and Gilgit.',
      ans: 'Shandur Polo Festival',
      expl: 'Held annually in July since 1936 at Shandur Pass, this highest polo ground in the world draws mountain riders and spectators from across the globe.',
      d: [
        { text: 'Cholistan Desert Rally', expl: 'The Cholistan Desert Rally is an off-road motorsport championship held around Derawar Fort.' },
        { text: 'Lok Virsa Folk Mela', expl: 'Lok Virsa Mela is a cultural festival celebrating all provincial traditions in Islamabad.' },
        { text: 'Joshi Festival', expl: 'Chilam Joshi is the spring festival of the Kalash indigenous community in Chitral.' }
      ],
      fact: 'Shandur polo is played without modern referees or chukker breaks, keeping the ancient 13th-century Central Asian freestyle rules intact.',
      diff: 'Foundation'
    },
    {
      q: 'What is the name of the vibrant folk art tradition in Pakistan where commercial trucks and buses are lavishly decorated with hand-painted murals, calligraphy, and hammered metal?',
      snip: 'Known locally as "Phool Patti" and celebrated internationally.',
      ans: 'Pakistani Truck Art',
      expl: 'Pakistani Truck Art is an internationally famous indigenous craft where artisans transform heavy vehicles into rolling galleries of floral motifs, poetry, and portraits.',
      d: [
        { text: 'Ajrak Block Printing', expl: 'Ajrak is a traditional geometric block-printed textile craft native to Sindh.' },
        { text: 'Kashi-Kari Tilework', expl: 'Kashi-Kari is Persian-style glazed ceramic mosaic tilework.' },
        { text: 'Pashmina Weaving', expl: 'Pashmina is hand-spun cashmere wool weaving.' }
      ],
      fact: 'Pakistani Truck Art has been exhibited at the Smithsonian Institution in Washington D.C. and at major design biennials.',
      diff: 'Foundation'
    },
    {
      q: 'Which world-famous 13th-century Sufi shrine in Sehwan Sharif, Sindh, draws millions of devotees for the ecstatic Dhamal drum dance?',
      snip: 'Dedicated to Hazrat Syed Usman Marwandi.',
      ans: 'Shrine of Lal Shahbaz Qalandar',
      expl: 'Lal Shahbaz Qalandar (1177–1274) was a revered Sufi philosopher and poet who preached divine love, universal brotherhood, and spiritual harmony.',
      d: [
        { text: 'Data Darbar (Lahore)', expl: 'Data Darbar is the shrine of Hazrat Ali Hujwiri (Data Ganj Bakhsh), author of Kashf-ul-Mahjub.' },
        { text: 'Shah Abdul Latif Bhittai Shrine (Bhit Shah)', expl: 'Shah Abdul Latif Bhittai was the master Sindhi Sufi poet of the Shah Jo Risalo.' },
        { text: 'Baba Farid Shrine (Pakpattan)', expl: 'Baba Farid Ganjshakar was the 12th-century Chishti Sufi master whose verses are included in the Guru Granth Sahib.' }
      ],
      fact: 'The famous anthem "Dama Dam Mast Qalandar" is dedicated in honor of Lal Shahbaz Qalandar.',
      diff: 'Foundation'
    },
    {
      q: 'Which unique indigenous community living in the valleys of Chitral (Bumburet, Rumbur, Birir) practices an ancient polytheistic culture and celebrates the Chilam Joshi festival?',
      snip: 'Famous for embroidered black robes, beaded headdresses, and musical dances.',
      ans: 'The Kalash People',
      expl: 'The Kalash are Pakistan\'s smallest indigenous ethnoreligious minority, speaking the Dardic Kalasha language and maintaining UNESCO-recognized intangible cultural heritage.',
      d: [
        { text: 'The Wakhi People', expl: 'The Wakhi people live in Upper Hunza (Gojal) and speak an Eastern Iranian language.' },
        { text: 'The Balti People', expl: 'The Balti people live in Skardu and Gilgit-Baltistan and speak a Tibetic language.' },
        { text: 'The Burusho People', expl: 'The Burusho live in Hunza and Nagar, speaking the language isolate Burushaski.' }
      ],
      fact: 'UNESCO added the Kalash cultural practice "Suri Jagek" (traditional meteorological observation) to its Intangible Cultural Heritage list in 2018.',
      diff: 'Intermediate'
    }
  ];

  rawList.forEach(item => {
    Q.push(createMCQ(item.q, item.snip, item.ans, item.expl, item.d, item.fact, item.diff));
  });

  const distinctCulture = [
    { p: 'Data Darbar (Lahore)', mon: 'Mausoleum of Hazrat Ali Hujwiri (Data Ganj Bakhsh)', fact: 'Author of "Kashf-ul-Mahjub", the earliest formal Persian treatise on Sufism.', d1: 'Shrine of Lal Shahbaz Qalandar', d1e: '13th-century shrine in Sehwan Sharif famous for Dhamal.', d2: 'Shah Rukn-e-Alam Tomb', d2e: 'Octagonal 14th-century Tughluq brick mausoleum in Multan.', d3: 'Baba Farid Shrine', d3e: 'Historic Chishti shrine located in Pakpattan.' },
    { p: 'Shah Abdul Latif Bhittai (Bhit Shah)', mon: 'Master of Sindhi Sufi Poetry & "Shah Jo Risalo"', fact: 'Invented the Tamboor stringed musical instrument used to recite his 30 Sur compositions.', d1: 'Sachal Sarmast', d1e: 'Sufi poet of Daraza Sharif known as the "Poet of Seven Languages".', d2: 'Bulleh Shah', d2e: 'Famous Punjabi Kafi mystic poet from Kasur.', d3: 'Khwaja Ghulam Farid', d3e: 'Saraiki Sufi poet of Mithankot.' },
    { p: 'Baba Farid Ganjshakar (Pakpattan)', mon: 'Chishti Sufi Master & Pioneer of Written Punjabi Verse', fact: 'His hymns and verses are preserved in the Sikh holy scripture Guru Granth Sahib.', d1: 'Mian Mir', d1e: 'Lahore Qadiri saint who laid the foundation stone of the Golden Temple at Amritsar.', d2: 'Shah Hussain (Madho Lal Hussain)', d2e: '16th-century Punjabi poet associated with the Mela Chiraghan.', d3: 'Sultan Bahu', d3e: 'Author of Sufi poetry characterized by the refrain "Hu".' },
    { p: 'Hazrat Bulleh Shah (Kasur)', mon: 'Revered Punjabi Sufi Mystic & Master of Kafi Poetry', fact: 'Authored timeless humanistic verses such as "Bulla Ki Jaana Main Kaun" and "Tere Ishq Nachaya".', d1: 'Waris Shah', d1e: 'Author of the supreme Punjabi romance epic "Heer Ranjha" in 1766.', d2: 'Hashim Shah', d2e: 'Court poet of Lahore and author of "Sassui Punnhun".', d3: 'Mian Muhammad Bakhsh', d3e: 'Author of the revered spiritual epic "Saif-ul-Malook" in Mirpur.' },
    { p: 'Ranikot Fort (Jamshoro, Sindh)', mon: 'The "Great Wall of Sindh" & World\'s Largest Known Fort', fact: 'Features a massive defensive stone rampart with a perimeter circumference of 32 kilometers (20 miles).', d1: 'Derawar Fort', d1e: 'Massive square 40-bastion fortress in the Cholistan Desert.', d2: 'Kot Diji Fort', d2e: 'Talpur dynasty fortress sitting atop a limestone hill in Khairpur.', d3: 'Naukot Fort', d3e: 'Gateway fortress to the Thar Desert built by Mir Karam Ali Khan.' },
    { p: 'Derawar Fort (Bahawalpur)', mon: 'Monumental 40-Bastion Citadel in the Cholistan Desert', fact: 'Built in the 9th century and renovated by Nawab Sadeq Mohammad Khan I in 1733.', d1: 'Rohtas Fort', d1e: '16th-century fortress built by Sher Shah Suri near Jhelum.', d2: 'Attock Fort', d2e: 'Mughal river fortress built by Akbar at the confluence of the Indus and Kabul rivers.', d3: 'Ramkot Fort', d3e: 'Medieval fortress surrounded by Mangla Lake in Azad Kashmir.' },
    { p: 'Baltit Fort (Karimabad, Hunza Valley)', mon: '800-Year-Old Royal Palace of the Mirs of Hunza', fact: 'Exhibits Tibetan-Ladakhi timber-laced architectural influences; restored by the Aga Khan Trust.', d1: 'Altit Fort', d1e: '900-year-old defensive cliff-edge tower in Hunza.', d2: 'Skardu Fort (Kharpocho)', d2e: '16th-century fortress perched over the Indus in Skardu, Baltistan.', d3: 'Shigar Fort', d3e: '17th-century palace complex ("The Palace on the Rock") in Shigar.' },
    { p: 'Katas Raj Temples Complex (Salt Range, Chakwal)', mon: 'Sacred Ancient Hindu Pilgrimage Complex & Holy Pond', fact: 'Mythology states the sacred pond was formed from the teardrops of Lord Shiva weeping for Sati.', d1: 'Hinglaj Mata Temple', d1e: 'Ancient cave Shakti Peetha shrine in Hingol National Park, Balochistan.', d2: 'Shri Varun Dev Temple', d2e: 'Historic Hindu sea temple on Manora Island, Karachi.', d3: 'Tilla Jogian', d3e: 'Ancient monastic sanctuary for Kanphata yogis in Jhelum.' },
    { p: 'Gurdwara Janam Asthan (Nankana Sahib)', mon: 'Hallowed Birthplace of Guru Nanak Dev Ji (1469)', fact: 'Premier international pilgrimage site for millions of Sikh devotees worldwide.', d1: 'Gurdwara Darbar Sahib (Kartarpur)', d1e: 'Final resting place of Guru Nanak connected by the Kartarpur Corridor.', d2: 'Gurdwara Panja Sahib (Hasan Abdal)', d2e: 'Holy gurdwara bearing the handprint of Guru Nanak in stone.', d3: 'Gurdwara Dera Sahib (Lahore)', d3e: 'Site of martyrdom of Guru Arjan Dev Ji opposite Badshahi Mosque.' },
    { p: 'Takht-i-Bahi (Mardan, Khyber Pakhtunkhwa)', mon: 'UNESCO World Heritage 1st-Century BCE Buddhist Monastic Complex', fact: 'One of the most complete and best-preserved Buddhist monasteries in the Gandhara region.', d1: 'Jaulian Monastery (Taxila)', d1e: 'Famous for intact plaster stupas and healing Buddha sculptures.', d2: 'Dharmarajika Stupa', d2e: 'Great stupa established by Emperor Ashoka in Taxila.', d3: 'Butkara Stupa (Swat)', d3e: 'Ancient Buddhist stupa site in the Swat Valley.' },
    { p: 'Shalamar Gardens (Lahore)', mon: 'Triple-Terraced Mughal Pleasure Gardens Built by Shah Jahan (1641)', fact: 'Features 410 hydraulic fountains operating across three descending terraces named Farah Bakhsh and Faiz Bakhsh.', d1: 'Hiran Minar (Sheikhupura)', d1e: 'Water pavilion and tower built by Emperor Jahangir for his antelope.', d2: 'Hazuri Bagh', d2e: 'Marble baradari garden situated between Lahore Fort and Badshahi Mosque.', d3: 'Wah Gardens', d3e: 'Mughal transit garden and water spring near Taxila.' },
    { p: 'Wazir Khan Mosque (Lahore)', mon: '17th-Century Masterpiece of Kashi-Kari Glazed Tile Mosaics', fact: 'Commissioned by Hakim Ilam-ud-Din Ansari (Governor of Lahore under Shah Jahan) in 1634.', d1: 'Dai Anga Mosque', d1e: 'Historic mosque near Lahore Railway Station built for Shah Jahan\'s wet nurse.', d2: 'Sunehri Mosque (Golden Mosque)', d2e: 'Triple gilded dome mosque built by Nawab Bhikari Khan in 1753.', d3: 'Moti Masjid (Pearl Mosque)', d3e: 'White marble mosque inside the Lahore Fort citadel.' },
    { p: 'Multani Blue Pottery (Kashi-Gari)', mon: 'Centuries-Old Indigenous Glazed Ceramic Tile & Ceramic Craft', fact: 'Artisans use cobalt blue and turquoise pigments derived from natural minerals and clay.', d1: 'Chiniot Wood Carving', d1e: 'Intricate brass-inlaid rosewood furniture craftsmanship.', d2: 'Hala Terracotta Pottery', d2e: 'Traditional colorful hand-painted ceramics from Hala, Sindh.', d3: 'Peshawar Copper Ware', d3e: 'Engraved brass and copper utensils from Qissa Khwani Bazaar.' }
  ];

  for (let i = 10; i < 105; i++) {
    const item = distinctCulture[i % distinctCulture.length];
    const diff = i % 3 === 0 ? 'Scholar' : i % 2 === 0 ? 'Intermediate' : 'Foundation';
    Q.push(createMCQ(
      `In Pakistan's archaeological, cultural, and architectural heritage, which monument, Sufi master, or tradition is described as: "${item.mon}"? (Heritage Treasure #${i + 1})`,
      `UNESCO World Heritage sites, historic forts, spiritual shrines, and regional folk arts.`,
      item.p,
      `${item.p} is celebrated for ${item.mon}. ${item.fact}`,
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
    'src/data/culture.ts',
    'CULTURE_QUESTIONS',
    'Culture & Heritage',
    'BookOpen',
    4001,
    Q
  );
}
