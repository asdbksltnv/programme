/* Conference metadata, organisations and sessions.
   All text is trilingual: en / ru / uz. */
window.PROG = window.PROG || {};

PROG.event = {
  date: "2026-10-24",
  tz: "Asia/Tashkent",
  tzOffsetMin: 300,
  title: {
    en: "Scientific Foundations and Practical Results of the Use of Modern Technologies in Traumatology and Orthopedics",
    ru: "Научные основы и практические результаты применения современных технологий в травматологии и ортопедии",
    uz: "Travmatologiya va ortopediyada zamonaviy texnologiyalarni qo‘llashning ilmiy asoslari va amaliy natijalari"
  },
  kicker: {
    en: "Programme of the Scientific and Practical Conference of Traumatologists and Orthopedists of Uzbekistan",
    ru: "Программа научно-практической конференции травматологов-ортопедов Узбекистана",
    uz: "O‘zbekiston travmatolog-ortopedlarining ilmiy-amaliy konferensiyasi dasturi"
  },
  organisers: {
    en: ["Ministry of Health of the Republic of Uzbekistan", "Republican Specialized Scientific and Practical Medical Center of Traumatology and Orthopedics", "Association of Traumatologists and Orthopedists"],
    ru: ["Министерство здравоохранения Республики Узбекистан", "Республиканский специализированный научно-практический медицинский центр травматологии и ортопедии", "Ассоциация травматологов-ортопедов Республики Узбекистан"],
    uz: ["O‘zbekiston Respublikasi Sog‘liqni saqlash vazirligi", "Respublika ixtisoslashtirilgan travmatologiya va ortopediya ilmiy-amaliy tibbiyot markazi", "Travmatolog-ortopedlar assotsiatsiyasi"]
  },
  dateText: {
    en: "Saturday, 24 October 2026",
    ru: "Суббота, 24 октября 2026",
    uz: "Shanba, 2026-yil 24-oktabr"
  },
  venue: {
    en: "AZIMUT Grand Hotel Tashkent, 107A Amir Temur Avenue, Tashkent",
    ru: "г. Ташкент, AZIMUT Grand Hotel Tashkent, проспект Амира Темура, 107А",
    uz: "Toshkent sh., AZIMUT Grand Hotel Tashkent, Amir Temur shoh ko‘chasi, 107A"
  },
  venueShort: { en: "AZIMUT Grand Hotel Tashkent", ru: "AZIMUT Grand Hotel Tashkent", uz: "AZIMUT Grand Hotel Tashkent" },
  regulations: {
    en: ["Plenary session: 15 minutes per presentation", "Breakout session: 10 minutes per presentation"],
    ru: ["Пленарное заседание — 15 минут", "Секционное заседание — 10 минут"],
    uz: ["Yalpi majlis — 15 daqiqa", "Sho‘ba majlisi — 10 daqiqa"]
  },
  materials: {
    en: "Presentation materials must be sent to the Organizing Committee representative no later than 2 days before the event, indicating the title of the presentation and the speaker's full name, academic degree, academic title and position.",
    ru: "Материалы для демонстрации должны быть отправлены представителю Оргкомитета не позднее, чем за 2 суток до начала мероприятия с указанием наименования доклада, Ф.И.О., ученой степени, ученого звания и должности докладчика.",
    uz: "Namoyish materiallari tadbir boshlanishidan kamida 2 sutka oldin Tashkiliy qo‘mita vakiliga ma’ruza nomi, ma’ruzachining F.I.Sh., ilmiy darajasi, ilmiy unvoni va lavozimi ko‘rsatilgan holda yuborilishi lozim."
  },
  phones: ["+998 91 165 46 17", "+998 90 915 74 57", "+998 91 166 00 59"]
};

/* Organisations: key -> [country, en, ru, uz] */
PROG.orgs = {
  rsc: ["UZ", "Republican Specialized Scientific and Practical Medical Center of Traumatology and Orthopedics, Tashkent", "Республиканский специализированный научно-практический медицинский центр травматологии и ортопедии, Ташкент", "Respublika ixtisoslashtirilgan travmatologiya va ortopediya ilmiy-amaliy tibbiyot markazi, Toshkent"],
  vreden: ["RU", "R.R. Vreden National Medical Research Center of Traumatology and Orthopedics, Saint Petersburg", "НМИЦ травматологии и ортопедии им. Р.Р. Вредена, Санкт-Петербург", "R.R. Vreden nomidagi Milliy travmatologiya va ortopediya tibbiy tadqiqot markazi, Sankt-Peterburg"],
  turner: ["RU", "H. Turner National Medical Research Center for Children's Orthopedics and Trauma Surgery, Saint Petersburg", "НМИЦ детской травматологии и ортопедии им. Г.И. Турнера, Санкт-Петербург", "G.I. Turner nomidagi Milliy bolalar travmatologiyasi va ortopediyasi tibbiy tadqiqot markazi, Sankt-Peterburg"],
  priorov: ["RU", "N.N. Priorov National Medical Research Center of Traumatology and Orthopedics, Moscow", "НМИЦ травматологии и ортопедии им. Н.Н. Приорова, Москва", "N.N. Priorov nomidagi Milliy travmatologiya va ortopediya tibbiy tadqiqot markazi, Moskva"],
  pirogov: ["RU", "N.I. Pirogov Clinic of High Medical Technologies, Saint Petersburg State University", "Клиника высоких медицинских технологий им. Н.И. Пирогова СПбГУ, Санкт-Петербург", "Sankt-Peterburg davlat universitetining N.I. Pirogov nomidagi yuqori tibbiy texnologiyalar klinikasi"],
  veltishchev: ["RU", "Yu.E. Veltishchev Research and Clinical Institute for Pediatrics and Pediatric Surgery, Pirogov Russian National Research Medical University, Saint Petersburg", "НИИ педиатрии и детской хирургии им. Ю.Е. Вельтищева, РНИМУ им. Н.И. Пирогова, Санкт-Петербург", "N.I. Pirogov nomidagi Rossiya milliy tadqiqot tibbiyot universitetining Yu.E. Veltishchev nomidagi pediatriya va bolalar jarrohligi ilmiy-tadqiqot instituti"],
  tsivyan: ["RU", "Ya.L. Tsivyan Novosibirsk Research Institute of Traumatology and Orthopedics, Novosibirsk", "Новосибирский НИИ травматологии и ортопедии им. Я.Л. Цивьяна, Новосибирск", "Ya.L. Tsivyan nomidagi Novosibirsk travmatologiya va ortopediya ilmiy-tadqiqot instituti, Novosibirsk"],
  bsmu: ["RU", "Bashkir State Medical University, Ufa", "Башкирский государственный медицинский университет, Уфа", "Boshqird davlat tibbiyot universiteti, Ufa"],
  nckto: ["KG", "National Center of Traumatology and Orthopedics, Bishkek", "Национальный центр травматологии и ортопедии, Бишкек", "Travmatologiya va ortopediya milliy markazi, Bishkek"],
  tyumen: ["RU", "Tyumen State Medical University, Tyumen", "Тюменский государственный медицинский университет, Тюмень", "Tyumen davlat tibbiyot universiteti, Tyumen"],
  artemis: ["IN", "Artemis Hospital, Gurgaon", "Госпиталь Артемис, Гургаон", "Artemis kasalxonasi, Gurgaon"],
  tianjin: ["CN", "Chinese Orthopaedic Association; Tianjin Hospital", "Китайская ортопедическая ассоциация; больница Тяньцзиня", "Xitoy ortopedlar assotsiatsiyasi; Tyanszin kasalxonasi"],
  zhangzhou: ["CN", "Zhangzhou Third Hospital", "Третья больница Чжанчжоу", "Chjanchjou uchinchi kasalxonasi"],
  bari: ["BD", "Bari-Ilizarov Orthopaedic Centre, Dhaka", "Bari-Ilizarov Orthopaedic Centre, Дакка", "Bari-Ilizarov Orthopaedic Centre, Dakka"],
  avicenna: ["TJ", "Avicenna Tajik State Medical University, Dushanbe", "Таджикский государственный медицинский университет им. Абу Али ибн Сино, Душанбе", "Abu Ali ibn Sino nomidagi Tojikiston davlat tibbiyot universiteti, Dushanbe"],
  phthisio: ["RU", "Saint Petersburg Research Institute of Phthisiopulmonology", "Санкт-Петербургский НИИ фтизиопульмонологии", "Sankt-Peterburg ftiziopulmonologiya ilmiy-tadqiqot instituti"],
  pkupeople: ["CN", "Peking University People's Hospital, Beijing", "Народная больница Пекинского университета, Пекин", "Pekin universiteti Xalq kasalxonasi, Pekin"],
  shalby: ["IN", "Shalby Sanar International Hospital, Gurugram", "Международная больница Shalby Sanar, Гуруграм", "Shalby Sanar xalqaro kasalxonasi, Gurugram"],
  ochapovsky: ["RU", "Prof. S.V. Ochapovsky Regional Clinical Hospital No. 1, Krasnodar", "Краевая клиническая больница №1 им. проф. С.В. Очаповского, Краснодар", "Prof. S.V. Ochapovskiy nomidagi 1-son o‘lka klinik kasalxonasi, Krasnodar"],
  indoved: ["IN", "Indoved Clinic, Ahmedabad", "Клиника Indoved, Ахмадабад", "Indoved klinikasi, Ahmadobod"],
  suining: ["CN", "Suining Central Hospital", "Центральная больница, Суйнин", "Suyning markaziy kasalxonasi"],
  dodia: ["IN", "Dodia Orthocare Clinic; Clinic at Guru Govind Singh University, Jamnagar", "Клиника Dodia Orthocare; клиника при университете Guru Govind Singh, Джамнагар", "Dodia Orthocare klinikasi; Guru Govind Singx nomidagi universitet klinikasi, Jamnagar"],
  pku3: ["CN", "Peking University Third Hospital, Beijing", "Третья больница Пекинского университета, Пекин", "Pekin universiteti uchinchi kasalxonasi, Pekin"],
  urunov: ["TJ", "S. Urunov City Clinical Hospital, Institute of Postgraduate Education in Healthcare, Khujand", "Городская клиническая больница им. С. Урунова, Институт последипломного образования в сфере здравоохранения, Худжанд", "S. Urunov nomidagi shahar klinik kasalxonasi, Xo‘jand"],
  osh: ["KG", "Osh City Clinical Hospital, Osh", "Ошская городская клиническая больница, Ош", "O‘sh shahar klinik kasalxonasi, O‘sh"],
  ilizarov: ["RU", "Academician G.A. Ilizarov National Medical Research Center for Traumatology and Orthopedics, Kurgan", "НМИЦ травматологии и ортопедии им. акад. Г.А. Илизарова, Курган", "Akademik G.A. Ilizarov nomidagi Milliy travmatologiya va ortopediya tibbiy tadqiqot markazi, Kurgan"],
  shanxi: ["CN", "Second Hospital of Shanxi Medical University, Taiyuan", "Вторая больница Шаньсийского медицинского университета, Тайюань", "Shansi tibbiyot universitetining ikkinchi klinikasi, Tayyuan"],
  rostov: ["RU", "Rostov Clinical Hospital, Rostov-on-Don", "Ростовская клиническая больница, Ростов-на-Дону", "Rostov klinik kasalxonasi, Rostov-na-Donu"],
  almaty4: ["KZ", "City Clinical Hospital No. 4, Almaty", "Городская клиническая больница №4, Алматы", "4-son shahar klinik kasalxonasi, Olmaota"],
  asfendiyarov: ["KZ", "S.D. Asfendiyarov Kazakh National Medical University, Almaty", "Казахский национальный медицинский университет им. С.Д. Асфендиярова, Алматы", "S.D. Asfendiyarov nomidagi Qozoq milliy tibbiyot universiteti, Olmaota"],
  samsmu: ["UZ", "Samarkand State Medical University, Samarkand", "Самаркандский государственный медицинский университет, Самарканд", "Samarqand davlat tibbiyot universiteti, Samarqand"],
  samfil: ["UZ", "Samarkand Branch of the Republican Specialized Scientific and Practical Medical Center of Traumatology and Orthopedics", "Самаркандский филиал Республиканского специализированного научно-практического медицинского центра травматологии и ортопедии", "Respublika ixtisoslashtirilgan travmatologiya va ortopediya ilmiy-amaliy tibbiyot markazi Samarqand filiali"],
  tsmu: ["UZ", "Tashkent State Medical University, Tashkent", "Ташкентский государственный медицинский университет, Ташкент", "Toshkent davlat tibbiyot universiteti, Toshkent"],
  bukhreg: ["UZ", "Bukhara Regional Multidisciplinary Medical Center, Bukhara", "Бухарский областной многопрофильный медицинский центр, Бухара", "Buxoro viloyat ko‘p tarmoqli tibbiyot markazi, Buxoro"],
  bukhinst: ["UZ", "Abu Ali ibn Sino Bukhara State Medical Institute, Bukhara", "Бухарский государственный медицинский институт им. Абу Али ибн Сино, Бухара", "Abu Ali ibn Sino nomidagi Buxoro davlat tibbiyot instituti, Buxoro"],
  akfa: ["UZ", "Akfa Medline University Clinic, Tashkent", "Клиника университета «Akfa Medline», Ташкент", "«Akfa Medline» universiteti klinikasi, Toshkent"],
  cau: ["UZ", "Central Asian University Clinic, Tashkent", "Клиника Central Asian University, Ташкент", "Central Asian University klinikasi, Toshkent"],
  gavhar: ["UZ", "Gavhar Clinic, Tashkent", "Клиника «Гавхар», Ташкент", "«Gavhar» klinikasi, Toshkent"],
  andijan: ["UZ", "Andijan State Medical Institute, Andijan", "Андижанский государственный медицинский институт, Андижан", "Andijon davlat tibbiyot instituti, Andijon"],
  istanbul: ["TR", "Istanbul Medical University, Istanbul", "Стамбульский медицинский университет, Стамбул", "Istanbul tibbiyot universiteti, Istanbul"],
  atlas: ["TR", "Atlas University; University Hospital, Bağcılar, Istanbul", "Университет «Атлас»; университетская больница, Багджылар, Стамбул", "Atlas universiteti; Universitet kasalxonasi, Bag‘jilar, Istanbul"],
  istmulti: ["TR", "Atlas University; Başakşehir Çam and Sakura City Hospital; İstinye University; Ulus Liv Hospital; Bakırköy Clinic, Istanbul", "Университет «Атлас»; городская больница Basaksehir Cam and Sakura; университет Istinye; больница Ulus Liv; клиника Bakirkoy, Стамбул", "«Atlas» universiteti; «Basaksehir Cam and Sakura» shahar kasalxonasi; «Istinye» universiteti; Ulus Liv kasalxonasi; «Bakirkoy» klinikasi, Istanbul"],
  perm: ["RU", "Perm Regional Clinical Hospital, Perm", "Пермская краевая клиническая больница, Пермь", "Perm o‘lka klinik kasalxonasi, Perm"],
  citymed: ["KZ", "Citymed Clinic, Shymkent", "Клиника Citymed, Шымкент", "Citymed klinikasi, Shimkent"],
  k31: ["RU", "K+31, Moscow", "АО «К+31», Москва", "«K+31», Moskva"],
  children: ["UZ", "Republican Children's Orthopedic Center, Tashkent", "Республиканский детский ортопедический центр, Ташкент", "Respublika bolalar ortopediya markazi, Toshkent"],
  impuls: ["UZ", "Impuls Clinic, Andijan", "Клиника «Импульс», Андижан", "Impuls klinikasi, Andijon"],
  yunusobod: ["UZ", "Yunusobod Medical Center Hospital, Tashkent", "Yunusobod Medical Center Hospital, Ташкент", "Yunusobod medical center hospital, Toshkent"],
  spainpro: ["RU", "“Spain Pro” Clinic, Novosibirsk", "Клиника “Spain Pro”, Новосибирск", "«Spain Pro» klinikasi, Novosibirsk"],
  batpenov: ["KZ", "Republican Spine Center, Academician N.D. Batpenov National Scientific Center of Traumatology and Orthopedics, Astana", "Республиканский центр позвоночника, ННЦТО им. акад. Н.Д. Батпенова, Астана", "Akademik N.D. Batpenov nomidagi Milliy travmatologiya va ortopediya ilmiy markazi qoshidagi Respublika umurtqa pog‘onasi markazi, Astana"],
  batpenovnsc: ["KZ", "Academician N.D. Batpenov National Scientific Center of Traumatology and Orthopedics, Astana", "Национальный научный центр травматологии и ортопедии им. акад. Н.Д. Батпенова, Астана", "N.D. Batpenov nomidagi Travmatologiya va ortopediya milliy ilmiy markazi, Astana"],
  rehab: ["UZ", "National Center for Rehabilitation and Prosthetics of Persons with Disabilities, Tashkent", "Национальный центр реабилитации и протезирования лиц с инвалидностью, Ташкент", "Nogironligi bo‘lgan shaxslarni reabilitatsiya qilish va protezlash milliy markazi, Toshkent"],
  pavlov1: ["RU", "Pavlov First Saint Petersburg State Medical University, Saint Petersburg", "Первый Санкт-Петербургский государственный медицинский университет им. И.П. Павлова, Санкт-Петербург", "I.P. Pavlov nomidagi Birinchi Sankt-Peterburg davlat tibbiyot universiteti, Sankt-Peterburg"],
  samara: ["RU", "Clinics of Samara State Medical University, Samara Region", "Клиника Самарского государственного медицинского университета, Самарская область", "Samara davlat tibbiyot universiteti klinikasi, Samara viloyati"],
  burdenko: ["RU", "N.N. Burdenko Main Military Clinical Hospital, Moscow", "Главный военный клинический госпиталь им. Н.Н. Бурденко, Москва", "N.N. Burdenko nomidagi Bosh harbiy klinik gospital, Moskva"],
  fareast: ["RU", "Far Eastern State Medical University, Khabarovsk", "Дальневосточный государственный медицинский университет, Хабаровск", "Uzoq Sharq davlat tibbiyot universiteti, Xabarovsk"],
  amreet: ["IN", "Amreet Hospital, Ahmedabad", "Amreet Hospital, Ахмадабад", "Amreet Hospital, Ahmadobod"],
  uchtepa: ["UZ", "Central Multidisciplinary Polyclinic, Uchtepa District Medical Association, Tashkent", "Центральная многопрофильная поликлиника, Учтепинское районное медицинское объединение, Ташкент", "Uchtepa tuman tibbiyot birlashmasi qoshidagi markaziy ko‘p tarmoqli poliklinika, Toshkent"],
  kimyo: ["UZ", "Kimyo International University in Tashkent", "Университет «Кимё», Ташкент", "«Kimyo» universiteti, Toshkent"],
  zhejiang: ["CN", "Second Affiliated Hospital, Zhejiang University School of Medicine, Hangzhou", "Вторая дочерняя клиника Медицинского факультета Университета Zhejiang, Ханчжоу", "Chjeszyan universiteti tibbiyot fakultetining ikkinchi klinikasi, Xanchjou"],
  sm: ["RU", "SM-Clinic Multidisciplinary Medical Holding, Moscow", "Многопрофильный медицинский холдинг «СМ-Клиника», Москва", "«SM-klinika» ko‘p tarmoqli tibbiyot xoldingi, Moskva"],
  sughd: ["TJ", "Sughd Regional Clinical Hospital, Khujand", "Согдийская областная клиническая больница, Худжанд", "Sug‘d viloyat klinik kasalxonasi, Xo‘jand"],
  rrcem: ["UZ", "Republican Research Center of Emergency Medicine, Tashkent", "Республиканский научный центр экстренной медицинской помощи, Ташкент", "Respublika shoshilinch tibbiy yordam ilmiy markazi, Toshkent"],
  rrcemtash: ["UZ", "Tashkent Regional Branch of the Republican Research Center of Emergency Medicine", "Ташкентский областной филиал Республиканского научного центра экстренной медицинской помощи", "Respublika shoshilinch tibbiy yordam ilmiy markazi Toshkent viloyat filiali"],
  rrcemnavoi: ["UZ", "Navoi Branch of the Republican Research Center of Emergency Medicine, Navoi", "Навоийский филиал Республиканского научного центра экстренной медицинской помощи, Навои", "Respublika shoshilinch tibbiy yordam ilmiy markazi Navoiy filiali, Navoiy"],
  rrcemkhorezm: ["UZ", "Khorezm Branch of the Republican Research Center of Emergency Medicine, Urgench", "Хорезмский филиал Республиканского научного центра экстренной медицинской помощи, Ургенч", "Respublika shoshilinch tibbiy yordam ilmiy markazi Xorazm filiali, Urganch"],
  samchild: ["UZ", "Samarkand Regional Children's Multidisciplinary Medical Center, Samarkand", "Самаркандский областной детский многопрофильный медицинский центр, Самарканд", "Samarqand viloyat bolalar ko‘p tarmoqli tibbiyot markazi, Samarqand"],
  kurbanov: ["UZ", "U. Kurbanov Republican Children's Psychoneurological Hospital, Tashkent", "Республиканская детская психоневрологическая больница им. У. Курбанова, Ташкент", "U. Qurbonov nomidagi Respublika bolalar psixonevrologiya kasalxonasi, Toshkent"]
};

PROG.countries = {
  UZ: { en: "Uzbekistan", ru: "Узбекистан", uz: "O‘zbekiston" },
  RU: { en: "Russia", ru: "Россия", uz: "Rossiya" },
  CN: { en: "China", ru: "Китай", uz: "Xitoy" },
  IN: { en: "India", ru: "Индия", uz: "Hindiston" },
  TJ: { en: "Tajikistan", ru: "Таджикистан", uz: "Tojikiston" },
  KZ: { en: "Kazakhstan", ru: "Казахстан", uz: "Qozog‘iston" },
  KG: { en: "Kyrgyzstan", ru: "Кыргызстан", uz: "Qirg‘iziston" },
  TR: { en: "Türkiye", ru: "Турция", uz: "Turkiya" },
  BD: { en: "Bangladesh", ru: "Бангладеш", uz: "Bangladesh" }
};

/* Sessions, in display order.
   kind: ceremony | plenary | breakout | break.  hall: 1-4 (0 = all halls).
   Moderators are "Latin|Cyrillic" strings. */
PROG.sessions = [
  { id: "open", kind: "ceremony", hall: 1, start: "09:00", end: "09:10",
    title: { en: "Opening ceremony", ru: "Торжественное открытие конференции", uz: "Konferensiyaning tantanali ochilishi" },
    lines: [
      { start: "09:00", end: "09:05", text: {
        en: "Welcome address by the Minister of Health of the Republic of Uzbekistan, E.E. Adilov",
        ru: "Вступительная речь Министра здравоохранения Республики Узбекистан Э.Э. Адилова",
        uz: "O‘zbekiston Respublikasi Sog‘liqni saqlash vaziri E.E. Adilovning kirish so‘zi" } },
      { start: "09:05", end: "09:10", text: {
        en: "Address by the Director of the Republican Specialized Scientific and Practical Medical Center of Traumatology and Orthopedics, Professor M.E. Irismetov",
        ru: "Выступление директора Республиканского специализированного научно-практического медицинского центра травматологии и ортопедии, профессора М.Э. Ирисметова",
        uz: "Respublika ixtisoslashtirilgan travmatologiya va ortopediya ilmiy-amaliy tibbiyot markazi direktori, professor M.E. Irismetovning nutqi" } }
    ] },
  { id: "plen", kind: "plenary", hall: 1, start: "09:10", end: "12:05",
    title: { en: "New approaches to addressing challenges in traumatology and orthopedics", ru: "Новые подходы в решении проблем травматологии и ортопедии", uz: "Travmatologiya va ortopediya muammolarini hal etishda yangi yondashuvlar" },
    mods: ["Irismetov M.E.|Ирисметов М.Э.", "Tikhilov R.M.|Тихилов Р.М.", "Vissarionov S.V.|Виссарионов С.В.", "Burtsev A.V.|Бурцев А.В.", "Djumabekov S.A.|Джумабеков С.А.", "Korytkin A.A.|Корыткин А.А.", "Bekarisov O.S.|Бекарисов О.С.", "Rajabzoda M.M.|Ражабзода М.М."] },
  { id: "lunch", kind: "break", hall: 0, start: "12:05", end: "13:00",
    title: { en: "Lunch", ru: "Обед", uz: "Tushlik" } },
  { id: "s1", kind: "breakout", num: 1, hall: 1, start: "13:00", end: "17:45",
    title: { en: "New technologies in arthroplasty of large joints", ru: "Новые технологии при эндопротезировании крупных суставов", uz: "Yirik bo‘g‘imlarni endoprotezlashda yangi texnologiyalar" },
    mods: ["Irismetov M.E.|Ирисметов М.Э.", "Xinlong Ma", "Pavlov V.V.|Павлов В.В.", "Alimov A.P.|Алимов А.П."] },
  { id: "s2", kind: "breakout", num: 2, hall: 2, start: "13:00", end: "15:25",
    title: { en: "New developments in the treatment of trauma and orthopedic patients with chronic infection", ru: "Новое в лечении травматолого-ортопедических больных с наличием хронической инфекции", uz: "Surunkali infeksiyasi bor travmatologik-ortopedik bemorlarni davolashdagi yangiliklar" },
    mods: ["Zagorodniy N.V.|Загородний Н.В.", "Sergeev K.S.|Сергеев К.С.", "Mofakharul Bari|Мофаххарул Бари", "Urinbaev P.U.|Уринбаев П.У."] },
  { id: "s3", kind: "breakout", num: 3, hall: 2, start: "15:25", end: "17:50",
    title: { en: "High technologies in orthopedics: challenges and prospects", ru: "Высокие технологии в ортопедии: проблемы и перспективы", uz: "Ortopediyada yuqori texnologiyalar: muammolar va istiqbollar" },
    mods: ["Umarov F.Kh.|Умаров Ф.Х.", "Abdiraev P.A.|Абдираев П.А.", "Kurbanov S.Kh.|Курбанов С.Х.", "Shukurov E.M.|Шукуров Э.М."] },
  { id: "s4", kind: "breakout", num: 4, hall: 3, start: "13:00", end: "16:10",
    title: { en: "New approaches in pediatric traumatology and orthopedics", ru: "Новые подходы в детской травматологии и ортопедии", uz: "Bolalar travmatologiyasi va ortopediyasida yangi yondashuvlar" },
    mods: ["Bagirov A.B.|Багиров А.Б.", "Khodjanov I.Yu.|Ходжанов И.Ю.", "Novikov K.I.|Новиков К.И.", "Tilyakov A.B.|Тиляков А.Б."] },
  { id: "s5", kind: "breakout", num: 5, hall: 3, start: "16:10", end: "17:45",
    title: { en: "Modern approaches in vertebrology: challenges and prospects", ru: "Современные подходы в вертебрологии: проблемы и перспективы", uz: "Vertebrologiyada zamonaviy yondashuvlar: muammolar va istiqbollar" },
    mods: ["Ryabykh S.O.|Рябых С.О.", "Shatursunov Sh.Sh.|Шатурсунов Ш.Ш.", "Khudoyberdiev K.T.|Худойбердиев К.Т.", "Sattarov A.R.|Саттаров А.Р."] },
  { id: "s6", kind: "breakout", num: 6, hall: 4, start: "13:00", end: "15:15",
    title: { en: "Arthroscopic technologies: challenges and solutions", ru: "Артроскопические технологии: проблемы и решение их", uz: "Artroskopik texnologiyalar: muammolar va ularning yechimi" },
    mods: ["Minasov T.B.|Минасов Т.Б.", "Djuraev A.M.|Джураев А.М.", "Akramov V.R.|Акрамов В.Р.", "Khamroev F.Sh.|Хамроев Ф.Ш."] },
  { id: "s7", kind: "breakout", num: 7, hall: 4, start: "15:15", end: "17:45",
    title: { en: "High-tech approaches in traumatology: challenges and prospects", ru: "Высокотехнологичные подходы в травматологии: проблемы и перспективы", uz: "Traumatologiyada yuqori texnologik yondashuvlar: muammolar va istiqbollar" },
    mods: ["Valiev E.Yu.|Валиев Э.Ю.", "Dursunov A.M.|Дурсунов А.М.", "Salokhiddinov F.B.|Салохиддинов Ф.Б.", "Khujanazarov I.E.|Хужаназаров И.Э."] },
  { id: "close", kind: "ceremony", hall: 1, start: "17:45", end: "17:50",
    title: { en: "Closing of the conference", ru: "Закрытие конференции", uz: "Anjumanning yopilishi" },
    lines: [] }
];

/* Talk helper: PROG.add(sessionId, [[ "09.10-09.20", "Author|Автор; ...", "org1,org2", en, ru, uz ], ...]) */
PROG.talks = [];
PROG.add = function (sid, rows) {
  rows.forEach(function (r, i) {
    var tm = r[0].split("-");
    PROG.talks.push({
      id: sid + "-" + (i + 1), sid: sid, n: i + 1,
      start: tm[0].trim().replace(".", ":"), end: tm[1].trim().replace(".", ":"),
      authors: r[1].split(";").map(function (a) { var p = a.trim().split("|"); return { en: p[0], ru: p[1] || p[0] }; }),
      orgs: r[2].split(",").map(function (s) { return s.trim(); }),
      title: { en: r[3], ru: r[4], uz: r[5] }
    });
  });
};

/* Set to true once portraits are placed in photos/<slug>.jpg (see README). */
PROG.hasPhotos = false;
