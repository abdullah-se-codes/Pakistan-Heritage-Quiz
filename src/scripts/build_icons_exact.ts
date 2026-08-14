import fs from 'fs';
import { QuizQuestion } from '../types';

export const exactIconsRaw = [
  // 301–325: National Leaders
  {
    q: 'Who is known as the founder of Pakistan?',
    snip: 'Founding father of the nation.',
    options: [
      { text: 'Allama Iqbal', isCorrect: false, expl: 'Allama Iqbal was the spiritual and philosophical visionary of Pakistan.' },
      { text: 'Muhammad Ali Jinnah', isCorrect: true, expl: 'Quaid-e-Azam Muhammad Ali Jinnah led the All-India Muslim League to create Pakistan on 14 August 1947.' },
      { text: 'Liaquat Ali Khan', isCorrect: false, expl: 'Liaquat Ali Khan was the first Prime Minister.' },
      { text: 'Sir Syed Ahmad Khan', isCorrect: false, expl: 'Sir Syed Ahmad Khan was the pioneer of the 19th-century Aligarh Movement.' }
    ],
    fact: 'Historian Stanley Wolpert wrote: "Few individuals significantly alter the course of history. Fewer still modify the map of the world. More rarely still is anyone credited with creating a nation-state. Mohammad Ali Jinnah did all three."',
    diff: 'Foundation'
  },
  {
    q: 'Muhammad Ali Jinnah is commonly known as:',
    snip: 'Honorific national title.',
    options: [
      { text: 'Quaid-e-Azam', isCorrect: true, expl: 'Muhammad Ali Jinnah was officially bestowed the title "Quaid-e-Azam" (Great Leader) in 1938 by the Muslim League.' },
      { text: 'Baba-e-Urdu', isCorrect: false, expl: 'Baba-e-Urdu is Maulvi Abdul Haq.' },
      { text: 'Mujahid-e-Millat', isCorrect: false, expl: 'Mujahid-e-Millat is an honorific given to various religious/national figures.' },
      { text: 'Shaheed-e-Millat', isCorrect: false, expl: 'Shaheed-e-Millat is Liaquat Ali Khan.' }
    ],
    fact: 'The title Quaid-e-Azam was first proposed by Maulana Mazharuddin Shaheed in 1938.',
    diff: 'Foundation'
  },
  {
    q: 'The title "Quaid-e-Azam" means:',
    snip: 'Literal translation of the honorific title.',
    options: [
      { text: 'Great Teacher', isCorrect: false, expl: 'Ustad-e-Azam means great teacher.' },
      { text: 'Great Leader', isCorrect: true, expl: 'In Arabic/Urdu, "Quaid" means Leader and "Azam" means Great or Supreme, translating to "Great Leader".' },
      { text: 'Great Scholar', isCorrect: false, expl: 'Allama means great scholar.' },
      { text: 'Great Reformer', isCorrect: false, expl: 'Musleh means reformer.' }
    ],
    fact: 'Jinnah was also formally declared "Baba-e-Qaum" (Father of the Nation) by the Constituent Assembly.',
    diff: 'Foundation'
  },
  {
    q: 'Muhammad Ali Jinnah was born on:',
    snip: 'Date of birth of the Quaid-e-Azam.',
    options: [
      { text: '14 August 1876', isCorrect: false, expl: '14 August is Pakistan\'s Independence Day.' },
      { text: '25 December 1876', isCorrect: true, expl: 'Muhammad Ali Jinnah was born on 25 December 1876 in Wazir Mansion, Kharadar, Karachi.' },
      { text: '23 March 1877', isCorrect: false, expl: '23 March is Pakistan Day.' },
      { text: '25 December 1877', isCorrect: false, expl: 'Jinnah was born in 1876.' }
    ],
    fact: '25 December is celebrated annually across Pakistan as a public national holiday (Quaid-e-Azam Day).',
    diff: 'Foundation'
  },
  {
    q: 'Jinnah was born in:',
    snip: 'Birthplace city of the Quaid.',
    options: [
      { text: 'Lahore', isCorrect: false, expl: 'Lahore is where the 1940 resolution was passed.' },
      { text: 'Karachi', isCorrect: true, expl: 'Muhammad Ali Jinnah was born in Wazir Mansion in the historic Kharadar quarter of Karachi, Sindh.' },
      { text: 'Bombay', isCorrect: false, expl: 'Bombay is where Jinnah practiced law and lived for many decades.' },
      { text: 'Delhi', isCorrect: false, expl: 'Delhi was the capital of British India.' }
    ],
    fact: 'Wazir Mansion in Karachi is now preserved as a national museum and heritage monument.',
    diff: 'Foundation'
  },
  {
    q: 'Jinnah studied law in:',
    snip: 'Inns of Court in London.',
    options: [
      { text: 'Oxford', isCorrect: false, expl: 'Oxford is a collegiate research university in Oxford, England.' },
      { text: "Lincoln's Inn", isCorrect: true, expl: 'Jinnah joined Lincoln\'s Inn in London in 1893, becoming the youngest Indian called to the bar at age 19.' },
      { text: 'Cambridge', isCorrect: false, expl: 'Cambridge is where Chaudhry Rahmat Ali studied.' },
      { text: 'Harvard', isCorrect: false, expl: 'Harvard is in the United States.' }
    ],
    fact: 'Jinnah chose Lincoln\'s Inn because he saw the name of Prophet Muhammad (PBUH) honored among the greatest lawgivers of history at its main entrance.',
    diff: 'Foundation'
  },
  {
    q: 'Jinnah became the first Governor-General of Pakistan in:',
    snip: 'Year of assumption of office.',
    options: [
      { text: '1947', isCorrect: true, expl: 'Jinnah was sworn in as Pakistan\'s first Governor-General on 14 August 1947 by Chief Justice Sir Abdul Rashid.' },
      { text: '1948', isCorrect: false, expl: '1948 was the year of Jinnah\'s passing.' },
      { text: '1951', isCorrect: false, expl: '1951 saw Ghulam Muhammad become Governor-General.' },
      { text: '1956', isCorrect: false, expl: '1956 was when Pakistan became a Republic and abolished the post of Governor-General.' }
    ],
    fact: 'Jinnah chose to accept a nominal salary of only 1 Rupee per month as Governor-General.',
    diff: 'Foundation'
  },
  {
    q: 'Jinnah died on:',
    snip: 'Date of passing of Quaid-e-Azam.',
    options: [
      { text: '11 September 1948', isCorrect: true, expl: 'Quaid-e-Azam Muhammad Ali Jinnah passed away on 11 September 1948 in Karachi at the age of 71.' },
      { text: '14 August 1948', isCorrect: false, expl: '14 August was the first anniversary of Independence.' },
      { text: '25 December 1948', isCorrect: false, expl: '25 December was his birth date.' },
      { text: '23 March 1948', isCorrect: false, expl: '23 March was Pakistan Day.' }
    ],
    fact: 'Over one million people attended his funeral prayer led by Allama Shabbir Ahmad Usmani in Karachi.',
    diff: 'Foundation'
  },
  {
    q: "Jinnah's mausoleum is located in:",
    snip: 'City of Mazar-e-Quaid.',
    options: [
      { text: 'Lahore', isCorrect: false, expl: 'Lahore hosts Allama Iqbal\'s tomb.' },
      { text: 'Islamabad', isCorrect: false, expl: 'Islamabad is the federal capital.' },
      { text: 'Karachi', isCorrect: true, expl: 'The Quaid\'s mausoleum is located in the heart of Karachi on Jinnah Road.' },
      { text: 'Quetta', isCorrect: false, expl: 'Quetta has the Ziarat Residency where Jinnah spent his last days.' }
    ],
    fact: 'The white marble dome was designed by prominent Indian architect Yahya Merchant.',
    diff: 'Foundation'
  },
  {
    q: "Jinnah's mausoleum is known as:",
    snip: 'National monument name.',
    options: [
      { text: 'Mazar-e-Quaid', isCorrect: true, expl: 'The tomb of Quaid-e-Azam Muhammad Ali Jinnah is universally known as Mazar-e-Quaid (or Jinnah Mausoleum).' },
      { text: 'Minar-e-Pakistan', isCorrect: false, expl: 'Minar-e-Pakistan is the tower in Iqbal Park, Lahore.' },
      { text: 'Mazar-e-Iqbal', isCorrect: false, expl: 'Mazar-e-Iqbal is the tomb of Allama Iqbal in Lahore.' },
      { text: 'Jinnah Fort', isCorrect: false, expl: 'Not an existing national monument name.' }
    ],
    fact: 'It features a 4-tier monumental crystal chandelier gifted by the People\'s Republic of China.',
    diff: 'Foundation'
  },
  {
    q: 'Allama Muhammad Iqbal is popularly known as:',
    snip: 'Philosophical and poetic honorific title.',
    options: [
      { text: 'Shair-e-Mashriq', isCorrect: true, expl: 'Allama Iqbal is celebrated as "Shair-e-Mashriq" (Poet of the East) and "Muffakir-e-Pakistan" (The Thinker of Pakistan).' },
      { text: 'Baba-e-Urdu', isCorrect: false, expl: 'Baba-e-Urdu is Maulvi Abdul Haq.' },
      { text: 'Quaid-e-Millat', isCorrect: false, expl: 'Quaid-e-Millat is Liaquat Ali Khan.' },
      { text: 'Mujahid-e-Azam', isCorrect: false, expl: 'Not Iqbal\'s title.' }
    ],
    fact: 'Iqbal is also widely called "Hakeem-ul-Ummat" (Sage of the Ummah).',
    diff: 'Foundation'
  },
  {
    q: 'Allama Iqbal was born on:',
    snip: 'Date of birth of the national poet.',
    options: [
      { text: '9 November 1877', isCorrect: true, expl: 'Allama Muhammad Iqbal was born on 9 November 1877 in Sialkot, Punjab.' },
      { text: '25 December 1876', isCorrect: false, expl: '25 December 1876 is Jinnah\'s birth date.' },
      { text: '14 August 1877', isCorrect: false, expl: '14 August is Independence Day.' },
      { text: '23 March 1877', isCorrect: false, expl: '23 March is Pakistan Day.' }
    ],
    fact: '9 November is celebrated annually across Pakistan as Iqbal Day.',
    diff: 'Foundation'
  },
  {
    q: 'Allama Iqbal was born in:',
    snip: 'Birthplace city of Allama Iqbal.',
    options: [
      { text: 'Lahore', isCorrect: false, expl: 'Lahore is where Iqbal lived, practiced law, died, and is buried.' },
      { text: 'Sialkot', isCorrect: true, expl: 'Allama Iqbal was born in "Iqbal Manzil" in the historic city of Sialkot, Punjab.' },
      { text: 'Multan', isCorrect: false, expl: 'Multan is the city of saints.' },
      { text: 'Gujranwala', isCorrect: false, expl: 'Gujranwala is known as the city of wrestlers.' }
    ],
    fact: 'Iqbal Manzil in Sialkot has been converted into a museum preserving Iqbal\'s personal artifacts and library.',
    diff: 'Foundation'
  },
  {
    q: 'Iqbal is the national poet of:',
    snip: 'Country designating Iqbal as national poet.',
    options: [
      { text: 'Pakistan', isCorrect: true, expl: 'Allama Muhammad Iqbal is officially recognized as the National Poet (Qaumi Shair) of Pakistan.' },
      { text: 'India', isCorrect: false, expl: 'India honors Rabindranath Tagore as national poet.' },
      { text: 'Afghanistan', isCorrect: false, expl: 'Afghanistan honors Rumi and Ferdowsi.' },
      { text: 'Bangladesh', isCorrect: false, expl: 'Bangladesh honors Kazi Nazrul Islam.' }
    ],
    fact: 'Iqbal is also deeply revered in Iran as "Iqbal-e-Lahori" for his extensive Persian poetry.',
    diff: 'Foundation'
  },
  {
    q: "Allama Iqbal's famous Allahabad Address was delivered in:",
    snip: 'Year of the historic Allahabad Address.',
    options: [
      { text: '1928', isCorrect: false, expl: '1928 was the Nehru Report.' },
      { text: '1930', isCorrect: true, expl: 'Allama Iqbal delivered his historic presidential address at Allahabad on 29 December 1930.' },
      { text: '1932', isCorrect: false, expl: '1932 was the Third Round Table Conference.' },
      { text: '1935', isCorrect: false, expl: '1935 was the Government of India Act.' }
    ],
    fact: 'In this address, Iqbal envisioned a consolidated North-Western Indian Muslim state comprising Punjab, NWFP, Sindh, and Balochistan.',
    diff: 'Foundation'
  },
  {
    q: 'The Allahabad Address was delivered at the session of the:',
    snip: 'Political party session.',
    options: [
      { text: 'Muslim League', isCorrect: true, expl: 'The address was delivered at the 21st annual annual session of the All-India Muslim League in Allahabad.' },
      { text: 'Indian National Congress', isCorrect: false, expl: 'Congress was the rival majority political party.' },
      { text: 'Unionist Party', isCorrect: false, expl: 'Unionist Party was active locally in Punjab.' },
      { text: 'Khilafat Committee', isCorrect: false, expl: 'Khilafat Committee led the Khilafat agitation.' }
    ],
    fact: 'Iqbal was the presiding President of the Muslim League session at Allahabad.',
    diff: 'Foundation'
  },
  {
    q: "Iqbal's tomb is located near:",
    snip: 'Historic landmark adjacent to Mazar-e-Iqbal.',
    options: [
      { text: 'Badshahi Mosque, Lahore', isCorrect: true, expl: 'Mazar-e-Iqbal is located in Hazuri Bagh, directly between the Alamgiri Gate of Lahore Fort and the grand entrance of the Badshahi Mosque in Lahore.' },
      { text: 'Mazar-e-Quaid, Karachi', isCorrect: false, expl: 'Mazar-e-Quaid is in Karachi.' },
      { text: 'Minar-e-Pakistan', isCorrect: false, expl: 'Minar-e-Pakistan is in the nearby Greater Iqbal Park.' },
      { text: 'Lahore Fort', isCorrect: false, expl: 'It stands facing both, specifically right at the stairs of Badshahi Mosque in Hazuri Bagh.' }
    ],
    fact: 'The red sandstone structure was built with lapis lazuli stone presented by the Afghan King Zahir Shah.',
    diff: 'Foundation'
  },
  {
    q: 'Liaquat Ali Khan was the first:',
    snip: 'Constitutional executive office held.',
    options: [
      { text: 'President of Pakistan', isCorrect: false, expl: 'Iskander Mirza was the first President (1956).' },
      { text: 'Prime Minister of Pakistan', isCorrect: true, expl: 'Nawabzada Liaquat Ali Khan served as the first Prime Minister of Pakistan from 14 August 1947 until his assassination on 16 October 1951.' },
      { text: 'Governor-General of Pakistan', isCorrect: false, expl: 'Quaid-e-Azam Jinnah was the first Governor-General.' },
      { text: 'Chief Justice of Pakistan', isCorrect: false, expl: 'Sir Abdul Rashid was the first Chief Justice.' }
    ],
    fact: 'He moved the landmark Objectives Resolution in the Constituent Assembly on 7 March 1949.',
    diff: 'Foundation'
  },
  {
    q: 'Liaquat Ali Khan is known as:',
    snip: 'Honorific title bestowed upon Liaquat Ali Khan.',
    options: [
      { text: 'Quaid-e-Millat', isCorrect: true, expl: 'Liaquat Ali Khan was given the titles "Quaid-e-Millat" (Leader of the Nation) and "Shaheed-e-Millat" (Martyr of the Nation).' },
      { text: 'Shair-e-Mashriq', isCorrect: false, expl: 'Shair-e-Mashriq is Allama Iqbal.' },
      { text: 'Baba-e-Urdu', isCorrect: false, expl: 'Baba-e-Urdu is Maulvi Abdul Haq.' },
      { text: 'Quaid-e-Awam', isCorrect: false, expl: 'Quaid-e-Awam is Zulfikar Ali Bhutto.' }
    ],
    fact: 'He was Jinnah\'s most trusted right-hand lieutenant throughout the Pakistan Movement.',
    diff: 'Foundation'
  },
  {
    q: 'Liaquat Ali Khan became Prime Minister in:',
    snip: 'Year of appointment as PM.',
    options: [
      { text: '1947', isCorrect: true, expl: 'Liaquat Ali Khan assumed office as Prime Minister on Pakistan\'s independence day, 14 August 1947.' },
      { text: '1948', isCorrect: false, expl: '1948 was the second year of his ministry.' },
      { text: '1951', isCorrect: false, expl: '1951 was the year he was martyred.' },
      { text: '1956', isCorrect: false, expl: '1956 was when the first constitution was enacted.' }
    ],
    fact: 'He also served concurrently as the Minister of Foreign Affairs and Defence.',
    diff: 'Foundation'
  },
  {
    q: 'Liaquat Ali Khan was assassinated in:',
    snip: 'City where Liaquat Ali Khan was shot.',
    options: [
      { text: 'Karachi', isCorrect: false, expl: 'Karachi was the capital where he was buried.' },
      { text: 'Lahore', isCorrect: false, expl: 'Lahore is the Punjab capital.' },
      { text: 'Rawalpindi', isCorrect: true, expl: 'Liaquat Ali Khan was assassinated in Company Bagh (now Liaquat Bagh) in Rawalpindi during a public rally on 16 October 1951.' },
      { text: 'Islamabad', isCorrect: false, expl: 'Islamabad had not yet been built.' }
    ],
    fact: 'His dying words were: "Khuda Pakistan ki hifazat kare" (May God protect Pakistan).',
    diff: 'Foundation'
  },
  {
    q: 'Liaquat Ali Khan was assassinated in:',
    snip: 'Year of assassination.',
    options: [
      { text: '1948', isCorrect: false, expl: '1948 was the year of Quaid-e-Azam\'s death.' },
      { text: '1950', isCorrect: false, expl: '1950 saw the Liaquat-Nehru Pact signed.' },
      { text: '1951', isCorrect: true, expl: 'Liaquat Ali Khan was martyred on 16 October 1951 by an assassin named Said Akbar.' },
      { text: '1956', isCorrect: false, expl: '1956 saw Pakistan\'s first constitution.' }
    ],
    fact: 'He is buried on the grounds of Mazar-e-Quaid in Karachi beside Quaid-e-Azam.',
    diff: 'Foundation'
  },
  {
    q: 'Fatima Jinnah was the sister of:',
    snip: 'Kinship relation to the founder.',
    options: [
      { text: 'Allama Iqbal', isCorrect: false, expl: 'Iqbal was the national poet.' },
      { text: 'Muhammad Ali Jinnah', isCorrect: true, expl: 'Fatima Jinnah was the younger sister, close confidante, and constant companion of Quaid-e-Azam Muhammad Ali Jinnah.' },
      { text: 'Liaquat Ali Khan', isCorrect: false, expl: 'Liaquat Ali Khan was married to Begum Ra\'ana Liaquat Ali Khan.' },
      { text: 'Sir Syed Ahmad Khan', isCorrect: false, expl: 'Sir Syed lived in the 19th century.' }
    ],
    fact: 'She stood firmly alongside her brother throughout all political negotiations and rallies for Pakistan.',
    diff: 'Foundation'
  },
  {
    q: 'Fatima Jinnah is popularly known as:',
    snip: 'National title of Fatima Jinnah.',
    options: [
      { text: 'Madar-e-Millat', isCorrect: true, expl: 'Fatima Jinnah was reverently given the title "Madar-e-Millat" (Mother of the Nation) by the people of Pakistan.' },
      { text: 'Quaid-e-Millat', isCorrect: false, expl: 'Quaid-e-Millat is Liaquat Ali Khan.' },
      { text: 'Shaheed-e-Millat', isCorrect: false, expl: 'Shaheed-e-Millat is Liaquat Ali Khan.' },
      { text: 'Bint-e-Pakistan', isCorrect: false, expl: 'Not her official title.' }
    ],
    fact: 'She was also called "Khatoon-e-Pakistan" (Lady of Pakistan) and ran for president in 1965.',
    diff: 'Foundation'
  },
  {
    q: 'Fatima Jinnah was professionally trained as a:',
    snip: 'Medical/professional qualification.',
    options: [
      { text: 'Lawyer', isCorrect: false, expl: 'Her brother Muhammad Ali Jinnah was a barrister.' },
      { text: 'Dentist', isCorrect: true, expl: 'Fatima Jinnah earned a dental degree from Dr. R. Ahmed Dental College in Calcutta in 1923 and opened her own private dental clinic in Bombay.' },
      { text: 'Doctor', isCorrect: false, expl: 'She was specifically a trained dental surgeon.' },
      { text: 'Teacher', isCorrect: false, expl: 'She was a qualified dental surgeon and political leader.' }
    ],
    fact: 'She was one of the earliest Muslim female dentists in British India before leaving her practice to support her brother.',
    diff: 'Foundation'
  },

  // 326–350: Scholars, Reformers & Intellectuals
  {
    q: 'Sir Syed Ahmad Khan founded the institution that later became:',
    snip: 'Pioneering educational university in Aligarh.',
    options: [
      { text: 'University of the Punjab', isCorrect: false, expl: 'Punjab University was established in 1882 in Lahore.' },
      { text: 'Aligarh Muslim University', isCorrect: true, expl: 'Sir Syed founded the Muhammadan Anglo-Oriental (MAO) College in 1875, which became Aligarh Muslim University (AMU) in 1920.' },
      { text: 'University of Karachi', isCorrect: false, expl: 'Karachi University was founded in 1951.' },
      { text: 'Government College University', isCorrect: false, expl: 'GCU Lahore was founded in 1864.' }
    ],
    fact: 'Aligarh produced the vanguard of leaders who spearheaded the All-India Muslim League and Pakistan Movement.',
    diff: 'Foundation'
  },
  {
    q: 'Sir Syed Ahmad Khan was born in:',
    snip: 'Birthplace city of Sir Syed.',
    options: [
      { text: 'Delhi', isCorrect: true, expl: 'Sir Syed Ahmad Khan was born in Delhi on 17 October 1817 into an aristocratic Mughal-era family.' },
      { text: 'Lahore', isCorrect: false, expl: 'Lahore was the capital of Punjab.' },
      { text: 'Aligarh', isCorrect: false, expl: 'Aligarh is where he established the college.' },
      { text: 'Lucknow', isCorrect: false, expl: 'Lucknow was the capital of Awadh.' }
    ],
    fact: 'He served as a judicial officer (Munsif/Sub-Judge) in the British East India Company.',
    diff: 'Foundation'
  },
  {
    q: 'Sir Syed Ahmad Khan is particularly associated with the:',
    snip: 'Socio-educational reform movement.',
    options: [
      { text: 'Aligarh Movement', isCorrect: true, expl: 'Sir Syed founded and led the Aligarh Movement, a 19th-century educational, social, and intellectual revival among South Asian Muslims.' },
      { text: 'Khilafat Movement', isCorrect: false, expl: 'Khilafat Movement was led by the Ali Brothers in 1919.' },
      { text: 'Pakistan Movement only', isCorrect: false, expl: 'He laid the intellectual groundwork in the 19th century.' },
      { text: 'Swadeshi Movement', isCorrect: false, expl: 'Swadeshi was a Hindu-majority nationalist movement in Bengal.' }
    ],
    fact: 'He published the famous reformist journal "Tahzib-ul-Akhlaq" (Refinement of Morals).',
    diff: 'Foundation'
  },
  {
    q: 'Sir Syed emphasized the importance of:',
    snip: 'Core philosophy of Sir Syed\'s reform.',
    options: [
      { text: 'Modern education', isCorrect: true, expl: 'Sir Syed urged Muslims to acquire modern scientific, Western, and English education to compete and safeguard their political rights.' },
      { text: 'Military expansion', isCorrect: false, expl: 'He promoted peaceful educational advancement.' },
      { text: 'Isolation from science', isCorrect: false, expl: 'He strongly opposed scientific isolation and championed rational thought.' },
      { text: 'Colonial rule', isCorrect: false, expl: 'He sought the socio-economic empowerment of Muslims.' }
    ],
    fact: 'He founded the Scientific Society of Aligarh in 1864 to translate scientific works into Urdu.',
    diff: 'Foundation'
  },
  {
    q: 'The Muhammadan Anglo-Oriental College was established at:',
    snip: 'City location of MAO College.',
    options: [
      { text: 'Delhi', isCorrect: false, expl: 'Delhi was his birthplace.' },
      { text: 'Aligarh', isCorrect: true, expl: 'MAO College was established in Aligarh (Uttar Pradesh), modeled on Oxford and Cambridge universities.' },
      { text: 'Lahore', isCorrect: false, expl: 'Lahore is in Punjab.' },
      { text: 'Karachi', isCorrect: false, expl: 'Karachi is in Sindh.' }
    ],
    fact: 'Lord Lytton, Viceroy of India, laid the foundation stone of the college building in January 1877.',
    diff: 'Foundation'
  },
  {
    q: 'The Muhammadan Anglo-Oriental College was founded in:',
    snip: 'Year of establishment of MAO College.',
    options: [
      { text: '1875', isCorrect: true, expl: 'MAO College began as a primary school in 1875 on Queen Victoria\'s birthday and expanded to college status in 1877.' },
      { text: '1885', isCorrect: false, expl: '1885 was the founding of the Indian National Congress.' },
      { text: '1895', isCorrect: false, expl: '1895 was late in Sir Syed\'s life.' },
      { text: '1905', isCorrect: false, expl: '1905 was the Partition of Bengal.' }
    ],
    fact: 'It received university status as Aligarh Muslim University in 1920.',
    diff: 'Foundation'
  },
  {
    q: 'Maulana Muhammad Ali Jauhar was a prominent leader of the:',
    snip: 'Major anti-colonial mass movement.',
    options: [
      { text: 'Khilafat Movement', isCorrect: true, expl: 'Maulana Muhammad Ali Jauhar was the fiery leader of the Khilafat Movement (1919–1924) alongside his brother Maulana Shaukat Ali.' },
      { text: 'Pakistan Movement only', isCorrect: false, expl: 'He died in 1931 before the formal 1940 resolution.' },
      { text: 'Swadeshi Movement', isCorrect: false, expl: 'Swadeshi was primarily a Congress campaign in Bengal.' },
      { text: 'Aligarh Movement', isCorrect: false, expl: 'Sir Syed led the Aligarh Movement.' }
    ],
    fact: 'He edited the famous English weekly newspaper "Comrade" and Urdu daily "Hamdard".',
    diff: 'Foundation'
  },
  {
    q: 'Shaukat Ali was the brother of:',
    snip: 'Famous "Ali Brothers" pairing.',
    options: [
      { text: 'Muhammad Ali Jauhar', isCorrect: true, expl: 'Maulana Shaukat Ali and Maulana Muhammad Ali Jauhar were universally known together as the "Ali Brothers" of the Khilafat Movement.' },
      { text: 'Liaquat Ali Khan', isCorrect: false, expl: 'Liaquat Ali Khan belonged to Karnal.' },
      { text: 'Sir Syed Ahmad Khan', isCorrect: false, expl: 'Sir Syed was of an earlier generation.' },
      { text: 'Allama Iqbal', isCorrect: false, expl: 'Allama Iqbal was from Sialkot.' }
    ],
    fact: 'Their mother, Abadi Bano Begum (popularly known as "Bi Amma"), was a renowned activist of the freedom struggle.',
    diff: 'Foundation'
  },
  {
    q: 'Muhammad Ali Jauhar was also known as:',
    snip: 'Common name/title.',
    options: [
      { text: 'Maulana Muhammad Ali', isCorrect: true, expl: 'He was widely known as Maulana Muhammad Ali or Muhammad Ali Jauhar ("Jauhar" being his poetic pen name).' },
      { text: 'Quaid-e-Azam', isCorrect: false, expl: 'Quaid-e-Azam is Jinnah.' },
      { text: 'Mujahid-e-Millat', isCorrect: false, expl: 'Mujahid-e-Millat was Maulana Abdul Sattar Khan Niazi.' },
      { text: 'Baba-e-Qaum', isCorrect: false, expl: 'Baba-e-Qaum is Quaid-e-Azam.' }
    ],
    fact: 'He famously declared at the Round Table Conference in London (1930): "I would prefer to die in a foreign country so long as it is free than return to a slave country."',
    diff: 'Foundation'
  },
  {
    q: 'Maulana Abul Kalam Azad was primarily associated with:',
    snip: 'Political affiliation of Abul Kalam Azad.',
    options: [
      { text: 'Indian National Congress', isCorrect: true, expl: 'Maulana Abul Kalam Azad was a senior Muslim leader of the Indian National Congress and served as its President during the Quit India movement.' },
      { text: 'Muslim League', isCorrect: false, expl: 'He opposed the Muslim League\'s partition demand.' },
      { text: 'Unionist Party', isCorrect: false, expl: 'Unionist Party was based in Punjab.' },
      { text: 'All-India Muslim Conference', isCorrect: false, expl: 'He was steadfastly with Congress.' }
    ],
    fact: 'He served as the first Minister of Education in independent India.',
    diff: 'Foundation'
  },
  {
    q: 'Syed Ameer Ali was a prominent:',
    snip: 'Profession and intellectual status.',
    options: [
      { text: 'Muslim scholar and jurist', isCorrect: true, expl: 'Syed Ameer Ali (1849–1928) was a distinguished jurist, author of "The Spirit of Islam", and the first Indian appointed to the Privy Council Judicial Committee.' },
      { text: 'Scientist', isCorrect: false, expl: 'He was a jurist and historian.' },
      { text: 'Military commander', isCorrect: false, expl: 'He was a legal scholar.' },
      { text: 'Cricketer', isCorrect: false, expl: 'He was an eminent intellectual.' }
    ],
    fact: 'He founded the London Branch of the All-India Muslim League in 1908.',
    diff: 'Foundation'
  },
  {
    q: 'Chaudhry Rahmat Ali is famous for coining the name:',
    snip: 'Coined national name.',
    options: [
      { text: 'Pakistan', isCorrect: true, expl: 'Chaudhry Rahmat Ali coined the acronym "PAKSTAN" (later Pakistan) in 1933 representing Punjab, Afghania (NWFP), Kashmir, Sindh, and BalochisTAN.' },
      { text: 'India', isCorrect: false, expl: 'Derived from the Indus River in antiquity.' },
      { text: 'Hindustan', isCorrect: false, expl: 'Historical Persian term.' },
      { text: 'Bangladesh', isCorrect: false, expl: 'Adopted in 1971.' }
    ],
    fact: 'The name also means "Land of the Pure" in Urdu and Persian (Pak = Pure, Stan = Land).',
    diff: 'Foundation'
  },
  {
    q: 'Chaudhry Rahmat Ali published his famous pamphlet in:',
    snip: 'Year of "Now or Never".',
    options: [
      { text: '1930', isCorrect: false, expl: '1930 was Iqbal\'s Allahabad Address.' },
      { text: '1933', isCorrect: true, expl: 'Rahmat Ali published his historic 4-page declaration on 28 January 1933 while a student at Cambridge University.' },
      { text: '1935', isCorrect: false, expl: '1935 was the Government of India Act.' },
      { text: '1940', isCorrect: false, expl: '1940 was the Lahore Resolution.' }
    ],
    fact: 'The pamphlet was distributed to delegates attending the Third Round Table Conference in London.',
    diff: 'Foundation'
  },
  {
    q: 'The pamphlet associated with Rahmat Ali was titled:',
    snip: 'Title of the 1933 declaration.',
    options: [
      { text: 'Now or Never', isCorrect: true, expl: 'The pamphlet was titled: "Now or Never; Are We to Live or Perish for Ever?".' },
      { text: 'Pakistan Resolution', isCorrect: false, expl: 'Passed on 23 March 1940.' },
      { text: 'Muslim India', isCorrect: false, expl: 'A common historical phrase.' },
      { text: 'The Future of India', isCorrect: false, expl: 'Not the title.' }
    ],
    fact: 'It called for the 30 million Muslims of North-West India to form a separate national homeland.',
    diff: 'Foundation'
  },
  {
    q: 'The name "Pakistan" was proposed by:',
    snip: 'Originator of the name Pakistan.',
    options: [
      { text: 'Allama Iqbal', isCorrect: false, expl: 'Iqbal proposed the political concept of a consolidated northwestern state without coining the specific name.' },
      { text: 'Muhammad Ali Jinnah', isCorrect: false, expl: 'Jinnah championed the political realization of Pakistan.' },
      { text: 'Chaudhry Rahmat Ali', isCorrect: true, expl: 'Chaudhry Rahmat Ali proposed and published the name "Pakistan" in Cambridge in January 1933.' },
      { text: 'Liaquat Ali Khan', isCorrect: false, expl: 'Liaquat Ali Khan was the first PM.' }
    ],
    fact: 'Rahmat Ali is buried at Newmarket Road Cemetery in Cambridge, United Kingdom.',
    diff: 'Foundation'
  },
  {
    q: 'Altaf Hussain Hali was a famous:',
    snip: 'Literary identity of Khwaja Altaf Hussain Hali.',
    options: [
      { text: 'Urdu poet', isCorrect: true, expl: 'Khwaja Altaf Hussain Hali (1837–1914) was a prominent Urdu poet, critic, biographer, and close companion of Sir Syed Ahmad Khan.' },
      { text: 'Scientist', isCorrect: false, expl: 'He was a literary giant.' },
      { text: 'Soldier', isCorrect: false, expl: 'He was an author and poet.' },
      { text: 'Politician', isCorrect: false, expl: 'He was a reformer and writer.' }
    ],
    fact: 'He wrote the definitive biographies of Ghalib ("Yadgar-e-Ghalib") and Sir Syed ("Hayat-e-Javed").',
    diff: 'Foundation'
  },
  {
    q: 'Hali wrote the famous biography/poem:',
    snip: 'Magnum opus master poem of Hali.',
    options: [
      { text: 'Musaddas-e-Hali', isCorrect: true, expl: 'Hali wrote the monumental epic poem "Musaddas-e-Hali" (Madd-o-Jazr-e-Islam / The Ebb and Flow of Islam) in 1879 upon Sir Syed\'s request.' },
      { text: 'Bang-e-Dra', isCorrect: false, expl: 'Bang-e-Dra was written by Allama Iqbal.' },
      { text: 'Shikwa', isCorrect: false, expl: 'Shikwa is Iqbal\'s poem.' },
      { text: 'Lab Pe Aati Hai Dua', isCorrect: false, expl: 'Iqbal\'s children\'s prayer poem.' }
    ],
    fact: 'Sir Syed famously stated that if God asked him on the Day of Judgment what he achieved, he would say: "I got Hali to write the Musaddas."',
    diff: 'Foundation'
  },
  {
    q: 'Deputy Nazeer Ahmad was famous primarily as an:',
    snip: 'Pioneering literary genre.',
    options: [
      { text: 'Urdu novelist', isCorrect: true, expl: 'Deputy Nazeer Ahmad Dehlvi (1830–1912) was the pioneer of the Urdu novel and a leading figure of the Aligarh Movement.' },
      { text: 'Military commander', isCorrect: false, expl: 'He was a writer and civil servant.' },
      { text: 'Scientist', isCorrect: false, expl: 'He was a literary scholar.' },
      { text: 'Architect', isCorrect: false, expl: 'He was a novelist and translator of the Quran.' }
    ],
    fact: 'His works focused heavily on female education, domestic ethics, and social reform.',
    diff: 'Foundation'
  },
  {
    q: 'The famous Urdu novel "Mirat-ul-Uroos" was written by:',
    snip: 'First published Urdu novel (1869).',
    options: [
      { text: 'Deputy Nazeer Ahmad', isCorrect: true, expl: '"Mirat-ul-Uroos" (The Bride\'s Mirror), published in 1869, is widely regarded as the first novel in Urdu literature, written by Deputy Nazeer Ahmad.' },
      { text: 'Premchand', isCorrect: false, expl: 'Munshi Premchand wrote "Godan" and "Bazaar-e-Husn".' },
      { text: 'Saadat Hasan Manto', isCorrect: false, expl: 'Manto wrote short stories like "Toba Tek Singh".' },
      { text: 'Qurratulain Hyder', isCorrect: false, expl: 'Qurratulain Hyder wrote "Aag Ka Darya".' }
    ],
    fact: 'The novel contrasts the lives of two sisters, Akbari and Asghari, emphasizing education and wisdom.',
    diff: 'Foundation'
  },
  {
    q: 'Saadat Hasan Manto was famous for his:',
    snip: 'Literary form of Manto.',
    options: [
      { text: 'Short stories', isCorrect: true, expl: 'Saadat Hasan Manto (1912–1955) is universally acclaimed as the greatest Urdu short story writer (Afsana Nigar) of the 20th century.' },
      { text: 'Scientific research', isCorrect: false, expl: 'He was a creative literary author.' },
      { text: 'Political leadership', isCorrect: false, expl: 'He was a writer.' },
      { text: 'Architecture', isCorrect: false, expl: 'He was an author and playwright.' }
    ],
    fact: 'Manto wrote 22 collections of short stories, including "Toba Tek Singh", "Khol Do", and "Thanda Gosht".',
    diff: 'Foundation'
  },
  {
    q: "Manto's stories frequently addressed:",
    snip: 'Central thematic focus of Manto.',
    options: [
      { text: 'Social realities and human behaviour', isCorrect: true, expl: 'Manto\'s writings boldly laid bare the unvarnished realities of society, the human tragedy of Partition, hypocrisy, and psychological complexity.' },
      { text: 'Astronomy', isCorrect: false, expl: 'He wrote realist fiction.' },
      { text: 'Military strategy', isCorrect: false, expl: 'He focused on human condition and civilian trauma.' },
      { text: 'Geography', isCorrect: false, expl: 'His focus was literature.' }
    ],
    fact: 'Manto famously said: "If you cannot bear these stories then the society is unbearable. Who am I to remove the clothes of this society, which itself is naked?"',
    diff: 'Foundation'
  },
  {
    q: 'Faiz Ahmed Faiz was a renowned:',
    snip: 'Literary identity of Faiz.',
    options: [
      { text: 'Urdu poet', isCorrect: true, expl: 'Faiz Ahmed Faiz (1911–1984) is one of the most celebrated progressive Urdu poets of South Asia, twice nominated for the Nobel Prize in Literature.' },
      { text: 'Physicist', isCorrect: false, expl: 'Dr. Abdus Salam was a physicist.' },
      { text: 'Cricketer', isCorrect: false, expl: 'Faiz was an intellectual and poet.' },
      { text: 'General', isCorrect: false, expl: 'He was a literary figure and editor of the Pakistan Times.' }
    ],
    fact: 'His revolutionary poem "Hum Dekhenge" is sung globally as a universal anthem against injustice and tyranny.',
    diff: 'Foundation'
  },
  {
    q: 'Faiz Ahmed Faiz received the:',
    snip: 'Prestigious international peace award.',
    options: [
      { text: 'Lenin Peace Prize', isCorrect: true, expl: 'Faiz Ahmed Faiz was awarded the prestigious International Lenin Peace Prize by the Soviet Union in 1962.' },
      { text: 'Nobel Prize', isCorrect: false, expl: 'He was nominated for the Nobel Prize in Literature but did not win it.' },
      { text: 'Booker Prize', isCorrect: false, expl: 'Booker Prize is for English novels.' },
      { text: 'Oscar', isCorrect: false, expl: 'Oscar is for cinema.' }
    ],
    fact: 'He was the first Asian poet to receive the Lenin Peace Prize.',
    diff: 'Foundation'
  },
  {
    q: 'Faiz Ahmed Faiz is associated with the poetry collection:',
    snip: 'First published poetry collection of Faiz (1941).',
    options: [
      { text: 'Naqsh-e-Faryadi', isCorrect: true, expl: '"Naqsh-e-Faryadi" (1941) was Faiz\'s debut poetry collection featuring immortal poems like "Mujh Se Pehli Si Mohabbat".' },
      { text: 'Bang-e-Dra', isCorrect: false, expl: 'Bang-e-Dra is by Allama Iqbal.' },
      { text: 'Zarb-e-Kaleem', isCorrect: false, expl: 'Zarb-e-Kaleem is by Allama Iqbal.' },
      { text: 'Bal-e-Jibril', isCorrect: false, expl: 'Bal-e-Jibril is by Allama Iqbal.' }
    ],
    fact: 'Other famous poetry collections by Faiz include "Dast-e-Saba" and "Zindan Nama".',
    diff: 'Foundation'
  },
  {
    q: 'Ahmed Faraz was famous primarily as a:',
    snip: 'Literary identity of Ahmed Faraz.',
    options: [
      { text: 'Urdu poet', isCorrect: true, expl: 'Ahmed Faraz (1931–2008) was one of modern Pakistan\'s most beloved lyric poets and ghazal writers, famous for collections like "Janan Janan".' },
      { text: 'Scientist', isCorrect: false, expl: 'He was a poet and literary leader.' },
      { text: 'Historian', isCorrect: false, expl: 'He was a poet.' },
      { text: 'Soldier', isCorrect: false, expl: 'He was the founding Chairman of the Pakistan Academy of Letters.' }
    ],
    fact: 'He was awarded the Hilal-e-Imtiaz, Sitara-e-Imtiaz, and Hilal-e-Pakistan awards for his literary contributions.',
    diff: 'Foundation'
  },

  // 351–375: Scientists & Innovators
  {
    q: "Dr. Abdus Salam was Pakistan's first Nobel Prize winner. He won the Nobel Prize in:",
    snip: 'Academic scientific Nobel category.',
    options: [
      { text: 'Chemistry', isCorrect: false, expl: 'Chemistry Nobel was not awarded to Salam.' },
      { text: 'Physics', isCorrect: true, expl: 'Prof. Dr. Abdus Salam won the 1979 Nobel Prize in Physics for his formulation of the Electroweak Unification theory.' },
      { text: 'Medicine', isCorrect: false, expl: 'Salam was a theoretical physicist.' },
      { text: 'Literature', isCorrect: false, expl: 'Faiz and Manto wrote literature.' }
    ],
    fact: 'Dr. Abdus Salam was the first Pakistani and first Muslim to win a Nobel Prize in science.',
    diff: 'Foundation'
  },
  {
    q: 'Abdus Salam received the Nobel Prize in:',
    snip: 'Year of Nobel Prize conferment.',
    options: [
      { text: '1974', isCorrect: false, expl: '1974 was the year he stepped down from government advisory roles.' },
      { text: '1977', isCorrect: false, expl: '1977 was two years before the prize.' },
      { text: '1979', isCorrect: true, expl: 'Dr. Abdus Salam received the Nobel Prize in Physics in December 1979 in Stockholm, Sweden.' },
      { text: '1981', isCorrect: false, expl: '1981 was two years after.' }
    ],
    fact: 'At the banquet ceremony in Stockholm, Dr. Salam wore traditional Pakistani sherwani and quoted verses from Surah Al-Mulk of the Holy Quran.',
    diff: 'Foundation'
  },
  {
    q: 'Abdus Salam shared the Nobel Prize with:',
    snip: 'Co-laureates in physics.',
    options: [
      { text: 'Steven Weinberg and Sheldon Glashow', isCorrect: true, expl: 'Salam shared the 1979 Physics Nobel Prize with American theoretical physicists Steven Weinberg and Sheldon Glashow.' },
      { text: 'Albert Einstein and Niels Bohr', isCorrect: false, expl: 'Einstein and Bohr won Nobel prizes in the 1920s.' },
      { text: 'Richard Feynman and Murray Gell-Mann', isCorrect: false, expl: 'Feynman won in 1965 and Gell-Mann in 1969.' },
      { text: 'Stephen Hawking and Roger Penrose', isCorrect: false, expl: 'Penrose won in 2020; Hawking never received a Nobel.' }
    ],
    fact: 'Their unified model mathematically proved that electromagnetic force and weak nuclear force are two aspects of a single "electroweak" force.',
    diff: 'Foundation'
  },
  {
    q: "Abdus Salam's Nobel-winning work was related to:",
    snip: 'Fundamental particle physics theory.',
    options: [
      { text: 'Electroweak theory', isCorrect: true, expl: 'His Nobel citation recognized contributions to the theory of the unified weak and electromagnetic interaction between elementary particles.' },
      { text: 'Genetics', isCorrect: false, expl: 'Genetics is a branch of biology.' },
      { text: 'Nuclear fission only', isCorrect: false, expl: 'His breakthrough was quantum gauge theory.' },
      { text: 'Astronomy', isCorrect: false, expl: 'His work was in quantum particle physics.' }
    ],
    fact: 'Their theory predicted the existence of the W and Z bosons and Higgs boson, which were later experimentally verified at CERN.',
    diff: 'Foundation'
  },
  {
    q: 'Abdus Salam was born in:',
    snip: 'Birthplace town of Dr. Salam.',
    options: [
      { text: 'Lahore', isCorrect: false, expl: 'Lahore is where he studied at Government College.' },
      { text: 'Jhang', isCorrect: true, expl: 'Abdus Salam was born on 29 January 1926 in Jhang, Punjab.' },
      { text: 'Sialkot', isCorrect: false, expl: 'Allama Iqbal was born in Sialkot.' },
      { text: 'Faisalabad', isCorrect: false, expl: 'Nusrat Fateh Ali Khan was born in Faisalabad.' }
    ],
    fact: 'He scored the highest marks in the matriculation examination in the history of Punjab University at age 14.',
    diff: 'Foundation'
  },
  {
    q: 'Abdus Salam founded the:',
    snip: 'Global physics research institute in Italy.',
    options: [
      { text: 'International Centre for Theoretical Physics', isCorrect: true, expl: 'Dr. Salam founded the International Centre for Theoretical Physics (ICTP) in 1964 to help scientists from developing nations.' },
      { text: 'Pakistan Space Agency', isCorrect: false, expl: 'He helped establish SUPARCO in Pakistan.' },
      { text: 'Pakistan Atomic Energy Commission', isCorrect: false, expl: 'PAEC was established in 1956 under Dr. Nazir Ahmad.' },
      { text: 'National University of Sciences', isCorrect: false, expl: 'NUST was founded in 1991.' }
    ],
    fact: 'Following his death in 1996, the institute in Italy was officially renamed the Abdus Salam International Centre for Theoretical Physics (ICTP).',
    diff: 'Foundation'
  },
  {
    q: 'The International Centre for Theoretical Physics is located in:',
    snip: 'Italian city hosting ICTP.',
    options: [
      { text: 'Geneva', isCorrect: false, expl: 'Geneva hosts CERN and the UN.' },
      { text: 'Trieste', isCorrect: true, expl: 'The Abdus Salam ICTP is located in the coastal city of Trieste in northeastern Italy.' },
      { text: 'London', isCorrect: false, expl: 'Salam taught at Imperial College London.' },
      { text: 'Paris', isCorrect: false, expl: 'Paris hosts UNESCO headquarters.' }
    ],
    fact: 'The centre operates under a tripartite agreement between the Italian Government, UNESCO, and IAEA.',
    diff: 'Foundation'
  },
  {
    q: "Dr. Abdul Qadeer Khan is widely associated with Pakistan's:",
    snip: 'National strategic deterrent initiative.',
    options: [
      { text: 'Nuclear programme', isCorrect: true, expl: 'Dr. A.Q. Khan is widely celebrated as the "Father of Pakistan\'s Uranium Enrichment and Nuclear Bomb Programme".' },
      { text: 'Space programme', isCorrect: false, expl: 'SUPARCO manages space exploration.' },
      { text: 'Computer industry', isCorrect: false, expl: 'IT sector development.' },
      { text: 'Textile industry', isCorrect: false, expl: 'Manufacturing sector.' }
    ],
    fact: 'He founded the Khan Research Laboratories (KRL) in Kahuta in 1976.',
    diff: 'Foundation'
  },
  {
    q: 'Dr. A.Q. Khan was primarily a:',
    snip: 'Scientific engineering specialization.',
    options: [
      { text: 'Metallurgical engineer/scientist', isCorrect: true, expl: 'Dr. A.Q. Khan held a doctorate in metallurgical engineering from the Catholic University of Leuven in Belgium.' },
      { text: 'Physicist only', isCorrect: false, expl: 'He was a metallurgical materials engineer and centrifuge specialist.' },
      { text: 'Biologist', isCorrect: false, expl: 'Biology was not his field.' },
      { text: 'Astronomer', isCorrect: false, expl: 'Astronomy was not his field.' }
    ],
    fact: 'His metallurgical expertise enabled the fabrication of ultra-high-speed gas centrifuges for uranium enrichment.',
    diff: 'Foundation'
  },
  {
    q: 'Pakistan conducted its nuclear tests in:',
    snip: 'Historic year of nuclear deterrence.',
    options: [
      { text: '1996', isCorrect: false, expl: '1996 was the CTBT opening.' },
      { text: '1997', isCorrect: false, expl: '1997 was Pakistan\'s Golden Jubilee.' },
      { text: '1998', isCorrect: true, expl: 'Pakistan successfully conducted underground nuclear tests in May 1998, becoming the 7th nuclear-armed state in the world.' },
      { text: '1999', isCorrect: false, expl: '1999 was the Kargil conflict.' }
    ],
    fact: 'Pakistan became the first and only Muslim-majority nation to develop and test nuclear weapons.',
    diff: 'Foundation'
  },
  {
    q: "Pakistan's nuclear tests were conducted at:",
    snip: 'Mountain testing site in Balochistan.',
    options: [
      { text: 'Kahuta', isCorrect: false, expl: 'Kahuta is the location of KRL enrichment facilities near Rawalpindi.' },
      { text: 'Chagai', isCorrect: true, expl: 'The tests were conducted inside the Ras Koh Hills in the Chagai District of Balochistan (Chagai-I) and Kharan Desert (Chagai-II).' },
      { text: 'Multan', isCorrect: false, expl: 'Multan hosted the 1972 nuclear scientists conference.' },
      { text: 'Wah', isCorrect: false, expl: 'Wah Cantt hosts Pakistan Ordnance Factories (POF).' }
    ],
    fact: 'The Koh Kambaran mountain in Ras Koh turned white due to the subterranean release of extreme heat and shockwaves.',
    diff: 'Foundation'
  },
  {
    q: "Pakistan's nuclear tests were conducted on:",
    snip: 'Exact date of Chagai-I nuclear tests.',
    options: [
      { text: '23 March 1998', isCorrect: false, expl: '23 March is Pakistan Day.' },
      { text: '28 May 1998', isCorrect: true, expl: 'Pakistan conducted its first five simultaneous underground nuclear tests on 28 May 1998 at 3:16 PM PKT.' },
      { text: '6 September 1998', isCorrect: false, expl: '6 September is Defence Day.' },
      { text: '14 August 1998', isCorrect: false, expl: '14 August is Independence Day.' }
    ],
    fact: 'A sixth test was conducted on 30 May 1998 in the Kharan Desert.',
    diff: 'Foundation'
  },
  {
    q: "Pakistan's nuclear tests are commemorated as:",
    snip: 'Official national commemorative day.',
    options: [
      { text: 'Youm-e-Takbeer', isCorrect: true, expl: '28 May is officially commemorated across Pakistan every year as "Youm-e-Takbeer" (Day of Greatness).' },
      { text: 'Defence Day', isCorrect: false, expl: 'Defence Day is 6 September.' },
      { text: 'Pakistan Day', isCorrect: false, expl: 'Pakistan Day is 23 March.' },
      { text: 'Nuclear Day', isCorrect: false, expl: 'Not the official title.' }
    ],
    fact: '"Takbeer" refers to the chant "Allahu Akbar" raised by the scientists as the mountain trembled during the test.',
    diff: 'Foundation'
  },
  {
    q: 'Dr. Samar Mubarakmand is associated with Pakistan\'s:',
    snip: 'Scientific legacy and diagnostic testing leadership.',
    options: [
      { text: 'Nuclear and scientific programmes', isCorrect: true, expl: 'Dr. Samar Mubarakmand is a prominent nuclear physicist who led the Pakistan Atomic Energy Commission (PAEC) team during the 1998 nuclear tests.' },
      { text: 'Cricket programme', isCorrect: false, expl: 'He was a nuclear physicist.' },
      { text: 'Space tourism', isCorrect: false, expl: 'He led strategic defense programs.' },
      { text: 'Textile industry', isCorrect: false, expl: 'He was an accelerator and nuclear physics pioneer.' }
    ],
    fact: 'He was awarded the Nishan-e-Imtiaz, Hilal-e-Imtiaz, and Sitara-e-Imtiaz for his national service.',
    diff: 'Foundation'
  },
  {
    q: 'Dr. Samar Mubarakmand was involved in Pakistan\'s:',
    snip: 'Historic 1998 milestone event.',
    options: [
      { text: 'Nuclear tests', isCorrect: true, expl: 'Dr. Mubarakmand personally directed the technical detonation and telemetry team in the Chagai-I and Chagai-II nuclear tests.' },
      { text: 'Olympic programme', isCorrect: false, expl: 'He was a strategic scientist.' },
      { text: 'Hockey federation', isCorrect: false, expl: 'He worked at PAEC and NESCOM.' },
      { text: 'Census programme', isCorrect: false, expl: 'He was a nuclear physicist.' }
    ],
    fact: 'He also served as the founding chairman of the National Engineering and Scientific Commission (NESCOM).',
    diff: 'Foundation'
  },
  {
    q: 'Dr. Ishfaq Ahmad was a prominent Pakistani:',
    snip: 'Academic and scientific field.',
    options: [
      { text: 'Nuclear physicist', isCorrect: true, expl: 'Dr. Ishfaq Ahmad (1930–2018) was a senior nuclear physicist who played a vital leadership role in establishing Pakistan\'s nuclear infrastructure.' },
      { text: 'Poet', isCorrect: false, expl: 'Ashfaq Ahmed was a famous playwright/writer.' },
      { text: 'Cricketer', isCorrect: false, expl: 'He was a senior scientist.' },
      { text: 'Architect', isCorrect: false, expl: 'He was an experimental nuclear physicist.' }
    ],
    fact: 'He was a close colleague of Dr. Abdus Salam and served as Science Advisor to the Prime Minister.',
    diff: 'Foundation'
  },
  {
    q: 'Dr. Ishfaq Ahmad served as chairman of:',
    snip: 'National atomic energy leadership.',
    options: [
      { text: 'Pakistan Atomic Energy Commission', isCorrect: true, expl: 'Dr. Ishfaq Ahmad served as Chairman of the Pakistan Atomic Energy Commission (PAEC) from 1991 to 2001.' },
      { text: 'SUPARCO', isCorrect: false, expl: 'SUPARCO is the national space commission.' },
      { text: 'HEC', isCorrect: false, expl: 'HEC is the Higher Education Commission.' },
      { text: 'PCB', isCorrect: false, expl: 'PCB is the Pakistan Cricket Board.' }
    ],
    fact: 'He oversaw the successful commissioning of the Chashma Nuclear Power Plant (CHASNUPP-1).',
    diff: 'Foundation'
  },
  {
    q: 'SUPARCO is Pakistan\'s:',
    snip: 'National space commission identity.',
    options: [
      { text: 'Space agency', isCorrect: true, expl: 'SUPARCO is Pakistan\'s executive space research and satellite development agency.' },
      { text: 'Nuclear weapons agency', isCorrect: false, expl: 'PAEC and KRL handle nuclear technologies.' },
      { text: 'Aviation company', isCorrect: false, expl: 'PIA is the national airline.' },
      { text: 'Weather department', isCorrect: false, expl: 'PMD is the Pakistan Meteorological Department.' }
    ],
    fact: 'SUPARCO was established on the recommendation of Nobel Laureate Prof. Dr. Abdus Salam in 1961.',
    diff: 'Foundation'
  },
  {
    q: 'SUPARCO stands for:',
    snip: 'Official full expansion of the acronym SUPARCO.',
    options: [
      { text: 'Space and Upper Atmosphere Research Commission', isCorrect: true, expl: 'SUPARCO stands for "Space and Upper Atmosphere Research Commission".' },
      { text: 'Space Research and Communication Organization', isCorrect: false, expl: 'Incorrect wording.' },
      { text: 'Scientific and Upper Research Commission', isCorrect: false, expl: 'Incorrect wording.' },
      { text: 'Space and Atomic Research Corporation', isCorrect: false, expl: 'Incorrect wording.' }
    ],
    fact: 'Pakistan launched its first sounding rocket "Rehbar-I" on 7 June 1962, becoming the 3rd country in Asia to launch a rocket.',
    diff: 'Foundation'
  },
  {
    q: "Pakistan's first satellite was:",
    snip: 'First indigenous satellite name.',
    options: [
      { text: 'Badr-1', isCorrect: true, expl: 'Badr-1 (Badr-A) was Pakistan\'s first artificial satellite, developed indigenously by SUPARCO.' },
      { text: 'Paksat-1', isCorrect: false, expl: 'Paksat-1 was a geostationary communications satellite acquired later in 2002.' },
      { text: 'PRSS-1', isCorrect: false, expl: 'PRSS-1 is an optical remote-sensing satellite launched in 2018.' },
      { text: 'iCube-1', isCorrect: false, expl: 'iCube-1 was a CubeSat launched in 2013.' }
    ],
    fact: 'Badr means "Full Moon" in Arabic.',
    diff: 'Foundation'
  },
  {
    q: 'Badr-1 was launched in:',
    snip: 'Year of Badr-1 launch.',
    options: [
      { text: '1985', isCorrect: false, expl: 'Development was ongoing.' },
      { text: '1990', isCorrect: true, expl: 'Badr-1 was launched on 16 July 1990 aboard a Chinese Long March 2E rocket from Xichang Satellite Launch Center.' },
      { text: '1995', isCorrect: false, expl: '1995 was mid-90s.' },
      { text: '2000', isCorrect: false, expl: '2001 was Badr-B launch.' }
    ],
    fact: 'Badr-1 made Pakistan the first Muslim country to place a satellite in Earth orbit.',
    diff: 'Foundation'
  },
  {
    q: 'Badr-1 was Pakistan\'s first:',
    snip: 'Orbital category classification.',
    options: [
      { text: 'Satellite', isCorrect: true, expl: 'Badr-1 was Pakistan\'s pioneering low Earth orbit (LEO) digital communications and store-and-forward satellite.' },
      { text: 'Nuclear reactor', isCorrect: false, expl: 'Pakistan\'s first nuclear reactor was PARR-1 in Nilore (1965).' },
      { text: 'Space shuttle', isCorrect: false, expl: 'Pakistan has not built a space shuttle.' },
      { text: 'Communication tower', isCorrect: false, expl: 'Badr-1 was an orbital spacecraft.' }
    ],
    fact: 'It transmitted radio telemetry and store-and-forward messages across amateur radio frequencies.',
    diff: 'Foundation'
  },
  {
    q: 'Pakistan\'s remote-sensing satellite launched in 2018 was:',
    snip: 'Modern earth observation satellite.',
    options: [
      { text: 'PRSS-1', isCorrect: true, expl: 'PRSS-1 (Pakistan Remote Sensing Satellite 1) was launched on 9 July 2018 for earth observation, resource mapping, and disaster management.' },
      { text: 'Badr-1', isCorrect: false, expl: 'Badr-1 was launched in 1990.' },
      { text: 'Paksat-1', isCorrect: false, expl: 'Paksat-1 was a communications satellite.' },
      { text: 'Badr-2', isCorrect: false, expl: 'Badr-B was launched in 2001.' }
    ],
    fact: 'PRSS-1 was launched along with PakTES 1-A (Pakistan Technology Evaluation Satellite 1-A).',
    diff: 'Foundation'
  },
  {
    q: 'PRSS-1 was launched with cooperation from:',
    snip: 'International space partner country.',
    options: [
      { text: 'China', isCorrect: true, expl: 'PRSS-1 was co-developed with and launched aboard a Long March 2C rocket from the Jiuquan Satellite Launch Center in China.' },
      { text: 'United States', isCorrect: false, expl: 'NASA was an early sounding rocket collaborator in the 1960s.' },
      { text: 'Russia', isCorrect: false, expl: 'Russia was not the launch partner.' },
      { text: 'France', isCorrect: false, expl: 'France was not the launch partner.' }
    ],
    fact: 'The satellite provides high-resolution optical imagery for agriculture, urban planning, and national defense.',
    diff: 'Foundation'
  },
  {
    q: 'Pakistan\'s space agency SUPARCO was established in:',
    snip: 'Founding year of SUPARCO.',
    options: [
      { text: '1958', isCorrect: false, expl: '1958 was the founding of NASA.' },
      { text: '1961', isCorrect: true, expl: 'SUPARCO was established on 16 September 1961 by President Ayub Khan on the advice of Dr. Abdus Salam.' },
      { text: '1965', isCorrect: false, expl: '1965 was the Indo-Pak war.' },
      { text: '1971', isCorrect: false, expl: '1971 was the separation of East Pakistan.' }
    ],
    fact: 'Dr. Abdus Salam served as the founding director of SUPARCO from 1961 to 1967.',
    diff: 'Foundation'
  },

  // 376–400: Artists, Writers & Icons
  {
    q: 'Noor Jehan was popularly known as:',
    snip: 'Legendary musical title of Madam Noor Jehan.',
    options: [
      { text: 'Malika-e-Tarannum', isCorrect: true, expl: 'Madam Noor Jehan was bestowed the enduring title "Malika-e-Tarannum" (Queen of Melody) for her vocal virtuosity.' },
      { text: 'Queen of Pop', isCorrect: false, expl: 'Nazia Hassan was hailed as the Queen of South Asian Pop.' },
      { text: 'Melody Queen of Punjab only', isCorrect: false, expl: 'Her title was universal across all languages.' },
      { text: 'Voice of Pakistan', isCorrect: false, expl: 'Not her official title.' }
    ],
    fact: 'She recorded over 10,000 songs in Urdu, Punjabi, and Sindhi, and inspired troops with patriotic songs during the 1965 war.',
    diff: 'Foundation'
  },
  {
    q: 'Noor Jehan was famous primarily as a:',
    snip: 'Artistic career domains.',
    options: [
      { text: 'Singer and actress', isCorrect: true, expl: 'Noor Jehan was an iconic playback singer, actress, and film director spanning six decades in South Asian cinema.' },
      { text: 'Scientist', isCorrect: false, expl: 'She was a musical icon.' },
      { text: 'Painter', isCorrect: false, expl: 'She was a singer/actress.' },
      { text: 'Politician', isCorrect: false, expl: 'She was an artist.' }
    ],
    fact: 'She was the first female film director in Pakistan, directing "Chanwey" in 1951.',
    diff: 'Foundation'
  },
  {
    q: 'Nusrat Fateh Ali Khan was famous for:',
    snip: 'Sufi musical genre mastery.',
    options: [
      { text: 'Qawwali', isCorrect: true, expl: 'Ustad Nusrat Fateh Ali Khan is globally celebrated as the "Shahenshah-e-Qawwali" (King of Kings of Qawwali).' },
      { text: 'Ghazal only', isCorrect: false, expl: 'He sang ghazals but his global legacy is rooted in Qawwali.' },
      { text: 'Classical dance', isCorrect: false, expl: 'Kathak/dance was not his genre.' },
      { text: 'Folk painting', isCorrect: false, expl: 'He was a musician.' }
    ],
    fact: 'He possessed an extraordinary six-octave vocal range and collaborated with international artists like Peter Gabriel and Eddie Vedder.',
    diff: 'Foundation'
  },
  {
    q: 'Nusrat Fateh Ali Khan was internationally recognized as a master of:',
    snip: 'Global musical genre representation.',
    options: [
      { text: 'Qawwali', isCorrect: true, expl: 'He popularized Sufi Qawwali to sold-out arenas across Europe, North America, Japan, and the world.' },
      { text: 'Opera', isCorrect: false, expl: 'Opera is European classical theater.' },
      { text: 'Rock music', isCorrect: false, expl: 'He collaborated across genres but performed Qawwali.' },
      { text: 'Jazz', isCorrect: false, expl: 'Jazz is an Afro-American musical genre.' }
    ],
    fact: 'Rolling Stone ranked him among the 200 Greatest Singers of All Time in 2023.',
    diff: 'Foundation'
  },
  {
    q: 'Abida Parveen is particularly famous for:',
    snip: 'Spiritual musical performance style.',
    options: [
      { text: 'Sufi music', isCorrect: true, expl: 'Begum Abida Parveen is universally revered as the "Queen of Sufi Music" (Sufi Gayaki ki Rani).' },
      { text: 'Classical ballet', isCorrect: false, expl: 'Ballet is Western dance.' },
      { text: 'Film direction', isCorrect: false, expl: 'She is a legendary vocalist.' },
      { text: 'Painting', isCorrect: false, expl: 'She is a musician.' }
    ],
    fact: 'She sings mystical poetry of Sufi masters like Bulleh Shah, Shah Abdul Latif Bhittai, Sachal Sarmast, and Rumi.',
    diff: 'Foundation'
  },
  {
    q: 'Abida Parveen primarily sings in:',
    snip: 'Vocal musical tradition.',
    options: [
      { text: 'Sufi musical tradition', isCorrect: true, expl: 'Her repertoire centers on Kafi, Ghazal, and Sufi devotional kalam in Sindhi, Punjabi, Urdu, Saraiki, and Persian.' },
      { text: 'Western opera', isCorrect: false, expl: 'She performs Eastern Sufi music.' },
      { text: 'Rock', isCorrect: false, expl: 'She sings classical and semi-classical Sufi devotional music.' },
      { text: 'Hip-hop', isCorrect: false, expl: 'She sings traditional mystical poetry.' }
    ],
    fact: 'She was awarded the Nishan-e-Imtiaz, Hilal-e-Imtiaz, and Sitara-e-Imtiaz by the Government of Pakistan.',
    diff: 'Foundation'
  },
  {
    q: 'Mehdi Hassan was popularly known as:',
    snip: 'Regal title of the maestro.',
    options: [
      { text: 'Shahenshah-e-Ghazal', isCorrect: true, expl: 'Ustad Mehdi Hassan is universally revered as "Shahenshah-e-Ghazal" (Emperor of Ghazals).' },
      { text: 'Malika-e-Tarannum', isCorrect: false, expl: 'Malika-e-Tarannum is Noor Jehan.' },
      { text: 'Sultan of Qawwali', isCorrect: false, expl: 'Shahenshah-e-Qawwali is Nusrat Fateh Ali Khan.' },
      { text: 'King of Pop', isCorrect: false, expl: 'King of Pop is Michael Jackson.' }
    ],
    fact: 'Legendary Indian singer Lata Mangeshkar famously remarked: "Mehdi Hassan sings as if God is speaking through his vocal cords."',
    diff: 'Foundation'
  },
  {
    q: 'Mehdi Hassan was primarily famous for:',
    snip: 'Musical specialty of Mehdi Hassan.',
    options: [
      { text: 'Ghazal singing', isCorrect: true, expl: 'Mehdi Hassan revolutionized Urdu ghazal singing and playback music with his baritone voice and intricate microtonal command.' },
      { text: 'Qawwali', isCorrect: false, expl: 'Qawwali was Nusrat and Sabri brothers\' domain.' },
      { text: 'Film direction', isCorrect: false, expl: 'He was a vocalist.' },
      { text: 'Classical dance', isCorrect: false, expl: 'He was a classical singer.' }
    ],
    fact: 'His timeless ghazals include "Ranjish Hi Sahi", "Duniya Kisi Ke Pyaar Mein", and "Gulon Mein Rang Bhare".',
    diff: 'Foundation'
  },
  {
    q: 'Ustad Amanat Ali Khan was associated with:',
    snip: 'Musical domain and Patiala Gharana heritage.',
    options: [
      { text: 'Classical music', isCorrect: true, expl: 'Ustad Amanat Ali Khan (1922–1974) was a master classical and ghazal vocalist belonging to the Patiala Gharana.' },
      { text: 'Cricket', isCorrect: false, expl: 'He was a maestro musician.' },
      { text: 'Literature', isCorrect: false, expl: 'He was a vocalist.' },
      { text: 'Architecture', isCorrect: false, expl: 'He was a singer.' }
    ],
    fact: 'His rendition of the patriotic national song "Aye Watan Pyare Watan" remains one of Pakistan\'s most iconic anthems.',
    diff: 'Foundation'
  },
  {
    q: 'Nusrat Fateh Ali Khan was born in:',
    snip: 'Birthplace city of Nusrat Fateh Ali Khan.',
    options: [
      { text: 'Lahore', isCorrect: false, expl: 'Lahore is where he is buried in Kabootarpura, Faisalabad.' },
      { text: 'Faisalabad', isCorrect: true, expl: 'Nusrat Fateh Ali Khan was born on 13 October 1948 in Faisalabad (then Lyallpur), Punjab.' },
      { text: 'Multan', isCorrect: false, expl: 'Multan is the city of Sufi shrines.' },
      { text: 'Karachi', isCorrect: false, expl: 'Karachi is in Sindh.' }
    ],
    fact: 'His family carried an unbroken 600-year-old traditional Qawwali heritage.',
    diff: 'Foundation'
  },
  {
    q: 'Ustad Rahat Fateh Ali Khan is associated with:',
    snip: 'Musical tradition.',
    options: [
      { text: 'Qawwali and classical music', isCorrect: true, expl: 'Ustad Rahat Fateh Ali Khan (nephew of Nusrat) is an internationally acclaimed Qawwali, classical, and playback singer.' },
      { text: 'Cricket', isCorrect: false, expl: 'He is a musician.' },
      { text: 'Painting', isCorrect: false, expl: 'He is a singer.' },
      { text: 'Architecture', isCorrect: false, expl: 'He is an artist.' }
    ],
    fact: 'He performed at the Nobel Peace Prize Concert in Oslo in 2014.',
    diff: 'Foundation'
  },
  {
    q: 'Sadequain was famous as a:',
    snip: 'Visual arts discipline of Sadequain.',
    options: [
      { text: 'Painter and calligrapher', isCorrect: true, expl: 'Syed Sadequain Ahmed Naqvi (1930–1987) is universally recognized as Pakistan\'s greatest painter, muralist, and calligrapher.' },
      { text: 'Scientist', isCorrect: false, expl: 'He was an artist.' },
      { text: 'Singer', isCorrect: false, expl: 'He was a visual artist.' },
      { text: 'Politician', isCorrect: false, expl: 'He was an artist.' }
    ],
    fact: 'He painted massive ceiling murals at the Lahore Museum, Frere Hall in Karachi, and Mangla Dam power station.',
    diff: 'Foundation'
  },
  {
    q: "Sadequain's work is particularly associated with:",
    snip: 'Artistic medium and style.',
    options: [
      { text: 'Calligraphy', isCorrect: true, expl: 'Sadequain pioneered modern Islamic calligraphic art ("Khattati"), transforming classic Arabic and Urdu script into expressive visual paintings.' },
      { text: 'Photography', isCorrect: false, expl: 'He worked in murals, ink, and oil.' },
      { text: 'Architecture', isCorrect: false, expl: 'He painted architectural ceilings.' },
      { text: 'Sculpture only', isCorrect: false, expl: 'He was a master of paintings, murals, and calligraphy.' }
    ],
    fact: 'He illustrated the poetry of Ghalib, Iqbal, and Faiz with his signature bold lines.',
    diff: 'Foundation'
  },
  {
    q: 'Abdur Rahman Chughtai was a famous Pakistani:',
    snip: 'Artistic discipline of Chughtai.',
    options: [
      { text: 'Painter', isCorrect: true, expl: 'Abdur Rahman Chughtai (1897–1975) was Pakistan\'s pre-eminent national painter, renowned for his distinctive South Asian miniature-inspired watercolor style.' },
      { text: 'Scientist', isCorrect: false, expl: 'He was a master artist.' },
      { text: 'Cricketer', isCorrect: false, expl: 'He was a painter.' },
      { text: 'Soldier', isCorrect: false, expl: 'He was an artist.' }
    ],
    fact: 'He designed the first postage stamps and coins of independent Pakistan in 1948, as well as the emblem for Radio Pakistan.',
    diff: 'Foundation'
  },
  {
    q: 'The "Chughtai Art" style is associated with:',
    snip: 'National artist who developed this style.',
    options: [
      { text: 'Abdur Rahman Chughtai', isCorrect: true, expl: 'The "Chughtai style" combines Mughal miniature traditions, Art Nouveau curves, Persian illumination, and Islamic aesthetics into watercolor paintings.' },
      { text: 'Sadequain', isCorrect: false, expl: 'Sadequain was known for raw calligraphic murals.' },
      { text: 'Shakir Ali', isCorrect: false, expl: 'Shakir Ali pioneered cubism.' },
      { text: 'Ustad Allah Bakhsh', isCorrect: false, expl: 'Allah Bakhsh painted Punjabi pastoral folk life.' }
    ],
    fact: 'His illustrated edition of Ghalib\'s poetry, titled "Muraqqa-e-Chughtai" (1928), is considered a milestone in modern Eastern art.',
    diff: 'Foundation'
  },
  {
    q: 'Ustad Allah Bakhsh was famous for:',
    snip: 'Artistic medium of Allah Bakhsh.',
    options: [
      { text: 'Painting', isCorrect: true, expl: 'Ustad Allah Bakhsh (1895–1978) was a legendary landscape and figurative painter who celebrated rural Punjab, Punjabi folklore, and mythological scenes.' },
      { text: 'Music', isCorrect: false, expl: 'He was a master painter.' },
      { text: 'Cricket', isCorrect: false, expl: 'He was an artist.' },
      { text: 'Sculpture', isCorrect: false, expl: 'He worked primarily in oil on canvas.' }
    ],
    fact: 'His paintings of Heer Ranjha, Sohni Mahiwal, and rustic village festivals captured rural life with luminous colors.',
    diff: 'Foundation'
  },
  {
    q: 'Shakir Ali was a prominent Pakistani:',
    snip: 'Artistic school and genre of Shakir Ali.',
    options: [
      { text: 'Modernist painter', isCorrect: true, expl: 'Shakir Ali (1914–1975) was a pioneer of modern art and cubism in Pakistan and served as the influential Principal of the National College of Arts (NCA) Lahore.' },
      { text: 'Poet', isCorrect: false, expl: 'He was a visual artist.' },
      { text: 'Singer', isCorrect: false, expl: 'He was a painter.' },
      { text: 'Scientist', isCorrect: false, expl: 'He was an artist.' }
    ],
    fact: 'The Shakir Ali Museum in Lahore preserves his personal residence, studio, and artwork.',
    diff: 'Foundation'
  },
  {
    q: 'Malala Yousafzai received the Nobel Peace Prize in:',
    snip: 'Year of Nobel Peace Prize award.',
    options: [
      { text: '2012', isCorrect: false, expl: '2012 was the year of the Swat attack.' },
      { text: '2013', isCorrect: false, expl: '2013 was when she addressed the UN.' },
      { text: '2014', isCorrect: true, expl: 'Malala Yousafzai was awarded the Nobel Peace Prize in October 2014 in Oslo, Norway.' },
      { text: '2015', isCorrect: false, expl: '2015 was when Malala Fund expanded.' }
    ],
    fact: 'She is the second Pakistani Nobel laureate after Dr. Abdus Salam (1979).',
    diff: 'Foundation'
  },
  {
    q: 'Malala Yousafzai shared the Nobel Peace Prize with:',
    snip: 'Co-recipient of the 2014 Nobel Peace Prize.',
    options: [
      { text: 'Kailash Satyarthi', isCorrect: true, expl: 'Malala shared the 2014 Nobel Peace Prize with Indian child-rights activist Kailash Satyarthi for their struggle against the suppression of children and young people.' },
      { text: 'Barack Obama', isCorrect: false, expl: 'Obama won in 2009.' },
      { text: 'Ban Ki-moon', isCorrect: false, expl: 'Ban Ki-moon was UN Secretary-General.' },
      { text: 'Nadia Murad', isCorrect: false, expl: 'Nadia Murad won in 2018.' }
    ],
    fact: 'The joint award between Pakistani and Indian activists symbolized cross-border hope for children\'s rights.',
    diff: 'Foundation'
  },
  {
    q: 'Malala Yousafzai became the youngest Nobel Prize laureate at the age of:',
    snip: 'Age record in Nobel history.',
    options: [
      { text: '15', isCorrect: false, expl: 'She was 15 when attacked in Swat.' },
      { text: '16', isCorrect: false, expl: 'She addressed the UN on her 16th birthday.' },
      { text: '17', isCorrect: true, expl: 'At age 17, Malala Yousafzai became the youngest person ever to receive a Nobel Prize in any category in history.' },
      { text: '18', isCorrect: false, expl: 'She was 17 years old in December 2014.' }
    ],
    fact: 'Her UN speech on 12 July 2013 led the UN to designate 12 July as "Malala Day".',
    diff: 'Foundation'
  },
  {
    q: 'Malala is particularly known internationally for advocating:',
    snip: 'Global advocacy mission.',
    options: [
      { text: "Girls' education", isCorrect: true, expl: 'Malala is globally celebrated for advocating for the universal right of girls to receive 12 years of free, safe, and quality education.' },
      { text: 'Environmental conservation', isCorrect: false, expl: 'Greta Thunberg advocates for climate.' },
      { text: 'Sports development', isCorrect: false, expl: 'Her primary cause is education.' },
      { text: 'Space research', isCorrect: false, expl: 'Her foundation funds girls\' schooling.' }
    ],
    fact: 'Her famous motto is: "One child, one teacher, one book, and one pen can change the world."',
    diff: 'Foundation'
  },
  {
    q: 'Edhi was best known for establishing the:',
    snip: 'Non-profit humanitarian foundation.',
    options: [
      { text: 'Edhi Foundation', isCorrect: true, expl: 'Abdul Sattar Edhi established the Edhi Foundation in 1951, which grew into the largest non-profit welfare organization in Pakistan.' },
      { text: 'Pakistan Red Crescent', isCorrect: false, expl: 'PRCS is the national Red Cross affiliate.' },
      { text: 'Shaukat Khanum Hospital', isCorrect: false, expl: 'Founded by Imran Khan in 1994.' },
      { text: 'Al-Khidmat Foundation', isCorrect: false, expl: 'Al-Khidmat is a separate welfare network.' }
    ],
    fact: 'Edhi began his service with a single second-hand Hillman pickup truck converted into a homemade ambulance.',
    diff: 'Foundation'
  },
  {
    q: 'Abdul Sattar Edhi was widely known for his:',
    snip: 'Lifelong humanitarian legacy.',
    options: [
      { text: 'Humanitarian work', isCorrect: true, expl: 'Edhi dedicated his entire life to unconditional charity, running orphanages, nursing homes, free clinics, soup kitchens, and disaster relief.' },
      { text: 'Military leadership', isCorrect: false, expl: 'He was a civilian humanitarian.' },
      { text: 'Scientific discoveries', isCorrect: false, expl: 'He was a philanthropist.' },
      { text: 'Political career', isCorrect: false, expl: 'He avoided politics and lived with radical simplicity.' }
    ],
    fact: 'Despite managing millions in charity donations, Edhi lived in a simple two-room apartment and owned only two sets of simple clothes.',
    diff: 'Foundation'
  },
  {
    q: 'The Edhi Foundation is particularly famous for its extensive:',
    snip: 'World-record welfare fleet.',
    options: [
      { text: 'Ambulance service', isCorrect: true, expl: 'The Edhi Foundation operates the world\'s largest volunteer ambulance service (certified by Guinness World Records) with over 1,800 ambulances.' },
      { text: 'Airline', isCorrect: false, expl: 'PIA is the airline.' },
      { text: 'Railway system', isCorrect: false, expl: 'Pakistan Railways operates trains.' },
      { text: 'University network', isCorrect: false, expl: 'The foundation focuses on emergency relief, orphanages, and clinics.' }
    ],
    fact: 'The emergency dial number 115 in Pakistan connects directly to the Edhi Ambulance control room.',
    diff: 'Foundation'
  },
  {
    q: "Abdul Sattar Edhi is commonly remembered as one of Pakistan's greatest:",
    snip: 'National legacy as the Angel of Mercy.',
    options: [
      { text: 'Humanitarians', isCorrect: true, expl: 'Abdul Sattar Edhi (1928–2016) is remembered as Pakistan\'s greatest humanitarian and "Angel of Mercy".' },
      { text: 'Scientists', isCorrect: false, expl: 'Salam and A.Q. Khan were scientists.' },
      { text: 'Military commanders', isCorrect: false, expl: 'He was a pacifist humanitarian.' },
      { text: 'Athletes', isCorrect: false, expl: 'He was a humanitarian.' }
    ],
    fact: 'He placed "Jhoolas" (cradles) outside Edhi centres with the sign "Do not kill, place here", saving over 20,000 abandoned infants.',
    diff: 'Foundation'
  }
];

const formattedQuestions: QuizQuestion[] = exactIconsRaw.map((item, idx) => {
  const id = 2001 + idx;
  return {
    id,
    category: 'National Icons',
    categoryIcon: 'Award',
    difficulty: item.diff as 'Foundation' | 'Intermediate' | 'Scholar',
    question: item.q,
    contextSnippet: item.snip,
    options: item.options.map((opt, optIdx) => ({
      id: ['A', 'B', 'C', 'D'][optIdx] || 'A',
      text: opt.text,
      isCorrect: opt.isCorrect,
      explanation: opt.expl
    })),
    funFact: item.fact
  };
});

const fileContent = `import { QuizQuestion } from '../types';

export const ICONS_QUESTIONS: QuizQuestion[] = ${JSON.stringify(formattedQuestions, null, 2)};
`;

fs.writeFileSync('src/data/icons.ts', fileContent, 'utf-8');
console.log(`[SUCCESS] Wrote ${formattedQuestions.length} exact icons & leaders questions to src/data/icons.ts!`);
