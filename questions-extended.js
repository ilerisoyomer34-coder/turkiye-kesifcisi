/* ============================================================
   GENİŞLETİLMİŞ SORU BANKASI — 28 yeni soru (7 bölge × 4 soru)
   Her bölgede: 1 unesco-single, 1 cuisine-drag, 1 craft-multi, 1 music-scenario
   Tam matris: her kategori 1 kez, her soru tipi 1 kez (bölge başına)
   ============================================================ */
'use strict';

const EXTENDED_QUESTIONS = {

  'karadeniz': [
    {
      text: 'Sümela Manastırı, dik bir kaya yüzeyine hangi dönemde inşa edilmiştir?',
      category: 'unesco', type: 'single',
      options: ['Helenistik dönemde (MÖ 4. yüzyıl)', 'Bizans döneminde (MS 4. yüzyıl)', 'Selçuklu döneminde (12. yüzyıl)', 'Osmanlı döneminde (16. yüzyıl)'],
      correct: 1,
      wikiTitle: 'Sumela Monastery',
      imageCaption: 'Sümela Manastırı — Trabzon, Bizans dönemi (MS 386)',
      explanation: 'Sümela Manastırı, Trabzon Maçka\'da MS 386\'da Bizans döneminde dik bir kaya yüzeyine kurulmuştur. Fresk süslemeleri ve mimarisiyle Karadeniz\'in en çarpıcı kültürel miras yapılarındandır.'
    },
    {
      text: 'Hangi yöresel yemek hangi Karadeniz iliyle özdeşleşir? Eşleştir.',
      category: 'cuisine', type: 'drag',
      options: ['Hamsili Pilav | Trabzon', 'Muhlama (Kuymak) | Rize', 'Pestil ve Köme | Gümüşhane', 'Bafra Pidesi | Samsun'],
      correct: null,
      wikiTitle: 'Hamsi',
      imageCaption: 'Karadeniz mutfak haritası — hamsi, muhlama, pestil, pide',
      explanation: 'Karadeniz mutfağı yöresel zenginliğiyle ünlüdür: Trabzon hamsiyle, Rize muhlama (kuymak) ile, Gümüşhane dut pestili ve köme ile, Samsun ise Bafra pidesiyle tanınır.'
    },
    {
      text: 'Karadeniz Bölgesi\'nde yaşatılan geleneksel el sanatlarından HANGİLERİ doğrudur?',
      category: 'craft', type: 'multi',
      options: ['Kastamonu yazmacılığı (ahşap kalıpla kumaş baskısı)', 'Bartın sepet ve hasır örücülüğü', 'Hereke ipek halıcılığı (Marmara\'dadır)', 'Tokat bakırcılığı'],
      correct: [0, 1, 3],
      wikiTitle: 'Kastamonu',
      imageCaption: 'Karadeniz el sanatları — Kastamonu yazması, Tokat bakırı, Bartın sepetçiliği',
      explanation: 'Karadeniz\'in geleneksel zanaatları arasında Kastamonu yazmacılığı, Bartın sepet/hasır örücülüğü ve Tokat bakırcılığı yer alır. Hereke halıcılığı ise Marmara/Kocaeli\'ne aittir.'
    },
    {
      text: 'Karadeniz\'de bir köy düğününe davet edildin. Kemençe başlayınca herkes el ele tutuşup büyük bir halka oluşturdu, hızlı ayak adımlarıyla dönmeye başladı. "Hadi, sen de katıl!" dediler. En uygun davranış nedir?',
      category: 'music', type: 'scenario',
      options: ['Saygılı mesafede izlemek, yabancı geleneklere müdahale etmemek', 'Halkadan birinin elini tutup ritme uyarak adımları kopya etmek — horon böyle yaşatılır', 'Önce dansın videosunu çekip sonra öğrenmek', 'Kemençeden nota tablosu istemek'],
      correct: 1,
      wikiTitle: 'Horon',
      imageCaption: 'Horon — Karadeniz\'in zincir formasyonlu halk dansı',
      explanation: 'Horon, dansçıların el ele tutuşup zincir oluşturduğu hızlı bir Karadeniz halk dansıdır. Misafirler aktif katılır; bu, dansı kuşaktan kuşağa aktarmanın geleneksel yoludur.'
    }
  ],

  'akdeniz': [
    {
      text: 'Likya yazısının çözümlendiği ve Likya uygarlığının kutsal merkezi olan UNESCO mirası neresidir?',
      category: 'unesco', type: 'single',
      options: ['Aspendos', 'Xanthos-Letoon', 'Phaselis', 'Olimpos'],
      correct: 1,
      wikiTitle: 'Xanthos',
      imageCaption: 'Xanthos-Letoon — Likya başkenti (UNESCO 1988)',
      explanation: 'Xanthos-Letoon, Muğla-Antalya sınırında yer alan Likya uygarlığının başkenti ve kutsal merkezidir. 1988\'de UNESCO Dünya Mirası listesine alınmıştır; Likya yazısının çözümünde anahtar rol oynamıştır.'
    },
    {
      text: 'Hangi yöresel yemek hangi Akdeniz iliyle özdeşleşir? Eşleştir.',
      category: 'cuisine', type: 'drag',
      options: ['Künefe | Hatay', 'Tantuni | Mersin', 'Adana Kebabı | Adana', 'Piyaz | Antalya'],
      correct: null,
      wikiTitle: 'Künefe',
      imageCaption: 'Akdeniz mutfağı — künefe, tantuni, kebap, piyaz',
      explanation: 'Akdeniz mutfağı renkli bir yelpazedir: Hatay künefesiyle, Mersin tantunisiyle, Adana acılı kebabıyla, Antalya ise zeytinyağlı piyazıyla tanınır.'
    },
    {
      text: 'Akdeniz Bölgesi\'ne özgü geleneksel el sanatlarından HANGİLERİ doğrudur?',
      category: 'craft', type: 'multi',
      options: ['Antakya ipek (yazma) dokumacılığı', 'Side ve Alanya geleneksel halıcılığı', 'Hereke ipek halıcılığı (Marmara\'dadır)', 'Mersin pirinç ve bakır işçiliği'],
      correct: [0, 1, 3],
      wikiTitle: 'Antakya',
      imageCaption: 'Akdeniz el sanatları — Antakya ipeği, Alanya halısı, Mersin bakırı',
      explanation: 'Antakya ipek dokuma, Alanya/Side geleneksel halıcılığı ve Mersin pirinç-bakır işçiliği Akdeniz\'in zanaatlarındandır. Hereke ise Marmara/Kocaeli\'ndedir.'
    },
    {
      text: 'Akdeniz\'de bir yörük çadırında misafirsin. Yaşlı bir amca sipsi çalmaya başladı, gençler zeybek dansına davet ettiler. Dansın ağır ve gururlu tempolu olduğunu görüyorsun. Nasıl davranırsın?',
      category: 'music', type: 'scenario',
      options: ['Hızlı dönerek modern bir dans göstererek farklılığını sergilemek', 'Yavaş ve ölçülü adımlarla, ellerini iki yana açıp dansın ağır tempolu yapısına uymak', 'Çadırdan çıkıp telefonla video çekmek', 'Müzik bitene kadar sessizce oturmak'],
      correct: 1,
      wikiTitle: 'Zeybek',
      imageCaption: 'Zeybek — gururlu duruşla yavaş tempolu Akdeniz/Ege halk dansı',
      explanation: 'Zeybek, dansçının dimdik duruşu, ellerini iki yana açması ve yavaş ölçülü adımlarıyla bilinir — bu yörük gururunun simgesidir. Yörükler misafirin dansa katılmasını saygı ifadesi olarak görür.'
    }
  ],

  'ic-anadolu': [
    {
      text: 'Çatalhöyük (Konya) hangi açıdan dünya tarihi için benzersizdir?',
      category: 'unesco', type: 'single',
      options: ['Türkiye\'nin ilk camisinin burada inşa edilmesi', 'Roma\'nın Anadolu\'daki ilk sömürgesi olması', 'MÖ 7500\'e tarihlenen dünyanın en erken kentsel yerleşimlerinden biri olması ve ilk duvar resimlerine ev sahipliği yapması', 'Selçuklu çini sanatının başlangıç noktası olması'],
      correct: 2,
      wikiTitle: 'Çatalhöyük',
      imageCaption: 'Çatalhöyük — Konya (UNESCO 2012, MÖ 7500)',
      explanation: 'Çatalhöyük (Konya), MÖ 7500\'de kurulmuş dünyanın bilinen en eski kentsel yerleşimlerinden biridir. Duvar resimleri ve ana tanrıça heykelcikleriyle erken insan toplumunu anlamamızı sağlar; 2012\'de UNESCO listesine alındı.'
    },
    {
      text: 'Hangi yöresel yemek hangi İç Anadolu şehriyle özdeşleşir? Eşleştir.',
      category: 'cuisine', type: 'drag',
      options: ['Mantı | Kayseri', 'Etli Ekmek | Konya', 'Tirit | Çankırı', 'Sucuk-Pastırma | Kayseri'],
      correct: null,
      wikiTitle: 'Mantı',
      imageCaption: 'İç Anadolu mutfağı — Kayseri mantısı, Konya etli ekmeği, sucuk-pastırma',
      explanation: 'İç Anadolu mutfağı et ve hamur ağırlıklıdır: Kayseri mantı ve sucuk-pastırma ile, Konya etli ekmek ile, Çankırı tirit (et + ekmek) ile tanınır.'
    },
    {
      text: 'İç Anadolu\'da yaşatılan geleneksel el sanatlarından HANGİLERİ doğrudur?',
      category: 'craft', type: 'multi',
      options: ['Konya halıcılığı ve dokumacılığı', 'Sivas Yatağan bıçakçılığı', 'Kütahya çiniciliği (Ege\'dedir)', 'Ankara tiftiği ve Sof dokuması'],
      correct: [0, 1, 3],
      wikiTitle: 'Konya',
      imageCaption: 'İç Anadolu el sanatları — Konya halısı, Sivas bıçağı, Ankara tiftiği',
      explanation: 'Konya halıcılığı, Sivas Yatağan bıçakçılığı ve Ankara tiftik dokuması İç Anadolu\'nun simge zanaatlarıdır. Kütahya çiniciliği teknik olarak Ege Bölgesi\'ne dahildir.'
    },
    {
      text: 'Konya\'da bir Mevlana Sema törenine davet edildin. Rehber, "Sema sırasında alkışlama yok, sessiz olun" diyor. Yan koltuktaki turist sesli yorum yapmak istiyor. Nasıl davranırsın?',
      category: 'music', type: 'scenario',
      options: ['Turistin yorumuna kibarca eşlik etmek', 'Bunun bir gösteri değil, dini-manevi bir ritüel olduğunu nazikçe hatırlatıp sessizliğe davet etmek', 'Tören bitince çıkış kapısına yönelmek', 'Telefonu çıkarıp video çekmek'],
      correct: 1,
      wikiTitle: 'Sema',
      imageCaption: 'Sema töreni — Mevlevi semazenleri, Konya (UNESCO 2008)',
      explanation: 'Sema bir gösteri değil, Mevlevi öğretisinin manevi ritüelidir. Saygıyla, sessizce izlenir; alkışlama ya da sesli yorum uygun değildir. 2008\'de UNESCO İnsanlığın Somut Olmayan Kültürel Mirası listesine alınmıştır.'
    }
  ],

  'ege': [
    {
      text: 'Pamukkale\'deki beyaz teraskayalar (travertenler) nasıl oluşur?',
      category: 'unesco', type: 'single',
      options: ['Karların donmasıyla', 'Volkanik lav tabakalarıyla', 'Kalsiyumca zengin ılıca sularının yüzeye çıkıp kireç biriktirmesiyle', 'Rüzgârın kireçtaşını aşındırmasıyla'],
      correct: 2,
      wikiTitle: 'Pamukkale',
      imageCaption: 'Pamukkale travertenleri — Denizli (UNESCO 1988)',
      explanation: 'Pamukkale travertenleri, kalsiyum bikarbonat içeren ılıca sularının yüzeye çıkıp buharlaşırken kireç biriktirmesiyle oluşur. Hierapolis Antik Kenti ile birlikte 1988\'de UNESCO Dünya Mirası listesine alınmıştır.'
    },
    {
      text: 'Hangi yöresel yemek/tatlı hangi Ege iliyle özdeşleşir? Eşleştir.',
      category: 'cuisine', type: 'drag',
      options: ['Çöp Şiş | İzmir (Selçuk)', 'Mesir Macunu | Manisa', 'Boyoz | İzmir', 'Kuyu Tandır | Aydın'],
      correct: null,
      wikiTitle: 'Mesir Macunu Festival',
      imageCaption: 'Ege yöresel lezzetleri — çöp şiş, mesir macunu, boyoz, kuyu tandır',
      explanation: 'Ege mutfağı yöresel zenginliğiyle ünlüdür: İzmir Selçuk çöp şişi ve Sefarad mirası boyoz ile, Manisa 500 yıllık mesir macunu ile, Aydın kuyu tandır kebabıyla tanınır.'
    },
    {
      text: 'Ege Bölgesi\'nde yaşatılan geleneksel el sanatlarından HANGİLERİ doğrudur?',
      category: 'craft', type: 'multi',
      options: ['Kütahya çiniciliği', 'Bergama halıcılığı', 'Çeşme/Bodrum deniz sünger avcılığı', 'Mardin telkari (Güneydoğu\'dadır)'],
      correct: [0, 1, 2],
      wikiTitle: 'Kütahya tiles',
      imageCaption: 'Ege el sanatları — Kütahya çinisi, Bergama halısı, sünger avcılığı',
      explanation: 'Ege\'nin geleneksel zanaatları: Kütahya çiniciliği (16. yüzyıldan beri), Bergama halıcılığı (Osmanlı saray geleneği) ve Çeşme/Bodrum sünger avcılığı. Mardin telkari (gümüş ip işçiliği) ise Güneydoğu\'dadır.'
    },
    {
      text: 'Manisa\'da bir Mesir Macunu Şenliği\'ne katıldın. Sultan Camii\'nin minarelerinden halka renkli macun atılıyor. Yanındaki kişi "Tutamadım, sen ver bana!" diyor. En uygun davranış nedir?',
      category: 'music', type: 'scenario',
      options: ['Macunu paylaşmak — paylaşım her zaman iyidir', 'Macunun bizzat camiden tutulmasının şenliğin geleneksel-bereket simgesi olduğunu açıklayıp kendisinin de bir sonraki atışta denemesini önermek', 'Toplayıp eve götürmek', 'Polis çağırmak'],
      correct: 1,
      wikiTitle: 'Mesir Macunu Festival',
      imageCaption: 'Mesir Macunu Şenliği — Manisa, her Nevruz\'da (UNESCO 2012)',
      explanation: 'Manisa Mesir Macunu Şenliği 500 yılı aşkın geleneksel bir festivaldir (UNESCO 2012). Macun camiden halka atılır ve katılımcıların bizzat yakalaması bereket simgesidir.'
    }
  ],

  'marmara': [
    {
      text: 'Mimar Sinan, hangi camiyi "ustalık eserim" olarak tanımlamıştır?',
      category: 'unesco', type: 'single',
      options: ['Süleymaniye Camii (İstanbul)', 'Şehzade Camii (İstanbul)', 'Selimiye Camii (Edirne)', 'Yeşil Cami (Bursa)'],
      correct: 2,
      wikiTitle: 'Selimiye Mosque',
      imageCaption: 'Selimiye Camii — Edirne, Mimar Sinan (UNESCO 2011)',
      explanation: 'Mimar Sinan, Edirne Selimiye Camii\'ni (1575) "ustalık eserim" olarak tanımlamıştır. Tek merkezi kubbenin altında yarattığı iç mekân Ayasofya\'dan büyüktür. 2011\'de UNESCO listesine alınmıştır.'
    },
    {
      text: 'Hangi yöresel yemek hangi Marmara iliyle özdeşleşir? Eşleştir.',
      category: 'cuisine', type: 'drag',
      options: ['İskender Kebap | Bursa', 'Tava Ciğer | Edirne', 'İnegöl Köfte | Bursa (İnegöl)', 'Tekirdağ Köftesi | Tekirdağ'],
      correct: null,
      wikiTitle: 'İskender kebap',
      imageCaption: 'Marmara mutfağı — İskender, tava ciğer, köfteler',
      explanation: 'Marmara mutfağı şehir bazlı zenginliğiyle ünlüdür: Bursa İskender ve İnegöl köfte ile, Edirne ünlü tava ciğeriyle, Tekirdağ ise nohutlu Tekirdağ köftesiyle tanınır.'
    },
    {
      text: 'Marmara Bölgesi\'nde yaşatılan geleneksel el sanatlarından HANGİLERİ doğrudur?',
      category: 'craft', type: 'multi',
      options: ['Bursa ipekçiliği (Koza Han)', 'Hereke ipek halıcılığı (Kocaeli)', 'Edirne misk sabunu', 'Mardin telkari (Güneydoğu\'dadır)'],
      correct: [0, 1, 2],
      wikiTitle: 'Hereke carpet',
      imageCaption: 'Marmara zanaatları — Bursa ipeği, Hereke halısı, Edirne misk sabunu',
      explanation: 'Bursa İpek Yolu\'nun bitiş noktasıydı; Koza Han hâlâ aktif bir ipek borsasıdır. Hereke ipek halıları Osmanlı saray sanatının zirvesidir. Edirne misk sabunu yüzyıllık bir gelenektir. Mardin telkari ise Güneydoğu\'dadır.'
    },
    {
      text: 'Bursa\'da Ramazan ayında bir Karagöz gösterisine geldin. Karagöz ile Hacivat birbiriyle dalga geçerken kahkahalar atıyorsun. Yanındaki kişi "Bu sanatın altında derin mesajlar var" diyor. Doğru tepki nedir?',
      category: 'music', type: 'scenario',
      options: ['Eğlence kısmı önemli, derin mesaj aramak gereksiz', 'Gülerek dinlemek ama aynı zamanda Karagöz\'ün toplumsal eleştiri, hicviye ve Osmanlı yaşamından kesitler taşıdığını fark etmek', 'Telefonu çıkarıp filme almak', 'Oyunun bittiğini düşünüp kalkmak'],
      correct: 1,
      wikiTitle: 'Karagöz and Hacivat',
      imageCaption: 'Karagöz ve Hacivat — Bursa\'da doğan gölge oyunu (UNESCO 2009)',
      explanation: 'Karagöz ve Hacivat hem komedi hem de toplumsal eleştiridir. Diyaloglarında yöresel ağızlar, sosyal sınıf farkları, Osmanlı yaşamından kesitler ve hicviye bir arada sunulur. 2009\'da UNESCO listesine alınmıştır.'
    }
  ],

  'dogu-anadolu': [
    {
      text: 'Nemrut Dağı\'ndaki devasa tanrı ve kral heykelleri hangi krallık döneminde yapılmıştır?',
      category: 'unesco', type: 'single',
      options: ['Hitit Krallığı (MÖ 14. yüzyıl)', 'Urartu Krallığı (MÖ 9. yüzyıl)', 'Kommagene Krallığı (MÖ 1. yüzyıl, I. Antiokhus)', 'Bizans İmparatorluğu (MS 4. yüzyıl)'],
      correct: 2,
      wikiTitle: 'Mount Nemrut',
      imageCaption: 'Nemrut Dağı — Adıyaman, Kommagene Krallığı (UNESCO 1987)',
      explanation: 'Nemrut Dağı heykelleri, MÖ 1. yüzyılda Kommagene Krallığı hükümdarı I. Antiokhus tarafından yaptırılmıştır. Kendini tanrılarla eşit gören kral, 8-9 metrelik heykellerle anıt mezarını kurdurdu. 1987\'de UNESCO listesine alındı.'
    },
    {
      text: 'Hangi yöresel yemek hangi Doğu Anadolu iliyle özdeşleşir? Eşleştir.',
      category: 'cuisine', type: 'drag',
      options: ['Cağ Kebabı | Erzurum', 'Otlu Peynir | Van', 'Kuru Kayısı | Malatya', 'Harput Köftesi | Elazığ'],
      correct: null,
      wikiTitle: 'Cağ kebabı',
      imageCaption: 'Doğu Anadolu mutfağı — Erzurum cağ kebabı, Van otlu peyniri, Malatya kayısısı, Elazığ köftesi',
      explanation: 'Doğu Anadolu mutfağı yöresel özgünlükle doludur: Erzurum cağ kebabı ile, Van otlu peynir ve kahvaltıyla, Malatya dünyaca ünlü kuru kayısısıyla, Elazığ ise Harput köftesiyle tanınır.'
    },
    {
      text: 'Doğu Anadolu Bölgesi\'nde yaşatılan geleneksel el sanatlarından HANGİLERİ doğrudur?',
      category: 'craft', type: 'multi',
      options: ['Erzurum Oltu Taşı işçiliği', 'Bayburt ehram (yünden dokunmuş örtü)', 'Kütahya çiniciliği (Ege\'dedir)', 'Van kilim ve halı dokumacılığı'],
      correct: [0, 1, 3],
      wikiTitle: 'Oltu stone',
      imageCaption: 'Doğu Anadolu zanaatları — Erzurum oltu taşı, Bayburt ehramı, Van kilimi',
      explanation: 'Erzurum\'a özgü Oltu taşı (siyah, parlak), Bayburt ehram dokumacılığı ve Van halı/kilim sanatı Doğu Anadolu\'nun simge zanaatlarıdır. Kütahya çiniciliği ise Ege Bölgesi\'ne aittir.'
    },
    {
      text: 'Erzurum\'da bir kına gecesindesin. Davul-zurna başladı, erkekler "Bar" dansı için sıraya geçti. Sen yabancısın ama dansa davet edildin. Adımları tam bilmiyorsun. En iyi davranış nedir?',
      category: 'music', type: 'scenario',
      options: ['Adımları bilmediğin için reddetmek', 'Sıranın en sonuna geçip yanındakinin adımlarını gözleyerek öğrenmeye çalışmak — bu kabul gören öğrenme yoludur', 'Müziği kesip kendi dansını yapmak', 'Hızlı bir şekilde ritm değiştirmek'],
      correct: 1,
      wikiTitle: 'Erzurum',
      imageCaption: 'Erzurum Barı — el ele tutuşulan ve sırayla öğrenilen halk dansı',
      explanation: 'Erzurum Barı, sıra ve zincir formasyonunda oynanır. Yeni katılan dansçı en sona geçip yanındakinin adımlarını izleyerek öğrenir. Bu, hem dansın hem de Doğu Anadolu misafirperverliğinin yaşatılma biçimidir.'
    }
  ],

  'guneydogu': [
    {
      text: 'Göbekli Tepe neden insanlık tarihini "yeniden yazan" bir keşif sayılır?',
      category: 'unesco', type: 'single',
      options: ['Dünyanın bilinen en eski yazısının burada bulunması', 'Tarımdan yaklaşık 6000 yıl önce inşa edilmiş olması ve "önce din, sonra şehir" hipotezini desteklemesi', 'Roma döneminin en büyük kentinin burada olması', 'Hz. İbrahim\'in doğduğu yerin burası olduğunun kanıtlanması'],
      correct: 1,
      wikiTitle: 'Göbekli Tepe',
      imageCaption: 'Göbekli Tepe — Şanlıurfa, MÖ 10.000 (UNESCO 2018)',
      explanation: 'Göbekli Tepe (Şanlıurfa, MÖ 10.000), tarımdan yaklaşık 6000 yıl önce yapılmıştır. İnşa edenler henüz çiftçi değildi — bu, "önce tarım, sonra din ve şehir" tezini alt üst etti. 2018\'de UNESCO listesine alındı.'
    },
    {
      text: 'Hangi yöresel yemek hangi Güneydoğu iliyle özdeşleşir? Eşleştir.',
      category: 'cuisine', type: 'drag',
      options: ['Antep Baklavası | Gaziantep', 'Çiğ Köfte | Şanlıurfa', 'Lahmacun | Şanlıurfa', 'İçli Köfte | Adıyaman'],
      correct: null,
      wikiTitle: 'Baklava',
      imageCaption: 'Güneydoğu mutfağı — baklava, çiğköfte, lahmacun, içli köfte',
      explanation: 'Güneydoğu mutfağı baharatlı ve etli yemekleriyle dünyaca tanınır: Gaziantep baklavasıyla (UNESCO Gastronomi Şehri 2015), Şanlıurfa çiğköfte ve lahmacunla, Adıyaman içli köftesiyle özdeşleşir.'
    },
    {
      text: 'Güneydoğu Anadolu\'da yaşatılan geleneksel el sanatlarından HANGİLERİ doğrudur?',
      category: 'craft', type: 'multi',
      options: ['Mardin Telkari (gümüş tel işçiliği)', 'Gaziantep bakırcılığı', 'Antep yemenicilik (geleneksel deri ayakkabı)', 'Hereke ipek halıcılığı (Marmara\'dadır)'],
      correct: [0, 1, 2],
      wikiTitle: 'Filigree',
      imageCaption: 'Güneydoğu zanaatları — Mardin telkari, Antep bakırı, yemeni',
      explanation: 'Mardin telkari (ince gümüş ip işçiliği), Antep bakırcılığı ve Antep yemeniciliği Güneydoğu\'nun en önemli zanaatlarıdır. Hereke halıcılığı ise Marmara/Kocaeli\'ndedir.'
    },
    {
      text: 'Şanlıurfa\'da bir Sıra Gecesi\'ne misafir oldun. Ev sahibi mey çalıp bir Urfa türküsü dinletti, ardından senden de "bir şey paylaş" diye rica ediyor. Müzik aleti çalmıyorsun. En uygun davranış nedir?',
      category: 'music', type: 'scenario',
      options: ['Reddedip sessizce dinlemeye devam etmek', 'Bildiğin bir türküyü söylemek ya da bir şiir/anı paylaşmak — sıra gecesinin amacı paylaşımdır', 'Telefondan müzik açmak', 'Tuvalete gidip beklemek'],
      correct: 1,
      wikiTitle: 'Sıra Gecesi',
      imageCaption: 'Sıra Gecesi — Şanlıurfa\'nın haftalık paylaşım geleneği',
      explanation: 'Sıra Gecesi adından da anlaşılacağı gibi "sıra ile paylaşma" geleneğidir. Müzik aleti çalmayan da bir türkü söyleyebilir, hatıra anlatabilir ya da şiir okuyabilir. Önemli olan paylaşıma katılmaktır.'
    }
  ]
};

// Globale yayımla (game.js'den önce yüklenir)
if (typeof window !== 'undefined') window.EXTENDED_QUESTIONS = EXTENDED_QUESTIONS;

// ── YAPAY ZEKA VE TEKNOLOJİ SORULARI (10 soru, 7 bölge) ──────
const AI_QUESTIONS = {
  'karadeniz': [
    {
      text: 'Yapay zeka (YZ) nedir?',
      category: 'ai', type: 'single',
      options: ['Yalnızca robotların fiziksel hareketlerini kontrol eden sistem', 'Bilgisayarların insan zekasını taklit ederek öğrenmesini, akıl yürütmesini ve problem çözmesini sağlayan teknoloji', 'İnternetin başka bir adı', 'Programlama dillerinin tamamına verilen genel ad'],
      correct: 1,
      wikiTitle: 'Artificial intelligence',
      imageCaption: 'Yapay zeka — makine öğrenmesi ve derin öğrenme',
      explanation: 'Yapay zeka (YZ/AI), bilgisayar sistemlerinin normalde insan zekası gerektiren görevleri (öğrenme, algılama, problem çözme, dil anlama) yerine getirebilmesini sağlayan teknolojiler bütünüdür.'
    },
    {
      text: 'Sümela Manastırı gibi tarihi yapıların dijital olarak belgelenmesinde hangi YZ destekli teknoloji kullanılmaktadır?',
      category: 'ai', type: 'single',
      options: ['Ses tanıma', '3B nokta bulutu ve fotogrametri — binlerce fotoğraftan YZ algoritmaları ile hassas dijital kopya oluşturma', 'GPS haritalama', 'Kızılötesi tarama'],
      correct: 1,
      wikiTitle: 'Photogrammetry',
      imageCaption: 'Kültürel mirasın 3B dijital belgelenmesi — YZ destekli fotogrametri',
      explanation: 'Fotogrametri ve LiDAR tarama sayesinde YZ algoritmaları, binlerce fotoğraf veya lazer noktasından tarihi yapıların milimetre hassasiyetinde 3B dijital kopyalarını oluşturabilmektedir. Bu yöntem Sümela gibi erişimi zor yapılarda özellikle değerlidir.'
    }
  ],
  'akdeniz': [
    {
      text: 'Makine öğrenmesi (ML) ile geleneksel programlama arasındaki temel fark nedir?',
      category: 'ai', type: 'single',
      options: ['ML çok daha pahalıdır', 'Geleneksel programlamada kurallar insan tarafından yazılır; ML'de sistem veriden kendi kurallarını öğrenir', 'ML yalnızca oyun geliştirmede kullanılır', 'İkisi aynı şeydir, sadece isim farkı vardır'],
      correct: 1,
      wikiTitle: 'Machine learning',
      imageCaption: 'Makine öğrenmesi — veriden kural öğrenen sistemler',
      explanation: 'Geleneksel programlamada programcı her kuralı manuel yazar. Makine öğrenmesinde ise sistem büyük veri setlerini analiz ederek kendi kalıplarını ve kurallarını otomatik olarak öğrenir — bu esneklik YZ'yi güçlü kılan temel özelliktir.'
    }
  ],
  'ic-anadolu': [
    {
      text: 'YZ görüntü tanıma teknolojisi Türkiye'deki arkeolojik çalışmalarda nasıl kullanılmaktadır?',
      category: 'ai', type: 'single',
      options: ['Yalnızca müze bilet satışında', 'Uydu ve drone görüntülerini analiz ederek henüz kazılmamış arkeolojik alanları tespit etmek için', 'Turistlerin fotoğraflarını düzenlemek için', 'Antika alım-satımını kolaylaştırmak için'],
      correct: 1,
      wikiTitle: 'Archaeological prospection',
      imageCaption: 'YZ ile arkeolojik alan keşfi — Anadolu uydu görüntü analizi',
      explanation: 'YZ görüntü işleme algoritmaları, uydu ve drone fotoğraflarındaki toprak rengi, yoğunluk veya yapısal kalıpları analiz ederek yerleşim, yol veya yapı kalıntısı barındırabilecek alanları işaret edebilmektedir. Bu teknik Anadolu'da kazı öncesi araştırmalarda kullanılmaktadır.'
    },
    {
      text: '"Derin öğrenme" (deep learning) nedir?',
      category: 'ai', type: 'single',
      options: ['İnternetin derinliklerinde saklı gizli bilgiye erişim', 'İnsan beyninin nöron yapısından esinlenerek oluşturulan çok katmanlı yapay sinir ağları', 'Uzun süreli hafıza depolama sistemi', 'Kuantum bilgisayarların temel algoritması'],
      correct: 1,
      wikiTitle: 'Deep learning',
      imageCaption: 'Derin öğrenme — çok katmanlı yapay sinir ağları',
      explanation: 'Derin öğrenme, insan beynindeki nöronlardan ilham alan çok katmanlı yapay sinir ağlarına dayanır. Her katman veriden farklı soyutlama düzeyinde özellikler öğrenir; bu sayede görüntü tanıma, ses işleme ve dil anlama gibi karmaşık görevlerde üstün başarı sağlar.'
    }
  ],
  'ege': [
    {
      text: 'YZ dil modelleri (ChatGPT, Claude gibi) Türkçe kültürel miras metinlerinin korunmasına nasıl katkı sağlayabilir?',
      category: 'ai', type: 'single',
      options: ['Orijinal metinleri siler', 'Eski Türkçe ve Osmanlıca belgeleri modern Türkçeye çevirerek dijital arşivlerin zenginleştirilmesine yardımcı olarak', 'Yalnızca İngilizce metin işleyebilir', 'Çeviri yapamaz, yalnızca özetler'],
      correct: 1,
      wikiTitle: 'Large language model',
      imageCaption: 'YZ dil modeli — tarihi metin çözümleme ve çeviri',
      explanation: 'Büyük dil modelleri, Osmanlıca ve eski Türkçe belgeler dahil tarihi metinlerin okunması, çevrilmesi ve dijitalleştirilmesine destek sağlayabilir. Bu, yazılı kültürel mirasın gelecek kuşaklara aktarılmasını kolaylaştırmaktadır.'
    },
    {
      text: 'YZ etik ilkeleri bağlamında "algoritma taraflılığı" (bias) ne anlama gelir?',
      category: 'ai', type: 'single',
      options: ['Algoritmanın yavaş çalışması', 'YZ sisteminin eğitim verisindeki önyargıları öğrenerek bazı gruplara karşı adaletsiz sonuçlar üretmesi', 'Yazılım güvenlik açığı', 'İnternet bant genişliği sorunu'],
      correct: 1,
      wikiTitle: 'Algorithmic bias',
      imageCaption: 'Algoritma taraflılığı — YZ etik sorunu',
      explanation: 'YZ algoritmaları eğitildikleri verideki önyargıları öğrenebilir. Örneğin, belirli grupların az temsil edildiği verilerle eğitilen bir sistem, o gruplara karşı adaletsiz kararlar üretebilir. Bu nedenle YZ geliştirmede çeşitli ve dengeli veri kullanımı kritiktir.'
    }
  ],
  'marmara': [
    {
      text: 'Türkiye'de YZ alanındaki ulusal strateji belgesi ilk olarak hangi yılda yayımlandı?',
      category: 'ai', type: 'single',
      options: ['2010', '2021 — Türkiye Yapay Zeka Stratejisi (2021-2025)', '2005', '2018'],
      correct: 1,
      wikiTitle: 'Artificial intelligence',
      imageCaption: 'Türkiye Yapay Zeka Stratejisi 2021-2025',
      explanation: 'Türkiye, ulusal YZ stratejisini 2021 yılında yayımladı. "Türkiye Yapay Zeka Stratejisi 2021-2025" belgesi, veri ekonomisi, YZ insan kaynağı, altyapı ve etik alanlarında hedefler belirlemektedir.'
    },
    {
      text: 'Büyük Kapalıçarşı'nın (Kapalıçarşı, İstanbul) dijital envanter çalışmalarında hangi YZ uygulaması kullanılabilir?',
      category: 'ai', type: 'single',
      options: ['Yalnızca barkod tarama', 'Nesne tanıma ve görsel arama — tarihi eserlerin fotoğrafından otomatik kataloglama ve benzer eser tespiti', 'Yalnızca QR kodlama', 'Satış takip yazılımı'],
      correct: 1,
      wikiTitle: 'Computer vision',
      imageCaption: 'YZ görüntü tanıma ile kültürel eser dijital kataloglama',
      explanation: 'Bilgisayarlı görme (computer vision) ile eğitilmiş YZ modelleri, tarihi eserlerin fotoğraflarını analiz ederek dönem, stil ve teknik özelliklerini sınıflandırabilir; müze ve arşiv kataloglarının oluşturulmasını hızlandırır.'
    }
  ],
  'dogu-anadolu': [
    {
      text: 'YZ destekli "öneri sistemleri" müzelerde nasıl kullanılmaktadır?',
      category: 'ai', type: 'single',
      options: ['Müze kapılarını otomatik açmak için', 'Ziyaretçinin ilgi alanlarına ve gezme geçmişine göre kişiselleştirilmiş tur rotaları ve eser önerileri sunmak için', 'Yalnızca bilet fiyatı hesaplamak için', 'Güvenlik kameralarını yönetmek için'],
      correct: 1,
      wikiTitle: 'Recommender system',
      imageCaption: 'YZ öneri sistemi — müzede kişiselleştirilmiş deneyim',
      explanation: 'Müzelerde YZ öneri sistemleri, ziyaretçinin hangi eserlere baktığını, ne kadar süre durduğunu ve tercihlerini analiz ederek kişiye özel tur rotası oluşturabilir. Van Müzesi gibi büyük koleksiyonlarda ziyaretçi deneyimini kişiselleştirmekte kullanılabilir.'
    }
  ],
  'guneydogu': [
    {
      text: 'Göbekli Tepe gibi arkeolojik alanlarda YZ kullanımının somut bir örneği nedir?',
      category: 'ai', type: 'single',
      options: ['Turistlere dijital bilet satışı', 'Kazı sırasında çıkan taş parçalarının eşleştirilmesi, çatlak tespiti ve yapıların sanal ortamda yeniden inşası', 'Yemek servisi organizasyonu', 'Otopark yönetimi'],
      correct: 1,
      wikiTitle: 'Göbekli Tepe',
      imageCaption: 'YZ ile arkeolojik parça eşleştirme — Göbekli Tepe',
      explanation: 'Göbekli Tepe'de YZ görüntü işleme algoritmaları, on binlerce taş parçasını karşılaştırarak uyumluluk analizi yapmakta ve parçaları birleştirerek taş kabartmaları dijital ortamda yeniden oluşturmaktadır. Bu işlem elle yapılmasının on yıllar alacağı eşleştirmeleri saatler içinde gerçekleştirir.'
    }
  ]
};

// AI_QUESTIONS varsa REGIONS'a ekle
(function addAIQuestions(){
  if(typeof REGIONS === 'undefined') return;
  REGIONS.forEach(r=>{
    if(AI_QUESTIONS[r.id]){
      r.questions = r.questions.concat(AI_QUESTIONS[r.id]);
    }
  });
})();

if(typeof window !== 'undefined') window.AI_QUESTIONS = AI_QUESTIONS;

// ── UNUTULMAYA YÜZ TUTMUŞ MİRAS — EŞLEŞTİRME & ÇOKLU ŞIK (7 bölge × 5 soru) ──
const FORGOTTEN_QUESTIONS = {

  'karadeniz': [
    {
      text: 'Karadeniz\'de yok olma tehlikesiyle karşı karşıya olan geleneksel el sanatları hangilerdir?',
      category: 'craft', type: 'multi',
      options: [
        'Trabzon bakır kalemkârlığı (elle oyma gravür)',
        'Kastamonu ahşap kalıp yazmacılığı',
        'Hereke ipek halıcılığı (Marmara\'ya aittir)',
        'Bartın söğüt dalı sepetçiliği',
      ],
      correct: [0, 1, 3],
      wikiTitle: 'Trabzon',
      imageCaption: 'Karadeniz\'de nesli tükenmekte olan geleneksel el sanatları',
      explanation: 'Trabzon bakır kalemkârlığı, Kastamonu yazmacılığı ve Bartın sepetçiliği Karadeniz\'in yok olma tehlikesindeki üç önemli zanaatıdır. Hereke halıcılığı ise Marmara Bölgesi\'ne aittir.'
    },
    {
      text: 'Karadeniz\'e özgü unutulan el sanatını doğru özelliğiyle eşleştir.',
      category: 'craft', type: 'drag',
      options: [
        'Trabzon bakır kalemkârlığı | Bakır levhaya elle çekiç ve kalemle desen oyma',
        'Kastamonu yazmacılığı | Ahşap kalıpla kumaşa elle baskı yapma',
        'Bartın sepetçiliği | Söğüt ve fındık dalından örme',
        'Bayburt ehram dokumacılığı | Yünden elle dokunan büyük örtü',
      ],
      correct: null,
      wikiTitle: 'Kastamonu',
      imageCaption: 'Karadeniz unutulan el sanatları eşleştirmesi',
      explanation: 'Her zanaat kendine özgü teknikle uygulanır: Bakır kalemkârlığı elde çekiçle, yazmacılık ahşap kalıpla, sepetçilik söğüt dalıyla, ehram dokumacılığı ise tezgâhta yünle yapılır.'
    },
    {
      text: 'Karadeniz\'de imece kültürüyle bağlantılı hangi uygulamalar yok olmaktadır?',
      category: 'music', type: 'multi',
      options: [
        'Lenger geleneği — toplu aş pişirip komşulara dağıtma',
        'Yaylaya çıkma ve sütün ortaklaşa işlenmesi (yoğurt, peynir)',
        'Kırkpınar yağlı güreşi (Edirne\'ye aittir)',
        'Bağ bozumu yardımlaşması ve şarkılı hasat töreni',
      ],
      correct: [0, 1, 3],
      wikiTitle: 'Karadeniz',
      imageCaption: 'Karadeniz imece geleneği — yok olmaya yüz tutan toplumsal pratikler',
      explanation: 'Lenger geleneği, yayla sütü ortaklaşa işleme ve bağ bozumu yardımlaşması Karadeniz imece kültürünün parçasıdır. Kırkpınar ise Edirne\'ye özgüdür.'
    },
    {
      text: 'Unutulmaya yüz tutan Karadeniz müzik aleti ile kullanıldığı yöreyi eşleştir.',
      category: 'music', type: 'drag',
      options: [
        'Kemençe | Trabzon ve Rize — üç telli keman',
        'Tulum (dağ gayda) | Artvin ve Rize — tulumdan yapılmış üflemeli',
        'Çığırtma | Kastamonu ve Sinop — kemikten yapılan düdük',
        'Mey | Artvin — kamıştan çift dilli nefesli çalgı',
      ],
      correct: null,
      wikiTitle: 'Horon',
      imageCaption: 'Karadeniz\'in unutulan geleneksel müzik aletleri',
      explanation: 'Kemençe Trabzon ve Rize\'ye, tulum Artvin ve Rize\'ye, çığırtma Kastamonu-Sinop\'a, mey ise Artvin yöresine özgüdür. Bu çalgıların ustası giderek azalmaktadır.'
    },
    {
      text: 'Hemşin yöresiyle bağlantılı aşağıdaki hangi uygulamalar yok olma tehlikesindedir?',
      category: 'craft', type: 'multi',
      options: [
        'Hemşin hevsel bahçeciliği ve organik yayla tarımı',
        'Geleneksel Hemşin mimari evleri (ahşap konsollu) yapım tekniği',
        'Antalya sünger dalgıçlığı (Akdeniz\'e aittir)',
        'Fındık hasadında söylenen türküler ve hasat şarkıları',
      ],
      correct: [0, 1, 3],
      wikiTitle: 'Hemşin',
      imageCaption: 'Hemşin yaylacılığı ve geleneksel mimari — unutulmakta olan kültür',
      explanation: 'Hemşin yöresinin organik yayla tarımı, özgün ahşap mimari tekniği ve fındık hasatı türküleri yok olma tehlikesindedir. Sünger dalgıçlığı Ege/Akdeniz\'e aittir.'
    },
  ],

  'akdeniz': [
    {
      text: 'Akdeniz\'de nesli tükenmekte olan hangi geleneksel meslekler tehlike altındadır?',
      category: 'craft', type: 'multi',
      options: [
        'Kalafatçı — ahşap teknenin su geçirmezliğini sağlayan usta',
        'Sünger dalgıcı — doğal deniz süngerini el ile toplayan',
        'Hereke halı ustası (Marmara\'ya aittir)',
        'Yörük keçe ustası — yün keçeden çadır ve kilim yapan',
      ],
      correct: [0, 1, 3],
      wikiTitle: 'Alanya',
      imageCaption: 'Akdeniz\'de yok olmakta olan geleneksel meslekler',
      explanation: 'Kalafatçı, sünger dalgıcı ve Yörük keçe ustası Akdeniz\'de nesli tükenmekte olan mesleklerdir. Hereke halıcılığı Kocaeli/Marmara\'ya aittir.'
    },
    {
      text: 'Akdeniz\'de unutulan geleneksel zanaatı doğru iliyle eşleştir.',
      category: 'craft', type: 'drag',
      options: [
        'Kalafatçılık (ahşap tekne su geçirmezliği) | Alanya',
        'Kelebek motifli kilim dokumacılığı | Elmalı / Antalya',
        'Doğal sünger avcılığı | Bodrum ve Kaş',
        'Geleneksel Hatay cumbalı ev yapımı | Antakya',
      ],
      correct: null,
      wikiTitle: 'Antakya',
      imageCaption: 'Akdeniz unutulan zanaatları — il eşleştirmesi',
      explanation: 'Alanya kalafatçılığı, Elmalı kilimi, Bodrum-Kaş sünger avcılığı ve Antakya cumbalı ev yapımı Akdeniz\'in bölgesel geleneksel zanaatlarıdır.'
    },
    {
      text: 'Yörük göçebe geleneğiyle bağlantılı aşağıdaki hangi uygulamalar yok olmaktadır?',
      category: 'music', type: 'multi',
      options: [
        'Keçi kılından kara çadır (Karaçadır) dikme sanatı',
        'Yörük sözlü destanları ve mani geleneği',
        'Kırkpınar güreş festivali (Edirne\'ye aittir)',
        'Yörük keçesinden çuval, heybe ve kilim dokuma',
      ],
      correct: [0, 1, 3],
      wikiTitle: 'Yörük',
      imageCaption: 'Yörük göçebe geleneği — Toroslar\'da yok olmakta olan kültür',
      explanation: 'Karaçadır dikme sanatı, Yörük sözlü destanları ve keçe dokumacılığı yok olma tehlikesindeki Yörük geleneğinin parçasıdır. Kırkpınar Edirne\'ye aittir.'
    },
    {
      text: 'Akdeniz\'in unutulan mimari unsurunu doğru özelliğiyle eşleştir.',
      category: 'craft', type: 'drag',
      options: [
        'Likya kaya mezarı | Kayaya oyulmuş tapınak cepheli anıtsal mezar',
        'Antakya cumbalı ev | Arap-Osmanlı mirası ahşap çıkmalı cephe',
        'Alanya tersane kemerleri | Selçuklu dönemi deniz üssünün taş tonoz yapısı',
        'Aspendos aquadukt | MS 2. yüzyıl Roma dönemi su kemeri kalıntısı',
      ],
      correct: null,
      wikiTitle: 'Lycian rock-cut tombs',
      imageCaption: 'Akdeniz unutulan mimari unsurları eşleştirmesi',
      explanation: 'Her yapı farklı bir uygarlığa ve döneme aittir: Likya kaya mezarı MÖ 4-2. yüzyıl, Antakya cumbalı ev Osmanlı dönemi, Alanya tersanesi Selçuklu dönemi, Aspendos aquadukt ise Roma dönemidir.'
    },
    {
      text: 'Antalya çevresinde yok olmakta olan hangi doğa-kültür pratikleri tehlike altındadır?',
      category: 'craft', type: 'multi',
      options: [
        'Olimpos yöresi kekik ve menengiç kahvesi toplama geleneği',
        'Phaselis körfezinde geleneksel ağ balıkçılığı ritüeli',
        'Konya Mevlana dergâhı sema töreni (İç Anadolu\'ya aittir)',
        'Tahtacı Alevi Türkmenlerinin orman kültürü ve cem töreni',
      ],
      correct: [0, 1, 3],
      wikiTitle: 'Antalya',
      imageCaption: 'Antalya çevresi doğa-kültür pratikleri — yok olma tehlikesi',
      explanation: 'Olimpos\'ta kekik toplama, Phaselis\'te geleneksel ağ balıkçılığı ve Tahtacı Türkmenlerinin orman-cem kültürü Akdeniz\'de yok olma tehlikesindeki pratiklerdir. Sema töreni İç Anadolu\'ya aittir.'
    },
  ],

  'ic-anadolu': [
    {
      text: 'İç Anadolu\'da yok olma tehlikesindeki hangi geleneksel el sanatları doğrudur?',
      category: 'craft', type: 'multi',
      options: [
        'Sivas Yatağan bıçakçılığı — dövme çelik elle şekillendirme',
        'Ankara tiftik dokuması — Ankara keçisinden iplik yapma',
        'Kütahya cam mozaik (Ege\'ye aittir)',
        'Aksaray ve Niğde\'de geleneksel taş oyma kapı süsleme',
      ],
      correct: [0, 1, 3],
      wikiTitle: 'Sivas',
      imageCaption: 'İç Anadolu unutulan el sanatları',
      explanation: 'Sivas bıçakçılığı, Ankara tiftik dokuması ve Aksaray-Niğde taş oyma kapıları İç Anadolu\'da yok olma tehlikesindedir. Kütahya cam mozaik Ege\'ye aittir.'
    },
    {
      text: 'İç Anadolu\'da unutulan zanaatı doğru şehriyle eşleştir.',
      category: 'craft', type: 'drag',
      options: [
        'Sivas Yatağan bıçakçılığı | Sivas — dövme elle şekillendirme',
        'Ankara tiftik dokumacılığı | Ankara — Angora keçisi yünü',
        'Kastamonu sepet örücülüğü | Kastamonu (Karadeniz\'e aittir)',
        'Konya halı dokumacılığı | Konya — Selçuklu dönemi geleneği',
      ],
      correct: null,
      wikiTitle: 'Konya',
      imageCaption: 'İç Anadolu geleneksel zanaat eşleştirmesi',
      explanation: 'Sivas bıçakçılığı, Ankara tiftik ve Konya halı dokumacılığı İç Anadolu\'ya özgüdür. Kastamonu sepetçiliği ise Karadeniz Bölgesi\'ndedir.'
    },
    {
      text: 'Kapadokya\'da yok olmakta olan hangi kültürel uygulamalar tehlike altındadır?',
      category: 'music', type: 'multi',
      options: [
        'Tüf kayaya oyulmuş güvercin evi (güvercinlik) yapım geleneği',
        'Geleneksel Kapadokya çömlekçiliği — el çarkında şekillendirme',
        'Bursa Koza Hanı ipek ticareti geleneği (Marmara\'ya aittir)',
        'Nevşehir\'de kaya kilisesi fresklerinin geleneksel bakım ritüeli',
      ],
      correct: [0, 1, 3],
      wikiTitle: 'Göreme Open Air Museum',
      imageCaption: 'Kapadokya\'da yok olmakta olan kültürel uygulamalar',
      explanation: 'Tüf kaya güvercinlik geleneği, el çarkı çömlekçiliği ve kaya kilisesi bakım ritüelleri Kapadokya\'ya özgü yok olma tehlikesindeki kültürel pratiklerdir.'
    },
    {
      text: 'Anadolu\'nun unutulan ritüelini doğru anlamıyla eşleştir.',
      category: 'music', type: 'drag',
      options: [
        'Alacaören yağmur duası | Kuraklıkta toplu dua ve su serpme ritüeli',
        'Hıdırellez kutlaması | Doğanın uyanışını simgeleyen Mayıs bayramı',
        'Nevruz ateşi | Yeni yılı karşılayan ateş üzerinden atlama geleneği',
        'Saya gezme | Kışın ortasında kapı kapı dolaşıp şans dileme',
      ],
      correct: null,
      wikiTitle: 'Hıdırellez',
      imageCaption: 'Anadolu unutulan ritüelleri — anlam eşleştirmesi',
      explanation: 'Bu dört ritüel farklı mevsimlere ve anlamlara sahiptir: Alacaören kuraklık duası, Hıdırellez Mayıs bayramı, Nevruz ateş ritüeli ve Saya kış geleneği olarak bilinir.'
    },
    {
      text: 'İç Anadolu\'da yok olmakta olan hangi sözlü gelenek unsurları tehlike altındadır?',
      category: 'music', type: 'multi',
      options: [
        'Aşık geleneği — saz eşliğinde doğaçlama şiir söyleme',
        'Meddah anlatımı — tek kişilik sözlü hikâye ve mizah sanatı',
        'Karagöz gölge oyunu (Marmara/Bursa\'ya aittir)',
        'Saya gezme türküleri — kış ortasında kapı kapı söylenen şarkılar',
      ],
      correct: [0, 1, 3],
      wikiTitle: 'Ashik',
      imageCaption: 'İç Anadolu sözlü gelenek — yok olma tehlikesindeki kültür',
      explanation: 'Aşık geleneği, meddah anlatımı ve saya türküleri İç Anadolu\'da yok olma tehlikesindeki sözlü kültür unsurlarıdır. Karagöz ise Bursa/Marmara kökenlidir.'
    },
  ],

  'ege': [
    {
      text: 'Ege\'de yok olma tehlikesindeki hangi geleneksel el sanatları doğrudur?',
      category: 'craft', type: 'multi',
      options: [
        'Bergama boynuz tarakçılığı — hayvan boynuzundan tarak yapma',
        'Çeşme sakız hasadı — mastika reçinesi elle dövme toplama',
        'Trabzon bakır kalemkârlığı (Karadeniz\'e aittir)',
        'Milas bitkisel boyalı kilim dokumacılığı',
      ],
      correct: [0, 1, 3],
      wikiTitle: 'Bergama',
      imageCaption: 'Ege\'de yok olma tehlikesindeki el sanatları',
      explanation: 'Bergama boynuz tarakçılığı, Çeşme sakız hasadı ve Milas kilim dokumacılığı Ege\'ye özgü yok olma tehlikesindeki zanaatlardır. Trabzon bakır kalemkârlığı Karadeniz\'e aittir.'
    },
    {
      text: 'Ege\'nin unutulan geleneksel zanaatını doğru yöreyle eşleştir.',
      category: 'craft', type: 'drag',
      options: [
        'Boynuz tarak yapımı | Bergama — plastik üretim baskısıyla yok oluyor',
        'Mastika (sakız) hasadı | Çeşme ve Sakız adası — 2500 yıllık gelenek',
        'Bitkisel boyalı kilim | Milas / Muğla — koç boynuzu motifli',
        'Deri yemeni yapımı | Selçuk / İzmir — el dikişi çarık geleneği',
      ],
      correct: null,
      wikiTitle: 'Mastic (plant resin)',
      imageCaption: 'Ege\'nin unutulan geleneksel zanaatları — yöre eşleştirmesi',
      explanation: 'Her zanaat Ege\'nin farklı yöresine özgüdür: Bergama\'da boynuz tarak, Çeşme\'de sakız hasadı, Milas\'ta kilim ve Selçuk\'ta deri yemeni yapımı yapılırdı.'
    },
    {
      text: 'Ege\'de yok olmakta olan deniz ve balıkçılık kültürüne dair hangi uygulamalar tehlike altındadır?',
      category: 'craft', type: 'multi',
      options: [
        'Bodrum ve Kaş\'ta geleneksel ahşap gulet inşası',
        'Ege\'de doğal sünger avcılığı ve dalış ritüeli',
        'Alanya kalafatçılığı (Akdeniz\'e aittir)',
        'Foça\'da geleneksel ağ balıkçılığı ve ağ örme sanatı',
      ],
      correct: [0, 1, 3],
      wikiTitle: 'Bodrum',
      imageCaption: 'Ege deniz kültürü — yok olmakta olan pratikler',
      explanation: 'Bodrum-Kaş\'ta ahşap gulet inşası, Ege\'de sünger avcılığı ve Foça\'da ağ örme geleneği Ege\'nin yok olmakta olan deniz kültürünün parçasıdır. Alanya kalafatçılığı Akdeniz\'e aittir.'
    },
    {
      text: 'Ege\'nin unutulan ritüel veya festivalini doğru özelliğiyle eşleştir.',
      category: 'music', type: 'drag',
      options: [
        'Manisa Mesir Macunu Şenliği | Camiden halka renkli macun atılan 500 yıllık festival',
        'Selçuk Efes Kültür Festivali | Helenistik miras canlandırmacılığı',
        'Foça Hıdırellez kutlaması | Ege sahilinde ateş ve deniz ritüeli',
        'Çeşme Sakız Festivali | Mastika hasatını kutlayan modern gelenek',
      ],
      correct: null,
      wikiTitle: 'Mesir Macunu Festival',
      imageCaption: 'Ege festival ve ritüelleri — eşleştirme',
      explanation: 'Her festival ya da ritüel kendine özgü tarihe ve anlama sahiptir: Mesir 500 yıllık, Efes antik canlandırma, Foça Hıdırellez deniz ritüeli ve Çeşme Sakız festivali bölgenin kültürel takvimini oluşturur.'
    },
    {
      text: 'Ege\'de yok olmakta olan hangi mimari ve yaşam kültürü unsurları tehlike altındadır?',
      category: 'craft', type: 'multi',
      options: [
        'Muğla\'nın bacalı beyaz badanalı geleneksel Muğla evi mimarisi',
        'Ege köy meydanı etrafında örgütlenen imece kültürü',
        'Edirne Kırkpınar ağalık geleneği (Marmara\'ya aittir)',
        'İzmir\'in tarihi Kemeraltı çarşısında kaybolmakta olan geleneksel esnaf',
      ],
      correct: [0, 1, 3],
      wikiTitle: 'Muğla',
      imageCaption: 'Ege geleneksel yaşam kültürü — yok olma tehlikesi',
      explanation: 'Muğla\'nın özgün bacalı ev mimarisi, Ege köy imsği kültürü ve Kemeraltı\'nın geleneksel esnafları yok olma tehlikesindedir. Kırkpınar ağalığı Edirne\'ye aittir.'
    },
  ],

  'marmara': [
    {
      text: 'Marmara\'da yok olma tehlikesindeki hangi geleneksel el sanatları doğrudur?',
      category: 'craft', type: 'multi',
      options: [
        'Bursa ipekçiliği — Koza Han\'da el ekişiyle ham ipek işleme',
        'Edirne misk sabunu yapımı — geleneksel sabun pişirme',
        'Milas bitkisel kilim dokumacılığı (Ege\'ye aittir)',
        'İstanbul ebru sanatı — su yüzeyinde boyayla desen oluşturma',
      ],
      correct: [0, 1, 3],
      wikiTitle: 'Bursa',
      imageCaption: 'Marmara\'da yok olma tehlikesindeki el sanatları',
      explanation: 'Bursa ipekçiliği, Edirne misk sabunu ve İstanbul ebru sanatı Marmara\'da nesli tükenmekte olan zanaatlardır. Milas kilimi Ege Bölgesi\'ne aittir.'
    },
    {
      text: 'Marmara\'da unutulan geleneksel zanaatı ya da sanatı doğru özelliğiyle eşleştir.',
      category: 'craft', type: 'drag',
      options: [
        'Ebru (kâğıt mermeri) | Su yüzeyine fırlatılan boyaların kâğıda aktarılması',
        'Hat sanatı | Kamış kalemle Arap alfabesiyle kaligrafi',
        'Tezhip | Altın varak ve boya ile el yazması süsleme',
        'Minyatür | İnce fırçayla küçük boyutlu el yazması resim',
      ],
      correct: null,
      wikiTitle: 'Ebru (marbling)',
      imageCaption: 'Osmanlı görsel sanatları — teknik eşleştirmesi',
      explanation: 'Osmanlı\'nın dört büyük kitap sanatı farklı tekniklerle uygulanır: Ebru su üzerinde, hat kamış kalemle, tezhip altın varakla, minyatür ise ince fırçayla gerçekleştirilir.'
    },
    {
      text: 'İstanbul\'da yok olmakta olan hangi geleneksel meslek ve uygulamalar tehlike altındadır?',
      category: 'craft', type: 'multi',
      options: [
        'Sahaf (eski kitap satıcısı) — Sahaflar Çarşısı esnafının azalması',
        'Geleneksel çilingir — anahtarı elle eğeyerek yapan usta',
        'Hereke ipek halı ustası (Kocaeli\'ne aittir)',
        'Kapalıçarşı bakırcı ve kuyumcu zanaatkârları',
      ],
      correct: [0, 1, 3],
      wikiTitle: 'Grand Bazaar Istanbul',
      imageCaption: 'İstanbul\'da yok olmakta olan geleneksel esnaf',
      explanation: 'Sahaflar, geleneksel çilingirler ve Kapalıçarşı\'nın el işi bakır-kuyumcu ustalarının sayısı hızla azalmaktadır. Hereke halı ustası Kocaeli\'ne aittir.'
    },
    {
      text: 'Bursa\'da unutulan geleneksel uygulamayı doğru özellikleriyle eşleştir.',
      category: 'music', type: 'drag',
      options: [
        'Karagöz gölge oyunu | Deriden kesilen figürlerle perde arkasında gösteri',
        'Koza Han ipek ticareti | Osmanlı\'dan kalma ipek borsasının küçülmesi',
        'Hamam tellak geleneği | Kese-köse hizmetini ustadan öğrenen zanaat',
        'Bursa Yeşil Türbe ziyaret ritüeli | Osmanlı türbe ziyaret kültürü',
      ],
      correct: null,
      wikiTitle: 'Karagöz and Hacivat',
      imageCaption: 'Bursa\'da unutulan geleneksel pratikler — eşleştirme',
      explanation: 'Karagöz gölge oyunu, Koza Han ipek ticareti, hamam tellak geleneği ve türbe ziyaret kültürü Bursa\'nın UNESCO listesindeki ya da listede olması gereken kültürel mirasını oluşturur.'
    },
    {
      text: 'Edirne\'de yok olmakta olan hangi geleneksel uygulamalar tehlike altındadır?',
      category: 'music', type: 'multi',
      options: [
        'Kırkpınar ağalık geleneği — güreş organizatörlüğünün kuşaktan kuşağa geçmesi',
        'Edirne kakma sanatı — ahşap veya madene tel kakma',
        'Trabzon bakır kalemkârlığı (Karadeniz\'e aittir)',
        'Edirne geleneksel Bulgar ve Rum azınlık müziği mirasının korunması',
      ],
      correct: [0, 1, 3],
      wikiTitle: 'Edirne',
      imageCaption: 'Edirne\'de yok olmakta olan geleneksel kültür',
      explanation: 'Kırkpınar ağalık geleneği, Edirne kakma sanatı ve çok kültürlü müzik mirası Edirne\'nin tehlike altındaki kültürel varlıklarıdır. Trabzon bakır kalemkârlığı Karadeniz\'e aittir.'
    },
  ],

  'dogu-anadolu': [
    {
      text: 'Doğu Anadolu\'da yok olma tehlikesindeki hangi geleneksel el sanatları doğrudur?',
      category: 'craft', type: 'multi',
      options: [
        'Erzurum Oltu taşı oyma sanatı',
        'Bayburt ehram dokumacılığı — yünden elle dokunan örtü',
        'Çeşme sakız hasadı (Ege\'ye aittir)',
        'Van kilim ve halı dokumacılığı — coğrafi işaretli el dokuması',
      ],
      correct: [0, 1, 3],
      wikiTitle: 'Oltu stone',
      imageCaption: 'Doğu Anadolu\'da yok olma tehlikesindeki el sanatları',
      explanation: 'Erzurum Oltu taşı oymacılığı, Bayburt ehram dokuması ve Van kilim-halı dokumacılığı Doğu Anadolu\'da nesli tükenmekte olan zanaatlardır. Sakız hasadı Ege\'ye aittir.'
    },
    {
      text: 'Doğu Anadolu\'nun unutulan geleneksel el sanatını doğru özelliğiyle eşleştir.',
      category: 'craft', type: 'drag',
      options: [
        'Erzurum Oltu taşı oymacılığı | Yalnızca Oltu ilçesinde çıkan lignit taşın el testeresiyle şekillendirilmesi',
        'Bayburt ehram | Elle dokunan yünlü büyük örtü — soğuktan korunma',
        'Van kilimi | Coğrafi işaretli, Van Gölü havzasına özgü geometrik motifli',
        'Erzincan çiçek bıçağı (cicim) | İnce tığ işiyle yapılan geleneksel bıçak sapı süslemesi',
      ],
      correct: null,
      wikiTitle: 'Oltu stone',
      imageCaption: 'Doğu Anadolu el sanatları teknik eşleştirmesi',
      explanation: 'Her zanaat farklı teknik ve hammadde gerektirir: Oltu taşı lignit oyma, ehram yün dokuma, Van kilimi geometrik motifli dokuma ve Erzincan cicim işi tığ ile yapılır.'
    },
    {
      text: 'Doğu Anadolu\'da yok olmakta olan hangi müzik ve ritüel gelenekleri tehlike altındadır?',
      category: 'music', type: 'multi',
      options: [
        'Dengbêj geleneği — Kürtçe epik sözlü anlatı ve türkü söyleme',
        'Erzurum Barı — el ele sıra dansı ve öğrenme geleneği',
        'Konya Sema töreni (İç Anadolu\'ya aittir)',
        'Van\'da Nevruz ateş töreni ve geleneksel kıyafetler',
      ],
      correct: [0, 1, 3],
      wikiTitle: 'Dengbêj',
      imageCaption: 'Doğu Anadolu\'da yok olmakta olan müzik gelenekleri',
      explanation: 'Dengbêj sözlü anlatı geleneği, Erzurum Barı dansı ve Van Nevruz töreni Doğu Anadolu\'nun tehlike altındaki kültürel pratikleridir. Sema töreni İç Anadolu\'ya aittir.'
    },
    {
      text: 'Doğu Anadolu\'nun unutulan geleneksel ritüelini doğru anlamıyla eşleştir.',
      category: 'music', type: 'drag',
      options: [
        'Dengbêj | Kürtçe uzun soluklu epik şarkı — ağıt, destan, haber taşıma',
        'Erzurum Barı | Erkeklerin sıra oluşturarak el ele oynadığı halk dansı',
        'Nevruz | Mart\'ın 21\'inde yeni yılı karşılayan ateş ve su ritüeli',
        'Van Gölü kaıkçı duası | Balıkçıların tekneyi suya indirmeden önce yaptığı kutsal ritüel',
      ],
      correct: null,
      wikiTitle: 'Dengbêj',
      imageCaption: 'Doğu Anadolu ritüel eşleştirmesi',
      explanation: 'Dengbêj epik anlatı ve haber taşıma, Erzurum Barı sıra dansı, Nevruz yeni yıl ve Van\'da denize iniş duası birbirinden farklı geleneksel pratiklerdir.'
    },
    {
      text: 'Doğu Anadolu\'da yok olmakta olan hangi geleneksel mimari ve yaşam unsurları tehlike altındadır?',
      category: 'craft', type: 'multi',
      options: [
        'Van Gölü havzasında taş malzemeli geleneksel ev yapım tekniği',
        'Erzurum taş ev — bazalt taşla inşa edilen soğuğa dayanıklı konut',
        'Bursa Yeşil Türbe motifleri (Marmara\'ya aittir)',
        'Doğubeyazıt\'ta İshak Paşa Sarayı\'nın yanındaki tarihi köy dokusu',
      ],
      correct: [0, 1, 3],
      wikiTitle: 'Erzurum',
      imageCaption: 'Doğu Anadolu\'da yok olmakta olan geleneksel mimari',
      explanation: 'Van ve Erzurum\'un taş ev yapım teknikleri ve Doğubeyazıt\'ın tarihi köy dokusu Doğu Anadolu\'nun koruma gerektiren mimari mirasıdır. Yeşil Türbe Bursa\'ya aittir.'
    },
  ],

  'guneydogu': [
    {
      text: 'Güneydoğu Anadolu\'da yok olma tehlikesindeki hangi geleneksel el sanatları doğrudur?',
      category: 'craft', type: 'multi',
      options: [
        'Mardin telkari — ince gümüş telden dantel gibi örme',
        'Gaziantep yemeniciliği — el dikişi deri çarık yapımı',
        'Bergama boynuz tarakçılığı (Ege\'ye aittir)',
        'Diyarbakır bakırcılığı — çekiçle bakır kap şekillendirme',
      ],
      correct: [0, 1, 3],
      wikiTitle: 'Filigree',
      imageCaption: 'Güneydoğu Anadolu\'da yok olma tehlikesindeki el sanatları',
      explanation: 'Mardin telkari, Antep yemeniciliği ve Diyarbakır bakırcılığı Güneydoğu\'nun tehlike altındaki zanaatlarıdır. Bergama boynuz tarakçılığı Ege\'ye aittir.'
    },
    {
      text: 'Güneydoğu Anadolu\'da unutulan geleneksel zanaatı doğru özelliğiyle eşleştir.',
      category: 'craft', type: 'drag',
      options: [
        'Mardin telkari | 0.3-0.5 mm gümüş tel elle kıvrılıp lehimlenerek örülür',
        'Gaziantep yemeniciliği | Geleneksel deri çarığın elle biçilip dikilmesi',
        'Diyarbakır bakırcılığı | Bakır levhanın çekiçle dövülerek kap haline getirilmesi',
        'Şanlıurfa\'da geleneksel ney yapımı | Kamışın üflenerek ve delinerek çalgıya dönüştürülmesi',
      ],
      correct: null,
      wikiTitle: 'Filigree',
      imageCaption: 'Güneydoğu Anadolu unutulan zanaatları — teknik eşleştirmesi',
      explanation: 'Her zanaat kendine özgü teknik gerektirir: Telkari ince tel örme, yemenicilik deri dikme, bakırcılık çekiçle dövme ve ney yapımı kamış delme ve seslendirme üzerine kuruludur.'
    },
    {
      text: 'Güneydoğu\'da yok olmakta olan hangi sözlü gelenek ve müzik unsurları tehlike altındadır?',
      category: 'music', type: 'multi',
      options: [
        'Sıra Gecesi geleneği — haftalık sözlü paylaşım ve müzik buluşması',
        'Şanlıurfa\'nın mey ve ud eşliğindeki uzun hava geleneği',
        'Bursa Karagöz oyunu (Marmara\'ya aittir)',
        'Güneydoğu\'ya özgü Kürtçe ve Arapça türkü geleneği',
      ],
      correct: [0, 1, 3],
      wikiTitle: 'Sıra Gecesi',
      imageCaption: 'Güneydoğu Anadolu\'da yok olmakta olan sözlü gelenek',
      explanation: 'Sıra Gecesi, Şanlıurfa uzun hava geleneği ve bölgenin çok dilli türkü kültürü Güneydoğu\'nun tehlike altındaki sözlü mirası arasındadır. Karagöz Bursa/Marmara kökenlidir.'
    },
    {
      text: 'Güneydoğu Anadolu\'nun unutulan geleneğini doğru anlamıyla eşleştir.',
      category: 'music', type: 'drag',
      options: [
        'Sıra Gecesi | Şehirde sıra ile birbirinin evine gidilen haftalık müzik-sohbet buluşması',
        'Mey müziği | Kamıştan yapılan çift dilli nefesli çalgı eşliğinde uzun hava',
        'Harman geleneği | Buğday hasatında birlikte döğen çevirme ve türkü söyleme',
        'Mardin taş oyma ustası | Sarı kireç taşını elle oyan bezeme ustası',
      ],
      correct: null,
      wikiTitle: 'Sıra Gecesi',
      imageCaption: 'Güneydoğu Anadolu unutulan gelenek eşleştirmesi',
      explanation: 'Sıra Gecesi kentsel sohbet-müzik, mey uzun hava müziği, harman hasat geleneği ve Mardin taş oymacılığı Güneydoğu\'nun farklı boyutlardaki kültürel mirasını oluşturur.'
    },
    {
      text: 'Güneydoğu\'da yok olmakta olan hangi mimari ve kentsel yaşam unsurları tehlike altındadır?',
      category: 'craft', type: 'multi',
      options: [
        'Mardin\'in sarı kireç taşından inşa edilmiş basamaklı taş ev geleneği',
        'Diyarbakır surlarının siyah bazalt taş yapım tekniği ve ustası',
        'Bursa Yeşil Cami çini süsleme tekniği (Marmara\'ya aittir)',
        'Harran\'ın konik kubbeli kerpiç ev (petek ev) yapım geleneği',
      ],
      correct: [0, 1, 3],
      wikiTitle: 'Mardin',
      imageCaption: 'Güneydoğu Anadolu\'da yok olmakta olan geleneksel mimari',
      explanation: 'Mardin\'in sarı taş evleri, Diyarbakır bazalt sur yapım tekniği ve Harran\'ın konik kubbeli petek evleri Güneydoğu\'nun koruma gerektiren mimari mirasıdır. Yeşil Cami çini tekniği Bursa\'ya aittir.'
    },
  ],

};

// FORGOTTEN_QUESTIONS varsa REGIONS'a ekle
(function addForgottenQuestions(){
  if(typeof REGIONS === 'undefined') return;
  REGIONS.forEach(r=>{
    if(FORGOTTEN_QUESTIONS[r.id]){
      r.questions = r.questions.concat(FORGOTTEN_QUESTIONS[r.id]);
    }
  });
})();

if(typeof window !== 'undefined') window.FORGOTTEN_QUESTIONS = FORGOTTEN_QUESTIONS;
