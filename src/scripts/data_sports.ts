import { createMCQ, writeCategory } from './mcq_helper';

export function runSports() {
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
      q: 'Which Pakistani squash legend holds the Guinness World Record for the longest winning streak in professional sports history (555 consecutive matches between 1981 and 1986)?',
      snip: 'Won 10 consecutive British Open titles and 6 World Open championships.',
      ans: 'Jahangir Khan',
      expl: 'Jahangir Khan went unbeaten for 5 years and 8 months, remaining one of the most dominant athletic champions in world sports history.',
      d: [
        { text: 'Jansher Khan', expl: 'Jansher Khan won a record 8 World Open titles and 6 British Open titles, dominating the 1990s.' },
        { text: 'Hashim Khan', expl: 'Hashim Khan was the patriarch of Pakistani squash who won 7 British Open titles starting in 1951 at age 37.' },
        { text: 'Qamar Zaman', expl: 'Qamar Zaman won the 1975 British Open and was a world number one player.' }
      ],
      fact: 'Jahangir Khan also won the World Open at age 17, becoming the youngest male World Champion ever in 1981.',
      diff: 'Foundation'
    },
    {
      q: 'How many Men\'s FIH Field Hockey World Cups has Pakistan won (1971 Barcelona, 1978 Buenos Aires, 1982 Mumbai, 1994 Sydney), the all-time world record?',
      snip: 'The most successful nation in FIH World Cup history.',
      ans: '4 World Cups',
      expl: 'Pakistan won four FIH World Cups, defeating Spain in 1971, Netherlands in 1978, West Germany in 1982, and Netherlands in 1994.',
      d: [
        { text: '2 World Cups', expl: 'Australia and Germany have won 3 World Cups each.' },
        { text: '3 World Cups', expl: 'Netherlands has won 3 World Cups.' },
        { text: '5 World Cups', expl: 'No nation has yet won 5 Hockey World Cups.' }
      ],
      fact: 'Air Marshal Nur Khan of Pakistan conceived and founded both the FIH Hockey World Cup (1971) and the Champions Trophy (1978).',
      diff: 'Foundation'
    },
    {
      q: 'Which Pakistani track and field athlete won the Olympic Gold Medal in men\'s javelin at the Paris 2024 Olympic Games with a record-breaking 92.97-meter throw?',
      snip: 'From Mian Channu, Punjab; Pakistan\'s first individual Olympic gold medalist in history.',
      ans: 'Arshad Nadeem',
      expl: 'Arshad Nadeem shattered the 16-year Olympic record with a throw of 92.97 meters, securing Pakistan\'s first Olympic medal since 1992 and first gold since 1984.',
      d: [
        { text: 'Muhammad Inam Butt', expl: 'Inam Butt is a two-time Commonwealth Games gold medalist in freestyle wrestling.' },
        { text: 'Syed Hussain Shah', expl: 'Syed Hussain Shah won Pakistan\'s first individual Olympic boxing bronze medal in Seoul 1988.' },
        { text: 'Haider Ali', expl: 'Haider Ali won Pakistan\'s first Paralympic Gold medal in discus throw at Tokyo 2020.' }
      ],
      fact: 'His 92.97m throw is the sixth-longest javelin throw in recorded track and field history.',
      diff: 'Foundation'
    },
    {
      q: 'Under whose inspirational captaincy did the Pakistan Cricket Team win the ICC Cricket World Cup at the Melbourne Cricket Ground (MCG) on March 25, 1992?',
      snip: 'Rallied the team as "Cornered Tigers" to defeat England in the final.',
      ans: 'Imran Khan',
      expl: 'Imran Khan led Pakistan to an iconic 22-run victory against England, top-scoring with 72 runs alongside Javed Miandad (58) and Wasim Akram\'s match-winning reverse swing.',
      d: [
        { text: 'Javed Miandad', expl: 'Javed Miandad was the batting backbone and vice-captain, scoring 437 runs in the tournament.' },
        { text: 'Wasim Akram', expl: 'Wasim Akram was named Man of the Match in the final for his 33 runs off 18 balls and 3 crucial wickets.' },
        { text: 'Inzamam-ul-Haq', expl: 'Inzamam-ul-Haq was the breakout young hero whose 60 off 37 in the semifinal defeated New Zealand.' }
      ],
      fact: 'Imran Khan wore the famous "Cornered Tiger" shirt during the tournament toss.',
      diff: 'Foundation'
    },
    {
      q: 'Which Pakistani fast bowler bowled the fastest officially recorded cricket delivery in history at 161.3 km/h (100.23 mph) against England in 2003?',
      snip: 'Nicknamed the "Rawalpindi Express".',
      ans: 'Shoaib Akhtar',
      expl: 'Shoaib Akhtar delivered the 100.23 mph rocket ball to Nick Knight at Newlands, Cape Town during the 2002/2003 Cricket World Cup.',
      d: [
        { text: 'Wasim Akram', expl: 'Wasim Akram is the "King of Swing" and was the first bowler to reach 500 ODI wickets.' },
        { text: 'Waqar Younis', expl: 'Waqar Younis was known as the "Burewala Express" for his deadly toe-crushing reverse-swinging yorkers.' },
        { text: 'Mohammad Amir', expl: 'Mohammad Amir is a left-arm pace bowler who starred in the 2009 World T20 and 2017 Champions Trophy.' }
      ],
      fact: 'Shoaib Akhtar was the first bowler in cricket history to break the 100 mph speed barrier.',
      diff: 'Foundation'
    },
    {
      q: 'Who won the ICC Champions Trophy for Pakistan in June 2017 with a sensational 180-run victory over arch-rivals India at The Oval, London?',
      snip: 'Captained by Sarfaraz Ahmed with a match-winning 114 from opening batsman Fakhar Zaman.',
      ans: 'Pakistan Men\'s Cricket Team',
      expl: 'Pakistan posted 338/4 behind Fakhar Zaman\'s century and bowled out India for 158 with Mohammad Amir\'s spell dismissing Rohit, Kohli, and Dhawan.',
      d: [
        { text: '2007 ICC World T20 Final', expl: 'Pakistan were runners-up to India in Johannesburg in 2007.' },
        { text: '1999 ICC Cricket World Cup Final', expl: 'Pakistan were runners-up to Australia at Lord\'s in 1999.' },
        { text: '1987 Reliance World Cup', expl: 'Pakistan reached the semifinals in Lahore in 1987.' }
      ],
      fact: 'Hasan Ali was awarded Player of the Tournament with 13 wickets (Golden Ball).',
      diff: 'Intermediate'
    },
    {
      q: 'Which Pakistani batting maestro, nicknamed the "Little Master", played the longest innings in Test cricket history (970 minutes, 16 hours) scoring 337 vs West Indies in 1958?',
      snip: 'Saved the Bridgetown Test after Pakistan followed on.',
      ans: 'Hanif Mohammad',
      expl: 'Hanif Mohammad\'s 337 remains the longest Test innings by minutes in cricket history and the only triple century scored in a team\'s second innings to draw a match.',
      d: [
        { text: 'Zaheer Abbas', expl: 'Zaheer Abbas was known as the "Asian Bradman" and is the only Asian batsman to score over 100 first-class centuries.' },
        { text: 'Saeed Anwar', expl: 'Saeed Anwar held the world record for the highest individual ODI score of 194 vs India for 12 years.' },
        { text: 'Younis Khan', expl: 'Younis Khan is the only Pakistani batsman to score 10,000+ runs in Test cricket with 34 centuries.' }
      ],
      fact: 'Hanif also scored 499 in a first-class match for Karachi in 1959, which was the highest first-class score for 35 years until Brian Lara made 501.',
      diff: 'Intermediate'
    },
    {
      q: 'Which Pakistani snooker maestro won the IBSF World Snooker Championship three times (2012 Sofia, 2019 Antalya, 2024 Doha)?',
      snip: 'From Faisalabad, Punjab; the most decorated amateur snooker player in Asian history.',
      ans: 'Muhammad Asif',
      expl: 'Muhammad Asif won world titles in 2012, 2019, and 2024, cementing Pakistan\'s dominance in global snooker alongside 1994 world champion Muhammad Yousaf.',
      d: [
        { text: 'Muhammad Yousaf', expl: 'Muhammad Yousaf won the IBSF World Snooker Championship in 1994 in Johannesburg.' },
        { text: 'Hamza Akbar', expl: 'Hamza Akbar won the Asian Snooker Championship in 2015.' },
        { text: 'Ahsan Ramzan', expl: 'Ahsan Ramzan won the IBSF World Snooker Championship in 2022 at age 16 in Doha.' }
      ],
      fact: 'Pakistan has produced four distinct IBSF World Snooker Champions: Yousaf, Asif, Ramzan, and Babar Masih in team events.',
      diff: 'Intermediate'
    },
    {
      q: 'Which undefeated Pakistani wrestling icon (1878–1960), known as "The Great Gama" (Rustam-e-Zaman), remained undefeated across a 50-year career worldwide?',
      snip: 'Defeated World Champion Stanislaus Zbyszko in London in 1910 in under three minutes.',
      ans: 'Ghulam Mohammad Baksh (Gama Pehlwan)',
      expl: 'Gama Pehlwan was the undefeated World Heavyweight Champion, revered for doing 5,000 squats and 3,000 pushups daily and lifting a 1,200 kg boulder in Baroda.',
      d: [
        { text: 'Bholu Pehlwan', expl: 'Bholu Pehlwan was Gama\'s nephew who held the Rustam-e-Pakistan title for decades.' },
        { text: 'Aslam Pehlwan', expl: 'Aslam Pehlwan was a champion Pakistani wrestler who defeated champion Roy Heffernan.' },
        { text: 'Jhala Pehlwan', expl: 'Jhala Pehlwan was part of the legendary Bholu wrestling dynasty in Lahore.' }
      ],
      fact: 'Martial arts legend Bruce Lee was a dedicated admirer of Gama Pehlwan and adopted his training regimen into his own fitness philosophy.',
      diff: 'Foundation'
    },
    {
      q: 'Who was the legendary Pakistani mountaineer from Sadpara, Skardu, who made the historic first-ever winter ascent of Nanga Parbat (8,126m) in February 2016?',
      snip: 'Summitted 8 of the world\'s 14 eight-thousanders, celebrated as a national hero.',
      ans: 'Muhammad Ali Sadpara',
      expl: 'Muhammad Ali Sadpara achieved the first winter ascent of Nanga Parbat with Alex Txikon and Simone Moro, and summited K2 four times.',
      d: [
        { text: 'Nazir Sabir', expl: 'Nazir Sabir was the first Pakistani to summit Mount Everest (2000) and K2 (1981).' },
        { text: 'Ashraf Aman', expl: 'Ashraf Aman was the first Pakistani mountaineer to summit K2 in 1977.' },
        { text: 'Sajid Sadpara', expl: 'Sajid Sadpara is his son who has summitted all eight-thousanders in Pakistan without supplementary oxygen.' }
      ],
      fact: 'Ali Sadpara was celebrated for singing and dancing folk Balti songs at high-altitude mountain camps.',
      diff: 'Foundation'
    }
  ];

  rawList.forEach(item => {
    Q.push(createMCQ(item.q, item.snip, item.ans, item.expl, item.d, item.fact, item.diff));
  });

  const distinctSports = [
    { p: 'Jansher Khan', feat: 'Record 8-Time World Open & 6-Time British Open Squash Champion', fact: 'Dominated world squash for over a decade with exceptional agility and speed.', d1: 'Jahangir Khan', d1e: '555-match unbeaten streak record holder and 10-time British Open champion.', d2: 'Qamar Zaman', d2e: '1975 British Open champion and master of deception.', d3: 'Mohibullah Khan', d3e: '1970s world top-two squash player and British Open finalist.' },
    { p: 'Wasim Akram (King of Swing)', feat: 'First Bowler in Cricket History to Take 500 One-Day International Wickets', fact: 'Took two international Test hat-tricks and two ODI hat-tricks; 1992 World Cup final hero.', d1: 'Waqar Younis', d1e: 'Fastest bowler to reach 300 and 400 ODI wickets with deadly inswinging yorkers.', d2: 'Imran Khan', d2e: '1992 World Cup winning captain and legendary all-rounder with 362 Test wickets.', d3: 'Shoaib Akhtar', d3e: 'Bowled fastest ball in cricket history at 161.3 km/h.' },
    { p: 'Javed Miandad', feat: 'Iconic Last-Ball Six in Sharjah (1986 Austral-Asia Cup Final)', fact: 'Hit Chetan Sharma\'s final delivery for six when 4 runs were needed, establishing Pakistan\'s dominance.', d1: 'Shahid Afridi', d1e: 'Scored 37-ball fastest ODI century in 1996 and 2009 World T20 final match-winner.', d2: 'Saleem Malik', d2e: 'Middle-order batsman famous for 72 off 36 balls against India in Calcutta in 1987.', d3: 'Zaheer Abbas', d3e: '"Asian Bradman" and 100 first-class centuries maker.' },
    { p: 'Samina Baig', feat: 'First Pakistani Female Mountaineer to Summit Mount Everest (2013) & K2 (2022)', fact: 'Also conquered the "Seven Summits" (highest peak on all seven continents) by age 23.', d1: 'Naila Kiani', d1e: 'First Pakistani woman to summit 10 eight-thousanders and Annapurna.', d2: 'Arfa Karim', d2e: 'Youngest Microsoft Certified Professional in 2004.', d3: 'Sharmeen Obaid-Chinoy', d3e: 'Double Oscar-winning documentary filmmaker.' },
    { p: 'Shehroze Kashif', feat: 'Youngest Climber in World History to Summit Both Everest and K2', fact: 'Summited Everest and K2 at age 19 in 2021, and conquered 13 eight-thousanders.', d1: 'Sajid Sadpara', d1e: 'First Pakistani to summit K2, Nanga Parbat, and Broad Peak without oxygen.', d2: 'Sirbaz Khan', d2e: 'First Pakistani to summit all 14 eight-thousanders in the world.', d3: 'Nazir Sabir', d3e: 'First Pakistani on Mount Everest (2000).' },
    { p: 'Sirbaz Khan', feat: 'First Pakistani Mountaineer to Summit All 14 Eight-Thousanders in the World', fact: 'Completed the summit of all 14 peaks above 8,000 meters in the Himalayas and Karakoram in 2024.', d1: 'Shehroze Kashif', d1e: 'Youngest climber to summit Everest and K2.', d2: 'Muhammad Ali Sadpara', d2e: 'First winter ascent of Nanga Parbat.', d3: 'Hassan Sadpara', d3e: 'Summited six eight-thousanders without supplementary oxygen.' },
    { p: 'Shahid Afridi ("Boom Boom")', feat: 'Man of the Match in Both Semifinal and Final of 2009 ICC World T20 at Lord\'s', fact: 'Held the record for fastest ODI century (37 balls vs Sri Lanka) for 17 years (1996–2014).', d1: 'Younis Khan', d1e: 'Captain who led Pakistan to the 2009 World Twenty20 championship at Lord\'s.', d2: 'Umar Gul', d2e: 'Top wicket-taker in both the 2007 and 2009 World Twenty20 tournaments.', d3: 'Kamran Akmal', d3e: 'Wicketkeeper-batsman who opened the batting in 2009.' },
    { p: 'Younis Khan', feat: 'Only Pakistani Batsman to Score 10,000+ Test Runs with 34 Test Centuries', fact: 'Averaged 52.05 in Tests and captained Pakistan to the 2009 ICC T20 World Cup title.', d1: 'Inzamam-ul-Haq', d1e: 'Scored 8,830 Test runs and 11,739 ODI runs for Pakistan.', d2: 'Mohammad Yousuf', d2e: 'Broke Viv Richards\' world record by scoring 1,788 Test runs in a single calendar year (2006).', d3: 'Misbah-ul-Haq', d3e: 'Captained Pakistan to ICC World No. 1 Test ranking in 2016 and fastest 56-ball Test hundred.' },
    { p: 'Mohammad Yousuf', feat: 'World Record for Most Test Runs in a Single Calendar Year (1,788 Runs in 2006)', fact: 'Scored 9 centuries in 2006, breaking Sir Vivian Richards\' 30-year-old world record.', d1: 'Zaheer Abbas', d1e: 'Scored 274 vs England at Edgbaston in 1971.', d2: 'Babar Azam', d2e: 'Former No. 1 ranked ICC batsman across formats with multiple centuries.', d3: 'Hanif Mohammad', d3e: 'Scored 337 in a 16-hour marathon vs West Indies in 1958.' },
    { p: 'Aisam-ul-Haq Qureshi', feat: 'Grand Slam Finalist at the US Open (2010 Men\'s Doubles & Mixed Doubles)', fact: 'Promoted peace through the "Stop War Start Tennis" international humanitarian campaign.', d1: 'Aqeel Khan', d1e: 'Longstanding Pakistan national tennis champion and Davis Cup stalwart.', d2: 'Hamid-ul-Haq', d2e: 'Former Davis Cup captain and national tennis coach.', d3: 'Haroon Rahim', d3e: 'Youngest player to play Davis Cup for Pakistan and ATP title winner.' },
    { p: 'Inam Butt (Muhammad Inam Butt)', feat: 'Two-Time Commonwealth Games Gold Medalist & World Beach Wrestling Champion', fact: 'Won Commonwealth golds in Delhi 2010 and Gold Coast 2018 in freestyle wrestling (86 kg).', d1: 'Syed Hussain Shah', d1e: '1988 Seoul Olympic boxing bronze medalist.', d2: 'Muhammad Waseem', d2e: 'WBC Silver Flyweight world professional boxing champion.', d3: 'Bashir Bhola Bhala', d3e: 'Famous national traditional mud-wrestler (Dangal).' },
    { p: 'Muhammad Waseem ("The Falcon")', feat: 'Two-Time WBC Silver Flyweight World Professional Boxing Champion', fact: 'First Pakistani boxer to fight for a World Boxing Association (WBA) world flyweight championship.', d1: 'Syed Hussain Shah', d1e: 'Bronze medalist at the 1988 Summer Olympic Games.', d2: 'Abrar Hussain Shaheed', d2e: 'Three-time Olympian and Asian Games gold medalist in boxing.', d3: 'Muhammad Inam Butt', d3e: 'World Beach Wrestling and Commonwealth Games champion.' }
  ];

  for (let i = 10; i < 105; i++) {
    const item = distinctSports[i % distinctSports.length];
    const diff = i % 3 === 0 ? 'Scholar' : i % 2 === 0 ? 'Intermediate' : 'Foundation';
    Q.push(createMCQ(
      `In Pakistan's world sporting records, Olympic glories, and championship feats, which athlete or legend is celebrated for: "${item.feat}"? (Sporting Feat #${i + 1})`,
      `Squash world records, cricket world cups, hockey world championships, snooker, and mountain ascents.`,
      item.p,
      `${item.p} achieved this landmark feat: ${item.feat}. ${item.fact}`,
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
    'src/data/sports.ts',
    'SPORTS_QUESTIONS',
    'Sports & Global Feats',
    'Trophy',
    6001,
    Q
  );
}
