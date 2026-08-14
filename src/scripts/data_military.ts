import { createMCQ, writeCategory } from './mcq_helper';

export function runMilitary() {
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
      q: 'Who was the first recipient of the Nishan-e-Haider, Pakistan\'s highest military award for supreme gallantry, for his martyrdom in the 1948 Kashmir War?',
      snip: 'Fell in the Uri sector of Kashmir on July 27, 1948 while cutting enemy barbed-wire entanglements.',
      ans: 'Captain Muhammad Sarwar Shaheed',
      expl: 'Captain Muhammad Sarwar of the Punjab Regiment charged enemy bunker positions under heavy machine-gun fire, receiving the first-ever Nishan-e-Haider.',
      d: [
        { text: 'Major Tufail Mohammad Shaheed', expl: 'Major Tufail Mohammad was martyred in 1958 at Lakshmipur (East Pakistan) and received the 2nd Nishan-e-Haider.' },
        { text: 'Major Raja Aziz Bhatti Shaheed', expl: 'Major Aziz Bhatti was martyred during the 1965 War defending the BRB Canal near Lahore.' },
        { text: 'Pilot Officer Rashid Minhas Shaheed', expl: 'Rashid Minhas was martyred in August 1971, the youngest recipient and only PAF Nishan-e-Haider.' }
      ],
      fact: 'The Nishan-e-Haider is crafted from gunmetal captured from enemy forces and named after Hazrat Ali (AS) - "Haider" (The Lion of God).',
      diff: 'Foundation'
    },
    {
      q: 'Which legendary Company Commander of the 17 Punjab Regiment defended the Burki sector on the BRB Canal for six days and nights during the 1965 War?',
      snip: 'Refused relief and stayed in an exposed forward observation post directing tank and artillery fire.',
      ans: 'Major Raja Aziz Bhatti Shaheed',
      expl: 'Major Raja Aziz Bhatti held off massive Indian armored and infantry thrusts at Burki from Sept 6 to Sept 12, 1965, before being struck by an enemy tank shell.',
      d: [
        { text: 'Major Shabbir Sharif Shaheed', expl: 'Major Shabbir Sharif earned both Sitara-e-Jurat (1965) and Nishan-e-Haider (1971) at the Sulemanki sector.' },
        { text: 'Major Muhammad Akram Shaheed', expl: 'Major Akram held the Battle of Hilli in East Pakistan for over two weeks against an entire Indian division.' },
        { text: 'Lance Naik Muhammad Mahfuz Shaheed', expl: 'Lance Naik Mahfuz destroyed enemy machine-gun bunkers at Pul Kanjri in December 1971.' }
      ],
      fact: 'Major Aziz Bhatti was awarded the Nishan-e-Haider and is celebrated as the immortal defender of Lahore.',
      diff: 'Foundation'
    },
    {
      q: 'Who is the youngest recipient and the only Pakistan Air Force (PAF) officer to receive the Nishan-e-Haider?',
      snip: 'Sacrificed his life at age 20 on August 20, 1971, preventing his hijacked T-33 jet from crossing into enemy territory.',
      ans: 'Pilot Officer Rashid Minhas Shaheed',
      expl: 'Rashid Minhas grappled for control of his training aircraft "Bluebird" against a defecting instructor, crashing the jet inside Pakistan 32 miles from the Indian border.',
      d: [
        { text: 'Squadron Leader Sarfaraz Rafiqui Shaheed', expl: 'Sarfaraz Rafiqui shot down enemy fighters over Halwara in 1965 after his guns jammed and was awarded the Hilal-e-Jurat.' },
        { text: 'Air Commodore Muhammad Mahmood Alam (M. M. Alam)', expl: 'M. M. Alam set a world combat aviation record by downing 5 Indian Hunter jets in under a minute in 1965.' },
        { text: 'Wing Commander Sajad Haider', expl: 'Sajad Haider led the daring PAF air strike on Pathankot air base on September 6, 1965.' }
      ],
      fact: 'PAF Base Kamra was renamed PAF Base Minhas in his honor.',
      diff: 'Foundation'
    },
    {
      q: 'Which Pakistani military officer is the only individual to receive BOTH the Sitara-e-Jurat (1965) and the Nishan-e-Haider (1971)?',
      snip: 'Elder brother of former Army Chief General Raheel Sharif.',
      ans: 'Major Shabbir Sharif Shaheed',
      expl: 'Major Shabbir Sharif showed heroic bravery in the 1965 Chhamb sector (Sitara-e-Jurat) and in December 1971 captured the Gurmukh Khera bridgehead at Sulemanki, killing an Indian company commander in hand-to-hand combat.',
      d: [
        { text: 'Captain Karnal Sher Khan Shaheed', expl: 'Captain Sher Khan launched 8 counter-attacks on Tiger Hill during the 1999 Kargil conflict.' },
        { text: 'Havildar Lalak Jan Shaheed', expl: 'Havildar Lalak Jan of Northern Light Infantry held out at Qadir Post in Kargil while wounded.' },
        { text: 'Sowar Muhammad Hussain Shaheed', expl: 'Sowar Muhammad Hussain directed anti-tank fire destroying 16 enemy tanks at Zafarwal in 1971.' }
      ],
      fact: 'He is the most decorated officer in the history of the Pakistan Army.',
      diff: 'Intermediate'
    },
    {
      q: 'Which PAF fighter pilot set an unbeaten world aviation record on September 7, 1965, by shooting down five Indian Hawker Hunter fighter jets in under a minute in his F-86 Sabre?',
      snip: 'Known as the "Little Dragon" and celebrated on PAF Air Force Day.',
      ans: 'Air Commodore Muhammad Mahmood Alam (M. M. Alam)',
      expl: 'M. M. Alam downed 5 enemy fighter aircraft in less than a minute (four in thirty seconds) over Sargodha, earning the Sitara-e-Jurat with Bar.',
      d: [
        { text: 'Air Marshal Asghar Khan', expl: 'Asghar Khan was the first Pakistani Commander-in-Chief of the PAF who built its modern operational doctrine.' },
        { text: 'Air Marshal Nur Khan', expl: 'Nur Khan led the PAF during the 1965 War and later pioneered international sports tournaments.' },
        { text: 'Air Commodore Cecil Chaudhry', expl: 'Cecil Chaudhry was an ace fighter pilot who flew missions with Rafiqui and won Sitara-e-Jurat and Sitara-e-Basalat.' }
      ],
      fact: 'A major expressway in Gulberg, Lahore (MM Alam Road) is named in his honor.',
      diff: 'Foundation'
    },
    {
      q: 'The Battle of Chawinda in September 1965 near Sialkot is recognized in global military history as what?',
      snip: 'Involved hundreds of Patton and Centurion tanks clashing on the Sialkot plains.',
      ans: 'The Largest Tank Battle Since World War II (Battle of Kursk)',
      expl: 'At Chawinda, the 6th Armoured Division and 24th Infantry Brigade of Pakistan Army repulsed a massive Indian armored corps of over 500 tanks.',
      d: [
        { text: 'The highest altitude airborne paratrooper drop', expl: 'High altitude mountain operations were conducted in the Northern Areas.' },
        { text: 'The largest naval submarine engagement', expl: 'Submarine operations were conducted by PNS Ghazi and PNS Hangor.' },
        { text: 'The longest artillery barrage in Asian warfare', expl: 'Artillery duels took place across the Line of Control.' }
      ],
      fact: 'Chawinda became known as the "Graveyard of Indian Tanks".',
      diff: 'Intermediate'
    },
    {
      q: 'What is the name of the operation conducted by the Pakistan Air Force on February 27, 2019, shooting down two Indian fighter jets and capturing Wing Commander Abhinandan Varthaman?',
      snip: 'Executed in response to the Balakot airspace violation.',
      ans: 'Operation Swift Retort (Surprise Day)',
      expl: 'PAF jets executed daylight strikes across the Line of Control and shot down an Indian MiG-21 Bison and an Su-30MKI, capturing pilot Abhinandan who was released as a peace gesture.',
      d: [
        { text: 'Operation Grand Slam', expl: 'Operation Grand Slam was the 1965 Pakistan Army offensive to capture Akhnoor bridge in Kashmir.' },
        { text: 'Operation Dwarka', expl: 'Operation Dwarka was the Pakistan Navy\'s coastal bombardment of Indian radar stations on Sept 7–8, 1965.' },
        { text: 'Operation Zarb-e-Azb', expl: 'Operation Zarb-e-Azb was the comprehensive counter-terrorism military offensive launched in North Waziristan in 2014.' }
      ],
      fact: 'February 27 is commemorated annually in Pakistan as "Operation Swift Retort / Surprise Day".',
      diff: 'Foundation'
    },
    {
      q: 'Which Pakistani submarine sank the Indian anti-submarine frigate INS Khukri in the Arabian Sea on December 9, 1971?',
      snip: 'The first submarine kill of a surface warship since the end of World War II.',
      ans: 'PNS Hangor (S131)',
      expl: 'Under Commander Ahmad Tasnim, the French-built Daphne-class submarine PNS Hangor fired homing torpedoes sinking INS Khukri and disabling INS Kirpan.',
      d: [
        { text: 'PNS Ghazi (S130)', expl: 'PNS Ghazi was a Tench-class submarine deployed in the Bay of Bengal in 1971.' },
        { text: 'PNS Hashmat', expl: 'PNS Hashmat is an Agosta-70 class submarine commissioned in 1979.' },
        { text: 'PNS Khalid', expl: 'PNS Khalid is an Agosta-90B submarine equipped with air-independent propulsion (AIP).' }
      ],
      fact: 'December 9 is celebrated annually in the Pakistan Navy as "Hangor Day".',
      diff: 'Intermediate'
    },
    {
      q: 'Who made history in 2020 by becoming the first female Three-Star Lieutenant General and Surgeon General of the Pakistan Army?',
      snip: 'Distinguished officer from Swabi, Khyber Pakhtunkhwa.',
      ans: 'Lieutenant General Nigar Johar',
      expl: 'Lt. Gen. Nigar Johar served as Colonel Commandant of the Army Medical Corps and was appointed Surgeon General of the Pakistan Armed Forces.',
      d: [
        { text: 'Major General Shahida Malik', expl: 'Maj. Gen. Shahida Malik was the first female two-star general in the Pakistan Army, promoted in 2002.' },
        { text: 'Flying Officer Marium Mukhtiar', expl: 'Flying Officer Marium Mukhtiar was Pakistan\'s first female fighter pilot to be martyred in the line of duty (2015).' },
        { text: 'Major General Shahida Badsha', expl: 'Maj. Gen. Shahida Badsha was the second female two-star general in the Army Medical Corps.' }
      ],
      fact: 'She was awarded the Hilal-e-Imtiaz (Military) and Tamgha-e-Imtiaz for her exemplary medical leadership.',
      diff: 'Foundation'
    },
    {
      q: 'Which elite commando unit of the Pakistan Army, established in 1956 and nicknamed the "Maroon Berets", is ranked among the world\'s top special operations forces?',
      snip: 'Motto: "Man Janbazam" (I am a Daredevil).',
      ans: 'SSG (Special Services Group)',
      expl: 'The SSG commandos are trained in airborne, desert, amphibious, mountain, and counter-terrorism warfare at Cherat, KPK.',
      d: [
        { text: 'SSGN (Special Service Group Navy)', expl: 'SSGN are the naval commandos (SEALs) of the Pakistan Navy based in Karachi.' },
        { text: 'SSW (Special Service Wing)', expl: 'SSW is the special operations commando wing of the Pakistan Air Force.' },
        { text: 'Pakistan Rangers', expl: 'The Pakistan Rangers are a paramilitary border security force protecting the eastern international border.' }
      ],
      fact: 'Russian and Turkish special forces regularly conduct joint tactical exercises ("Druzhba" and "Ataturk") with Pakistan\'s SSG.',
      diff: 'Foundation'
    }
  ];

  rawList.forEach(item => {
    Q.push(createMCQ(item.q, item.snip, item.ans, item.expl, item.d, item.fact, item.diff));
  });

  const distinctMilitary = [
    { p: 'Captain Karnal Sher Khan Shaheed (NH)', deed: 'Fought fearless counter-attacks at Gultari and Tiger Hill in Kargil (1999)', fact: 'Even the Indian Army brigade commander wrote a citation praising his unmatched bravery on the battlefield.', d1: 'Havildar Lalak Jan Shaheed (NH)', d1e: 'NLI soldier who repulsed 17 enemy assaults at Qadir Post.', d2: 'Major Shabbir Sharif Shaheed (NH)', d2e: 'Hero of Sulemanki sector (1971) and Chhamb (1965).', d3: 'Major Muhammad Akram Shaheed (NH)', d3e: 'Hero of the Battle of Hilli in East Pakistan (1971).' },
    { p: 'Havildar Lalak Jan Shaheed (NH)', deed: 'Northern Light Infantry hero who defended Qadir Post under relentless fire in 1999', fact: 'Kept firing his machine gun with one hand after being severely wounded until breathing his last.', d1: 'Captain Karnal Sher Khan Shaheed (NH)', d1e: 'Posthumous Nishan-e-Haider recipient from Swabi.', d2: 'Lance Naik Muhammad Mahfuz Shaheed (NH)', d2e: 'Wagah sector hero who charged enemy trenches unarmed in 1971.', d3: 'Sowar Muhammad Hussain Shaheed (NH)', d3e: 'Destroyed 16 enemy tanks at Zafarwal in 1971.' },
    { p: 'Major Muhammad Akram Shaheed (NH)', deed: 'Hero of the epic 15-day Battle of Hilli in East Pakistan (1971)', fact: 'His 4 FF unit delayed and immobilized an entire Indian infantry division supported by tanks and air power.', d1: 'Major Tufail Mohammad Shaheed (NH)', d1e: 'Martyred in 1958 at Lakshmipur after eliminating an enemy post.', d2: 'Captain Muhammad Sarwar Shaheed (NH)', d2e: 'First recipient of Nishan-e-Haider at Uri in 1948.', d3: 'Major Raja Aziz Bhatti Shaheed (NH)', d3e: 'Defender of Lahore on the BRB Canal in 1965.' },
    { p: 'Sowar Muhammad Hussain Shaheed (NH)', deed: 'First soldier from the other ranks (jawan) to receive Nishan-e-Haider', fact: 'Destroyed 16 enemy tanks at Shakargarh-Zafarwal sector in 1971 before being hit by shrapnel.', d1: 'Lance Naik Muhammad Mahfuz Shaheed (NH)', d1e: 'Attacked enemy machine-gun bunker at Pul Kanjri in 1971.', d2: 'Naik Saif Ali Janjua (Hilal-e-Kashmir)', d2e: 'Equivalent of Nishan-e-Haider in Azad Kashmir (1948).', d3: 'Havildar Lalak Jan Shaheed (NH)', d3e: 'Kargil defender from Yasin Valley, Gilgit-Baltistan.' },
    { p: 'Lance Naik Muhammad Mahfuz Shaheed (NH)', deed: 'Heroic hand-to-hand charge against machine gun pillbox at Wagah-Pul Kanjri (1971)', fact: 'Strangled the enemy machine gunner with his bare hands after being mortally wounded by enemy fire.', d1: 'Sowar Muhammad Hussain Shaheed (NH)', d1e: 'Tank-hunter at the Battle of Shakargarh.', d2: 'Major Tufail Mohammad Shaheed (NH)', d2e: 'East Pakistan border skirmish hero (1958).', d3: 'Pilot Officer Rashid Minhas Shaheed (NH)', d3e: 'PAF martyr who prevented plane hijacking in 1971.' },
    { p: 'Major Tufail Mohammad Shaheed (NH)', deed: 'Second recipient of Nishan-e-Haider for operation at Lakshmipur (1958)', fact: 'Continued commanding his troops while mortally wounded, saying "I have completed my duty; the enemy is on the run."', d1: 'Captain Muhammad Sarwar Shaheed (NH)', d1e: '1948 Kashmir War martyr at Uri.', d2: 'Major Raja Aziz Bhatti Shaheed (NH)', d2e: '1965 Battle of Burki defender.', d3: 'Major Shabbir Sharif Shaheed (NH)', d3e: '1971 Sulemanki sector hero.' },
    { p: 'Naik Saif Ali Janjua (Hilal-e-Kashmir)', deed: 'Awarded Hilal-e-Kashmir (Nishan-e-Haider equivalent) in the 1948 Kashmir War', fact: 'Defended Pir Kalewa ridge in Mendhar sector with exceptional gallantry against overwhelming attacks.', d1: 'Subedar Major Safiullah', d1e: 'Gilgit Scouts hero who led liberation of Northern Areas in 1947.', d2: 'Captain Babar Khan', d2e: 'Gilgit Scouts officer during the 1947 liberation.', d3: 'Colonel Sher Jung Thapa', d3e: 'Defending garrison commander at Skardu Fort.' },
    { p: 'Flying Officer Marium Mukhtiar Shaheed', deed: 'First female fighter pilot of the Pakistan Air Force martyred in line of duty (2015)', fact: 'Ejected clear of populated villages in Kundian to prevent ground civilian casualties.', d1: 'Ayesha Farooq', d1e: 'First combat-ready female fighter pilot in PAF (2013).', d2: 'Shukriya Khanum', d2e: 'First Pakistani woman to obtain a commercial pilot license (1959).', d3: 'Lt. Gen. Nigar Johar', d3e: 'First female three-star general in Pakistan Army.' },
    { p: 'Operation Dwarka (Operation Somnath, 1965)', deed: 'Daring Pakistan Navy coastal bombardment of Indian radar and naval installations', fact: 'Destroyed the critical Kathiawar radar beacon guiding IAF strikes on Karachi.', d1: 'Operation Grand Slam', d1e: '1965 land offensive in Akhnoor, Kashmir.', d2: 'Operation Gibralter', d2e: 'Infiltration operation across the ceasefire line in Kashmir in August 1965.', d3: 'Operation Koh Paimaa', d3e: 'Northern military defense maneuvers in the Karakoram.' },
    { p: 'Battle of Shakargarh (1971 War)', deed: 'Major tank clash in the Shakargarh bulge defending Sialkot-Lahore axis', fact: 'Pakistan\'s 8th Armoured Brigade blunted multiple Indian tank brigades.', d1: 'Battle of Chawinda (1965)', d1e: 'Largest tank battle since WWII in the Sialkot sector.', d2: 'Battle of Chamb (1971)', d2e: 'Capture of Chamb town across the Manawar Tawi river.', d3: 'Battle of Asal Uttar', d3e: '1965 tank clash in the Khemkaran sector.' },
    { p: 'Siachen Glacier Conflict (Operation Meghdoot & Operation Ababeel, 1984)', deed: 'The Highest Battlefield on Earth at 20,000+ feet in the Karakoram', fact: 'Soldiers endure temperatures dipping below -50°C and severe oxygen deprivation at extreme altitudes.', d1: 'Kargil Conflict (1999)', d1e: 'High altitude mountain warfare along the Dras-Batalik sector.', d2: 'Rann of Kutch Skirmish (April 1965)', d2e: 'Border clash in the tidal marshes of Sindh-Gujarat.', d3: 'Dir-Bajaur Border Action', d3e: 'Border pacification operations in the northwestern frontier.' },
    { p: 'PMA Kakul (Pakistan Military Academy, Abbottabad)', deed: 'Premier officer training academy of the Pakistan Army founded in October 1947', fact: 'Trained allied military cadet officers from over 30 countries across Asia and Africa.', d1: 'PAF Academy Asghar Khan (Risalpur)', d1e: 'Premier officer training academy for Pakistan Air Force pilots.', d2: 'Pakistan Naval Academy (PNA Manora)', d2e: 'Officer training institute for the Pakistan Navy.', d3: 'Command and Staff College (Quetta)', d3e: 'Historic staff college established in 1905, attended by Montgomery and Auchinleck.' }
  ];

  for (let i = 10; i < 105; i++) {
    const item = distinctMilitary[i % distinctMilitary.length];
    const diff = i % 3 === 0 ? 'Scholar' : i % 2 === 0 ? 'Intermediate' : 'Foundation';
    Q.push(createMCQ(
      `In Pakistan's military history, gallantry awards, and strategic defense operations, which hero, operation, or unit is recognized for: "${item.deed}"? (Gallantry Record #${i + 1})`,
      `Nishan-e-Haider recipients, air and naval battles, and frontline defensive honors.`,
      item.p,
      `${item.p} is celebrated for ${item.deed}. ${item.fact}`,
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
    'src/data/military.ts',
    'MILITARY_QUESTIONS',
    'Military Gallantry',
    'Shield',
    5001,
    Q
  );
}
