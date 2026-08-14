import fs from 'fs';
import { QuizQuestion } from '../types';

export const exactCultureRaw = [
  // 201–225: Geography & Land
  {
    q: 'Pakistan is located primarily in which region of Asia?',
    snip: 'Geographic subregion of the Asian continent.',
    options: [
      { text: 'Central Asia', isCorrect: false, expl: 'Central Asia lies to the north (Uzbekistan, Tajikistan, etc.).' },
      { text: 'South Asia', isCorrect: true, expl: 'Pakistan is located in South Asia, bordering the Arabian Sea in the south.' },
      { text: 'Southeast Asia', isCorrect: false, expl: 'Southeast Asia includes countries like Malaysia and Indonesia.' },
      { text: 'West Asia', isCorrect: false, expl: 'West Asia is commonly known as the Middle East.' }
    ],
    fact: 'Pakistan acts as a strategic geopolitical bridge between South Asia, Central Asia, and the Middle East.',
    diff: 'Foundation'
  },
  {
    q: 'The capital of Pakistan is:',
    snip: 'Federal capital city of Pakistan.',
    options: [
      { text: 'Karachi', isCorrect: false, expl: 'Karachi was the first capital of Pakistan from 1947 to 1959.' },
      { text: 'Lahore', isCorrect: false, expl: 'Lahore is the cultural hub and provincial capital of Punjab.' },
      { text: 'Islamabad', isCorrect: true, expl: 'Islamabad became the official federal capital of Pakistan in the 1960s, planned by Greek architect Konstantinos Doxiadis.' },
      { text: 'Rawalpindi', isCorrect: false, expl: 'Rawalpindi served as the interim capital during Islamabad\'s construction.' }
    ],
    fact: 'Islamabad is known for its high standard of living, lush greenery at the Margalla Hills foothills, and safety.',
    diff: 'Foundation'
  },
  {
    q: 'The largest city of Pakistan by population is generally considered to be:',
    snip: 'Megacity and economic engine of Pakistan.',
    options: [
      { text: 'Lahore', isCorrect: false, expl: 'Lahore is the second-largest city.' },
      { text: 'Karachi', isCorrect: true, expl: 'Karachi is the largest city and primary financial and port capital of Pakistan, with over 16 million residents.' },
      { text: 'Faisalabad', isCorrect: false, expl: 'Faisalabad is the third-largest city, known as the textile capital.' },
      { text: 'Peshawar', isCorrect: false, expl: 'Peshawar is the provincial capital of Khyber Pakhtunkhwa.' }
    ],
    fact: 'Karachi is known as the "City of Lights" (Uroos-ul-Bilaad) and generates a substantial portion of national revenue.',
    diff: 'Foundation'
  },
  {
    q: 'Pakistan has a coastline along the:',
    snip: 'Body of water bordering southern Pakistan.',
    options: [
      { text: 'Red Sea', isCorrect: false, expl: 'The Red Sea lies between Africa and the Arabian Peninsula.' },
      { text: 'Arabian Sea', isCorrect: true, expl: 'Pakistan has an extensive coastline along the Arabian Sea in the south, encompassing major ports like Karachi and Gwadar.' },
      { text: 'Bay of Bengal', isCorrect: false, expl: 'The Bay of Bengal is to the east of India.' },
      { text: 'Persian Gulf', isCorrect: false, expl: 'The Persian Gulf connects via the Strait of Hormuz.' }
    ],
    fact: 'Pakistan\'s Exclusive Economic Zone (EEZ) covers over 290,000 square kilometers of marine territory.',
    diff: 'Foundation'
  },
  {
    q: "Pakistan's coastline is approximately:",
    snip: 'Total coastal length in kilometers.',
    options: [
      { text: '500 km', isCorrect: false, expl: '500 km is too short.' },
      { text: '700 km', isCorrect: false, expl: '700 km is the approximate length of the Makran Balochistan coast alone.' },
      { text: '1,046 km', isCorrect: true, expl: 'Pakistan has a total coastline of approximately 1,046 km (650 miles) across Sindh and Balochistan.' },
      { text: '2,000 km', isCorrect: false, expl: '2,000 km is far longer than Pakistan\'s coastline.' }
    ],
    fact: 'About 770 km lies in Balochistan (Makran Coast) and about 276 km lies in Sindh.',
    diff: 'Foundation'
  },
  {
    q: 'Which province has the longest coastline?',
    snip: 'Province spanning the Makran coastal highway.',
    options: [
      { text: 'Sindh', isCorrect: false, expl: 'Sindh has about 276 km of coastline.' },
      { text: 'Punjab', isCorrect: false, expl: 'Punjab is an inland landlocked province.' },
      { text: 'Balochistan', isCorrect: true, expl: 'Balochistan accounts for roughly 770 km (over 70%) of Pakistan\'s total 1,046 km coastline.' },
      { text: 'Khyber Pakhtunkhwa', isCorrect: false, expl: 'Khyber Pakhtunkhwa is landlocked in the northwest.' }
    ],
    fact: 'Balochistan hosts deep-sea ports including Gwadar, Ormara Naval Base, and Pasni.',
    diff: 'Foundation'
  },
  {
    q: 'The largest province of Pakistan by area is:',
    snip: 'Geographic land area leader.',
    options: [
      { text: 'Punjab', isCorrect: false, expl: 'Punjab makes up about 25.9% of land area.' },
      { text: 'Sindh', isCorrect: false, expl: 'Sindh makes up about 17.7% of land area.' },
      { text: 'Balochistan', isCorrect: true, expl: 'Balochistan is the largest province by land area, covering approximately 347,190 km² (about 44% of Pakistan\'s total area).' },
      { text: 'Khyber Pakhtunkhwa', isCorrect: false, expl: 'KP covers about 12.8% of area.' }
    ],
    fact: 'Despite being the largest by area, Balochistan has the lowest population density among provinces.',
    diff: 'Foundation'
  },
  {
    q: 'The largest province by population is:',
    snip: 'Demographic leader of Pakistan.',
    options: [
      { text: 'Sindh', isCorrect: false, expl: 'Sindh is the second most populous province.' },
      { text: 'Punjab', isCorrect: true, expl: 'Punjab is home to over half of Pakistan\'s total population (over 127 million residents).' },
      { text: 'Balochistan', isCorrect: false, expl: 'Balochistan is the least populous province.' },
      { text: 'Khyber Pakhtunkhwa', isCorrect: false, expl: 'KP is the third most populous province.' }
    ],
    fact: 'Punjab is named after the "Five Rivers" (Panj Aab): Indus tributaries Jhelum, Chenab, Ravi, Sutlej, and Beas.',
    diff: 'Foundation'
  },
  {
    q: 'The smallest province of Pakistan by area is:',
    snip: 'Smallest provincial land area among the four main provinces.',
    options: [
      { text: 'Sindh', isCorrect: false, expl: 'Sindh is approximately 140,914 km².' },
      { text: 'Punjab', isCorrect: false, expl: 'Punjab is approximately 205,344 km².' },
      { text: 'Khyber Pakhtunkhwa', isCorrect: true, expl: 'Khyber Pakhtunkhwa (even after merging with FATA) is the smallest of the 4 provinces by land area (approx. 101,741 km²).' },
      { text: 'Balochistan', isCorrect: false, expl: 'Balochistan is the largest (347,190 km²).' }
    ],
    fact: 'KP is celebrated for its majestic mountainous terrain, valleys like Swat and Kaghan, and the historic Khyber Pass.',
    diff: 'Intermediate'
  },
  {
    q: 'The smallest province by population is:',
    snip: 'Least populous province.',
    options: [
      { text: 'Balochistan', isCorrect: true, expl: 'Balochistan has the smallest population among the four provinces (around 14.8 million residents).' },
      { text: 'Sindh', isCorrect: false, expl: 'Sindh has over 55 million residents.' },
      { text: 'Khyber Pakhtunkhwa', isCorrect: false, expl: 'KP has over 40 million residents.' },
      { text: 'Punjab', isCorrect: false, expl: 'Punjab is the most populous with over 127 million.' }
    ],
    fact: 'Balochistan\'s vast landscape has an average population density of only around 42 people per square kilometer.',
    diff: 'Foundation'
  },
  {
    q: 'Pakistan shares its longest international border with:',
    snip: 'Longest boundary line.',
    options: [
      { text: 'India', isCorrect: true, expl: 'Pakistan shares its longest border with India, extending approximately 3,323 km (including the Line of Control and Working Boundary).' },
      { text: 'Afghanistan', isCorrect: false, expl: 'The Durand Line with Afghanistan is approx. 2,670 km.' },
      { text: 'Iran', isCorrect: false, expl: 'The Iran border is approx. 959 km.' },
      { text: 'China', isCorrect: false, expl: 'The China border is approx. 596 km.' }
    ],
    fact: 'The international border was delineated in 1947 by the Boundary Commission headed by Sir Cyril Radcliffe.',
    diff: 'Foundation'
  },
  {
    q: 'The border between Pakistan and Afghanistan is commonly called:',
    snip: 'Historic boundary established in 1893.',
    options: [
      { text: 'Radcliffe Line', isCorrect: false, expl: 'The Radcliffe Line is the border with India.' },
      { text: 'Durand Line', isCorrect: true, expl: 'The Pakistan-Afghanistan international boundary is known as the Durand Line, demarcated in 1893 by Sir Mortimer Durand and Amir Abdur Rahman Khan.' },
      { text: 'McMahon Line', isCorrect: false, expl: 'The McMahon Line separates China and India.' },
      { text: 'Line of Control', isCorrect: false, expl: 'The Line of Control (LoC) divides Azad Jammu & Kashmir and Indian-administered Kashmir.' }
    ],
    fact: 'The Durand Line spans roughly 2,670 km through rugged mountainous tribal terrain.',
    diff: 'Foundation'
  },
  {
    q: 'The Pakistan-India boundary is associated with the:',
    snip: '1947 partition boundary name.',
    options: [
      { text: 'Durand Line', isCorrect: false, expl: 'Durand Line is with Afghanistan.' },
      { text: 'Radcliffe Line', isCorrect: true, expl: 'The Radcliffe Line was published on 17 August 1947 as the boundary demarcation line between Pakistan and India.' },
      { text: 'McMahon Line', isCorrect: false, expl: 'McMahon Line is Sino-Indian.' },
      { text: 'Goldsmid Line', isCorrect: false, expl: 'Goldsmid Line was drawn in 1871 for the Iran-Balochistan border.' }
    ],
    fact: 'Sir Cyril Radcliffe had never visited South Asia before arriving to draw the partition boundary.',
    diff: 'Foundation'
  },
  {
    q: 'Pakistan shares its northeastern border with:',
    snip: 'Northeastern neighboring powerhouse.',
    options: [
      { text: 'Iran', isCorrect: false, expl: 'Iran lies to the southwest.' },
      { text: 'China', isCorrect: true, expl: 'Pakistan borders the People\'s Republic of China (Xinjiang region) in the northeast across the Karakoram mountain range.' },
      { text: 'Afghanistan', isCorrect: false, expl: 'Afghanistan lies to the northwest.' },
      { text: 'India only', isCorrect: false, expl: 'China lies in the northeast.' }
    ],
    fact: 'The 1963 Sino-Pakistan Agreement formally delineated the peaceful 596 km boundary.',
    diff: 'Foundation'
  },
  {
    q: 'Pakistan shares its southwestern border with:',
    snip: 'Southwestern neighbor.',
    options: [
      { text: 'Iran', isCorrect: true, expl: 'Pakistan shares its southwestern border of approximately 959 km with the Islamic Republic of Iran (Sistan and Baluchestan province).' },
      { text: 'China', isCorrect: false, expl: 'China is northeast.' },
      { text: 'India', isCorrect: false, expl: 'India is east.' },
      { text: 'Afghanistan', isCorrect: false, expl: 'Afghanistan is northwest.' }
    ],
    fact: 'Taftan is the primary international border trade crossing between Pakistan and Iran.',
    diff: 'Foundation'
  },
  {
    q: 'The Karakoram Highway connects Pakistan with:',
    snip: 'Eighth wonder of the world highway connection.',
    options: [
      { text: 'Iran', isCorrect: false, expl: 'Iran connects via RCD Highway (N-40).' },
      { text: 'India', isCorrect: false, expl: 'Wagah connects to India.' },
      { text: 'China', isCorrect: true, expl: 'The Karakoram Highway (N-35 / China National Highway 314) connects Pakistan with China through the Khunjerab Pass at 4,693 meters.' },
      { text: 'Afghanistan', isCorrect: false, expl: 'Torkham Pass connects to Afghanistan.' }
    ],
    fact: 'KKH is the highest paved international road in the world, often called the "Eighth Wonder of the World".',
    diff: 'Foundation'
  },
  {
    q: 'The highest mountain in Pakistan is:',
    snip: 'Crown peak of the Karakoram.',
    options: [
      { text: 'Nanga Parbat', isCorrect: false, expl: 'Nanga Parbat is 8,126 m (second highest in Pakistan).' },
      { text: 'K2', isCorrect: true, expl: 'K2 (Godwin-Austen / Chhogori) is the highest peak in Pakistan and second-highest in the world at 8,611 meters (28,251 ft).' },
      { text: 'Tirich Mir', isCorrect: false, expl: 'Tirich Mir is 7,708 m (highest in Hindu Kush).' },
      { text: 'Rakaposhi', isCorrect: false, expl: 'Rakaposhi is 7,788 m.' }
    ],
    fact: 'Pakistan is home to 5 of the world\'s 14 "eight-thousander" peaks.',
    diff: 'Foundation'
  },
  {
    q: "K2 is the world's:",
    snip: 'Global altitude ranking.',
    options: [
      { text: 'Highest mountain', isCorrect: false, expl: 'Mount Everest (8,848.86 m) is the highest.' },
      { text: 'Second-highest mountain', isCorrect: true, expl: 'K2 stands at 8,611 meters, making it the second-highest mountain on Earth after Mount Everest.' },
      { text: 'Third-highest mountain', isCorrect: false, expl: 'Kangchenjunga (8,586 m) is third.' },
      { text: 'Fourth-highest mountain', isCorrect: false, expl: 'Lhotse (8,516 m) is fourth.' }
    ],
    fact: 'K2 was first summited on 31 July 1954 by Italian climbers Lino Lacedelli and Achille Compagnoni.',
    diff: 'Foundation'
  },
  {
    q: 'K2 is located in the:',
    snip: 'Mountain range of K2.',
    options: [
      { text: 'Himalayas', isCorrect: false, expl: 'Nanga Parbat is in the Himalayas.' },
      { text: 'Hindu Kush', isCorrect: false, expl: 'Tirich Mir is in the Hindu Kush.' },
      { text: 'Karakoram Range', isCorrect: true, expl: 'K2 is situated in the Karakoram Mountain Range in Gilgit-Baltistan on the Pakistan-China border.' },
      { text: 'Suleiman Range', isCorrect: false, expl: 'Suleiman Range is in Balochistan/Punjab.' }
    ],
    fact: 'The name "K2" stands for the 2nd peak cataloged in the Karakoram survey by T.G. Montgomerie in 1856.',
    diff: 'Foundation'
  },
  {
    q: 'K2 is also known as:',
    snip: 'Fierce mountaineering moniker.',
    options: [
      { text: 'Killer Mountain', isCorrect: false, expl: 'Killer Mountain refers to Nanga Parbat.' },
      { text: 'Savage Mountain', isCorrect: true, expl: 'K2 is famously known as the "Savage Mountain" after George Bell said in 1953: "It\'s a savage mountain that tries to kill you."' },
      { text: 'King Mountain', isCorrect: false, expl: 'Not an established moniker for K2.' },
      { text: 'Blue Mountain', isCorrect: false, expl: 'Blue Mountain is in Australia/Jamaica.' }
    ],
    fact: 'The local Balti name for K2 is Chhogori, meaning "King of Mountains".',
    diff: 'Foundation'
  },
  {
    q: "Nanga Parbat is the world's:",
    snip: 'Global height rank of Nanga Parbat.',
    options: [
      { text: '5th-highest mountain', isCorrect: false, expl: 'Makalu is 5th.' },
      { text: '8th-highest mountain', isCorrect: false, expl: 'Manaslu is 8th.' },
      { text: '9th-highest mountain', isCorrect: true, expl: 'Nanga Parbat is the 9th-highest mountain on Earth at 8,126 meters (often rounded/grouped around 8th/9th in competitive trivia).' },
      { text: '12th-highest mountain', isCorrect: false, expl: 'Broad Peak is 12th.' }
    ],
    fact: 'Nanga Parbat\'s Rupal Face rises 4,600 meters directly above its base, the largest rock face in the world.',
    diff: 'Intermediate'
  },
  {
    q: 'Nanga Parbat is also known as:',
    snip: 'Notorious mountain moniker.',
    options: [
      { text: 'Killer Mountain', isCorrect: true, expl: 'Nanga Parbat is universally known as "Killer Mountain" (Diamir) due to the immense climbing difficulty and early expedition fatalities.' },
      { text: 'Savage Mountain', isCorrect: false, expl: 'Savage Mountain is K2.' },
      { text: 'White Mountain', isCorrect: false, expl: 'Dhaulagiri means White Mountain.' },
      { text: 'Hidden Mountain', isCorrect: false, expl: 'Gasherbrum I is Hidden Peak.' }
    ],
    fact: 'Hermann Buhl achieved the historic first solo ascent without supplemental oxygen in July 1953.',
    diff: 'Foundation'
  },
  {
    q: 'Nanga Parbat belongs to the:',
    snip: 'Mountain system of Nanga Parbat.',
    options: [
      { text: 'Karakoram Range', isCorrect: false, expl: 'K2, Broad Peak, and Gasherbrums are in the Karakoram.' },
      { text: 'Himalayas', isCorrect: true, expl: 'Nanga Parbat is the western anchor of the great Himalayan range (Western Himalayas) in Gilgit-Baltistan.' },
      { text: 'Hindu Kush', isCorrect: false, expl: 'Hindu Kush lies further west in KP.' },
      { text: 'Pamirs', isCorrect: false, expl: 'Pamir mountains lie to the north.' }
    ],
    fact: 'It is the only 8,000-meter peak located entirely within Pakistan without sharing a summit border with China.',
    diff: 'Foundation'
  },
  {
    q: 'Tirich Mir is the highest peak of the:',
    snip: 'Mountain range of Tirich Mir.',
    options: [
      { text: 'Hindu Kush', isCorrect: true, expl: 'Tirich Mir is the highest mountain of the Hindu Kush range, standing at 7,708 meters (25,289 ft).' },
      { text: 'Himalayas', isCorrect: false, expl: 'Everest and Nanga Parbat are in the Himalayas.' },
      { text: 'Karakoram', isCorrect: false, expl: 'K2 is in the Karakoram.' },
      { text: 'Suleiman Range', isCorrect: false, expl: 'Takht-e-Sulaiman is in the Suleiman Range.' }
    ],
    fact: 'Tirich Mir was first climbed in 1950 by a Norwegian expedition led by Arne Næss.',
    diff: 'Foundation'
  },
  {
    q: 'Tirich Mir is located in:',
    snip: 'District/Province location of Tirich Mir.',
    options: [
      { text: 'Gilgit-Baltistan', isCorrect: false, expl: 'GB hosts K2 and Nanga Parbat.' },
      { text: 'Khyber Pakhtunkhwa', isCorrect: true, expl: 'Tirich Mir is located in the Chitral District of Khyber Pakhtunkhwa province.' },
      { text: 'Punjab', isCorrect: false, expl: 'Punjab contains the Salt Range.' },
      { text: 'Balochistan', isCorrect: false, expl: 'Balochistan contains the Zarghun and Kirthar ranges.' }
    ],
    fact: 'Tirich Mir dominates the skyline above Chitral town and is visible from miles around.',
    diff: 'Foundation'
  },

  // 226–250: Rivers, Lakes & Natural Features
  {
    q: 'The longest river of Pakistan is:',
    snip: 'Mighty national river.',
    options: [
      { text: 'Ravi', isCorrect: false, expl: 'Ravi is approx. 720 km.' },
      { text: 'Chenab', isCorrect: false, expl: 'Chenab is approx. 960 km.' },
      { text: 'Indus', isCorrect: true, expl: 'The Indus River (Darya-e-Sindh / Abasin) is the longest river in Pakistan, flowing over 3,180 km from Tibet to the Arabian Sea.' },
      { text: 'Jhelum', isCorrect: false, expl: 'Jhelum is approx. 725 km.' }
    ],
    fact: 'The Indus gives its name to the country India and the entire ancient Indus Valley Civilization.',
    diff: 'Foundation'
  },
  {
    q: 'The Indus River originates in the region of:',
    snip: 'Source region near Lake Mansarovar.',
    options: [
      { text: 'Tibet', isCorrect: true, expl: 'The Indus originates near Lake Mansarovar and Mount Kailash on the Tibetan Plateau (China).' },
      { text: 'Punjab', isCorrect: false, expl: 'Indus enters Punjab after Khyber Pakhtunkhwa.' },
      { text: 'Balochistan', isCorrect: false, expl: 'Indus does not flow through Balochistan.' },
      { text: 'Sindh', isCorrect: false, expl: 'Indus forms its delta in Sindh before the Arabian Sea.' }
    ],
    fact: 'In Tibet, the Indus is known as the Sengge Zangbo ("Lion River").',
    diff: 'Foundation'
  },
  {
    q: 'The Indus River flows into the:',
    snip: 'Final terminal sea.',
    options: [
      { text: 'Bay of Bengal', isCorrect: false, expl: 'Ganges and Brahmaputra flow into the Bay of Bengal.' },
      { text: 'Arabian Sea', isCorrect: true, expl: 'The Indus River drains into the Arabian Sea south of Karachi and Thatta in Sindh.' },
      { text: 'Persian Gulf', isCorrect: false, expl: 'Tigris and Euphrates drain towards the Persian Gulf.' },
      { text: 'Red Sea', isCorrect: false, expl: 'Nile drains into the Mediterranean.' }
    ],
    fact: 'The Indus forms a vast fan-shaped mangrove delta spanning 41,440 km² in Sindh.',
    diff: 'Foundation'
  },
  {
    q: 'Which river is known as the lifeline of Pakistan?',
    snip: 'National lifeline river.',
    options: [
      { text: 'Ravi', isCorrect: false, expl: 'Ravi is one of the eastern tributaries.' },
      { text: 'Indus', isCorrect: true, expl: 'The Indus River is universally revered as the "Lifeline of Pakistan" because it waters the vast agricultural plains and drives the world\'s largest contiguous irrigation network.' },
      { text: 'Sutlej', isCorrect: false, expl: 'Sutlej is an eastern tributary.' },
      { text: 'Kabul', isCorrect: false, expl: 'Kabul River is a western tributary.' }
    ],
    fact: 'Over 90% of Pakistan\'s agricultural food production depends directly on the Indus Basin Irrigation System.',
    diff: 'Foundation'
  },
  {
    q: 'Which of the following is NOT one of the major rivers of the Indus River system?',
    snip: 'Identify the non-Indus river.',
    options: [
      { text: 'Ravi', isCorrect: false, expl: 'Ravi is a key tributary of the Indus.' },
      { text: 'Chenab', isCorrect: false, expl: 'Chenab is a major Indus tributary.' },
      { text: 'Jhelum', isCorrect: false, expl: 'Jhelum is a major Indus tributary.' },
      { text: 'Nile', isCorrect: true, expl: 'The Nile River is located entirely in northeast Africa and is the longest river in the world.' }
    ],
    fact: 'The Indus system comprises the Indus and its five eastern tributaries: Jhelum, Chenab, Ravi, Sutlej, and Beas.',
    diff: 'Foundation'
  },
  {
    q: 'The Jhelum River flows through:',
    snip: 'Valley and territory through which Jhelum flows.',
    options: [
      { text: 'Kashmir', isCorrect: true, expl: 'The Jhelum River rises in Verinag in the Kashmir Valley, flows through Srinagar and Wular Lake, then through Azad Kashmir and Punjab.' },
      { text: 'Sindh only', isCorrect: false, expl: 'Jhelum does not flow into Sindh directly.' },
      { text: 'Balochistan', isCorrect: false, expl: 'Jhelum does not enter Balochistan.' },
      { text: 'Karachi', isCorrect: false, expl: 'Karachi is in southern Sindh.' }
    ],
    fact: 'Mangla Dam, the 6th largest dam in the world, is built on the Jhelum River in Mirpur, Azad Kashmir.',
    diff: 'Foundation'
  },
  {
    q: 'The Ravi River flows through the city of:',
    snip: 'Historic city on the banks of Ravi.',
    options: [
      { text: 'Lahore', isCorrect: true, expl: 'The Ravi River flows alongside the historic Mughal city of Lahore in Punjab.' },
      { text: 'Quetta', isCorrect: false, expl: 'Quetta is in Balochistan.' },
      { text: 'Karachi', isCorrect: false, expl: 'Karachi is by the Arabian Sea (Lyari and Malir rivers).' },
      { text: 'Peshawar', isCorrect: false, expl: 'Peshawar is near the Kabul and Bara rivers.' }
    ],
    fact: 'Lahore\'s famous monuments like the Tomb of Jahangir and Kamran\'s Baradari were built along the banks of the Ravi.',
    diff: 'Foundation'
  },
  {
    q: 'The Chenab River is one of the major rivers of:',
    snip: 'Province watered by the Chenab.',
    options: [
      { text: 'Balochistan', isCorrect: false, expl: 'Balochistan rivers include Hingol and Dasht.' },
      { text: 'Punjab', isCorrect: true, expl: 'The Chenab is the central and largest tributary flowing through Punjab, forming the setting for the romances of Heer Ranjha and Sohni Mahiwal.' },
      { text: 'Sindh', isCorrect: false, expl: 'Chenab merges before Sindh at Panjnad.' },
      { text: 'Gilgit-Baltistan', isCorrect: false, expl: 'Chenab originates in Himachal/Jammu.' }
    ],
    fact: 'All the other Punjab rivers (Jhelum, Ravi, Sutlej) unite into the Chenab at Panjnad before meeting the Indus at Mithankot.',
    diff: 'Foundation'
  },
  {
    q: 'The Sutlej River eventually joins the:',
    snip: 'River system joined by Sutlej.',
    options: [
      { text: 'Indus River system', isCorrect: true, expl: 'The Sutlej flows across Punjab to meet the other rivers at Panjnad and join the Indus River system at Mithankot.' },
      { text: 'Ganges', isCorrect: false, expl: 'Ganges flows east through India into Bangladesh.' },
      { text: 'Brahmaputra', isCorrect: false, expl: 'Brahmaputra flows into the Bay of Bengal.' },
      { text: 'Kabul River only', isCorrect: false, expl: 'Kabul River is a western tributary near Attock.' }
    ],
    fact: 'Under the 1960 Indus Waters Treaty, exclusive rights to the Sutlej, Ravi, and Beas were allocated to India.',
    diff: 'Foundation'
  },
  {
    q: 'The Kabul River joins the Indus near:',
    snip: 'Historic confluence point.',
    options: [
      { text: 'Attock', isCorrect: true, expl: 'The Kabul River joins the Indus River near Attock Khurd at the historic Attock Fort confluence.' },
      { text: 'Lahore', isCorrect: false, expl: 'Lahore is on the Ravi.' },
      { text: 'Multan', isCorrect: false, expl: 'Multan is on the Chenab.' },
      { text: 'Sukkur', isCorrect: false, expl: 'Sukkur is home to Sukkur Barrage on the Indus in Sindh.' }
    ],
    fact: 'The visual confluence shows blue waters of the Kabul River meeting the muddy brown waters of the Indus.',
    diff: 'Foundation'
  },
  {
    q: 'Manchar Lake is located in:',
    snip: 'Province of Manchar Lake.',
    options: [
      { text: 'Punjab', isCorrect: false, expl: 'Uchalli and Khabikki lakes are in Punjab.' },
      { text: 'Sindh', isCorrect: true, expl: 'Manchar Lake is located in Jamshoro and Dadu districts of Sindh, west of the Indus River.' },
      { text: 'Khyber Pakhtunkhwa', isCorrect: false, expl: 'Saiful Mulook and Mahodand are in KP.' },
      { text: 'Balochistan', isCorrect: false, expl: 'Hanna Lake is in Balochistan.' }
    ],
    fact: 'Manchar Lake is home to the Mohana fisherman community who live on elaborately decorated wooden houseboats.',
    diff: 'Foundation'
  },
  {
    q: "Manchar Lake is famous for being one of Pakistan's:",
    snip: 'Category of Manchar Lake.',
    options: [
      { text: 'Largest natural freshwater lakes', isCorrect: true, expl: 'Manchar Lake is the largest natural freshwater lake in Pakistan and one of the largest in South Asia, covering over 250 km² during peak monsoon.' },
      { text: 'Highest-altitude lakes', isCorrect: false, expl: 'Rush Lake and Karambar Lake are high altitude.' },
      { text: 'Saltwater lakes', isCorrect: false, expl: 'Manchar is a freshwater shallow lake.' },
      { text: 'Artificial reservoirs', isCorrect: false, expl: 'Tarbela and Mangla are artificial reservoirs.' }
    ],
    fact: 'The lake was formed when the branch of the Indus was dammed by tectonic uplift in ancient times.',
    diff: 'Foundation'
  },
  {
    q: 'Saiful Mulook Lake is located near:',
    snip: 'Tourist valley town near Lake Saiful Mulook.',
    options: [
      { text: 'Naran', isCorrect: true, expl: 'Lake Saiful Mulook is located at the northern end of the Kaghan Valley near the town of Naran.' },
      { text: 'Murree', isCorrect: false, expl: 'Murree is a hill station near Islamabad.' },
      { text: 'Skardu', isCorrect: false, expl: 'Skardu has Shangrila and Satpara lakes.' },
      { text: 'Hunza', isCorrect: false, expl: 'Hunza has Attabad and Borith lakes.' }
    ],
    fact: 'The lake sits at an altitude of 3,224 meters (10,578 ft) and is named after a legendary prince from Sufi poet Mian Muhammad Bakhsh\'s romance.',
    diff: 'Foundation'
  },
  {
    q: 'Saiful Mulook Lake is located in:',
    snip: 'Province of Saiful Mulook.',
    options: [
      { text: 'Punjab', isCorrect: false, expl: 'Punjab does not contain the Kaghan Valley.' },
      { text: 'Sindh', isCorrect: false, expl: 'Sindh contains Keenjhar and Manchar lakes.' },
      { text: 'Khyber Pakhtunkhwa', isCorrect: true, expl: 'Lake Saiful Mulook is located in the Mansehra District of Khyber Pakhtunkhwa province.' },
      { text: 'Balochistan', isCorrect: false, expl: 'Balochistan contains Hanna and Spin Karez lakes.' }
    ],
    fact: 'Surrounded by snow-capped peaks, it reflects the towering summit of Malika Parbat.',
    diff: 'Foundation'
  },
  {
    q: 'Attabad Lake is located in:',
    snip: 'Valley of Attabad Lake.',
    options: [
      { text: 'Hunza', isCorrect: true, expl: 'Attabad Lake is situated in the Gojal Hunza Valley of Gilgit-Baltistan.' },
      { text: 'Swat', isCorrect: false, expl: 'Swat Valley contains Mahodand Lake.' },
      { text: 'Skardu', isCorrect: false, expl: 'Skardu contains Upper Kachura and Satpara lakes.' },
      { text: 'Chitral', isCorrect: false, expl: 'Chitral contains Shandur Lake.' }
    ],
    fact: 'The lake is world-famous for its striking vibrant turquoise and turquoise-blue waters.',
    diff: 'Foundation'
  },
  {
    q: 'Attabad Lake was formed primarily as a result of:',
    snip: 'Geological formation event.',
    options: [
      { text: 'A volcanic eruption', isCorrect: false, expl: 'There are no active volcanoes in the area.' },
      { text: 'A landslide', isCorrect: true, expl: 'Attabad Lake was created when a massive mountain landslide blocked the flow of the Hunza River in January 2010.' },
      { text: 'A glacier melting', isCorrect: false, expl: 'It was formed by a natural rock dam landslide.' },
      { text: 'An earthquake-induced tsunami', isCorrect: false, expl: 'It was formed by a massive rockslide damming the river.' }
    ],
    fact: 'The resulting natural dam created a 21 km long lake that submerged parts of the Karakoram Highway.',
    diff: 'Foundation'
  },
  {
    q: 'Attabad Lake was formed in:',
    snip: 'Year of Attabad landslide.',
    options: [
      { text: '2005', isCorrect: false, expl: '2005 was the Kashmir earthquake.' },
      { text: '2008', isCorrect: false, expl: '2008 was the Ziarat earthquake.' },
      { text: '2010', isCorrect: true, expl: 'Attabad Lake was created on 4 January 2010 after a massive landslide disaster in Attabad village.' },
      { text: '2015', isCorrect: false, expl: '2015 saw new tunnels opened around the lake.' }
    ],
    fact: 'In 2015, the Pakistan-China Friendship Tunnels were completed to restore the Karakoram Highway around the lake.',
    diff: 'Intermediate'
  },
  {
    q: 'Lake Saiful Mulook is associated with which mountain?',
    snip: 'Dominant peak towering over the lake.',
    options: [
      { text: 'Malika Parbat', isCorrect: true, expl: 'Lake Saiful Mulook sits directly beneath Malika Parbat ("Queen of the Mountains", 5,290 m), the highest peak in Kaghan Valley.' },
      { text: 'K2', isCorrect: false, expl: 'K2 is in the Karakoram in Baltistan.' },
      { text: 'Nanga Parbat', isCorrect: false, expl: 'Nanga Parbat is in Diamer, Gilgit-Baltistan.' },
      { text: 'Tirich Mir', isCorrect: false, expl: 'Tirich Mir is in Chitral.' }
    ],
    fact: 'According to folk folklore, the fairy Badi-ul-Jamal and Prince Saiful Mulook fell in love beneath Malika Parbat.',
    diff: 'Foundation'
  },
  {
    q: 'Deosai Plains are famous for their:',
    snip: 'Geographical biome classification.',
    options: [
      { text: 'Desert ecosystem', isCorrect: false, expl: 'Deosai is an alpine plateau, not a desert.' },
      { text: 'High-altitude plateau', isCorrect: true, expl: 'Deosai National Park is the world\'s second-highest alpine plateau (average elevation 4,114 meters / 13,497 ft) after Changtang in Tibet.' },
      { text: 'Coastal ecosystem', isCorrect: false, expl: 'It is high in the mountains.' },
      { text: 'Tropical rainforest', isCorrect: false, expl: 'It has treeless tundra-like alpine meadows.' }
    ],
    fact: 'Deosai is known in Balti as "Ghabiyar" and in Urdu as "The Land of the Giants" (Devon ki Sarzameen).',
    diff: 'Foundation'
  },
  {
    q: 'Deosai Plains are located primarily in:',
    snip: 'Territory/Region of Deosai.',
    options: [
      { text: 'Sindh', isCorrect: false, expl: 'Sindh is in southern Pakistan.' },
      { text: 'Gilgit-Baltistan', isCorrect: true, expl: 'Deosai National Park is located in the Skardu and Astore districts of Gilgit-Baltistan.' },
      { text: 'Punjab', isCorrect: false, expl: 'Punjab is in the plains.' },
      { text: 'Balochistan', isCorrect: false, expl: 'Balochistan has dry plateaus.' }
    ],
    fact: 'Sheosar Lake in Deosai is one of the highest lakes in the world at 4,142 meters.',
    diff: 'Foundation'
  },
  {
    q: 'Deosai is famous for the:',
    snip: 'Flagship protected wildlife species of Deosai.',
    options: [
      { text: 'Snow leopard', isCorrect: false, expl: 'Snow leopards live in Khunjerab and Central Karakoram.' },
      { text: 'Himalayan brown bear', isCorrect: true, expl: 'Deosai National Park was established in 1993 specifically to protect the critically endangered Himalayan Brown Bear (*Ursus arctos isabellinus*).' },
      { text: 'Markhor', isCorrect: false, expl: 'Markhor lives on steep rocky cliffs.' },
      { text: 'Indus dolphin', isCorrect: false, expl: 'Indus dolphin is in the Indus River in Sindh/Punjab.' }
    ],
    fact: 'Thanks to conservation efforts, the brown bear population in Deosai has stabilized and grown.',
    diff: 'Foundation'
  },
  {
    q: 'The Thar Desert is primarily located in:',
    snip: 'Province encompassing the Pakistani Thar.',
    options: [
      { text: 'Sindh', isCorrect: true, expl: 'The Thar Desert (The Great Indian Desert) covers the eastern districts of Sindh (Tharparkar, Umerkot, Mirpur Khas).' },
      { text: 'Khyber Pakhtunkhwa', isCorrect: false, expl: 'KP has no deserts.' },
      { text: 'Punjab', isCorrect: false, expl: 'Punjab hosts Cholistan and Thal deserts.' },
      { text: 'Balochistan', isCorrect: false, expl: 'Balochistan hosts the Kharan Desert.' }
    ],
    fact: 'Thar is the 7th largest desert in the world and the most densely populated desert on Earth.',
    diff: 'Foundation'
  },
  {
    q: 'The Cholistan Desert is located mainly in:',
    snip: 'Province of the Rohi / Cholistan Desert.',
    options: [
      { text: 'Sindh', isCorrect: false, expl: 'Sindh has the Thar desert.' },
      { text: 'Punjab', isCorrect: true, expl: 'The Cholistan Desert (locally called Rohi) is located in the Bahawalpur division of southern Punjab.' },
      { text: 'Balochistan', isCorrect: false, expl: 'Balochistan has Kharan.' },
      { text: 'Khyber Pakhtunkhwa', isCorrect: false, expl: 'KP has mountains and valleys.' }
    ],
    fact: 'The desert hosts the iconic Derawar Fort and the famous annual Cholistan Desert Jeep Rally.',
    diff: 'Foundation'
  },
  {
    q: 'The Kharan Desert is located in:',
    snip: 'Province of Kharan Desert.',
    options: [
      { text: 'Punjab', isCorrect: false, expl: 'Punjab has Cholistan and Thal.' },
      { text: 'Sindh', isCorrect: false, expl: 'Sindh has Thar.' },
      { text: 'Balochistan', isCorrect: true, expl: 'The Kharan Desert (Sandy Desert) is an arid desert plateau located in southwestern Balochistan.' },
      { text: 'KP', isCorrect: false, expl: 'KP is mountainous.' }
    ],
    fact: 'The Ras Koh Hills adjacent to the Kharan Desert served as the test site for Pakistan\'s nuclear tests in May 1998.',
    diff: 'Foundation'
  },
  {
    q: 'The Indus Delta is located in:',
    snip: 'Province where the Indus river fans into the Arabian Sea.',
    options: [
      { text: 'Punjab', isCorrect: false, expl: 'Punjab is upstream.' },
      { text: 'Sindh', isCorrect: true, expl: 'The Indus Delta is located in the southern coastal districts of Thatta and Sujawal in Sindh.' },
      { text: 'Balochistan', isCorrect: false, expl: 'Balochistan coast is Makran.' },
      { text: 'KP', isCorrect: false, expl: 'KP is in the north.' }
    ],
    fact: 'The delta is home to the world\'s fifth-largest mangrove forest ecosystem and a vital breeding ground for marine life.',
    diff: 'Foundation'
  },

  // 251–275: Historical Sites & Heritage
  {
    q: 'Mohenjo-daro is located in:',
    snip: 'Province of the ancient Bronze Age city.',
    options: [
      { text: 'Punjab', isCorrect: false, expl: 'Harappa is located in Punjab.' },
      { text: 'Sindh', isCorrect: true, expl: 'Mohenjo-daro is located in the Larkana District of Sindh province.' },
      { text: 'Balochistan', isCorrect: false, expl: 'Mehrgarh is in Balochistan.' },
      { text: 'KP', isCorrect: false, expl: 'Taxila/Takht-i-Bahi are in Punjab/KP.' }
    ],
    fact: 'Discovered in 1922 by R.D. Banerji and excavated under Sir John Marshall.',
    diff: 'Foundation'
  },
  {
    q: 'Mohenjo-daro belongs to the:',
    snip: 'Ancient civilization identity.',
    options: [
      { text: 'Gandhara Civilization', isCorrect: false, expl: 'Gandhara was centered around Taxila and Peshawar Valley.' },
      { text: 'Indus Valley Civilization', isCorrect: true, expl: 'Mohenjo-daro (flourished c. 2500 BCE) was one of the grandest urban centers of the Indus Valley (Harappan) Civilization.' },
      { text: 'Mughal Empire', isCorrect: false, expl: 'Mughal Empire flourished from 1526 to 1857.' },
      { text: 'Buddhist Empire', isCorrect: false, expl: 'Ashoka and Kanishka ruled Buddhist empires much later.' }
    ],
    fact: 'The Indus Valley Civilization was contemporary with ancient Egypt and Mesopotamia.',
    diff: 'Foundation'
  },
  {
    q: 'Mohenjo-daro literally means:',
    snip: 'Sindhi translation of Mohenjo-daro.',
    options: [
      { text: 'City of Kings', isCorrect: false, expl: 'Not the meaning.' },
      { text: 'Mound of the Dead', isCorrect: true, expl: 'In the Sindhi language, "Mohenjo-daro" translates literally to the "Mound of the Dead Men".' },
      { text: 'City of Gold', isCorrect: false, expl: 'Not the meaning.' },
      { text: 'Ancient City', isCorrect: false, expl: 'Not the literal translation.' }
    ],
    fact: 'The site features the Great Bath, the Granary, advanced drainage, and the iconic "Dancing Girl" bronze statue.',
    diff: 'Foundation'
  },
  {
    q: 'Mohenjo-daro is situated near the:',
    snip: 'River along which Mohenjo-daro was built.',
    options: [
      { text: 'Ravi River', isCorrect: false, expl: 'Harappa is near the old bed of the Ravi.' },
      { text: 'Indus River', isCorrect: true, expl: 'Mohenjo-daro lies directly on the right (western) bank of the Indus River in Sindh.' },
      { text: 'Jhelum River', isCorrect: false, expl: 'Jhelum is far to the north.' },
      { text: 'Kabul River', isCorrect: false, expl: 'Kabul River is in KP.' }
    ],
    fact: 'Annual inundations of the Indus provided fertile silt for agriculture around Mohenjo-daro.',
    diff: 'Foundation'
  },
  {
    q: 'Taxila is located in:',
    snip: 'Province of Taxila.',
    options: [
      { text: 'Punjab', isCorrect: true, expl: 'Taxila is located in the Rawalpindi District of Punjab province, about 32 km northwest of Islamabad.' },
      { text: 'Sindh', isCorrect: false, expl: 'Sindh contains Mohenjo-daro and Thatta.' },
      { text: 'Balochistan', isCorrect: false, expl: 'Balochistan contains Mehrgarh.' },
      { text: 'KP', isCorrect: false, expl: 'Taxila is just across the provincial border in Punjab.' }
    ],
    fact: 'Taxila was connected to the ancient Grand Trunk Road and Persian Royal Road.',
    diff: 'Foundation'
  },
  {
    q: 'Taxila was an important centre of the ancient:',
    snip: 'Civilization centered around Taxila.',
    options: [
      { text: 'Gandhara civilization', isCorrect: true, expl: 'Taxila was the renowned capital and educational heart of the ancient Gandhara civilization from 6th century BCE to 5th century CE.' },
      { text: 'Egyptian civilization', isCorrect: false, expl: 'Egypt was centered on the Nile.' },
      { text: 'Roman civilization', isCorrect: false, expl: 'Rome was centered in the Mediterranean.' },
      { text: 'Persian Gulf civilization', isCorrect: false, expl: 'Taxila was Gandharan.' }
    ],
    fact: 'The Greco-Buddhist art of Gandhara flourished here under King Kanishka of the Kushan Empire.',
    diff: 'Foundation'
  },
  {
    q: 'Taxila is particularly famous for its ancient:',
    snip: 'Historical prominence of Taxila.',
    options: [
      { text: 'University and Buddhist heritage', isCorrect: true, expl: 'Taxila was world-famous for its ancient university (where Chanakya and Panini taught) and vast Buddhist stupas like Dharmarajika and Jaulian.' },
      { text: 'Mughal forts only', isCorrect: false, expl: 'Mughal monuments are primarily in Lahore.' },
      { text: 'Islamic architecture only', isCorrect: false, expl: 'Taxila is primarily known for ancient Buddhist, Vedic, and Greek heritage.' },
      { text: 'Colonial buildings', isCorrect: false, expl: 'Colonial buildings are in Lahore and Karachi.' }
    ],
    fact: 'Scholars from all across Asia traveled to ancient Taxila to study medicine, mathematics, statecraft, and philosophy.',
    diff: 'Foundation'
  },
  {
    q: 'The archaeological site of Taxila is a:',
    snip: 'International heritage designation.',
    options: [
      { text: 'UNESCO World Heritage Site', isCorrect: true, expl: 'Taxila was declared a UNESCO World Heritage Site in 1980 for its extraordinary urban ruins and Buddhist monastic complexes.' },
      { text: 'UNESCO Intangible Heritage only', isCorrect: false, expl: 'It is a physical archaeological World Heritage Site.' },
      { text: 'Modern city only', isCorrect: false, expl: 'It is a world-renowned ancient archaeological site.' },
      { text: 'National park only', isCorrect: false, expl: 'It is an archaeological heritage site.' }
    ],
    fact: 'Excavations by Sir John Marshall between 1913 and 1934 uncovered three successive ancient cities: Bhir Mound, Sirkap, and Sirsukh.',
    diff: 'Foundation'
  },
  {
    q: 'The Rohtas Fort is located near:',
    snip: 'City location of Rohtas Fort.',
    options: [
      { text: 'Jhelum', isCorrect: true, expl: 'Rohtas Fort (Qila Rohtas) is situated near the city of Dina in Jhelum District, Punjab.' },
      { text: 'Lahore', isCorrect: false, expl: 'Lahore has the Lahore Fort (Shahi Qila).' },
      { text: 'Multan', isCorrect: false, expl: 'Multan has Kohna Fort.' },
      { text: 'Faisalabad', isCorrect: false, expl: 'Faisalabad is an industrial center.' }
    ],
    fact: 'The massive fort perimeter wall extends over 4 kilometers with 12 massive gates and 68 bastion towers.',
    diff: 'Foundation'
  },
  {
    q: 'Rohtas Fort was built by:',
    snip: 'Founder and builder king.',
    options: [
      { text: 'Akbar', isCorrect: false, expl: 'Akbar built Lahore Fort and Attock Fort.' },
      { text: 'Sher Shah Suri', isCorrect: true, expl: 'Rohtas Fort was commissioned by the Afghan king Sher Shah Suri in 1541 CE.' },
      { text: 'Shah Jahan', isCorrect: false, expl: 'Shah Jahan built the Taj Mahal and Shalimar Gardens.' },
      { text: 'Aurangzeb', isCorrect: false, expl: 'Aurangzeb built Badshahi Mosque.' }
    ],
    fact: 'Sher Shah Suri named it after the famous Rohtasgarh Fort in Bihar, India.',
    diff: 'Foundation'
  },
  {
    q: 'Rohtas Fort was built primarily for:',
    snip: 'Strategic purpose of Rohtas Fort.',
    options: [
      { text: 'Defence', isCorrect: true, expl: 'It was built as a defensive garrison fortress to block the return of Mughal Emperor Humayun and subdue the rebellious local Gakhar tribes.' },
      { text: 'Trade', isCorrect: false, expl: 'It was purely a military fortress.' },
      { text: 'Religious worship', isCorrect: false, expl: 'It was a military citadel.' },
      { text: 'Irrigation', isCorrect: false, expl: 'It was a military fort.' }
    ],
    fact: 'Rohtas Fort was never taken by force and stands as an exceptional masterpiece of early Muslim military architecture.',
    diff: 'Foundation'
  },
  {
    q: 'Rohtas Fort is a:',
    snip: 'Global status of Rohtas Fort.',
    options: [
      { text: 'UNESCO World Heritage Site', isCorrect: true, expl: 'Rohtas Fort was inscribed as a UNESCO World Heritage Site in 1997 as an exceptional example of Muslim military architecture.' },
      { text: 'Modern military base', isCorrect: false, expl: 'It is an ancient protected archaeological heritage site.' },
      { text: 'Buddhist monastery', isCorrect: false, expl: 'It is a 16th-century fortress.' },
      { text: 'Palace only', isCorrect: false, expl: 'It is a military fortress complex.' }
    ],
    fact: 'Its Sohail Gate stands over 21 meters high and displays fine Afghan architectural ornamentation.',
    diff: 'Foundation'
  },
  {
    q: 'The Lahore Fort is also known as:',
    snip: 'Urdu name of the Lahore Fort.',
    options: [
      { text: 'Shahi Qila', isCorrect: true, expl: 'The Lahore Fort is popularly known in Urdu as the "Shahi Qila" (Royal Citadel).' },
      { text: 'Bala Hisar', isCorrect: false, expl: 'Bala Hisar is the historic fort in Peshawar.' },
      { text: 'Derawar Fort', isCorrect: false, expl: 'Derawar Fort is in Cholistan.' },
      { text: 'Ranikot', isCorrect: false, expl: 'Ranikot Fort is the Great Wall of Sindh near Sann.' }
    ],
    fact: 'The fort features the famed Sheesh Mahal (Palace of Mirrors), Naulakha Pavilion, and the world\'s largest Picture Wall.',
    diff: 'Foundation'
  },
  {
    q: 'The Lahore Fort is located in:',
    snip: 'City of Shahi Qila.',
    options: [
      { text: 'Karachi', isCorrect: false, expl: 'Karachi has Mohatta Palace.' },
      { text: 'Lahore', isCorrect: true, expl: 'Lahore Fort is situated at the northern end of the Walled City of Lahore, Punjab, adjacent to Badshahi Mosque and Iqbal Park.' },
      { text: 'Multan', isCorrect: false, expl: 'Multan has the shrine of Shah Rukn-e-Alam.' },
      { text: 'Islamabad', isCorrect: false, expl: 'Islamabad has Faisal Mosque.' }
    ],
    fact: 'The Fort together with the Shalimar Gardens was inscribed as a UNESCO World Heritage Site in 1981.',
    diff: 'Foundation'
  },
  {
    q: 'The Badshahi Mosque is located in:',
    snip: 'City of the iconic Badshahi Mosque.',
    options: [
      { text: 'Lahore', isCorrect: true, expl: 'The Badshahi Mosque (Imperial Mosque) is located opposite the Alamgiri Gate of Lahore Fort in Lahore, Punjab.' },
      { text: 'Multan', isCorrect: false, expl: 'Multan is known for historic shrines.' },
      { text: 'Islamabad', isCorrect: false, expl: 'Islamabad contains Faisal Mosque.' },
      { text: 'Peshawar', isCorrect: false, expl: 'Peshawar contains Mahabat Khan Mosque.' }
    ],
    fact: 'The courtyard can accommodate 100,000 worshippers, making it one of the largest mosques in the world.',
    diff: 'Foundation'
  },
  {
    q: 'Badshahi Mosque was commissioned by:',
    snip: 'Mughal Emperor who built Badshahi Mosque.',
    options: [
      { text: 'Akbar', isCorrect: false, expl: 'Akbar built the Lahore Fort expansion.' },
      { text: 'Shah Jahan', isCorrect: false, expl: 'Shah Jahan built Wazir Khan Mosque and Shah Jahan Mosque Thatta.' },
      { text: 'Aurangzeb', isCorrect: true, expl: 'Badshahi Mosque was commissioned by the sixth Mughal Emperor Aurangzeb Alamgir in 1671.' },
      { text: 'Jahangir', isCorrect: false, expl: 'Jahangir is buried across the river in Shahdara, Lahore.' }
    ],
    fact: 'Aurangzeb chose his foster brother and Governor of Lahore, Fidai Khan Koka, to oversee construction.',
    diff: 'Foundation'
  },
  {
    q: 'Badshahi Mosque was completed in:',
    snip: 'Year of completion.',
    options: [
      { text: '1560', isCorrect: false, expl: '1560 was early Akbar era.' },
      { text: '1648', isCorrect: false, expl: '1648 was Shah Jahan era.' },
      { text: '1673', isCorrect: true, expl: 'Construction began in 1671 and the mosque was completed in May 1673 CE.' },
      { text: '1707', isCorrect: false, expl: '1707 marked Aurangzeb\'s death.' }
    ],
    fact: 'Constructed with carved red sandstone from Rajasthan and three marble domes, it was the largest mosque in the world for 313 years.',
    diff: 'Foundation'
  },
  {
    q: 'The Wazir Khan Mosque is located in:',
    snip: 'City of the fresco masterpiece mosque.',
    options: [
      { text: 'Lahore', isCorrect: true, expl: 'The Wazir Khan Mosque is situated in the Walled City of Lahore near the Delhi Gate.' },
      { text: 'Multan', isCorrect: false, expl: 'Multan has beautiful Sufi shrines.' },
      { text: 'Peshawar', isCorrect: false, expl: 'Peshawar has Mahabat Khan Mosque.' },
      { text: 'Thatta', isCorrect: false, expl: 'Thatta has the Shah Jahan Mosque.' }
    ],
    fact: 'Renowned as the "mole on the cheek of Lahore", it is celebrated for breathtaking fresco paintings (*fresco secco*) and vibrant tile-mosaic (*kashi-kari*).',
    diff: 'Foundation'
  },
  {
    q: 'Wazir Khan Mosque was constructed during the reign of:',
    snip: 'Mughal Emperor.',
    options: [
      { text: 'Akbar', isCorrect: false, expl: 'Reigned 1556–1605.' },
      { text: 'Jahangir', isCorrect: false, expl: 'Reigned 1605–1627.' },
      { text: 'Shah Jahan', isCorrect: true, expl: 'Wazir Khan Mosque was commissioned in 1634 during the reign of Mughal Emperor Shah Jahan by his court physician and Governor of Lahore, Ilam-ud-din Ansari (Wazir Khan).' },
      { text: 'Aurangzeb', isCorrect: false, expl: 'Reigned 1658–1707 and built Badshahi Mosque.' }
    ],
    fact: 'Construction of the mosque took approximately seven years (1634–1641 CE).',
    diff: 'Foundation'
  },
  {
    q: 'The Makli Necropolis is located near:',
    snip: 'City near the vast Makli hill cemetery.',
    options: [
      { text: 'Thatta', isCorrect: true, expl: 'The Makli Necropolis is located on a ridge overlooking the historic city of Thatta in Sindh.' },
      { text: 'Lahore', isCorrect: false, expl: 'Lahore contains Mughal royal tombs in Shahdara.' },
      { text: 'Peshawar', isCorrect: false, expl: 'Peshawar is in KP.' },
      { text: 'Quetta', isCorrect: false, expl: 'Quetta is in Balochistan.' }
    ],
    fact: 'Makli spans over 10 km² and contains an estimated 500,000 to 1 million graves and mausoleums from 14th to 18th centuries.',
    diff: 'Foundation'
  },
  {
    q: 'Makli is one of the world\'s largest:',
    snip: 'Monuments classification.',
    options: [
      { text: 'Forts', isCorrect: false, expl: 'Ranikot is the largest fort.' },
      { text: 'Necropolises', isCorrect: true, expl: 'Makli Hill is one of the largest funerary sites (necropolises) in the world, holding tombs of kings, queens, saints, scholars, and soldiers.' },
      { text: 'Mosques', isCorrect: false, expl: 'Mosques include Badshahi and Faisal Mosque.' },
      { text: 'Libraries', isCorrect: false, expl: 'It is a vast historic cemetery.' }
    ],
    fact: 'The intricate stone carvings blend Sindhi, Gujarati, Persian, and Central Asian decorative motifs.',
    diff: 'Foundation'
  },
  {
    q: 'Makli Necropolis is a UNESCO:',
    snip: 'Heritage designation.',
    options: [
      { text: 'World Heritage Site', isCorrect: true, expl: 'Makli, Thatta was inscribed as a UNESCO World Heritage Site in 1981.' },
      { text: 'Biosphere reserve', isCorrect: false, expl: 'Biosphere reserves include Lal Suhanra.' },
      { text: 'Geopark', isCorrect: false, expl: 'It is a cultural heritage site.' },
      { text: 'Intangible heritage site', isCorrect: false, expl: 'It is a designated World Heritage Site.' }
    ],
    fact: 'The tombs represent the Samma (1351–1524), Arghun (1520–1554), Tarkhan (1554–1591), and Mughal eras.',
    diff: 'Foundation'
  },
  {
    q: 'The ancient city of Thatta is located in:',
    snip: 'Province of Thatta.',
    options: [
      { text: 'Punjab', isCorrect: false, expl: 'Punjab contains Multan and Lahore.' },
      { text: 'Sindh', isCorrect: true, expl: 'Thatta is a historic city located in southern Sindh province, approximately 98 km east of Karachi.' },
      { text: 'KP', isCorrect: false, expl: 'KP is in the north.' },
      { text: 'Balochistan', isCorrect: false, expl: 'Balochistan is to the west.' }
    ],
    fact: 'Thatta served as the medieval capital of Sindh under the Samma, Arghun, and Tarkhan dynasties.',
    diff: 'Foundation'
  },
  {
    q: 'Derawar Fort is located in the:',
    snip: 'Desert home of Derawar Fort.',
    options: [
      { text: 'Thar Desert', isCorrect: false, expl: 'Thar is in southeastern Sindh.' },
      { text: 'Cholistan Desert', isCorrect: true, expl: 'Derawar Fort is located in the heart of the Cholistan Desert (Bahawalpur, Punjab).' },
      { text: 'Kharan Desert', isCorrect: false, expl: 'Kharan is in Balochistan.' },
      { text: 'Thal Desert', isCorrect: false, expl: 'Thal is between the Indus and Jhelum.' }
    ],
    fact: 'Derawar Fort was originally built by Rai Jajja Bhatti of Rajputana and later rebuilt by the Nawabs of Bahawalpur in 1732.',
    diff: 'Foundation'
  },
  {
    q: 'Derawar Fort is particularly famous for its:',
    snip: 'Visual trademark of Derawar Fort.',
    options: [
      { text: 'Massive square bastions', isCorrect: true, expl: 'Derawar Fort is world-famous for its 40 colossal semicircular/square bastions rising 30 meters high across a 1,500-meter perimeter in the open desert.' },
      { text: 'Buddhist sculptures', isCorrect: false, expl: 'Buddhist sculptures are in Gandhara/Taxila.' },
      { text: 'Mughal gardens', isCorrect: false, expl: 'Mughal gardens are in Lahore.' },
      { text: 'Underground tunnels only', isCorrect: false, expl: 'Its iconic external bastion walls are its primary visual hallmark.' }
    ],
    fact: 'The imposing brick walls are visible from miles away across the flat Cholistan dunes.',
    diff: 'Foundation'
  },

  // 276–300: Culture, Languages & Traditions
  {
    q: 'The national language of Pakistan is:',
    snip: 'National lingua franca.',
    options: [
      { text: 'Punjabi', isCorrect: false, expl: 'Punjabi is the most widely spoken regional mother tongue.' },
      { text: 'Urdu', isCorrect: true, expl: 'Urdu (Lashkari) is the constitutionally designated national language of Pakistan and serves as the country\'s unifying lingua franca.' },
      { text: 'English', isCorrect: false, expl: 'English is the official language for administrative and legal functions.' },
      { text: 'Sindhi', isCorrect: false, expl: 'Sindhi is a major provincial language.' }
    ],
    fact: 'Quaid-e-Azam declared Urdu as the national language in 1948 to forge national unity across all diverse regions.',
    diff: 'Foundation'
  },
  {
    q: 'The most widely spoken mother tongue in Pakistan is:',
    snip: 'Largest first language by native speakers.',
    options: [
      { text: 'Urdu', isCorrect: false, expl: 'Urdu is native to ~7-8% of the population, though understood by over 90%.' },
      { text: 'Punjabi', isCorrect: true, expl: 'Punjabi is the most widely spoken first language (mother tongue) in Pakistan, spoken natively by roughly 37-39% of the population.' },
      { text: 'Sindhi', isCorrect: false, expl: 'Sindhi is spoken by ~14-15%.' },
      { text: 'Pashto', isCorrect: false, expl: 'Pashto is spoken by ~18%.' }
    ],
    fact: 'Pakistan is home to more than 70 distinct living languages across its varied geographical landscapes.',
    diff: 'Foundation'
  },
  {
    q: 'Sindhi is predominantly spoken in:',
    snip: 'Province of the Sindhi language.',
    options: [
      { text: 'Sindh', isCorrect: true, expl: 'Sindhi is an Indo-Aryan language predominantly spoken in Sindh province and possesses a rich literary heritage dating back over a thousand years.' },
      { text: 'Punjab', isCorrect: false, expl: 'Punjabi/Saraiki are spoken in Punjab.' },
      { text: 'Balochistan', isCorrect: false, expl: 'Balochi/Brahui/Pashto are spoken in Balochistan.' },
      { text: 'KP', isCorrect: false, expl: 'Pashto/Hindko are spoken in KP.' }
    ],
    fact: 'Sindhi is written in an extended Perso-Arabic alphabet with 52 characters.',
    diff: 'Foundation'
  },
  {
    q: 'Pashto is predominantly spoken in:',
    snip: 'Province of the Pashto language.',
    options: [
      { text: 'Sindh', isCorrect: false, expl: 'Sindhi is spoken in Sindh.' },
      { text: 'Khyber Pakhtunkhwa', isCorrect: true, expl: 'Pashto is an Eastern Iranian language predominantly spoken in Khyber Pakhtunkhwa, northern Balochistan, and adjacent tribal regions.' },
      { text: 'Punjab', isCorrect: false, expl: 'Punjabi is in Punjab.' },
      { text: 'Gilgit-Baltistan only', isCorrect: false, expl: 'GB speaks Shina, Balti, Khowar, Burushaski, and Wakhi.' }
    ],
    fact: 'Pashto poetry is deeply enriched by warrior-poets like Khushal Khan Khattak and Sufi master Rahman Baba.',
    diff: 'Foundation'
  },
  {
    q: 'Balochi is primarily spoken in:',
    snip: 'Province of Balochi language.',
    options: [
      { text: 'Punjab', isCorrect: false, expl: 'Punjabi is in Punjab.' },
      { text: 'Sindh', isCorrect: false, expl: 'Sindhi is in Sindh.' },
      { text: 'Balochistan', isCorrect: true, expl: 'Balochi is a Northwestern Iranian language primarily spoken by the Baloch people across Balochistan.' },
      { text: 'KP', isCorrect: false, expl: 'Pashto is in KP.' }
    ],
    fact: 'Balochi has three main dialect groups: Eastern, Western (Rakhshani), and Southern (Makrani).',
    diff: 'Foundation'
  },
  {
    q: 'Punjabi is written primarily in Pakistan using the:',
    snip: 'Script used for Punjabi in Pakistan.',
    options: [
      { text: 'Devanagari script', isCorrect: false, expl: 'Devanagari is used for Hindi/Sanskrit.' },
      { text: 'Shahmukhi script', isCorrect: true, expl: 'In Pakistan, Punjabi is written primarily in Shahmukhi (an adaptation of the Nastaliq Perso-Arabic script), meaning "from the King\'s mouth".' },
      { text: 'Roman script', isCorrect: false, expl: 'Roman script is used for English.' },
      { text: 'Cyrillic script', isCorrect: false, expl: 'Cyrillic is used for Russian/Slavic languages.' }
    ],
    fact: 'Across the border in Indian Punjab, Punjabi is written in the Gurmukhi script.',
    diff: 'Foundation'
  },
  {
    q: 'The traditional dance associated strongly with Punjab is:',
    snip: 'Folk dance of Punjab.',
    options: [
      { text: 'Khattak', isCorrect: false, expl: 'Khattak is a Pashtun sword dance.' },
      { text: 'Bhangra', isCorrect: true, expl: 'Bhangra and Giddha are the world-famous traditional folk harvest dances of the Punjab region, energized by the beats of the dhol drum.' },
      { text: 'Attan', isCorrect: false, expl: 'Attan is Pashtun/Afghan.' },
      { text: 'Ho Jamalo', isCorrect: false, expl: 'Ho Jamalo is Sindhi.' }
    ],
    fact: 'Bhangra was traditionally performed during the Baisakhi wheat harvesting season.',
    diff: 'Foundation'
  },
  {
    q: 'Attan is traditionally associated with:',
    snip: 'Cultural origin of Attan dance.',
    options: [
      { text: 'Sindh', isCorrect: false, expl: 'Sindh dances include Jhumir and Ho Jamalo.' },
      { text: 'Punjab', isCorrect: false, expl: 'Punjab dances include Bhangra, Luddi, and Sammi.' },
      { text: 'Pashtun culture', isCorrect: true, expl: 'Attan is the ancient circular group folk dance traditionally performed by Pashtuns during weddings, celebrations, and victories.' },
      { text: 'Kashmir only', isCorrect: false, expl: 'Kashmir dances include Rouf.' }
    ],
    fact: 'Attan is performed in a large circle to the rhythmic tempo of the Dholak and Surna, gradually speeding up to an energetic climax.',
    diff: 'Foundation'
  },
  {
    q: 'Khattak dance is associated with:',
    snip: 'Cultural heritage of Khattak dance.',
    options: [
      { text: 'Pashtun culture', isCorrect: true, expl: 'Khattak dance is a fast-paced martial sword dance of the Khattak Pashtun tribe, performed with real swords and flashing footwork.' },
      { text: 'Sindhi culture', isCorrect: false, expl: 'Sindhi dances include Ho Jamalo.' },
      { text: 'Punjabi culture', isCorrect: false, expl: 'Punjabi dances include Bhangra and Luddi.' },
      { text: 'Balochi culture', isCorrect: false, expl: 'Balochi dances include Lewa and Chap.' }
    ],
    fact: 'Warrior-poet Khushal Khan Khattak used this dance in the 17th century for military troop preparation and morale before battles.',
    diff: 'Foundation'
  },
  {
    q: 'Ho Jamalo is a traditional dance/song associated with:',
    snip: 'Province of Ho Jamalo.',
    options: [
      { text: 'Sindh', isCorrect: true, expl: 'Ho Jamalo is the most iconic folk song and celebratory dance of Sindh, celebrating the return of local hero Jamalo Sheedi.' },
      { text: 'Punjab', isCorrect: false, expl: 'Punjab has Bhangra and Jugni.' },
      { text: 'KP', isCorrect: false, expl: 'KP has Attan and Tappe.' },
      { text: 'Balochistan', isCorrect: false, expl: 'Balochistan has Zahirok and Liko.' }
    ],
    fact: 'Legend says Jamalo bravely tested the first British railway bridge across the Indus at Sukkur in 1889.',
    diff: 'Foundation'
  },
  {
    q: 'Sindhi Ajrak is traditionally associated with:',
    snip: 'Geographic identity of Ajrak.',
    options: [
      { text: 'Sindh', isCorrect: true, expl: 'Ajrak is the timeless cultural shawl and block-printed textile symbol of Sindh, worn with deep pride and presented to honored guests.' },
      { text: 'Punjab', isCorrect: false, expl: 'Punjab is known for Phulkari embroidery.' },
      { text: 'KP', isCorrect: false, expl: 'KP is known for Chitrali Patti and Pakol.' },
      { text: 'Gilgit-Baltistan', isCorrect: false, expl: 'GB is known for woolen caps with peacock feathers.' }
    ],
    fact: 'Traces of trefoil-patterned cloaks similar to Ajrak were found on the Priest-King statue excavated at Mohenjo-daro.',
    diff: 'Foundation'
  },
  {
    q: 'Ajrak is traditionally a type of:',
    snip: 'Textile craft technique.',
    options: [
      { text: 'Embroidered shoe', isCorrect: false, expl: 'Khussa is an embroidered shoe.' },
      { text: 'Block-printed textile', isCorrect: true, expl: 'Ajrak is made through a complex 16-stage hand block-printing process using natural vegetable and mineral dyes, predominantly deep crimson red and indigo blue with geometric star patterns.' },
      { text: 'Metal ornament', isCorrect: false, expl: 'It is a fabric craft.' },
      { text: 'Musical instrument', isCorrect: false, expl: 'Musical instruments include the Alghoza and Chang.' }
    ],
    fact: 'Carved wooden blocks called *Pors* are dipped in natural dyes and stamped repeatedly onto hand-washed cotton.',
    diff: 'Foundation'
  },
  {
    q: 'Sindhi Topi is a traditional:',
    snip: 'Clothing item of the Sindhi Topi.',
    options: [
      { text: 'Cap', isCorrect: true, expl: 'The Sindhi Topi is a cylindrical hand-embroidered cap featuring an iconic arched cut-out in front, adorned with glass beads and tiny mirrors (shisha).' },
      { text: 'Shawl', isCorrect: false, expl: 'Ajrak is the shawl.' },
      { text: 'Shoe', isCorrect: false, expl: 'Shoe is Khussa.' },
      { text: 'Belt', isCorrect: false, expl: 'Topi is headwear.' }
    ],
    fact: 'Sindh Culture Day (Ekta Day) is celebrated annually in December by wearing the Sindhi Topi and Ajrak.',
    diff: 'Foundation'
  },
  {
    q: 'Peshawari chappal is particularly associated with:',
    snip: 'Culture associated with the iconic footwear.',
    options: [
      { text: 'Pashtun culture', isCorrect: true, expl: 'The Peshawari chappal is a traditional semi-closed leather sandal originating from the city of Peshawar in Khyber Pakhtunkhwa and Pashtun culture.' },
      { text: 'Sindhi culture', isCorrect: false, expl: 'Sindhi traditional shoes include Sindhi Jutti.' },
      { text: 'Kashmiri culture', isCorrect: false, expl: 'Kashmiri culture is known for Pheran and Pashmina.' },
      { text: 'Balochi culture', isCorrect: false, expl: 'Balochi footwear includes Chawat and Sawas.' }
    ],
    fact: 'Crafted from pure tanned cowhide leather with heavy rubber tire soles, it is worn across Pakistan with Shalwar Kameez.',
    diff: 'Foundation'
  },
  {
    q: 'The traditional male dress widely worn in Pakistan is:',
    snip: 'Daily traditional attire.',
    options: [
      { text: 'Sherwani only', isCorrect: false, expl: 'Sherwani is formal attire.' },
      { text: 'Shalwar kameez', isCorrect: true, expl: 'Shalwar kameez (baggy trousers and tunic shirt) is the ubiquitous everyday and formal attire worn by men and women across all four provinces of Pakistan.' },
      { text: 'Dhoti only', isCorrect: false, expl: 'Dhoti/Tehmat is worn in rural areas.' },
      { text: 'Kurta trousers only', isCorrect: false, expl: 'Shalwar kameez is the standard national ensemble.' }
    ],
    fact: 'Each province has distinct regional variations of the Shalwar Kameez cut and embroidery.',
    diff: 'Foundation'
  },
  {
    q: 'The national dress of Pakistan is commonly considered:',
    snip: 'Official national dress designation.',
    options: [
      { text: 'Shalwar kameez', isCorrect: true, expl: 'Shalwar kameez is recognized as the national dress of Pakistan, often paired with a waistcoat or sherwani for formal state occasions.' },
      { text: 'Sherwani', isCorrect: false, expl: 'Sherwani is formal national ceremonial wear.' },
      { text: 'Kurta pajama only', isCorrect: false, expl: 'Shalwar kameez is the standard national dress.' },
      { text: 'Waistcoat', isCorrect: false, expl: 'A waistcoat is worn over the Shalwar Kameez.' }
    ],
    fact: 'Civil servants, sports teams, and diplomatic delegations officially wear Shalwar Kameez with waistcoats or Sherwanis.',
    diff: 'Foundation'
  },
  {
    q: 'The traditional Balochi embroidery is known for its:',
    snip: 'Artistic signature of Balochi embroidery.',
    options: [
      { text: 'Colourful geometric designs', isCorrect: true, expl: 'Balochi hand embroidery (Doch) is celebrated for its intricate, vibrant geometric needlework, glass mirror-work, and fine silk thread patterns.' },
      { text: 'Metalwork', isCorrect: false, expl: 'Doch is needle embroidery on fabric.' },
      { text: 'Marble carving', isCorrect: false, expl: 'Marble carving is stonework.' },
      { text: 'Wood painting', isCorrect: false, expl: 'Wood carving is in Chiniot.' }
    ],
    fact: 'Balochi dresses (Pashk) can take several months of meticulous master needlework to complete.',
    diff: 'Foundation'
  },
  {
    q: 'Truck art is particularly famous for decorating:',
    snip: 'Vehicle transport canvas.',
    options: [
      { text: 'Pakistani trucks and buses', isCorrect: true, expl: 'Pakistani truck art is an internationally recognized indigenous art form that turns commercial trucks, buses, and rickshaws into moving masterpieces of color and poetry.' },
      { text: 'Ships', isCorrect: false, expl: 'Ships are painted in dockyards.' },
      { text: 'Aircraft', isCorrect: false, expl: 'Aircraft have liveries.' },
      { text: 'Trains only', isCorrect: false, expl: 'Trucks and Bedford buses are the primary canvas.' }
    ],
    fact: 'Truck art combines wood carvings, beaten copper/brass work, reflective tape designs, portraiture, and witty Urdu poetry.',
    diff: 'Foundation'
  },
  {
    q: 'Pakistani truck art is famous for its:',
    snip: 'Aesthetic visual style.',
    options: [
      { text: 'Minimalist design', isCorrect: false, expl: 'It is the complete opposite of minimalist.' },
      { text: 'Bright colours and elaborate artwork', isCorrect: true, expl: 'Pakistani truck art is celebrated for kaleidoscopic bright colors, floral arabesques, peacock motifs, landscape scenes, and kaleidoscopic reflective sticker designs.' },
      { text: 'Plain metallic surfaces', isCorrect: false, expl: 'Truck surfaces are densely covered.' },
      { text: 'Gothic architecture', isCorrect: false, expl: 'Gothic architecture is medieval European.' }
    ],
    fact: 'Truck drivers view their decorated trucks as brides ("Dulhan") and invest substantial personal savings into custom artwork.',
    diff: 'Foundation'
  },
  {
    q: 'Sufi music tradition in Pakistan prominently includes:',
    snip: 'Devotional musical genre.',
    options: [
      { text: 'Qawwali', isCorrect: true, expl: 'Qawwali is the devotional Sufi musical tradition popularized globally by legends like Nusrat Fateh Ali Khan, Sabri Brothers, and Aziz Mian.' },
      { text: 'Opera', isCorrect: false, expl: 'Opera is classical Western theater.' },
      { text: 'Flamenco', isCorrect: false, expl: 'Flamenco is from southern Spain.' },
      { text: 'Samba', isCorrect: false, expl: 'Samba is Brazilian.' }
    ],
    fact: 'Qawwali originated in the 13th century in the Chishtiyya Sufi order through Amir Khusro.',
    diff: 'Foundation'
  },
  {
    q: 'Qawwali is strongly associated with the Sufi tradition of:',
    snip: 'Geographic and spiritual home of Qawwali.',
    options: [
      { text: 'South Asia', isCorrect: true, expl: 'Qawwali is deeply rooted in the Sufi shrines and cultural traditions of South Asia (Pakistan and northern India).' },
      { text: 'East Asia', isCorrect: false, expl: 'East Asia includes China and Japan.' },
      { text: 'Europe', isCorrect: false, expl: 'Europe has Gregorian chants.' },
      { text: 'South America', isCorrect: false, expl: 'South America has Andean music.' }
    ],
    fact: 'Qawwali uses harmonium, tabla, dholak, and rhythmic handclapping to induce spiritual ecstasy (Wajd).',
    diff: 'Foundation'
  },
  {
    q: 'The shrine of Data Darbar is located in:',
    snip: 'City of Data Darbar.',
    options: [
      { text: 'Lahore', isCorrect: true, expl: 'Data Darbar (shrine of 11th-century Sufi master Ali Hujwiri, author of *Kashf al-Mahjub*) is located in Lahore, Punjab.' },
      { text: 'Multan', isCorrect: false, expl: 'Multan contains Bahauddin Zakariya and Shah Rukn-e-Alam.' },
      { text: 'Karachi', isCorrect: false, expl: 'Karachi contains Abdullah Shah Ghazi.' },
      { text: 'Peshawar', isCorrect: false, expl: 'Peshawar contains Rahman Baba.' }
    ],
    fact: 'Data Ganj Bakhsh means "The Bestower of Spiritual Treasures" and his shrine is one of the most visited in South Asia.',
    diff: 'Foundation'
  },
  {
    q: 'The shrine of Shah Abdul Latif Bhittai is located at:',
    snip: 'Town of Shah Abdul Latif Bhittai shrine.',
    options: [
      { text: 'Bhit Shah', isCorrect: true, expl: 'The shrine of great Sindhi Sufi poet Shah Abdul Latif Bhittai (author of *Shah Jo Risalo*) is located in Bhit Shah, Matiari District, Sindh.' },
      { text: 'Multan', isCorrect: false, expl: 'Multan is in Punjab.' },
      { text: 'Lahore', isCorrect: false, expl: 'Lahore has Data Darbar and Mian Mir.' },
      { text: 'Sehwan', isCorrect: false, expl: 'Sehwan has Lal Shahbaz Qalandar.' }
    ],
    fact: 'Bhittai invented the Danbura musical instrument and used the seven folk heroines (*Sur Surma*) of Sindh to illustrate divine love.',
    diff: 'Foundation'
  },
  {
    q: "Lal Shahbaz Qalandar's shrine is located in:",
    snip: 'Town of Lal Shahbaz Qalandar.',
    options: [
      { text: 'Sehwan Sharif', isCorrect: true, expl: 'The shrine of 13th-century Sufi philosopher and saint Hazrat Lal Shahbaz Qalandar (Syed Usman Marwandi) is situated in Sehwan Sharif, Jamshoro District, Sindh.' },
      { text: 'Lahore', isCorrect: false, expl: 'Lahore has Data Darbar.' },
      { text: 'Multan', isCorrect: false, expl: 'Multan has Shah Rukn-e-Alam.' },
      { text: 'Thatta', isCorrect: false, expl: 'Thatta has Makli and Shah Jahan Mosque.' }
    ],
    fact: 'The famous devotional Sufi anthem "Dama Dam Mast Qalandar" is dedicated to Lal Shahbaz Qalandar and his ecstatic Dhamaal.',
    diff: 'Foundation'
  },
  {
    q: 'The shrine of Bahauddin Zakariya is located in:',
    snip: 'City of Saints housing Bahauddin Zakariya shrine.',
    options: [
      { text: 'Multan', isCorrect: true, expl: 'The majestic tomb of Hazrat Bahauddin Zakariya (1170–1262 CE), the founder of the Suhrawardiyya Sufi order in the subcontinent, is located in the ancient fort of Multan, Punjab.' },
      { text: 'Lahore', isCorrect: false, expl: 'Lahore has Data Ganj Bakhsh.' },
      { text: 'Peshawar', isCorrect: false, expl: 'Peshawar is in KP.' },
      { text: 'Karachi', isCorrect: false, expl: 'Karachi has Abdullah Shah Ghazi.' }
    ],
    fact: 'Multan is universally revered as "Madinat-ul-Awliya" (The City of Saints) due to its monumental collection of medieval Sufi shrines.',
    diff: 'Foundation'
  }
];

const optionLetters = ['A', 'B', 'C', 'D'];

const formattedQuestions: QuizQuestion[] = exactCultureRaw.map((item, index) => {
  const id = 4001 + index;
  return {
    id,
    category: 'Culture & Heritage',
    categoryIcon: 'BookOpen',
    difficulty: item.diff as 'Foundation' | 'Intermediate' | 'Scholar',
    question: item.q,
    contextSnippet: item.snip,
    options: item.options.map((opt, optIdx) => ({
      id: optionLetters[optIdx],
      text: opt.text,
      isCorrect: opt.isCorrect,
      explanation: opt.expl
    })),
    funFact: item.fact
  };
});

const fileContent = `import { QuizQuestion } from '../types';

export const CULTURE_QUESTIONS: QuizQuestion[] = ${JSON.stringify(formattedQuestions, null, 2)};
`;

fs.writeFileSync('src/data/culture.ts', fileContent, 'utf-8');
console.log(`[SUCCESS] Wrote ${formattedQuestions.length} exact culture questions to src/data/culture.ts!`);
