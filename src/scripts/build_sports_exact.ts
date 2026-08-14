import fs from 'fs';
import { QuizQuestion } from '../types';

export const exactSportsRaw = [
  // 101–150: Cricket
  {
    q: 'Pakistan won its first Cricket World Cup in:',
    snip: 'ICC Cricket World Cup championship year.',
    options: [
      { text: '1987', isCorrect: false, expl: 'Pakistan reached the semifinals in 1987.' },
      { text: '1992', isCorrect: true, expl: 'Pakistan won its first ICC Cricket World Cup on 25 March 1992.' },
      { text: '1996', isCorrect: false, expl: 'Pakistan reached the quarterfinals in 1996.' },
      { text: '1999', isCorrect: false, expl: 'Pakistan finished runners-up at Lord\'s in 1999.' }
    ],
    fact: 'Pakistan entered the 1992 tournament as underdogs and staged a legendary comeback as "Cornered Tigers".',
    diff: 'Foundation'
  },
  {
    q: 'Pakistan defeated which team in the 1992 Cricket World Cup final?',
    snip: 'Opposition in the 1992 World Cup final.',
    options: [
      { text: 'Australia', isCorrect: false, expl: 'Australia was eliminated in the group stage.' },
      { text: 'India', isCorrect: false, expl: 'India was eliminated in the group stage.' },
      { text: 'England', isCorrect: true, expl: 'Pakistan defeated Graham Gooch\'s England by 22 runs in the historic final.' },
      { text: 'New Zealand', isCorrect: false, expl: 'Pakistan defeated New Zealand in the Auckland semifinal.' }
    ],
    fact: 'Pakistan scored 249/6 and bowled England out for 227.',
    diff: 'Foundation'
  },
  {
    q: 'The 1992 Cricket World Cup final was played at:',
    snip: 'Iconic stadium hosting the 1992 final.',
    options: [
      { text: "Lord's", isCorrect: false, expl: "Lord's in London hosted the 1975, 1979, 1983, and 1999 finals." },
      { text: 'Melbourne Cricket Ground', isCorrect: true, expl: 'The final was played at the Melbourne Cricket Ground (MCG) in Australia in front of over 87,000 spectators.' },
      { text: 'The Oval', isCorrect: false, expl: 'The Oval hosted the 2017 Champions Trophy final.' },
      { text: 'Edgbaston', isCorrect: false, expl: 'Edgbaston is in Birmingham.' }
    ],
    fact: 'The MCG remains one of the largest cricket stadiums in world sport.',
    diff: 'Foundation'
  },
  {
    q: "Pakistan's captain during the 1992 World Cup was:",
    snip: 'Legendary all-rounder and captain.',
    options: [
      { text: 'Javed Miandad', isCorrect: false, expl: 'Javed Miandad was the team\'s senior batsman and vice-captain.' },
      { text: 'Wasim Akram', isCorrect: false, expl: 'Wasim Akram was the match-winning fast bowler in the final.' },
      { text: 'Imran Khan', isCorrect: true, expl: 'Imran Khan captained Pakistan to victory and scored a crucial 72 runs in the final.' },
      { text: 'Inzamam-ul-Haq', isCorrect: false, expl: 'Inzamam-ul-Haq was the young emerging batting sensation.' }
    ],
    fact: 'Imran Khan retired from international cricket after lifting the 1992 World Cup trophy.',
    diff: 'Foundation'
  },
  {
    q: 'Who captained Pakistan to its first T20 World Cup title in 2009?',
    snip: 'Captain during the 2009 ICC World T20 in England.',
    options: [
      { text: 'Shoaib Malik', isCorrect: false, expl: 'Shoaib Malik captained in the 2007 tournament.' },
      { text: 'Shahid Afridi', isCorrect: false, expl: 'Shahid Afridi was Man of the Match in the semifinal and final.' },
      { text: 'Younis Khan', isCorrect: true, expl: 'Younis Khan captained Pakistan to its maiden ICC World Twenty20 championship at Lord\'s in June 2009.' },
      { text: 'Mohammad Hafeez', isCorrect: false, expl: 'Mohammad Hafeez captained in later T20 tournaments.' }
    ],
    fact: 'Younis Khan announced his retirement from T20 internationals immediately after lifting the trophy.',
    diff: 'Foundation'
  },
  {
    q: 'Pakistan won the 2009 ICC World Twenty20 by defeating:',
    snip: 'Defeated finalist at Lord\'s.',
    options: [
      { text: 'India', isCorrect: false, expl: 'India defeated Pakistan in the 2007 final.' },
      { text: 'Sri Lanka', isCorrect: true, expl: 'Pakistan defeated Sri Lanka by 8 wickets in the final at Lord\'s on 21 June 2009.' },
      { text: 'Australia', isCorrect: false, expl: 'Australia was eliminated earlier.' },
      { text: 'South Africa', isCorrect: false, expl: 'Pakistan defeated South Africa in the semifinal.' }
    ],
    fact: 'Shahid Afridi hit the winning run and remained not out on 54.',
    diff: 'Foundation'
  },
  {
    q: 'The 2009 T20 World Cup final was played in:',
    snip: 'Venue of the 2009 final.',
    options: [
      { text: 'Karachi', isCorrect: false, expl: 'Karachi is home to National Stadium.' },
      { text: 'Lahore', isCorrect: false, expl: 'Lahore is home to Gaddafi Stadium.' },
      { text: "Lord's, London", isCorrect: true, expl: 'The final was played at the historic Lord\'s Cricket Ground in London.' },
      { text: 'Colombo', isCorrect: false, expl: 'Colombo hosted the 2012 T20 World Cup final.' }
    ],
    fact: "Lord's is universally known as the 'Home of Cricket'.",
    diff: 'Foundation'
  },
  {
    q: "Who scored the winning runs in Pakistan's 1992 World Cup semi-final against New Zealand?",
    snip: 'Explosive breakout innings in Auckland.',
    options: [
      { text: 'Imran Khan', isCorrect: false, expl: 'Imran Khan scored 44 in the semifinal.' },
      { text: 'Javed Miandad', isCorrect: false, expl: 'Javed Miandad provided solid support at the other end.' },
      { text: 'Inzamam-ul-Haq', isCorrect: true, expl: 'Inzamam-ul-Haq smashed 60 runs off just 37 balls to snatch an improbable victory at Eden Park, Auckland.' },
      { text: 'Wasim Akram', isCorrect: false, expl: 'Wasim Akram was the lead strike bowler.' }
    ],
    fact: 'Inzamam was unwell before the match and had to be encouraged by Imran Khan to play.',
    diff: 'Intermediate'
  },
  {
    q: 'Wasim Akram was famous primarily as a:',
    snip: 'Primary role of Wasim Akram.',
    options: [
      { text: 'Wicketkeeper', isCorrect: false, expl: 'Wicketkeepers included Wasim Bari, Moin Khan, and Rashid Latif.' },
      { text: 'Fast bowler', isCorrect: true, expl: 'Wasim Akram was a world-class left-arm fast bowler celebrated for mastering swing and seam.' },
      { text: 'Opening batsman', isCorrect: false, expl: 'He was a devastating lower-order pinch hitter and bowler.' },
      { text: 'Spinner', isCorrect: false, expl: 'He was a left-arm fast bowler.' }
    ],
    fact: 'Wasim Akram took 414 Test wickets and 502 ODI wickets across his international career.',
    diff: 'Foundation'
  },
  {
    q: 'Wasim Akram is popularly known as the:',
    snip: 'Worldwide bowling moniker.',
    options: [
      { text: 'Sultan of Swing', isCorrect: true, expl: 'Wasim Akram earned the title "Sultan of Swing" for his unparalleled command of orthodox and reverse swing.' },
      { text: 'King of Spin', isCorrect: false, expl: 'King of Spin is associated with Shane Warne.' },
      { text: 'Master Blaster', isCorrect: false, expl: 'Master Blaster is associated with Viv Richards and Sachin Tendulkar.' },
      { text: 'Rawalpindi Express', isCorrect: false, expl: 'Rawalpindi Express is Shoaib Akhtar.' }
    ],
    fact: 'He was the first bowler in cricket history to reach 500 ODI wickets.',
    diff: 'Foundation'
  },
  {
    q: 'Waqar Younis is particularly famous for his:',
    snip: 'Signature bowling art and toe-crushing yorkers.',
    options: [
      { text: 'Leg-spin', isCorrect: false, expl: 'Leg-spinners included Abdul Qadir and Mushtaq Ahmed.' },
      { text: 'Reverse swing and fast bowling', isCorrect: true, expl: 'Waqar Younis was legendary for his lightning pace and lethal, late reverse-swinging yorkers.' },
      { text: 'Wicketkeeping', isCorrect: false, expl: 'He was a frontline strike fast bowler.' },
      { text: 'Batting', isCorrect: false, expl: 'He was a frontline fast bowler.' }
    ],
    fact: 'Waqar Younis held the best strike rate in Test history among bowlers with 300+ wickets for decades.',
    diff: 'Foundation'
  },
  {
    q: 'Shoaib Akhtar is popularly known as:',
    snip: 'Famous pace moniker.',
    options: [
      { text: 'Sultan of Swing', isCorrect: false, expl: 'Sultan of Swing is Wasim Akram.' },
      { text: 'Rawalpindi Express', isCorrect: true, expl: 'Shoaib Akhtar was nicknamed the "Rawalpindi Express" due to his hometown and blazing bowling speed.' },
      { text: 'Boom Boom', isCorrect: false, expl: 'Boom Boom is Shahid Afridi.' },
      { text: 'King of Cricket', isCorrect: false, expl: 'Not a recognized moniker for Shoaib.' }
    ],
    fact: 'Shoaib terrorized top batsmen worldwide with extreme pace exceeding 155+ km/h regularly.',
    diff: 'Foundation'
  },
  {
    q: 'Shoaib Akhtar is famous for being one of the fastest:',
    snip: 'Cricket discipline.',
    options: [
      { text: 'Batsmen', isCorrect: false, expl: 'He was a fast bowler.' },
      { text: 'Bowlers', isCorrect: true, expl: 'Shoaib Akhtar is globally renowned as one of the fastest pace bowlers in the history of the sport.' },
      { text: 'Wicketkeepers', isCorrect: false, expl: 'He was a fast bowler.' },
      { text: 'Fielders', isCorrect: false, expl: 'He was a fast bowler.' }
    ],
    fact: 'He consistently bowled in the high 90s (mph) throughout the late 1990s and 2000s.',
    diff: 'Foundation'
  },
  {
    q: 'Shoaib Akhtar recorded a delivery officially measured at approximately:',
    snip: 'Official world record delivery speed.',
    options: [
      { text: '140.3 km/h', isCorrect: false, expl: '140 km/h is standard medium-fast bowling.' },
      { text: '150.7 km/h', isCorrect: false, expl: '150 km/h is express pace.' },
      { text: '161.3 km/h', isCorrect: true, expl: 'Shoaib Akhtar bowled a delivery officially clocked at 161.3 km/h (100.23 mph).' },
      { text: '170.5 km/h', isCorrect: false, expl: 'No human bowler has crossed 170 km/h.' }
    ],
    fact: 'This remains the fastest verified delivery in world cricket history.',
    diff: 'Foundation'
  },
  {
    q: 'The fastest officially recorded delivery in international cricket was bowled by:',
    snip: 'Record-holding pace bowler.',
    options: [
      { text: 'Wasim Akram', isCorrect: false, expl: 'Wasim Akram relied on swing and seam movement at 135–145 km/h.' },
      { text: 'Waqar Younis', isCorrect: false, expl: 'Waqar Younis was express fast and peaked around 153 km/h.' },
      { text: 'Shoaib Akhtar', isCorrect: true, expl: 'Shoaib Akhtar holds the world record for the fastest ball in cricket at 161.3 km/h (100.23 mph).' },
      { text: 'Brett Lee', isCorrect: false, expl: 'Brett Lee was second fastest with a top recorded speed of 161.1 km/h.' }
    ],
    fact: 'Shoaib was the first bowler to officially breach the 100 mph speed barrier.',
    diff: 'Foundation'
  },
  {
    q: 'Shoaib Akhtar bowled his record-fast delivery against:',
    snip: 'Opposing country in the record match.',
    options: [
      { text: 'India', isCorrect: false, expl: 'He bowled express spells against India in Kolkata and Centurion.' },
      { text: 'England', isCorrect: false, expl: 'England was the opponent at Newlands Cape Town (often classified in southern Africa tour records).' },
      { text: 'South Africa', isCorrect: true, expl: 'Recorded during the international fixtures held in South Africa in 2003.' },
      { text: 'New Zealand', isCorrect: false, expl: 'New Zealand was not the opponent for this record ball.' }
    ],
    fact: 'The delivery was bowled to Nick Knight in Cape Town during the 2003 tournament.',
    diff: 'Intermediate'
  },
  {
    q: 'The delivery was recorded during the:',
    snip: 'World Cup tournament.',
    options: [
      { text: '1999 World Cup', isCorrect: false, expl: 'Held in England.' },
      { text: '2003 World Cup', isCorrect: true, expl: 'The record speed of 100.23 mph (161.3 km/h) was recorded during the 2003 ICC Cricket World Cup.' },
      { text: '2007 World Cup', isCorrect: false, expl: 'Held in the West Indies.' },
      { text: '2011 World Cup', isCorrect: false, expl: 'Held in the subcontinent.' }
    ],
    fact: 'The ball was officially validated by speed radar technology in February 2003.',
    diff: 'Intermediate'
  },
  {
    q: 'Inzamam-ul-Haq was primarily a:',
    snip: 'Role of Inzamam-ul-Haq.',
    options: [
      { text: 'Fast bowler', isCorrect: false, expl: 'He was a premier middle-order batsman.' },
      { text: 'Batsman', isCorrect: true, expl: 'Inzamam-ul-Haq was one of Pakistan\'s greatest and most prolific middle-order batsmen and captains.' },
      { text: 'Wicketkeeper', isCorrect: false, expl: 'He was a batsman and slip fielder.' },
      { text: 'Spinner', isCorrect: false, expl: 'He bowled very occasional slow left-arm spin.' }
    ],
    fact: 'Inzamam scored 8,830 Test runs and 11,739 ODI runs for Pakistan.',
    diff: 'Foundation'
  },
  {
    q: 'Javed Miandad famously hit a six on the last ball against India in:',
    snip: 'Year of the famous Austral-Asia Cup final six.',
    options: [
      { text: '1986', isCorrect: true, expl: 'On 18 April 1986, Javed Miandad struck Chetan Sharma for six off the final ball to win the Austral-Asia Cup in Sharjah.' },
      { text: '1987', isCorrect: false, expl: 'In 1987, Pakistan toured India for a Test series win.' },
      { text: '1992', isCorrect: false, expl: '1992 was the World Cup year.' },
      { text: '1996', isCorrect: false, expl: '1996 was Miandad\'s 6th World Cup appearance.' }
    ],
    fact: 'Pakistan needed 4 runs to win off 1 ball; Miandad hit the ball over midwicket into the stands.',
    diff: 'Foundation'
  },
  {
    q: "Javed Miandad's famous last-ball six was hit against:",
    snip: 'Opposing arch-rival team.',
    options: [
      { text: 'Sri Lanka', isCorrect: false, expl: 'Sri Lanka was not in that final.' },
      { text: 'India', isCorrect: true, expl: 'The shot was hit against India (bowler Chetan Sharma) in a historic last-over climax.' },
      { text: 'Australia', isCorrect: false, expl: 'Australia was eliminated earlier in the cup.' },
      { text: 'England', isCorrect: false, expl: 'England was not playing in that match.' }
    ],
    fact: 'This iconic six defined Pakistan\'s mental dominance in one-day cricket during the late 1980s.',
    diff: 'Foundation'
  },
  {
    q: 'The famous 1986 India-Pakistan match was played in:',
    snip: 'Famous neutral desert venue.',
    options: [
      { text: 'Sharjah', isCorrect: true, expl: 'The match was played at the Sharjah Cricket Stadium in the United Arab Emirates.' },
      { text: 'Dubai', isCorrect: false, expl: 'Dubai International Stadium was built decades later.' },
      { text: 'Lahore', isCorrect: false, expl: 'Gaddafi Stadium is in Lahore.' },
      { text: 'Karachi', isCorrect: false, expl: 'National Stadium is in Karachi.' }
    ],
    fact: 'Sharjah was the undisputed desert home of ODI cricket through the 1980s and 1990s.',
    diff: 'Foundation'
  },
  {
    q: "Pakistan's first Test match was played against:",
    snip: 'First Test opponent.',
    options: [
      { text: 'India', isCorrect: true, expl: 'Pakistan played its inaugural official Test match against India in October 1952.' },
      { text: 'England', isCorrect: false, expl: 'Pakistan toured England for the first time in 1954.' },
      { text: 'Australia', isCorrect: false, expl: 'Pakistan played Australia later in 1956.' },
      { text: 'West Indies', isCorrect: false, expl: 'Pakistan played West Indies in 1958.' }
    ],
    fact: 'Pakistan was granted Test cricket status by the Imperial Cricket Conference in 1952.',
    diff: 'Foundation'
  },
  {
    q: 'Pakistan played its first Test match in:',
    snip: 'Year of inaugural Test.',
    options: [
      { text: '1947', isCorrect: false, expl: 'Pakistan gained independence in 1947 but received Test status in 1952.' },
      { text: '1952', isCorrect: true, expl: 'Pakistan made its Test debut in October 1952 under the captaincy of Abdul Hafeez Kardar.' },
      { text: '1955', isCorrect: false, expl: 'Pakistan had already played full series by 1955.' },
      { text: '1960', isCorrect: false, expl: 'Test cricket was well established in Pakistan by 1960.' }
    ],
    fact: 'Abdul Hafeez Kardar is revered as the "Father of Pakistan Cricket".',
    diff: 'Foundation'
  },
  {
    q: "Pakistan's first Test match was played in:",
    snip: 'City of Pakistan\'s first Test.',
    options: [
      { text: 'Karachi', isCorrect: false, expl: 'Karachi hosted home Tests later in the 1950s.' },
      { text: 'Lahore', isCorrect: false, expl: 'Lahore hosted the 1955 series against India.' },
      { text: 'Delhi', isCorrect: true, expl: 'Pakistan played its first ever Test match at Feroz Shah Kotla Ground in Delhi on 16–18 October 1952.' },
      { text: 'Bombay', isCorrect: false, expl: 'Bombay hosted the 3rd Test of that 1952 tour.' }
    ],
    fact: 'A young Hanif Mohammad made his Test debut in this match at age 17.',
    diff: 'Intermediate'
  },
  {
    q: "Pakistan's first Test victory came against:",
    snip: 'Team defeated for first Test win.',
    options: [
      { text: 'England', isCorrect: false, expl: 'Pakistan defeated England famously at The Oval in 1954.' },
      { text: 'India', isCorrect: true, expl: 'Pakistan earned its maiden Test victory by defeating India by an innings and 43 runs in Lucknow (2nd Test, October 1952).' },
      { text: 'Australia', isCorrect: false, expl: 'Pakistan beat Australia in Karachi in 1956.' },
      { text: 'West Indies', isCorrect: false, expl: 'Pakistan beat West Indies in 1958.' }
    ],
    fact: 'Fazal Mahmood took 12 wickets for 94 runs to bowl Pakistan to victory in Lucknow.',
    diff: 'Foundation'
  },
  {
    q: "Pakistan's first Test victory was achieved in:",
    snip: 'Year of first Test win.',
    options: [
      { text: '1952', isCorrect: true, expl: 'Pakistan won its 2nd ever Test match in October 1952 in Lucknow, India.' },
      { text: '1954', isCorrect: false, expl: 'In 1954, Pakistan beat England at The Oval.' },
      { text: '1956', isCorrect: false, expl: 'In 1956, Pakistan beat Australia in Karachi.' },
      { text: '1958', isCorrect: false, expl: 'In 1958, Pakistan played West Indies.' }
    ],
    fact: 'Pakistan was the fastest team in cricket history to win a Test match after gaining Test status (in their 2nd match).',
    diff: 'Foundation'
  },
  {
    q: 'Hanif Mohammad was famous for his:',
    snip: 'Batting technique and legendary patience.',
    options: [
      { text: 'Fast bowling', isCorrect: false, expl: 'Fazal Mahmood and Khan Mohammad were the fast bowlers.' },
      { text: 'Long innings and batting', isCorrect: true, expl: 'Hanif Mohammad ("The Little Master") was world-renowned for his incredible concentration, defensive technique, and marathon innings.' },
      { text: 'Wicketkeeping', isCorrect: false, expl: 'While he kept wicket briefly, he is celebrated for monumental batting feats.' },
      { text: 'Spin bowling', isCorrect: false, expl: 'He was a premier opening batsman.' }
    ],
    fact: 'Hanif played 55 Tests for Pakistan, scoring 3,915 runs at an average of 43.98.',
    diff: 'Foundation'
  },
  {
    q: "Hanif Mohammad scored Pakistan's first Test:",
    snip: 'Milestone category.',
    options: [
      { text: 'Double century', isCorrect: false, expl: 'Nazar Mohammad scored Pakistan\'s first Test century.' },
      { text: 'Triple century', isCorrect: true, expl: 'Hanif Mohammad scored Pakistan\'s first Test triple-century (337).' },
      { text: '400', isCorrect: false, expl: 'Brian Lara is the only batsman with a Test 400.' },
      { text: 'Century', isCorrect: false, expl: 'Nazar Mohammad scored Pakistan\'s first Test century in 1952 in Lucknow.' }
    ],
    fact: 'Hanif also held the first-class world record with 499 runs for Karachi in 1959.',
    diff: 'Foundation'
  },
  {
    q: 'Hanif Mohammad scored 337 against:',
    snip: 'Opposing team in the 16-hour marathon.',
    options: [
      { text: 'India', isCorrect: false, expl: 'Scored against West Indies in the Caribbean.' },
      { text: 'England', isCorrect: false, expl: 'Scored against West Indies.' },
      { text: 'West Indies', isCorrect: true, expl: 'Hanif scored 337 against the West Indies at Kensington Oval, Bridgetown, Barbados in January 1958.' },
      { text: 'Australia', isCorrect: false, expl: 'Scored against West Indies.' }
    ],
    fact: 'Pakistan was following on by 473 runs; Hanif batted for 970 minutes to save the match and earn a historic draw.',
    diff: 'Foundation'
  },
  {
    q: "Hanif Mohammad's 337 was scored in:",
    snip: 'Year of the 337 marathon innings.',
    options: [
      { text: '1958', isCorrect: true, expl: 'Hanif Mohammad scored 337 in January 1958 in Bridgetown, Barbados.' },
      { text: '1960', isCorrect: false, expl: 'Scored in 1958.' },
      { text: '1962', isCorrect: false, expl: 'Scored in 1958.' },
      { text: '1965', isCorrect: false, expl: 'Scored in 1958.' }
    ],
    fact: 'His 970 minutes at the crease remains the longest Test innings by duration in cricket history.',
    diff: 'Intermediate'
  },
  {
    q: 'The Pakistan batsman who scored 313 in a Test match against England was:',
    snip: 'Scored 313 in a home Test match (Sri Lanka/England series context).',
    options: [
      { text: 'Javed Miandad', isCorrect: false, expl: 'Miandad\'s highest Test score was 280 not out.' },
      { text: 'Inzamam-ul-Haq', isCorrect: false, expl: 'Inzamam scored 329 against New Zealand in Lahore in 2002.' },
      { text: 'Younis Khan', isCorrect: true, expl: 'Younis Khan scored a magnificent 313 in a Test match at National Stadium Karachi in 2009.' },
      { text: 'Mohammad Yousuf', isCorrect: false, expl: 'Mohammad Yousuf\'s highest Test score was 223.' }
    ],
    fact: 'Younis Khan became only the third Pakistani batsman after Hanif Mohammad and Inzamam-ul-Haq to score a Test triple hundred.',
    diff: 'Intermediate'
  },
  {
    q: "Younis Khan's 313 was scored at:",
    snip: 'Venue of the triple century.',
    options: [
      { text: 'Lahore', isCorrect: false, expl: 'Inzamam scored 329 in Lahore.' },
      { text: 'Karachi', isCorrect: true, expl: 'Younis Khan scored his 313 at National Stadium Karachi in February 2009.' },
      { text: 'Multan', isCorrect: false, expl: 'Multan is known as the city of saints and cricket Tests.' },
      { text: 'Rawalpindi', isCorrect: false, expl: 'Rawalpindi is home to Pindi Cricket Stadium.' }
    ],
    fact: 'Younis batted for over 12 hours (768 minutes) facing 568 balls.',
    diff: 'Intermediate'
  },
  {
    q: 'Mohammad Yousuf set a world record for Test runs in a calendar year in:',
    snip: 'Golden year of Mohammad Yousuf.',
    options: [
      { text: '2005', isCorrect: false, expl: 'He scored heavily in 2005 leading into his record year.' },
      { text: '2006', isCorrect: true, expl: 'In 2006, Mohammad Yousuf broke Sir Viv Richards\' 30-year world record for the most Test runs in a single calendar year.' },
      { text: '2007', isCorrect: false, expl: 'In 2007, he continued his fine form in ODIs.' },
      { text: '2008', isCorrect: false, expl: 'Record was established in 2006.' }
    ],
    fact: 'Mohammad Yousuf also scored 9 Test centuries in 2006, breaking Viv Richards and Aravinda de Silva\'s record of 7.',
    diff: 'Foundation'
  },
  {
    q: 'Mohammad Yousuf scored how many Test runs in 2006?',
    snip: 'Total Test runs in calendar year 2006.',
    options: [
      { text: '1,500', isCorrect: false, expl: 'He surpassed 1,500 easily in late 2006.' },
      { text: '1,600', isCorrect: false, expl: 'He broke Viv Richards\' 1,710 runs.' },
      { text: '1,788', isCorrect: true, expl: 'Mohammad Yousuf scored 1,788 Test runs at a staggering batting average of 99.33 in 2006.' },
      { text: '1,900', isCorrect: false, expl: 'The record stands at 1,788 runs.' }
    ],
    fact: 'This monumental world record has stood unchallenged for two decades.',
    diff: 'Foundation'
  },
  {
    q: 'The record of 1,788 Test runs in a calendar year was achieved in:',
    snip: 'Number of Test matches played.',
    options: [
      { text: '10 matches', isCorrect: false, expl: 'He played 11 matches.' },
      { text: '11 matches', isCorrect: false, expl: 'Specifically 11 Test matches (19 innings).' },
      { text: '11 Tests', isCorrect: true, expl: 'Mohammad Yousuf achieved 1,788 runs in just 11 Test matches (19 innings) across 2006.' },
      { text: '12 Tests', isCorrect: false, expl: 'Achieved in 11 Tests.' }
    ],
    fact: 'His run-scoring included series against India, England, and West Indies.',
    diff: 'Intermediate'
  },
  {
    q: 'Babar Azam is primarily known as a:',
    snip: 'Cricket discipline of Babar Azam.',
    options: [
      { text: 'Fast bowler', isCorrect: false, expl: 'Fast bowlers include Shaheen Afridi, Haris Rauf, and Naseem Shah.' },
      { text: 'Batsman', isCorrect: true, expl: 'Babar Azam is a world-class top-order batsman renowned for his elegant cover drive and consistency across all three formats.' },
      { text: 'Wicketkeeper only', isCorrect: false, expl: 'Mohammad Rizwan is the frontline wicketkeeper.' },
      { text: 'Leg-spinner', isCorrect: false, expl: 'Shadab Khan and Usama Mir are leg-spinners.' }
    ],
    fact: 'Babar Azam achieved the ICC World No. 1 ranking in both ODI and T20I cricket.',
    diff: 'Foundation'
  },
  {
    q: 'Babar Azam became the first Pakistani batsman to score centuries in:',
    snip: 'Consecutive centuries milestone.',
    options: [
      { text: 'Four consecutive ODIs', isCorrect: false, expl: 'Kumar Sangakkara holds the record of 4 consecutive ODI hundreds.' },
      { text: 'Three consecutive ODIs', isCorrect: true, expl: 'Babar Azam smashed three consecutive centuries against the West Indies in the UAE in 2016 (120, 123, 117).' },
      { text: 'Five consecutive Tests', isCorrect: false, expl: 'Bradman scored hundreds in 6 consecutive Tests.' },
      { text: 'Three consecutive Tests', isCorrect: false, expl: 'Achieved first in consecutive ODIs.' }
    ],
    fact: 'Babar scored 360 runs in that 3-match series against West Indies, a world record for a 3-match ODI series.',
    diff: 'Intermediate'
  },
  {
    q: "Babar Azam was Pakistan's captain during the:",
    snip: 'ICC World Cup captaincy.',
    options: [
      { text: '2011 World Cup', isCorrect: false, expl: 'Shahid Afridi was captain in 2011.' },
      { text: '2015 World Cup', isCorrect: false, expl: 'Misbah-ul-Haq was captain in 2015.' },
      { text: '2019 World Cup', isCorrect: true, expl: 'Babar Azam was Pakistan\'s premier batsman in 2019 and captained the side in major ICC tournaments (including the 2021/2022 T20 and 2023 ODI World Cups).' },
      { text: '2007 World Cup', isCorrect: false, expl: 'Inzamam-ul-Haq was captain in 2007.' }
    ],
    fact: 'Babar was Pakistan\'s leading run scorer in the 2019 tournament with 474 runs.',
    diff: 'Intermediate'
  },
  {
    q: 'Pakistan won the ICC Champions Trophy in:',
    snip: 'Year of Champions Trophy triumph in England.',
    options: [
      { text: '2013', isCorrect: false, expl: 'India won in 2013.' },
      { text: '2015', isCorrect: false, expl: '2015 was the 50-over World Cup in Australia.' },
      { text: '2017', isCorrect: true, expl: 'Pakistan won the ICC Champions Trophy in June 2017, defeating India at The Oval, London.' },
      { text: '2019', isCorrect: false, expl: 'England won the 2019 World Cup.' }
    ],
    fact: 'Pakistan entered the 2017 tournament ranked 8th in the world and emerged victorious.',
    diff: 'Foundation'
  },
  {
    q: 'Pakistan defeated which team in the 2017 Champions Trophy final?',
    snip: 'Final opponent at The Oval.',
    options: [
      { text: 'India', isCorrect: true, expl: 'Pakistan defeated India by 180 runs in the final at The Oval on 18 June 2017.' },
      { text: 'England', isCorrect: false, expl: 'Pakistan defeated England in the Cardiff semifinal by 8 wickets.' },
      { text: 'Australia', isCorrect: false, expl: 'Australia was knocked out in the group stage.' },
      { text: 'South Africa', isCorrect: false, expl: 'Pakistan defeated South Africa in the group stage.' }
    ],
    fact: 'It was the largest margin of victory by runs in an ICC ODI tournament final.',
    diff: 'Foundation'
  },
  {
    q: "Pakistan's captain in the 2017 Champions Trophy was:",
    snip: 'Wicketkeeper-captain.',
    options: [
      { text: 'Shahid Afridi', isCorrect: false, expl: 'Shahid Afridi had retired from ODI cricket in 2015.' },
      { text: 'Sarfaraz Ahmed', isCorrect: true, expl: 'Sarfaraz Ahmed captained Pakistan to the 2017 ICC Champions Trophy title.' },
      { text: 'Babar Azam', isCorrect: false, expl: 'Babar Azam was a young batsman in the lineup.' },
      { text: 'Misbah-ul-Haq', isCorrect: false, expl: 'Misbah-ul-Haq retired from ODIs in 2015.' }
    ],
    fact: 'Sarfaraz also scored an unbeaten 61 to guide Pakistan past Sri Lanka in a tense virtual quarterfinal in Cardiff.',
    diff: 'Foundation'
  },
  {
    q: 'Who scored a century in the 2017 Champions Trophy final?',
    snip: 'Heroic opening batsman from Mardan.',
    options: [
      { text: 'Babar Azam', isCorrect: false, expl: 'Babar Azam scored 46 runs.' },
      { text: 'Fakhar Zaman', isCorrect: true, expl: 'Fakhar Zaman scored a blistering 114 off 106 balls to set up Pakistan\'s match-winning total of 338/4.' },
      { text: 'Imam-ul-Haq', isCorrect: false, expl: 'Imam-ul-Haq made his debut later in 2017.' },
      { text: 'Mohammad Hafeez', isCorrect: false, expl: 'Mohammad Hafeez scored a rapid 57 not out at the end.' }
    ],
    fact: 'Fakhar Zaman later became the first Pakistani batsman to score an ODI double-century (210* vs Zimbabwe in 2018).',
    diff: 'Foundation'
  },
  {
    q: "Pakistan's first Asia Cup title came in:",
    snip: 'Maiden Asia Cup victory year.',
    options: [
      { text: '1984', isCorrect: false, expl: '1984 was the inaugural Asia Cup in Sharjah won by India.' },
      { text: '1986', isCorrect: false, expl: 'Won by Sri Lanka.' },
      { text: '1988', isCorrect: true, expl: 'Pakistan won its first Asia Cup tournament in 1988 (or in 2000 in Dhaka vs Sri Lanka).' },
      { text: '1992', isCorrect: false, expl: '1992 was the Cricket World Cup in Australia.' }
    ],
    fact: 'Pakistan has won the Asia Cup twice (2000 in Dhaka and 2012 in Mirpur).',
    diff: 'Intermediate'
  },
  {
    q: 'Pakistan won the Asia Cup in 2012 under captaincy of:',
    snip: 'Captain during the thrilling 2-run win vs Bangladesh.',
    options: [
      { text: 'Shahid Afridi', isCorrect: false, expl: 'Shahid Afridi played as an all-rounder and won Player of the Match in the final.' },
      { text: 'Misbah-ul-Haq', isCorrect: true, expl: 'Misbah-ul-Haq captained Pakistan to the 2012 Asia Cup victory in Dhaka, winning the final by 2 runs.' },
      { text: 'Younis Khan', isCorrect: false, expl: 'Younis Khan was a senior player in the squad.' },
      { text: 'Shoaib Malik', isCorrect: false, expl: 'Shoaib Malik was in the squad.' }
    ],
    fact: 'Aizaz Cheema defended 9 runs in the final over to clinch the trophy.',
    diff: 'Intermediate'
  },
  {
    q: "Pakistan's women's cricket team is governed by:",
    snip: 'Governing board for men and women cricket.',
    options: [
      { text: 'Pakistan Olympic Association', isCorrect: false, expl: 'POA governs general Olympic disciplines.' },
      { text: 'PCB', isCorrect: true, expl: 'The Pakistan Cricket Board (PCB) governs all professional men\'s and women\'s national cricket teams in Pakistan.' },
      { text: 'HEC', isCorrect: false, expl: 'HEC governs higher education.' },
      { text: 'PAF', isCorrect: false, expl: 'PAF is the Air Force.' }
    ],
    fact: 'Pakistan women\'s cricket team won gold medals at the 2010 Guangzhou and 2014 Incheon Asian Games.',
    diff: 'Foundation'
  },
  {
    q: 'PCB stands for:',
    snip: 'Full form of PCB.',
    options: [
      { text: 'Pakistan Cricket Board', isCorrect: true, expl: 'PCB stands for Pakistan Cricket Board, headquartered at Gaddafi Stadium in Lahore.' },
      { text: 'Pakistan Cricket Bureau', isCorrect: false, expl: 'PCB is Pakistan Cricket Board.' },
      { text: 'Pakistan Cricket Body', isCorrect: false, expl: 'PCB is Pakistan Cricket Board.' },
      { text: 'Pakistan Championship Board', isCorrect: false, expl: 'PCB is Pakistan Cricket Board.' }
    ],
    fact: 'PCB was originally formed in 1948 as the Board of Control for Cricket in Pakistan (BCCP).',
    diff: 'Foundation'
  },
  {
    q: 'The Pakistan Super League is commonly abbreviated as:',
    snip: 'T20 franchise league acronym.',
    options: [
      { text: 'PSL', isCorrect: true, expl: 'The Pakistan Super League is widely known as the PSL.' },
      { text: 'PCL', isCorrect: false, expl: 'PSL stands for Pakistan Super League.' },
      { text: 'PPL', isCorrect: false, expl: 'PPL stands for Pakistan Petroleum Limited or Pakistan Premier League.' },
      { text: 'PBL', isCorrect: false, expl: 'PSL is the official abbreviation.' }
    ],
    fact: 'PSL was founded in 2015 and has grown into one of the premier franchise cricket leagues globally.',
    diff: 'Foundation'
  },
  {
    q: 'The first season of PSL was held in:',
    snip: 'Inaugural edition year.',
    options: [
      { text: '2014', isCorrect: false, expl: 'Planning started in 2014/2015.' },
      { text: '2015', isCorrect: false, expl: 'The league was launched in late 2015.' },
      { text: '2016', isCorrect: true, expl: 'The inaugural season of the Pakistan Super League (PSL 1) was held in February 2016 in the United Arab Emirates.' },
      { text: '2017', isCorrect: false, expl: 'PSL 2 was held in 2017 with the final in Lahore.' }
    ],
    fact: 'Five original franchises competed in the inaugural season: Islamabad, Quetta, Peshawar, Karachi, and Lahore.',
    diff: 'Foundation'
  },
  {
    q: 'The first PSL champions were:',
    snip: 'Winners of PSL 1 (2016).',
    options: [
      { text: 'Peshawar Zalmi', isCorrect: false, expl: 'Peshawar Zalmi won PSL 2 in 2017.' },
      { text: 'Islamabad United', isCorrect: true, expl: 'Islamabad United, captained by Misbah-ul-Haq and coached by Dean Jones, won the inaugural PSL title in 2016.' },
      { text: 'Karachi Kings', isCorrect: false, expl: 'Karachi Kings won PSL 5 in 2020.' },
      { text: 'Quetta Gladiators', isCorrect: false, expl: 'Quetta Gladiators were runners-up in 2016 and won PSL 4 in 2019.' }
    ],
    fact: 'Islamabad United became the first team to win multiple PSL titles (2016, 2018, 2024).',
    diff: 'Foundation'
  },
  {
    q: 'The PSL is organized by:',
    snip: 'Organizing body of PSL.',
    options: [
      { text: 'ICC', isCorrect: false, expl: 'ICC organizes international world cups and global events.' },
      { text: 'PCB', isCorrect: true, expl: 'The Pakistan Super League is owned and organized by the Pakistan Cricket Board (PCB).' },
      { text: 'ACC', isCorrect: false, expl: 'ACC organizes the Asia Cup.' },
      { text: 'Pakistan Olympic Association', isCorrect: false, expl: 'POA handles multi-sport games.' }
    ],
    fact: 'PSL helped fully restore international cricket tours across all major Pakistani venues.',
    diff: 'Foundation'
  },

  // 151–175: Hockey & Other Sports
  {
    q: 'Pakistan has historically been particularly successful in:',
    snip: 'National sport of Pakistan.',
    options: [
      { text: 'Field hockey', isCorrect: true, expl: 'Field hockey is Pakistan\'s national sport, with a storied history of 4 World Cups, 3 Olympic Golds, and 3 Champions Trophies.' },
      { text: 'Baseball', isCorrect: false, expl: 'Baseball is a minor sport in Pakistan.' },
      { text: 'Ice hockey', isCorrect: false, expl: 'Played recreationally in northern winter festivals.' },
      { text: 'Rugby', isCorrect: false, expl: 'Rugby is an emerging sport.' }
    ],
    fact: 'Pakistan ruled world field hockey from the late 1950s through the mid-1990s.',
    diff: 'Foundation'
  },
  {
    q: 'Pakistan won its first Hockey World Cup in:',
    snip: 'Inaugural FIH World Cup champion.',
    options: [
      { text: '1971', isCorrect: true, expl: 'Pakistan won the inaugural FIH Men\'s Hockey World Cup in October 1971 in Barcelona, Spain, defeating Spain 1–0 in the final.' },
      { text: '1975', isCorrect: false, expl: 'India won in 1975 in Kuala Lumpur.' },
      { text: '1978', isCorrect: false, expl: 'Pakistan won its 2nd World Cup in 1978 in Buenos Aires.' },
      { text: '1982', isCorrect: false, expl: 'Pakistan won its 3rd World Cup in 1982 in Mumbai.' }
    ],
    fact: 'The Hockey World Cup was originally conceived and proposed to FIH by Air Marshal Nur Khan of Pakistan.',
    diff: 'Foundation'
  },
  {
    q: 'The 1971 Hockey World Cup was held in:',
    snip: 'Host country of the inaugural 1971 Hockey World Cup.',
    options: [
      { text: 'Pakistan', isCorrect: false, expl: 'Originally scheduled for Lahore, it was relocated due to regional tensions.' },
      { text: 'Spain', isCorrect: true, expl: 'The tournament was hosted in Barcelona, Spain at the Real Club de Polo.' },
      { text: 'Netherlands', isCorrect: false, expl: 'Netherlands hosted the 1973 World Cup in Amstelveen.' },
      { text: 'India', isCorrect: false, expl: 'India hosted in 1982, 2010, 2018, and 2023.' }
    ],
    fact: 'Pakistan defeated Spain 1–0 with a goal by Akhtarul Islam.',
    diff: 'Intermediate'
  },
  {
    q: 'Pakistan won the Hockey World Cup in 1978 by defeating:',
    snip: 'Defeated finalist in Buenos Aires 1978.',
    options: [
      { text: 'Netherlands', isCorrect: true, expl: 'Pakistan defeated the Netherlands 3–2 in the final at Buenos Aires, Argentina in April 1978.' },
      { text: 'India', isCorrect: false, expl: 'India was eliminated in the group phase.' },
      { text: 'Germany', isCorrect: false, expl: 'West Germany finished 4th.' },
      { text: 'Australia', isCorrect: false, expl: 'Australia finished 3rd.' }
    ],
    fact: 'Islahuddin Siddiqui captained Pakistan during this undefeated 1978 World Cup campaign.',
    diff: 'Intermediate'
  },
  {
    q: "Pakistan's third Hockey World Cup title came in:",
    snip: 'Year of the famous 7-1 victory in Mumbai.',
    options: [
      { text: '1978', isCorrect: false, expl: '1978 was the 2nd World Cup in Buenos Aires.' },
      { text: '1982', isCorrect: true, expl: 'Pakistan won its 3rd Hockey World Cup in 1982 at Mumbai, India, thrashing West Germany 3–1 in the final.' },
      { text: '1986', isCorrect: false, expl: 'Australia won in 1986 in London.' },
      { text: '1990', isCorrect: false, expl: 'Netherlands won in 1990 in Lahore.' }
    ],
    fact: 'Pakistan destroyed host India 7–1 in the 1982 Asian Games final in Delhi during the same golden era.',
    diff: 'Foundation'
  },
  {
    q: "Pakistan's fourth and most recent Hockey World Cup title came in:",
    snip: 'Year of the 4th FIH World Cup victory in Sydney.',
    options: [
      { text: '1986', isCorrect: false, expl: 'Won by Australia.' },
      { text: '1990', isCorrect: false, expl: 'Won by Netherlands in Lahore.' },
      { text: '1994', isCorrect: true, expl: 'Pakistan captured its record fourth World Cup title in Sydney, Australia in December 1994, beating the Netherlands on penalty strokes.' },
      { text: '1998', isCorrect: false, expl: 'Won by Netherlands in Utrecht.' }
    ],
    fact: 'Shahbaz Ahmed Senior was named Player of the Tournament (Maradona of Hockey) in both 1990 and 1994.',
    diff: 'Foundation'
  },
  {
    q: 'Pakistan has won the Hockey World Cup:',
    snip: 'All-time record tally of World Cups.',
    options: [
      { text: '2 times', isCorrect: false, expl: 'Australia and Germany have won 3 titles.' },
      { text: '3 times', isCorrect: false, expl: 'Netherlands has won 3 titles.' },
      { text: '4 times', isCorrect: true, expl: 'Pakistan has won the FIH Hockey World Cup a record 4 times (1971, 1978, 1982, 1994).' },
      { text: '5 times', isCorrect: false, expl: 'No country has won 5 World Cups.' }
    ],
    fact: 'Pakistan remains the most successful team in Men\'s Hockey World Cup history.',
    diff: 'Foundation'
  },
  {
    q: "Pakistan won Olympic gold in men's hockey in:",
    snip: 'Olympic Gold years for Pakistan hockey.',
    options: [
      { text: '1956', isCorrect: false, expl: 'Pakistan won Silver in 1956 in Melbourne.' },
      { text: '1960', isCorrect: false, expl: 'Pakistan won Gold in 1960 (Rome).' },
      { text: '1964', isCorrect: false, expl: 'Pakistan won Silver in 1964 (Tokyo).' },
      { text: 'All of these', isCorrect: true, expl: 'Pakistan reached the Olympic finals in 1956, 1960, 1964, and won Golds in 1960 (Rome), 1968 (Mexico City), and 1984 (Los Angeles).' }
    ],
    fact: 'Pakistan reached consecutive Olympic hockey finals in 1956, 1960, 1964, 1968, and 1972.',
    diff: 'Intermediate'
  },
  {
    q: "Pakistan's first Olympic gold medal came in:",
    snip: 'Sport delivering first Olympic Gold.',
    options: [
      { text: 'Hockey', isCorrect: true, expl: 'Pakistan won its first ever Olympic gold medal in Field Hockey at the 1960 Rome Olympic Games.' },
      { text: 'Wrestling', isCorrect: false, expl: 'Muhammad Bashir won Bronze in wrestling in 1960.' },
      { text: 'Boxing', isCorrect: false, expl: 'Syed Hussain Shah won Bronze in boxing in 1988.' },
      { text: 'Athletics', isCorrect: false, expl: 'Arshad Nadeem won Athletics Gold in 2024.' }
    ],
    fact: 'Pakistan defeated India 1–0 in the final with a historic goal by Naseer Bunda.',
    diff: 'Foundation'
  },
  {
    q: 'Pakistan won its first Olympic hockey gold medal at:',
    snip: 'Olympic host city 1956/1960.',
    options: [
      { text: 'Melbourne 1956', isCorrect: true, expl: 'Pakistan won its first Olympic medal (Silver) at Melbourne 1956 and first Gold medal in 1960.' },
      { text: 'Rome 1960', isCorrect: false, expl: 'Rome 1960 was where Pakistan won its first Gold medal defeating India.' },
      { text: 'Tokyo 1964', isCorrect: false, expl: 'Tokyo 1964 was Silver.' },
      { text: 'Mexico City 1968', isCorrect: false, expl: 'Mexico City 1968 was Gold.' }
    ],
    fact: 'Melbourne 1956 was Pakistan\'s maiden Olympic final appearance in any sport.',
    diff: 'Foundation'
  },
  {
    q: 'Pakistan won Olympic gold in hockey in 1968 at:',
    snip: 'Host city of 1968 Olympics.',
    options: [
      { text: 'Tokyo', isCorrect: false, expl: 'Tokyo was 1964.' },
      { text: 'Mexico City', isCorrect: true, expl: 'Pakistan won its second Olympic gold medal in hockey at the 1968 Mexico City Olympic Games, defeating Australia 2–1 in the final.' },
      { text: 'Munich', isCorrect: false, expl: 'Munich 1972 was Silver.' },
      { text: 'Montreal', isCorrect: false, expl: 'Montreal 1976 was Bronze.' }
    ],
    fact: 'Tariq Niazi and Abdul Rashid Junior were star forwards in the 1968 campaign.',
    diff: 'Foundation'
  },
  {
    q: "Pakistan's Olympic hockey gold in 1984 was won at:",
    snip: 'Host city of 1984 Olympics.',
    options: [
      { text: 'Los Angeles', isCorrect: true, expl: 'Pakistan won its third Olympic hockey gold medal at the 1984 Los Angeles Summer Olympics, defeating West Germany 2–1 in extra time.' },
      { text: 'Seoul', isCorrect: false, expl: 'Seoul 1988.' },
      { text: 'Moscow', isCorrect: false, expl: 'Boycotted in 1980.' },
      { text: 'Barcelona', isCorrect: false, expl: 'Barcelona 1992 was Bronze.' }
    ],
    fact: 'Manzoor Hussain Junior captained the team, and Hassan Sardar scored in the final.',
    diff: 'Foundation'
  },
  {
    q: 'Jahangir Khan is famous in:',
    snip: 'Sport of Jahangir Khan.',
    options: [
      { text: 'Squash', isCorrect: true, expl: 'Jahangir Khan is universally celebrated as the greatest player in the history of squash.' },
      { text: 'Tennis', isCorrect: false, expl: 'Tennis greats include Aisam-ul-Haq.' },
      { text: 'Hockey', isCorrect: false, expl: 'Hockey greats include Samiullah and Shahbaz.' },
      { text: 'Boxing', isCorrect: false, expl: 'Boxing greats include Hussain Shah.' }
    ],
    fact: 'Jahangir Khan won 10 consecutive British Open titles from 1982 to 1991.',
    diff: 'Foundation'
  },
  {
    q: 'Jahangir Khan is regarded as one of the greatest players in:',
    snip: 'Global squash stature.',
    options: [
      { text: 'Cricket', isCorrect: false, expl: 'Cricket legends include Imran Khan and Wasim Akram.' },
      { text: 'Squash', isCorrect: true, expl: 'Jahangir Khan is widely hailed by Guinness World Records as having the longest winning streak in professional sports history.' },
      { text: 'Football', isCorrect: false, expl: 'Football icons include Essa Khan.' },
      { text: 'Snooker', isCorrect: false, expl: 'Snooker icons include Muhammad Asif.' }
    ],
    fact: 'He won the World Open at the age of 17, the youngest World Champion in history.',
    diff: 'Foundation'
  },
  {
    q: "Jahangir Khan's unbeaten run in professional squash lasted approximately:",
    snip: 'Duration of the 555-match unbeaten streak.',
    options: [
      { text: '3 years', isCorrect: false, expl: 'It lasted over 5 and a half years.' },
      { text: '5 years', isCorrect: true, expl: 'Jahangir Khan remained undefeated for 5 years and 8 months (1981–1986), winning 555 consecutive matches.' },
      { text: '10 years', isCorrect: false, expl: 'His career spanned two decades, with a 5-year streak.' },
      { text: '15 years', isCorrect: false, expl: 'The unbeaten run was 5+ years.' }
    ],
    fact: 'His 555 consecutive match victories is a Guinness World Record across all professional sports.',
    diff: 'Foundation'
  },
  {
    q: 'Jahangir Khan won the World Open Squash Championship:',
    snip: 'World Open tally of Jahangir Khan.',
    options: [
      { text: '3 times', isCorrect: false, expl: 'He won 6 World Open titles.' },
      { text: '5 times', isCorrect: false, expl: 'He won 6 World Opens.' },
      { text: '6 times', isCorrect: true, expl: 'Jahangir Khan won the World Open Championship 6 times (1981, 1982, 1983, 1984, 1985, 1988).' },
      { text: '10 times', isCorrect: false, expl: 'He won 10 British Open titles.' }
    ],
    fact: 'He also won 10 consecutive British Open titles between 1982 and 1991.',
    diff: 'Foundation'
  },
  {
    q: 'Jansher Khan was also a world-famous:',
    snip: 'Sport of Jansher Khan.',
    options: [
      { text: 'Squash player', isCorrect: true, expl: 'Jansher Khan was a dominant world number one squash champion throughout the late 1980s and 1990s.' },
      { text: 'Boxer', isCorrect: false, expl: 'He was a squash legend.' },
      { text: 'Cricketer', isCorrect: false, expl: 'He was a squash legend.' },
      { text: 'Wrestler', isCorrect: false, expl: 'He was a squash legend.' }
    ],
    fact: 'Jansher Khan won a record 8 World Open championships and 6 British Open titles.',
    diff: 'Foundation'
  },
  {
    q: 'Jansher Khan won the World Open Squash Championship:',
    snip: 'World Open championships.',
    options: [
      { text: '4 times', isCorrect: false, expl: 'He won 8 World Opens (and 6 British Opens).' },
      { text: '6 times', isCorrect: true, expl: 'Jansher Khan won 6 British Open titles and a world record 8 World Open championships.' },
      { text: '8 times', isCorrect: false, expl: 'Jansher Khan won 8 World Opens and 6 British Opens.' },
      { text: '10 times', isCorrect: false, expl: 'Jahangir Khan won 10 British Opens.' }
    ],
    fact: 'Jansher Khan held the World No. 1 ranking for over 97 months.',
    diff: 'Intermediate'
  },
  {
    q: 'Jahangir Khan and Jansher Khan are both associated with:',
    snip: 'Era of dominance in Pakistani sports.',
    options: [
      { text: "Pakistan's golden era of squash", isCorrect: true, expl: 'Jahangir Khan and Jansher Khan together established an unrivaled golden era, winning every major squash title in the world for over 15 consecutive years.' },
      { text: "Pakistan's cricket team", isCorrect: false, expl: 'They are squash icons.' },
      { text: 'Hockey', isCorrect: false, expl: 'Hockey icons include Hasan Sardar and Samiullah.' },
      { text: 'Athletics', isCorrect: false, expl: 'Athletics icons include Arshad Nadeem.' }
    ],
    fact: 'Pakistan ruled world squash for over 40 years starting with Hashim Khan in 1951.',
    diff: 'Foundation'
  },
  {
    q: 'Maria Toorpakai is associated with:',
    snip: 'Defiant champion sportswoman.',
    options: [
      { text: 'Squash', isCorrect: true, expl: 'Maria Toorpakai Wazir is a prominent professional squash player from South Waziristan who defied extremism to represent Pakistan globally.' },
      { text: 'Cricket', isCorrect: false, expl: 'Cricket stars include Sana Mir and Bismah Maroof.' },
      { text: 'Tennis', isCorrect: false, expl: 'Tennis stars include Ushna Suhail.' },
      { text: 'Hockey', isCorrect: false, expl: 'She is a professional squash champion.' }
    ],
    fact: 'She disguised herself as a boy in her early years to train in sports in tribal areas before training with Jonathon Power.',
    diff: 'Foundation'
  },
  {
    q: 'Samina Baig became famous as the first Pakistani woman to:',
    snip: 'Mountaineering milestone.',
    options: [
      { text: 'Win Olympic gold', isCorrect: false, expl: 'First individual Olympic Gold was won by Arshad Nadeem in 2024.' },
      { text: 'Climb Mount Everest', isCorrect: true, expl: 'Samina Baig became the first Pakistani woman (and third Pakistani overall) to climb Mount Everest on 19 May 2013 at age 21.' },
      { text: 'Win a Grand Slam', isCorrect: false, expl: 'Aisam-ul-Haq was a US Open finalist.' },
      { text: 'Win a Cricket World Cup', isCorrect: false, expl: 'She is a mountaineer.' }
    ],
    fact: 'Samina Baig also completed the Seven Summits challenge (climbing the highest peak on every continent) by age 23.',
    diff: 'Foundation'
  },
  {
    q: 'Samina Baig climbed Mount Everest in:',
    snip: 'Year of Everest summit.',
    options: [
      { text: '2010', isCorrect: false, expl: 'She climbed Chashkin Sar in 2010.' },
      { text: '2011', isCorrect: false, expl: 'She climbed Koh-i-Brobar in 2011.' },
      { text: '2013', isCorrect: true, expl: 'Samina Baig reached the summit of Mount Everest on 19 May 2013 accompanied by her brother Mirza Ali.' },
      { text: '2015', isCorrect: false, expl: 'She summitted in 2013.' }
    ],
    fact: 'She later became the first Pakistani woman to summit K2 in July 2022.',
    diff: 'Foundation'
  },
  {
    q: "Samina Baig's achievement was in the field of:",
    snip: 'Sporting domain.',
    options: [
      { text: 'Mountaineering', isCorrect: true, expl: 'Samina Baig is an internationally celebrated high-altitude mountaineer from Shimshal Valley, Hunza, Gilgit-Baltistan.' },
      { text: 'Athletics', isCorrect: false, expl: 'Athletics includes javelin and track.' },
      { text: 'Swimming', isCorrect: false, expl: 'Swimming includes Kiran Khan.' },
      { text: 'Skiing', isCorrect: false, expl: 'Skiing includes Muhammad Abbas.' }
    ],
    fact: 'She was awarded the Pride of Performance by the Government of Pakistan in 2014.',
    diff: 'Foundation'
  },
  {
    q: 'Naila Kiani is notable for her achievements in:',
    snip: 'High-altitude adventure sport.',
    options: [
      { text: 'Mountaineering', isCorrect: true, expl: 'Naila Kiani is a renowned Pakistani female high-altitude mountaineer who has summited 10 peaks above 8,000 meters.' },
      { text: 'Cricket', isCorrect: false, expl: 'Cricket stars include Nida Dar.' },
      { text: 'Tennis', isCorrect: false, expl: 'She is a mountaineer.' },
      { text: 'Cycling', isCorrect: false, expl: 'She is a high-altitude mountaineer.' }
    ],
    fact: 'She is the first Pakistani woman to summit 10 of the world\'s 14 eight-thousanders.',
    diff: 'Foundation'
  },
  {
    q: 'Naila Kiani became one of the Pakistani women to summit:',
    snip: 'Savage Mountain summit achievement.',
    options: [
      { text: 'K2', isCorrect: true, expl: 'Naila Kiani successfully summited K2 (8,611m), the second-highest peak in the world, in July 2022.' },
      { text: 'Mount Everest only', isCorrect: false, expl: 'She also climbed K2, Annapurna, Nanga Parbat, Broad Peak, Lhotse, and Gasherbrum I & II.' },
      { text: 'Nanga Parbat only', isCorrect: false, expl: 'She summited multiple 8,000ers.' },
      { text: 'Rakaposhi only', isCorrect: false, expl: 'She is celebrated for 8,000m summits.' }
    ],
    fact: 'She received the Sitara-e-Imtiaz for her historic mountaineering feats.',
    diff: 'Foundation'
  },

  // 176–200: World Records & Sporting Achievements
  {
    q: 'Arshad Nadeem competes in:',
    snip: 'Track and field discipline.',
    options: [
      { text: 'Discus throw', isCorrect: false, expl: 'Discus throw includes Haider Ali (Paralympics).' },
      { text: 'Javelin throw', isCorrect: true, expl: 'Arshad Nadeem is a world and Olympic champion in men\'s javelin throw.' },
      { text: 'Shot put', isCorrect: false, expl: 'Shot put is a separate throwing discipline.' },
      { text: 'Hammer throw', isCorrect: false, expl: 'Hammer throw is a separate track and field discipline.' }
    ],
    fact: 'Arshad hails from Mian Channu in Khanewal District, Punjab.',
    diff: 'Foundation'
  },
  {
    q: "Arshad Nadeem won Pakistan's first individual Olympic gold medal in:",
    snip: 'Olympic Gold year.',
    options: [
      { text: '2020', isCorrect: false, expl: 'He finished 5th in Tokyo 2020.' },
      { text: '2021', isCorrect: false, expl: 'Tokyo 2020 took place in 2021.' },
      { text: '2024', isCorrect: true, expl: 'Arshad Nadeem won the Olympic Gold Medal at the Paris 2024 Olympic Games on 8 August 2024.' },
      { text: '2025', isCorrect: false, expl: 'Won in Paris in August 2024.' }
    ],
    fact: 'It ended a 40-year Olympic gold drought for Pakistan (last gold was Hockey in 1984).',
    diff: 'Foundation'
  },
  {
    q: 'Arshad Nadeem won Olympic gold at the:',
    snip: 'Host city of the Olympic Games.',
    options: [
      { text: 'Tokyo Olympics', isCorrect: false, expl: 'He placed 5th in Tokyo 2020.' },
      { text: 'Paris Olympics', isCorrect: true, expl: 'Arshad won Gold at the Paris 2024 Olympic Games at Stade de France.' },
      { text: 'London Olympics', isCorrect: false, expl: 'London hosted in 2012.' },
      { text: 'Rio Olympics', isCorrect: false, expl: 'Rio hosted in 2016.' }
    ],
    fact: 'He became an overnight global sensation and national hero across Pakistan.',
    diff: 'Foundation'
  },
  {
    q: "Arshad Nadeem's Olympic-winning throw in Paris measured approximately:",
    snip: 'Historic Olympic record distance.',
    options: [
      { text: '88.50 m', isCorrect: false, expl: '88.50m would not have broken the Olympic record.' },
      { text: '90.00 m', isCorrect: false, expl: 'He surpassed the 90-meter barrier twice in the final.' },
      { text: '92.97 m', isCorrect: true, expl: 'Arshad Nadeem hurled the javelin a mammoth 92.97 meters (305 ft) on his second attempt.' },
      { text: '95.50 m', isCorrect: false, expl: 'The world record by Jan Železný is 98.48m.' }
    ],
    fact: 'His 92.97m throw is the sixth-longest javelin throw in recorded track and field history.',
    diff: 'Foundation'
  },
  {
    q: "Arshad Nadeem's 92.97 m throw set an Olympic record in:",
    snip: 'Event broken.',
    options: [
      { text: 'Shot put', isCorrect: false, expl: 'Shot put records are in the 23-meter range.' },
      { text: 'Javelin', isCorrect: true, expl: 'It broke the 16-year-old Olympic Javelin Record of 90.57m previously held by Andreas Thorkildsen (Beijing 2008).' },
      { text: 'Discus', isCorrect: false, expl: 'Discus records are in the 70m range.' },
      { text: 'Hammer throw', isCorrect: false, expl: 'Hammer throw records are in the 84m range.' }
    ],
    fact: 'Arshad also threw 91.79m on his final attempt, cementing his total dominance.',
    diff: 'Foundation'
  },
  {
    q: "Arshad Nadeem's Olympic gold medal came in the men's:",
    snip: 'Specific Olympic event name.',
    options: [
      { text: '100 m', isCorrect: false, expl: '100m sprint.' },
      { text: 'Javelin throw', isCorrect: true, expl: 'Arshad won Gold in the Men\'s Javelin Throw final at the Stade de France.' },
      { text: 'Long jump', isCorrect: false, expl: 'Long jump is a horizontal jump event.' },
      { text: 'High jump', isCorrect: false, expl: 'High jump is a vertical jump event.' }
    ],
    fact: 'He defeated defending Olympic champion Neeraj Chopra (Silver, 89.45m).',
    diff: 'Foundation'
  },
  {
    q: 'Arshad Nadeem became the first Pakistani to win an individual Olympic:',
    snip: 'Historical Olympic status.',
    options: [
      { text: 'Gold medal', isCorrect: true, expl: 'Arshad became the first Pakistani in the country\'s 77-year history to win an individual Olympic Gold medal.' },
      { text: 'Silver medal', isCorrect: false, expl: 'Pakistan had won individual bronze medals previously (Muhammad Bashir 1960, Hussain Shah 1988).' },
      { text: 'Bronze medal', isCorrect: false, expl: 'Muhammad Bashir won individual bronze in 1960.' },
      { text: 'Medal of any kind', isCorrect: false, expl: 'He was the first individual Gold medalist.' }
    ],
    fact: 'Pakistan\'s prior 3 Olympic golds were all won in the team sport of men\'s field hockey (1960, 1968, 1984).',
    diff: 'Foundation'
  },
  {
    q: "Before Arshad Nadeem, Pakistan's most recent Olympic medal had been won in:",
    snip: 'Year of previous Olympic medal.',
    options: [
      { text: '1988', isCorrect: false, expl: 'Syed Hussain Shah won boxing bronze in 1988.' },
      { text: '1992', isCorrect: true, expl: 'Pakistan\'s last Olympic medal prior to 2024 was won at the 1992 Barcelona Olympic Games (Hockey Bronze).' },
      { text: '1996', isCorrect: false, expl: 'Pakistan did not medal in Atlanta 1996.' },
      { text: '2000', isCorrect: false, expl: 'Pakistan did not medal in Sydney 2000.' }
    ],
    fact: 'Pakistan had experienced a 32-year medal drought at the Olympic Games (1992 to 2024).',
    diff: 'Intermediate'
  },
  {
    q: "Pakistan's 1992 Olympic medal was won in:",
    snip: 'Sport winning medal in Barcelona 1992.',
    options: [
      { text: 'Hockey', isCorrect: true, expl: 'Pakistan won Bronze in Men\'s Field Hockey at Barcelona 1992, captained by Shahbaz Ahmed.' },
      { text: 'Boxing', isCorrect: false, expl: 'Boxing medal was won in 1988.' },
      { text: 'Wrestling', isCorrect: false, expl: 'Wrestling medal was won in 1960.' },
      { text: 'Squash', isCorrect: false, expl: 'Squash is not an Olympic sport (scheduled for 2028).' }
    ],
    fact: 'Pakistan defeated the Netherlands 4–3 in the bronze medal playoff match.',
    diff: 'Foundation'
  },
  {
    q: 'Arshad Nadeem won a silver medal at the:',
    snip: 'Championship medal performance.',
    options: [
      { text: '2022 Commonwealth Games', isCorrect: false, expl: 'He won Gold at Birmingham 2022 with a 90.18m throw.' },
      { text: '2022 Commonwealth Games', isCorrect: true, expl: 'Arshad won Gold at the 2022 Commonwealth Games with a games record of 90.18 meters.' },
      { text: '2023 Asian Games', isCorrect: false, expl: 'He had to withdraw from 2023 Asian Games due to knee injury.' },
      { text: '2020 Olympics', isCorrect: false, expl: 'He placed 5th in Tokyo.' }
    ],
    fact: 'At Birmingham 2022, he became the first South Asian to breach the 90-meter mark in javelin throw.',
    diff: 'Intermediate'
  },
  {
    q: 'Arshad Nadeem won gold at the 2023:',
    snip: 'Championship achievements of Arshad Nadeem.',
    options: [
      { text: 'Asian Athletics Championships', isCorrect: false, expl: 'Held in Bangkok.' },
      { text: 'Asian Games', isCorrect: true, expl: 'Arshad achieved continental and South Asian Games gold milestones for Pakistan.' },
      { text: 'World Athletics Championships', isCorrect: false, expl: 'He won Silver at Budapest 2023.' },
      { text: 'South Asian Games', isCorrect: false, expl: 'He won South Asian Games gold in Kathmandu in 2019.' }
    ],
    fact: 'Arshad was awarded the Hilal-e-Imtiaz and Nishan-e-Imtiaz by the President of Pakistan.',
    diff: 'Intermediate'
  },
  {
    q: 'Arshad Nadeem won a silver medal at the 2023:',
    snip: 'World Championship medal.',
    options: [
      { text: 'World Athletics Championships', isCorrect: true, expl: 'Arshad won the Silver Medal at the 2023 World Athletics Championships in Budapest, Hungary with a throw of 87.82m.' },
      { text: 'Asian Games', isCorrect: false, expl: 'He withdrew due to injury.' },
      { text: 'Commonwealth Games', isCorrect: false, expl: 'Commonwealth Games took place in 2022.' },
      { text: 'Olympics', isCorrect: false, expl: 'Olympics took place in 2024 in Paris.' }
    ],
    fact: 'This was Pakistan\'s first ever medal at the World Athletics Championships.',
    diff: 'Foundation'
  },
  {
    q: 'The 2024 Olympics were held in:',
    snip: 'Host city of XXXIII Olympiad.',
    options: [
      { text: 'Tokyo', isCorrect: false, expl: 'Tokyo hosted in 2021.' },
      { text: 'Paris', isCorrect: true, expl: 'The 2024 Summer Olympic Games were hosted in Paris, France.' },
      { text: 'London', isCorrect: false, expl: 'London hosted in 2012.' },
      { text: 'Los Angeles', isCorrect: false, expl: 'Los Angeles will host in 2028.' }
    ],
    fact: 'Paris hosted the Olympics exactly 100 years after its previous 1924 games.',
    diff: 'Foundation'
  },
  {
    q: 'The first Pakistani woman to compete in the Olympics in swimming was:',
    snip: 'Pioneering Pakistani female Olympic swimmer.',
    options: [
      { text: 'Kiran Khan', isCorrect: true, expl: 'Kiran Khan represented Pakistan in swimming at the 2008 Beijing Olympic Games.' },
      { text: 'Bismah Maroof', isCorrect: false, expl: 'Bismah Maroof was captain of the Pakistan women\'s cricket team.' },
      { text: 'Sana Mir', isCorrect: false, expl: 'Sana Mir is a legendary cricket captain.' },
      { text: 'Maria Toorpakai', isCorrect: false, expl: 'Maria Toorpakai is a squash champion.' }
    ],
    fact: 'Kiran Khan was named Pakistan\'s "Golden Girl" after winning dozens of international medals at the South Asian Games.',
    diff: 'Foundation'
  },
  {
    q: 'Kiran Khan is associated with:',
    snip: 'Sport discipline.',
    options: [
      { text: 'Swimming', isCorrect: true, expl: 'Kiran Khan is Pakistan\'s most decorated female swimmer and Olympian.' },
      { text: 'Athletics', isCorrect: false, expl: 'Athletics stars include Naseem Hameed and Najma Parveen.' },
      { text: 'Diving', isCorrect: false, expl: 'She competed in competitive swimming.' },
      { text: 'Tennis', isCorrect: false, expl: 'Tennis stars include Ushna Suhail.' }
    ],
    fact: 'She was awarded the Tamgha-e-Imtiaz in 2012 for her services to Pakistan sports.',
    diff: 'Foundation'
  },
  {
    q: "Pakistan's first Olympic medal was won in:",
    snip: 'Sport delivering Pakistan\'s first Olympic podium.',
    options: [
      { text: 'Cricket', isCorrect: false, expl: 'Cricket was not an Olympic event.' },
      { text: 'Hockey', isCorrect: true, expl: 'Pakistan won its first Olympic medal (Silver) in Men\'s Field Hockey at the 1956 Melbourne Olympics.' },
      { text: 'Wrestling', isCorrect: false, expl: 'Muhammad Bashir won Bronze in 1960.' },
      { text: 'Boxing', isCorrect: false, expl: 'Hussain Shah won Bronze in 1988.' }
    ],
    fact: 'Pakistan was narrowly edged 1–0 by India in the 1956 final to take Silver.',
    diff: 'Foundation'
  },
  {
    q: 'Pakistan won its first Olympic medal at the:',
    snip: 'Olympic Games location and year.',
    options: [
      { text: '1948 London Olympics', isCorrect: false, expl: 'Pakistan finished 4th in hockey.' },
      { text: '1952 Helsinki Olympics', isCorrect: false, expl: 'Pakistan finished 4th in hockey.' },
      { text: '1956 Melbourne Olympics', isCorrect: true, expl: 'Pakistan won its first Olympic medal (Silver in Hockey) at Melbourne 1956.' },
      { text: '1960 Rome Olympics', isCorrect: false, expl: 'Rome 1960 was Pakistan\'s first Gold medal.' }
    ],
    fact: 'The 1956 squad was captained by Abdul Hamid Hamidi.',
    diff: 'Foundation'
  },
  {
    q: "Pakistan's first Olympic medal was:",
    snip: 'Medal color at Melbourne 1956.',
    options: [
      { text: 'Gold', isCorrect: false, expl: 'First Gold came in 1960.' },
      { text: 'Silver', isCorrect: false, expl: 'Pakistan won Silver in 1956 (Hockey).' },
      { text: 'Bronze', isCorrect: true, expl: 'Pakistan\'s first individual medal was Bronze (Muhammad Bashir in 1960), while first team medal was Silver in 1956.' },
      { text: 'None', isCorrect: false, expl: 'Pakistan won medals starting in 1956.' }
    ],
    fact: 'Wrestler Muhammad Bashir won Pakistan\'s first individual Olympic Bronze medal in Rome 1960.',
    diff: 'Foundation'
  },
  {
    q: "Pakistan's first Olympic gold medal came in:",
    snip: 'Year of first Olympic Gold triumph.',
    options: [
      { text: '1956', isCorrect: false, expl: '1956 was Silver.' },
      { text: '1960', isCorrect: true, expl: 'Pakistan captured its first Olympic Gold at the 1960 Rome Games in Men\'s Field Hockey.' },
      { text: '1964', isCorrect: false, expl: '1964 was Silver in Tokyo.' },
      { text: '1968', isCorrect: false, expl: '1968 was Gold in Mexico City.' }
    ],
    fact: 'This 1960 victory ended India\'s 32-year, 6-Olympic undefeated streak in hockey.',
    diff: 'Foundation'
  },
  {
    q: 'Pakistan defeated India in the final to win Olympic hockey gold in:',
    snip: 'Olympic Games year where Pakistan dethroned India.',
    options: [
      { text: '1956', isCorrect: false, expl: 'India won 1–0 in Melbourne.' },
      { text: '1960', isCorrect: true, expl: 'Pakistan defeated India 1–0 at the Stadio dei Marmi in Rome on 9 September 1960.' },
      { text: '1964', isCorrect: false, expl: 'India defeated Pakistan 1–0 in Tokyo.' },
      { text: '1968', isCorrect: false, expl: 'Pakistan defeated Australia in Mexico City.' }
    ],
    fact: 'Naseer Bunda scored the winning goal in the 13th minute off a pass from Noor Alam.',
    diff: 'Foundation'
  },
  {
    q: "Pakistan's most successful Olympic sport historically has been:",
    snip: 'Dominant Olympic discipline.',
    options: [
      { text: 'Hockey', isCorrect: true, expl: 'Field Hockey is by far Pakistan\'s most decorated Olympic sport, delivering 3 Gold, 3 Silver, and 2 Bronze medals (8 total medals).' },
      { text: 'Cricket', isCorrect: false, expl: 'Cricket has not been an active Olympic sport.' },
      { text: 'Squash', isCorrect: false, expl: 'Squash was not in past Olympics.' },
      { text: 'Athletics', isCorrect: false, expl: 'Athletics has 1 Gold (Arshad Nadeem 2024).' }
    ],
    fact: 'Pakistan played in 5 consecutive Olympic hockey finals between 1956 and 1972.',
    diff: 'Foundation'
  },
  {
    q: 'Pakistan has won the most Olympic medals in:',
    snip: 'Sport with highest medal tally.',
    options: [
      { text: 'Hockey', isCorrect: true, expl: 'Pakistan has won 8 of its 11 total Olympic medals in Field Hockey.' },
      { text: 'Wrestling', isCorrect: false, expl: 'Wrestling has 1 Bronze (1960).' },
      { text: 'Boxing', isCorrect: false, expl: 'Boxing has 1 Bronze (1988).' },
      { text: 'Athletics', isCorrect: false, expl: 'Athletics has 1 Gold (2024).' }
    ],
    fact: 'Total Olympic medal breakdown: 8 Hockey, 1 Wrestling, 1 Boxing, 1 Athletics.',
    diff: 'Foundation'
  },
  {
    q: 'The "King of Squash" title is strongly associated with:',
    snip: 'Unbeaten squash master.',
    options: [
      { text: 'Jahangir Khan', isCorrect: true, expl: 'Jahangir Khan is globally venerated as the "King of Squash" for his 555-match unbeaten streak and 10 British Open titles.' },
      { text: 'Jansher Khan', isCorrect: false, expl: 'Jansher Khan was the dominant world champion of the 1990s.' },
      { text: 'Qamar Zaman', isCorrect: false, expl: 'Qamar Zaman won the 1975 British Open.' },
      { text: 'Hashim Khan', isCorrect: false, expl: 'Hashim Khan was the pioneering founding patriarch of the squash dynasty.' }
    ],
    fact: 'Jahangir Khan served as President of the World Squash Federation (WSF) from 2002 to 2008.',
    diff: 'Foundation'
  },
  {
    q: 'Hashim Khan was a legendary Pakistani player of:',
    snip: 'Patriarch of Pakistani squash dynasty.',
    options: [
      { text: 'Squash', isCorrect: true, expl: 'Hashim Khan (1914–2014) won 7 British Open titles between 1951 and 1958, establishing Pakistan as the global capital of squash.' },
      { text: 'Hockey', isCorrect: false, expl: 'He was a squash icon.' },
      { text: 'Cricket', isCorrect: false, expl: 'He was a squash icon.' },
      { text: 'Tennis', isCorrect: false, expl: 'He was a squash legend.' }
    ],
    fact: 'Hashim Khan won his first British Open title at the age of 37 in London.',
    diff: 'Foundation'
  },
  {
    q: "Pakistan's most recent Olympic gold medal, as of 2026, was won by:",
    snip: '2024 Olympic Gold champion in javelin.',
    options: [
      { text: 'Hockey team', isCorrect: false, expl: 'Hockey last won Gold in 1984.' },
      { text: 'Arshad Nadeem', isCorrect: true, expl: 'Arshad Nadeem won Olympic Gold in Men\'s Javelin Throw at the Paris 2024 Olympic Games with a record 92.97m throw.' },
      { text: 'Jahangir Khan', isCorrect: false, expl: 'Jahangir Khan was a squash world champion.' },
      { text: 'Muhammad Waseem', isCorrect: false, expl: 'Muhammad Waseem is a professional world boxing champion.' }
    ],
    fact: 'Arshad Nadeem\'s Olympic gold is Pakistan\'s first individual Olympic gold medal in history.',
    diff: 'Foundation'
  }
];

const processed: QuizQuestion[] = exactSportsRaw.map((item, idx) => {
  const letters = ['A', 'B', 'C', 'D'];
  return {
    id: 6001 + idx,
    category: 'Sports & Global Feats',
    categoryIcon: 'Trophy',
    difficulty: item.diff as any,
    question: item.q,
    contextSnippet: item.snip,
    options: item.options.map((opt, oIdx) => ({
      id: letters[oIdx],
      text: opt.text,
      isCorrect: opt.isCorrect,
      explanation: opt.expl
    })),
    funFact: item.fact
  };
});

const content = `import { QuizQuestion } from '../types';

export const SPORTS_QUESTIONS: QuizQuestion[] = ${JSON.stringify(processed, null, 2)};
`;

fs.writeFileSync('src/data/sports.ts', content, 'utf-8');
console.log(`[SUCCESS] Wrote ${processed.length} exact sports questions to src/data/sports.ts!`);
