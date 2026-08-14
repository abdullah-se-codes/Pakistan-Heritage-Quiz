import fs from 'fs';
import { QuizQuestion } from '../types';

export const exactMilitaryRaw = [
  // 1–25: Pakistan Army
  {
    q: 'Pakistan Army was officially established on:',
    snip: 'Formation date of the Pakistan Army following partition.',
    options: [
      { text: '14 August 1947', isCorrect: true, expl: 'Pakistan Army was officially formed on 14 August 1947 following the independence of Pakistan.' },
      { text: '15 August 1947', isCorrect: false, expl: 'Pakistan gained independence and established its armed forces on 14 August 1947.' },
      { text: '23 March 1940', isCorrect: false, expl: '23 March 1940 was the passage of the Lahore Resolution (Pakistan Day).' },
      { text: '6 September 1947', isCorrect: false, expl: '6 September commemorates Defence Day for the 1965 war.' }
    ],
    fact: 'Pakistan Army inherited units from the British Indian Army upon partition on 14 August 1947.',
    diff: 'Foundation'
  },
  {
    q: 'The first Commander-in-Chief of the Pakistan Army was:',
    snip: 'First head of the Pakistan Army post-1947.',
    options: [
      { text: 'Gen. Ayub Khan', isCorrect: false, expl: 'Gen. Ayub Khan became the first Pakistani Commander-in-Chief later in 1951.' },
      { text: 'Gen. Sir Frank Messervy', isCorrect: true, expl: 'General Sir Frank Messervy served as the first Commander-in-Chief from August 1947 to February 1948.' },
      { text: 'Gen. Musa Khan', isCorrect: false, expl: 'Gen. Musa Khan was Commander-in-Chief during the 1965 War.' },
      { text: 'Gen. Douglas Gracey', isCorrect: false, expl: 'Gen. Douglas Gracey was the second Commander-in-Chief, succeeding Messervy.' }
    ],
    fact: 'General Sir Frank Messervy held command during the initial months of independence.',
    diff: 'Intermediate'
  },
  {
    q: 'Who succeeded Sir Frank Messervy as Commander-in-Chief?',
    snip: 'Second Commander-in-Chief of the Pakistan Army.',
    options: [
      { text: 'Douglas Gracey', isCorrect: true, expl: 'General Sir Douglas Gracey served as the second Commander-in-Chief of the Pakistan Army from 1948 to 1951.' },
      { text: 'Ayub Khan', isCorrect: false, expl: 'Gen. Ayub Khan succeeded Douglas Gracey in January 1951.' },
      { text: 'Musa Khan', isCorrect: false, expl: 'Gen. Musa Khan became Commander-in-Chief in 1958.' },
      { text: 'Yahya Khan', isCorrect: false, expl: 'Gen. Yahya Khan became Commander-in-Chief in 1966.' }
    ],
    fact: 'Sir Douglas Gracey handed over command to the first Pakistani C-in-C, Gen. Ayub Khan, in 1951.',
    diff: 'Intermediate'
  },
  {
    q: 'The first Pakistani Commander-in-Chief of the Army was:',
    snip: 'First native Pakistani general to command the Pakistan Army.',
    options: [
      { text: 'Gen. Musa Khan', isCorrect: false, expl: 'Gen. Musa Khan was appointed C-in-C in 1958.' },
      { text: 'Gen. Ayub Khan', isCorrect: true, expl: 'General Ayub Khan was appointed Commander-in-Chief on 17 January 1951.' },
      { text: 'Gen. Yahya Khan', isCorrect: false, expl: 'Gen. Yahya Khan served as C-in-C from 1966 to 1971.' },
      { text: 'Gen. Zia-ul-Haq', isCorrect: false, expl: 'Gen. Zia-ul-Haq became Chief of Army Staff in 1976.' }
    ],
    fact: 'General Ayub Khan succeeded General Sir Douglas Gracey in 1951.',
    diff: 'Foundation'
  },
  {
    q: "The Pakistan Army's highest-ranking four-star officer is generally known as the:",
    snip: 'Highest military rank in the Pakistan Army.',
    options: [
      { text: 'Field Marshal', isCorrect: true, expl: 'Field Marshal is the highest five-star ceremonial rank in the Pakistan Army, held by Ayub Khan.' },
      { text: 'General', isCorrect: false, expl: 'General is the active four-star rank holding the post of COAS / CJCSC.' },
      { text: 'Lieutenant General', isCorrect: false, expl: 'Lieutenant General is a three-star corps commander rank.' },
      { text: 'Marshal', isCorrect: false, expl: 'Marshal is an air force rank in some commonwealth systems (Marshal of the PAF).' }
    ],
    fact: 'Field Marshal is a 5-star rank, with General being the standard active 4-star rank.',
    diff: 'Intermediate'
  },
  {
    q: 'The headquarters of Pakistan Army is located in:',
    snip: 'Location of General Headquarters (GHQ).',
    options: [
      { text: 'Lahore', isCorrect: false, expl: 'Lahore houses IV Corps headquarters.' },
      { text: 'Karachi', isCorrect: false, expl: 'Karachi houses V Corps headquarters.' },
      { text: 'Rawalpindi', isCorrect: true, expl: 'General Headquarters (GHQ) of the Pakistan Army is located in Rawalpindi, Punjab.' },
      { text: 'Islamabad', isCorrect: false, expl: 'Islamabad houses Air and Naval Headquarters.' }
    ],
    fact: 'Rawalpindi has served as the military headquarters since 1947.',
    diff: 'Foundation'
  },
  {
    q: 'GHQ stands for:',
    snip: 'Acronym for Army Headquarters.',
    options: [
      { text: 'General Headquarters', isCorrect: true, expl: 'GHQ stands for General Headquarters, the central commanding organ of the Pakistan Army.' },
      { text: 'Government Headquarters', isCorrect: false, expl: 'GHQ specifically refers to General Headquarters.' },
      { text: 'General High Command', isCorrect: false, expl: 'GHQ is the standard abbreviation for General Headquarters.' },
      { text: 'Government High Command', isCorrect: false, expl: 'GHQ is the General Headquarters.' }
    ],
    fact: 'GHQ in Rawalpindi oversees all administrative and operational corps of the Pakistan Army.',
    diff: 'Foundation'
  },
  {
    q: 'The Pakistan Military Academy is located at:',
    snip: 'Premier military officer training academy in Pakistan.',
    options: [
      { text: 'Kakul', isCorrect: true, expl: 'The Pakistan Military Academy (PMA) is located at Kakul, near Abbottabad in Khyber Pakhtunkhwa.' },
      { text: 'Risalpur', isCorrect: false, expl: 'Risalpur is home to the Pakistan Air Force Academy.' },
      { text: 'Abbottabad city', isCorrect: false, expl: 'While near Abbottabad, PMA is specifically situated in the Kakul valley.' },
      { text: 'Rawalpindi', isCorrect: false, expl: 'Rawalpindi hosts GHQ.' }
    ],
    fact: 'PMA Kakul was established in October 1947 to train future officers of the Pakistan Army.',
    diff: 'Foundation'
  },
  {
    q: 'Pakistan Military Academy is commonly abbreviated as:',
    snip: 'Abbreviation for Pakistan Military Academy.',
    options: [
      { text: 'PMA', isCorrect: true, expl: 'PMA stands for Pakistan Military Academy.' },
      { text: 'PNA', isCorrect: false, expl: 'PNA stands for Pakistan Naval Academy or Pakistan National Alliance.' },
      { text: 'PAF', isCorrect: false, expl: 'PAF stands for Pakistan Air Force.' },
      { text: 'PIA', isCorrect: false, expl: 'PIA stands for Pakistan International Airlines.' }
    ],
    fact: 'PMA Kakul has produced thousands of distinguished military officers and leaders.',
    diff: 'Foundation'
  },
  {
    q: 'PMA is located near:',
    snip: 'Major city near Kakul.',
    options: [
      { text: 'Lahore', isCorrect: false, expl: 'Lahore is in Punjab.' },
      { text: 'Abbottabad', isCorrect: true, expl: 'PMA Kakul is located in the scenic hills adjacent to Abbottabad, Khyber Pakhtunkhwa.' },
      { text: 'Multan', isCorrect: false, expl: 'Multan is in southern Punjab.' },
      { text: 'Peshawar', isCorrect: false, expl: 'Peshawar is the provincial capital of KPK.' }
    ],
    fact: 'The elevation and hilly terrain of Abbottabad provide ideal physical training conditions for cadets.',
    diff: 'Foundation'
  },
  {
    q: 'The motto of Pakistan Military Academy is:',
    snip: 'Motto of PMA / Armed forces spirit.',
    options: [
      { text: 'Faith, Unity, Discipline', isCorrect: false, expl: 'Faith, Unity, Discipline is the national motto given by Quaid-e-Azam.' },
      { text: 'Iman, Taqwa, Jihad fi Sabilillah', isCorrect: true, expl: 'Iman, Taqwa, Jihad fi Sabilillah (Faith, Piety, and Struggle in the path of Allah) is the guiding motto.' },
      { text: 'Unity, Faith and Discipline', isCorrect: false, expl: 'This is the state motto of Pakistan.' },
      { text: 'Service Before Self', isCorrect: false, expl: 'Service Before Self is used by various civil and international organizations.' }
    ],
    fact: 'This motto emphasizes moral integrity, devotion, and supreme dedication in national defence.',
    diff: 'Foundation'
  },
  {
    q: "The Pakistan Army's primary responsibility is:",
    snip: 'Core operational mandate of the Army.',
    options: [
      { text: 'Maritime security', isCorrect: false, expl: 'Maritime security is the domain of Pakistan Navy and Coast Guard.' },
      { text: 'Land warfare and defence', isCorrect: true, expl: 'The primary mission of the Pakistan Army is defending the land borders, sovereignty, and territorial integrity of Pakistan.' },
      { text: 'Space research', isCorrect: false, expl: 'Space research is conducted by SUPARCO.' },
      { text: 'Civil aviation', isCorrect: false, expl: 'Civil aviation is regulated by the Civil Aviation Authority (CAA).' }
    ],
    fact: 'The Pakistan Army maintains preparedness across diverse terrains, from deserts to the world\'s highest glaciers.',
    diff: 'Foundation'
  },
  {
    q: "Pakistan Army's Special Service Group is commonly known as:",
    snip: 'Elite commando division of Pakistan Army.',
    options: [
      { text: 'SSG', isCorrect: true, expl: 'The Special Service Group is widely known by its acronym SSG (Maroon Berets).' },
      { text: 'SAS', isCorrect: false, expl: 'SAS is the Special Air Service of the British Army.' },
      { text: 'ISI', isCorrect: false, expl: 'ISI is the premier intelligence agency.' },
      { text: 'FC', isCorrect: false, expl: 'FC is the Frontier Corps paramilitary force.' }
    ],
    fact: 'SSG commandos are nicknamed "Maroon Berets" or "Black Storks" for their stealth and bravery.',
    diff: 'Foundation'
  },
  {
    q: 'SSG stands for:',
    snip: 'Full form of SSG.',
    options: [
      { text: 'Special Security Group', isCorrect: false, expl: 'SSG stands for Special Services Group.' },
      { text: 'Special Services Group', isCorrect: true, expl: 'SSG stands for Special Services Group.' },
      { text: 'Strategic Services Group', isCorrect: false, expl: 'The correct term is Special Services Group.' },
      { text: 'Special Support Group', isCorrect: false, expl: 'The correct term is Special Services Group.' }
    ],
    fact: 'The SSG was raised in 1956 from the 19th Baloch Regiment.',
    diff: 'Foundation'
  },
  {
    q: 'The SSG is primarily known for:',
    snip: 'Specialization of the SSG.',
    options: [
      { text: 'Naval warfare', isCorrect: false, expl: 'Naval warfare is handled by Pakistan Navy and SSG(N).' },
      { text: 'Special operations', isCorrect: true, expl: 'The SSG specializes in unconventional warfare, counter-terrorism, hostage rescue, reconnaissance, and elite airborne/mountain operations.' },
      { text: 'Air traffic control', isCorrect: false, expl: 'Air traffic control is handled by the Air Force and CAA.' },
      { text: 'Medical services', isCorrect: false, expl: 'Medical services are managed by the Army Medical Corps.' }
    ],
    fact: 'The SSG is globally respected as one of the most rigorously trained special forces in the world.',
    diff: 'Foundation'
  },
  {
    q: 'The training centre associated with Pakistan Army commandos is located at:',
    snip: 'Headquarters and training base of SSG.',
    options: [
      { text: 'Cherat', isCorrect: true, expl: 'Cherat, a historic hill station in Nowshera District, KPK, is the headquarters and training centre of the SSG.' },
      { text: 'Multan', isCorrect: false, expl: 'Multan is an armored corps and strike corps centre.' },
      { text: 'Quetta', isCorrect: false, expl: 'Quetta houses the Command and Staff College.' },
      { text: 'Sialkot', isCorrect: false, expl: 'Sialkot is a prominent forward garrison.' }
    ],
    fact: 'Cherat provides challenging rugged terrain for mountain warfare, parachuting, and close-quarter combat.',
    diff: 'Intermediate'
  },
  {
    q: "The Pakistan Army's elite Special Services Group is associated with:",
    snip: 'Base of the SSG commandos.',
    options: [
      { text: 'PAF Base Masroor', isCorrect: false, expl: 'PAF Base Masroor is a major air base in Karachi.' },
      { text: 'Cherat', isCorrect: true, expl: 'The SSG headquarters and training facilities are established at Cherat.' },
      { text: 'Karachi Port', isCorrect: false, expl: 'Karachi Port is a commercial and naval maritime hub.' },
      { text: 'Gwadar', isCorrect: false, expl: 'Gwadar is a deep-sea port city.' }
    ],
    fact: 'Cherat is the cradle where every SSG commando earns the coveted Maroon Beret.',
    diff: 'Intermediate'
  },
  {
    q: 'The National Defence University is located in:',
    snip: 'Location of NDU.',
    options: [
      { text: 'Lahore', isCorrect: false, expl: 'Lahore is a major cultural and education centre.' },
      { text: 'Islamabad', isCorrect: true, expl: 'The National Defence University (NDU) is located in Sector E-9, Islamabad.' },
      { text: 'Karachi', isCorrect: false, expl: 'Karachi is in Sindh.' },
      { text: 'Peshawar', isCorrect: false, expl: 'Peshawar is in KPK.' }
    ],
    fact: 'NDU provides strategic education to senior military officers, civil servants, and allied foreign officers.',
    diff: 'Intermediate'
  },
  {
    q: 'NDU stands for:',
    snip: 'Acronym for apex military academic university.',
    options: [
      { text: 'National Defence University', isCorrect: true, expl: 'NDU stands for National Defence University.' },
      { text: 'National Development University', isCorrect: false, expl: 'NDU stands for National Defence University.' },
      { text: 'National Defence Unit', isCorrect: false, expl: 'NDU is a chartered public university.' },
      { text: 'National Defence Union', isCorrect: false, expl: 'NDU stands for National Defence University.' }
    ],
    fact: 'NDU was previously established as the National Defence College (NDC) in 1970 before becoming a university in 2007.',
    diff: 'Foundation'
  },
  {
    q: "The Pakistan Army's main officer training institution is:",
    snip: 'Cadet commissioning academy.',
    options: [
      { text: 'NDU', isCorrect: false, expl: 'NDU is for senior officer strategic studies and master\'s degrees.' },
      { text: 'PMA', isCorrect: true, expl: 'The Pakistan Military Academy (PMA Kakul) is the primary institution where cadets are trained and commissioned as officers.' },
      { text: 'NUST', isCorrect: false, expl: 'NUST is a comprehensive science and technology university.' },
      { text: 'ISSB', isCorrect: false, expl: 'ISSB is the selection board that selects candidates, not the training academy.' }
    ],
    fact: 'PMA Kakul conducts intensive 2-year training programs for regular commission cadets.',
    diff: 'Foundation'
  },
  {
    q: 'ISSB stands for:',
    snip: 'Selection body for prospective armed forces officers.',
    options: [
      { text: 'Inter Services Selection Board', isCorrect: true, expl: 'ISSB stands for Inter Services Selection Board.' },
      { text: 'International Services Selection Board', isCorrect: false, expl: 'ISSB is Pakistan\'s Inter Services Selection Board.' },
      { text: 'Inter Security Selection Bureau', isCorrect: false, expl: 'ISSB is Inter Services Selection Board.' },
      { text: 'Internal Services Selection Board', isCorrect: false, expl: 'ISSB is Inter Services Selection Board.' }
    ],
    fact: 'ISSB testing centres are located in Kohat, Gujranwala, Malir (Karachi), and Quetta.',
    diff: 'Foundation'
  },
  {
    q: 'ISSB is responsible primarily for:',
    snip: 'Core duty of ISSB.',
    options: [
      { text: 'Selecting candidates for armed forces officer training', isCorrect: true, expl: 'ISSB tests and screens candidate potential for commission in the Pakistan Army, Navy, and Air Force.' },
      { text: 'Purchasing weapons', isCorrect: false, expl: 'Defence procurement is managed by the Ministry of Defence Production.' },
      { text: 'Training pilots', isCorrect: false, expl: 'Pilot training is conducted at PAF Academy Risalpur.' },
      { text: 'Managing military hospitals', isCorrect: false, expl: 'Military hospitals are managed by the Army Medical Corps.' }
    ],
    fact: 'ISSB uses psychological tests, indoor tasks, and outdoor group tasks over a 4-5 day evaluation.',
    diff: 'Foundation'
  },
  {
    q: "The Pakistan Army's main battle tank currently associated with indigenous production is:",
    snip: 'State-of-the-art indigenous Pakistani tank.',
    options: [
      { text: 'Al-Khalid', isCorrect: true, expl: 'The Al-Khalid Main Battle Tank (MBT-2000) is indigenously manufactured at Heavy Industries Taxila (HIT).' },
      { text: 'Sherman', isCorrect: false, expl: 'Sherman was a WWII-era US tank.' },
      { text: 'M1 Abrams', isCorrect: false, expl: 'M1 Abrams is an American main battle tank.' },
      { text: 'Challenger', isCorrect: false, expl: 'Challenger is a British main battle tank.' }
    ],
    fact: 'Al-Khalid features automated fire control, explosive reactive armor, and hunter-killer night capabilities.',
    diff: 'Foundation'
  },
  {
    q: 'Al-Khalid is a:',
    snip: 'Classification of Al-Khalid.',
    options: [
      { text: 'Fighter aircraft', isCorrect: false, expl: 'Fighter aircraft include the JF-17 Thunder and F-16.' },
      { text: 'Main battle tank', isCorrect: true, expl: 'Al-Khalid is a third-generation Main Battle Tank (MBT).' },
      { text: 'Submarine', isCorrect: false, expl: 'Submarines include the Agosta 90B and Hangor classes.' },
      { text: 'Helicopter', isCorrect: false, expl: 'Helicopters include the AH-1 Cobra and Mi-35.' }
    ],
    fact: 'Al-Khalid is named after the legendary Muslim commander Khalid ibn al-Walid.',
    diff: 'Foundation'
  },
  {
    q: 'Al-Khalid tank is associated with cooperation between Pakistan and:',
    snip: 'International joint-development partner.',
    options: [
      { text: 'China', isCorrect: true, expl: 'The Al-Khalid tank was developed through close technological collaboration between Pakistan (HIT) and China (Norinco).' },
      { text: 'France', isCorrect: false, expl: 'France collaborated on Agosta submarines and Mirage aircraft.' },
      { text: 'Germany', isCorrect: false, expl: 'Germany supplied diesel engines for initial prototypes.' },
      { text: 'Japan', isCorrect: false, expl: 'Japan was not a partner in MBT development.' }
    ],
    fact: 'The collaboration with China has also resulted in the modern Al-Khalid-I and VT-4 platforms.',
    diff: 'Foundation'
  },

  // 26–50: Pakistan Air Force
  {
    q: 'Pakistan Air Force was established in:',
    snip: 'Establishment year of PAF.',
    options: [
      { text: '1947', isCorrect: true, expl: 'Pakistan Air Force was established on 14 August 1947 (originally as the Royal Pakistan Air Force).' },
      { text: '1948', isCorrect: false, expl: 'PAF was established in 1947.' },
      { text: '1950', isCorrect: false, expl: 'PAF was established at the time of independence in 1947.' },
      { text: '1956', isCorrect: false, expl: 'In 1956, the prefix "Royal" was dropped when Pakistan became a republic.' }
    ],
    fact: 'PAF started with a modest fleet of Hawker Tempest fighters and Dakota transport aircraft.',
    diff: 'Foundation'
  },
  {
    q: 'PAF stands for:',
    snip: 'Acronym of the air arm.',
    options: [
      { text: 'Pakistan Air Force', isCorrect: true, expl: 'PAF stands for Pakistan Air Force.' },
      { text: 'Pakistani Aviation Force', isCorrect: false, expl: 'PAF is Pakistan Air Force.' },
      { text: 'Pakistan Armed Force', isCorrect: false, expl: 'PAF is Pakistan Air Force.' },
      { text: 'Pakistan Air Fleet', isCorrect: false, expl: 'PAF is Pakistan Air Force.' }
    ],
    fact: 'PAF motto is "A Second to None" and "Sehra ast ke Darya ast, Teh-e-Baal-o-Par-e-Maast".',
    diff: 'Foundation'
  },
  {
    q: 'The headquarters of PAF is located in:',
    snip: 'Location of Air Headquarters (AHQ).',
    options: [
      { text: 'Lahore', isCorrect: false, expl: 'Lahore is a central air command base.' },
      { text: 'Islamabad', isCorrect: true, expl: 'Air Headquarters (AHQ) of the Pakistan Air Force is located in Islamabad.' },
      { text: 'Rawalpindi', isCorrect: false, expl: 'Rawalpindi houses Army GHQ.' },
      { text: 'Karachi', isCorrect: false, expl: 'Karachi housed AHQ until it shifted to Chaklala and later Islamabad.' }
    ],
    fact: 'AHQ in Islamabad manages all regional air commands and tactical wings of PAF.',
    diff: 'Foundation'
  },
  {
    q: 'The first Commander-in-Chief of the Pakistan Air Force was:',
    snip: 'First air chief of Pakistan.',
    options: [
      { text: 'Air Vice Marshal Allan Perry-Keene', isCorrect: true, expl: 'Air Vice Marshal Allan Perry-Keene was appointed the first Commander-in-Chief of the Royal Pakistan Air Force (1947–1949).' },
      { text: 'Air Marshal Asghar Khan', isCorrect: false, expl: 'Air Marshal Asghar Khan was the first native Pakistani air chief (1957–1965).' },
      { text: 'Air Marshal Nur Khan', isCorrect: false, expl: 'Air Marshal Nur Khan led the PAF to victory in the 1965 War.' },
      { text: 'Air Marshal Anwar Shamim', isCorrect: false, expl: 'Air Marshal Anwar Shamim served as air chief in the 1980s.' }
    ],
    fact: 'Allan Perry-Keene organized the foundational flying training schools of the newly born air force.',
    diff: 'Intermediate'
  },
  {
    q: 'The first Pakistani Commander-in-Chief of PAF was:',
    snip: 'First native Pakistani Air Chief.',
    options: [
      { text: 'Asghar Khan', isCorrect: true, expl: 'Air Marshal Asghar Khan became the first Pakistani Commander-in-Chief of the PAF in 1957 at the young age of 36.' },
      { text: 'Nur Khan', isCorrect: false, expl: 'Air Marshal Nur Khan succeeded Asghar Khan in 1965.' },
      { text: 'Anwar Shamim', isCorrect: false, expl: 'Anwar Shamim was Chief of Air Staff from 1978 to 1985.' },
      { text: 'Jamal Khan', isCorrect: false, expl: 'Jamal Ahmad Khan was CAS from 1985 to 1988.' }
    ],
    fact: 'Asghar Khan transformed the PAF into a modern, disciplined, jet-age air force.',
    diff: 'Foundation'
  },
  {
    q: 'The Pakistan Air Force Academy is located at:',
    snip: 'PAF cadet training academy.',
    options: [
      { text: 'Risalpur', isCorrect: true, expl: 'The Pakistan Air Force Academy is located at Risalpur in Nowshera District, KPK.' },
      { text: 'Kamra', isCorrect: false, expl: 'Kamra is home to Pakistan Aeronautical Complex (PAC).' },
      { text: 'Sargodha', isCorrect: false, expl: 'Sargodha is PAF\'s premier combat base (City of Eagles).' },
      { text: 'Peshawar', isCorrect: false, expl: 'Peshawar is home to Northern Air Command.' }
    ],
    fact: 'Quaid-e-Azam Muhammad Ali Jinnah visited the Flying Training School at Risalpur in April 1948.',
    diff: 'Foundation'
  },
  {
    q: 'The PAF Academy is named after:',
    snip: 'Official naming of PAF Academy Risalpur.',
    options: [
      { text: 'Asghar Khan', isCorrect: false, expl: 'It was named PAF Academy Asghar Khan in honor of its first Pakistani Air Chief.' },
      { text: 'PAF Academy Risalpur', isCorrect: true, expl: 'PAF Academy Risalpur is the renowned institutional title of the Air Force Academy.' },
      { text: 'Quaid-e-Azam', isCorrect: false, expl: 'Quaid-e-Azam addressed the academy in 1948.' },
      { text: 'Allama Iqbal', isCorrect: false, expl: 'Iqbal was the national philosopher-poet.' }
    ],
    fact: 'Cadets at the Academy undergo rigorous flight training on Super Mushshak and T-37 aircraft.',
    diff: 'Intermediate'
  },
  {
    q: "The Pakistan Air Force's fighter aircraft developed jointly with China is:",
    snip: 'Indigenous multirole fighter jet.',
    options: [
      { text: 'JF-17 Thunder', isCorrect: true, expl: 'The JF-17 Thunder (FC-1 Xiaolong) is a 4th-generation multirole combat aircraft co-developed by PAC Kamra and CAC China.' },
      { text: 'F-16 Falcon', isCorrect: false, expl: 'The F-16 Fighting Falcon is produced by Lockheed Martin (USA).' },
      { text: 'Mirage III', isCorrect: false, expl: 'Mirage III is produced by Dassault Aviation (France).' },
      { text: 'F-7', isCorrect: false, expl: 'F-7PG is an earlier Chinese interceptor aircraft.' }
    ],
    fact: 'The JF-17 forms the backbone of the PAF combat fleet with Block 1, Block 2, and Block 3 variants.',
    diff: 'Foundation'
  },
  {
    q: 'JF-17 stands for:',
    snip: 'Meaning of the designation JF-17.',
    options: [
      { text: 'Joint Fighter-17', isCorrect: true, expl: 'JF-17 stands for Joint Fighter-17, symbolizing joint cooperation between Pakistan and China.' },
      { text: 'Joint Force-17', isCorrect: false, expl: 'JF stands for Joint Fighter.' },
      { text: 'Jet Fighter-17', isCorrect: false, expl: 'The designation officially is Joint Fighter.' },
      { text: 'Joint Flight-17', isCorrect: false, expl: 'The designation is Joint Fighter.' }
    ],
    fact: 'The number 17 represents its role as the next-generation successor beyond 4th gen aircraft.',
    diff: 'Foundation'
  },
  {
    q: 'JF-17 Thunder was jointly developed by Pakistan and:',
    snip: 'Co-development partner of JF-17.',
    options: [
      { text: 'Russia', isCorrect: false, expl: 'Russia supplied RD-93 engines for early batches.' },
      { text: 'China', isCorrect: true, expl: 'JF-17 Thunder was jointly developed by the Pakistan Aeronautical Complex (PAC) and Chengdu Aircraft Corporation (CAC) of China.' },
      { text: 'Turkey', isCorrect: false, expl: 'Pakistan and Turkey cooperate on aerospace avionics and drone platforms.' },
      { text: 'France', isCorrect: false, expl: 'France supplied avionics and radar for other platforms.' }
    ],
    fact: 'The first prototype flew in 2003, and the first PAF squadron was inducted in 2010.',
    diff: 'Foundation'
  },
  {
    q: 'The Pakistani organization involved in JF-17 production is:',
    snip: 'Aeronautical manufacturing hub in Pakistan.',
    options: [
      { text: 'HIT', isCorrect: false, expl: 'HIT specializes in heavy armored vehicles and tanks.' },
      { text: 'PAC', isCorrect: true, expl: 'Pakistan Aeronautical Complex (PAC) Kamra manufactures over 58% of the JF-17 airframe and assembles the aircraft.' },
      { text: 'SUPARCO', isCorrect: false, expl: 'SUPARCO is Pakistan\'s national space commission.' },
      { text: 'NESCOM', isCorrect: false, expl: 'NESCOM develops strategic defense systems.' }
    ],
    fact: 'PAC Kamra is capable of complete aircraft manufacturing, overhaul, and avionics integration.',
    diff: 'Foundation'
  },
  {
    q: 'PAC stands for:',
    snip: 'Full form of PAC.',
    options: [
      { text: 'Pakistan Aerospace Complex', isCorrect: false, expl: 'PAC stands for Pakistan Aeronautical Complex.' },
      { text: 'Pakistan Aeronautical Complex', isCorrect: true, expl: 'PAC stands for Pakistan Aeronautical Complex.' },
      { text: 'Pakistan Aviation Corporation', isCorrect: false, expl: 'PAC stands for Pakistan Aeronautical Complex.' },
      { text: 'Pakistan Air Command', isCorrect: false, expl: 'PAC stands for Pakistan Aeronautical Complex.' }
    ],
    fact: 'PAC Kamra was founded in 1971 at Kamra, Attock District.',
    diff: 'Foundation'
  },
  {
    q: 'Pakistan Aeronautical Complex is located at:',
    snip: 'Geographic location of PAC.',
    options: [
      { text: 'Kamra', isCorrect: true, expl: 'PAC is located at Kamra in Attock District, Punjab.' },
      { text: 'Lahore', isCorrect: false, expl: 'Lahore is a major industrial city.' },
      { text: 'Karachi', isCorrect: false, expl: 'Karachi houses naval dockyards.' },
      { text: 'Quetta', isCorrect: false, expl: 'Quetta is in Balochistan.' }
    ],
    fact: 'Kamra comprises multiple factories: Aircraft Manufacturing Factory, Mirage Rebuild Factory, F-6 Rebuild Factory, and Avionics Production Factory.',
    diff: 'Foundation'
  },
  {
    q: 'The F-16 fighter aircraft operated by Pakistan Air Force was originally manufactured by:',
    snip: 'Original aerospace manufacturer of F-16.',
    options: [
      { text: 'Lockheed Martin', isCorrect: true, expl: 'The F-16 Fighting Falcon was developed by General Dynamics and is manufactured by Lockheed Martin.' },
      { text: 'Boeing', isCorrect: false, expl: 'Boeing manufactures F-15 and F/A-18.' },
      { text: 'Dassault', isCorrect: false, expl: 'Dassault manufactures Mirage and Rafale.' },
      { text: 'Sukhoi', isCorrect: false, expl: 'Sukhoi is a Russian aerospace manufacturer.' }
    ],
    fact: 'Pakistan inducted its first batch of F-16A/B aircraft in 1983 into the No. 11 "Arrows" Squadron.',
    diff: 'Foundation'
  },
  {
    q: 'Mirage fighter aircraft operated by PAF were originally developed by:',
    snip: 'Country of origin of Mirage III and 5.',
    options: [
      { text: 'France', isCorrect: true, expl: 'Mirage fighter jets were designed and manufactured by Dassault Aviation in France.' },
      { text: 'China', isCorrect: false, expl: 'China manufactures F-7 and J-10C.' },
      { text: 'Russia', isCorrect: false, expl: 'Russia develops MiG and Sukhoi series.' },
      { text: 'United Kingdom', isCorrect: false, expl: 'UK produced the Hawker Hunter and Harrier.' }
    ],
    fact: 'PAF is the world\'s largest operator of customized upgraded Mirage III and Mirage 5 aircraft under Project ROSE.',
    diff: 'Foundation'
  },
  {
    q: "Pakistan's Air Force Day is observed on:",
    snip: 'Annual commemoration day of PAF.',
    options: [
      { text: '14 August', isCorrect: false, expl: '14 August is Independence Day.' },
      { text: '6 September', isCorrect: false, expl: '6 September is Defence Day of Pakistan.' },
      { text: '7 September', isCorrect: true, expl: 'Air Force Day (Youm-e-Fazaia) is celebrated every year on 7 September.' },
      { text: '23 March', isCorrect: false, expl: '23 March is Pakistan Day.' }
    ],
    fact: '7 September honors the PAF heroes of the 1965 War, including MM Alam\'s historic record.',
    diff: 'Foundation'
  },
  {
    q: 'Air Force Day commemorates the PAF\'s role in the:',
    snip: 'War commemorated on 7 September.',
    options: [
      { text: '1948 war', isCorrect: false, expl: '1948 was the first Kashmir war.' },
      { text: '1965 war', isCorrect: true, expl: '7 September marks PAF\'s air superiority and daring strikes during the 1965 Indo-Pak War.' },
      { text: '1971 war', isCorrect: false, expl: 'The 1971 war occurred 6 years later.' },
      { text: 'Kargil conflict', isCorrect: false, expl: 'Kargil took place in 1999.' }
    ],
    fact: 'PAF achieved complete air dominance over contested skies during the September 1965 war.',
    diff: 'Foundation'
  },
  {
    q: 'The famous Pakistani fighter pilot who is associated with the 1965 war is:',
    snip: 'Legendary ace pilot who downed 5 enemy jets in under a minute.',
    options: [
      { text: 'MM Alam', isCorrect: true, expl: 'Squadron Leader Muhammad Mahmood Alam (MM Alam) shot down five enemy Hawker Hunter jets in less than a minute over Sargodha on 7 September 1965.' },
      { text: 'Rashid Minhas', isCorrect: false, expl: 'Rashid Minhas is the 1971 Nishan-e-Haider hero.' },
      { text: 'Saiful Azam', isCorrect: false, expl: 'Saiful Azam is the only pilot in history to shoot down aircraft from 4 nations in air combat.' },
      { text: 'Cecil Chaudhry', isCorrect: false, expl: 'Cecil Chaudhry was a decorated war hero and veteran of the 1965 and 1971 wars.' }
    ],
    fact: 'MM Alam became a world-renowned flying ace with a total of 9 confirmed kills in the 1965 war.',
    diff: 'Foundation'
  },
  {
    q: 'MM Alam was a:',
    snip: 'Branch and profession of MM Alam.',
    options: [
      { text: 'Naval officer', isCorrect: false, expl: 'He served in the Pakistan Air Force.' },
      { text: 'Fighter pilot', isCorrect: true, expl: 'MM Alam was a legendary combat fighter pilot and flying ace in the Pakistan Air Force.' },
      { text: 'Army commander', isCorrect: false, expl: 'He was an air force officer.' },
      { text: 'Engineer', isCorrect: false, expl: 'He was a combat fighter pilot.' }
    ],
    fact: 'MM Alam flew the North American F-86 Sabre jet during the 1965 air battles.',
    diff: 'Foundation'
  },
  {
    q: 'MM Alam received the:',
    snip: 'Gallantry award conferred upon MM Alam.',
    options: [
      { text: 'Nishan-e-Haider', isCorrect: false, expl: 'Nishan-e-Haider is awarded posthumously for supreme martyrdom in combat.' },
      { text: 'Sitara-e-Jurat', isCorrect: true, expl: 'MM Alam was decorated with the Sitara-e-Jurat (Star of Courage) with Bar for his exceptional heroism.' },
      { text: 'Hilal-e-Jurat', isCorrect: false, expl: 'He was awarded Sitara-e-Jurat with Bar.' },
      { text: 'Tamgha-e-Jurat', isCorrect: false, expl: 'He received Sitara-e-Jurat.' }
    ],
    fact: 'The "Bar" on his Sitara-e-Jurat denotes that he earned the award twice for separate acts of bravery.',
    diff: 'Foundation'
  },
  {
    q: 'Rashid Minhas belonged to the:',
    snip: 'Service branch of Rashid Minhas Shaheed.',
    options: [
      { text: 'Pakistan Army', isCorrect: false, expl: 'He was an officer of the Pakistan Air Force.' },
      { text: 'Pakistan Navy', isCorrect: false, expl: 'He served in the air force.' },
      { text: 'Pakistan Air Force', isCorrect: true, expl: 'Pilot Officer Rashid Minhas served in the Pakistan Air Force (No. 2 Squadron).' },
      { text: 'Pakistan Rangers', isCorrect: false, expl: 'He was in the PAF.' }
    ],
    fact: 'Rashid Minhas was the only PAF officer to be awarded the Nishan-e-Haider.',
    diff: 'Foundation'
  },
  {
    q: "Rashid Minhas was awarded Pakistan's highest military award:",
    snip: 'Highest military gallantry medal awarded to Rashid Minhas.',
    options: [
      { text: 'Sitara-e-Jurat', isCorrect: false, expl: 'He received the supreme award Nishan-e-Haider.' },
      { text: 'Nishan-e-Haider', isCorrect: true, expl: 'Rashid Minhas was posthumously awarded the Nishan-e-Haider for supreme patriotism and sacrifice.' },
      { text: 'Hilal-e-Jurat', isCorrect: false, expl: 'He received the Nishan-e-Haider.' },
      { text: 'Tamgha-e-Jurat', isCorrect: false, expl: 'He received the Nishan-e-Haider.' }
    ],
    fact: 'He is the youngest person (age 20) and the only Air Force recipient to receive the Nishan-e-Haider.',
    diff: 'Foundation'
  },
  {
    q: 'Rashid Minhas received Nishan-e-Haider for his action in:',
    snip: 'Year of martyrdom of Rashid Minhas.',
    options: [
      { text: '1965', isCorrect: false, expl: 'The 1965 war occurred earlier during his childhood.' },
      { text: '1971', isCorrect: true, expl: 'On 20 August 1971, Pilot Officer Rashid Minhas thwarted the hijacking of his T-33 jet near Thatta by crashing the aircraft.' },
      { text: '1972', isCorrect: false, expl: 'The incident took place in August 1971.' },
      { text: '1999', isCorrect: false, expl: '1999 was the Kargil conflict.' }
    ],
    fact: 'PAF Base Kamra was renamed PAF Base Minhas in his eternal honour.',
    diff: 'Foundation'
  },
  {
    q: "The PAF's aerobatic team is known as:",
    snip: 'Renowned precision aerobatic team of PAF.',
    options: [
      { text: 'Sherdils', isCorrect: true, expl: 'The Sherdils (Lion Hearts) is the official precision aerobatics display team of the Pakistan Air Force Academy.' },
      { text: 'Burraq', isCorrect: false, expl: 'Burraq is an indigenous unmanned combat aerial vehicle.' },
      { text: 'Thunderbirds', isCorrect: false, expl: 'Thunderbirds is the USAF aerobatics demonstration squadron.' },
      { text: 'Falcons', isCorrect: false, expl: 'Falcons is a nickname for F-16 squadrons.' }
    ],
    fact: 'Formed in 1972 at PAF Academy Risalpur, the Sherdils fly formations on K-8 Karakorum jet trainers.',
    diff: 'Foundation'
  },
  {
    q: 'Sherdils are associated with:',
    snip: 'Armed forces service operating the Sherdils.',
    options: [
      { text: 'Pakistan Army', isCorrect: false, expl: 'Army operates aviation and helicopter display units.' },
      { text: 'Pakistan Navy', isCorrect: false, expl: 'Navy operates naval aviation.' },
      { text: 'Pakistan Air Force', isCorrect: true, expl: 'The Sherdils are the Pakistan Air Force\'s premier aerobatic flying team.' },
      { text: 'Pakistan Rangers', isCorrect: false, expl: 'Rangers are a border paramilitary force.' }
    ],
    fact: 'The Sherdils perform thrilling synchronized nine-aircraft maneuvers at national parades and airshows.',
    diff: 'Foundation'
  },

  // 51–75: Pakistan Navy
  {
    q: 'Pakistan Navy was established in:',
    snip: 'Founding year of Pakistan Navy.',
    options: [
      { text: '1947', isCorrect: true, expl: 'Pakistan Navy was founded on 14 August 1947 (originally Royal Pakistan Navy) with the independence of Pakistan.' },
      { text: '1948', isCorrect: false, expl: 'Pakistan Navy was established in 1947.' },
      { text: '1951', isCorrect: false, expl: 'Established in 1947 upon partition.' },
      { text: '1956', isCorrect: false, expl: 'In 1956, it dropped the "Royal" prefix.' }
    ],
    fact: 'Pakistan Navy was allocated four sloops, two frigates, four minesweepers, and small patrol craft upon partition.',
    diff: 'Foundation'
  },
  {
    q: 'The headquarters of Pakistan Navy is located in:',
    snip: 'Current location of Naval Headquarters (NHQ).',
    options: [
      { text: 'Karachi', isCorrect: false, expl: 'Karachi was the historic headquarters and remains the main operational command.' },
      { text: 'Islamabad', isCorrect: true, expl: 'Naval Headquarters (NHQ) is situated in Islamabad.' },
      { text: 'Gwadar', isCorrect: false, expl: 'Gwadar is a major forward naval base.' },
      { text: 'Lahore', isCorrect: false, expl: 'Lahore hosts the Pakistan Navy War College.' }
    ],
    fact: 'Naval Headquarters relocated to Islamabad in 1974 to coordinate closely with Joint Staff and other service HQs.',
    diff: 'Foundation'
  },
  {
    q: 'The operational headquarters of Pakistan Navy has historically been associated with:',
    snip: 'Primary maritime operational base.',
    options: [
      { text: 'Karachi', isCorrect: true, expl: 'Karachi is the primary naval seaport and operational command center (COMKAR / COMPAK).' },
      { text: 'Lahore', isCorrect: false, expl: 'Lahore is inland in Punjab.' },
      { text: 'Peshawar', isCorrect: false, expl: 'Peshawar is inland in KPK.' },
      { text: 'Quetta', isCorrect: false, expl: 'Quetta is inland in Balochistan.' }
    ],
    fact: 'Karachi features the naval dockyard, submarine bases, and surface fleet anchorages.',
    diff: 'Foundation'
  },
  {
    q: "The Pakistan Navy's primary role is:",
    snip: 'Core mission of the Navy.',
    options: [
      { text: 'Land warfare', isCorrect: false, expl: 'Land warfare is the primary domain of Pakistan Army.' },
      { text: 'Maritime defence', isCorrect: true, expl: 'The primary mission is maritime defence, guarding territorial waters, sea lines of communication (SLOCs), and the Exclusive Economic Zone (EEZ).' },
      { text: 'Air defence', isCorrect: false, expl: 'Air defence is primarily led by Pakistan Air Force.' },
      { text: 'Border policing', isCorrect: false, expl: 'Border policing is conducted by civil armed forces (Rangers / FC).' }
    ],
    fact: 'Pakistan has over 1,000 kilometers of coastline and an EEZ spanning 290,000 square kilometers.',
    diff: 'Foundation'
  },
  {
    q: 'The first Commander-in-Chief of Pakistan Navy was:',
    snip: 'First naval chief post-independence.',
    options: [
      { text: 'Rear Admiral James Wilfred Jefford', isCorrect: true, expl: 'Rear Admiral James Wilfred Jefford was appointed the first Commander-in-Chief of the Royal Pakistan Navy (1947–1953).' },
      { text: 'Admiral Afzal Rahman Khan', isCorrect: false, expl: 'Admiral A.R. Khan was C-in-C from 1959 to 1966 during the 1965 War.' },
      { text: 'Admiral Tariq Kamal Khan', isCorrect: false, expl: 'Admiral Tariq Kamal Khan was naval chief from 1983 to 1986.' },
      { text: 'Admiral Mohammad Shariff', isCorrect: false, expl: 'Admiral Mohammad Shariff was the first four-star Admiral of Pakistan Navy.' }
    ],
    fact: 'Admiral Jefford helped establish the naval infrastructure, dockyards, and officer training corps.',
    diff: 'Intermediate'
  },
  {
    q: 'The first Pakistani Commander-in-Chief of Pakistan Navy was:',
    snip: 'First native Pakistani naval chief.',
    options: [
      { text: 'Afzal Rahman Khan', isCorrect: false, expl: 'Afzal Rahman Khan served as second Pakistani C-in-C.' },
      { text: 'Haji Mohammad Siddiq Chaudhry', isCorrect: true, expl: 'Vice Admiral Haji Mohammad Siddiq Chaudhry (HMS Chaudhry) became the first Pakistani Commander-in-Chief in 1953.' },
      { text: 'Tariq Kamal Khan', isCorrect: false, expl: 'Tariq Kamal Khan served in the 1980s.' },
      { text: 'Mohammad Shariff', isCorrect: false, expl: 'Mohammad Shariff became naval chief in 1975.' }
    ],
    fact: 'HMS Chaudhry is widely remembered as the father of modern Pakistan Navy.',
    diff: 'Intermediate'
  },
  {
    q: "Pakistan Navy's elite special operations force is called:",
    snip: 'Elite naval commandos of Pakistan Navy.',
    options: [
      { text: 'SSG(N)', isCorrect: true, expl: 'The Special Services Group (Navy), abbreviated SSG(N), is Pakistan Navy\'s elite special warfare and commando force.' },
      { text: 'SSN', isCorrect: false, expl: 'SSN is the standard naval designation for nuclear-powered attack submarines.' },
      { text: 'MARCOS', isCorrect: false, expl: 'MARCOS is the Indian Navy marine commando unit.' },
      { text: 'SEALs', isCorrect: false, expl: 'SEALs is the US Navy special operations force.' }
    ],
    fact: 'SSG(N) commandos are trained in underwater demolition, anti-piracy, airborne insertion, and coastal combat.',
    diff: 'Foundation'
  },
  {
    q: 'SSG(N) stands for:',
    snip: 'Full form of SSG(N).',
    options: [
      { text: 'Special Services Group (Navy)', isCorrect: true, expl: 'SSG(N) stands for Special Services Group (Navy).' },
      { text: 'Special Security Group (Navy)', isCorrect: false, expl: 'SSG(N) stands for Special Services Group (Navy).' },
      { text: 'Strategic Services Group (Navy)', isCorrect: false, expl: 'SSG(N) stands for Special Services Group (Navy).' },
      { text: 'Special Support Group (Navy)', isCorrect: false, expl: 'SSG(N) stands for Special Services Group (Navy).' }
    ],
    fact: 'SSG(N) operates from PNS Iqbal in Karachi and PNS Qasim in Manora.',
    diff: 'Foundation'
  },
  {
    q: "Pakistan Navy's special forces are commonly known as:",
    snip: 'Common name / designation.',
    options: [
      { text: 'Navy SEALs', isCorrect: false, expl: 'SEALs is the US Navy designation.' },
      { text: 'Pakistan Navy SEALs', isCorrect: false, expl: 'The official Pakistani force designation is SSG(N).' },
      { text: 'Marine Commandos', isCorrect: false, expl: 'Pak Marines are a distinct amphibious branch.' },
      { text: 'SSG(N)', isCorrect: true, expl: 'They are officially and commonly designated as SSG(N) (Special Services Group Navy).' }
    ],
    fact: 'SSG(N) operates advanced mini-submarines (CosMoS class) for covert coastal operations.',
    diff: 'Foundation'
  },
  {
    q: 'Pakistan Navy operates submarines mainly for:',
    snip: 'Primary purpose of naval submarines.',
    options: [
      { text: 'Air transport', isCorrect: false, expl: 'Submarines travel submerged underwater.' },
      { text: 'Underwater warfare', isCorrect: true, expl: 'Submarines are deployed for subsurface surveillance, anti-submarine warfare (ASW), anti-surface vessel warfare, and deterrence.' },
      { text: 'Rescue only', isCorrect: false, expl: 'They are frontline combat naval vessels.' },
      { text: 'Coastal tourism', isCorrect: false, expl: 'They are military combat platforms.' }
    ],
    fact: 'Pakistan was the first South Asian navy to operate a submarine (PNS Ghazi in 1964).',
    diff: 'Foundation'
  },
  {
    q: "Pakistan's Agosta-class submarines were acquired from:",
    snip: 'Country supplying Agosta 70 and Agosta 90B submarines.',
    options: [
      { text: 'France', isCorrect: true, expl: 'Pakistan acquired Agosta-70 (Hashmat-class) and Agosta-90B (Khalid-class) diesel-electric submarines from France (Naval Group/DCNS).' },
      { text: 'China', isCorrect: false, expl: 'China is currently supplying 8 Hangor-class Type 039B submarines.' },
      { text: 'Russia', isCorrect: false, expl: 'Pakistan did not acquire Agosta submarines from Russia.' },
      { text: 'United States', isCorrect: false, expl: 'US leased PNS Ghazi (Tench-class) in 1964.' }
    ],
    fact: 'PNS Hamza (Agosta 90B) was assembled indigenously at Karachi Shipyard & Engineering Works (KS&EW).',
    diff: 'Foundation'
  },
  {
    q: "Pakistan's Agosta 90B submarines are also known as:",
    snip: 'Pakistani class name for Agosta 90B.',
    options: [
      { text: 'Khalid class', isCorrect: true, expl: 'The Agosta 90B submarines are officially designated the Khalid class (PNS Khalid, PNS Saad, PNS Hamza).' },
      { text: 'Azmat class', isCorrect: false, expl: 'Azmat class are fast attack stealth missile craft.' },
      { text: 'Hangor class', isCorrect: false, expl: 'Hangor class refers to the new 8 stealth AIP submarines.' },
      { text: 'Tariq class', isCorrect: false, expl: 'Tariq class were Type 21 frigates acquired from the UK.' }
    ],
    fact: 'The Khalid-class was the first submarine in the region to be equipped with Air-Independent Propulsion (AIP).',
    diff: 'Intermediate'
  },
  {
    q: 'The first submarine commissioned into Pakistan Navy was:',
    snip: 'Pakistan\'s first submarine (1964).',
    options: [
      { text: 'PNS Ghazi', isCorrect: true, expl: 'PNS Ghazi (formerly USS Diablo, SS-479) was commissioned into the Pakistan Navy on 1 June 1964.' },
      { text: 'PNS/M Hangor', isCorrect: false, expl: 'PNS Hangor (S131) was commissioned later in 1969 from France.' },
      { text: 'PNS Khalid', isCorrect: false, expl: 'PNS Khalid (S137) was commissioned in 1999.' },
      { text: 'PNS Saad', isCorrect: false, expl: 'PNS Saad (S138) was commissioned in 2002.' }
    ],
    fact: 'PNS Ghazi gave Pakistan the distinction of being the first submarine operator in South Asia.',
    diff: 'Foundation'
  },
  {
    q: 'PNS Ghazi was originally acquired from:',
    snip: 'Country providing USS Diablo (PNS Ghazi).',
    options: [
      { text: 'United States', isCorrect: true, expl: 'PNS Ghazi was a Tench-class submarine leased from the United States Navy under the Security Assistance Program.' },
      { text: 'France', isCorrect: false, expl: 'France supplied the Daphné and Agosta submarines.' },
      { text: 'China', isCorrect: false, expl: 'China provides modern naval platforms.' },
      { text: 'Britain', isCorrect: false, expl: 'Britain supplied initial frigates and destroyers.' }
    ],
    fact: 'PNS Ghazi operated during the 1965 War, blockading Bombay harbor.',
    diff: 'Foundation'
  },
  {
    q: 'PNS Ghazi was a:',
    snip: 'Vessel classification of PNS Ghazi.',
    options: [
      { text: 'Destroyer', isCorrect: false, expl: 'Destroyers include PNS Khaibar and PNS Badr.' },
      { text: 'Submarine', isCorrect: true, expl: 'PNS Ghazi was a long-range diesel-electric attack submarine.' },
      { text: 'Frigate', isCorrect: false, expl: 'Frigates include PNS Shamsher and PNS Zulfiquar.' },
      { text: 'Aircraft carrier', isCorrect: false, expl: 'Pakistan Navy has never operated an aircraft carrier.' }
    ],
    fact: 'PNS Ghazi was martyred off the coast of Visakhapatnam in December 1971.',
    diff: 'Foundation'
  },
  {
    q: 'The famous submarine that sank the Indian frigate INS Khukri in 1971 was:',
    snip: 'Submarine under Commander Ahmad Tasnim that achieved the post-WWII torpedo kill.',
    options: [
      { text: 'PNS Ghazi', isCorrect: false, expl: 'PNS Ghazi was deployed on the eastern seaboard.' },
      { text: 'PNS Hangor', isCorrect: true, expl: 'PNS Hangor (S131), commanded by Commander Ahmad Tasnim, torpedoed and sank the Indian Navy anti-submarine frigate INS Khukri on 9 December 1971.' },
      { text: 'PNS Khalid', isCorrect: false, expl: 'PNS Khalid was commissioned decades later.' },
      { text: 'PNS Saad', isCorrect: false, expl: 'PNS Saad was commissioned in 2002.' }
    ],
    fact: 'This was the first submarine kill of a surface warship anywhere in the world since World War II.',
    diff: 'Foundation'
  },
  {
    q: 'PNS Hangor belonged to the:',
    snip: 'Submarine class of PNS Hangor (S131).',
    options: [
      { text: 'Agosta class', isCorrect: false, expl: 'Agosta class was acquired in 1979.' },
      { text: 'Daphné class', isCorrect: true, expl: 'PNS Hangor was a Daphné-class submarine built by DCNS in France.' },
      { text: 'Yuan class', isCorrect: false, expl: 'Yuan class (Type 039B) is Chinese.' },
      { text: 'Oberon class', isCorrect: false, expl: 'Oberon class was British.' }
    ],
    fact: 'PNS Hangor also severely crippled a second Indian frigate, INS Kirpan, during the engagement.',
    diff: 'Intermediate'
  },
  {
    q: 'INS Khukri was sunk during the:',
    snip: 'Indo-Pak war during which INS Khukri was sunk.',
    options: [
      { text: '1948 war', isCorrect: false, expl: 'The 1948 conflict was in Kashmir.' },
      { text: '1965 war', isCorrect: false, expl: 'In 1965, Pakistan Navy conducted Operation Dwarka.' },
      { text: '1971 war', isCorrect: true, expl: 'INS Khukri was sunk on the night of 9 December during the 1971 Indo-Pakistan War.' },
      { text: 'Kargil conflict', isCorrect: false, expl: 'Kargil took place in 1999.' }
    ],
    fact: 'The sinking took place 30 miles off Diu on the western coast of India.',
    diff: 'Foundation'
  },
  {
    q: 'Pakistan Navy Day is observed on:',
    snip: 'Annual commemorative day of Pakistan Navy.',
    options: [
      { text: '6 September', isCorrect: false, expl: '6 September is Defence Day of Pakistan.' },
      { text: '7 September', isCorrect: false, expl: '7 September is Air Force Day.' },
      { text: '8 September', isCorrect: true, expl: 'Pakistan Navy Day is celebrated every year on 8 September.' },
      { text: '14 August', isCorrect: false, expl: '14 August is Independence Day.' }
    ],
    fact: '8 September commemorates Operation Dwarka (Operation Somnath) executed during the 1965 War.',
    diff: 'Foundation'
  },
  {
    q: "Navy Day commemorates Pakistan Navy's achievements during the:",
    snip: 'War commemorated on 8 September.',
    options: [
      { text: '1948 war', isCorrect: false, expl: '1948 was the first Kashmir conflict.' },
      { text: '1965 war', isCorrect: true, expl: 'Navy Day commemorates the triumphant naval bombardment of the Indian radar station at Dwarka on 8 September 1965.' },
      { text: '1971 war', isCorrect: false, expl: 'In 1971, PNS Hangor achieved the historic torpedo kill.' },
      { text: '1999 conflict', isCorrect: false, expl: '1999 was the Kargil conflict.' }
    ],
    fact: 'Operation Dwarka destroyed the Indian radar installation and tied down the Indian fleet.',
    diff: 'Foundation'
  },
  {
    q: "Pakistan's major naval base in Karachi is:",
    snip: 'Major naval base and amphibious facility.',
    options: [
      { text: 'PNS Mehran', isCorrect: false, expl: 'PNS Mehran is the primary naval air station.' },
      { text: 'PNS Bahadur', isCorrect: false, expl: 'PNS Bahadur is the premier training establishment.' },
      { text: 'PNS Qasim', isCorrect: true, expl: 'PNS Qasim at Manora, Karachi, is the major naval base and headquarters of the Pakistan Marines.' },
      { text: 'PNS Himalaya', isCorrect: false, expl: 'PNS Himalaya is the boot camp and junior sailor training school.' }
    ],
    fact: 'PNS Qasim hosts naval commando and marine amphibious units guarding Karachi harbor.',
    diff: 'Intermediate'
  },
  {
    q: 'PNS Mehran is associated with:',
    snip: 'Military branch operating PNS Mehran.',
    options: [
      { text: 'Pakistan Navy', isCorrect: true, expl: 'PNS Mehran is the premier naval aviation base of the Pakistan Navy.' },
      { text: 'Pakistan Army', isCorrect: false, expl: 'Pakistan Army operates Army Aviation bases.' },
      { text: 'Pakistan Air Force', isCorrect: false, expl: 'PAF operates bases like Faisal, Masroor, and Sarghoda.' },
      { text: 'Coast Guard', isCorrect: false, expl: 'Coast Guard is a maritime policing force.' }
    ],
    fact: 'PNS Mehran is situated adjacent to Faisal Air Base in Karachi.',
    diff: 'Foundation'
  },
  {
    q: 'PNS Mehran is primarily associated with:',
    snip: 'Core operational branch based at PNS Mehran.',
    options: [
      { text: 'Naval aviation', isCorrect: true, expl: 'PNS Mehran is the headquarters and main operating base for Pakistan Naval Aviation (P-3C Orion, ATR-72 MPA, Sea King helicopters).' },
      { text: 'Submarine production', isCorrect: false, expl: 'Submarines are built at Karachi Shipyard (KS&EW).' },
      { text: 'Army training', isCorrect: false, expl: 'Army training is conducted at PMA Kakul.' },
      { text: 'Shipbuilding', isCorrect: false, expl: 'Shipbuilding is at KS&EW.' }
    ],
    fact: 'Naval aviators at PNS Mehran maintain round-the-clock long-range maritime patrol over the Arabian Sea.',
    diff: 'Foundation'
  },
  {
    q: "Pakistan Navy's naval aviation is based significantly at:",
    snip: 'Primary naval air station.',
    options: [
      { text: 'PNS Mehran', isCorrect: true, expl: 'Pakistan Naval Aviation wings are stationed primarily at PNS Mehran in Karachi.' },
      { text: 'PMA Kakul', isCorrect: false, expl: 'PMA Kakul is the Army officer academy.' },
      { text: 'PAF Kamra', isCorrect: false, expl: 'PAF Kamra is an Air Force aeronautical hub.' },
      { text: 'HIT Taxila', isCorrect: false, expl: 'HIT Taxila is a tank manufacturing heavy industry.' }
    ],
    fact: 'PNS Mehran accommodates anti-submarine helicopters, reconnaissance aircraft, and maritime strike jets.',
    diff: 'Foundation'
  },
  {
    q: 'The Pakistan Navy protects Pakistan\'s:',
    snip: 'Strategic domain of Pakistan Navy.',
    options: [
      { text: 'Western land border only', isCorrect: false, expl: 'Western borders are defended by the Army and FC.' },
      { text: 'Maritime interests and coastline', isCorrect: true, expl: 'Pakistan Navy safeguards Pakistan\'s maritime borders, commercial sea lanes, deep-sea ports, and natural marine resources.' },
      { text: 'Airspace only', isCorrect: false, expl: 'Airspace is guarded by the Air Force.' },
      { text: 'Railways', isCorrect: false, expl: 'Railways are managed by Pakistan Railways and Railway Police.' }
    ],
    fact: 'Over 95% of Pakistan\'s international trade by volume moves via sea routes guarded by Pakistan Navy.',
    diff: 'Foundation'
  },

  // 76–100: Defence, Wars, Awards & Institutions
  {
    q: 'Pakistan Defence Day is observed on:',
    snip: 'Annual national Defence Day date.',
    options: [
      { text: '6 September', isCorrect: true, expl: 'Defence Day (Youm-e-Difa) is celebrated nationwide on 6 September.' },
      { text: '7 September', isCorrect: false, expl: '7 September is Air Force Day.' },
      { text: '8 September', isCorrect: false, expl: '8 September is Navy Day.' },
      { text: '23 March', isCorrect: false, expl: '23 March is Pakistan Day.' }
    ],
    fact: '6 September commemorates the day in 1965 when Pakistani armed forces and the entire nation stood united to foil surprise aggression.',
    diff: 'Foundation'
  },
  {
    q: "Defence Day commemorates Pakistan's defence during the:",
    snip: 'War commemorated on Defence Day.',
    options: [
      { text: '1948 war', isCorrect: false, expl: '1948 was the first Kashmir conflict.' },
      { text: '1965 war', isCorrect: true, expl: 'Defence Day commemorates the heroism, gallantry, and sacrifices during the 17-day September 1965 War.' },
      { text: '1971 war', isCorrect: false, expl: '1971 was fought six years later.' },
      { text: '1999 Kargil conflict', isCorrect: false, expl: 'Kargil conflict occurred in 1999.' }
    ],
    fact: 'Major battles were fought across the Lahore, Sialkot, Kasur, and Sindh sectors.',
    diff: 'Foundation'
  },
  {
    q: 'The highest military award of Pakistan is:',
    snip: 'Supreme military gallantry medal.',
    options: [
      { text: 'Hilal-e-Jurat', isCorrect: false, expl: 'Hilal-e-Jurat is the second-highest military award.' },
      { text: 'Sitara-e-Jurat', isCorrect: false, expl: 'Sitara-e-Jurat is the third-highest gallantry award.' },
      { text: 'Nishan-e-Haider', isCorrect: true, expl: 'Nishan-e-Haider (Sign of the Lion) is the highest and most prestigious military gallantry decoration of Pakistan.' },
      { text: 'Tamgha-e-Jurat', isCorrect: false, expl: 'Tamgha-e-Jurat is the fourth-highest gallantry award.' }
    ],
    fact: 'Only 11 courageous heroes in Pakistan\'s history have been conferred the supreme Nishan-e-Haider.',
    diff: 'Foundation'
  },
  {
    q: 'Nishan-e-Haider literally means:',
    snip: 'Literal translation of Nishan-e-Haider.',
    options: [
      { text: 'Star of the Nation', isCorrect: false, expl: 'Sitara-e-Imtiaz / Kaukab.' },
      { text: 'Order of the Lion', isCorrect: true, expl: 'Nishan-e-Haider translates to "Sign of the Lion" or "Order of the Lion", named after Hazrat Ali (RA) whose title was Asadullah (Lion of Allah) / Haider.' },
      { text: 'Flag of Victory', isCorrect: false, expl: 'Haider specifically refers to the Lion (Hazrat Ali).' },
      { text: 'Shield of Pakistan', isCorrect: false, expl: 'Nishan-e-Haider means Sign / Order of the Lion.' }
    ],
    fact: 'It is forged from gunmetal captured from enemy weapon systems in battle.',
    diff: 'Foundation'
  },
  {
    q: 'Nishan-e-Haider is awarded for:',
    snip: 'Criteria for conferring the Nishan-e-Haider.',
    options: [
      { text: 'Academic excellence', isCorrect: false, expl: 'Academic awards include civil awards like Pride of Performance.' },
      { text: 'Highest acts of valour in combat', isCorrect: true, expl: 'Nishan-e-Haider is awarded exclusively to members of the armed forces who have shown the highest acts of extraordinary bravery and supreme sacrifice facing the enemy.' },
      { text: 'Long military service only', isCorrect: false, expl: 'Service medals are distinct long-service awards.' },
      { text: 'Sports achievements', isCorrect: false, expl: 'Sports medals are separate awards.' }
    ],
    fact: 'Every single Nishan-e-Haider recipient has embraced martyrdom (Shahadat) while displaying unparalleled combat heroism.',
    diff: 'Foundation'
  },
  {
    q: 'The first recipient of Nishan-e-Haider was:',
    snip: 'First Nishan-e-Haider recipient in history.',
    options: [
      { text: 'Major Tufail Muhammad', isCorrect: false, expl: 'Major Tufail Muhammad was the second recipient (1958).' },
      { text: 'Captain Muhammad Sarwar', isCorrect: true, expl: 'Captain Muhammad Sarwar Shaheed (2/1 Punjab Regiment) was the first recipient of the Nishan-e-Haider for his martyrdom at Uri in July 1948.' },
      { text: 'Major Aziz Bhatti', isCorrect: false, expl: 'Major Aziz Bhatti was the 1965 hero at BRB Canal.' },
      { text: 'Major Raja Aziz Bhatti', isCorrect: false, expl: 'Awarded for his martyrdom in September 1965.' }
    ],
    fact: 'Captain Muhammad Sarwar charged an enemy machine-gun nest to secure a vital ridge in the Kashmir sector.',
    diff: 'Foundation'
  },
  {
    q: 'Captain Muhammad Sarwar was martyred during the:',
    snip: 'Conflict in which Captain Sarwar achieved martyrdom.',
    options: [
      { text: '1948 Kashmir conflict', isCorrect: true, expl: 'Captain Muhammad Sarwar embraced martyrdom on 27 July 1948 during the First Kashmir War.' },
      { text: '1965 war', isCorrect: false, expl: 'Major Aziz Bhatti was martyred in 1965.' },
      { text: '1971 war', isCorrect: false, expl: 'Major Shabbir Sharif, Major Akram, and Rashid Minhas were martyred in 1971.' },
      { text: 'Kargil conflict', isCorrect: false, expl: 'Captain Karnal Sher Khan and Havildar Lalak Jan were martyred in 1999.' }
    ],
    fact: 'He was born in Singhori village near Gujar Khan, Rawalpindi.',
    diff: 'Foundation'
  },
  {
    q: 'Major Tufail Muhammad was awarded:',
    snip: 'Gallantry medal of Major Tufail Muhammad.',
    options: [
      { text: 'Sitara-e-Jurat', isCorrect: false, expl: 'He received the Nishan-e-Haider.' },
      { text: 'Nishan-e-Haider', isCorrect: true, expl: 'Major Tufail Muhammad Shaheed (16th Punjab Regiment) was posthumously awarded the Nishan-e-Haider for his heroic leadership at Lakshmipur in August 1958.' },
      { text: 'Hilal-e-Imtiaz', isCorrect: false, expl: 'He received the supreme Nishan-e-Haider.' },
      { text: 'Tamgha-e-Jurat', isCorrect: false, expl: 'He received the Nishan-e-Haider.' }
    ],
    fact: 'Despite being mortally wounded, he continued to lead his men and destroyed the enemy post before embracing martyrdom.',
    diff: 'Foundation'
  },
  {
    q: 'Major Raja Aziz Bhatti was a hero of the:',
    snip: 'War in which Major Aziz Bhatti defended the BRB canal.',
    options: [
      { text: '1948 war', isCorrect: false, expl: 'Captain Sarwar was the 1948 hero.' },
      { text: '1965 war', isCorrect: true, expl: 'Major Raja Aziz Bhatti defended the Burki sector on the BRB Canal for six days and nights against heavy enemy armor in September 1965.' },
      { text: '1971 war', isCorrect: false, expl: 'He embraced martyrdom on 12 September 1965.' },
      { text: '1999 conflict', isCorrect: false, expl: 'Kargil took place in 1999.' }
    ],
    fact: 'He personally directed artillery fire from an elevated bunker and refused to be relieved.',
    diff: 'Foundation'
  },
  {
    q: 'Major Raja Aziz Bhatti received:',
    snip: 'Award conferred on Major Raja Aziz Bhatti Shaheed.',
    options: [
      { text: 'Nishan-e-Haider', isCorrect: true, expl: 'Major Raja Aziz Bhatti was posthumously awarded Pakistan\'s highest gallantry medal, the Nishan-e-Haider.' },
      { text: 'Sitara-e-Jurat', isCorrect: false, expl: 'He received the Nishan-e-Haider.' },
      { text: 'Hilal-e-Jurat', isCorrect: false, expl: 'He received the Nishan-e-Haider.' },
      { text: 'Tamgha-e-Shujaat', isCorrect: false, expl: 'Tamgha-e-Shujaat is a civil bravery award.' }
    ],
    fact: 'Major Aziz Bhatti is honored as the "Protector of Lahore" (Muhafiz-e-Lahore).',
    diff: 'Foundation'
  },
  {
    q: 'Major Shabbir Sharif was martyred during the:',
    snip: 'War in which Major Shabbir Sharif was martyred.',
    options: [
      { text: '1965 war', isCorrect: false, expl: 'He was awarded the Sitara-e-Jurat in the 1965 war.' },
      { text: '1971 war', isCorrect: true, expl: 'Major Shabbir Sharif embraced martyrdom on 6 December 1971 at the Sulemanki sector in the 1971 War.' },
      { text: 'Kargil conflict', isCorrect: false, expl: 'Kargil was fought in 1999.' },
      { text: '1948 war', isCorrect: false, expl: '1948 was the first Kashmir conflict.' }
    ],
    fact: 'Major Shabbir Sharif is the only person to receive both the Nishan-e-Haider and the Sitara-e-Jurat.',
    diff: 'Foundation'
  },
  {
    q: 'Major Shabbir Sharif was awarded:',
    snip: 'Supreme gallantry honor.',
    options: [
      { text: 'Nishan-e-Haider', isCorrect: true, expl: 'Major Shabbir Sharif (6 FF Regiment) was awarded the Nishan-e-Haider for his gallantry in capturing the Sabuna distributary and enemy bunkers.' },
      { text: 'Sitara-e-Jurat', isCorrect: false, expl: 'While he earned SJ in 1965, his supreme martyrdom award was the Nishan-e-Haider.' },
      { text: 'Hilal-e-Jurat', isCorrect: false, expl: 'He received the Nishan-e-Haider.' },
      { text: 'Tamgha-e-Jurat', isCorrect: false, expl: 'He received the Nishan-e-Haider.' }
    ],
    fact: 'He killed the enemy company commander Major Narain Singh in hand-to-hand combat.',
    diff: 'Foundation'
  },
  {
    q: 'Major Shabbir Sharif was the elder brother of:',
    snip: 'Brother who later served as Chief of Army Staff.',
    options: [
      { text: 'Gen. Raheel Sharif', isCorrect: true, expl: 'Major Shabbir Sharif Shaheed was the elder brother of General Raheel Sharif, who served as Chief of Army Staff (2013–2016).' },
      { text: 'Gen. Pervez Musharraf', isCorrect: false, expl: 'Gen. Musharraf was COAS from 1998 to 2007.' },
      { text: 'Gen. Ashfaq Parvez Kayani', isCorrect: false, expl: 'Gen. Kayani was COAS from 2007 to 2013.' },
      { text: 'Gen. Qamar Javed Bajwa', isCorrect: false, expl: 'Gen. Bajwa was COAS from 2016 to 2022.' }
    ],
    fact: 'Their maternal uncle, Major Raja Aziz Bhatti Shaheed, also earned the Nishan-e-Haider.',
    diff: 'Foundation'
  },
  {
    q: 'The first woman to receive Nishan-e-Haider was:',
    snip: 'Female recipients of Nishan-e-Haider.',
    options: [
      { text: 'None', isCorrect: false, expl: 'No female has received the Nishan-e-Haider.' },
      { text: 'Major General Nigar Johar', isCorrect: false, expl: 'Major General (later Lt. Gen.) Nigar Johar is Pakistan\'s first female Lieutenant General.' },
      { text: 'No female has received it', isCorrect: true, expl: 'No female military officer has received the Nishan-e-Haider; all 11 recipients to date have been male combat martyrs.' },
      { text: 'Brigadier Shahida Malik', isCorrect: false, expl: 'Brigadier (later Major General) Shahida Malik was Pakistan Army\'s first female two-star general.' }
    ],
    fact: 'To date, exactly 11 combat heroes have been conferred the Nishan-e-Haider.',
    diff: 'Intermediate'
  },
  {
    q: 'Which institution conducts selection tests for prospective armed forces officers?',
    snip: 'Centralized military recruitment board.',
    options: [
      { text: 'FPSC', isCorrect: false, expl: 'FPSC conducts tests for civil services (CSS).' },
      { text: 'ISSB', isCorrect: true, expl: 'The Inter Services Selection Board (ISSB) conducts psychometric, physical, and leadership aptitude tests for officer candidates.' },
      { text: 'HEC', isCorrect: false, expl: 'HEC is the Higher Education Commission.' },
      { text: 'NTS', isCorrect: false, expl: 'NTS conducts national academic testing.' }
    ],
    fact: 'ISSB serves all three branches: Pakistan Army, Pakistan Navy, and Pakistan Air Force.',
    diff: 'Foundation'
  },
  {
    q: 'The Inter-Services Intelligence agency is commonly known as:',
    snip: 'Premier intelligence service.',
    options: [
      { text: 'ISI', isCorrect: true, expl: 'The Inter-Services Intelligence is universally known by its acronym ISI.' },
      { text: 'ISB', isCorrect: false, expl: 'ISB is an abbreviation for Islamabad.' },
      { text: 'IIB', isCorrect: false, expl: 'ISI is the Inter-Services Intelligence.' },
      { text: 'IBP', isCorrect: false, expl: 'IB is Intelligence Bureau.' }
    ],
    fact: 'The ISI was established in 1948 by Major General Robert Cawthorne to coordinate inter-service intelligence.',
    diff: 'Foundation'
  },
  {
    q: 'ISI stands for:',
    snip: 'Full form of ISI.',
    options: [
      { text: 'Inter-Services Intelligence', isCorrect: true, expl: 'ISI stands for Inter-Services Intelligence.' },
      { text: 'International Security Intelligence', isCorrect: false, expl: 'ISI stands for Inter-Services Intelligence.' },
      { text: 'Internal Services Intelligence', isCorrect: false, expl: 'ISI stands for Inter-Services Intelligence.' },
      { text: 'Inter-State Intelligence', isCorrect: false, expl: 'ISI stands for Inter-Services Intelligence.' }
    ],
    fact: 'The agency is headed by a serving Lieutenant General appointed as Director-General (DG ISI).',
    diff: 'Foundation'
  },
  {
    q: "Pakistan's Inter-Services Public Relations is abbreviated as:",
    snip: 'Media wing of the Pakistan Armed Forces.',
    options: [
      { text: 'ISPR', isCorrect: true, expl: 'Inter-Services Public Relations is abbreviated as ISPR.' },
      { text: 'ISPRC', isCorrect: false, expl: 'The correct abbreviation is ISPR.' },
      { text: 'IPRA', isCorrect: false, expl: 'The media wing is ISPR.' },
      { text: 'PSIR', isCorrect: false, expl: 'The media wing is ISPR.' }
    ],
    fact: 'ISPR was established in 1949 with Colonel Shahbaz Khan as its first director.',
    diff: 'Foundation'
  },
  {
    q: 'ISPR primarily deals with:',
    snip: 'Mandate of ISPR.',
    options: [
      { text: 'Military public relations and media', isCorrect: true, expl: 'ISPR coordinates and broadcasts official information, media relations, documentaries, and press briefings for the Pakistan Armed Forces.' },
      { text: 'Tax collection', isCorrect: false, expl: 'Tax collection is managed by the Federal Board of Revenue (FBR).' },
      { text: 'Elections', isCorrect: false, expl: 'Elections are conducted by the Election Commission of Pakistan (ECP).' },
      { text: 'Foreign trade', isCorrect: false, expl: 'Foreign trade is managed by the Ministry of Commerce.' }
    ],
    fact: 'ISPR is headed by the Director General ISPR, typically a two-star Major General.',
    diff: 'Foundation'
  },
  {
    q: "The Pakistan Army's main engineering organization involved in major infrastructure projects is:",
    snip: 'Military engineering civil construction body.',
    options: [
      { text: 'FWO', isCorrect: true, expl: 'The Frontier Works Organization (FWO) is the Pakistan Army\'s premier military engineering construction organization.' },
      { text: 'SUPARCO', isCorrect: false, expl: 'SUPARCO is the national space agency.' },
      { text: 'NESCOM', isCorrect: false, expl: 'NESCOM develops defense technologies.' },
      { text: 'PAEC', isCorrect: false, expl: 'PAEC is the Pakistan Atomic Energy Commission.' }
    ],
    fact: 'FWO constructed the world-famous Karakoram Highway (KKH), overcoming extreme mountainous terrain.',
    diff: 'Foundation'
  },
  {
    q: 'FWO stands for:',
    snip: 'Full form of FWO.',
    options: [
      { text: 'Frontier Works Organization', isCorrect: true, expl: 'FWO stands for Frontier Works Organization.' },
      { text: 'Federal Works Organization', isCorrect: false, expl: 'FWO stands for Frontier Works Organization.' },
      { text: 'Frontier Welfare Organization', isCorrect: false, expl: 'FWO stands for Frontier Works Organization.' },
      { text: 'Force Works Office', isCorrect: false, expl: 'FWO stands for Frontier Works Organization.' }
    ],
    fact: 'FWO has built thousands of kilometers of motorways, tunnels, bridges, and railway lines across Pakistan.',
    diff: 'Foundation'
  },
  {
    q: 'FWO was established in:',
    snip: 'Establishment year of Frontier Works Organization.',
    options: [
      { text: '1947', isCorrect: false, expl: 'Pakistan gained independence in 1947.' },
      { text: '1966', isCorrect: true, expl: 'FWO was raised in 1966 specifically to undertake the monumental construction of the Karakoram Highway.' },
      { text: '1971', isCorrect: false, expl: '1971 was the third Indo-Pak war.' },
      { text: '1980', isCorrect: false, expl: 'FWO was established in 1966.' }
    ],
    fact: 'FWO engineers and sappers sacrificed over 500 lives during the construction of the Karakoram Highway.',
    diff: 'Intermediate'
  },
  {
    q: 'The Heavy Industries Taxila is commonly abbreviated as:',
    snip: 'Abbreviation of Heavy Industries Taxila.',
    options: [
      { text: 'HIT', isCorrect: true, expl: 'Heavy Industries Taxila is commonly abbreviated as HIT.' },
      { text: 'HITECH', isCorrect: false, expl: 'The official military abbreviation is HIT.' },
      { text: 'HITS', isCorrect: false, expl: 'The correct abbreviation is HIT.' },
      { text: 'HIA', isCorrect: false, expl: 'The correct abbreviation is HIT.' }
    ],
    fact: 'HIT is located in Taxila, Punjab, comprising heavy manufacturing and rebuild facilities.',
    diff: 'Foundation'
  },
  {
    q: 'Heavy Industries Taxila is primarily involved in:',
    snip: 'Primary manufacturing mission of HIT.',
    options: [
      { text: 'Defence production and maintenance', isCorrect: true, expl: 'HIT designs, manufactures, upgrades, and overhauls Main Battle Tanks (Al-Khalid, Al-Zarrar), Armored Personnel Carriers (Talha, Saad), and security vehicles.' },
      { text: 'Space exploration', isCorrect: false, expl: 'Space exploration is managed by SUPARCO.' },
      { text: 'Naval shipbuilding', isCorrect: false, expl: 'Naval shipbuilding is conducted at Karachi Shipyard (KS&EW).' },
      { text: 'Civil aviation', isCorrect: false, expl: 'Civil aviation is managed by CAA.' }
    ],
    fact: 'HIT was established in 1971 and has grown into a major hub of armored vehicle innovation.',
    diff: 'Foundation'
  },
  {
    q: 'The three principal armed forces of Pakistan are:',
    snip: 'Three tri-service military branches of Pakistan.',
    options: [
      { text: 'Army, Police and Rangers', isCorrect: false, expl: 'Police and Rangers are civilian / paramilitary law enforcement forces.' },
      { text: 'Army, Navy and Air Force', isCorrect: true, expl: 'The three principal armed forces of Pakistan are the Pakistan Army, the Pakistan Navy, and the Pakistan Air Force.' },
      { text: 'Army, Air Force and FIA', isCorrect: false, expl: 'FIA is the Federal Investigation Agency.' },
      { text: 'Navy, Rangers and Coast Guard', isCorrect: false, expl: 'Rangers and Coast Guard are paramilitary and coastal security forces.' }
    ],
    fact: 'The three services operate under the constitutional command of the Chairman Joint Chiefs of Staff Committee (CJCSC) and Ministry of Defence.',
    diff: 'Foundation'
  }
];

export function buildExactMilitary() {
  const letters = ['A', 'B', 'C', 'D'];
  const questions: QuizQuestion[] = exactMilitaryRaw.map((item, idx) => {
    return {
      id: 5001 + idx,
      category: 'Military Gallantry',
      categoryIcon: 'ShieldAlert',
      difficulty: item.diff as 'Foundation' | 'Intermediate' | 'Scholar',
      question: item.q,
      contextSnippet: item.snip,
      options: item.options.map((opt, optIdx) => ({
        id: letters[optIdx],
        text: opt.text,
        isCorrect: opt.isCorrect,
        explanation: opt.expl
      })),
      funFact: item.fact
    };
  });

  const output = `import { QuizQuestion } from '../types';

export const MILITARY_QUESTIONS: QuizQuestion[] = ${JSON.stringify(questions, null, 2)};
`;

  fs.writeFileSync('src/data/military.ts', output, 'utf8');
  console.log(`[SUCCESS] Wrote ${questions.length} exact military questions to src/data/military.ts!`);
}

buildExactMilitary();
