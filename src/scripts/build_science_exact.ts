import fs from 'fs';
import { QuizQuestion } from '../types';

export const exactScienceRaw = [
  // 401–425: Space & Astronomy
  {
    q: "Pakistan's national space agency is:",
    snip: 'National executive space research body.',
    options: [
      { text: 'PAEC', isCorrect: false, expl: 'PAEC is the Pakistan Atomic Energy Commission.' },
      { text: 'SUPARCO', isCorrect: true, expl: 'SUPARCO (Space and Upper Atmosphere Research Commission) is Pakistan\'s national executive space agency.' },
      { text: 'NESCOM', isCorrect: false, expl: 'NESCOM is the National Engineering and Scientific Commission.' },
      { text: 'PCSIR', isCorrect: false, expl: 'PCSIR is the Pakistan Council of Scientific and Industrial Research.' }
    ],
    fact: 'SUPARCO was established on 16 September 1961 upon the recommendation of Nobel Laureate Prof. Dr. Abdus Salam.',
    diff: 'Foundation'
  },
  {
    q: 'SUPARCO was established in:',
    snip: 'Founding year of Pakistan\'s space agency.',
    options: [
      { text: '1956', isCorrect: false, expl: '1956 was the founding year of PAEC.' },
      { text: '1961', isCorrect: true, expl: 'SUPARCO was established in September 1961, making Pakistan one of the earliest Asian countries to initiate a space programme.' },
      { text: '1965', isCorrect: false, expl: '1965 was the Indo-Pakistani War.' },
      { text: '1972', isCorrect: false, expl: '1972 was the year KANUPP-1 became operational.' }
    ],
    fact: 'Pakistan launched its first sounding rocket "Rehbar-1" in June 1962, just nine months after SUPARCO\'s creation.',
    diff: 'Foundation'
  },
  {
    q: 'SUPARCO stands for:',
    snip: 'Full official acronym expansion.',
    options: [
      { text: 'Space and Upper Atmosphere Research Commission', isCorrect: true, expl: 'SUPARCO stands for the Space and Upper Atmosphere Research Commission.' },
      { text: 'Space and Universal Research Corporation', isCorrect: false, expl: 'Not the official title.' },
      { text: 'Satellite and Upper Research Commission', isCorrect: false, expl: 'Not the official title.' },
      { text: 'Space Research and Communication Organization', isCorrect: false, expl: 'Not the official title.' }
    ],
    fact: 'It was originally established as a committee before being upgraded into an autonomous executive commission in 1981.',
    diff: 'Foundation'
  },
  {
    q: "Pakistan's first satellite was:",
    snip: 'Historic first artificial satellite in orbit.',
    options: [
      { text: 'PAKSAT-1', isCorrect: false, expl: 'PAKSAT-1 was a geostationary communications satellite leased in 2002.' },
      { text: 'Badr-1', isCorrect: true, expl: 'Badr-1 (Badr-A) was Pakistan\'s first indigenous digital communications and experimental satellite.' },
      { text: 'PRSS-1', isCorrect: false, expl: 'PRSS-1 is an electro-optical remote sensing satellite launched in 2018.' },
      { text: 'iCube-Q', isCorrect: false, expl: 'iCube-Q is Pakistan\'s 2024 lunar orbiter cubesat.' }
    ],
    fact: 'Badr-1 was built by SUPARCO engineers and transmitted telemetry and stored message packets across global amateur radio frequencies.',
    diff: 'Foundation'
  },
  {
    q: 'Badr-1 was launched in:',
    snip: 'Year of Badr-1 orbital deployment.',
    options: [
      { text: '1985', isCorrect: false, expl: '1985 was prior to the Badr launch.' },
      { text: '1990', isCorrect: true, expl: 'Badr-1 was successfully launched into low Earth orbit on 16 July 1990.' },
      { text: '1995', isCorrect: false, expl: '1995 was midway through the decade.' },
      { text: '2000', isCorrect: false, expl: '2000 was prior to Badr-B launch in 2001.' }
    ],
    fact: 'With the launch of Badr-1 in 1990, Pakistan became the first country in the Muslim world to place an indigenously built satellite into orbit.',
    diff: 'Foundation'
  },
  {
    q: 'Badr-1 was launched into space using a rocket from:',
    snip: 'Launch vehicle provider country.',
    options: [
      { text: 'China', isCorrect: true, expl: 'Badr-1 was launched aboard a Chinese Long March 2E (LM-2E) carrier rocket.' },
      { text: 'United States', isCorrect: false, expl: 'US rockets launched early Rehbar sounding rockets in 1962, but not Badr-1.' },
      { text: 'France', isCorrect: false, expl: 'Arianespace was not used for Badr-1.' },
      { text: 'Russia', isCorrect: false, expl: 'Badr-B was later launched on a Russian Zenot rocket in 2001, but Badr-1 used a Chinese rocket.' }
    ],
    fact: 'The Long March 2E was launched from the Xichang Satellite Launch Center carrying Badr-1 as a secondary piggyback payload.',
    diff: 'Foundation'
  },
  {
    q: "Pakistan's first satellite was launched from:",
    snip: 'Chinese spaceport launch facility.',
    options: [
      { text: 'Jiuquan Satellite Launch Centre', isCorrect: false, expl: 'PRSS-1 was launched from Jiuquan in 2018, whereas Badr-1 was launched from Xichang in China.' },
      { text: 'Xichang Satellite Launch Centre', isCorrect: true, expl: 'Badr-1 was launched from the Xichang Satellite Launch Center in Sichuan, China on 16 July 1990.' },
      { text: 'Baikonur', isCorrect: false, expl: 'Baikonur Cosmodrome is in Kazakhstan.' },
      { text: 'Cape Canaveral', isCorrect: false, expl: 'Cape Canaveral is in Florida, USA.' }
    ],
    fact: 'The launch was a historic milestone in Pak-China aerospace collaboration.',
    diff: 'Intermediate'
  },
  {
    q: "Pakistan's PRSS-1 is primarily a:",
    snip: 'Type and payload purpose of PRSS-1.',
    options: [
      { text: 'Remote-sensing satellite', isCorrect: true, expl: 'Pakistan Remote Sensing Satellite-1 (PRSS-1) is a high-resolution optical remote sensing satellite used for cartography, disaster management, and environmental monitoring.' },
      { text: 'Weather balloon', isCorrect: false, expl: 'It is a sophisticated orbital spacecraft.' },
      { text: 'Space telescope', isCorrect: false, expl: 'It points down at Earth for geospatial imagery.' },
      { text: 'Navigation satellite', isCorrect: false, expl: 'Pakistan utilizes BeiDou navigation services.' }
    ],
    fact: 'PRSS-1 provides sub-meter resolution Earth imagery for resource management and agricultural planning.',
    diff: 'Foundation'
  },
  {
    q: 'PRSS-1 was launched in:',
    snip: 'Year of PRSS-1 launch.',
    options: [
      { text: '2016', isCorrect: false, expl: '2016 was development phase.' },
      { text: '2017', isCorrect: false, expl: '2017 was one year prior to launch.' },
      { text: '2018', isCorrect: true, expl: 'PRSS-1 was launched into a Sun-synchronous orbit on 9 July 2018.' },
      { text: '2020', isCorrect: false, expl: '2020 was two years after PRSS-1.' }
    ],
    fact: 'It was launched alongside the PakTES-1A technological evaluation satellite.',
    diff: 'Foundation'
  },
  {
    q: 'PRSS-1 was launched from:',
    snip: 'Spaceport location for PRSS-1.',
    options: [
      { text: 'China', isCorrect: true, expl: 'PRSS-1 was launched aboard a Chinese Long March 2C rocket from the Jiuquan Satellite Launch Centre in the Gobi Desert, China.' },
      { text: 'Russia', isCorrect: false, expl: 'Russia was not the launch provider for PRSS-1.' },
      { text: 'Pakistan', isCorrect: false, expl: 'Pakistan currently operates sub-orbital sounding ranges (Sonmiani), while orbital launches use Chinese spaceports.' },
      { text: 'India', isCorrect: false, expl: 'Not the launch provider.' }
    ],
    fact: 'The satellite operates in a Sun-synchronous low Earth orbit at an altitude of approximately 640 km.',
    diff: 'Foundation'
  },
  {
    q: "Pakistan's iCube-Qamar mission was launched in:",
    snip: 'Year of historic lunar cubesat deployment.',
    options: [
      { text: '2022', isCorrect: false, expl: '2022 was during testing and integration.' },
      { text: '2023', isCorrect: false, expl: '2023 was the payload delivery year.' },
      { text: '2024', isCorrect: true, expl: 'iCube-Qamar (iCube-Q) was launched on 3 May 2024 to enter lunar orbit.' },
      { text: '2025', isCorrect: false, expl: '2025 is in the future.' }
    ],
    fact: 'With iCube-Qamar in May 2024, Pakistan became the sixth nation to place an active scientific spacecraft in lunar orbit.',
    diff: 'Foundation'
  },
  {
    q: 'iCube-Qamar was associated with Pakistan\'s mission to:',
    snip: 'Target celestial body.',
    options: [
      { text: 'Mars', isCorrect: false, expl: 'Mars is the fourth planet from the Sun.' },
      { text: 'Moon', isCorrect: true, expl: 'iCube-Qamar ("Qamar" meaning Moon in Arabic/Urdu) was Pakistan\'s maiden lunar orbiter mission.' },
      { text: 'Venus', isCorrect: false, expl: 'Venus is the second planet.' },
      { text: 'Jupiter', isCorrect: false, expl: 'Jupiter is the largest gas giant.' }
    ],
    fact: 'The miniature satellite carries two optical cameras that captured stunning high-resolution pictures of the Moon and Earth.',
    diff: 'Foundation'
  },
  {
    q: 'iCube-Qamar was developed primarily by:',
    snip: 'Academic aerospace research institution.',
    options: [
      { text: 'Institute of Space Technology', isCorrect: true, expl: 'iCube-Qamar was designed and developed by faculty and students at the Institute of Space Technology (IST) in Islamabad in collaboration with China\'s SJTU and SUPARCO.' },
      { text: 'NUST only', isCorrect: false, expl: 'NUST is another leading tech university.' },
      { text: 'SUPARCO only', isCorrect: false, expl: 'SUPARCO collaborated, but IST led the satellite development team.' },
      { text: 'Pakistan Atomic Energy Commission', isCorrect: false, expl: 'PAEC handles nuclear science.' }
    ],
    fact: 'The satellite weighs approximately 7 kg and incorporates indigenous imaging sensors and power systems.',
    diff: 'Foundation'
  },
  {
    q: 'iCube-Qamar was launched aboard a Chinese:',
    snip: 'International lunar exploration spacecraft.',
    options: [
      { text: "Chang'e-6 mission", isCorrect: true, expl: 'iCube-Qamar was carried aboard China\'s historic Chang\'e-6 lunar sample return mission launched from Wenchang Space Launch Site.' },
      { text: 'Shenzhou mission', isCorrect: false, expl: 'Shenzhou is China\'s crewed spacecraft series.' },
      { text: 'Tianwen-1 mission', isCorrect: false, expl: 'Tianwen-1 was China\'s Mars exploration mission.' },
      { text: 'Long March-5B mission', isCorrect: false, expl: 'Long March 5 is the launch vehicle; Chang\'e-6 was the mission.' }
    ],
    fact: 'Chang\'e-6 successfully collected the world\'s first soil and rock samples from the far side (South Pole-Aitken basin) of the Moon.',
    diff: 'Foundation'
  },
  {
    q: 'The primary purpose of iCube-Qamar included:',
    snip: 'Main scientific payload objective.',
    options: [
      { text: 'Imaging the Moon', isCorrect: true, expl: 'The primary objective of iCube-Qamar was taking high-definition optical imagery of the lunar surface, capturing the Earth-Moon system, and measuring deep-space magnetic fields.' },
      { text: 'Mining the Moon', isCorrect: false, expl: 'Lunar mining is not yet operational.' },
      { text: 'Landing humans', isCorrect: false, expl: 'It is a robotic 7 kg CubeSat orbiter.' },
      { text: 'Building a lunar base', isCorrect: false, expl: 'Base construction is planned for future International Lunar Research Station phases.' }
    ],
    fact: 'The first official lunar pictures taken by iCube-Qamar were formally presented by IST and SUPARCO on 10 May 2024.',
    diff: 'Foundation'
  },
  {
    q: "Pakistan's satellite communication system includes:",
    snip: 'National communication satellite fleet.',
    options: [
      { text: 'PAKSAT', isCorrect: true, expl: 'PAKSAT (including PAKSAT-1, PAKSAT-1R, and PAKSAT-MM1) is Pakistan\'s dedicated fleet of geostationary telecommunications and broadband satellites.' },
      { text: 'Badr only', isCorrect: false, expl: 'Badr was an early experimental LEO series.' },
      { text: 'PRSS only', isCorrect: false, expl: 'PRSS is for remote sensing.' },
      { text: 'iCube only', isCorrect: false, expl: 'iCube is for lunar and nanosatellite research.' }
    ],
    fact: 'PAKSAT satellites provide direct-to-home (DTH) television, commercial cellular backhaul, and high-speed satellite internet across Pakistan and South Asia.',
    diff: 'Foundation'
  },
  {
    q: 'PAKSAT is primarily associated with:',
    snip: 'Operational function of the PAKSAT series.',
    options: [
      { text: 'Communication satellites', isCorrect: true, expl: 'PAKSAT operates geostationary telecommunications, DTH broadcast, and broadband data relays across Pakistan, Central Asia, and the Middle East.' },
      { text: 'Fighter aircraft', isCorrect: false, expl: 'JF-17 Thunder is a fighter aircraft.' },
      { text: 'Nuclear reactors', isCorrect: false, expl: 'KANUPP and Chashma are nuclear reactors.' },
      { text: 'Weather stations', isCorrect: false, expl: 'PMD operates terrestrial weather stations.' }
    ],
    fact: 'PAKSAT-MM1 (Multi-Mission Satellite 1) was launched into geostationary orbit in May 2024.',
    diff: 'Foundation'
  },
  {
    q: 'The Institute of Space Technology is located in:',
    snip: 'City location of IST.',
    options: [
      { text: 'Islamabad', isCorrect: true, expl: 'The Institute of Space Technology (IST) is located on the Islamabad Highway in Islamabad.' },
      { text: 'Karachi', isCorrect: false, expl: 'Karachi hosts SUPARCO\'s headquarters and instrumentation labs.' },
      { text: 'Lahore', isCorrect: false, expl: 'Lahore hosts SPARCENT (SUPARCO\'s satellite ground station).' },
      { text: 'Peshawar', isCorrect: false, expl: 'Peshawar is the provincial capital of KP.' }
    ],
    fact: 'IST was established in 2002 under the auspices of SUPARCO to cultivate aerospace and satellite engineering expertise.',
    diff: 'Foundation'
  },
  {
    q: 'The Pakistan Space and Upper Atmosphere Research Commission is responsible for:',
    snip: 'Core statutory mandate of SUPARCO.',
    options: [
      { text: 'Space and upper-atmosphere research', isCorrect: true, expl: 'SUPARCO is mandated to conduct research in space science, satellite development, planetary exploration, atmospheric physics, and satellite applications.' },
      { text: 'Nuclear weapons production', isCorrect: false, expl: 'Managed by PAEC and strategic agencies.' },
      { text: 'Railway development', isCorrect: false, expl: 'Managed by Pakistan Railways.' },
      { text: 'Banking regulation', isCorrect: false, expl: 'Regulated by the State Bank of Pakistan.' }
    ],
    fact: 'SUPARCO operates satellite tracking ground stations in Karachi, Islamabad, and Lahore.',
    diff: 'Foundation'
  },
  {
    q: "Pakistan's first space research organization was established under the leadership of:",
    snip: 'Pioneering scientific visionary.',
    options: [
      { text: 'Dr. Abdus Salam', isCorrect: true, expl: 'Nobel Laureate Prof. Dr. Abdus Salam, as Chief Scientific Advisor to President Ayub Khan, established SUPARCO in September 1961.' },
      { text: 'Dr. A.Q. Khan', isCorrect: false, expl: 'Dr. A.Q. Khan founded KRL for uranium enrichment.' },
      { text: 'Dr. Samar Mubarakmand', isCorrect: false, expl: 'Dr. Mubarakmand headed NESCOM and Chagai nuclear diagnostics.' },
      { text: 'Dr. Ishfaq Ahmad', isCorrect: false, expl: 'Dr. Ishfaq Ahmad was a senior nuclear physicist at PAEC.' }
    ],
    fact: 'Dr. Salam negotiated early rocket testing agreements with NASA and CNES, allowing Pakistan to launch Rehbar-1 in 1962.',
    diff: 'Foundation'
  },
  {
    q: 'Abdus Salam was involved in establishing Pakistan\'s early:',
    snip: 'National research program spearheaded by Salam.',
    options: [
      { text: 'Space research programme', isCorrect: true, expl: 'Dr. Abdus Salam personally founded and guided Pakistan\'s space research programme (SUPARCO) and nuclear science foundations at PAEC.' },
      { text: 'Cricket programme', isCorrect: false, expl: 'He was a theoretical physicist.' },
      { text: 'Textile programme', isCorrect: false, expl: 'He was focused on fundamental scientific institutions.' },
      { text: 'Railways', isCorrect: false, expl: 'Railways are managed by the Ministry of Railways.' }
    ],
    fact: 'Dr. Salam also established PINSTECH (Pakistan Institute of Nuclear Science and Technology) in Nilore, Islamabad.',
    diff: 'Foundation'
  },
  {
    q: 'Pakistan launched a lunar orbiter in collaboration with:',
    snip: 'International space partner nation.',
    options: [
      { text: 'China', isCorrect: true, expl: 'Pakistan collaborated with China National Space Administration (CNSA) and Shanghai Jiao Tong University to launch iCube-Q on the Chang\'e-6 mission in 2024.' },
      { text: 'USA', isCorrect: false, expl: 'NASA collaborated with Pakistan in the 1960s on sounding rockets.' },
      { text: 'Japan', isCorrect: false, expl: 'JAXA is Japan\'s space agency.' },
      { text: 'Russia', isCorrect: false, expl: 'Roscosmos is Russia\'s space agency.' }
    ],
    fact: 'The China-Pakistan space cooperation encompasses satellite manufacturing, Earth observation, and deep-space lunar research.',
    diff: 'Foundation'
  },
  {
    q: 'The Chinese lunar mission carrying Pakistan\'s iCube-Qamar was:',
    snip: 'Mission identifier of the lunar mission.',
    options: [
      { text: "Chang'e-4", isCorrect: false, expl: "Chang'e-4 landed on the lunar far side in 2019." },
      { text: "Chang'e-5", isCorrect: false, expl: "Chang'e-5 returned near-side lunar samples in 2020." },
      { text: "Chang'e-6", isCorrect: true, expl: "Chang'e-6 carried Pakistan's iCube-Qamar cubesat as an international scientific piggyback payload in May 2024." },
      { text: "Chang'e-7", isCorrect: false, expl: "Chang'e-7 is planned for lunar south pole exploration in 2026." }
    ],
    fact: "Chang'e-6 successfully completed its 53-day mission, returning the first far-side lunar samples back to Earth in June 2024.",
    diff: 'Foundation'
  },
  {
    q: "iCube-Qamar's cameras were intended to capture images of:",
    snip: 'Target photographic subject.',
    options: [
      { text: 'Mars', isCorrect: false, expl: 'Mars was not on its trajectory.' },
      { text: 'The Moon', isCorrect: true, expl: 'iCube-Qamar carried dual optical cameras that captured high-resolution pictures of the lunar surface and the Earth from lunar orbit.' },
      { text: 'Earth only', isCorrect: false, expl: 'Its primary mission was lunar imaging.' },
      { text: 'The Sun', isCorrect: false, expl: 'It was not a solar observation telescope.' }
    ],
    fact: 'The satellite successfully transmitted dramatic images showing the cratered lunar surface with Earth floating in deep space.',
    diff: 'Foundation'
  },
  {
    q: "Pakistan's space programme is administered by:",
    snip: 'National agency governing space activities.',
    options: [
      { text: 'SUPARCO', isCorrect: true, expl: 'Pakistan\'s space activities, satellite programs, and planetary missions are administered by SUPARCO.' },
      { text: 'PAEC', isCorrect: false, expl: 'PAEC administers atomic energy and civil nuclear power.' },
      { text: 'HEC', isCorrect: false, expl: 'HEC regulates higher education institutes.' },
      { text: 'NTC', isCorrect: false, expl: 'NTC manages National Telecommunication Corporation networks.' }
    ],
    fact: 'SUPARCO is headquartered in Karachi and operates under the National Command Authority.',
    diff: 'Foundation'
  },

  // 426–450: Nuclear Science & Physics
  {
    q: "Pakistan's nuclear programme is significantly associated with the:",
    snip: 'Pioneering atomic energy institution.',
    options: [
      { text: 'Pakistan Atomic Energy Commission', isCorrect: true, expl: 'The Pakistan Atomic Energy Commission (PAEC) is the premier agency responsible for nuclear research, nuclear power generation, cancer hospitals, and isotope production.' },
      { text: 'Pakistan Cricket Board', isCorrect: false, expl: 'PCB manages cricket.' },
      { text: 'SUPARCO', isCorrect: false, expl: 'SUPARCO is the national space agency.' },
      { text: 'National Highway Authority', isCorrect: false, expl: 'NHA builds motorways and highways.' }
    ],
    fact: 'PAEC operates six commercial nuclear power plants and 19 nuclear medicine oncology cancer hospitals across Pakistan.',
    diff: 'Foundation'
  },
  {
    q: 'PAEC stands for:',
    snip: 'Full name of the nuclear commission.',
    options: [
      { text: 'Pakistan Atomic Energy Commission', isCorrect: true, expl: 'PAEC stands for Pakistan Atomic Energy Commission.' },
      { text: 'Pakistan Aerospace Engineering Commission', isCorrect: false, expl: 'Not the official title.' },
      { text: 'Pakistan Atomic Engineering Corporation', isCorrect: false, expl: 'Not the official title.' },
      { text: 'Pakistan Applied Energy Council', isCorrect: false, expl: 'Not the official title.' }
    ],
    fact: 'PAEC\'s first chairman was Dr. Nazir Ahmad in 1956.',
    diff: 'Foundation'
  },
  {
    q: 'Pakistan Atomic Energy Commission was established in:',
    snip: 'Founding year of PAEC.',
    options: [
      { text: '1956', isCorrect: true, expl: 'PAEC was established in 1956 to foster atomic research, radioisotope applications in agriculture, and nuclear power.' },
      { text: '1961', isCorrect: false, expl: '1961 was the year SUPARCO was established.' },
      { text: '1971', isCorrect: false, expl: '1971 was the Liberation War.' },
      { text: '1974', isCorrect: false, expl: '1974 was when India tested Smiling Buddha.' }
    ],
    fact: 'Dr. I. H. Usmani served as the influential second Chairman of PAEC (1960–1971), establishing PINSTECH and training hundreds of Pakistani scientists abroad.',
    diff: 'Foundation'
  },
  {
    q: "Pakistan's first nuclear power reactor was:",
    snip: 'Pioneering commercial nuclear reactor.',
    options: [
      { text: 'KANUPP-1', isCorrect: true, expl: 'Karachi Nuclear Power Plant Unit 1 (KANUPP-1) was Pakistan\'s first nuclear power plant, supplied by Canada.' },
      { text: 'Chashma-1', isCorrect: false, expl: 'Chashma-1 (CHASNUPP-1) began operations in 2000 in Punjab.' },
      { text: 'PARR-1', isCorrect: false, expl: 'PARR-1 at PINSTECH is a research reactor (5 MW), not a commercial power reactor.' },
      { text: 'Karachi-2', isCorrect: false, expl: 'K-2 is a modern 1100 MW HPR1000 generation-III reactor inaugurated in 2021.' }
    ],
    fact: 'KANUPP-1 was a 137 MWe CANDU heavy-water reactor located on the Arabian Sea coast near Paradise Point, Karachi.',
    diff: 'Foundation'
  },
  {
    q: 'KANUPP-1 is located near:',
    snip: 'Coastal city hosting KANUPP.',
    options: [
      { text: 'Karachi', isCorrect: true, expl: 'KANUPP-1 is located on the coastline of Paradise Point, roughly 25 km west of Karachi, Sindh.' },
      { text: 'Lahore', isCorrect: false, expl: 'Lahore is in inland Punjab.' },
      { text: 'Islamabad', isCorrect: false, expl: 'Islamabad is the federal capital.' },
      { text: 'Multan', isCorrect: false, expl: 'Multan is in southern Punjab.' }
    ],
    fact: 'The Karachi Nuclear Power Complex now includes high-capacity K-2 and K-3 nuclear reactors supplying 2,200 MW to the national grid.',
    diff: 'Foundation'
  },
  {
    q: 'KANUPP stands for:',
    snip: 'Full name of the nuclear power plant.',
    options: [
      { text: 'Karachi Nuclear Power Plant', isCorrect: true, expl: 'KANUPP stands for Karachi Nuclear Power Plant.' },
      { text: 'Karachi Nuclear Processing Plant', isCorrect: false, expl: 'Not the official title.' },
      { text: 'Karachi National Power Plant', isCorrect: false, expl: 'Not the official title.' },
      { text: 'Karachi Nuclear Physics Plant', isCorrect: false, expl: 'Not the official title.' }
    ],
    fact: 'KANUPP-1 was decommissioned safely in August 2021 after completing 50 continuous years of operation.',
    diff: 'Foundation'
  },
  {
    q: 'KANUPP-1 became operational in:',
    snip: 'Year of commercial operation.',
    options: [
      { text: '1965', isCorrect: false, expl: 'Construction began in 1966.' },
      { text: '1971', isCorrect: false, expl: 'Criticality was reached in August 1971.' },
      { text: '1972', isCorrect: true, expl: 'KANUPP-1 was formally inaugurated and commenced commercial power generation on 28 November 1972.' },
      { text: '1974', isCorrect: false, expl: '1974 was two years later.' }
    ],
    fact: 'It was formally inaugurated by Prime Minister Zulfikar Ali Bhutto.',
    diff: 'Foundation'
  },
  {
    q: "Pakistan's nuclear power plants are operated primarily under:",
    snip: 'Operating national authority.',
    options: [
      { text: 'PAEC', isCorrect: true, expl: 'All commercial nuclear power plants in Pakistan (CHASNUPP and KANUPP units) are operated under the Pakistan Atomic Energy Commission (PAEC).' },
      { text: 'SUPARCO', isCorrect: false, expl: 'SUPARCO operates satellites.' },
      { text: 'NESCOM', isCorrect: false, expl: 'NESCOM develops defense technologies.' },
      { text: 'NUST', isCorrect: false, expl: 'NUST is a university.' }
    ],
    fact: 'Nuclear power generation is monitored independently by the Pakistan Nuclear Regulatory Authority (PNRA).',
    diff: 'Foundation'
  },
  {
    q: 'Chashma Nuclear Power Generating Station is located in:',
    snip: 'Province of Chashma complex.',
    options: [
      { text: 'Punjab', isCorrect: true, expl: 'The Chashma Nuclear Power Generating Station (CHASNUPP) is located in the Mianwali District of Punjab province.' },
      { text: 'Sindh', isCorrect: false, expl: 'Sindh hosts KANUPP in Karachi.' },
      { text: 'Balochistan', isCorrect: false, expl: 'Balochistan hosts the Chagai test site.' },
      { text: 'KP', isCorrect: false, expl: 'Khyber Pakhtunkhwa hosts Tarbela Dam.' }
    ],
    fact: 'The Chashma complex houses four operational PWR units (C-1, C-2, C-3, C-4) built with Chinese cooperation.',
    diff: 'Foundation'
  },
  {
    q: 'Chashma nuclear power complex is located near:',
    snip: 'District city near Chashma.',
    options: [
      { text: 'Mianwali', isCorrect: true, expl: 'The Chashma complex is located on the bank of the Indus River near Kundian in Mianwali District, Punjab.' },
      { text: 'Lahore', isCorrect: false, expl: 'Lahore is approximately 300 km to the east.' },
      { text: 'Faisalabad', isCorrect: false, expl: 'Faisalabad is the textile hub of Punjab.' },
      { text: 'Rawalpindi', isCorrect: false, expl: 'Rawalpindi is near Islamabad.' }
    ],
    fact: 'A fifth 1,200 MW reactor (Chashma-5 / C-5) is currently under construction at the site.',
    diff: 'Foundation'
  },
  {
    q: "Pakistan's nuclear tests in 1998 were conducted at:",
    snip: 'District and mountain test site.',
    options: [
      { text: 'Kahuta', isCorrect: false, expl: 'Kahuta near Rawalpindi is the site of uranium enrichment labs (KRL).' },
      { text: 'Chagai', isCorrect: true, expl: 'Pakistan conducted its 1998 underground nuclear tests inside the Ras Koh Hills in the Chagai District of Balochistan.' },
      { text: 'Karachi', isCorrect: false, expl: 'Karachi is a coastal metropolis.' },
      { text: 'Multan', isCorrect: false, expl: 'Multan hosted the 1972 scientists meeting.' }
    ],
    fact: 'The primary underground test shaft was drilled horizontally into Koh Kambaran mountain in the Ras Koh range.',
    diff: 'Foundation'
  },
  {
    q: 'Pakistan conducted its first nuclear tests on:',
    snip: 'Historic date of Youm-e-Takbeer.',
    options: [
      { text: '14 August 1998', isCorrect: false, expl: '14 August is Independence Day.' },
      { text: '28 May 1998', isCorrect: true, expl: 'Pakistan conducted its first series of underground nuclear tests on 28 May 1998 at 3:16 PM PST.' },
      { text: '6 September 1998', isCorrect: false, expl: '6 September is Defence Day.' },
      { text: '23 March 1998', isCorrect: false, expl: '23 March is Pakistan Day.' }
    ],
    fact: 'The date 28 May is celebrated as Youm-e-Takbeer across the nation every year.',
    diff: 'Foundation'
  },
  {
    q: 'The first series of Pakistani nuclear tests consisted of:',
    snip: 'Number of simultaneous test detonations on 28 May.',
    options: [
      { text: '3 explosions', isCorrect: false, expl: 'India conducted 3 tests on 11 May 1998.' },
      { text: '5 explosions', isCorrect: true, expl: 'Pakistan conducted five simultaneous underground nuclear detonations inside the mountain at Ras Koh on 28 May 1998 (Chagai-I).' },
      { text: '7 explosions', isCorrect: false, expl: 'Not the recorded number.' },
      { text: '10 explosions', isCorrect: false, expl: 'Not the recorded number.' }
    ],
    fact: 'The simultaneous test yielded between 40 to 45 kilotons of total explosive energy.',
    diff: 'Foundation'
  },
  {
    q: 'Pakistan conducted additional nuclear tests on:',
    snip: 'Second nuclear test date (Chagai-II).',
    options: [
      { text: '28 May 1998', isCorrect: false, expl: '28 May was Chagai-I.' },
      { text: '30 May 1998', isCorrect: true, expl: 'Pakistan conducted a sixth, plutonium-boosted nuclear test (Chagai-II) on 30 May 1998 in the Kharan Desert.' },
      { text: '31 May 1998', isCorrect: false, expl: 'Tests concluded on 30 May.' },
      { text: '1 June 1998', isCorrect: false, expl: 'Tests concluded on 30 May.' }
    ],
    fact: 'The Chagai-II test was conducted inside a vertical shaft in the Kharan desert plain.',
    diff: 'Foundation'
  },
  {
    q: "Pakistan's nuclear tests were conducted in response to nuclear tests by:",
    snip: 'Regional security context.',
    options: [
      { text: 'Iran', isCorrect: false, expl: 'Iran does not possess nuclear weapons.' },
      { text: 'India', isCorrect: true, expl: 'Pakistan conducted its nuclear tests in direct response to India\'s Pokhran-II nuclear tests conducted on 11 and 13 May 1998.' },
      { text: 'China', isCorrect: false, expl: 'China conducted its first test in 1964 and has close ties with Pakistan.' },
      { text: 'Afghanistan', isCorrect: false, expl: 'Afghanistan does not have nuclear weapons.' }
    ],
    fact: 'The tests established strategic balance and nuclear deterrence in South Asia.',
    diff: 'Foundation'
  },
  {
    q: 'The nuclear tests conducted by India in May 1998 were known as:',
    snip: 'Codename of Indian nuclear tests.',
    options: [
      { text: 'Pokhran-II', isCorrect: true, expl: 'The May 1998 Indian tests at Pokhran in the Thar Desert were designated Operation Shakti or Pokhran-II (following Pokhran-I in 1974).' },
      { text: 'Pokhran-I', isCorrect: false, expl: 'Pokhran-I ("Smiling Buddha") was conducted in May 1974.' },
      { text: 'Shakti-I', isCorrect: false, expl: 'Operation Shakti encompasses the series, but Pokhran-II is the universal geographic designation.' },
      { text: 'Bharat-I', isCorrect: false, expl: 'Not a historical test codename.' }
    ],
    fact: 'India conducted five nuclear explosions on 11 and 13 May 1998.',
    diff: 'Foundation'
  },
  {
    q: "Pakistan's nuclear test site is in the province of:",
    snip: 'Province of Chagai district.',
    options: [
      { text: 'Punjab', isCorrect: false, expl: 'Punjab is the most populous province.' },
      { text: 'Sindh', isCorrect: false, expl: 'Sindh is in the south.' },
      { text: 'Balochistan', isCorrect: true, expl: 'The Ras Koh Hills and Kharan test sites are situated in Balochistan province.' },
      { text: 'KP', isCorrect: false, expl: 'Khyber Pakhtunkhwa is in the northwest.' }
    ],
    fact: 'Balochistan\'s remote, arid granite mountains provided optimal seismic and containment geology for underground testing.',
    diff: 'Foundation'
  },
  {
    q: 'The scientific organization associated with Pakistan\'s nuclear weapons development includes:',
    snip: 'Premier atomic scientific organization.',
    options: [
      { text: 'PAEC', isCorrect: true, expl: 'The Pakistan Atomic Energy Commission (PAEC), along with KRL, was the primary scientific organization responsible for nuclear weapons development and testing.' },
      { text: 'PCB', isCorrect: false, expl: 'Pakistan Cricket Board.' },
      { text: 'PIA', isCorrect: false, expl: 'Pakistan International Airlines.' },
      { text: 'WAPDA', isCorrect: false, expl: 'Water and Power Development Authority.' }
    ],
    fact: 'PAEC scientists engineered the physics package, telemetry, and diagnostics for the nuclear devices.',
    diff: 'Foundation'
  },
  {
    q: 'Dr. Abdul Qadeer Khan is most closely associated with:',
    snip: 'Key technological field of Dr. A.Q. Khan.',
    options: [
      { text: 'Uranium enrichment', isCorrect: true, expl: 'Dr. A.Q. Khan pioneered gas-centrifuge uranium enrichment technology at the Khan Research Laboratories (KRL) in Kahuta.' },
      { text: 'Space photography', isCorrect: false, expl: 'He was a metallurgical engineer.' },
      { text: 'Solar energy', isCorrect: false, expl: 'His focus was nuclear fuel cycle.' },
      { text: 'Computer science', isCorrect: false, expl: 'His field was metallurgy.' }
    ],
    fact: 'His work enabled Pakistan to enrich natural uranium to weapon-grade U-235 purity.',
    diff: 'Foundation'
  },
  {
    q: 'The Kahuta Research Laboratories were associated with:',
    snip: 'Specialization of KRL.',
    options: [
      { text: 'Uranium enrichment', isCorrect: true, expl: 'The Kahuta Research Laboratories (renamed Khan Research Laboratories / KRL) was established in 1976 specifically for industrial gas-centrifuge uranium enrichment.' },
      { text: 'Space launches', isCorrect: false, expl: 'SUPARCO conducts space launches.' },
      { text: 'Nuclear power generation only', isCorrect: false, expl: 'PAEC operates power plants.' },
      { text: 'Hydroelectricity', isCorrect: false, expl: 'WAPDA manages dams and hydropower.' }
    ],
    fact: 'KRL also developed tactical ballistic missiles including the Ghauri missile series.',
    diff: 'Foundation'
  },
  {
    q: 'Kahuta is located near:',
    snip: 'Geographic location of Kahuta town.',
    options: [
      { text: 'Rawalpindi', isCorrect: true, expl: 'Kahuta is a tehsil of Rawalpindi District in the foothills of the Himalayas in Punjab.' },
      { text: 'Karachi', isCorrect: false, expl: 'Karachi is in Sindh.' },
      { text: 'Quetta', isCorrect: false, expl: 'Quetta is in Balochistan.' },
      { text: 'Multan', isCorrect: false, expl: 'Multan is in southern Punjab.' }
    ],
    fact: 'Kahuta is situated approximately 30 km southeast of Islamabad and Rawalpindi.',
    diff: 'Foundation'
  },
  {
    q: 'The Pakistan Institute of Nuclear Science and Technology is known as:',
    snip: 'Acronym of the premier research institute.',
    options: [
      { text: 'PINSTECH', isCorrect: true, expl: 'PINSTECH stands for Pakistan Institute of Nuclear Science and Technology.' },
      { text: 'PINSAT', isCorrect: false, expl: 'Not the official title.' },
      { text: 'PAKTECH', isCorrect: false, expl: 'Not the official title.' },
      { text: 'NISTP', isCorrect: false, expl: 'Not the official title.' }
    ],
    fact: 'PINSTECH was designed by world-renowned American architect Edward Durell Stone, who also designed the Pakistan Secretariat and US Embassy.',
    diff: 'Foundation'
  },
  {
    q: 'PINSTECH is located in:',
    snip: 'Location of PINSTECH research reactor.',
    options: [
      { text: 'Nilore, Islamabad', isCorrect: true, expl: 'PINSTECH is located in Nilore on the outskirts of Islamabad.' },
      { text: 'Karachi', isCorrect: false, expl: 'Karachi hosts KANUPP and PCSIR.' },
      { text: 'Lahore', isCorrect: false, expl: 'Lahore hosts GCU and Punjab University.' },
      { text: 'Quetta', isCorrect: false, expl: 'Quetta is in Balochistan.' }
    ],
    fact: 'PINSTECH houses the Pakistan Atomic Research Reactor 1 (PARR-1) and PARR-2 research facilities.',
    diff: 'Foundation'
  },
  {
    q: "Pakistan's nuclear programme has applications in:",
    snip: 'Peaceful and civil applications of atomic energy.',
    options: [
      { text: 'Energy, medicine and agriculture', isCorrect: true, expl: 'In addition to defense deterrence, Pakistan uses nuclear technology extensively for clean electricity generation, cancer diagnostic radiotherapy, and agricultural crop mutagenesis.' },
      { text: 'Cricket only', isCorrect: false, expl: 'Cricket is a sport.' },
      { text: 'Tourism only', isCorrect: false, expl: 'Tourism is hospitality.' },
      { text: 'Banking only', isCorrect: false, expl: 'Banking is financial.' }
    ],
    fact: 'PAEC institutes like NIAB (Faisalabad) and NIA (Tando Jam) have developed dozens of high-yield cotton, wheat, and rice crop varieties.',
    diff: 'Foundation'
  },
  {
    q: 'Nuclear medicine in Pakistan is supported significantly by:',
    snip: 'Oncology and radiation hospital network.',
    options: [
      { text: 'PAEC hospitals and centres', isCorrect: true, expl: 'PAEC runs 19 dedicated Nuclear Medicine and Oncology cancer hospitals (such as NORI in Islamabad, INMOL in Lahore, and KIRAN in Karachi).' },
      { text: 'PCB', isCorrect: false, expl: 'Cricket board.' },
      { text: 'PAF', isCorrect: false, expl: 'Air force.' },
      { text: 'NHA', isCorrect: false, expl: 'Highway authority.' }
    ],
    fact: 'PAEC cancer hospitals treat over 80% of all cancer patients in Pakistan, offering subsidized or free specialized oncology care.',
    diff: 'Foundation'
  },

  // 451–475: Medicine, Biology & Health Sciences
  {
    q: 'Dr. Atta-ur-Rahman is a renowned Pakistani:',
    snip: 'Academic scientific field.',
    options: [
      { text: 'Chemist', isCorrect: true, expl: 'Prof. Dr. Atta-ur-Rahman is an internationally distinguished organic and natural products chemist, UNESCO Science Laureate, and Fellow of the Royal Society (FRS).' },
      { text: 'Physicist', isCorrect: false, expl: 'Dr. Abdus Salam was a physicist.' },
      { text: 'Astronomer', isCorrect: false, expl: 'His field is organic chemistry.' },
      { text: 'Geologist', isCorrect: false, expl: 'Geology is the study of Earth rocks.' }
    ],
    fact: 'He has authored and edited over 340 books and published more than 1,200 research papers in structural organic chemistry.',
    diff: 'Foundation'
  },
  {
    q: 'Atta-ur-Rahman is particularly known for contributions to:',
    snip: 'Scientific chemistry specialization.',
    options: [
      { text: 'Organic chemistry and natural products', isCorrect: true, expl: 'He is world-renowned for his groundbreaking research in the isolation, structure elucidation, and synthesis of bioactive natural products and NMR spectroscopy.' },
      { text: 'Astrophysics', isCorrect: false, expl: 'Astrophysics is space physics.' },
      { text: 'Civil engineering', isCorrect: false, expl: 'Civil engineering is structural construction.' },
      { text: 'Nuclear engineering', isCorrect: false, expl: 'Nuclear engineering handles atomic reactors.' }
    ],
    fact: 'He served as Director of the International Center for Chemical and Biological Sciences (H.E.J. Research Institute of Chemistry) at Karachi University.',
    diff: 'Foundation'
  },
  {
    q: 'Dr. Atta-ur-Rahman served as chairman of:',
    snip: 'Higher education leadership body.',
    options: [
      { text: 'Higher Education Commission', isCorrect: true, expl: 'Dr. Atta-ur-Rahman served as the founding Chairman of the Higher Education Commission (HEC) of Pakistan from 2002 to 2008.' },
      { text: 'Pakistan Cricket Board', isCorrect: false, expl: 'PCB manages cricket.' },
      { text: 'SUPARCO', isCorrect: false, expl: 'SUPARCO is the space commission.' },
      { text: 'Election Commission', isCorrect: false, expl: 'ECP conducts public elections.' }
    ],
    fact: 'Under his tenure at HEC, Pakistani university research output grew by over 600%, winning international acclaim.',
    diff: 'Foundation'
  },
  {
    q: 'HEC stands for:',
    snip: 'Full acronym expansion.',
    options: [
      { text: 'Higher Education Commission', isCorrect: true, expl: 'HEC stands for Higher Education Commission, established in 2002 to regulate and fund tertiary education in Pakistan.' },
      { text: 'Higher Engineering Council', isCorrect: false, expl: 'Not the official title.' },
      { text: 'Health Education Commission', isCorrect: false, expl: 'Not the official title.' },
      { text: 'Higher Examination Council', isCorrect: false, expl: 'Not the official title.' }
    ],
    fact: 'HEC succeeded the former University Grants Commission (UGC).',
    diff: 'Foundation'
  },
  {
    q: 'Dr. Sania Nishtar is associated with:',
    snip: 'Public health and social safety governance.',
    options: [
      { text: 'Public health and social policy', isCorrect: true, expl: 'Dr. Sania Nishtar is a renowned cardiologist, global health expert, and served as Special Assistant to the Prime Minister heading the Ehsaas poverty alleviation programme.' },
      { text: 'Nuclear physics', isCorrect: false, expl: 'Her field is medicine and public health policy.' },
      { text: 'Space science', isCorrect: false, expl: 'Her field is health systems.' },
      { text: 'Cricket', isCorrect: false, expl: 'She is a physician and policy leader.' }
    ],
    fact: 'She was appointed CEO of Gavi, the Vaccine Alliance in 2024, leading global immunization efforts.',
    diff: 'Foundation'
  },
  {
    q: 'Dr. Adeebul Hasan Rizvi is famous for his work in:',
    snip: 'Medical field and organ transplantation.',
    options: [
      { text: 'Urology', isCorrect: true, expl: 'Dr. Adeebul Hasan Rizvi is a pioneering surgeon who revolutionized urology, nephrology, and renal organ transplantation in Pakistan.' },
      { text: 'Astronomy', isCorrect: false, expl: 'Astronomy is the study of stars.' },
      { text: 'Chemistry', isCorrect: false, expl: 'Chemistry is the science of matter.' },
      { text: 'Engineering', isCorrect: false, expl: 'He is a medical surgeon.' }
    ],
    fact: 'Dr. Rizvi established SIUT on the humane philosophy that "no one should be allowed to die because they cannot afford healthcare."',
    diff: 'Foundation'
  },
  {
    q: 'SIUT stands for:',
    snip: 'Full name of SIUT hospital institute.',
    options: [
      { text: 'Sindh Institute of Urology and Transplantation', isCorrect: true, expl: 'SIUT stands for Sindh Institute of Urology and Transplantation.' },
      { text: 'Sindh Institute of University Technology', isCorrect: false, expl: 'Not the official title.' },
      { text: 'Scientific Institute of Urology and Treatment', isCorrect: false, expl: 'Not the official title.' },
      { text: 'Sindh International University of Technology', isCorrect: false, expl: 'Not the official title.' }
    ],
    fact: 'SIUT performs hundreds of free kidney transplants and thousands of free dialysis sessions every month.',
    diff: 'Foundation'
  },
  {
    q: 'SIUT is located in:',
    snip: 'City hosting the main SIUT complex.',
    options: [
      { text: 'Karachi', isCorrect: true, expl: 'SIUT is located in Karachi, Sindh, originally established as an 8-bed ward in Civil Hospital Karachi in 1971.' },
      { text: 'Lahore', isCorrect: false, expl: 'Lahore hosts Shaikh Zayed Hospital and PKLI.' },
      { text: 'Islamabad', isCorrect: false, expl: 'Islamabad hosts PIMS.' },
      { text: 'Peshawar', isCorrect: false, expl: 'Peshawar hosts Lady Reading Hospital.' }
    ],
    fact: 'SIUT provides 100% free treatment with dignity, without any discrimination of caste, creed, or religion.',
    diff: 'Foundation'
  },
  {
    q: 'Dr. Ruth Pfau was famous for her work against:',
    snip: 'Chronic infectious disease eradicated in Pakistan.',
    options: [
      { text: 'Leprosy', isCorrect: true, expl: 'Dr. Ruth Pfau (1929–2017) devoted over 55 years of her life to combating and controlling leprosy (Hansen\'s disease) and tuberculosis across Pakistan.' },
      { text: 'Malaria', isCorrect: false, expl: 'Malaria is transmitted by mosquitoes.' },
      { text: 'Tuberculosis', isCorrect: false, expl: 'Her primary iconic battle was against leprosy.' },
      { text: 'Polio', isCorrect: false, expl: 'Polio is handled by EPI programs.' }
    ],
    fact: 'Due to her tireless work, the World Health Organization (WHO) declared Pakistan as one of the first countries in Asia to control leprosy in 1996.',
    diff: 'Foundation'
  },
  {
    q: 'Dr. Ruth Pfau established a major leprosy treatment centre in:',
    snip: 'City of the Marie Adelaide Leprosy Centre.',
    options: [
      { text: 'Karachi', isCorrect: true, expl: 'She founded the Marie Adelaide Leprosy Centre (MALC) in Saddar, Karachi, expanding to 157 field clinics across Pakistan.' },
      { text: 'Lahore', isCorrect: false, expl: 'MALC has clinics nationwide, but its headquarters is in Karachi.' },
      { text: 'Quetta', isCorrect: false, expl: 'She conducted field work in Balochistan, but based in Karachi.' },
      { text: 'Peshawar', isCorrect: false, expl: 'Her main center was founded in Karachi.' }
    ],
    fact: 'She was honored with a full state funeral in Karachi upon her passing in August 2017.',
    diff: 'Foundation'
  },
  {
    q: 'Dr. Ruth Pfau was originally from:',
    snip: 'Country of origin.',
    options: [
      { text: 'Germany', isCorrect: true, expl: 'Dr. Ruth Pfau was born in Leipzig, Germany in 1929 and arrived in Karachi in 1960 as a Catholic nun and physician.' },
      { text: 'Switzerland', isCorrect: false, expl: 'She was born in Germany.' },
      { text: 'Austria', isCorrect: false, expl: 'She studied in Germany.' },
      { text: 'Netherlands', isCorrect: false, expl: 'She came from Germany.' }
    ],
    fact: 'She was granted Pakistani citizenship in 1988 and was popularly known as "Pakistan\'s Mother Teresa".',
    diff: 'Foundation'
  },
  {
    q: 'Dr. Ruth Pfau is remembered in Pakistan primarily as a:',
    snip: 'National legacy and role.',
    options: [
      { text: 'Humanitarian physician', isCorrect: true, expl: 'She is revered across Pakistan as a selfless humanitarian physician who dedicated her life to healing marginalized leprosy patients.' },
      { text: 'Politician', isCorrect: false, expl: 'She was not a politician.' },
      { text: 'Scientist in nuclear physics', isCorrect: false, expl: 'Her work was in medical leprosy care.' },
      { text: 'Sportswoman', isCorrect: false, expl: 'She was a dedicated physician and nun.' }
    ],
    fact: 'The Civil Hospital Karachi was officially renamed Dr. Ruth K. M. Pfau Civil Hospital in her memory.',
    diff: 'Foundation'
  },
  {
    q: "Dr. Abdus Salam's major contribution to physics involved:",
    snip: 'Nobel-winning scientific discovery.',
    options: [
      { text: 'Electroweak unification', isCorrect: true, expl: 'Dr. Abdus Salam mathematically unified the electromagnetic force and weak nuclear force into a single fundamental "Electroweak" interaction.' },
      { text: 'Plate tectonics', isCorrect: false, expl: 'Plate tectonics is in geology.' },
      { text: 'DNA sequencing', isCorrect: false, expl: 'DNA sequencing is molecular biology.' },
      { text: 'Rocket propulsion', isCorrect: false, expl: 'Rocket propulsion is aerospace engineering.' }
    ],
    fact: 'The Electroweak theory forms the foundational pillar of the modern Standard Model of particle physics.',
    diff: 'Foundation'
  },
  {
    q: 'The Higgs boson is associated with the:',
    snip: 'Fundamental particle physics framework.',
    options: [
      { text: 'Electroweak theory/Standard Model', isCorrect: true, expl: 'The Higgs boson is the fundamental particle of the Higgs field, essential for giving mass to W and Z bosons in the Electroweak Standard Model formulation developed by Salam, Weinberg, and Glashow.' },
      { text: 'Theory of evolution', isCorrect: false, expl: 'Darwin\'s theory of biological evolution.' },
      { text: 'Theory of relativity only', isCorrect: false, expl: 'Einstein\'s theory of gravity.' },
      { text: 'Cell theory', isCorrect: false, expl: 'Biological cell theory.' }
    ],
    fact: 'The Higgs boson was experimentally confirmed at CERN\'s Large Hadron Collider in Geneva in 2012.',
    diff: 'Foundation'
  },
  {
    q: "Pakistan's National Institute of Health is located in:",
    snip: 'City location of NIH Pakistan.',
    options: [
      { text: 'Islamabad', isCorrect: true, expl: 'The National Institute of Health (NIH) is located in Chak Shahzad, Islamabad.' },
      { text: 'Lahore', isCorrect: false, expl: 'Lahore hosts King Edward Medical University.' },
      { text: 'Karachi', isCorrect: false, expl: 'Karachi hosts AKU and DUHS.' },
      { text: 'Quetta', isCorrect: false, expl: 'Quetta is in Balochistan.' }
    ],
    fact: 'NIH plays a central role in biomedical research, disease surveillance, epidemics control, and vaccine development in Pakistan.',
    diff: 'Foundation'
  },
  {
    q: 'NIH Pakistan stands for:',
    snip: 'Full name of the national health institute.',
    options: [
      { text: 'National Institutes of Health', isCorrect: false, expl: 'In the US it is plural "Institutes", but in Pakistan the singular is official.' },
      { text: 'National Institute of Health', isCorrect: true, expl: 'In Pakistan, NIH stands for National Institute of Health.' },
      { text: 'National Institute for Hospitals', isCorrect: false, expl: 'Not the official title.' },
      { text: 'National Health Institution', isCorrect: false, expl: 'Not the official title.' }
    ],
    fact: 'NIH was originally established in 1965 in Islamabad as the National Health Laboratories.',
    diff: 'Foundation'
  },
  {
    q: 'Pakistan has historically participated in the global campaign against:',
    snip: 'Major national immunization eradication campaign.',
    options: [
      { text: 'Polio', isCorrect: true, expl: 'Pakistan has waged an intensive nationwide campaign with WHO and UNICEF to eradicate the wild poliovirus through mass vaccination drives.' },
      { text: 'Smallpox only', isCorrect: false, expl: 'Smallpox was declared globally eradicated in 1980.' },
      { text: 'Rabies only', isCorrect: false, expl: 'Rabies control is ongoing but not the primary global eradication drive.' },
      { text: 'Dengue only', isCorrect: false, expl: 'Dengue is a seasonal vector-borne disease.' }
    ],
    fact: 'Hundreds of thousands of courageous frontline Lady Health Workers (LHWs) administer polio drops door-to-door across the country.',
    diff: 'Foundation'
  },
  {
    q: 'Pakistan is one of the countries where polio:',
    snip: 'Epidemiological status of wild poliovirus.',
    options: [
      { text: 'Remains a public-health challenge', isCorrect: true, expl: 'Pakistan and neighbouring Afghanistan are the only two remaining countries where wild poliovirus transmission continues to be a public-health challenge.' },
      { text: 'Was never present', isCorrect: false, expl: 'Polio was historically present globally.' },
      { text: 'Has never been vaccinated against', isCorrect: false, expl: 'Millions of doses are administered in national campaigns every year.' },
      { text: 'Is legally permitted', isCorrect: false, expl: 'Vaccination is actively promoted by the state.' }
    ],
    fact: 'Pakistan has reduced wild polio cases by over 99% since the 1990s through concerted national action.',
    diff: 'Foundation'
  },
  {
    q: 'The Pakistan Council of Scientific and Industrial Research is abbreviated:',
    snip: 'Official acronym of PCSIR.',
    options: [
      { text: 'PCSIR', isCorrect: true, expl: 'The Pakistan Council of Scientific and Industrial Research is abbreviated as PCSIR.' },
      { text: 'PSIR', isCorrect: false, expl: 'Not the official acronym.' },
      { text: 'PCSR', isCorrect: false, expl: 'Not the official acronym.' },
      { text: 'PSCIR', isCorrect: false, expl: 'Not the official acronym.' }
    ],
    fact: 'PCSIR was established in 1953 under the direction of pioneer chemist Dr. Salimuzzaman Siddiqui.',
    diff: 'Foundation'
  },
  {
    q: 'PCSIR primarily focuses on:',
    snip: 'Core research mandate of PCSIR.',
    options: [
      { text: 'Scientific and industrial research', isCorrect: true, expl: 'PCSIR focuses on applied scientific research, industrial technology development, standardization, mineral processing, and food sciences.' },
      { text: 'Military operations', isCorrect: false, expl: 'Armed Forces conduct military operations.' },
      { text: 'Sports', isCorrect: false, expl: 'Sports boards manage sports.' },
      { text: 'Foreign affairs', isCorrect: false, expl: 'Foreign Office handles international relations.' }
    ],
    fact: 'PCSIR has multi-disciplinary laboratories in Karachi, Lahore, Peshawar, Quetta, and Islamabad.',
    diff: 'Foundation'
  },
  {
    q: "Pakistan's Council of Scientific and Industrial Research was established to promote:",
    snip: 'Primary objective of PCSIR.',
    options: [
      { text: 'Scientific and technological research', isCorrect: true, expl: 'PCSIR was established in 1953 to advance industrial development through indigenous scientific research and technological innovation.' },
      { text: 'Cricket', isCorrect: false, expl: 'Managed by PCB.' },
      { text: 'Tourism', isCorrect: false, expl: 'Managed by PTDC.' },
      { text: 'Banking', isCorrect: false, expl: 'Managed by SBP.' }
    ],
    fact: 'PCSIR has registered hundreds of industrial patents and developed commercial consumer formulations.',
    diff: 'Foundation'
  },
  {
    q: 'The Aga Khan University is located in:',
    snip: 'Primary campus city of AKU.',
    options: [
      { text: 'Karachi', isCorrect: true, expl: 'The main campus and teaching hospital of the Aga Khan University (AKU) is located on Stadium Road in Karachi.' },
      { text: 'Lahore', isCorrect: false, expl: 'Lahore hosts King Edward Medical University.' },
      { text: 'Islamabad', isCorrect: false, expl: 'Islamabad hosts Shifa International and NUMS.' },
      { text: 'Peshawar', isCorrect: false, expl: 'Peshawar hosts Khyber Medical University.' }
    ],
    fact: 'AKU was chartered in 1983 as Pakistan\'s first private international university, founded by His Highness the Aga Khan IV.',
    diff: 'Foundation'
  },
  {
    q: 'Aga Khan University is particularly renowned for:',
    snip: 'Renowned academic specialization.',
    options: [
      { text: 'Medicine and health sciences', isCorrect: true, expl: 'AKU is globally acclaimed for excellence in biomedical research, medical education, nursing, and clinical healthcare services.' },
      { text: 'Military science', isCorrect: false, expl: 'Taught at military academies (PMA Kakul).' },
      { text: 'Space engineering only', isCorrect: false, expl: 'Taught at IST.' },
      { text: 'Agricultural machinery', isCorrect: false, expl: 'Taught at Agriculture University Faisalabad.' }
    ],
    fact: 'Aga Khan University Hospital (AKUH) is accredited by the prestigious Joint Commission International (JCI).',
    diff: 'Foundation'
  },
  {
    q: 'Shaukat Khanum Memorial Cancer Hospital is primarily dedicated to:',
    snip: 'Hospital medical focus.',
    options: [
      { text: 'Cancer treatment', isCorrect: true, expl: 'Shaukat Khanum Memorial Cancer Hospital and Research Centre (SKMCH&RC) is a charitable tertiary-care institution dedicated to comprehensive cancer diagnosis, treatment, and oncology research.' },
      { text: 'Eye treatment', isCorrect: false, expl: 'LRBT specializes in ophthalmology.' },
      { text: 'Cardiology only', isCorrect: false, expl: 'NICVD and PIC specialize in cardiology.' },
      { text: 'Orthopaedics only', isCorrect: false, expl: 'Ghurki Hospital specializes in orthopaedics.' }
    ],
    fact: 'Over 75% of cancer patients receive comprehensive free treatment at Shaukat Khanum hospitals every year through zakat and public donations.',
    diff: 'Foundation'
  },
  {
    q: 'The first Shaukat Khanum Memorial Cancer Hospital was established in:',
    snip: 'City location of first SKMCH&RC.',
    options: [
      { text: 'Lahore', isCorrect: true, expl: 'The first hospital was opened in Johar Town, Lahore on 29 December 1994, founded by cricketer and statesman Imran Khan in memory of his mother.' },
      { text: 'Karachi', isCorrect: false, expl: 'A third Shaukat Khanum hospital is under construction in DHA City, Karachi.' },
      { text: 'Islamabad', isCorrect: false, expl: 'Islamabad hosts a regional clinic.' },
      { text: 'Peshawar', isCorrect: false, expl: 'The second hospital was opened in Hayatabad, Peshawar in 2015.' }
    ],
    fact: 'It was the first specialized, comprehensive cancer hospital in Pakistan with Joint Commission International (JCI) accreditation.',
    diff: 'Foundation'
  },

  // 476–500: Technology, Engineering & Innovation
  {
    q: 'NUST stands for:',
    snip: 'Full university title.',
    options: [
      { text: 'National University of Sciences and Technology', isCorrect: true, expl: 'NUST stands for National University of Sciences and Technology.' },
      { text: 'National University of Science and Training', isCorrect: false, expl: 'Not the official title.' },
      { text: 'National School of Technology', isCorrect: false, expl: 'Not the official title.' },
      { text: 'National University of Scientific Technology', isCorrect: false, expl: 'Not the official title.' }
    ],
    fact: 'NUST is consistently ranked among the top 350 universities in the world by QS World University Rankings.',
    diff: 'Foundation'
  },
  {
    q: 'NUST is headquartered in:',
    snip: 'Main campus location of NUST.',
    options: [
      { text: 'Islamabad', isCorrect: true, expl: 'NUST is headquartered at its main comprehensive sector H-12 campus in Islamabad.' },
      { text: 'Lahore', isCorrect: false, expl: 'Lahore hosts UET and LUMS.' },
      { text: 'Karachi', isCorrect: false, expl: 'Karachi hosts PNEC (Pakistan Navy Engineering College - a constituent college of NUST).' },
      { text: 'Rawalpindi', isCorrect: false, expl: 'Rawalpindi hosts constituent military engineering colleges (E&ME, MCE).' }
    ],
    fact: 'The H-12 Islamabad campus was established in 2008 and houses the National Science & Technology Park (NSTP).',
    diff: 'Foundation'
  },
  {
    q: 'COMSATS University is particularly associated with:',
    snip: 'Academic focus of COMSATS.',
    options: [
      { text: 'Science and technology education', isCorrect: true, expl: 'COMSATS University Islamabad (CUI) is a leading public research university recognized for education and research in computer science, physics, engineering, and technology.' },
      { text: 'Military training', isCorrect: false, expl: 'Handled by armed forces colleges.' },
      { text: 'Agriculture only', isCorrect: false, expl: 'Handled by Agriculture universities.' },
      { text: 'Law only', isCorrect: false, expl: 'Handled by law faculties.' }
    ],
    fact: 'COMSATS operates multiple campuses across Islamabad, Lahore, Abbottabad, Wah, Attock, Sahiwal, and Vehari.',
    diff: 'Foundation'
  },
  {
    q: 'COMSATS originally stands for:',
    snip: 'Full international intergovernmental organization name.',
    options: [
      { text: 'Commission on Science and Technology for Sustainable Development in the South', isCorrect: true, expl: 'COMSATS stands for Commission on Science and Technology for Sustainable Development in the South, an intergovernmental organization of 27 developing member countries.' },
      { text: 'Council of Science and Technology Studies', isCorrect: false, expl: 'Not the official title.' },
      { text: 'Commission of Scientific Technology and Space', isCorrect: false, expl: 'Not the official title.' },
      { text: 'Commonwealth Science and Technology Society', isCorrect: false, expl: 'Not the official title.' }
    ],
    fact: 'COMSATS was established in 1994 on the initiative of Nobel Laureate Prof. Dr. Abdus Salam to promote South-South scientific cooperation.',
    diff: 'Foundation'
  },
  {
    q: "Pakistan's National University of Sciences and Technology is commonly known as:",
    snip: 'Universal university abbreviation.',
    options: [
      { text: 'NUST', isCorrect: true, expl: 'The National University of Sciences and Technology is universally known as NUST.' },
      { text: 'NUTECH', isCorrect: false, expl: 'NUTECH is the National University of Technology in Islamabad.' },
      { text: 'FAST', isCorrect: false, expl: 'FAST is the Foundation for Advancement of Science and Technology.' },
      { text: 'GIKI', isCorrect: false, expl: 'GIKI is Ghulam Ishaq Khan Institute.' }
    ],
    fact: 'NUST was established in 1991 to bring together leading engineering institutions across Pakistan.',
    diff: 'Foundation'
  },
  {
    q: 'GIKI stands for:',
    snip: 'Full name of the engineering institute in Topi.',
    options: [
      { text: 'Ghulam Ishaq Khan Institute of Engineering Sciences and Technology', isCorrect: true, expl: 'GIKI stands for Ghulam Ishaq Khan Institute of Engineering Sciences and Technology.' },
      { text: 'Government Institute of Knowledge and Innovation', isCorrect: false, expl: 'Not the official title.' },
      { text: 'Ghulam Ishaq Khan Institute of Information', isCorrect: false, expl: 'Not the official title.' },
      { text: 'General Institute of Knowledge and Industry', isCorrect: false, expl: 'Not the official title.' }
    ],
    fact: 'GIKI was founded in 1993 by former President of Pakistan Ghulam Ishaq Khan, with Dr. A.Q. Khan serving as its first Project Director.',
    diff: 'Foundation'
  },
  {
    q: 'GIKI is located in:',
    snip: 'Geographic location of GIKI campus.',
    options: [
      { text: 'Topi, Khyber Pakhtunkhwa', isCorrect: true, expl: 'GIKI is situated in the scenic town of Topi in the Swabi District of Khyber Pakhtunkhwa, near Tarbela Dam.' },
      { text: 'Lahore', isCorrect: false, expl: 'Lahore is in Punjab.' },
      { text: 'Karachi', isCorrect: false, expl: 'Karachi is in Sindh.' },
      { text: 'Quetta', isCorrect: false, expl: 'Quetta is in Balochistan.' }
    ],
    fact: 'The campus spans over 400 acres adjacent to the Indus River and Tarbela Lake.',
    diff: 'Foundation'
  },
  {
    q: 'FAST-NUCES is particularly known for education in:',
    snip: 'Academic specialty of FAST.',
    options: [
      { text: 'Computing and engineering', isCorrect: true, expl: 'FAST-NUCES is widely acknowledged as Pakistan\'s premier pioneer in computer science, software engineering, and artificial intelligence education.' },
      { text: 'Medicine only', isCorrect: false, expl: 'AKU and King Edward specialize in medicine.' },
      { text: 'Agriculture only', isCorrect: false, expl: 'Agriculture universities handle agriculture.' },
      { text: 'Fine arts only', isCorrect: false, expl: 'NCA specializes in fine arts.' }
    ],
    fact: 'A large percentage of software engineers leading top tech firms, unicorns, and Silicon Valley teams from Pakistan are FAST alumni.',
    diff: 'Foundation'
  },
  {
    q: "Pakistan's first university dedicated primarily to information technology was:",
    snip: 'Pioneering IT university.',
    options: [
      { text: 'FAST-NUCES', isCorrect: true, expl: 'FAST (Foundation for Advancement of Science and Technology) established Pakistan\'s first computer science institute in 1985, later chartered as NUCES in 2000.' },
      { text: 'NUST', isCorrect: false, expl: 'NUST was founded in 1991 for broader engineering.' },
      { text: 'LUMS', isCorrect: false, expl: 'LUMS was founded in 1985 with a business school focus before expanding.' },
      { text: 'University of Karachi', isCorrect: false, expl: 'Karachi University is a general university founded in 1951.' }
    ],
    fact: 'FAST introduced the first Bachelor of Computer Science degree curriculum in Pakistan.',
    diff: 'Foundation'
  },
  {
    q: 'The National University of Computer and Emerging Sciences is commonly known as:',
    snip: 'Commonly known university name.',
    options: [
      { text: 'FAST-NUCES', isCorrect: true, expl: 'The university is popularly known as FAST or FAST-NUCES.' },
      { text: 'NUST', isCorrect: false, expl: 'NUST is National University of Sciences and Technology.' },
      { text: 'GIKI', isCorrect: false, expl: 'GIKI is Ghulam Ishaq Khan Institute.' },
      { text: 'COMSATS', isCorrect: false, expl: 'COMSATS is Commission on Science and Technology.' }
    ],
    fact: 'FAST operates multi-city campuses in Islamabad, Lahore, Karachi, Peshawar, and Faisalabad.',
    diff: 'Foundation'
  },
  {
    q: "Pakistan's IT industry is concentrated significantly in cities including:",
    snip: 'Major software tech hubs in Pakistan.',
    options: [
      { text: 'Lahore, Karachi and Islamabad', isCorrect: true, expl: 'The software export, startup ecosystem, and IT-enabled services (ITeS) industry in Pakistan is heavily concentrated in the metropolitan triad of Lahore, Karachi, and Islamabad/Rawalpindi.' },
      { text: 'Only Quetta', isCorrect: false, expl: 'Quetta is developing tech zones but not the primary hub.' },
      { text: 'Only Multan', isCorrect: false, expl: 'Multan is an emerging city.' },
      { text: 'Only Peshawar', isCorrect: false, expl: 'Peshawar has active software parks but not alone.' }
    ],
    fact: 'Pakistan is ranked among the top global freelancing hubs and fast-growing software export markets in Asia.',
    diff: 'Foundation'
  },
  {
    q: 'Pakistan Software Export Board is abbreviated as:',
    snip: 'Government apex IT export body acronym.',
    options: [
      { text: 'PSEB', isCorrect: true, expl: 'Pakistan Software Export Board is abbreviated as PSEB.' },
      { text: 'PSEF', isCorrect: false, expl: 'Not the official acronym.' },
      { text: 'PSEI', isCorrect: false, expl: 'Not the official acronym.' },
      { text: 'PSAB', isCorrect: false, expl: 'Not the official acronym.' }
    ],
    fact: 'PSEB operates under the Ministry of Information Technology and Telecommunication (MoITT).',
    diff: 'Foundation'
  },
  {
    q: 'PSEB is associated with promoting Pakistan\'s:',
    snip: 'Economic industrial sector.',
    options: [
      { text: 'IT and IT-enabled services', isCorrect: true, expl: 'PSEB is mandated to market, facilitate, and accelerate the growth of Pakistan\'s IT industry and software exports globally.' },
      { text: 'Agriculture', isCorrect: false, expl: 'Managed by the Ministry of National Food Security & Research.' },
      { text: 'Defence forces', isCorrect: false, expl: 'Managed by the Ministry of Defence.' },
      { text: 'Tourism', isCorrect: false, expl: 'Managed by PTDC and provincial tourism departments.' }
    ],
    fact: 'PSEB facilitates software technology parks (STPs), international tech exhibitions, and corporate tax incentives for IT startups.',
    diff: 'Foundation'
  },
  {
    q: 'National Centre for Artificial Intelligence in Pakistan was established under initiatives associated with:',
    snip: 'Apex higher education institution.',
    options: [
      { text: 'HEC', isCorrect: true, expl: 'The National Centre of Artificial Intelligence (NCAI) was established in 2018 under the Planning Commission and Higher Education Commission (HEC) of Pakistan.' },
      { text: 'PCB', isCorrect: false, expl: 'PCB manages cricket.' },
      { text: 'PIA', isCorrect: false, expl: 'PIA is national airline.' },
      { text: 'WAPDA', isCorrect: false, expl: 'WAPDA manages water and hydropower.' }
    ],
    fact: 'NCAI is headquartered at NUST Islamabad with specialized affiliated research labs at universities nationwide.',
    diff: 'Foundation'
  },
  {
    q: 'Artificial intelligence is abbreviated as:',
    snip: 'Universal abbreviation.',
    options: [
      { text: 'AI', isCorrect: true, expl: 'Artificial intelligence is universally abbreviated as AI.' },
      { text: 'AR', isCorrect: false, expl: 'AR stands for Augmented Reality.' },
      { text: 'AL', isCorrect: false, expl: 'AL often stands for Artificial Life.' },
      { text: 'AT', isCorrect: false, expl: 'AT stands for Assistive Technology.' }
    ],
    fact: 'AI encompasses machine learning, deep learning, computer vision, and natural language processing.',
    diff: 'Foundation'
  },
  {
    q: "Pakistan's National Centre for Artificial Intelligence is associated with:",
    snip: 'Core technological research scope.',
    options: [
      { text: 'Research and development in AI', isCorrect: true, expl: 'NCAI conducts applied research in intelligent robotics, machine learning, medical image diagnostics, computer vision, smart cities, and AI policy.' },
      { text: 'Cricket analytics only', isCorrect: false, expl: 'Not limited to sports.' },
      { text: 'Space launches only', isCorrect: false, expl: 'SUPARCO handles space launches.' },
      { text: 'Nuclear testing', isCorrect: false, expl: 'PAEC handles nuclear technology.' }
    ],
    fact: 'NCAI operates specialized laboratories across multiple universities, including intelligent robotics and biomedical computing labs.',
    diff: 'Foundation'
  },
  {
    q: 'National Centre for Cyber Security in Pakistan focuses primarily on:',
    snip: 'National research center focus.',
    options: [
      { text: 'Cybersecurity research', isCorrect: true, expl: 'The National Centre for Cyber Security (NCCS) at Air University Islamabad leads research in digital forensics, cryptology, critical infrastructure defense, and network security.' },
      { text: 'Agriculture', isCorrect: false, expl: 'Agriculture research is conducted by PARC and NIAB.' },
      { text: 'Medicine', isCorrect: false, expl: 'Medical research is conducted by NIH and universities.' },
      { text: 'Archaeology', isCorrect: false, expl: 'Archaeology is managed by heritage departments.' }
    ],
    fact: 'NCCS was established in 2018 to build national cyber defense capability and train cybersecurity analysts.',
    diff: 'Foundation'
  },
  {
    q: 'National Centre for Robotics and Automation focuses on:',
    snip: 'Technology research mandate.',
    options: [
      { text: 'Robotics and automation', isCorrect: true, expl: 'The National Centre of Robotics and Automation (NCRA) at EME College NUST develops autonomous drones, industrial automation, agricultural robotics, and surgical robotics.' },
      { text: 'Literature', isCorrect: false, expl: 'Literature is promoted by the Pakistan Academy of Letters.' },
      { text: 'Nuclear medicine', isCorrect: false, expl: 'Nuclear medicine is conducted by PAEC.' },
      { text: 'Oceanography only', isCorrect: false, expl: 'Oceanography is handled by NIO.' }
    ],
    fact: 'NCRA houses 11 specialized laboratories across Pakistan focusing on unmanned systems and micro-electro-mechanical systems (MEMS).',
    diff: 'Foundation'
  },
  {
    q: 'The National Centre for Big Data and Cloud Computing focuses on:',
    snip: 'Data science research mandate.',
    options: [
      { text: 'Big data and cloud computing', isCorrect: true, expl: 'The National Centre in Big Data and Cloud Computing (NCBC) at LUMS Lahore focuses on large-scale data analytics, cloud architecture, bioinformatics, and smart grid informatics.' },
      { text: 'Traditional agriculture', isCorrect: false, expl: 'Handled by agriculture institutes.' },
      { text: 'Archaeology', isCorrect: false, expl: 'Handled by archaeological departments.' },
      { text: 'Military history', isCorrect: false, expl: 'Handled by historical archives.' }
    ],
    fact: 'NCBC was created as part of the national centres initiative funded by the Ministry of Planning and HEC.',
    diff: 'Foundation'
  },
  {
    q: 'The Pakistan Engineering Council is abbreviated as:',
    snip: 'Statutory engineering regulator acronym.',
    options: [
      { text: 'PEC', isCorrect: true, expl: 'The Pakistan Engineering Council is abbreviated as PEC.' },
      { text: 'PEA', isCorrect: false, expl: 'Not the official acronym.' },
      { text: 'PCE', isCorrect: false, expl: 'Not the official acronym.' },
      { text: 'PENG', isCorrect: false, expl: 'Not the official acronym.' }
    ],
    fact: 'PEC was established under the PEC Act 1976 to regulate the engineering profession and accredit engineering degree programs.',
    diff: 'Foundation'
  },
  {
    q: 'PEC primarily regulates the profession of:',
    snip: 'Professional regulation domain.',
    options: [
      { text: 'Engineering', isCorrect: true, expl: 'PEC is the statutory professional body that regulates engineering education, licenses professional engineers, and enforces standard building codes in Pakistan.' },
      { text: 'Medicine', isCorrect: false, expl: 'Regulated by PM&DC (Pakistan Medical & Dental Council).' },
      { text: 'Law', isCorrect: false, expl: 'Regulated by the Pakistan Bar Council.' },
      { text: 'Accounting', isCorrect: false, expl: 'Regulated by ICAP (Institute of Chartered Accountants of Pakistan).' }
    ],
    fact: 'Pakistan is a full signatory of the international Washington Accord through the Pakistan Engineering Council (PEC).',
    diff: 'Foundation'
  },
  {
    q: 'The Pakistan Council of Architects and Town Planners is responsible for:',
    snip: 'Statutory regulatory body for architecture.',
    options: [
      { text: 'Architecture and town planning', isCorrect: true, expl: 'PCATP (Pakistan Council of Architects and Town Planners) is the statutory body regulating the profession and education of architecture and town planning.' },
      { text: 'Nuclear science', isCorrect: false, expl: 'Regulated by PNRA/PAEC.' },
      { text: 'Medicine', isCorrect: false, expl: 'Regulated by PM&DC.' },
      { text: 'Space research', isCorrect: false, expl: 'Regulated by SUPARCO.' }
    ],
    fact: 'PCATP was established by an Ordinance in 1983 to safeguard standards in architectural design and urban planning.',
    diff: 'Foundation'
  },
  {
    q: "Pakistan's renewable-energy research includes significant work in:",
    snip: 'Clean green energy technologies.',
    options: [
      { text: 'Solar and wind energy', isCorrect: true, expl: 'Pakistan has actively expanded renewable energy research, solar parks (Bahawalpur), wind corridors (Jhimpir in Sindh), and micro-hydropower projects.' },
      { text: 'Coal only', isCorrect: false, expl: 'Coal is a non-renewable fossil fuel.' },
      { text: 'Nuclear weapons only', isCorrect: false, expl: 'Nuclear deterrence is strategic.' },
      { text: 'Petroleum refining only', isCorrect: false, expl: 'Petroleum is fossil-based.' }
    ],
    fact: 'The Jhimpir-Gharo wind corridor in Sindh has an estimated potential of over 50,000 MW of clean wind electricity.',
    diff: 'Foundation'
  },
  {
    q: 'The Quaid-e-Azam Solar Power Park is located in:',
    snip: 'City location of mega solar park in Cholistan.',
    options: [
      { text: 'Bahawalpur', isCorrect: true, expl: 'The Quaid-e-Azam Solar Power Park (QASPP) is a landmark 1,000 MW solar power farm located in the Cholistan Desert near Bahawalpur, Punjab.' },
      { text: 'Lahore', isCorrect: false, expl: 'Lahore is in central Punjab.' },
      { text: 'Karachi', isCorrect: false, expl: 'Karachi is in Sindh.' },
      { text: 'Quetta', isCorrect: false, expl: 'Quetta is in Balochistan.' }
    ],
    fact: 'Spanning over 6,500 acres of desert land, it is one of the largest operational solar parks in South Asia.',
    diff: 'Foundation'
  },
  {
    q: "Pakistan's scientific and technological development is supported by organizations such as:",
    snip: 'National research and development ecosystem pillars.',
    options: [
      { text: 'PAEC, SUPARCO, PCSIR and HEC', isCorrect: true, expl: 'Pakistan\'s national science, technology, and engineering ecosystem is anchored by the collaborative efforts of PAEC, SUPARCO, PCSIR, HEC, NESCOM, and top research universities.' },
      { text: 'PCB only', isCorrect: false, expl: 'Cricket board only.' },
      { text: 'PIA only', isCorrect: false, expl: 'Airline only.' },
      { text: 'WAPDA only', isCorrect: false, expl: 'Water authority only.' }
    ],
    fact: 'These institutions spearhead satellite development, nuclear medicine, cancer cure research, agricultural biotechnology, and artificial intelligence.',
    diff: 'Foundation'
  }
];

// Helper to write to science.ts
const optionLetterMap = ['A', 'B', 'C', 'D'];

const finalQuestions: QuizQuestion[] = exactScienceRaw.map((item, index) => {
  const qId = 3001 + index;
  const options = item.options.map((opt, optIdx) => ({
    id: optionLetterMap[optIdx],
    text: opt.text,
    isCorrect: opt.isCorrect,
    explanation: opt.expl
  }));

  return {
    id: qId,
    category: 'Science & Innovation',
    categoryIcon: 'Atom',
    difficulty: (item.diff === 'Mastery' ? 'Scholar' : item.diff) as 'Foundation' | 'Intermediate' | 'Scholar',
    question: item.q,
    contextSnippet: item.snip,
    options,
    funFact: item.fact
  };
});

const content = `import { QuizQuestion } from '../types';

export const SCIENCE_QUESTIONS: QuizQuestion[] = ${JSON.stringify(finalQuestions, null, 2)};
`;

fs.writeFileSync('src/data/science.ts', content, 'utf8');
console.log(`[SUCCESS] Wrote ${finalQuestions.length} exact Science & Innovation questions to src/data/science.ts!`);
