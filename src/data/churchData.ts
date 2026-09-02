export interface ChurchServiceItem {
  id: string;
  titleKn: string;
  titleEn: string;
  dayKn: string;
  dayEn: string;
  timeKn: string;
  timeEn: string;
  type: 'sunday' | 'communion' | 'sunday_school' | 'friday' | 'fasting' | 'all_night' | 'youth' | 'cottage';
  descriptionKn: string;
  descriptionEn: string;
  isFeatured?: boolean;
  badgeKn?: string;
  badgeEn?: string;
}

export interface MinistryItem {
  id: string;
  titleKn: string;
  titleEn: string;
  taglineKn: string;
  taglineEn: string;
  descriptionKn: string;
  descriptionEn: string;
  timingKn: string;
  timingEn: string;
  iconName: string;
}

export interface DailyPromise {
  id: string;
  referenceKn: string;
  referenceEn: string;
  verseKn: string;
  verseEn: string;
  themeKn: string;
  themeEn: string;
  encouragementKn: string;
  encouragementEn: string;
}

export interface TestimonialItem {
  id: string;
  nameKn: string;
  nameEn: string;
  placeKn: string;
  placeEn: string;
  titleKn: string;
  titleEn: string;
  storyKn: string;
  storyEn: string;
  category: 'healing' | 'deliverance' | 'family' | 'faith';
}

export interface FaqItem {
  id: string;
  questionKn: string;
  questionEn: string;
  answerKn: string;
  answerEn: string;
  category: 'worship' | 'prayer' | 'location' | 'online' | 'giving';
}

export const CHURCH_INFO = {
  nameKn: "ರೆಹೋಬೋತ್ ಪ್ರಾರ್ಥನಾ ಮಂದಿರ",
  nameEn: "Rehoboth Prayer House",
  locationKn: "ಮಾದಾಪುರ ಬಂಡೆ, ಎಚ್.ಡಿ. ಕೋಟೆ ಹತ್ತಿರ (ಮೈಸೂರು ಜಿಲ್ಲೆ), ಕರ್ನಾಟಕ",
  locationEn: "Madapura Bande, Near H.D. Kote (Mysuru District), Karnataka",
  addressFullKn: "ರೆಹೋಬೋತ್ ಪ್ರಾರ್ಥನಾ ಮಂದಿರ, ಮಾದಾಪುರ ಬಂಡೆ, ಎಚ್.ಡಿ. ಕೋಟೆ ಮುಖ್ಯ ರಸ್ತೆ, ಮೈಸೂರು ಜಿಲ್ಲೆ, ಕರ್ನಾಟಕ",
  addressFullEn: "Rehoboth Prayer House, Madapura Bande, H.D. Kote Main Road, Mysuru District, Karnataka",
  coordinates: "12.116440, 76.388940",
  mapsUrl: "https://maps.app.goo.gl/CYyh1aRHebovm6gS9",
  mapsNavUrl: "https://www.google.com/maps/dir/?api=1&destination=12.11643950916725,76.38894005936905",
  taglineKn: "ದೇವರ ಸನ್ನಿಧಿಯಲ್ಲಿ ಹೊಸ ಆಶೀರ್ವಾದ ಮತ್ತು ಫಲವಂತಿಕೆ",
  taglineEn: "A Place of Divine Room, Fruitfulness & Spiritual Blessing",
  mottoKn: "A HOUSE OF PRAYER FOR ALL NATIONS",
  mottoEn: "A HOUSE OF PRAYER FOR ALL NATIONS",
  establishedYear: "2021",
  pillarKn: "ಪ್ರಾರ್ಥನೆ • ದೇವರ ವಾಕ್ಯ • ಆರಾಧನೆ • ಸೇವೆ",
  pillarEn: "FAITH • PRAYER • GOD'S WORD • COMMUNITY",
  pastorKn: "ಪಾಸ್ಟರ್ ರಮೇಶ್ ಸಿ",
  pastorNameOnlyKn: "ರಮೇಶ್ ಸಿ",
  pastorEn: "Pr. Ramesh C",
  pastorRoleKn: "ಹಿರಿಯ ಸೇವಕರು ಮತ್ತು ಬೈಬಲ್ ಕಾಲೇಜ್ ಶಿಕ್ಷಕರು",
  pastorRoleEn: "SENIOR PASTOR & BIBLE COLLEGE TEACHER",
  pastorBioKn: "ದೇವರ ವಾಕ್ಯ ಮತ್ತು ಪವಿತ್ರಾತ್ಮನ ಮುನ್ನಡೆಸುವಿಕೆಯಲ್ಲಿ ಜನರನ್ನು ಸತ್ಯದ ಮಾರ್ಗದಲ್ಲಿ ಮುನ್ನಡೆಸುತ್ತಿರುವ ಸಮರ್ಪಿತ ಸೇವಕರು. ಹಲವು ವರ್ಷಗಳಿಂದ ಬೈಬಲ್ ಕಾಲೇಜಿನಲ್ಲಿ ಉಪನ್ಯಾಸಕರಾಗಿಯೂ ಅನೇಕ ಸೇವಕರನ್ನು ಸಿದ್ಧಪಡಿಸುತ್ತಿದ್ದಾರೆ.",
  pastorBioEn: "Anointed man of God dedicated to preaching the uncompromised Word and leading families into spiritual breakthrough through relentless intercession. He actively serves as a Bible College Teacher, raising disciples for the Kingdom.",
  phone: "+91 73536 09920",
  phoneRaw: "917353609920",
  callDisplay: "+91 73536 09920",
  whatsapp: "+91 73536 09920",
  whatsappLink: "https://wa.me/917353609920",
  email: "rehobothprayerhouseofficial@gmail.com",
  emailSubject: "Rehoboth Prayer House Enquiry",
  kannadaBibleUrl: "https://wordproject.org/bibles/kn/index.htm",
  aboutTextKn: "ರೆಹೋಬೋತ್ ಪ್ರೇಯರ್ ಹೌಸ್ (ಸ್ಥಾಪನೆ: 2021) ಮೈಸೂರು - ಎಚ್.ಡಿ. ಕೋಟೆ ಮಾರ್ಗದ ಮಾದಾಪುರ ಬಂಡೆಯಲ್ಲಿ ದೇವರ ವಾಕ್ಯವನ್ನು ಸಾರುವ ಮತ್ತು ಕಣ್ಣೀರಿನ ಪ್ರಾರ್ಥನೆಯ ಮೂಲಕ ಆತ್ಮಿಕ ಬಿಡುಗಡೆಯನ್ನು ಹೊಂದಲು ತೆರೆಯಲಾದ ಪವಿತ್ರ ಸ್ಥಳವಾಗಿದೆ. ದೇವರನ್ನು ಆತ್ಮದಲ್ಲೂ ಸತ್ಯದಲ್ಲೂ ಆರಾಧಿಸಲು, ಆತನ ವಾಕ್ಯದ ಆಳವನ್ನು ಅರಿಯಲು, ಪ್ರಾರ್ಥನೆಯಲ್ಲಿ ಬೆಳೆಯಲು ಮತ್ತು ಕರ್ತನ ಪ್ರೀತಿಯಲ್ಲಿ ಐಕ್ಯವಾಗಲು ಎಲ್ಲರನ್ನೂ ಪ್ರೀತಿಯಿಂದ ಸ್ವಾಗತಿಸುತ್ತೇವೆ.",
  aboutTextEn: "Rehoboth Prayer House (Est. 2021) at Madapura Bande near H.D. Kote / Mysuru is a vibrant sanctuary dedicated to the proclamation of the Gospel and heartfelt intercessory prayer. We welcome people from all walks of life to experience God’s transforming presence, biblical fellowship, and divine breakthrough."
};

export const GIVING_INFO = {
  upiId: "7353609920@paytm",
  upiNumber: "7353609920",
  accountHolder: "Rehoboth Prayer House / Pastor Ramesh C",
  bankName: "State Bank of India (SBI)",
  accountNumber: "38920194821",
  ifscCode: "SBIN0008392",
  branch: "H.D. Kote / Mysuru Branch",
  scriptureKn: "“ಪ್ರತಿಯೊಬ್ಬನೂ ದುಃಖದಿಂದಾಗಲಿ ನಿರ್ಬಂಧದಿಂದಾಗಲಿ ಅಲ್ಲ, ತನ್ನ ಹೃದಯದಲ್ಲಿ ನಿರ್ಣಯಿಸಿಕೊಂಡಂತೆ ಕೊಡಲಿ; ಏಕೆಂದರೆ ಸಂತೋಷದಿಂದ ಕೊಡುವವನನ್ನು ದೇವರು ಪ್ರೀತಿಸುತ್ತಾನೆ.” — 2 ಕೊರಿಂಥ 9:7",
  scriptureEn: "“Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver.” — 2 Corinthians 9:7"
};

export const WORD_OF_GOD = {
  referenceKn: "ಯೆರೆಮೀಯ 33:3",
  referenceEn: "Jeremiah 33:3",
  textKn: "“ನನ್ನನ್ನು ಕರೆ, ಆಗ ನಿನಗೆ ಉತ್ತರ ಕೊಡುವೆನು; ನಿನಗೆ ತಿಳಿಯದ ದೊಡ್ಡ ಮಹತ್ತಾದವುಗಳನ್ನು ನಿನಗೆ ತಿಳಿಸುವೆನು.”",
  textEn: "“Call to me and I will answer you, and will tell you great and unsearchable things you do not know.”",
  instructionKn: "ದೇವರ ವಾಕ್ಯವನ್ನು ಪ್ರತಿದಿನ ಓದಿ, ಧ್ಯಾನಿಸಿ ಮತ್ತು ನಿಮ್ಮ ಜೀವನದಲ್ಲಿ ಅನ್ವಯಿಸಿಕೊಳ್ಳಿ.",
  instructionEn: "Read the Word of God daily, meditate on it, and apply it in every step of your life.",
  bibleLink: "https://wordproject.org/bibles/kn/index.htm"
};

export const DAILY_ONLINE_PRAYER = {
  time: "8:30 PM – 9:20 PM",
  titleKn: "ಪ್ರತಿದಿನ Online Prayer ಸಭೆ",
  titleEn: "Daily Evening Online Prayer",
  subtitleKn: "JOIN US LIVE EVERY NIGHT",
  subtitleEn: "JOIN US LIVE EVERY NIGHT",
  descriptionKn: "ಪ್ರತಿದಿನ ಸಂಜೆ 8:30 ರಿಂದ 9:20 ರವರೆಗೆ online conference ಮೂಲಕ ದೇವರ ಸನ್ನಿಧಿಯಲ್ಲಿ ಪ್ರಾರ್ಥನೆ ಮತ್ತು ವಾಕ್ಯ ಧ್ಯಾನ ನಡೆಯುತ್ತದೆ. ನೀವು ಎಲ್ಲೇ ಇದ್ದರೂ ಈ ಪ್ರಾರ್ಥನೆಯಲ್ಲಿ ಪಾಲ್ಗೊಳ್ಳಬಹುದು.",
  descriptionEn: "Every evening from 8:30 PM to 9:20 PM, join our live online conference prayer and word meditation from wherever you are. Call or WhatsApp Pastor to receive the direct meeting connection.",
  phone: "+91 73536 09920",
  whatsappMsg: "Hello Pastor, I would like to join the daily 8:30 PM online prayer."
};

export const CHURCH_SERVICES: ChurchServiceItem[] = [
  {
    id: 'sunday_worship',
    titleKn: 'Sunday Worship Service',
    titleEn: 'Sunday Morning Worship',
    dayKn: 'ಪ್ರತಿ ಭಾನುವಾರ',
    dayEn: 'EVERY SUNDAY',
    timeKn: '10:00 AM – 1:00 PM',
    timeEn: '10:00 AM – 1:00 PM',
    type: 'sunday',
    badgeKn: 'ಮುಖ್ಯ ಆರಾಧನೆ',
    badgeEn: 'MAIN SERVICE',
    descriptionKn: 'ಅಭಿಷಿಕ್ತ ಸ್ತುತಿ ಆರಾಧನೆ, ಕರ್ತನ ವಾಕ್ಯ ಪ್ರಕಟನೆ, ಬಿಡುಗಡೆಯ ಪ್ರಾರ್ಥನೆ ಮತ್ತು ಕೌಟುಂಬಿಕ ಆಶೀರ್ವಾದ.',
    descriptionEn: 'Anointed worship, powerful revelatory preaching of the Word, personal ministry, and family blessings.',
    isFeatured: true
  },
  {
    id: 'lords_supper',
    titleKn: "The Lord's Supper",
    titleEn: "Holy Communion Service",
    dayKn: 'ಪ್ರತಿ ಭಾನುವಾರ',
    dayEn: 'EVERY SUNDAY',
    timeKn: 'ಆರಾಧನೆಯ ಸಂದರ್ಭದಲ್ಲಿ',
    timeEn: 'During Sunday Service',
    type: 'communion',
    badgeKn: 'ಕರ್ತನ ಪಂಕ್ತಿ',
    badgeEn: 'SACRAMENT',
    descriptionKn: 'ಯೇಸುಕ್ರಿಸ್ತನ ಬಲಿದಾನ ಮತ್ತು ರಕ್ತದ ಹೊಸ ಒಡಂಬಡಿಕೆಯನ್ನು ಸ್ಮರಿಸಿ ಪವಿತ್ರ ಪಂಕ್ತಿಯಲ್ಲಿ ಪಾಲ್ಗೊಳ್ಳುವುದು.',
    descriptionEn: 'Communion remembering the sacrificial love and covenant power of our Lord Jesus Christ.',
    isFeatured: false
  },
  {
    id: 'sunday_school',
    titleKn: 'Sunday School (Kids Ministry)',
    titleEn: 'Sunday School for Children',
    dayKn: 'ಪ್ರತಿ ಭಾನುವಾರ',
    dayEn: 'EVERY SUNDAY',
    timeKn: '2:00 PM – 3:00 PM',
    timeEn: '2:00 PM – 3:00 PM',
    type: 'sunday_school',
    badgeKn: 'ಮಕ್ಕಳ ಕೂಟ',
    badgeEn: 'KIDS WING',
    descriptionKn: 'ಮಕ್ಕಳಿಗೆ ಬೈಬಲ್ ಕಥೆಗಳು, ಆಕ್ಷನ್ ಹಾಡುಗಳು, ವಾಕ್ಯ ಕಂಠಪಾಠ, ಚಿತ್ರಕಲೆ ಮತ್ತು ಸಂಸ್ಕಾರಯುತ ಬೋಧನೆ.',
    descriptionEn: 'Interactive Bible lessons, joyful songs, scripture memory work, and godly character shaping.',
    isFeatured: false
  },
  {
    id: 'friday_prayer',
    titleKn: 'Friday Deliverance Prayer',
    titleEn: 'Friday Deliverance & Fasting',
    dayKn: 'ಪ್ರತಿ ಶುಕ್ರವಾರ',
    dayEn: 'EVERY FRIDAY',
    timeKn: '10:00 AM – 12:30 PM',
    timeEn: '10:00 AM – 12:30 PM',
    type: 'friday',
    badgeKn: 'ಉಪವಾಸ ಪ್ರಾರ್ಥನೆ',
    badgeEn: 'DELIVERANCE',
    descriptionKn: 'ಕಣ್ಣೀರಿನ ವಿಜ್ಞಾಪನೆ, ರೋಗ ಬಿಡುಗಡೆ, ಶಾಪ ಪರಿಹಾರ ಮತ್ತು ಆತ್ಮಿಕ ಬಲವರ್ಧನೆಯ ಉಪವಾಸ ಕೂಟ.',
    descriptionEn: 'Deep intercession, spiritual warfare, prayers for healing, and breaking generational bondages.',
    isFeatured: false
  },
  {
    id: 'fasting_prayer',
    titleKn: 'Monthly 3-Day Fasting Prayer',
    titleEn: 'Monthly 3-Day Fasting Revival',
    dayKn: 'ಪ್ರತಿ ತಿಂಗಳ ಆರಂಭ',
    dayEn: 'MONTHLY REVIVAL',
    timeKn: '3 ದಿನಗಳ ವಿಶೇಷ ಉಪವಾಸ',
    timeEn: '3-Day Intensive Fasting',
    type: 'fasting',
    badgeKn: 'ತಿಂಗಳ ನಾವೀನ್ಯತೆ',
    badgeEn: 'SPECIAL RETREAT',
    descriptionKn: 'ಸಭೆ, ದೇಶ, ಕುಟುಂಬಗಳ ಉದ್ಧಾರ ಮತ್ತು ಆತ್ಮಿಕ ನಾವೀನ್ಯತೆಗಾಗಿ 3 ದಿನಗಳ ಅಖಂಡ ಉಪವಾಸ ಪ್ರಾರ್ಥನೆ.',
    descriptionEn: 'Congregational retreat dedicated to national revival, personal transformation, and spiritual clarity.',
    isFeatured: true
  },
  {
    id: 'all_night_prayer',
    titleKn: 'All-Night Vigil & Tarrying Prayer',
    titleEn: 'All-Night Intercession Vigil',
    dayKn: 'ಪ್ರತಿ ತಿಂಗಳ ಕೊನೆಯ ಶುಕ್ರವಾರ',
    dayEn: 'LAST FRIDAY OF MONTH',
    timeKn: 'ರಾತ್ರಿ 10:00 – ಬೆಳಿಗ್ಗೆ 4:30',
    timeEn: '10:00 PM – 4:30 AM',
    type: 'all_night',
    badgeKn: 'ರಾತ್ರಿ ಜಾಗರಣೆ',
    badgeEn: 'ALL NIGHT',
    descriptionKn: 'ಪವಿತ್ರಾತ್ಮನ ಅಭಿಷೇಕ ಮತ್ತು ವಿಶೇಷ ವರಗಳಿಗಾಗಿ ರಾತ್ರಿ ಪೂರ್ತಿ ಜಾಗರಣೆ ಮತ್ತು ಸ್ತುತಿ ಪ್ರಾರ್ಥನೆ.',
    descriptionEn: 'Intense midnight worship, prayer chains, and tarrying for the gifts and fullness of the Holy Spirit.',
    isFeatured: true
  }
];

export const MINISTRIES_DATA: MinistryItem[] = [
  {
    id: 'worship',
    titleKn: 'ಸ್ತುತಿ ಮತ್ತು ಆರಾಧನಾ ಸಚಿವಾಲಯ',
    titleEn: 'Worship & Praise Ministry',
    taglineKn: 'ಆತ್ಮದಲ್ಲೂ ಸತ್ಯದಲ್ಲೂ ದೇವರನ್ನು ಘನಪಡಿಸುವುದು',
    taglineEn: 'Exalting God in Spirit and in Truth',
    descriptionKn: 'ಭಕ್ತಿಪೂರ್ವಕ ಗೀತೆಗಳು ಮತ್ತು ವಾದ್ಯಸಂಗೀತದ ಮೂಲಕ ಸಭೆಯನ್ನು ದೈವಿಕ ಸನ್ನಿಧಿಗೆ ಕೊಂಡೊಯ್ಯುವ ಅಭಿಷಿಕ್ತ ಆರಾಧನಾ ತಂಡ.',
    descriptionEn: 'Anointed choir and musicians leading the congregation into deep reverence and triumphant praise.',
    timingKn: 'ಪ್ರತಿ ಭಾನುವಾರ ಬೆಳಿಗ್ಗೆ 10:00',
    timingEn: 'Sundays at 10:00 AM',
    iconName: 'Music'
  },
  {
    id: 'bible_college',
    titleKn: 'ಬೈಬಲ್ ತರಬೇತಿ ಮತ್ತು ಬೋಧನೆ',
    titleEn: 'Bible College & Discipleship',
    taglineKn: 'ವಾಕ್ಯದಲ್ಲಿ ಬೇರೂರಿದ ಶಿಷ್ಯತ್ವ',
    taglineEn: 'Rooted Firmly in Biblical Truth',
    descriptionKn: 'ಪಾಸ್ಟರ್ ರಮೇಶ್ ಸಿ ಅವರ ಮಾರ್ಗದರ್ಶನದಲ್ಲಿ ದೇವರ ವಾಕ್ಯದ ಸತ್ಯಗಳು, ಸುವಾರ್ತಾ ಪ್ರಚಾರ ಮತ್ತು ನಾಯಕತ್ವ ತರಬೇತಿ.',
    descriptionEn: 'Under Pr. Ramesh C’s leadership, offering in-depth biblical studies, sound doctrine, and servant ministry preparation.',
    timingKn: 'ವಾರದ ನಿಗದಿತ ತರಗತಿಗಳು',
    timingEn: 'Weekly Scheduled Sessions',
    iconName: 'BookOpen'
  },
  {
    id: 'sunday_school',
    titleKn: 'ಸಂಡೆ ಸ್ಕೂಲ್ (ಮಕ್ಕಳ ಸಚಿವಾಲಯ)',
    titleEn: "Children's Sunday School",
    taglineKn: 'ಬಾಲ್ಯದಿಂದಲೇ ದೇವರ ಭಯ ಮತ್ತು ಜ್ಞಾನ',
    taglineEn: 'Guiding Young Hearts in the Ways of the Lord',
    descriptionKn: 'ಚಿಕ್ಕ ಮಕ್ಕಳಿಗೆ ಕ್ರಿಸ್ತನ ಪ್ರೀತಿ, ಬೈಬಲ್ ಕಥೆಗಳು, ನೀತಿ ನಿಯಮಗಳು ಮತ್ತು ಸನ್ನಡತೆಯನ್ನು ಪ್ರೀತಿಯಿಂದ ಕಲಿಸುವ ವೇದಿಕೆ.',
    descriptionEn: 'Dedicated teachers mentoring children with engaging gospel lessons, action songs, and moral foundations.',
    timingKn: 'ಭಾನುವಾರ ಮಧ್ಯಾಹ್ನ 2:00',
    timingEn: 'Sundays at 2:00 PM',
    iconName: 'Smile'
  },
  {
    id: 'youth_fellowship',
    titleKn: 'ಯುವಜನ ಕೂಟ (Youth Fellowship)',
    titleEn: 'Youth Revival Fellowship',
    taglineKn: 'ಲೋಕವನ್ನು ಜಯಿಸುವ ಪವಿತ್ರ ಯುವಪೀಳಿಗೆ',
    taglineEn: 'Empowering the Next Generation for Christ',
    descriptionKn: 'ಯುವಜನರಿಗೆ ಆತ್ಮಿಕ ಮಾರ್ಗದರ್ಶನ, ಪ್ರಾರ್ಥನೆ, ಸವಾಲುಗಳನ್ನು ಎದುರಿಸುವ ಧೈರ್ಯ ಮತ್ತು ದೈವಿಕ ಗುರಿ ನಿರ್ಮಾಣ.',
    descriptionEn: 'Inspiring young men and women with purpose, fellowship, spiritual discipleship, and prayer warfare.',
    timingKn: 'ತಿಂಗಳ 2ನೇ ಮತ್ತು 4ನೇ ಶನಿವಾರ',
    timingEn: '2nd & 4th Saturdays',
    iconName: 'Sparkles'
  },
  {
    id: 'fasting_intercession',
    titleKn: 'ವಿಜ್ಞಾಪನ ಮತ್ತು ಉಪವಾಸ ತಂಡ',
    titleEn: 'Intercessory Prayer Chain',
    taglineKn: 'ಕುಟುಂಬಗಳಿಗಾಗಿ ಕಣ್ಣೀರಿನ ಪ್ರಾರ್ಥನೆ',
    taglineEn: 'Standing in the Gap 24/7',
    descriptionKn: 'ಕಷ್ಟದಲ್ಲಿರುವವರು, ರೋಗಿಗಳು, ವಿವಾಹದ ಆಶೀರ್ವಾದ ಬಯಸುವವರು ಮತ್ತು ದೇಶಕ್ಕಾಗಿ ನಿರಂತರವಾಗಿ ಪ್ರಾರ್ಥಿಸುವ ಮೀಸಲು ತಂಡ.',
    descriptionEn: 'Dedicated prayer warriors continuously lifting up prayer requests, sick persons, and family challenges.',
    timingKn: 'ಪ್ರತಿದಿನ ಸಂಜೆ 8:30 & ಶುಕ್ರವಾರ 10:00 AM',
    timingEn: 'Daily 8:30 PM & Fridays 10 AM',
    iconName: 'HeartHandshake'
  },
  {
    id: 'outreach',
    titleKn: 'ಗ್ರಾಮೀಣ ಸುವಾರ್ತೆ ಮತ್ತು ಸೇವಾ ಕಾರ್ಯ',
    titleEn: 'Rural Outreach & Charity',
    taglineKn: 'ದೀನದಲಿತರಿಗೆ ಕ್ರಿಸ್ತನ ಪ್ರೀತಿಯ ಆಸರೆ',
    taglineEn: 'Sharing Christ’s Love with the Needy',
    descriptionKn: 'ಮಾದಾಪುರ ಮತ್ತು ಸುತ್ತಮುತ್ತಲಿನ ಹಳ್ಳಿಗಳಲ್ಲಿ ಸುವಾರ್ತಾ ಪ್ರಚಾರ, ಬಡವರಿಗೆ ಸಹಾಯ, ಸೌಹಾರ್ದ ಭೇಟಿಗಳು.',
    descriptionEn: 'Extending a helping hand to underprivileged families, prayer home visits, and rural evangelism missions.',
    timingKn: 'ಮಾಸಿಕ ಸೇವಾ ದಿನಗಳು',
    timingEn: 'Monthly Village Visits',
    iconName: 'Users'
  }
];

export const DAILY_PROMISES: DailyPromise[] = [
  {
    id: 'jer_33_3',
    referenceKn: 'ಯೆರೆಮೀಯ 33:3',
    referenceEn: 'Jeremiah 33:3',
    verseKn: '“ನನ್ನನ್ನು ಕರೆ, ಆಗ ನಿನಗೆ ಉತ್ತರ ಕೊಡುವೆನು; ನಿನಗೆ ತಿಳಿಯದ ದೊಡ್ಡ ಮಹತ್ತಾದವುಗಳನ್ನು ನಿನಗೆ ತಿಳಿಸುವೆನು.”',
    verseEn: '“Call to me and I will answer you and tell you great and unsearchable things you do not know.”',
    themeKn: 'ಪ್ರಾರ್ಥನೆಗೆ ಉತ್ತರ',
    themeEn: 'Answered Prayer',
    encouragementKn: 'ಕರ್ತನು ನಿಮ್ಮ ಪ್ರಾರ್ಥನೆಯನ್ನು ಕೇಳಲು ಸಿದ್ಧರಾಗಿದ್ದಾರೆ. ನಂಬಿಕೆಯಿಂದ ಆತನನ್ನು ಕರೆಯಿರಿ.',
    encouragementEn: 'The Lord is waiting to hear your cry today. Call upon Him with a believing heart.'
  },
  {
    id: 'isa_41_10',
    referenceKn: 'ಯೆಶಾಯ 41:10',
    referenceEn: 'Isaiah 41:10',
    verseKn: '“ಹೆದರಬೇಡ, ನಾನು ನಿನ್ನ ಸಂಗಡ ಇದ್ದೇನೆ; ಕಳವಳಗೊಳ್ಳಬೇಡ, ನಾನೇ ನಿನ್ನ ದೇವರು; ನಾನು ನಿನ್ನನ್ನು ಬಲಪಡಿಸುವೆನು, ನಿನಗೆ ಸಹಾಯ ಮಾಡುವೆನು.”',
    verseEn: '“Do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you.”',
    themeKn: 'ದೈವಿಕ ಅಭಯ',
    themeEn: 'Divine Strength',
    encouragementKn: 'ಯಾವುದೇ ಪರಿಸ್ಥಿತಿಗೂ ಹೆದರಬೇಡಿ; ದೇವರ ಬಲಶಾಲಿ ಬಲಗೈ ನಿಮ್ಮನ್ನು ಎತ್ತಿಹಿಡಿಯುತ್ತದೆ.',
    encouragementEn: 'Fear not in any circumstance; God’s righteous right hand upholds you always.'
  },
  {
    id: 'psalm_23_1',
    referenceKn: 'ಕೀರ್ತನೆ 23:1',
    referenceEn: 'Psalm 23:1',
    verseKn: '“ಯೆಹೋವನು ನನ್ನ ಕುರುಬನು; ನನಗೇನೂ ಕೊರತೆಯಾಗದು.”',
    verseEn: '“The Lord is my shepherd, I lack nothing.”',
    themeKn: 'ದೈವಿಕ ಪೋಷಣೆ',
    themeEn: 'Divine Provision',
    encouragementKn: 'ಕರ್ತನೇ ನಿಮ್ಮನ್ನು ಮುನ್ನಡೆಸುತ್ತಿರುವಾಗ ಯಾವುದೇ ಒಳ್ಳೆಯ ವಿಷಯದಲ್ಲಿ ನಿಮಗೆ ಕೊರತೆ ಇರದು.',
    encouragementEn: 'With the Good Shepherd leading your steps, no good thing shall be withheld.'
  },
  {
    id: 'phil_4_19',
    referenceKn: 'ಫಿಲಿಪ್ಪಿ 4:19',
    referenceEn: 'Philippians 4:19',
    verseKn: '“ನನ್ನ ದೇವರು ಕ್ರಿಸ್ತ ಯೇಸುವಿನಲ್ಲಿ ತನ್ನ ಮಹೋನ್ನತ ಐಶ್ವರ್ಯಕ್ಕನುಸಾರವಾಗಿ ನಿಮ್ಮ ಪ್ರತಿಯೊಂದು ಕೊರತೆಯನ್ನು ಪೂರೈಸುವನು.”',
    verseEn: '“And my God will meet all your needs according to the riches of his glory in Christ Jesus.”',
    themeKn: 'ಕೊರತೆಗಳ ನಿವಾರಣೆ',
    themeEn: 'Abundant Supply',
    encouragementKn: 'ನಿಮ್ಮ ಆರ್ಥಿಕ ಮತ್ತು ಕೌಟುಂಬಿಕ ಅಗತ್ಯಗಳನ್ನು ದೇವರು ಅದ್ಭುತವಾಗಿ ಪೂರೈಸುವರು.',
    encouragementEn: 'God is faithful to supply every spiritual, financial, and emotional need of your family.'
  },
  {
    id: 'josh_1_9',
    referenceKn: 'ಯೆಹೋಶುವ 1:9',
    referenceEn: 'Joshua 1:9',
    verseKn: '“ಧೈರ್ಯವಾಗಿರು, ಬಲವಾಗಿರು; ಹೆದರಬೇಡ, ಬೆದರಬೇಡ; ನೀನು ಹೋಗುವ ಕಡೆಯಲ್ಲೆಲ್ಲಾ ನಿನ್ನ ದೇವರಾದ ಯೆಹೋವನು ನಿನ್ನ ಸಂಗಡ ಇರುವನು.”',
    verseEn: '“Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go.”',
    themeKn: 'ವಿಜಯ ಮತ್ತು ಧೈರ್ಯ',
    themeEn: 'Courage & Victory',
    encouragementKn: 'ಮುಂದಿರುವ ಸವಾಲುಗಳನ್ನು ಕಂಡು ಹಿಂಜರಿಯಬೇಡಿ, ದೇವರು ನಿಮ್ಮೊಂದಿಗೆ ಜಯವನ್ನು ನೀಡುವರು.',
    encouragementEn: 'Step boldly into the new week. The Lord goes before you as a consuming fire.'
  },
  {
    id: 'matt_11_28',
    referenceKn: 'ಮತ್ತಾಯ 11:28',
    referenceEn: 'Matthew 11:28',
    verseKn: '“ಪ್ರಯಾಸಪಡುವವರೇ, ಹೊರೆಹೊತ್ತವರೇ, ನೀವೆಲ್ಲರೂ ನನ್ನ ಬಳಿಗೆ ಬನ್ನಿರಿ; ನಾನು ನಿಮಗೆ ವಿಶ್ರಾಂತಿಯನ್ನು ಕೊಡುವೆನು.”',
    verseEn: '“Come to me, all you who are weary and burdened, and I will give you rest.”',
    themeKn: 'ಮನಸ್ಸಿಗೆ ನೆಮ್ಮದಿ',
    themeEn: 'Peace and Rest',
    encouragementKn: 'ಚಿಂತೆಗಳನ್ನು ಕರ್ತನ ಪಾದದ ಬಳಿ ಇಡಿ; ಆತನು ನಿಮಗೆ ಅಪಾರ ಶಾಂತಿಯನ್ನು ದಯಪಾಲಿಸುತ್ತಾರೆ.',
    encouragementEn: 'Cast all your anxieties at Jesus’ feet. His peace surpasses all human understanding.'
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'test_1',
    nameKn: 'ಶಿವಕುಮಾರ್ ಮತ್ತು ಕುಟುಂಬ',
    nameEn: 'Shivakumar & Family',
    placeKn: 'ಮಾದಾಪುರ ಬಂಡೆ',
    placeEn: 'Madapura Bande',
    titleKn: 'ದೀರ್ಘಕಾಲದ ಅನಾರೋಗ್ಯದಿಂದ ಪವಾಡದ ಬಿಡುಗಡೆ',
    titleEn: 'Miraculous Healing from Chronic Illness',
    storyKn: 'ನಮ್ಮ ಕುಟುಂಬದಲ್ಲಿ ತೀವ್ರ ಅನಾರೋಗ್ಯ ಮತ್ತು ಆಸ್ಪತ್ರೆಯ ಖರ್ಚುಗಳಿಂದ ನೆಮ್ಮದಿ ಕಳೆದುಕೊಂಡಿದ್ದೆವು. ರೆಹೋಬೋತ್ ಪ್ರಾರ್ಥನಾ ಮಂದಿರದ ಶುಕ್ರವಾರ ಉಪವಾಸ ಪ್ರಾರ್ಥನೆಯಲ್ಲಿ ಪಾಸ್ಟರ್ ರಮೇಶ್ ಸಿ ಅವರು ಪ್ರಾರ್ಥಿಸಿದ ನಂತರ ದೇವರು ಅದ್ಭುತ ಸ್ವಸ್ಥತೆ ನೀಡಿದರು. ದೇವರಿಗೆ ಕೋಟಿ ಕೋಟಿ ಸ್ತೋತ್ರ.',
    storyEn: 'Our family was overwhelmed with severe medical issues and despair. Through the fervent Friday fasting prayers at Rehoboth Prayer House with Pastor Ramesh C, God miraculously healed our family members and brought restoration.',
    category: 'healing'
  },
  {
    id: 'test_2',
    nameKn: 'ಮಂಜುಳಾ',
    nameEn: 'Manjula',
    placeKn: 'ಎಚ್.ಡಿ. ಕೋಟೆ',
    placeEn: 'H.D. Kote',
    titleKn: 'ಕೌಟುಂಬಿಕ ಶಾಂತಿ ಮತ್ತು ನೆಮ್ಮದಿ',
    titleEn: 'Restoration of Peace in Family',
    storyKn: 'ಕುಟುಂಬದಲ್ಲಿ ನಿರಂತರ ಅಶಾಂತಿ ಮತ್ತು ಸಾಲದ ಬಾಧೆ ಇತ್ತು. ಪ್ರತಿದಿನ ಸಂಜೆ 8:30 ರ Online Prayer ನಲ್ಲಿ ಪಾಲ್ಗೊಂಡು ದೇವರ ವಾಕ್ಯ ಕೇಳುತ್ತಾ ಬಂದೆವು. ಇಂದು ನಮ್ಮ ಮನೆಯಲ್ಲಿ ದೇವರ ಅಪಾರ ಶಾಂತಿ ನೆಲೆಸಿದೆ.',
    storyEn: 'We were suffering from deep mental stress and family disputes. Joining the daily 8:30 PM online prayer brought God’s reassuring presence into our household. Today our home is blessed with peace.',
    category: 'family'
  },
  {
    id: 'test_3',
    nameKn: 'ಆನಂದ್ ಕುಮಾರ್',
    nameEn: 'Anand Kumar',
    placeKn: 'ಮೈಸೂರು',
    placeEn: 'Mysuru',
    titleKn: 'ಉದ್ಯೋಗ ಮತ್ತು ಆರ್ಥಿಕ ಆಶೀರ್ವಾದ',
    titleEn: 'Career Breakthrough & Guidance',
    storyKn: 'ಹಲವು ವರ್ಷಗಳಿಂದ ಸೂಕ್ತ ಕೆಲಸವಿಲ್ಲದೆ ಕಂಗಾಲಾಗಿದ್ದೆ. ಭಾನುವಾರ ಆರಾಧನೆಯಲ್ಲಿ ಪಾಸ್ಟರ್ ಅವರು ಪ್ರಾರ್ಥಿಸಿ ದೇವರ ವಾಗ್ದಾನ ಕೊಟ್ಟರು. ಅದೇ ತಿಂಗಳಲ್ಲಿ ಉತ್ತಮ ಉದ್ಯೋಗ ಲಭಿಸಿತು. ರೆಹೋಬೋತ್ ಸಭೆಗೆ ಧನ್ಯವಾದಗಳು.',
    storyEn: 'After facing career hurdles for years, the pastoral prayers and biblical guidance at Rehoboth gave me renewed faith. God opened doors for an excellent job opportunity within weeks.',
    category: 'faith'
  }
];

export const FAQ_DATA: FaqItem[] = [
  {
    id: 'faq_1',
    questionKn: 'ಆರಾಧನೆಗೆ ಬರಲು ಪೂರ್ವ ನೋಂದಣಿ ಅಥವಾ ಯಾವುದೇ ಶುಲ್ಕವಿದೆಯೇ?',
    questionEn: 'Is there any prior registration or fee to attend church worship?',
    answerKn: 'ಇಲ್ಲ, ರೆಹೋಬೋತ್ ಪ್ರಾರ್ಥನಾ ಮಂದಿರಕ್ಕೆ ಎಲ್ಲರಿಗೂ ಮುಕ್ತ ಸ್ವಾಗತವಿದೆ. ಯಾವುದೇ ಜಾತಿ, ಮತ ಅಥವಾ ಭೇದವಿಲ್ಲದೆ ಯಾರು ಬೇಕಾದರೂ ನೇರವಾಗಿ ಆರಾಧನೆಗೆ ಪಾಲ್ಗೊಳ್ಳಬಹುದು. ಪ್ರವೇಶ ಉಚಿತವಾಗಿದೆ.',
    answerEn: 'No, everyone is warmly welcome without any registration or fee. The doors of Rehoboth Prayer House are open to all people seeking God’s grace.',
    category: 'worship'
  },
  {
    id: 'faq_2',
    questionKn: 'ಪ್ರತಿದಿನ ಸಂಜೆ 8:30 ರ Online Prayer ಗೆ ಹೇಗೆ ಸೇರಬೇಕು?',
    questionEn: 'How can I connect to the daily 8:30 PM Online Prayer?',
    answerKn: 'ಪಾಸ್ಟರ್ ರಮೇಶ್ ಸಿ (+91 73536 09920) ಅವರಿಗೆ WhatsApp ಮೂಲಕ ಸಂದೇಶ ಕಳುಹಿಸಿದರೆ ಅಥವಾ ನೇರವಾಗಿ ಕರೆ ಮಾಡಿದರೆ, ಪ್ರಾರ್ಥನಾ ಸಭೆಯ ಆನ್‌ಲೈನ್ ಲಿಂಕ್/ಕಾನ್ಫರೆನ್ಸ್ ವಿವರಗಳನ್ನು ನೀಡುತ್ತಾರೆ.',
    answerEn: 'Simply send a WhatsApp message or call Pastor Ramesh C (+91 73536 09920), and he will share the direct conference connection link with you.',
    category: 'online'
  },
  {
    id: 'faq_3',
    questionKn: 'ವೈಯಕ್ತಿಕ ಪ್ರಾರ್ಥನೆ ಅಥವಾ ಮನೆ ಪ್ರಾರ್ಥನೆಗಾಗಿ ಪಾಸ್ಟರ್ ಅವರನ್ನು ಭೇಟಿ ಮಾಡಬಹುದೇ?',
    questionEn: 'Can we request a personal counseling session or home prayer visit?',
    answerKn: 'ಹೌದು! ಕೌಟುಂಬಿಕ ಬಿಡುಗಡೆ, ರೋಗ ಸ್ವಸ್ಥತೆ ಅಥವಾ ಹೊಸ ಮನೆ ಪ್ರಾರ್ಥನೆಗಾಗಿ ಪಾಸ್ಟರ್ ರಮೇಶ್ ಸಿ ಅವರನ್ನು ಮುಂಚಿತವಾಗಿ ಫೋನ್ ಕರೆ ಮೂಲಕ ಸಂಪರ್ಕಿಸಿ ಸಮಯ ನಿಗದಿಪಡಿಸಿಕೊಳ್ಳಬಹುದು.',
    answerEn: 'Yes! You can contact Pr. Ramesh C in advance via phone call to arrange personal pastoral prayer, hospital visits, or cottage prayer at your residence.',
    category: 'prayer'
  },
  {
    id: 'faq_4',
    questionKn: 'ಚರ್ಚ್ ಇರುವ ನಿಖರ ಸ್ಥಳ ಎಲ್ಲಿದೆ ಮತ್ತು ಬಸ್ ಸೌಲಭ್ಯವಿದೆಯೇ?',
    questionEn: 'Where is the church located and what is the transit accessibility?',
    answerKn: 'ರೆಹೋಬೋತ್ ಪ್ರಾರ್ಥನಾ ಮಂದಿರವು ಮೈಸೂರು ಜಿಲ್ಲೆಯ ಎಚ್.ಡಿ. ಕೋಟೆ ಮುಖ್ಯ ಮಾರ್ಗದಲ್ಲಿರುವ ಮಾದಾಪುರ ಬಂಡೆಯಲ್ಲಿದೆ (ನಿರ್ದೇಶಾಂಕ: 12.116439, 76.388940). ಮೈಸೂರು ಹಾಗೂ ಎಚ್.ಡಿ. ಕೋಟೆಯಿಂದ ನಿಯಮಿತ ಬಸ್ಸುಗಳು ಹಾಗೂ ವಾಹನಗಳ ಸೌಲಭ್ಯವಿದೆ.',
    answerEn: 'The church is situated at Madapura Bande on the Mysuru - H.D. Kote route in Mysuru District (Coordinates: 12.116440, 76.388940). Frequent bus and taxi connections are available from both Mysuru city and H.D. Kote town.',
    category: 'location'
  },
  {
    id: 'faq_5',
    questionKn: 'ಮಕ್ಕಳಿಗಾಗಿ ಪ್ರತ್ಯೇಕ ಸಚಿವಾಲಯವಿದೆಯೇ?',
    questionEn: 'Are there separate Sunday School programs for children?',
    answerKn: 'ಹೌದು, ಪ್ರತಿ ಭಾನುವಾರ ಮಧ್ಯಾಹ್ನ 2:00 ರಿಂದ 3:00 ರವರೆಗೆ ಮಕ್ಕಳಿಗೆ ಸಂಸ್ಕಾರಯುತ ಬೈಬಲ್ ಕಥೆಗಳು, ಹಾಡುಗಳು ಮತ್ತು ವಾಕ್ಯ ಬೋಧನೆಯ ಸಂಡೆ ಸ್ಕೂಲ್ ನಡೆಯುತ್ತದೆ.',
    answerEn: 'Yes, every Sunday between 2:00 PM and 3:00 PM we host joyful, age-appropriate Sunday School classes for children of all ages.',
    category: 'worship'
  }
];

export const HOW_TO_REACH_GUIDE = {
  titleKn: "ಮಾದಾಪುರ ಬಂಡೆ ತಲುಪುವ ಮಾರ್ಗಸೂಚಿ",
  titleEn: "How to Reach Rehoboth Prayer House",
  highwayKn: "ಮೈಸೂರು - ಎಚ್.ಡಿ. ಕೋಟೆ ಮುಖ್ಯ ರಸ್ತೆ (ಮಾದಾಪುರ ಬಂಡೆ)",
  highwayEn: "Mysuru - H.D. Kote Main Road (Madapura Bande)",
  routes: [
    {
      fromKn: "ಮೈಸೂರಿನಿಂದ (From Mysuru)",
      fromEn: "From Mysuru City",
      dist: "~38 KM",
      timeKn: "45-50 ನಿಮಿಷ",
      timeEn: "45-50 mins",
      descKn: "ಮೈಸೂರು ಗ್ರಾಮಾಂತರ ಬಸ್ ನಿಲ್ದಾಣದಿಂದ ಎಚ್.ಡಿ. ಕೋಟೆ / ಮಾನಂತವಾಡಿ ರಸ್ತೆಯಲ್ಲಿ ನೇರ ಬಸ್ ಪ್ರಯಾಣ ಅಥವಾ ಕಾರು/ಬೈಕ್ ಮೂಲಕ ಸುಲಭವಾಗಿ ತಲುಪಬಹುದು.",
      descEn: "Take the Mysuru – H.D. Kote / Mananthavadi Road. Frequent KSRTC buses and cabs are available directly to Madapura Bande."
    },
    {
      fromKn: "ಎಚ್.ಡಿ. ಕೋಟೆಯಿಂದ (From H.D. Kote)",
      fromEn: "From H.D. Kote Town",
      dist: "~12 KM",
      timeKn: "15-20 ನಿಮಿಷ",
      timeEn: "15-20 mins",
      descKn: "ಎಚ್.ಡಿ. ಕೋಟೆ ಬಸ್ ನಿಲ್ದಾಣದಿಂದ ಮೈಸೂರು ಕಡೆಗೆ ಸಾಗಿದರೆ ಮಾದಾಪುರ ಬಂಡೆ ಚರ್ಚ್ ಸ್ಥಳ ತಲುಪಬಹುದು.",
      descEn: "Head towards Mysuru on the main road; the church is situated near the Madapura Bande landmark."
    },
    {
      fromKn: "ನಂಜನಗೂಡು / ಸರಗೂರು ಕಡೆಯಿಂದ",
      fromEn: "From Nanjangud / Saragur",
      dist: "~30-35 KM",
      timeKn: "35-40 ನಿಮಿಷ",
      timeEn: "35-40 mins",
      descKn: "ಹುಲ್ಲಹಳ್ಳಿ / ಹ್ಯಾಂಡ್‌ಪೋಸ್ಟ್ ಮೂಲಕ ಎಚ್.ಡಿ. ಕೋಟೆ - ಮಾದಾಪುರ ರಸ್ತೆಗೆ ಸಂಪರ್ಕ ಸಾಧಿಸಬಹುದು.",
      descEn: "Connect via Hullahalli / Handpost junction towards H.D. Kote - Madapura route."
    },
    {
      fromKn: "ಬೆಂಗಳೂರಿನಿಂದ (From Bengaluru)",
      fromEn: "From Bengaluru",
      dist: "~185 KM",
      timeKn: "3.5 - 4 ಗಂಟೆ",
      timeEn: "3.5 - 4 hrs",
      descKn: "ಬೆಂಗಳೂರು - ಮೈಸೂರು ಎಕ್ಸ್‌ಪ್ರೆಸ್‌ವೇ -> ಮೈಸೂರು ರಿಂಗ್ ರೋಡ್ -> ಎಚ್.ಡಿ. ಕೋಟೆ ರಸ್ತೆ -> ಮಾದಾಪುರ ಬಂಡೆ.",
      descEn: "Bengaluru – Mysuru Expressway -> Mysuru Ring Road -> H.D. Kote Road -> Madapura Bande."
    }
  ]
};

// Re-export for backwards compatibility
export const SERVICES_LIST = CHURCH_SERVICES;

