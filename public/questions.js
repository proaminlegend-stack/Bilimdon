// Savollar shu yerda. Yangi savol qo'shish uchun bitta blokni nusxalang.
// cat — kategoriya nomi (CATEGORIES ro'yxatidagi bilan bir xil bo'lsin)
// answer — to'g'ri javobning raqami (0 dan boshlanadi).
const CATEGORIES = ["Tarix", "Geografiya", "Fan", "Texnologiya"];

const questions = [
  // ---------- TARIX ----------
  {
    cat: "Tarix",
    q: "Amir Temur qaysi yilda tug'ilgan?",
    options: ["1336", "1405", "1220", "1500"],
    answer: 0
  },
  {
    cat: "Tarix",
    q: "Mirzo Ulug'bek rasadxonasi qaysi shaharda qurilgan?",
    options: ["Buxoro", "Samarqand", "Toshkent", "Xiva"],
    answer: 1
  },
  {
    cat: "Tarix",
    q: "Buyuk Ipak yo'li qaysi qit'alarni bog'lagan?",
    options: [
      "Osiyo va Yevropa",
      "Amerika va Afrika",
      "Avstraliya va Osiyo",
      "Antarktida va Yevropa"
    ],
    answer: 0
  },
  {
    cat: "Tarix",
    q: "O'zbekiston qaysi yilda mustaqillikka erishgan?",
    options: ["1985", "1991", "1995", "2000"],
    answer: 1
  },
  {
    cat: "Tarix",
    q: "Alisher Navoiy qaysi shaharda tug'ilgan?",
    options: ["Samarqand", "Buxoro", "Hirot", "Toshkent"],
    answer: 2
  },
  {
    cat: "Tarix",
    q: "Al-Xorazmiy qaysi fanga asos solgan?",
    options: ["Algebra", "Kimyo", "Biologiya", "Geografiya"],
    answer: 0
  },

  // ---------- GEOGRAFIYA ----------
  {
    cat: "Geografiya",
    q: "O'zbekistonning maydoni jihatidan eng katta hududi qaysi?",
    options: [
      "Toshkent viloyati",
      "Samarqand viloyati",
      "Qoraqalpog'iston Respublikasi",
      "Farg'ona viloyati"
    ],
    answer: 2
  },
  {
    cat: "Geografiya",
    q: "Dunyodagi eng katta okean qaysi?",
    options: ["Atlantika", "Hind", "Shimoliy Muz", "Tinch"],
    answer: 3
  },
  {
    cat: "Geografiya",
    q: "Amudaryo qaysi dengiz tomon oqadi?",
    options: ["Kaspiy dengizi", "Orol dengizi", "Qora dengiz", "O'rta dengiz"],
    answer: 1
  },
  {
    cat: "Geografiya",
    q: "Misr qaysi qit'ada joylashgan?",
    options: ["Osiyo", "Yevropa", "Afrika", "Janubiy Amerika"],
    answer: 2
  },
  {
    cat: "Geografiya",
    q: "Dunyodagi eng baland tog' cho'qqisi qaysi?",
    options: ["Elbrus", "Everest", "Mont-Blan", "Kilimanjaro"],
    answer: 1
  },
  {
    cat: "Geografiya",
    q: "Farg'ona vodiysi qaysi uch davlat hududida joylashgan?",
    options: [
      "O'zbekiston, Qirg'iziston, Tojikiston",
      "O'zbekiston, Turkmaniston, Eron",
      "Qozog'iston, Xitoy, Mo'g'uliston",
      "Afg'oniston, Pokiston, Hindiston"
    ],
    answer: 0
  },

  // ---------- FAN ----------
  {
    cat: "Fan",
    q: "Suv dengiz sathida necha darajada qaynaydi?",
    options: ["50°C", "80°C", "100°C", "150°C"],
    answer: 2
  },
  {
    cat: "Fan",
    q: "Kattalar tanasida nechta suyak bor?",
    options: ["106", "206", "306", "406"],
    answer: 1
  },
  {
    cat: "Fan",
    q: "Yerga eng yaqin yulduz qaysi?",
    options: ["Oy", "Mars", "Quyosh", "Sirius"],
    answer: 2
  },
  {
    cat: "Fan",
    q: "Havoning asosiy qismini qaysi gaz tashkil qiladi?",
    options: ["Kislorod", "Azot", "Karbonat angidrid", "Vodorod"],
    answer: 1
  },
  {
    cat: "Fan",
    q: "Qaysi sayyora \"Qizil sayyora\" deb ataladi?",
    options: ["Venera", "Yupiter", "Mars", "Merkuriy"],
    answer: 2
  },
  {
    cat: "Fan",
    q: "Quyosh sistemasidagi eng katta sayyora qaysi?",
    options: ["Saturn", "Yer", "Yupiter", "Neptun"],
    answer: 2
  },

  // ---------- TEXNOLOGIYA ----------
  {
    cat: "Texnologiya",
    q: "HTML nima uchun ishlatiladi?",
    options: [
      "Veb-sahifa tuzilishini yozish",
      "Video montaj qilish",
      "Rasm chizish",
      "Ma'lumotlar bazasini boshqarish"
    ],
    answer: 0
  },
  {
    cat: "Texnologiya",
    q: "CPU nimani anglatadi?",
    options: [
      "Xotira kartasi",
      "Markaziy protsessor",
      "Ekran kartasi",
      "Quvvat bloki"
    ],
    answer: 1
  },
  {
    cat: "Texnologiya",
    q: "Internetda sahifalarni ochish uchun qaysi dastur kerak?",
    options: ["Kalkulyator", "Brauzer", "Antivirus", "Matn muharriri"],
    answer: 1
  },
  {
    cat: "Texnologiya",
    q: "Python nima?",
    options: [
      "Dasturlash tili",
      "Operatsion tizim",
      "Brauzer",
      "Telefon modeli"
    ],
    answer: 0
  },
  {
    cat: "Texnologiya",
    q: "CSS nima uchun ishlatiladi?",
    options: [
      "Server yozish",
      "Sahifa dizaynini berish",
      "Virus topish",
      "Fayllarni siqish"
    ],
    answer: 1
  },
  {
    cat: "Texnologiya",
    q: "Wi-Fi nima uchun kerak?",
    options: [
      "Simsiz internet uchun",
      "Telefonni zaryadlash uchun",
      "Ovoz yozish uchun",
      "Rasm tahrirlash uchun"
    ],
    answer: 0
  }
];

// ====================================================================
// Qo'shimcha savollar. Yozish oson: mk(fan, savol, TO'G'RI javob, [xato1, xato2, xato3])
// Javoblar tartibi avtomatik aralashadi, raqam yozish shart emas.
// ====================================================================
function mk(cat, q, correct, wrong) {
  const options = [correct].concat(wrong);
  for (let i = options.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const t = options[i]; options[i] = options[j]; options[j] = t;
  }
  return { cat: cat, q: q, options: options, answer: options.indexOf(correct) };
}

const extra = [
  // ---------- TARIX ----------
  mk("Tarix", "Amir Temur qaysi yilda vafot etgan?", "1405", ["1370", "1336", "1450"]),
  mk("Tarix", "Temuriylar davlatining poytaxti qaysi shahar edi?", "Samarqand", ["Toshkent", "Xiva", "Qo'qon"]),
  mk("Tarix", "Zahiriddin Muhammad Bobur Hindistonda qaysi sulolaga asos solgan?", "Boburiylar", ["Temuriylar", "Somoniylar", "G'aznaviylar"]),
  mk("Tarix", "\"Avesto\" qaysi dinning muqaddas kitobi?", "Zardushtiylik", ["Islom", "Buddizm", "Xristianlik"]),
  mk("Tarix", "Quyidagi shaharlardan qaysi biri Buyuk Ipak yo'lida joylashgan?", "Samarqand", ["Moskva", "Madrid", "Berlin"]),
  mk("Tarix", "Imom Buxoriy qaysi mashhur hadislar to'plamini yozgan?", "Sahihi Buxoriy", ["Qobusnoma", "Boburnoma", "Shohnoma"]),
  mk("Tarix", "\"Boburnoma\" asarining muallifi kim?", "Zahiriddin Muhammad Bobur", ["Alisher Navoiy", "Amir Temur", "Mirzo Ulug'bek"]),
  mk("Tarix", "Ibn Sino qaysi sohada eng mashhur bo'lgan?", "Tibbiyot", ["Me'morchilik", "Astronomiya", "Dehqonchilik"]),
  mk("Tarix", "\"Qutadg'u bilig\" asarining muallifi kim?", "Yusuf Xos Hojib", ["Mahmud Koshg'ariy", "Abu Rayhon Beruniy", "Ahmad Yassaviy"]),
  mk("Tarix", "O'zbekiston Respublikasining birinchi Prezidenti kim?", "Islom Karimov", ["Shavkat Mirziyoyev", "Abdulla Oripov", "Sharof Rashidov"]),
  mk("Tarix", "O'zbekiston Konstitutsiyasi qaysi yilda qabul qilingan?", "1992", ["1991", "1995", "2000"]),
  mk("Tarix", "Mirzo Ulug'bek kimning nabirasi?", "Amir Temur", ["Bobur", "Navoiy", "Jaloliddin Manguberdi"]),
  mk("Tarix", "\"Xamsa\" asarining muallifi kim?", "Alisher Navoiy", ["Bobur", "Ibn Sino", "Al-Xorazmiy"]),
  mk("Tarix", "Jaloliddin Manguberdi qaysi davlatning hukmdori bo'lgan?", "Xorazmshohlar davlati", ["Temuriylar davlati", "Somoniylar davlati", "Buxoro amirligi"]),

  // ---------- GEOGRAFIYA ----------
  mk("Geografiya", "O'zbekiston poytaxti qaysi shahar?", "Toshkent", ["Samarqand", "Buxoro", "Namangan"]),
  mk("Geografiya", "O'zbekistonning eng baland cho'qqisi qaysi?", "Xazrati Sulton", ["Everest", "Elbrus", "Mont-Blan"]),
  mk("Geografiya", "Orol dengiziga qaysi ikki daryo quyilgan?", "Amudaryo va Sirdaryo", ["Volga va Don", "Nil va Kongo", "Zarafshon va Chirchiq"]),
  mk("Geografiya", "Dunyodagi eng katta materik qaysi?", "Osiyo", ["Afrika", "Yevropa", "Shimoliy Amerika"]),
  mk("Geografiya", "Dunyodagi eng kichik materik qaysi?", "Avstraliya", ["Yevropa", "Antarktida", "Afrika"]),
  mk("Geografiya", "Fransiyaning poytaxti qaysi shahar?", "Parij", ["London", "Rim", "Madrid"]),
  mk("Geografiya", "Yaponiyaning poytaxti qaysi shahar?", "Tokio", ["Pekin", "Seul", "Bangkok"]),
  mk("Geografiya", "Afrikadagi eng katta cho'l qaysi?", "Sahroi Kabir", ["Gobi", "Qizilqum", "Qoraqum"]),
  mk("Geografiya", "O'zbekistonda nechta viloyat bor?", "12", ["10", "14", "9"]),
  mk("Geografiya", "Baykal ko'li qaysi davlatda joylashgan?", "Rossiya", ["Xitoy", "Qozog'iston", "Mo'g'uliston"]),
  mk("Geografiya", "Dunyodagi eng katta orol qaysi?", "Grenlandiya", ["Madagaskar", "Yangi Gvineya", "Kuba"]),
  mk("Geografiya", "Mariana cho'kmasi (eng chuqur joy) qaysi okeanda?", "Tinch okeani", ["Atlantika okeani", "Hind okeani", "Shimoliy Muz okeani"]),
  mk("Geografiya", "Amazonka daryosi qaysi qit'ada oqadi?", "Janubiy Amerika", ["Afrika", "Osiyo", "Yevropa"]),
  mk("Geografiya", "Italiyaning poytaxti qaysi shahar?", "Rim", ["Milan", "Venetsiya", "Neapol"]),

  // ---------- FAN ----------
  mk("Fan", "Inson yuragida nechta kamera bor?", "4", ["2", "3", "6"]),
  mk("Fan", "Suvning kimyoviy formulasi qanday?", "H2O", ["CO2", "O2", "NaCl"]),
  mk("Fan", "Yerning tabiiy yo'ldoshi qaysi?", "Oy", ["Mars", "Quyosh", "Venera"]),
  mk("Fan", "Quyosh sistemasida nechta sayyora bor?", "8", ["7", "9", "10"]),
  mk("Fan", "Eng yengil gaz qaysi?", "Vodorod", ["Kislorod", "Azot", "Karbonat angidrid"]),
  mk("Fan", "O'simliklar fotosintezda qaysi gazni yutadi?", "Karbonat angidrid", ["Kislorod", "Azot", "Vodorod"]),
  mk("Fan", "Tovush qaysi muhitda tarqalmaydi?", "Vakuumda", ["Suvda", "Havoda", "Temirda"]),
  mk("Fan", "Magnit qaysi metallni o'ziga tortadi?", "Temir", ["Alyuminiy", "Mis", "Oltin"]),
  mk("Fan", "Yer o'z o'qi atrofida necha soatda to'liq aylanadi?", "24 soat", ["12 soat", "48 soat", "365 soat"]),
  mk("Fan", "Eng qattiq tabiiy modda qaysi?", "Olmos", ["Temir", "Granit", "Kvars"]),
  mk("Fan", "Oq qon tanachalarining vazifasi nima?", "Organizmni kasalliklardan himoya qilish", ["Kislorod tashish", "Ovqat hazm qilish", "Suyak hosil qilish"]),
  mk("Fan", "Nisbiylik nazariyasini kim yaratgan?", "Albert Eynshteyn", ["Isaak Nyuton", "Galileo Galiley", "Nikola Tesla"]),
  mk("Fan", "Yer Quyosh atrofini qancha vaqtda to'liq aylanadi?", "Taxminan 1 yilda", ["Taxminan 1 oyda", "Taxminan 24 soatda", "Taxminan 10 yilda"]),
  mk("Fan", "Eng katta sutemizuvchi hayvon qaysi?", "Ko'k kit", ["Fil", "Jirafa", "Oq ayiq"]),

  // ---------- TEXNOLOGIYA ----------
  mk("Texnologiya", "USB nimani anglatadi?", "Universal Serial Bus", ["United System Block", "Ultra Speed Base", "Unique Storage Box"]),
  mk("Texnologiya", "Quyidagilardan qaysi biri internet brauzeri?", "Chrome", ["Word", "Excel", "Photoshop"]),
  mk("Texnologiya", "Kompyuterdagi RAM nima?", "Tezkor (operativ) xotira", ["Ekran kartasi", "Quvvat bloki", "Tovush kartasi"]),
  mk("Texnologiya", "1 bayt necha bitga teng?", "8", ["2", "4", "16"]),
  mk("Texnologiya", "Veb-sahifalarni jonlantiradigan dasturlash tili qaysi?", "JavaScript", ["Excel", "Photoshop", "Paint"]),
  mk("Texnologiya", "Android operatsion tizimini qaysi kompaniya rivojlantiradi?", "Google", ["Apple", "Samsung", "Nokia"]),
  mk("Texnologiya", "iPhone telefonlarini qaysi kompaniya ishlab chiqaradi?", "Apple", ["Google", "Huawei", "Xiaomi"]),
  mk("Texnologiya", "Printer nima vazifani bajaradi?", "Ma'lumotni qog'ozga chop etadi", ["Ovozni yozadi", "Internetni tarqatadi", "Videoni tahrirlaydi"]),
  mk("Texnologiya", "Windows operatsion tizimini qaysi kompaniya yaratgan?", "Microsoft", ["Apple", "Google", "Intel"]),
  mk("Texnologiya", "\"WWW\" qisqartmasi nimani anglatadi?", "World Wide Web", ["World War Web", "Wide World Wire", "Web Wide Work"]),
  mk("Texnologiya", "Quyidagi fayl kengaytmalaridan qaysi biri rasm faylini bildiradi?", ".jpg", [".mp3", ".exe", ".txt"]),
  mk("Texnologiya", "Git dasturi nima uchun ishlatiladi?", "Kod versiyalarini boshqarish uchun", ["Rasm tahrirlash uchun", "Musiqa tinglash uchun", "Video ko'rish uchun"]),
  mk("Texnologiya", "Node.js qaysi dasturlash tilida ishlaydi?", "JavaScript", ["PHP", "Java", "Swift"]),
  mk("Texnologiya", "SSD nima?", "Ma'lumot saqlash qurilmasi", ["Monitor turi", "Klaviatura turi", "Internet tarmog'i"])
];

// Qo'shimcha savollarni asosiy ro'yxatga qo'shamiz
extra.forEach(function (item) { questions.push(item); });

// ---------- Qo'shimcha savollar ----------
questions.push(
  // TARIX
  { cat: "Tarix", q: "O'zbekiston mustaqillikka qaysi yilda erishgan?", options: ["1989", "1991", "1993", "1995"], answer: 1 },
  { cat: "Tarix", q: "Mirzo Ulug'bek rasadxonasi qaysi shaharda joylashgan?", options: ["Buxoro", "Samarqand", "Xiva", "Toshkent"], answer: 1 },
  { cat: "Tarix", q: "Ikkinchi jahon urushi qaysi yilda boshlangan?", options: ["1914", "1939", "1941", "1945"], answer: 1 },
  { cat: "Tarix", q: "Ehromlar qaysi qadimiy davlat bilan mashhur?", options: ["Rim", "Yunoniston", "Qadimgi Misr", "Bobil"], answer: 2 },
  { cat: "Tarix", q: "Kolumb Amerikaga qaysi yilda yetib borgan?", options: ["1453", "1492", "1517", "1607"], answer: 1 },
  { cat: "Tarix", q: "Buyuk Ipak yo'li qaysi hududlarni bog'lagan?", options: ["Xitoy va Yevropa", "Hindiston va Afrika", "Rossiya va Yaponiya", "Amerika va Avstraliya"], answer: 0 },
  { cat: "Tarix", q: "Algebra fani nomi kimning asari bilan bog'liq?", options: ["Ibn Sino", "Al-Xorazmiy", "Beruniy", "Farobiy"], answer: 1 },
  { cat: "Tarix", q: "Ibn Sinoning mashhur tibbiyot kitobi qaysi?", options: ["Tib qonunlari", "Boburnoma", "Shohnoma", "Avesto"], answer: 0 },
  { cat: "Tarix", q: "Zahiriddin Muhammad Bobur qaysi shaharda tug'ilgan?", options: ["Samarqand", "Andijon", "Qobul", "Dehli"], answer: 1 },
  { cat: "Tarix", q: "Birinchi jahon urushi qaysi yilda boshlangan?", options: ["1905", "1914", "1918", "1923"], answer: 1 },
  { cat: "Tarix", q: "Qadimgi Rim imperiyasining poytaxti qaysi shahar edi?", options: ["Afina", "Rim", "Istanbul", "Parij"], answer: 1 },
  { cat: "Tarix", q: "Chingizxon qaysi xalq davlatini tuzgan?", options: ["Turklar", "Mo'g'ullar", "Arablar", "Forslar"], answer: 1 },
  { cat: "Tarix", q: "Buyuk Fransuz inqilobi qaysi yilda boshlangan?", options: ["1689", "1776", "1789", "1815"], answer: 2 },
  { cat: "Tarix", q: "O'zbekiston Konstitutsiyasi kuni qachon nishonlanadi?", options: ["1 sentabr", "8 dekabr", "31 avgust", "21 mart"], answer: 1 },
  { cat: "Tarix", q: "Amir Temur davlatining poytaxti qaysi shahar edi?", options: ["Buxoro", "Samarqand", "Xiva", "Toshkent"], answer: 1 },
  { cat: "Tarix", q: "Titanik kemasi qaysi yilda cho'kkan?", options: ["1905", "1912", "1920", "1931"], answer: 1 },

  // GEOGRAFIYA
  { cat: "Geografiya", q: "Eng katta qit'a qaysi?", options: ["Afrika", "Osiyo", "Shimoliy Amerika", "Yevropa"], answer: 1 },
  { cat: "Geografiya", q: "Qozog'iston poytaxti qaysi shahar?", options: ["Olmaota", "Astana", "Bishkek", "Ashxobod"], answer: 1 },
  { cat: "Geografiya", q: "Maydoni bo'yicha dunyodagi eng katta davlat qaysi?", options: ["Xitoy", "Kanada", "Rossiya", "AQSh"], answer: 2 },
  { cat: "Geografiya", q: "Qoraqalpog'iston Respublikasining poytaxti qaysi?", options: ["Urganch", "Nukus", "Xiva", "Qarshi"], answer: 1 },
  { cat: "Geografiya", q: "Qaysi davlat O'zbekiston bilan chegaradosh emas?", options: ["Tojikiston", "Afg'oniston", "Eron", "Turkmaniston"], answer: 2 },
  { cat: "Geografiya", q: "Amazonka o'rmonlari qaysi qit'ada joylashgan?", options: ["Afrika", "Janubiy Amerika", "Osiyo", "Avstraliya"], answer: 1 },
  { cat: "Geografiya", q: "Maydoni bo'yicha eng kichik qit'a qaysi?", options: ["Yevropa", "Avstraliya", "Antarktida", "Janubiy Amerika"], answer: 1 },
  { cat: "Geografiya", q: "Parij qaysi davlatning poytaxti?", options: ["Italiya", "Ispaniya", "Fransiya", "Germaniya"], answer: 2 },
  { cat: "Geografiya", q: "Sahroi Kabir qaysi qit'ada joylashgan?", options: ["Osiyo", "Afrika", "Avstraliya", "Janubiy Amerika"], answer: 1 },
  { cat: "Geografiya", q: "Eng sovuq qit'a qaysi?", options: ["Osiyo", "Antarktida", "Yevropa", "Avstraliya"], answer: 1 },
  { cat: "Geografiya", q: "Misr davlatining poytaxti qaysi shahar?", options: ["Iskandariya", "Qohira", "Tunis", "Rabot"], answer: 1 },
  { cat: "Geografiya", q: "Toshkent shahri qaysi daryo vodiysida joylashgan?", options: ["Zarafshon", "Chirchiq", "Amudaryo", "Surxondaryo"], answer: 1 },

  // FAN
  { cat: "Fan", q: "Suvning kimyoviy formulasi qaysi?", options: ["CO2", "H2O", "O2", "NaCl"], answer: 1 },
  { cat: "Fan", q: "Quyosh tizimidagi eng katta sayyora qaysi?", options: ["Saturn", "Yupiter", "Neptun", "Yer"], answer: 1 },
  { cat: "Fan", q: "Yorug'lik tezligi taxminan qancha?", options: ["3 000 km/s", "30 000 km/s", "300 000 km/s", "3 000 000 km/s"], answer: 2 },
  { cat: "Fan", q: "Oltinning kimyoviy belgisi qaysi?", options: ["Ag", "Au", "Fe", "Go"], answer: 1 },
  { cat: "Fan", q: "Butun olam tortishish qonunini kim ta'riflagan?", options: ["Eynshteyn", "Nyuton", "Galiley", "Tesla"], answer: 1 },
  { cat: "Fan", q: "Qonda kislorodni tashuvchi hujayralar qaysi?", options: ["Leykotsitlar", "Eritrotsitlar", "Trombotsitlar", "Neyronlar"], answer: 1 },
  { cat: "Fan", q: "Kabisa bo'lmagan yilda necha kun bor?", options: ["360", "365", "366", "370"], answer: 1 },
  { cat: "Fan", q: "Yer Quyosh atrofida qancha vaqtda to'liq aylanadi?", options: ["1 kun", "1 oy", "1 yil", "10 yil"], answer: 2 },
  { cat: "Fan", q: "Qaysi hayvon sutemizuvchi?", options: ["Akula", "Delfin", "Qurbaqa", "Timsoh"], answer: 1 },
  { cat: "Fan", q: "Tovush qaysi muhitda eng tez tarqaladi?", options: ["Havoda", "Suvda", "Qattiq jismda", "Vakuumda"], answer: 2 },
  { cat: "Fan", q: "Odamning nechta asosiy sezgi a'zosi bor?", options: ["3", "4", "5", "6"], answer: 2 },
  { cat: "Fan", q: "Oddiy bosimda suv necha gradusda qaynaydi?", options: ["90", "100", "110", "120"], answer: 1 },

  // TEXNOLOGIYA
  { cat: "Texnologiya", q: "WWW qisqartmasi nimani anglatadi?", options: ["World Wide Web", "Wide World Web", "Web World Wide", "World Web Wide"], answer: 0 },
  { cat: "Texnologiya", q: "Kompyuterda CPU nima?", options: ["Operativ xotira", "Markaziy protsessor", "Videokarta", "Quvvat bloki"], answer: 1 },
  { cat: "Texnologiya", q: "Wi-Fi nima?", options: ["Simsiz tarmoq texnologiyasi", "Dasturlash tili", "Antivirus", "Operatsion tizim"], answer: 0 },
  { cat: "Texnologiya", q: "RAM nima?", options: ["Doimiy xotira", "Operativ xotira", "Protsessor", "Monitor"], answer: 1 },
  { cat: "Texnologiya", q: "USB qisqartmasi nimani anglatadi?", options: ["Universal Serial Bus", "United System Bus", "Universal Signal Box", "Unique Serial Byte"], answer: 0 },
  { cat: "Texnologiya", q: "Brauzerda veb-sahifalarni jonlantiradigan dasturlash tili qaysi?", options: ["C++", "JavaScript", "Pascal", "Assembler"], answer: 1 },
  { cat: "Texnologiya", q: "Bluetooth nima uchun ishlatiladi?", options: ["Qisqa masofada simsiz aloqa uchun", "Elektr quvvatlash uchun", "Video yozish uchun", "Fayl siqish uchun"], answer: 0 },
  { cat: "Texnologiya", q: "Bulutli saqlash (cloud) nima?", options: ["Ob-havo prognozi", "Ma'lumotni internetdagi serverlarda saqlash", "Yangi telefon turi", "Antivirus dasturi"], answer: 1 },
  { cat: "Texnologiya", q: "Elektron pochta manzilida qaysi belgi albatta bo'ladi?", options: ["#", "@", "%", "&"], answer: 1 }
);

// ---------- Yangi fanlar: Sport va Adabiyot ----------
CATEGORIES.push("Sport", "Adabiyot");
questions.push(
  // SPORT
  { cat: "Sport", q: "Futbol jamoasi maydonda nechta o'yinchi bilan o'ynaydi?", options: ["9", "10", "11", "12"], answer: 2 },
  { cat: "Sport", q: "Olimpiya o'yinlari necha yilda bir marta o'tkaziladi?", options: ["4", "2", "3", "5"], answer: 0 },
  { cat: "Sport", q: "Olimpiya bayrog'ida nechta halqa bor?", options: ["4", "5", "6", "7"], answer: 1 },
  { cat: "Sport", q: "2022-yilgi futbol bo'yicha jahon chempionatini qaysi jamoa yutgan?", options: ["Fransiya", "Braziliya", "Xorvatiya", "Argentina"], answer: 3 },
  { cat: "Sport", q: "2022-yilgi futbol bo'yicha jahon chempionati qaysi davlatda o'tgan?", options: ["Rossiya", "Qatar", "Braziliya", "Yaponiya"], answer: 1 },
  { cat: "Sport", q: "Basketbol halqasi yer sathidan qancha balandlikda joylashgan?", options: ["2,5 metr", "3,05 metr", "3,5 metr", "4 metr"], answer: 1 },
  { cat: "Sport", q: "Uimbldon tennis turniri qaysi shaharda o'tkaziladi?", options: ["Parij", "Nyu-York", "Melburn", "London"], answer: 3 },
  { cat: "Sport", q: "Shaxmat taxtasida nechta katak bor?", options: ["32", "48", "64", "81"], answer: 2 },
  { cat: "Sport", q: "Marafon masofasi taxminan qancha?", options: ["21 km", "32 km", "42 km", "50 km"], answer: 2 },
  { cat: "Sport", q: "Qaysi sport turida shayba ishlatiladi?", options: ["Xokkey", "Futbol", "Tennis", "Voleybol"], answer: 0 },
  { cat: "Sport", q: "Voleybol jamoasi maydonda nechta o'yinchi bilan o'ynaydi?", options: ["5", "6", "7", "8"], answer: 1 },
  { cat: "Sport", q: "Lionel Messi qaysi davlat terma jamoasida o'ynaydi?", options: ["Braziliya", "Ispaniya", "Argentina", "Urugvay"], answer: 2 },
  { cat: "Sport", q: "Kristianu Ronaldu qaysi davlat terma jamoasida o'ynaydi?", options: ["Portugaliya", "Fransiya", "Italiya", "Ispaniya"], answer: 0 },
  { cat: "Sport", q: "Qadimgi Olimpiya o'yinlari qaysi davlatda boshlangan?", options: ["Rim", "Misr", "Xitoy", "Yunoniston"], answer: 3 },
  { cat: "Sport", q: "Sumo qaysi davlatning milliy kurash turi?", options: ["Xitoy", "Yaponiya", "Koreya", "Mo'g'uliston"], answer: 1 },
  { cat: "Sport", q: "Futbol o'yini qo'shimcha vaqtsiz necha daqiqa davom etadi?", options: ["60", "80", "90", "120"], answer: 2 },
  { cat: "Sport", q: "Ping-pong qaysi sport turining boshqa nomi?", options: ["Stol tennisi", "Badminton", "Skvosh", "Kriket"], answer: 0 },
  { cat: "Sport", q: "Nodirbek Abdusattorov qaysi sport turida mashhur?", options: ["Shaxmat", "Boks", "Futbol", "Suzish"], answer: 0 },
  { cat: "Sport", q: "2024-yilgi Yozgi Olimpiya o'yinlari qaysi shaharda o'tgan?", options: ["Tokio", "Parij", "Los-Anjeles", "London"], answer: 1 },
  { cat: "Sport", q: "Tennisda 15 va 30 dan keyingi ochko qaysi?", options: ["35", "40", "45", "50"], answer: 1 },
  { cat: "Sport", q: "Basketbol jamoasi maydonda nechta o'yinchi bilan o'ynaydi?", options: ["4", "5", "6", "7"], answer: 1 },
  { cat: "Sport", q: "Tur de Frans qaysi sport turidagi mashhur musobaqa?", options: ["Velosiped poygasi", "Suzish", "Marafon", "Avtopoyga"], answer: 0 },

  // ADABIYOT
  { cat: "Adabiyot", q: "\"O'tkan kunlar\" romanining muallifi kim?", options: ["Cho'lpon", "G'afur G'ulom", "Abdulla Qodiriy", "Oybek"], answer: 2 },
  { cat: "Adabiyot", q: "\"Mehrobdan chayon\" romanining muallifi kim?", options: ["Oybek", "Abdulla Qodiriy", "Cho'lpon", "Abdulla Qahhor"], answer: 1 },
  { cat: "Adabiyot", q: "\"Sariq devni minib\" asarining muallifi kim?", options: ["Xudoyberdi To'xtaboyev", "Erkin Vohidov", "Said Ahmad", "Pirimqul Qodirov"], answer: 0 },
  { cat: "Adabiyot", q: "\"Shum bola\" qissasining muallifi kim?", options: ["Hamza", "G'afur G'ulom", "Oybek", "Zulfiya"], answer: 1 },
  { cat: "Adabiyot", q: "\"Kecha va kunduz\" romanining muallifi kim?", options: ["Cho'lpon", "Oybek", "Abdulla Qodiriy", "Hamid Olimjon"], answer: 0 },
  { cat: "Adabiyot", q: "\"Hamlet\" tragediyasining muallifi kim?", options: ["Dante", "Gyote", "Shekspir", "Servantes"], answer: 2 },
  { cat: "Adabiyot", q: "\"Urush va tinchlik\" romanining muallifi kim?", options: ["Lev Tolstoy", "Pushkin", "Chexov", "Gogol"], answer: 0 },
  { cat: "Adabiyot", q: "\"Jinoyat va jazo\" romanining muallifi kim?", options: ["Tolstoy", "Turgenev", "Dostoyevskiy", "Gorkiy"], answer: 2 },
  { cat: "Adabiyot", q: "\"Kichkina shahzoda\" asarining muallifi kim?", options: ["Jyul Vern", "Antuan de Sent-Ekzyuperi", "Viktor Gyugo", "Aleksandr Dyuma"], answer: 1 },
  { cat: "Adabiyot", q: "\"Alpomish\" qanday janrdagi asar?", options: ["Roman", "Doston", "Hikoya", "Drama"], answer: 1 },
  { cat: "Adabiyot", q: "\"Garri Potter\" kitoblarining muallifi kim?", options: ["Dj. K. Rouling", "Dj. R. R. Tolkin", "K. S. Lyuis", "Rodal Dal"], answer: 0 },
  { cat: "Adabiyot", q: "\"Robinzon Kruzo\" romanining muallifi kim?", options: ["Jonatan Svift", "Daniel Defo", "Mark Tven", "Charlz Dikkens"], answer: 1 },
  { cat: "Adabiyot", q: "\"O'zbekiston\" davlat madhiyasi so'zlari muallifi kim?", options: ["Erkin Vohidov", "Abdulla Oripov", "Muhammad Yusuf", "Zulfiya"], answer: 1 },
  { cat: "Adabiyot", q: "\"Shohnoma\" asarining muallifi kim?", options: ["Firdavsiy", "Hofiz", "Sa'diy", "Umar Xayyom"], answer: 0 },
  { cat: "Adabiyot", q: "Alisher Navoiy qaysi yilda tug'ilgan?", options: ["1441", "1336", "1483", "1500"], answer: 0 },
  { cat: "Adabiyot", q: "\"Yevgeniy Onegin\" asarining muallifi kim?", options: ["Lermontov", "Pushkin", "Gogol", "Dostoyevskiy"], answer: 1 },
  { cat: "Adabiyot", q: "\"Gulliverning sayohatlari\" asarining muallifi kim?", options: ["Daniel Defo", "Jyul Vern", "Jonatan Svift", "Mark Tven"], answer: 2 },
  { cat: "Adabiyot", q: "\"Ming bir kecha\" qaysi xalqning mashhur ertaklar to'plami?", options: ["Arab xalqi", "Rus xalqi", "Xitoy xalqi", "Yunon xalqi"], answer: 0 }
);
