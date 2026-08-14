import { createMCQ, writeCategory } from './mcq_helper';

export function runScience() {
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
      q: 'Who is Pakistan\'s first Nobel Laureate, awarded the 1979 Nobel Prize in Physics for electroweak unification?',
      snip: 'He shared the Nobel Prize with Sheldon Glashow and Steven Weinberg.',
      ans: 'Dr. Abdus Salam',
      expl: 'Dr. Abdus Salam formulated the electroweak theory combining electromagnetic and weak nuclear forces, predicting the W and Z bosons and Higgs boson.',
      d: [
        { text: 'Dr. Atta-ur-Rahman', expl: 'Dr. Atta-ur-Rahman is a world-renowned organic chemist and UNESCO Science Prize laureate.' },
        { text: 'Dr. Salimuzzaman Siddiqui', expl: 'Dr. Salimuzzaman Siddiqui was a pioneering natural products chemist who extracted medicinal compounds from the Neem tree.' },
        { text: 'Dr. Ishfaq Ahmad', expl: 'Dr. Ishfaq Ahmad was a senior nuclear physicist and former chairman of the Pakistan Atomic Energy Commission (PAEC).' }
      ],
      fact: 'Dr. Salam established the International Centre for Theoretical Physics (ICTP) in Trieste, Italy, to train scientists from developing countries.',
      diff: 'Foundation'
    },
    {
      q: 'What is the name of Pakistan\'s national space agency established in September 1961 by Dr. Abdus Salam?',
      snip: 'One of the first national space research organizations formed in Asia.',
      ans: 'SUPARCO (Space and Upper Atmosphere Research Commission)',
      expl: 'SUPARCO was established in 1961 and launched Pakistan\'s first sounding rocket Rehbar-I in June 1962 from Sonmiani.',
      d: [
        { text: 'PAEC (Pakistan Atomic Energy Commission)', expl: 'PAEC oversees civil and nuclear technology research and nuclear power plants.' },
        { text: 'NESCOM (National Engineering & Scientific Commission)', expl: 'NESCOM is an aerospace and defense engineering organization.' },
        { text: 'KRL (Khan Research Laboratories)', expl: 'KRL is an engineering and uranium enrichment research institute in Kahuta.' }
      ],
      fact: 'Pakistan became the third country in Asia (after Israel and Japan) and tenth in the world to launch a rocket into upper space.',
      diff: 'Intermediate'
    },
    {
      q: 'Which historic lunar cube satellite of Pakistan was launched to orbit the Moon onboard the Chang\'e 6 mission in May 2024?',
      snip: 'Developed by IST (Institute of Space Technology) and SUPARCO.',
      ans: 'ICUBE-Qamr (ICUBE-Q)',
      expl: 'ICUBE-Qamr successfully reached lunar orbit on May 8, 2024, taking high-resolution imagery of the Moon and Earth, marking Pakistan\'s first deep space mission.',
      d: [
        { text: 'Badr-1', expl: 'Badr-1 was Pakistan\'s first indigenous low-Earth orbit satellite launched in 1990.' },
        { text: 'PakSAT-1R', expl: 'PakSAT-1R is a geostationary communications satellite launched in 2011.' },
        { text: 'PRSS-1', expl: 'PRSS-1 is Pakistan\'s remote sensing satellite launched into low Earth orbit in 2018.' }
      ],
      fact: 'ICUBE-Q carried two optical cameras weighing just under 7 kilograms.',
      diff: 'Intermediate'
    },
    {
      q: 'On which date does Pakistan annually celebrate "Youm-e-Takbeer" to commemorate its successful nuclear tests in 1998 in the Ras Koh Hills?',
      snip: 'Conducted under code names Chagai-I and Chagai-II in Balochistan.',
      ans: 'May 28',
      expl: 'Pakistan successfully tested five underground nuclear devices on May 28, 1998, in the Chagai Hills, becoming the 7th declared nuclear-armed nation in the world.',
      d: [
        { text: 'March 23', expl: 'March 23 is Pakistan Day celebrating the 1940 Lahore Resolution.' },
        { text: 'September 6', expl: 'September 6 is Defense Day commemorating the 1965 War.' },
        { text: 'August 14', expl: 'August 14 is National Independence Day.' }
      ],
      fact: 'Pakistan is the first and only Muslim-majority nation to possess nuclear deterrent capability.',
      diff: 'Foundation'
    },
    {
      q: 'Which civil engineering marvel in Pakistan is recognized as the world\'s largest earth-and-rock-filled dam by structural reservoir volume?',
      snip: 'Located on the mighty Indus River in Khyber Pakhtunkhwa.',
      ans: 'Tarbela Dam',
      expl: 'Completed in 1976 on the Indus River, Tarbela Dam is the world\'s largest earth-filled dam with a structural volume of over 106 million cubic meters.',
      d: [
        { text: 'Mangla Dam', expl: 'Mangla Dam is the world\'s 12th largest dam located on the Jhelum River in Azad Kashmir.' },
        { text: 'Warsak Dam', expl: 'Warsak Dam is a mass concrete gravity dam on the Kabul River near Peshawar.' },
        { text: 'Diamer-Bhasha Dam', expl: 'Diamer-Bhasha Dam is a major concrete gravity dam currently under construction on the Indus River.' }
      ],
      fact: 'Tarbela generates over 4,888 MW of clean hydroelectric power for Pakistan\'s national grid.',
      diff: 'Foundation'
    },
    {
      q: 'The Karakoram Highway (KKH / N-35), often called the "Eighth Wonder of the World", connects Pakistan to China across which mountain pass?',
      snip: 'The highest paved international border crossing in the world at 4,693 meters (15,397 ft).',
      ans: 'Khunjerab Pass',
      expl: 'The Karakoram Highway spans 1,300 km from Hasan Abdal to Kashgar (China), crossing through the Karakoram Range via Khunjerab Pass.',
      d: [
        { text: 'Khyber Pass', expl: 'Khyber Pass connects Pakistan with Afghanistan through the Spin Ghar mountains.' },
        { text: 'Bolan Pass', expl: 'Bolan Pass is a mountain pass in Balochistan connecting Sibi to Quetta.' },
        { text: 'Babusar Pass', expl: 'Babusar Pass connects the Kaghan Valley with Chilas in Gilgit-Baltistan.' }
      ],
      fact: 'Over 1,000 Pakistani and Chinese engineers and workers gave their lives during the arduous construction between 1959 and 1979.',
      diff: 'Intermediate'
    },
    {
      q: 'Which prominent Pakistani chemist isolated medicinal alkaloid compounds (Nimbin, Nimbidin) from the Neem tree and founded the HEJ Research Institute?',
      snip: 'A founding figure of scientific research institutions in Pakistan.',
      ans: 'Dr. Salimuzzaman Siddiqui',
      expl: 'Dr. Salimuzzaman Siddiqui (1897–1994) was a pioneer of natural product chemistry, discovering anti-arrhythmic and antibacterial active compounds in indigenous flora.',
      d: [
        { text: 'Dr. Atta-ur-Rahman', expl: 'Dr. Atta-ur-Rahman was his student and successor who expanded the HEJ Research Institute into a world-class center.' },
        { text: 'Dr. I. H. Usmani', expl: 'Dr. I. H. Usmani was the visionary chairman of PAEC who set up KANUPP and PINSTECH.' },
        { text: 'Dr. Raziuddin Siddiqui', expl: 'Dr. Raziuddin Siddiqui was a mathematical physicist and vice-chancellor who worked on quantum mechanics.' }
      ],
      fact: 'Dr. Siddiqui was also an accomplished painter, calligrapher, and art critic.',
      diff: 'Scholar'
    },
    {
      q: 'What is the name of Pakistan\'s first commercial nuclear power plant commissioned in 1972 in Karachi with Canadian assistance?',
      snip: 'Located on the Arabian Sea coast west of Karachi.',
      ans: 'KANUPP (Karachi Nuclear Power Complex)',
      expl: 'KANUPP-1 was a CANDU pressurized heavy water reactor inaugurated in November 1972, providing decades of safe baseload electricity to Karachi.',
      d: [
        { text: 'CHASNUPP (Chashma Nuclear Power Plant)', expl: 'CHASNUPP is located in Mianwali, Punjab, operating four PWR units built with Chinese collaboration.' },
        { text: 'PINSTECH', expl: 'PINSTECH in Nilore, Islamabad is a research institute operating the PARR-1 research reactor.' },
        { text: 'Muzaffargarh Power Complex', expl: 'Muzaffargarh is a thermal power station, not a nuclear plant.' }
      ],
      fact: 'Pakistan has operated civil nuclear power plants under IAEA safeguards continuously for over 50 years with an unblemished safety record.',
      diff: 'Intermediate'
    },
    {
      q: 'Which city in Pakistan produces over 70% of the world\'s hand-stitched and thermo-bonded match footballs, including official FIFA World Cup balls?',
      snip: 'Global manufacturing powerhouse for sports goods and precision surgical instruments.',
      ans: 'Sialkot',
      expl: 'Sialkot produces millions of FIFA-certified match balls (including Telstar 18, Al Rihla, Brazuca) and manufactures over 80% of the world\'s stainless surgical instruments.',
      d: [
        { text: 'Faisalabad', expl: 'Faisalabad is Pakistan\'s textile capital ("Manchester of Pakistan").' },
        { text: 'Gujranwala', expl: 'Gujranwala is famous for ceramics, sanitary ware, and heavy engineering.' },
        { text: 'Wazirabad', expl: 'Wazirabad is renowned for cutlery, knives, and blade manufacturing.' }
      ],
      fact: 'Forward Sports in Sialkot engineered the thermo-bonded polyurethane technology used in multiple FIFA World Cup finals.',
      diff: 'Foundation'
    },
    {
      q: 'What is NADRA in Pakistan globally acclaimed for pioneering in public sector identity technology?',
      snip: 'Operates one of the world\'s largest and most sophisticated multi-biometric databases.',
      ans: 'Automated Multi-Biometric Smart CNIC & Digital Civil Registry Systems',
      expl: 'NADRA (National Database and Registration Authority) operates computerized identity and biometric verification systems used for banking, passports, and voting.',
      d: [
        { text: 'Satellite rocket launch boosters', expl: 'Space propulsion is managed by SUPARCO.' },
        { text: 'Earthquake early warning sirens', expl: 'Seismic monitoring is conducted by PMD (Pakistan Meteorological Department).' },
        { text: 'Hydroelectric turbine blades', expl: 'Hydropower equipment is managed by WAPDA.' }
      ],
      fact: 'NADRA has exported civil registration and biometric ID systems to multiple countries in Africa and South Asia.',
      diff: 'Intermediate'
    }
  ];

  rawList.forEach(item => {
    Q.push(createMCQ(item.q, item.snip, item.ans, item.expl, item.d, item.fact, item.diff));
  });

  const distinctScience = [
    { p: 'Dr. Atta-ur-Rahman', field: 'Organic Chemistry & UNESCO Science Prize', fact: 'Published over 1,200 research articles and 340 books in structural organic chemistry.', d1: 'Dr. Salimuzzaman Siddiqui', d1e: 'Pioneer who isolated active compounds from Neem.', d2: 'Dr. Samar Mubarakmand', d2e: 'Nuclear physicist who headed the diagnostic tests in 1998.', d3: 'Dr. Abdul Qadeer Khan', d3e: 'Metallurgical engineer who founded KRL Kahuta.' },
    { p: 'Badr-1', field: 'Pakistan\'s First Indigenous Low-Earth Orbit Satellite (1990)', fact: 'Launched from Xichang Satellite Launch Center on July 16, 1990.', d1: 'Rehbar-I', d1e: 'First two-stage sounding rocket launched from Sonmiani in 1962.', d2: 'PakSAT-1R', d2e: 'Communications satellite launched in 2011 to 38 degrees East.', d3: 'ICUBE-Qamr', d3e: 'Pakistan\'s 2024 lunar orbiter cube satellite.' },
    { p: 'Rehbar-I', field: 'First Sounding Rocket Launched by SUPARCO (1962)', fact: 'Carried sodium vapor payload to study upper atmospheric wind shears at 130 km altitude.', d1: 'Shaheen-I', d1e: 'Short-range solid-fueled ballistic missile.', d2: 'Ghauri-I', d2e: 'Liquid-fueled ballistic missile developed by KRL.', d3: 'Hatf-I', d3e: 'Tactical short-range artillery rocket.' },
    { p: 'PINSTECH (Nilore, Islamabad)', field: 'Pakistan Institute of Nuclear Science and Technology', fact: 'Houses the 10 MW Pakistan Atomic Research Reactor-1 (PARR-1) and produces medical isotopes.', d1: 'KANUPP', d1e: 'Commercial nuclear power plant complex in Karachi.', d2: 'CHASNUPP', d2e: 'Commercial pressurized water reactor complex in Chashma, Punjab.', d3: 'NESCOM', d3e: 'National defense and aerospace engineering commission.' },
    { p: 'Lowari Tunnel', field: '10.4 km All-Weather Highway Tunnel Connecting Dir and Chitral', fact: 'Eliminated hazardous winter isolation over the 10,230-foot Lowari Pass.', d1: 'Kohat Tunnel', d1e: '1.9 km tunnel on N-55 Indus Highway constructed with Japanese assistance.', d2: 'Kojak Tunnel', d2e: 'Historic railway tunnel on the Chaman border in Balochistan.', d3: 'Attabad Lake Tunnels', d3e: 'Five realignment tunnels along the Karakoram Highway around Attabad Lake.' },
    { p: 'Ghazi-Barotha Hydropower Project', field: '1,450 MW Power Channel on the Indus River', fact: 'Features the world\'s largest concrete-lined power water channel spanning 52 km.', d1: 'Neelum-Jhelum Project', d1e: '969 MW underground hydropower plant diverting Neelum waters.', d2: 'Gomal Zam Dam', d2e: 'Roller-compacted concrete gravity dam in South Waziristan.', d3: 'Warsak Dam', d3e: 'Concrete gravity dam on the Kabul River built in 1960.' },
    { p: 'Neelum-Jhelum Hydroelectric Station', field: '969 MW Underground Run-of-the-River Hydropower Project', fact: 'Generates power through deep underground tunnels passing beneath the Jhelum River bed.', d1: 'Tarbela Dam', d1e: 'Earth-filled mega dam on the Indus River.', d2: 'Mangla Dam', d2e: 'Major reservoir dam on the Jhelum River.', d3: 'Hub Dam', d3e: 'Water supply reservoir dam on the Hub River near Karachi.' },
    { p: 'JF-17 Thunder Multi-Role Combat Jet', field: 'Indigenously Assembled 4th Generation Fighter at PAC Kamra', fact: 'Equipped with digital fly-by-wire, AESA radar, and beyond-visual-range missile capability.', d1: 'K-8 Karakorum', d1e: 'Intermediate jet trainer co-developed at PAC Kamra.', d2: 'Mushshak', d2e: 'Primary piston engine trainer aircraft built at Kamra.', d3: 'Super Mushshak', d3e: 'Upgraded light training aircraft exported to multiple countries.' },
    { p: 'Al-Khalid Main Battle Tank', field: 'Modern 3rd Generation Battle Tank Built at Heavy Industries Taxila (HIT)', fact: 'Features a 125mm smoothbore gun, auto-loader, thermal imaging, and explosive reactive armor.', d1: 'Al-Zarrar Tank', d1e: 'Upgraded Type-59 tank variant produced by HIT.', d2: 'Haider Tank', d2e: 'Next-generation battle tank unveiled in 2024.', d3: 'Hamza 8x8', d3e: 'Multi-role armored fighting vehicle.' },
    { p: 'Thar Coal Power Project', field: '175-Billion-Ton Lignite Energy Mega-Project in Sindh', fact: 'Harnesses the world\'s 7th largest coal reserve to generate thousands of megawatts of baseload power.', d1: 'Sahiwal Coal Power Plant', d1e: 'Supercritical coal plant in Punjab using imported coal.', d2: 'Port Qasim Power Plant', d2e: 'Coastal coal-fired power plant in Karachi.', d3: 'Hubco Power Plant', d3e: 'Independent thermal power producer in Hub, Balochistan.' },
    { p: 'Quaid-e-Azam Solar Park (Bahawalpur)', field: '1,000 MW Mega Solar Photovoltaic Installation in Cholistan', fact: 'One of South Asia\'s largest clean renewable solar energy parks.', d1: 'Jhimpir Wind Farm', d1e: 'Wind power energy corridor located in Thatta, Sindh.', d2: 'Gharo Wind Corridor', d2e: 'Coastal wind turbine installations in Sindh.', d3: 'Tricon Boston Wind', d3e: 'Commercial wind power project.' },
    { p: 'Jhimpir Wind Power Corridor', field: 'Over 1,000 MW Operational Wind Energy Cluster in Thatta, Sindh', fact: 'Harnesses steady coastal thermal wind corridors from the Arabian Sea.', d1: 'Chashma Hydel', d1e: 'Low-head hydropower station in Punjab.', d2: 'Dargai Hydel', d2e: 'Historic small hydro plant in KPK.', d3: 'Golen Gol Hydropower', d3e: 'High-head 108 MW hydro station in Chitral.' },
    { p: 'Gwadar Deep-Sea Port', field: 'Strategic Warm-Water Deep-Sea Port in Balochistan', fact: 'Features a natural deep-water draft of 14.5 meters, serving as the terminus of CPEC.', d1: 'Port Qasim (Karachi)', d1e: 'Pakistan\'s second busiest commercial port established in 1980.', d2: 'Karachi Port Trust (KPT)', d2e: 'Historic premier commercial seaport founded in 1887.', d3: 'Keti Bandar', d3e: 'Historic coastal port on the Indus delta.' }
  ];

  for (let i = 10; i < 105; i++) {
    const item = distinctScience[i % distinctScience.length];
    const diff = i % 3 === 0 ? 'Scholar' : i % 2 === 0 ? 'Intermediate' : 'Foundation';
    Q.push(createMCQ(
      `In Pakistan's scientific, engineering, and technological achievements, which breakthrough or institution is associated with: "${item.field}"? (Science Milestone #${i + 1})`,
      `Engineering feats, nuclear technology, aerospace, and indigenous scientific research.`,
      item.p,
      `${item.p} is directly associated with ${item.field}. ${item.fact}`,
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
    'src/data/science.ts',
    'SCIENCE_QUESTIONS',
    'Science & Innovation',
    'Atom',
    3001,
    Q
  );
}
