import fs from 'fs';
import { QuizQuestion } from '../types';

export const exactMovementRaw = [
  // 501–525: Early Muslim Political Awakening
  {
    q: 'The founder of the Aligarh Movement was:',
    snip: 'Pioneer of Muslim educational renaissance in South Asia.',
    options: [
      { text: 'Allama Iqbal', isCorrect: false, expl: 'Allama Iqbal was the national poet-philosopher who conceived the spiritual vision of Pakistan.' },
      { text: 'Sir Syed Ahmad Khan', isCorrect: true, expl: 'Sir Syed Ahmad Khan (1817–1898) founded the Aligarh Movement to rejuvenate Muslims through modern Western education and social reform.' },
      { text: 'Muhammad Ali Jinnah', isCorrect: false, expl: 'Quaid-e-Azam Muhammad Ali Jinnah was the political founding father of Pakistan.' },
      { text: 'Liaquat Ali Khan', isCorrect: false, expl: 'Liaquat Ali Khan was Pakistan\'s first Prime Minister.' }
    ],
    fact: 'Sir Syed Ahmad Khan established the Muhammadan Educational Congress (later Conference) in 1886 to spread modern education across the subcontinent.',
    diff: 'Foundation'
  },
  {
    q: 'The Aligarh Movement primarily aimed at promoting:',
    snip: 'Primary objective of Sir Syed\'s movement.',
    options: [
      { text: 'Modern education among Muslims', isCorrect: true, expl: 'The Aligarh Movement\'s fundamental mission was to equip Muslims of British India with modern scientific, rational, and English education.' },
      { text: 'Armed struggle', isCorrect: false, expl: 'Sir Syed advocated peaceful educational and intellectual advancement rather than armed confrontation.' },
      { text: 'Industrialization only', isCorrect: false, expl: 'The focus was broad academic, linguistic, and scientific enlightenment.' },
      { text: 'Separation from India immediately', isCorrect: false, expl: 'Immediate separation was not a 19th-century goal; educational empowerment came first.' }
    ],
    fact: 'Aligarh College produced many future founding fathers of Pakistan, earning it the title "the intellectual cradle of Pakistan".',
    diff: 'Foundation'
  },
  {
    q: 'The Muhammadan Anglo-Oriental College was established in:',
    snip: 'Founding year of MAO College Aligarh.',
    options: [
      { text: '1867', isCorrect: false, expl: '1867 was the outbreak of the Urdu-Hindi controversy in Banaras.' },
      { text: '1875', isCorrect: true, expl: 'The Muhammadan Anglo-Oriental (MAO) College was founded as a school in 1875, and upgraded to a collegiate institution in 1877.' },
      { text: '1885', isCorrect: false, expl: '1885 was the founding year of the Indian National Congress.' },
      { text: '1906', isCorrect: false, expl: '1906 was the founding year of the All-India Muslim League.' }
    ],
    fact: 'Lord Lytton, the Viceroy of India, laid the formal foundation stone of MAO College on 8 January 1877.',
    diff: 'Foundation'
  },
  {
    q: 'The Muhammadan Anglo-Oriental College was established at:',
    snip: 'City location of MAO College.',
    options: [
      { text: 'Delhi', isCorrect: false, expl: 'Delhi was the former imperial Mughal capital.' },
      { text: 'Aligarh', isCorrect: true, expl: 'MAO College was established at Aligarh in Uttar Pradesh, India.' },
      { text: 'Lahore', isCorrect: false, expl: 'Lahore later hosted Islamia College Railway Road.' },
      { text: 'Lucknow', isCorrect: false, expl: 'Lucknow was the cultural capital of Awadh.' }
    ],
    fact: 'The college campus was modeled after the residential collegiate systems of Oxford and Cambridge universities.',
    diff: 'Foundation'
  },
  {
    q: 'The Muhammadan Anglo-Oriental College later became:',
    snip: 'Charter upgrade of MAO College in 1920.',
    options: [
      { text: 'University of Delhi', isCorrect: false, expl: 'Delhi University was established separately in 1922.' },
      { text: 'Aligarh Muslim University', isCorrect: true, expl: 'In 1920, the MAO College was upgraded by an Act of the Imperial Legislative Council into Aligarh Muslim University (AMU).' },
      { text: 'Jamia Millia Islamia', isCorrect: false, expl: 'Jamia Millia Islamia was founded in 1920 by nationalist leaders who broke away from Aligarh.' },
      { text: 'University of Lucknow', isCorrect: false, expl: 'Lucknow University is a distinct institution.' }
    ],
    fact: 'Quaid-e-Azam Muhammad Ali Jinnah bequeathed a significant portion of his personal estate in his will to Aligarh Muslim University.',
    diff: 'Foundation'
  },
  {
    q: 'Sir Syed Ahmad Khan founded the Scientific Society at:',
    snip: 'Town of establishment in 1864.',
    options: [
      { text: 'Ghazipur', isCorrect: true, expl: 'Sir Syed founded the Scientific Society in 1864 at Ghazipur, later shifting its headquarters to Aligarh.' },
      { text: 'Lahore', isCorrect: false, expl: 'Lahore was in Punjab.' },
      { text: 'Delhi', isCorrect: false, expl: 'Delhi was where Sir Syed worked earlier.' },
      { text: 'Aligarh', isCorrect: false, expl: 'It was shifted to Aligarh later, but founded at Ghazipur.' }
    ],
    fact: 'The Scientific Society translated major English, French, and European scientific and historical works into Urdu for public education.',
    diff: 'Intermediate'
  },
  {
    q: 'The Scientific Society was established primarily to:',
    snip: 'Core translation mission.',
    options: [
      { text: 'Translate modern scientific works', isCorrect: true, expl: 'The Scientific Society\'s primary purpose was translating Western scientific, mathematical, agricultural, and historical books into Urdu.' },
      { text: 'Train soldiers', isCorrect: false, expl: 'It had no military role.' },
      { text: 'Promote sports', isCorrect: false, expl: 'It was an academic and scientific society.' },
      { text: 'Establish political parties', isCorrect: false, expl: 'It strictly focused on scientific enlightenment and literature.' }
    ],
    fact: 'The Society also published the renowned bilingual journal Aligarh Institute Gazette starting in 1866.',
    diff: 'Foundation'
  },
  {
    q: 'Sir Syed Ahmad Khan initially advocated cooperation between Muslims and:',
    snip: 'Pragmatic political rapprochement.',
    options: [
      { text: 'British government', isCorrect: true, expl: 'Sir Syed advised Muslims to reconcile with the British rulers to gain education, civil service jobs, and political stability after the 1857 war.' },
      { text: 'Ottoman Empire', isCorrect: false, expl: 'Pan-Islamism was advocated later by other figures.' },
      { text: 'Afghanistan', isCorrect: false, expl: 'Afghanistan was an external neighboring kingdom.' },
      { text: 'Persia', isCorrect: false, expl: 'Persia was not involved in British Indian internal governance.' }
    ],
    fact: 'Sir Syed wrote "Asbab-e-Baghawat-e-Hind" (The Causes of the Indian Revolt) in 1858 to clear misunderstandings between Muslims and the British rulers.',
    diff: 'Foundation'
  },
  {
    q: 'The Urdu-Hindi controversy began prominently in:',
    snip: 'Year the language conflict started in Banaras.',
    options: [
      { text: '1857', isCorrect: false, expl: '1857 was the War of Independence.' },
      { text: '1867', isCorrect: true, expl: 'The Urdu-Hindi controversy erupted in 1867 when Hindu leaders in Banaras demanded replacing Urdu (in Persian script) with Hindi (in Devanagari script).' },
      { text: '1875', isCorrect: false, expl: '1875 was the establishment of MAO School.' },
      { text: '1885', isCorrect: false, expl: '1885 was the founding of Congress.' }
    ],
    fact: 'This controversy marked a turning point in Sir Syed\'s thought, leading him to realize that Hindus and Muslims were two distinct nations with divergent cultural aspirations.',
    diff: 'Foundation'
  },
  {
    q: 'The Urdu-Hindi controversy strengthened the idea that:',
    snip: 'Foundational concept of Two-Nation Theory.',
    options: [
      { text: 'Muslims and Hindus had distinct cultural identities', isCorrect: true, expl: 'The language conflict convinced Muslim leaders that cultural, linguistic, and political safeguards were vital because the two communities held distinct identities.' },
      { text: 'Muslims should abandon education', isCorrect: false, expl: 'It reinforced the urgent necessity of education.' },
      { text: 'India should be divided immediately', isCorrect: false, expl: 'Immediate division was not proposed until decades later.' },
      { text: 'English should be abolished', isCorrect: false, expl: 'English remained the medium of higher administration.' }
    ],
    fact: 'Sir Syed famously remarked to Mr. Shakespeare (Commissioner of Banaras) in 1867: "Now I am convinced that these two nations will not join wholeheartedly in anything."',
    diff: 'Foundation'
  },
  {
    q: 'The Indian National Congress was founded in:',
    snip: 'Year of Congress inception.',
    options: [
      { text: '1885', isCorrect: true, expl: 'The Indian National Congress (INC) was founded in December 1885 in Bombay.' },
      { text: '1890', isCorrect: false, expl: '1890 was during early Congress sessions.' },
      { text: '1905', isCorrect: false, expl: '1905 was the Partition of Bengal.' },
      { text: '1906', isCorrect: false, expl: '1906 was the founding of the All-India Muslim League.' }
    ],
    fact: 'The first session of Congress was held at Gokuldas Tejpal Sanskrit College in Bombay with 72 delegates.',
    diff: 'Foundation'
  },
  {
    q: 'The Indian National Congress was founded by:',
    snip: 'Retired British civil servant founder.',
    options: [
      { text: 'Allan Octavian Hume', isCorrect: true, expl: 'A.O. Hume, a retired Scottish Indian Civil Service (ICS) officer, took the initiative to establish the Indian National Congress.' },
      { text: 'Lord Curzon', isCorrect: false, expl: 'Lord Curzon was Viceroy from 1899 to 1905.' },
      { text: 'Sir Syed Ahmad Khan', isCorrect: false, expl: 'Sir Syed opposed Muslim participation in Congress.' },
      { text: 'Lord Minto', isCorrect: false, expl: 'Lord Minto was Viceroy who received the Simla Deputation in 1906.' }
    ],
    fact: 'W.C. Bonnerjee served as the first president of the Indian National Congress in 1885.',
    diff: 'Foundation'
  },
  {
    q: 'Sir Syed Ahmad Khan advised Muslims to initially stay away from:',
    snip: 'Strategic political guidance to Muslim community.',
    options: [
      { text: 'Indian National Congress politics', isCorrect: true, expl: 'Sir Syed advised Muslims to avoid active agitational politics with Congress and instead focus single-mindedly on education and socio-economic empowerment.' },
      { text: 'Modern education', isCorrect: false, expl: 'He strongly championed modern education.' },
      { text: 'Scientific research', isCorrect: false, expl: 'He established the Scientific Society to advance research.' },
      { text: 'Government employment', isCorrect: false, expl: 'He encouraged Muslims to qualify for government posts.' }
    ],
    fact: 'Sir Syed delivered key speeches in Lucknow (1887) and Meerut (1888) explaining why Western-style majority elections without safeguards would disadvantage the Muslim minority.',
    diff: 'Foundation'
  },
  {
    q: 'The partition of Bengal took place in:',
    snip: 'Year of administrative division of Bengal.',
    options: [
      { text: '1903', isCorrect: false, expl: '1903 was when the scheme was first proposed.' },
      { text: '1905', isCorrect: true, expl: 'The Partition of Bengal took effect on 16 October 1905.' },
      { text: '1906', isCorrect: false, expl: '1906 was the founding of the Muslim League.' },
      { text: '1911', isCorrect: false, expl: '1911 was when the partition was annulled.' }
    ],
    fact: 'Bengal was an enormous province of nearly 80 million people, making efficient administration virtually impossible under a single lieutenant governor.',
    diff: 'Foundation'
  },
  {
    q: 'The partition of Bengal was carried out during the rule of:',
    snip: 'British Viceroy who implemented the partition.',
    options: [
      { text: 'Lord Curzon', isCorrect: true, expl: 'Lord Curzon served as Viceroy of India (1899–1905) and enacted the partition for administrative efficiency.' },
      { text: 'Lord Minto', isCorrect: false, expl: 'Lord Minto succeeded Curzon in late 1905.' },
      { text: 'Lord Wavell', isCorrect: false, expl: 'Lord Wavell was Viceroy during World War II (1943–1947).' },
      { text: 'Lord Mountbatten', isCorrect: false, expl: 'Lord Mountbatten was the last Viceroy in 1947.' }
    ],
    fact: 'Lord Curzon toured East Bengal in 1904 to consult local communities before finalizing the administrative boundaries.',
    diff: 'Foundation'
  },
  {
    q: 'The partition of Bengal created a province with a Muslim majority called:',
    snip: 'New province created in 1905.',
    options: [
      { text: 'Eastern Bengal and Assam', isCorrect: true, expl: 'The new province was named Eastern Bengal and Assam, with its capital at Dhaka and a population of 31 million, where Muslims formed a 60% majority.' },
      { text: 'Western Bengal', isCorrect: false, expl: 'Western Bengal remained Hindu-majority with its capital at Calcutta.' },
      { text: 'United Bengal', isCorrect: false, expl: 'United Bengal was the undivided province prior to 1905.' },
      { text: 'East Pakistan', isCorrect: false, expl: 'East Pakistan was established in 1947 upon the independence of Pakistan.' }
    ],
    fact: 'Sir Bampfylde Fuller was appointed the first Lieutenant-Governor of Eastern Bengal and Assam.',
    diff: 'Foundation'
  },
  {
    q: 'The partition of Bengal was annulled in:',
    snip: 'Year of Delhi Durbar reversal.',
    options: [
      { text: '1909', isCorrect: false, expl: '1909 was the Minto-Morley reforms.' },
      { text: '1911', isCorrect: true, expl: 'King George V announced the annulment of the Partition of Bengal at the Delhi Durbar on 12 December 1911.' },
      { text: '1916', isCorrect: false, expl: '1916 was the Lucknow Pact.' },
      { text: '1920', isCorrect: false, expl: '1920 was the Non-Cooperation and Khilafat movements.' }
    ],
    fact: 'The annulment deeply disappointed Muslim leaders, showing them that relying solely on British pledges was insufficient without their own organized political strength.',
    diff: 'Foundation'
  },
  {
    q: 'The All-India Muslim League was founded in:',
    snip: 'Inception year of Pakistan\'s founding political party.',
    options: [
      { text: '1905', isCorrect: false, expl: '1905 was the Partition of Bengal.' },
      { text: '1906', isCorrect: true, expl: 'The All-India Muslim League was founded on 30 December 1906 during the annual Muhammadan Educational Conference.' },
      { text: '1909', isCorrect: false, expl: '1909 was the Morley-Minto reforms.' },
      { text: '1911', isCorrect: false, expl: '1911 was the annulment of Bengal partition.' }
    ],
    fact: 'Nawab Waqar-ul-Mulk chaired the historic founding session on 30 December 1906.',
    diff: 'Foundation'
  },
  {
    q: 'The All-India Muslim League was founded at:',
    snip: 'Historic city of AIML foundation.',
    options: [
      { text: 'Lahore', isCorrect: false, expl: 'Lahore hosted the 1940 Resolution session.' },
      { text: 'Karachi', isCorrect: false, expl: 'Karachi hosted the first annual session in 1907.' },
      { text: 'Dhaka', isCorrect: true, expl: 'The All-India Muslim League was established at Dhaka (now capital of Bangladesh) on 30 December 1906.' },
      { text: 'Aligarh', isCorrect: false, expl: 'Aligarh was the educational epicenter.' }
    ],
    fact: 'Over 3,000 Muslim delegates and scholars from across British India attended the Dhaka convention.',
    diff: 'Foundation'
  },
  {
    q: 'The Muslim League was founded during a meeting at:',
    snip: 'Palace venue of the founding conference.',
    options: [
      { text: 'Ahsan Manzil', isCorrect: true, expl: 'The historic founding convention took place at Ahsan Manzil, the majestic riverside palace of the Nawabs of Dhaka.' },
      { text: 'Lahore Fort', isCorrect: false, expl: 'Lahore Fort is a Mughal monument in Lahore.' },
      { text: 'Aligarh College', isCorrect: false, expl: 'Aligarh was the educational base, but Dhaka hosted the founding.' },
      { text: 'Government House', isCorrect: false, expl: 'Government House was the British official residence.' }
    ],
    fact: 'Ahsan Manzil is situated along the banks of the Buriganga River in Old Dhaka.',
    diff: 'Foundation'
  },
  {
    q: 'Ahsan Manzil was associated with the leadership of:',
    snip: 'Dhaka aristocrat who hosted the Muslim League\'s creation.',
    options: [
      { text: 'Nawab Salimullah Khan', isCorrect: true, expl: 'Nawab Sir Khwaja Salimullah Khan of Dhaka hosted the conference at Ahsan Manzil and sponsored the resolution to create the All-India Muslim League.' },
      { text: 'Sir Syed Ahmad Khan', isCorrect: false, expl: 'Sir Syed passed away in 1898.' },
      { text: 'Gandhi', isCorrect: false, expl: 'Mahatma Gandhi was in South Africa in 1906.' },
      { text: 'Nehru', isCorrect: false, expl: 'Motilal and Jawaharlal Nehru were Congress leaders.' }
    ],
    fact: 'Nawab Salimullah also played an instrumental role in the creation of the University of Dacca in 1921.',
    diff: 'Foundation'
  },
  {
    q: 'The first president of the All-India Muslim League was:',
    snip: 'Eminent diplomat and spiritual leader.',
    options: [
      { text: 'Aga Khan III', isCorrect: true, expl: 'Sir Sultan Muhammad Shah, Aga Khan III (1877–1957) was elected as the first permanent President of the All-India Muslim League (1906–1913).' },
      { text: 'Muhammad Ali Jinnah', isCorrect: false, expl: 'Jinnah joined the Muslim League in 1913 and became its permanent president in the 1930s.' },
      { text: 'Nawab Salimullah Khan', isCorrect: false, expl: 'Nawab Salimullah was the key founder and vice president.' },
      { text: 'Sir Syed Ahmad Khan', isCorrect: false, expl: 'Sir Syed passed away in 1898.' }
    ],
    fact: 'Aga Khan III later served as President of the League of Nations in Geneva in 1937.',
    diff: 'Foundation'
  },
  {
    q: 'The Simla Deputation met Lord Minto in:',
    snip: 'Month and year of the Simla delegation.',
    options: [
      { text: '1905', isCorrect: false, expl: '1905 was the Partition of Bengal.' },
      { text: '1906', isCorrect: true, expl: 'The Simla Deputation presented its address to Viceroy Lord Minto at the Viceregal Lodge in Simla on 1 October 1906.' },
      { text: '1909', isCorrect: false, expl: '1909 was the enactment of the Minto-Morley reforms.' },
      { text: '1911', isCorrect: false, expl: '1911 was the Delhi Durbar.' }
    ],
    fact: 'The deputation comprised 35 prominent Muslim leaders representing all provinces of British India.',
    diff: 'Foundation'
  },
  {
    q: 'The Simla Deputation was led by:',
    snip: 'Leader of the 35-member delegation.',
    options: [
      { text: 'Aga Khan III', isCorrect: true, expl: 'Aga Khan III led the 35-member delegation to Simla, with Nawab Mohsin-ul-Mulk serving as the principal organizer.' },
      { text: 'Muhammad Ali Jinnah', isCorrect: false, expl: 'Jinnah was associated with Dadabhai Naoroji in Congress at that time.' },
      { text: 'Liaquat Ali Khan', isCorrect: false, expl: 'Liaquat Ali Khan was a student in 1906.' },
      { text: 'Allama Iqbal', isCorrect: false, expl: 'Iqbal was studying at Cambridge and Heidelberg.' }
    ],
    fact: 'Nawab Mohsin-ul-Mulk drafted the core memorandum presented to Viceroy Lord Minto.',
    diff: 'Foundation'
  },
  {
    q: 'One major demand of the Simla Deputation was:',
    snip: 'Pivotal constitutional electoral safeguard.',
    options: [
      { text: 'Separate electorates for Muslims', isCorrect: true, expl: 'The Simla Deputation demanded separate electorates with weightage for Muslims in all legislative councils and local bodies.' },
      { text: 'Complete independence', isCorrect: false, expl: 'Independence was not demanded in 1906; constitutional representation was the focus.' },
      { text: 'Partition of Punjab', isCorrect: false, expl: 'Partition of Punjab was not proposed.' },
      { text: 'Abolition of legislatures', isCorrect: false, expl: 'They requested expanded legislative representation.' }
    ],
    fact: 'Viceroy Lord Minto formally accepted the demand, stating that Muslim representation should be judged not merely by numerical strength but political importance.',
    diff: 'Foundation'
  },

  // 526–550: Constitutional Developments
  {
    q: 'Separate electorates for Muslims were formally introduced under the:',
    snip: 'Statutory British enactment.',
    options: [
      { text: 'Indian Councils Act 1909', isCorrect: true, expl: 'Separate electorates were codified into law under the Indian Councils Act 1909 (Morley-Minto Reforms).' },
      { text: 'Government of India Act 1919', isCorrect: false, expl: 'The 1919 Act expanded them to other minorities and introduced dyarchy.' },
      { text: 'Government of India Act 1935', isCorrect: false, expl: 'The 1935 Act introduced provincial autonomy.' },
      { text: 'Indian Independence Act 1947', isCorrect: false, expl: 'The 1947 Act partitioned India into two sovereign dominions.' }
    ],
    fact: 'Under separate electorates, Muslim voters exclusively elected Muslim representatives to reserved legislative seats.',
    diff: 'Foundation'
  },
  {
    q: 'The Indian Councils Act 1909 is also known as:',
    snip: 'Popular name of the 1909 reforms.',
    options: [
      { text: 'Morley-Minto Reforms', isCorrect: true, expl: 'It was named after John Morley (Secretary of State for India) and Lord Minto (Viceroy of India).' },
      { text: 'Montagu-Chelmsford Reforms', isCorrect: false, expl: 'Montagu-Chelmsford refers to the 1919 Act.' },
      { text: 'Minto-Wavell Reforms', isCorrect: false, expl: 'Not a historical reform term.' },
      { text: 'Simon Reforms', isCorrect: false, expl: 'Simon Commission was in 1927–28.' }
    ],
    fact: 'The reforms expanded the Imperial Legislative Council from 16 to 60 members.',
    diff: 'Foundation'
  },
  {
    q: 'The Lucknow Pact was signed in:',
    snip: 'Year of historic Hindu-Muslim political accord.',
    options: [
      { text: '1909', isCorrect: false, expl: '1909 was Morley-Minto Reforms.' },
      { text: '1911', isCorrect: false, expl: '1911 was the annulment of Bengal partition.' },
      { text: '1916', isCorrect: true, expl: 'The Lucknow Pact was signed in December 1916 at joint sessions of the Muslim League and Congress in Lucknow.' },
      { text: '1919', isCorrect: false, expl: '1919 was Montagu-Chelmsford Reforms and Rowlatt Act.' }
    ],
    fact: 'Sarojini Naidu conferred upon Quaid-e-Azam Muhammad Ali Jinnah the title "Ambassador of Hindu-Muslim Unity" for orchestrating the pact.',
    diff: 'Foundation'
  },
  {
    q: 'The Lucknow Pact was between the:',
    snip: 'Two major political parties involved.',
    options: [
      { text: 'Muslim League and Indian National Congress', isCorrect: true, expl: 'The Lucknow Pact was an agreement reached between the All-India Muslim League and the Indian National Congress on constitutional reforms.' },
      { text: 'Muslim League and British government', isCorrect: false, expl: 'It was a bilateral pact between the two premier Indian political parties.' },
      { text: 'Congress and British government', isCorrect: false, expl: 'It was between Congress and Muslim League.' },
      { text: 'Khilafat Committee and Muslim League', isCorrect: false, expl: 'Khilafat Committee was formed in 1919.' }
    ],
    fact: 'It was the only time in pre-partition history that Congress and Muslim League held simultaneous joint annual sessions.',
    diff: 'Foundation'
  },
  {
    q: 'The Lucknow Pact was significant because Congress accepted:',
    snip: 'Major concession granted to Muslims by Congress.',
    options: [
      { text: 'Separate electorates for Muslims', isCorrect: true, expl: 'For the first time, the Indian National Congress officially accepted separate electorates for Muslims and agreed to fixed provincial representation quotas.' },
      { text: 'Pakistan as a separate state', isCorrect: false, expl: 'Pakistan was not demanded in 1916; provincial autonomy within a united India was the framework.' },
      { text: 'Complete independence', isCorrect: false, expl: 'Self-government (Dominion status) was sought.' },
      { text: 'Two separate armies', isCorrect: false, expl: 'Military division was never part of the 1916 accord.' }
    ],
    fact: 'Under the pact, Muslims were granted one-third representation in the Central Legislative Assembly.',
    diff: 'Foundation'
  },
  {
    q: 'Muhammad Ali Jinnah played a major role in the:',
    snip: 'Pact where Jinnah earned the title Ambassador of Hindu-Muslim Unity.',
    options: [
      { text: 'Lucknow Pact', isCorrect: true, expl: 'Jinnah was the chief architect of the 1916 Lucknow Pact, holding simultaneous membership in both Congress and the Muslim League.' },
      { text: 'Cabinet Mission only', isCorrect: false, expl: 'He played crucial roles in multiple eras, but Lucknow Pact was his signature early unity achievement.' },
      { text: 'Khilafat Movement only', isCorrect: false, expl: 'Jinnah actually cautioned against mixing religious passions with constitutional agitation in Khilafat.' },
      { text: 'Simon Commission', isCorrect: false, expl: 'Jinnah boycotted the all-British Simon Commission.' }
    ],
    fact: 'Jinnah served as President of the All-India Muslim League at the Lucknow session in 1916.',
    diff: 'Foundation'
  },
  {
    q: 'The Montagu-Chelmsford Reforms were introduced in:',
    snip: 'Year of the Mont-Ford constitutional reforms.',
    options: [
      { text: '1909', isCorrect: false, expl: '1909 was Morley-Minto.' },
      { text: '1919', isCorrect: true, expl: 'The Montagu-Chelmsford Report was formulated into the Government of India Act 1919.' },
      { text: '1927', isCorrect: false, expl: '1927 was the appointment of the Simon Commission.' },
      { text: '1935', isCorrect: false, expl: '1935 was the Government of India Act 1935.' }
    ],
    fact: 'The reforms were named after Edwin Montagu (Secretary of State) and Lord Chelmsford (Viceroy).',
    diff: 'Foundation'
  },
  {
    q: 'The Government of India Act 1919 introduced:',
    snip: 'Dual system of provincial governance.',
    options: [
      { text: 'Dyarchy in provinces', isCorrect: true, expl: 'The 1919 Act introduced "Dyarchy" (dual government) in provinces, dividing subjects into "Transferred" (under Indian ministers) and "Reserved" (under the British Governor).' },
      { text: 'Complete provincial independence', isCorrect: false, expl: 'Full provincial autonomy came in 1935.' },
      { text: 'Pakistan', isCorrect: false, expl: 'Pakistan was created in 1947.' },
      { text: 'Separate Muslim state', isCorrect: false, expl: 'Not part of the 1919 Act.' }
    ],
    fact: 'Reserved subjects included police, law & order, and finance; transferred subjects included education and public health.',
    diff: 'Foundation'
  },
  {
    q: 'The Khilafat Movement began after:',
    snip: 'Global historical conflict that triggered the movement.',
    options: [
      { text: 'World War I', isCorrect: true, expl: 'The Khilafat Movement (1919–1924) arose in British India after World War I to protect the Ottoman Caliphate from dismemberment.' },
      { text: 'World War II', isCorrect: false, expl: 'World War II took place from 1939 to 1945.' },
      { text: 'The Partition of Bengal', isCorrect: false, expl: 'Partition of Bengal was in 1905.' },
      { text: 'The Simon Commission', isCorrect: false, expl: 'Simon Commission came in 1928.' }
    ],
    fact: 'The Treaty of Sèvres (1920) proposed harsh terms against the Ottoman Empire, provoking widespread protests across Muslim India.',
    diff: 'Foundation'
  },
  {
    q: 'The Khilafat Movement mainly aimed to protect the position of the:',
    snip: 'Spiritual and political Islamic office.',
    options: [
      { text: 'Ottoman Caliph', isCorrect: true, expl: 'The primary goal was to preserve the territorial integrity of the Ottoman Caliphate and protect the sacred Islamic holy places in Hejaz.' },
      { text: 'British King', isCorrect: false, expl: 'The movement protested against British imperial policies.' },
      { text: 'Mughal Emperor', isCorrect: false, expl: 'The Mughal Empire ended in 1857.' },
      { text: 'Afghan Amir', isCorrect: false, expl: 'Amir of Afghanistan was an independent sovereign.' }
    ],
    fact: 'The Khilafat institution was ultimately abolished from within Turkey by Mustafa Kemal Atatürk in March 1924.',
    diff: 'Foundation'
  },
  {
    q: 'The Ali brothers associated with the Khilafat Movement were:',
    snip: 'Dynamic brothers who spearheaded the Khilafat agitation.',
    options: [
      { text: 'Muhammad Ali and Shaukat Ali', isCorrect: true, expl: 'Maulana Muhammad Ali Jauhar and Maulana Shaukat Ali (the Ali Brothers) were the charismatic leaders of the Khilafat Committee.' },
      { text: 'Jinnah and Liaquat Ali', isCorrect: false, expl: 'Jinnah and Liaquat led the constitutional struggle for Pakistan.' },
      { text: 'Iqbal and Hali', isCorrect: false, expl: 'Allama Iqbal and Altaf Hussain Hali were monumental poets.' },
      { text: 'Sir Syed and Mohsin-ul-Mulk', isCorrect: false, expl: 'They led the earlier Aligarh Movement.' }
    ],
    fact: 'Their mother, Abadi Bano Begum (popularly known as "Bi Amma"), actively addressed public rallies urging Muslims to join the movement.',
    diff: 'Foundation'
  },
  {
    q: 'Allama Iqbal became president of the Muslim League session at:',
    snip: 'Historic city of Iqbal\'s 1930 presidential address.',
    options: [
      { text: 'Allahabad', isCorrect: true, expl: 'Allama Muhammad Iqbal presided over the 21st annual session of the All-India Muslim League at Allahabad in December 1930.' },
      { text: 'Lahore', isCorrect: false, expl: 'Lahore hosted the 1940 session.' },
      { text: 'Delhi', isCorrect: false, expl: 'Delhi hosted the 1929 and 1946 sessions.' },
      { text: 'Karachi', isCorrect: false, expl: 'Karachi hosted the 1943 session.' }
    ],
    fact: 'The session took place at the historic Darbhanga Castle in Allahabad on 29–30 December 1930.',
    diff: 'Foundation'
  },
  {
    q: 'Iqbal delivered his famous Allahabad Address in:',
    snip: 'Year of Iqbal\'s ideological blueprint.',
    options: [
      { text: '1928', isCorrect: false, expl: '1928 was the Nehru Report.' },
      { text: '1930', isCorrect: true, expl: 'Allama Iqbal delivered his historic presidential address on 29 December 1930.' },
      { text: '1932', isCorrect: false, expl: '1932 was the Third Round Table Conference and Communal Award.' },
      { text: '1935', isCorrect: false, expl: '1935 was the Government of India Act.' }
    ],
    fact: 'Iqbal\'s address is considered the first clear intellectual and geopolitical articulation of a separate Muslim homeland in South Asia.',
    diff: 'Foundation'
  },
  {
    q: 'The Allahabad Address proposed the consolidation of Muslim-majority provinces in:',
    snip: 'Geographic region highlighted by Iqbal.',
    options: [
      { text: 'Northwestern India', isCorrect: true, expl: 'Iqbal proposed: "I would like to see the Punjab, North-West Frontier Province, Sind and Baluchistan amalgamated into a single State... self-government within the British Empire or without."' },
      { text: 'Southern India', isCorrect: false, expl: 'Southern India was largely non-Muslim majority except Hyderabad state.' },
      { text: 'Eastern Bengal only', isCorrect: false, expl: 'Iqbal specifically focused on amalgamating the northwestern provinces.' },
      { text: 'Central India', isCorrect: false, expl: 'Central Provinces were Hindu-majority.' }
    ],
    fact: 'Iqbal stated that the formation of a consolidated North-West Indian Muslim State appeared to be the "final destiny of the Muslims, at least of North-West India."',
    diff: 'Foundation'
  },
  {
    q: 'The Simon Commission arrived in India in:',
    snip: 'Year the statutory commission landed in Bombay.',
    options: [
      { text: '1927', isCorrect: false, expl: 'The commission was appointed by the British government in November 1927.' },
      { text: '1928', isCorrect: true, expl: 'The Simon Commission arrived in Bombay on 3 February 1928 to evaluate constitutional progress.' },
      { text: '1929', isCorrect: false, expl: '1929 was Jinnah\'s Fourteen Points.' },
      { text: '1930', isCorrect: false, expl: '1930 was the publication of the Simon Report.' }
    ],
    fact: 'The commission was formally known as the Indian Statutory Commission, headed by Sir John Simon.',
    diff: 'Foundation'
  },
  {
    q: 'The Simon Commission was opposed because:',
    snip: 'All-white composition controversy.',
    options: [
      { text: 'It had no Indian member', isCorrect: true, expl: 'It was boycotted by Congress, the Jinnah faction of Muslim League, and liberals because all seven members were British MPs with zero Indian representation.' },
      { text: 'It supported Pakistan', isCorrect: false, expl: 'It did not support a separate Pakistan.' },
      { text: 'It abolished elections', isCorrect: false, expl: 'It was reviewing electoral and administrative reforms.' },
      { text: 'It supported the Khilafat Movement', isCorrect: false, expl: 'Khilafat had ended by 1924.' }
    ],
    fact: 'Protesters met the commission across India carrying black flags and chanting the famous slogan "Simon, Go Back!".',
    diff: 'Foundation'
  },
  {
    q: 'The Nehru Report was published in:',
    snip: 'Year of Motilal Nehru\'s constitutional committee report.',
    options: [
      { text: '1927', isCorrect: false, expl: '1927 was when Lord Birkenhead challenged Indians to produce a constitution.' },
      { text: '1928', isCorrect: true, expl: 'The Nehru Report was drafted and published in August 1928 by an All-Parties Conference.' },
      { text: '1929', isCorrect: false, expl: '1929 was Jinnah\'s response (Fourteen Points).' },
      { text: '1930', isCorrect: false, expl: '1930 was the Allahabad Address.' }
    ],
    fact: 'The report rejected separate electorates and proposed a unitary constitution with a strong center, alarming Muslim leadership.',
    diff: 'Foundation'
  },
  {
    q: 'The Nehru Report was headed by:',
    snip: 'Chairman of the 1928 constitutional committee.',
    options: [
      { text: 'Motilal Nehru', isCorrect: true, expl: 'The committee was chaired by Pandit Motilal Nehru, a veteran Congress leader and lawyer (father of Jawaharlal Nehru).' },
      { text: 'Jawaharlal Nehru', isCorrect: false, expl: 'Jawaharlal Nehru served as the committee\'s secretary.' },
      { text: 'Mahatma Gandhi', isCorrect: false, expl: 'Gandhi supported the report from outside the drafting committee.' },
      { text: 'Muhammad Ali Jinnah', isCorrect: false, expl: 'Jinnah rejected the report for ignoring basic Muslim safeguards.' }
    ],
    fact: 'Sir Tej Bahadur Sapru, Ali Imam, and Subhas Chandra Bose were also members of the committee.',
    diff: 'Foundation'
  },
  {
    q: 'Jinnah responded to the Nehru Report with his:',
    snip: 'Historic 14-point constitutional charter.',
    options: [
      { text: 'Fourteen Points', isCorrect: true, expl: 'Quaid-e-Azam Muhammad Ali Jinnah formulated his famous "Fourteen Points" in March 1929 to present the minimum non-negotiable Muslim constitutional safeguards.' },
      { text: 'Fourteen Principles', isCorrect: false, expl: 'Not the historical title.' },
      { text: 'Fourteen Demands', isCorrect: false, expl: 'Known universally as Jinnah\'s Fourteen Points.' },
      { text: 'Fourteen Resolutions', isCorrect: false, expl: 'Not the official title.' }
    ],
    fact: 'Jinnah described the rejection of Muslim amendments to the Nehru Report at the Calcutta convention in December 1928 as the "parting of the ways".',
    diff: 'Foundation'
  },
  {
    q: 'Jinnah presented his Fourteen Points in:',
    snip: 'Month and year of presentation in Delhi.',
    options: [
      { text: '1928', isCorrect: false, expl: '1928 was the Nehru Report.' },
      { text: '1929', isCorrect: true, expl: 'Jinnah presented his Fourteen Points at the Delhi meeting of the All-India Muslim League council in March 1929.' },
      { text: '1930', isCorrect: false, expl: '1930 was Iqbal\'s Allahabad Address.' },
      { text: '1932', isCorrect: false, expl: '1932 was the Communal Award.' }
    ],
    fact: 'The Fourteen Points became the unified constitutional charter for all Muslim political groups in India throughout the 1930s.',
    diff: 'Foundation'
  },
  {
    q: 'One important demand in Jinnah\'s Fourteen Points was:',
    snip: 'Constitutional structure demand.',
    options: [
      { text: 'Federal constitution', isCorrect: true, expl: 'Point 1 demanded a federal constitution with residuary powers vested in the autonomous provinces, preventing central majoritarian dominance.' },
      { text: 'Abolition of provinces', isCorrect: false, expl: 'He demanded provincial autonomy, not abolition.' },
      { text: 'End of elections', isCorrect: false, expl: 'He championed robust democratic separate electorates.' },
      { text: 'One-party rule', isCorrect: false, expl: 'He stood firmly for constitutional parliamentary democracy.' }
    ],
    fact: 'He also demanded the separation of Sindh from Bombay Presidency and full provincial reforms in NWFP and Balochistan.',
    diff: 'Foundation'
  },
  {
    q: 'Jinnah\'s Fourteen Points emphasized the protection of:',
    snip: 'Core focus of Jinnah\'s 1929 charter.',
    options: [
      { text: 'Muslim political rights', isCorrect: true, expl: 'The Fourteen Points systematically safeguarded Muslim culture, religion, language, education, legislative weightage, and political representation.' },
      { text: 'British commercial interests only', isCorrect: false, expl: 'The charter was an indigenous constitutional defense for Indian Muslims.' },
      { text: 'Princely states only', isCorrect: false, expl: 'It addressed British Indian provinces and national governance.' },
      { text: 'European minorities only', isCorrect: false, expl: 'It protected Muslim and minority representation across India.' }
    ],
    fact: 'It included a statutory guarantee that no bill would pass any legislature if three-fourths of the minority community members objected to it.',
    diff: 'Foundation'
  },
  {
    q: 'The Round Table Conferences were held in:',
    snip: 'Imperial host city of the RTCs.',
    options: [
      { text: 'Delhi', isCorrect: false, expl: 'Delhi was the capital of British India.' },
      { text: 'London', isCorrect: true, expl: 'All three Round Table Conferences (1930, 1931, and 1932) were convened in London at St. James\'s Palace.' },
      { text: 'Lahore', isCorrect: false, expl: 'Lahore was in Punjab.' },
      { text: 'Bombay', isCorrect: false, expl: 'Bombay was the commercial hub.' }
    ],
    fact: 'British Prime Minister Ramsay MacDonald chaired the opening sessions of the Round Table Conferences.',
    diff: 'Foundation'
  },
  {
    q: 'The First Round Table Conference began in:',
    snip: 'Year of opening RTC session.',
    options: [
      { text: '1929', isCorrect: false, expl: '1929 was the Irwin Declaration.' },
      { text: '1930', isCorrect: true, expl: 'The First Round Table Conference opened on 12 November 1930 in London.' },
      { text: '1931', isCorrect: false, expl: '1931 was the Second Round Table Conference attended by Gandhi.' },
      { text: '1932', isCorrect: false, expl: '1932 was the Third Round Table Conference.' }
    ],
    fact: 'Congress boycotted the first conference due to its Civil Disobedience campaign, but Muslim League leaders actively participated.',
    diff: 'Foundation'
  },
  {
    q: 'Muhammad Ali Jinnah participated in the:',
    snip: 'High-level constitutional deliberations in London.',
    options: [
      { text: 'Round Table Conferences', isCorrect: true, expl: 'Quaid-e-Azam Muhammad Ali Jinnah participated in the First and Second Round Table Conferences in London, advocating federalism and minority protections.' },
      { text: 'Simla Deputation only', isCorrect: false, expl: 'Jinnah was not part of the 1906 Simla Deputation.' },
      { text: 'Partition of Bengal only', isCorrect: false, expl: 'He was not an organizer of the 1905 Bengal partition.' },
      { text: 'Khilafat Committee only', isCorrect: false, expl: 'Jinnah avoided direct Khilafat street agitation.' }
    ],
    fact: 'Jinnah chose to stay in London to practice law before the Privy Council following the conferences, returning permanently to India in 1934 to revitalize the Muslim League.',
    diff: 'Foundation'
  },

  // 551–575: From Muslim League to Pakistan
  {
    q: 'The Government of India Act 1935 provided for:',
    snip: 'Key feature of the 1935 constitutional statute.',
    options: [
      { text: 'Provincial autonomy', isCorrect: true, expl: 'The Government of India Act 1935 abolished dyarchy in the provinces and established full "Provincial Autonomy" with elected ministers heading all departments.' },
      { text: 'Immediate independence', isCorrect: false, expl: 'Independence came in 1947.' },
      { text: 'Creation of Pakistan', isCorrect: false, expl: 'Pakistan was created under the 1947 Indian Independence Act.' },
      { text: 'Abolition of provincial governments', isCorrect: false, expl: 'It greatly expanded provincial powers.' }
    ],
    fact: 'The 1935 Act was the longest Act of the British Parliament ever enacted up to that time, and served as the interim constitution of Pakistan until 1956.',
    diff: 'Foundation'
  },
  {
    q: 'The provincial elections under the Government of India Act 1935 were held in:',
    snip: 'Year of general provincial polling.',
    options: [
      { text: '1935', isCorrect: false, expl: '1935 was when the Act was passed.' },
      { text: '1936', isCorrect: false, expl: '1936 was the election preparation phase.' },
      { text: '1937', isCorrect: true, expl: 'Elections to the 11 provincial assemblies were held across British India in January–February 1937.' },
      { text: '1939', isCorrect: false, expl: '1939 was when Congress ministries resigned.' }
    ],
    fact: 'Over 30 million people were eligible to vote under the expanded property and educational franchise.',
    diff: 'Foundation'
  },
  {
    q: 'The Muslim League performed poorly in the:',
    snip: 'Election that motivated organizational reorganization.',
    options: [
      { text: '1937 provincial elections', isCorrect: true, expl: 'In the 1937 elections, the newly reorganized Muslim League won only 106 out of 482 Muslim-reserved seats due to fragmented regional parties.' },
      { text: '1945–46 elections', isCorrect: false, expl: 'In 1945–46, the Muslim League achieved a sweeping landslide victory.' },
      { text: '1930 elections', isCorrect: false, expl: 'No general provincial elections in 1930.' },
      { text: '1947 elections', isCorrect: false, expl: '1947 was independence.' }
    ],
    fact: 'This setback prompted Quaid-e-Azam to launch a massive grassroots campaign, transforming the Muslim League into a disciplined mass party within three years.',
    diff: 'Foundation'
  },
  {
    q: 'Congress ministries were formed in several provinces after the:',
    snip: 'Election that established Congress rule.',
    options: [
      { text: '1937 elections', isCorrect: true, expl: 'Following the 1937 elections, the Indian National Congress formed single-party ministries in 7 out of 11 provinces (later expanding to 8).' },
      { text: '1940 elections', isCorrect: false, expl: '1940 was the Lahore Resolution.' },
      { text: '1945 elections', isCorrect: false, expl: '1945–46 led to the Cabinet Mission.' },
      { text: '1946 elections', isCorrect: false, expl: '1946 was the post-war election.' }
    ],
    fact: 'Congress refused to form coalition cabinets with the Muslim League in UP and elsewhere unless the League dissolved its separate identity.',
    diff: 'Foundation'
  },
  {
    q: 'Congress ministries resigned in:',
    snip: 'Year Congress ministers left office.',
    options: [
      { text: '1937', isCorrect: false, expl: '1937 was when they took office.' },
      { text: '1939', isCorrect: true, expl: 'Congress ministries resigned in October–November 1939 in protest against Viceroy Linlithgow declaring India at war with Germany without consulting them.' },
      { text: '1940', isCorrect: false, expl: '1940 was the Lahore Resolution.' },
      { text: '1942', isCorrect: false, expl: '1942 was the Quit India Movement.' }
    ],
    fact: 'The 27-month rule of Congress ministries (1937–1939) caused severe Muslim grievances regarding the Pirpur Report, Wardha scheme, and Bande Mataram.',
    diff: 'Foundation'
  },
  {
    q: 'Muhammad Ali Jinnah observed the resignation of Congress ministries as:',
    snip: 'National commemoration of relief.',
    options: [
      { text: 'Day of Deliverance', isCorrect: true, expl: 'Quaid-e-Azam called upon Muslims across India to observe 22 December 1939 as the "Day of Deliverance and Thanksgiving" (Youm-e-Nijat).' },
      { text: 'Pakistan Day', isCorrect: false, expl: 'Pakistan Day is celebrated on 23 March (Lahore Resolution).' },
      { text: 'Direct Action Day', isCorrect: false, expl: 'Direct Action Day was observed on 16 August 1946.' },
      { text: 'Independence Day', isCorrect: false, expl: 'Independence Day is 14 August.' }
    ],
    fact: 'Other minority leaders, including Dr. B.R. Ambedkar and E.V. Ramasamy (Periyar), joined Jinnah in celebrating the Day of Deliverance.',
    diff: 'Foundation'
  },
  {
    q: 'The Day of Deliverance was observed on:',
    snip: 'Exact date in December 1939.',
    options: [
      { text: '22 December 1939', isCorrect: true, expl: 'The Day of Deliverance was observed with peaceful public rallies and thanksgiving prayers on Friday, 22 December 1939.' },
      { text: '23 March 1940', isCorrect: false, expl: '23 March 1940 was the passing of the Lahore Resolution.' },
      { text: '14 August 1940', isCorrect: false, expl: '14 August 1940 was during WWII.' },
      { text: '16 August 1946', isCorrect: false, expl: '16 August 1946 was Direct Action Day.' }
    ],
    fact: 'Jinnah stated the day was to celebrate relief from tyranny, oppression, and injustice without malice toward any community.',
    diff: 'Foundation'
  },
  {
    q: 'The Lahore Resolution was passed on:',
    snip: 'Historic date commemorated as Pakistan Day.',
    options: [
      { text: '14 August 1939', isCorrect: false, expl: '14 August is Independence Day.' },
      { text: '23 March 1940', isCorrect: true, expl: 'The Lahore Resolution was formally adopted at the 27th annual session of the All-India Muslim League on 23 March 1940.' },
      { text: '14 August 1940', isCorrect: false, expl: 'Not the resolution date.' },
      { text: '3 June 1947', isCorrect: false, expl: '3 June 1947 was the Mountbatten Partition Plan.' }
    ],
    fact: '23 March is celebrated every year throughout Pakistan as a national public holiday (Pakistan Day) featuring a grand armed forces parade.',
    diff: 'Foundation'
  },
  {
    q: 'The Lahore Resolution was passed at the annual session of the:',
    snip: 'Political party session.',
    options: [
      { text: 'All-India Muslim League', isCorrect: true, expl: 'It was passed unanimously at the 27th General Session of the All-India Muslim League presided over by Quaid-e-Azam Muhammad Ali Jinnah.' },
      { text: 'Indian National Congress', isCorrect: false, expl: 'Congress held its Ramgarh session around the same time.' },
      { text: 'Unionist Party', isCorrect: false, expl: 'Unionist Party was a regional Punjab party.' },
      { text: 'Khilafat Committee', isCorrect: false, expl: 'Khilafat Committee was no longer the primary political vehicle.' }
    ],
    fact: 'Over 100,000 delegates and visitors from all across British India gathered in Lahore for the three-day session (22–24 March 1940).',
    diff: 'Foundation'
  },
  {
    q: 'The Lahore Resolution was presented by:',
    snip: 'Premier of Bengal who moved the resolution.',
    options: [
      { text: 'A.K. Fazlul Huq', isCorrect: true, expl: 'Abul Kashem (A.K.) Fazlul Huq, known as "Sher-e-Bangal" (Tiger of Bengal) and Premier of Bengal, formally moved the Lahore Resolution.' },
      { text: 'Liaquat Ali Khan', isCorrect: false, expl: 'Liaquat Ali Khan was General Secretary of the AIML.' },
      { text: 'Allama Iqbal', isCorrect: false, expl: 'Allama Iqbal had passed away in April 1938.' },
      { text: 'Chaudhry Rahmat Ali', isCorrect: false, expl: 'Chaudhry Rahmat Ali coined the name "Pakistan" in Cambridge in 1933.' }
    ],
    fact: 'Chaudhry Khaliquzzaman of UP seconded the resolution on behalf of Muslims in the minority provinces.',
    diff: 'Foundation'
  },
  {
    q: 'The Lahore Resolution was passed in:',
    snip: 'City where the historic resolution was adopted.',
    options: [
      { text: 'Karachi', isCorrect: false, expl: 'Karachi was the capital of Sindh and later Pakistan\'s first capital.' },
      { text: 'Lahore', isCorrect: true, expl: 'The resolution was adopted in Lahore, the historic capital of Punjab.' },
      { text: 'Delhi', isCorrect: false, expl: 'Delhi was the imperial capital.' },
      { text: 'Dhaka', isCorrect: false, expl: 'Dhaka was where the Muslim League was founded in 1906.' }
    ],
    fact: 'The Minar-e-Pakistan monument was constructed on the exact site in Lahore where the resolution was passed.',
    diff: 'Foundation'
  },
  {
    q: 'The Lahore Resolution is popularly known as the:',
    snip: 'Universal popular title of the 1940 resolution.',
    options: [
      { text: 'Pakistan Resolution', isCorrect: true, expl: 'The Lahore Resolution became universally known as the "Pakistan Resolution" (Qarardad-e-Pakistan).' },
      { text: 'Delhi Resolution', isCorrect: false, expl: 'The Delhi Resolution was passed by Muslim League legislators in April 1946.' },
      { text: 'Muslim Resolution', isCorrect: false, expl: 'Not the historical title.' },
      { text: 'Independence Resolution', isCorrect: false, expl: 'Popularly and officially termed Pakistan Resolution.' }
    ],
    fact: 'The Hindu press initially labeled it "Pakistan Resolution" derisively, but Quaid-e-Azam and the Muslim League proudly adopted the name.',
    diff: 'Foundation'
  },
  {
    q: 'The Lahore Resolution called for:',
    snip: 'Core constitutional operative clause.',
    options: [
      { text: 'Independent states in Muslim-majority areas', isCorrect: true, expl: 'The resolution demanded that geographically contiguous units be demarcated into regions where Muslims are numerically in a majority, as in the North-Western and Eastern Zones of India, to constitute "Independent States".' },
      { text: 'A unitary Indian government', isCorrect: false, expl: 'It categorically rejected a unitary Indian federation.' },
      { text: 'Abolition of provinces', isCorrect: false, expl: 'It called for autonomous sovereign constituent units.' },
      { text: 'British rule indefinitely', isCorrect: false, expl: 'It demanded sovereignty and end of colonial subjugation.' }
    ],
    fact: 'The operative text was later clarified at the Delhi Legislators\' Convention in April 1946 to specify a single sovereign state of Pakistan.',
    diff: 'Foundation'
  },
  {
    q: 'The Lahore Resolution was passed at:',
    snip: 'Park ground in Lahore.',
    options: [
      { text: 'Minto Park', isCorrect: true, expl: 'The 1940 session was held in the vast grounds of Minto Park in Lahore, adjacent to the Badshahi Mosque and Lahore Fort.' },
      { text: 'Mochi Gate', isCorrect: false, expl: 'Mochi Gate was a famous venue for political rallies in the Walled City.' },
      { text: 'Iqbal Park only', isCorrect: false, expl: 'It was known as Minto Park in 1940 (renamed Iqbal Park post-independence).' },
      { text: 'Badshahi Mosque', isCorrect: false, expl: 'Badshahi Mosque is a historic place of worship adjacent to the park.' }
    ],
    fact: 'The huge tented pandal at Minto Park accommodated over 100,000 enthusiastic participants.',
    diff: 'Foundation'
  },
  {
    q: 'Minto Park is now known as:',
    snip: 'Modern name of the historical park.',
    options: [
      { text: 'Iqbal Park', isCorrect: true, expl: 'Minto Park was renamed Greater Iqbal Park in honor of Allama Muhammad Iqbal.' },
      { text: 'Jinnah Park', isCorrect: false, expl: 'Jinnah Park is in Rawalpindi and other cities.' },
      { text: 'Quaid Park', isCorrect: false, expl: 'Not the official name of this park.' },
      { text: 'Pakistan Park', isCorrect: false, expl: 'Not the official name.' }
    ],
    fact: 'Greater Iqbal Park houses the towering Minar-e-Pakistan and the National History Museum.',
    diff: 'Foundation'
  },
  {
    q: 'The Cripps Mission came to India in:',
    snip: 'Year of Sir Stafford Cripps\'s wartime mission.',
    options: [
      { text: '1940', isCorrect: false, expl: '1940 was the August Offer and Lahore Resolution.' },
      { text: '1942', isCorrect: true, expl: 'The Cripps Mission arrived in Delhi in late March 1942 during the height of World War II.' },
      { text: '1944', isCorrect: false, expl: '1944 was the Gandhi-Jinnah talks.' },
      { text: '1945', isCorrect: false, expl: '1945 was the Simla Conference.' }
    ],
    fact: 'British Prime Minister Winston Churchill dispatched the mission to secure Indian war cooperation against Japanese forces advancing in Burma.',
    diff: 'Foundation'
  },
  {
    q: 'The Cripps Mission was headed by:',
    snip: 'Senior British Cabinet member.',
    options: [
      { text: 'Sir Stafford Cripps', isCorrect: true, expl: 'Sir Stafford Cripps, a senior socialist member of the British War Cabinet and Lord Privy Seal, headed the mission.' },
      { text: 'Lord Mountbatten', isCorrect: false, expl: 'Mountbatten was Supreme Allied Commander South East Asia in 1942.' },
      { text: 'Lord Wavell', isCorrect: false, expl: 'Wavell was Commander-in-Chief in India in 1942.' },
      { text: 'Lord Linlithgow', isCorrect: false, expl: 'Linlithgow was the Viceroy of India.' }
    ],
    fact: 'Sir Stafford Cripps was a close personal friend of Jawaharlal Nehru but failed to reconcile Congress and League demands.',
    diff: 'Foundation'
  },
  {
    q: 'The Cripps proposals were rejected by the Muslim League mainly because they did not adequately provide for:',
    snip: 'Core reason for League rejection.',
    options: [
      { text: 'Pakistan', isCorrect: true, expl: 'The Muslim League rejected the Cripps proposals because they did not explicitly concede the creation of Pakistan and relegated self-determination to a complex post-war provincial non-accession procedure.' },
      { text: 'Provincial elections', isCorrect: false, expl: 'Elections were already planned.' },
      { text: 'Muslim education', isCorrect: false, expl: 'Educational issues were not the primary constitutional dispute.' },
      { text: 'Separate electorates', isCorrect: false, expl: 'Separate electorates were not the main issue; sovereign statehood was.' }
    ],
    fact: 'Congress also rejected the offer, with Gandhi famously describing it as a "post-dated cheque on a crashing bank".',
    diff: 'Foundation'
  },
  {
    q: 'The Gandhi-Jinnah talks took place in:',
    snip: 'Year of bilateral talks at Jinnah\'s Bombay residence.',
    options: [
      { text: '1942', isCorrect: false, expl: '1942 was Cripps Mission and Quit India.' },
      { text: '1944', isCorrect: true, expl: 'The Gandhi-Jinnah talks were held from 9 to 27 September 1944 at Quaid-e-Azam\'s residence on Mount Pleasant Road, Malabar Hill, Bombay.' },
      { text: '1945', isCorrect: false, expl: '1945 was Simla Conference.' },
      { text: '1946', isCorrect: false, expl: '1946 was Cabinet Mission.' }
    ],
    fact: 'The talks were held based on the C.R. Formula (devised by C. Rajagopalachari), but broke down over Gandhi\'s refusal to recognize Muslims as a separate nation.',
    diff: 'Foundation'
  },
  {
    q: 'The Wavell Plan was announced in:',
    snip: 'Year of Viceroy Wavell\'s executive council plan.',
    options: [
      { text: '1942', isCorrect: false, expl: '1942 was Cripps Mission.' },
      { text: '1944', isCorrect: false, expl: '1944 was Gandhi-Jinnah talks.' },
      { text: '1945', isCorrect: true, expl: 'Viceroy Lord Wavell announced his plan on 14 June 1945 to reconstitute the Viceroy\'s Executive Council with Indian leaders.' },
      { text: '1946', isCorrect: false, expl: '1946 was Cabinet Mission.' }
    ],
    fact: 'The plan proposed equal representation for Caste Hindus and Muslims in the newly reconstituted Executive Council.',
    diff: 'Foundation'
  },
  {
    q: 'The Simla Conference associated with the Wavell Plan was held in:',
    snip: 'Year of the Simla Conference.',
    options: [
      { text: '1940', isCorrect: false, expl: '1940 was Lahore Resolution.' },
      { text: '1942', isCorrect: false, expl: '1942 was Cripps Mission.' },
      { text: '1945', isCorrect: true, expl: 'The Simla Conference took place from 25 June to 14 July 1945 at the Viceregal Lodge in Simla.' },
      { text: '1947', isCorrect: false, expl: '1947 was the year of independence.' }
    ],
    fact: 'The conference failed because Jinnah insisted that the Muslim League had the exclusive right to nominate all 5 Muslim members of the Executive Council, which Congress and Unionists opposed.',
    diff: 'Foundation'
  },
  {
    q: 'The Cabinet Mission came to India in:',
    snip: 'Year of the British Cabinet delegation.',
    options: [
      { text: '1945', isCorrect: false, expl: '1945 was Simla Conference and end of WWII.' },
      { text: '1946', isCorrect: true, expl: 'The Cabinet Mission arrived in New Delhi on 24 March 1946.' },
      { text: '1947', isCorrect: false, expl: '1947 was Lord Mountbatten and independence.' },
      { text: '1948', isCorrect: false, expl: '1948 was after Pakistan\'s creation.' }
    ],
    fact: 'The mission was sent by the newly elected British Labour government under Prime Minister Clement Attlee.',
    diff: 'Foundation'
  },
  {
    q: 'The Cabinet Mission consisted of:',
    snip: 'Composition of the British delegation.',
    options: [
      { text: 'Three British ministers', isCorrect: true, expl: 'The mission consisted of three senior British Cabinet ministers: Lord Pethick-Lawrence (Secretary of State for India), Sir Stafford Cripps (President of the Board of Trade), and A.V. Alexander (First Lord of the Admiralty).' },
      { text: 'Two British ministers', isCorrect: false, expl: 'There were three Cabinet ministers.' },
      { text: 'Four Indian leaders', isCorrect: false, expl: 'It was an all-British Cabinet mission.' },
      { text: 'Five British officials', isCorrect: false, expl: 'It comprised three ministers.' }
    ],
    fact: 'Lord Pethick-Lawrence acted as the official head and spokesman of the three-member delegation.',
    diff: 'Foundation'
  },
  {
    q: 'The Cabinet Mission proposed a:',
    snip: 'Three-tier constitutional grouping plan.',
    options: [
      { text: 'Union of India with grouped provinces', isCorrect: true, expl: 'The Cabinet Mission proposed a three-tier loose Indian Union (controlling Defense, Foreign Affairs, and Communications) with provinces grouped into three autonomous sections (A, B, and C).' },
      { text: 'Completely independent Pakistan immediately', isCorrect: false, expl: 'The mission rejected a fully independent sovereign Pakistan in its original proposal.' },
      { text: 'Unitary Pakistan', isCorrect: false, expl: 'It proposed a federal grouping plan for undivided India.' },
      { text: 'Separate Bengal only', isCorrect: false, expl: 'It provided for groups: Group A (Hindu-majority), Group B (North-West Muslim), and Group C (Bengal and Assam).' }
    ],
    fact: 'Sections B and C would have had Muslim majorities with powers to frame provincial constitutions and potentially reconsider their union affiliation after 10 years.',
    diff: 'Foundation'
  },
  {
    q: 'The Muslim League accepted the Cabinet Mission Plan initially in:',
    snip: 'Year the League approved the grouping plan.',
    options: [
      { text: '1945', isCorrect: false, expl: '1945 was Simla Conference.' },
      { text: '1946', isCorrect: true, expl: 'The Muslim League Council formally accepted the Cabinet Mission Plan on 6 June 1946 because the compulsory grouping contained the embryonic basis of Pakistan.' },
      { text: '1947', isCorrect: false, expl: '1947 was the 3 June Plan.' },
      { text: '1948', isCorrect: false, expl: '1948 was post-independence.' }
    ],
    fact: 'The League later revoked its acceptance on 29 July 1946 after Jawaharlal Nehru declared in Bombay that Congress would enter the Constituent Assembly unconstrained by any grouping rules.',
    diff: 'Foundation'
  },

  // 576–600: Final Road to Independence
  {
    q: 'Direct Action Day was observed by the Muslim League on:',
    snip: 'Date of nationwide Muslim political mobilization in 1946.',
    options: [
      { text: '16 August 1946', isCorrect: true, expl: 'The Muslim League observed "Direct Action Day" on Friday, 16 August 1946 across India.' },
      { text: '23 March 1940', isCorrect: false, expl: '23 March 1940 was the Lahore Resolution.' },
      { text: '3 June 1947', isCorrect: false, expl: '3 June 1947 was the announcement of the Partition Plan.' },
      { text: '14 August 1947', isCorrect: false, expl: '14 August 1947 was Independence Day.' }
    ],
    fact: 'Jinnah stated: "Today we have forged a pistol and are in a position to use it," renouncing British constitutionalism after Congress\'s unilateral rejection of the grouping clause.',
    diff: 'Foundation'
  },
  {
    q: 'Direct Action Day was called to demonstrate support for:',
    snip: 'Core objective of the mobilization.',
    options: [
      { text: 'The demand for Pakistan', isCorrect: true, expl: 'Direct Action Day was called to demonstrate the resolute, unshakeable Muslim demand for an independent Pakistan and protest British-Congress collusion.' },
      { text: 'The Simon Commission', isCorrect: false, expl: 'Simon Commission was in 1928.' },
      { text: 'The Cripps Mission', isCorrect: false, expl: 'Cripps Mission was in 1942.' },
      { text: 'The Nehru Report', isCorrect: false, expl: 'Nehru Report was in 1928.' }
    ],
    fact: 'Muslim League leaders renounced all British titles (such as Sir, Khan Bahadur, and Nawab) as part of Direct Action.',
    diff: 'Foundation'
  },
  {
    q: 'The 1945–46 elections were important because they demonstrated:',
    snip: 'Democratic mandate for Pakistan.',
    options: [
      { text: 'Strong Muslim League support among Muslim voters', isCorrect: true, expl: 'The elections served as an overwhelming plebiscite on Pakistan, proving that the Muslim League was the sole legitimate representative of Indian Muslims.' },
      { text: 'Complete Congress victory among Muslims', isCorrect: false, expl: 'Congress failed to win Muslim seats, securing only non-Muslim general seats.' },
      { text: 'End of Muslim League', isCorrect: false, expl: 'It established the Muslim League at the peak of its popular mandate.' },
      { text: 'British withdrawal immediately', isCorrect: false, expl: 'The elections preceded the final transfer of power.' }
    ],
    fact: 'The League fought the 1945–46 elections on a single-point manifesto: "Pakistan is our goal, and Muslim League is our sole representative."',
    diff: 'Foundation'
  },
  {
    q: 'The Muslim League won the vast majority of:',
    snip: 'Electoral clean-sweep category in 1945–46.',
    options: [
      { text: 'Muslim-reserved seats', isCorrect: true, expl: 'The Muslim League won 100% of all Muslim seats in the Central Legislative Assembly (30 out of 30) and roughly 87% of Muslim seats in provincial assemblies (446 out of 495).' },
      { text: 'European seats', isCorrect: false, expl: 'European seats were reserved for British nationals.' },
      { text: 'Sikh seats', isCorrect: false, expl: 'Sikh seats were contested by the Akali Dal and Congress.' },
      { text: 'Anglo-Indian seats', isCorrect: false, expl: 'Anglo-Indian seats were for the Anglo-Indian community.' }
    ],
    fact: 'This decisive democratic triumph made the partition of India and the establishment of Pakistan inevitable.',
    diff: 'Foundation'
  },
  {
    q: 'Lord Mountbatten became the last:',
    snip: 'Official imperial title of Lord Mountbatten.',
    options: [
      { text: 'Viceroy of British India', isCorrect: true, expl: 'Rear-Admiral Lord Louis Mountbatten was appointed as the 20th and final Viceroy and Governor-General of British India (March–August 1947).' },
      { text: 'Governor-General of Pakistan', isCorrect: false, expl: 'Quaid-e-Azam Muhammad Ali Jinnah became Pakistan\'s first Governor-General.' },
      { text: 'Prime Minister of India', isCorrect: false, expl: 'Jawaharlal Nehru became Prime Minister of India.' },
      { text: 'Secretary of State for India', isCorrect: false, expl: 'Lord Listowel was the last Secretary of State for India.' }
    ],
    fact: 'Mountbatten later served as the first Governor-General of the Dominion of India from August 1947 to June 1948.',
    diff: 'Foundation'
  },
  {
    q: 'Lord Mountbatten arrived in India in:',
    snip: 'Month and year Mountbatten took charge.',
    options: [
      { text: 'February 1947', isCorrect: false, expl: 'Prime Minister Attlee announced Mountbatten\'s appointment on 20 February 1947.' },
      { text: 'March 1947', isCorrect: true, expl: 'Lord Mountbatten arrived in New Delhi on 22 March 1947 and was sworn in as Viceroy on 24 March 1947.' },
      { text: 'April 1947', isCorrect: false, expl: 'In April 1947, he held intensive consultations with Jinnah, Gandhi, and Nehru.' },
      { text: 'June 1947', isCorrect: false, expl: 'June 1947 was the announcement of the 3 June Plan.' }
    ],
    fact: 'Mountbatten expedited the British departure date from June 1948 to August 1947, accelerating the timeline by ten months.',
    diff: 'Foundation'
  },
  {
    q: 'The 3 June Plan was announced in:',
    snip: 'Year of the Mountbatten Partition Plan announcement.',
    options: [
      { text: '1945', isCorrect: false, expl: '1945 was Simla Conference.' },
      { text: '1946', isCorrect: false, expl: '1946 was Cabinet Mission.' },
      { text: '1947', isCorrect: true, expl: 'The historic 3 June Plan (Mountbatten Plan) was announced on 3 June 1947 via All India Radio broadcasts by Mountbatten, Nehru, Jinnah, and Baldev Singh.' },
      { text: '1948', isCorrect: false, expl: '1948 was post-independence.' }
    ],
    fact: 'Quaid-e-Azam concluded his famous radio address on 3 June 1947 with the iconic rallying cry: "Pakistan Zindabad!".',
    diff: 'Foundation'
  },
  {
    q: 'The 3 June Plan provided for:',
    snip: 'Core constitutional principle of the plan.',
    options: [
      { text: 'Partition of British India', isCorrect: true, expl: 'The 3 June Plan laid out the concrete mechanism for the partition of British India into two independent dominions (Pakistan and India) and the division of Punjab and Bengal.' },
      { text: 'Continuation of British rule', isCorrect: false, expl: 'It provided for full British withdrawal.' },
      { text: 'Abolition of provinces', isCorrect: false, expl: 'Provinces chose their dominion through assembly voting or referendums.' },
      { text: 'Merger with Afghanistan', isCorrect: false, expl: 'Merger with neighboring states was never part of the plan.' }
    ],
    fact: 'The legislative assemblies of Punjab and Bengal voted in June 1947 in favor of dividing their respective provinces.',
    diff: 'Foundation'
  },
  {
    q: 'The Indian Independence Act was passed by the British Parliament in:',
    snip: 'Month and year of royal assent.',
    options: [
      { text: 'June 1947', isCorrect: false, expl: 'June 1947 was the 3 June Plan.' },
      { text: 'July 1947', isCorrect: true, expl: 'The Indian Independence Act 1947 was passed by the British Parliament and received Royal Assent from King George VI on 18 July 1947.' },
      { text: 'August 1947', isCorrect: false, expl: 'August 1947 was the actual date of independence.' },
      { text: 'September 1947', isCorrect: false, expl: 'September 1947 was post-independence.' }
    ],
    fact: 'The Bill was introduced in the House of Commons on 4 July 1947 and passed through both Houses of Parliament in just a fortnight without any opposition.',
    diff: 'Foundation'
  },
  {
    q: 'The Indian Independence Act created:',
    snip: 'Number of sovereign entities established.',
    options: [
      { text: 'Two independent dominions', isCorrect: true, expl: 'Section 1 of the Act explicitly stipulated: "As from the fifteenth day of August, nineteen hundred and forty-seven, two independent Dominions shall be set up in India, to be known respectively as India and Pakistan."' },
      { text: 'Three independent states', isCorrect: false, expl: 'Two dominions were created.' },
      { text: 'One federation', isCorrect: false, expl: 'The Act partitioned the territory into two.' },
      { text: 'Four dominions', isCorrect: false, expl: 'Only two dominions were established.' }
    ],
    fact: 'The Act terminated the suzerainty of the British Crown over the 565 Princely States, returning paramountcy to the rulers to accede to either dominion.',
    diff: 'Foundation'
  },
  {
    q: 'The two dominions created by the Indian Independence Act were:',
    snip: 'Names of the two independent nations.',
    options: [
      { text: 'Pakistan and India', isCorrect: true, expl: 'The Act partitioned British India into the sovereign Dominions of Pakistan and India.' },
      { text: 'Pakistan and Bangladesh', isCorrect: false, expl: 'East Bengal was created as East Pakistan in 1947 (becoming Bangladesh in 1971).' },
      { text: 'India and Nepal', isCorrect: false, expl: 'Nepal was an independent kingdom throughout.' },
      { text: 'Pakistan and Afghanistan', isCorrect: false, expl: 'Afghanistan was an independent sovereign nation.' }
    ],
    fact: 'Pakistan comprised two geographic wings: West Pakistan (Punjab, Sindh, NWFP, Balochistan) and East Pakistan (East Bengal and Sylhet), separated by over 1,000 miles of Indian territory.',
    diff: 'Foundation'
  },
  {
    q: 'Pakistan came into existence on:',
    snip: 'Independence Day of Pakistan.',
    options: [
      { text: '23 March 1940', isCorrect: false, expl: '23 March 1940 was the passing of the Lahore Resolution.' },
      { text: '14 August 1947', isCorrect: true, expl: 'Pakistan emerged on the world map as an independent sovereign nation on 14 August 1947 (corresponding to 27th Ramadan 1366 AH, Laylat al-Qadr).' },
      { text: '15 August 1947', isCorrect: false, expl: '15 August 1947 was India\'s independence day; Pakistan marks 14 August as its national Independence Day.' },
      { text: '3 June 1947', isCorrect: false, expl: '3 June 1947 was the announcement of the Mountbatten Plan.' }
    ],
    fact: 'Lord Mountbatten addressed the Constituent Assembly in Karachi on 13–14 August 1947 to formally transfer sovereign power to Pakistan.',
    diff: 'Foundation'
  },
  {
    q: "Pakistan's first Governor-General was:",
    snip: 'Father of the Nation and first Head of State.',
    options: [
      { text: 'Liaquat Ali Khan', isCorrect: false, expl: 'Liaquat Ali Khan was Pakistan\'s first Prime Minister.' },
      { text: 'Muhammad Ali Jinnah', isCorrect: true, expl: 'Quaid-e-Azam Muhammad Ali Jinnah took the oath of office as the first Governor-General of Pakistan on 15 August 1947, administered by Chief Justice Sir Abdul Rashid.' },
      { text: 'Khawaja Nazimuddin', isCorrect: false, expl: 'Khawaja Nazimuddin became the second Governor-General in September 1948 upon Jinnah\'s passing.' },
      { text: 'Iskander Mirza', isCorrect: false, expl: 'Iskander Mirza became the fourth Governor-General (and first President) in 1955–56.' }
    ],
    fact: 'Jinnah served as Governor-General until his demise on 11 September 1948.',
    diff: 'Foundation'
  },
  {
    q: "Pakistan's first Prime Minister was:",
    snip: 'Shaheed-e-Millat and first Head of Government.',
    options: [
      { text: 'Liaquat Ali Khan', isCorrect: true, expl: 'Nawabzada Liaquat Ali Khan (1895–1951), Jinnah\'s most trusted lieutenant, served as the first Prime Minister of Pakistan.' },
      { text: 'Muhammad Ali Jinnah', isCorrect: false, expl: 'Jinnah was the Governor-General (Head of State).' },
      { text: 'Khawaja Nazimuddin', isCorrect: false, expl: 'Nazimuddin became Prime Minister in 1951 following Liaquat\'s assassination.' },
      { text: 'Ayub Khan', isCorrect: false, expl: 'General Ayub Khan became President in 1958.' }
    ],
    fact: 'Liaquat Ali Khan moved the historic Objectives Resolution in the Constituent Assembly on 7 March 1949, laying the constitutional foundations of Pakistan.',
    diff: 'Foundation'
  },
  {
    q: "Pakistan's first Constituent Assembly met for its inaugural session in:",
    snip: 'First capital city host.',
    options: [
      { text: 'Karachi', isCorrect: true, expl: 'The Constituent Assembly of Pakistan held its inaugural session from 10 to 14 August 1947 at the Sindh Assembly Building in Karachi.' },
      { text: 'Lahore', isCorrect: false, expl: 'Lahore was the Punjab provincial capital.' },
      { text: 'Islamabad', isCorrect: false, expl: 'Islamabad was built in the 1960s as the new federal capital.' },
      { text: 'Rawalpindi', isCorrect: false, expl: 'Rawalpindi served as interim capital from 1959 to 1969.' }
    ],
    fact: 'Jogendra Nath Mandal, a prominent Dalit Hindu leader from East Bengal, chaired the opening inaugural meeting on 10 August 1947.',
    diff: 'Foundation'
  },
  {
    q: 'Muhammad Ali Jinnah was elected president of Pakistan\'s first Constituent Assembly in:',
    snip: 'Month and year of election.',
    options: [
      { text: 'August 1947', isCorrect: true, expl: 'Quaid-e-Azam Muhammad Ali Jinnah was unanimously elected President of the Constituent Assembly of Pakistan on 11 August 1947.' },
      { text: 'September 1947', isCorrect: false, expl: 'September 1947 was after the assembly had begun constitutional drafting.' },
      { text: 'March 1948', isCorrect: false, expl: 'March 1948 was seven months later.' },
      { text: 'August 1948', isCorrect: false, expl: 'August 1948 was shortly before Jinnah\'s passing.' }
    ],
    fact: 'On the same day (11 August 1947), the Constituent Assembly formally approved the national flag of Pakistan designed by Amiruddin Kidwai.',
    diff: 'Foundation'
  },
  {
    q: 'Jinnah delivered his famous address to the Constituent Assembly on:',
    snip: 'Historic keynote speech on equality, tolerance, and religious freedom.',
    options: [
      { text: '11 August 1947', isCorrect: true, expl: 'Jinnah delivered his landmark presidential address on 11 August 1947, declaring: "You are free; you are free to go to your temples, you are free to go to your mosques or to any other place of worship in this State of Pakistan."' },
      { text: '14 August 1947', isCorrect: false, expl: '14 August was the independence ceremony with Mountbatten.' },
      { text: '23 March 1948', isCorrect: false, expl: '23 March is Pakistan Day.' },
      { text: '25 December 1947', isCorrect: false, expl: '25 December was Jinnah\'s 71st birthday.' }
    ],
    fact: 'He emphasized: "You may belong to any religion, caste or creed — that has nothing to do with the business of the State."',
    diff: 'Foundation'
  },
  {
    q: 'The Radcliffe Commission was responsible for:',
    snip: 'Mandate of the boundary demarcation body.',
    options: [
      { text: 'Delimiting the boundary between India and Pakistan', isCorrect: true, expl: 'The Radcliffe Commission was tasked with drawing the international international border separating India and Pakistan through Punjab and Bengal.' },
      { text: 'Writing Pakistan\'s constitution', isCorrect: false, expl: 'The Constituent Assembly was responsible for constitution writing.' },
      { text: 'Conducting elections', isCorrect: false, expl: 'Elections are conducted by Election Commissions.' },
      { text: 'Establishing the Muslim League', isCorrect: false, expl: 'The Muslim League was established in 1906.' }
    ],
    fact: 'Two separate Boundary Commissions were formed for Punjab and Bengal, each consisting of four high court judges (two Muslim and two non-Muslim) headed by Radcliffe.',
    diff: 'Foundation'
  },
  {
    q: 'Sir Cyril Radcliffe was appointed chairman of the:',
    snip: 'Boundary demarcation commissions.',
    options: [
      { text: 'Boundary Commissions', isCorrect: true, expl: 'Sir Cyril Radcliffe, a leading British barrister who had never visited India prior to his appointment, was named Chairman of both the Punjab and Bengal Boundary Commissions.' },
      { text: 'Cabinet Mission', isCorrect: false, expl: 'Lord Pethick-Lawrence headed the Cabinet Mission.' },
      { text: 'Simon Commission', isCorrect: false, expl: 'Sir John Simon headed the Simon Commission.' },
      { text: 'Wavell Plan', isCorrect: false, expl: 'Lord Wavell formulated the Wavell Plan.' }
    ],
    fact: 'Radcliffe completed the boundary demarcation for over 450,000 square kilometers of territory in just five weeks.',
    diff: 'Foundation'
  },
  {
    q: 'The Radcliffe Award was announced in:',
    snip: 'Month and year the border maps were officially published.',
    options: [
      { text: 'July 1947', isCorrect: false, expl: 'July 1947 was the passing of the Indian Independence Act.' },
      { text: 'August 1947', isCorrect: true, expl: 'The Radcliffe Award was completed on 12 August 1947 and officially made public on 17 August 1947, three days after independence.' },
      { text: 'September 1947', isCorrect: false, expl: 'September 1947 was after the border announcement.' },
      { text: 'October 1947', isCorrect: false, expl: 'October 1947 was when the Kashmir conflict began.' }
    ],
    fact: 'Controversial awards—such as awarding Muslim-majority Gurdaspur tehsils and Ferozepur headworks to India—provoked widespread controversy and created the Kashmir land link.',
    diff: 'Foundation'
  },
  {
    q: "Pakistan's first national capital was:",
    snip: 'First capital metropolis of Pakistan.',
    options: [
      { text: 'Lahore', isCorrect: false, expl: 'Lahore is the cultural hub and provincial capital of Punjab.' },
      { text: 'Karachi', isCorrect: true, expl: 'Karachi was selected by Quaid-e-Azam as the first federal capital of Pakistan (1947–1959).' },
      { text: 'Islamabad', isCorrect: false, expl: 'Islamabad became the permanent capital in the 1960s.' },
      { text: 'Rawalpindi', isCorrect: false, expl: 'Rawalpindi served as interim capital (1959–1969) while Islamabad was under construction.' }
    ],
    fact: 'Karachi was chosen because of its major seaport, international airport, commercial infrastructure, and status as Jinnah\'s birthplace.',
    diff: 'Foundation'
  },
  {
    q: 'The Pakistan Resolution was presented by:',
    snip: 'Bengal leader who moved the 1940 resolution.',
    options: [
      { text: 'A.K. Fazlul Huq', isCorrect: true, expl: 'A.K. Fazlul Huq (Sher-e-Bangal), the sitting Premier of Bengal, formally presented the Lahore Resolution on 23 March 1940.' },
      { text: 'Muhammad Ali Jinnah', isCorrect: false, expl: 'Jinnah presided over the session and delivered the historic presidential address.' },
      { text: 'Liaquat Ali Khan', isCorrect: false, expl: 'Liaquat Ali Khan was the General Secretary of the AIML.' },
      { text: 'Allama Iqbal', isCorrect: false, expl: 'Allama Iqbal had passed away in 1938.' }
    ],
    fact: 'Fazlul Huq was celebrated for his thunderous oratory in English and Urdu that captivated the 100,000-strong gathering in Lahore.',
    diff: 'Foundation'
  },
  {
    q: 'The political party that led the demand for Pakistan was:',
    snip: 'National political party that spearheaded the movement.',
    options: [
      { text: 'Indian National Congress', isCorrect: false, expl: 'Congress campaigned for a united, centralized India.' },
      { text: 'All-India Muslim League', isCorrect: true, expl: 'The All-India Muslim League (AIML), led by Quaid-e-Azam Muhammad Ali Jinnah, was the vanguard political party that led and won the struggle for Pakistan.' },
      { text: 'Unionist Party', isCorrect: false, expl: 'The Unionist Party opposed partition in Punjab until its collapse in 1946.' },
      { text: 'Khaksar Movement', isCorrect: false, expl: 'Khaksars were a paramilitary social movement led by Inayatullah Mashriqi.' }
    ],
    fact: 'The All-India Muslim League was founded on 30 December 1906 in Dhaka and achieved its supreme goal with the creation of Pakistan in August 1947.',
    diff: 'Foundation'
  },
  {
    q: 'The main political leader of the Pakistan Movement was:',
    snip: 'Supreme leader and Quaid-e-Azam of the nation.',
    options: [
      { text: 'Muhammad Ali Jinnah', isCorrect: true, expl: 'Quaid-e-Azam ("Great Leader") Muhammad Ali Jinnah (1876–1948) was the undisputed supreme leader and founding father of Pakistan.' },
      { text: 'Mahatma Gandhi', isCorrect: false, expl: 'Mahatma Gandhi was the supreme leader of the Indian National Congress.' },
      { text: 'Jawaharlal Nehru', isCorrect: false, expl: 'Jawaharlal Nehru became the first Prime Minister of India.' },
      { text: 'Lord Mountbatten', isCorrect: false, expl: 'Lord Mountbatten was the British Viceroy.' }
    ],
    fact: 'Biographer Stanley Wolpert wrote: "Few individuals significantly alter the course of history. Fewer still modify the map of the world. Hardly anyone can be credited with creating a nation-state. Mohammad Ali Jinnah did all three."',
    diff: 'Foundation'
  },
  {
    q: 'The Pakistan Movement ultimately resulted in the creation of Pakistan in:',
    snip: 'Historic year of birth of Pakistan.',
    options: [
      { text: '1940', isCorrect: false, expl: '1940 was when the Pakistan Resolution was passed in Lahore.' },
      { text: '1945', isCorrect: false, expl: '1945 was the end of WWII and Simla Conference.' },
      { text: '1947', isCorrect: true, expl: 'The Pakistan Movement culminated successfully in the birth of the sovereign Dominion of Pakistan on 14 August 1947.' },
      { text: '1956', isCorrect: false, expl: '1956 was when Pakistan adopted its first constitution, becoming the Islamic Republic of Pakistan.' }
    ],
    fact: 'Pakistan emerged in 1947 as the world\'s largest Muslim nation and the fifth most populous country globally at the time of its independence.',
    diff: 'Foundation'
  }
];

export function buildMovementQuestions(): QuizQuestion[] {
  const result: QuizQuestion[] = [];
  const startId = 501;

  for (let i = 0; i < exactMovementRaw.length; i++) {
    const item = exactMovementRaw[i];
    const qId = startId + i;

    const options = item.options.map((opt, idx) => ({
      id: String.fromCharCode(65 + idx),
      text: opt.text,
      isCorrect: opt.isCorrect,
      explanation: opt.expl
    }));

    result.push({
      id: qId,
      category: 'Pakistan Movement',
      categoryIcon: 'Flag',
      difficulty: (item.diff === 'Mastery' ? 'Scholar' : item.diff) as 'Foundation' | 'Intermediate' | 'Scholar',
      question: item.q,
      contextSnippet: item.snip,
      options,
      funFact: item.fact
    });
  }

  return result;
}

const questions = buildMovementQuestions();
const fileContent = `import { QuizQuestion } from '../types';

export const MOVEMENT_QUESTIONS: QuizQuestion[] = ${JSON.stringify(questions, null, 2)};
`;

fs.writeFileSync('src/data/movement.ts', fileContent, 'utf-8');
console.log(`[SUCCESS] Wrote ${questions.length} exact Pakistan Movement questions (501–600) to src/data/movement.ts!`);
