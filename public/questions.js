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
