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

// ── UNUTULAN KÜLTÜREL MİRAS SORULARI (Docx Özelliği 2) ───────
// Her bölge için 3 yeni soru — "category: 'heritage'" — type: single
const HERITAGE_QUESTIONS = {
  'karadeniz': [
    {
      text: 'Trabzon\'un hangi geleneksel el sanatı, bakır levhaların kalemle işlenmesiyle üretilir ve günümüzde yok olma tehlikesiyle karşı karşıyadır?',
      category: 'craft', type: 'single',
      options: ['Seramik boyama', 'Bakır kalemkârlığı', 'Çini sırlama', 'Cam mozaik'],
      correct: 1,
      wikiTitle: 'Trabzon',
      imageCaption: 'Trabzon geleneksel bakır işçiliği — unutulan zanaat',
      explanation: 'Trabzon bakır kalemkârlığı, usta ellerin bakır levhalar üzerinde yaptığı gravür sanatıdır. Usta sayısının dramatik biçimde azalmasıyla bu zanaat yok olma tehlikesiyle karşı karşıyadır.'
    },
    {
      text: 'Sinop\'ta tarihsel olarak yapılan "lenger" adlı büyük çanak, hangi geleneksel amaçla kullanılırdı?',
      category: 'craft', type: 'single',
      options: ['Şarap depolamak', 'Toplu aş pişirip dağıtmak (imece yemeği)', 'Balık tuzlamak', 'Yağ üretmek'],
      correct: 1,
      wikiTitle: 'Sinop',
      imageCaption: 'Sinop geleneksel lenger — imece kültürünün simgesi',
      explanation: 'Lenger, Karadeniz\'in imece kültüründe toplu yemek pişirip komşulara dağıtmak için kullanılan büyük bakır kaplardır. Bu gelenek ve kapların üretimi büyük ölçüde kaybolmuştur.'
    },
    {
      text: 'Kastamonu\'nun Tosya ilçesinde üretilen "yazma"ların diğer bölge yazmalarından farkı nedir?',
      category: 'craft', type: 'single',
      options: ['Yalnızca ipek kullanılır', 'Kalıplar elle oyulur ve her baskı benzersizdir — bu yüzden endüstriyel üretimle yok olmaktadır', 'Makine baskısı kullanılır', 'Sadece kırmızı renk kullanılır'],
      correct: 1,
      wikiTitle: 'Kastamonu',
      imageCaption: 'Tosya yazması — el oyma kalıp geleneği',
      explanation: 'Tosya yazmacılığında kalıplar tek tek el oymasıyla yapılır; bu nedenle her parça benzersizdir. Makine üretimiyle rekabet edemeyen bu zanaat, usta sayısının hızla düşmesiyle yok olma tehlikesiyle karşı karşıyadır.'
    }
  ],
  'akdeniz': [
    {
      text: 'Antalya\'nın Elmalı ilçesine özgü "kilim kelebekleri" geleneği neden önem taşır?',
      category: 'craft', type: 'single',
      options: ['Hayvanları korumak için kullanılır', 'Elmalı kilimlerindeki kelebek motifleri 3000 yıllık Ana tanrıça sembolizmini taşır ve bu nedenle yaşayan bir tarih belgesidir', 'Turizm için üretilir', 'Yas törenlerinde kullanılır'],
      correct: 1,
      wikiTitle: 'Antalya',
      imageCaption: 'Elmalı kilimi kelebek motifi — Anadolu Ana tanrıça mirası',
      explanation: 'Elmalı kilimlerindeki kelebek desenleri, Ana tanrıça kültünün Anadolu\'daki 3000 yıllık izini taşır. Bu motifler yaşayan bir kültürel bellek olup ustalar azaldıkça bu sembolik dil de yok olma tehlikesiyle karşı karşıyadır.'
    },
    {
      text: 'Mersin\'e özgü "narlıdere ipliği" adı verilen geleneğe göre bu iplik ne için kullanılır?',
      category: 'craft', type: 'single',
      options: ['Balık ağı yapmak', 'Nazardan korunmak ve mutluluğu evde tutmak için kapı önlerine asılır', 'Çadır kurmak', 'Halatlar dokumak'],
      correct: 1,
      wikiTitle: 'Mersin',
      imageCaption: 'Mersin geleneksel nazar ve koruyucu iplik geleneği',
      explanation: 'Narlıdere ipliği, Mersin kırsalında kapı eşiklerine asılan ve nazardan koruduğuna inanılan renkli yün örgüdür. Modern yaşam tarzıyla bu koruyucu gelenek büyük ölçüde kaybolmuştur.'
    },
    {
      text: 'Alanya\'nın geleneksel tekne yapımcıları "kalafatçılar", hangi yöntemle gemi kaçaklarını önlerdi?',
      category: 'craft', type: 'single',
      options: ['Modern plastik dolgu maddesiyle', 'Pamuk, katran ve zeytinyağını elle sıkıştırarak — bu yüzyıllık teknik artık neredeyse hiç uygulanmıyor', 'Silikon kullanarak', 'Çelik perçinlerle'],
      correct: 1,
      wikiTitle: 'Alanya',
      imageCaption: 'Kalafat sanatı — geleneksel ahşap tekne su geçirmezliği',
      explanation: 'Kalafatçılık, geleneksel ahşap tekne yapımında kullanılan su geçirmezliği sanatıdır. Pamuk, katran ve zeytinyağı karışımının elle tahta aralıklarına sıkıştırılmasından oluşur. Fiberglasa geçişle bu zanaat neredeyse tamamen yok olmuştur.'
    }
  ],
  'ic-anadolu': [
    {
      text: 'Konya\'nın Karapınar ilçesinde uygulanan "alacaören" yağmur duası geleneği neden kültürel miras olarak değerlendirilir?',
      category: 'music', type: 'single',
      options: ['İslam öncesi ve sonrası öğeleri bir arada taşıyan, doğa-toplum ilişkisini sembolize eden ritüel olduğu için', 'Sadece eğlence amaçlıdır', 'Çiftçilere tarım bilgisi öğrettiği için', 'Roma döneminden kaldığı kanıtlandı'],
      correct: 0,
      wikiTitle: 'Konya',
      imageCaption: 'Anadolu geleneksel yağmur duası — tarım toplumu ritüeli',
      explanation: 'Alacaören yağmur duası, İslam öncesi bereket ritüellerinin İslami duayla harmanlanan biçimidir. Kadınlar, çocuklar ve yaşlıların katıldığı bu toplu ritüel, kuşaktan kuşağa aktarılan bir sosyal dayanışma pratiğidir.'
    },
    {
      text: 'Nevşehir\'in Derinkuyu yeraltı şehirlerinde, tarihte hayvan ahırları neden en alt katta yer alırdı?',
      category: 'unesco', type: 'single',
      options: ['Hayvanları gizlemek için', 'Hayvan ısısının yukarı katları doğal ısıtması ve havalandırmayı kolaylaştırması için', 'Sessizliği sağlamak için', 'Hava girişi buradan olduğu için'],
      correct: 1,
      wikiTitle: 'Derinkuyu underground city',
      imageCaption: 'Derinkuyu yeraltı şehri — mühendislik harikası, Kapadokya',
      explanation: 'Derinkuyu\'nun tasarımında hayvanların en alt kata yerleştirilmesi tesadüf değildir; hayvan vücut ısısı konveksiyonla üst katlara taşınırdı. Bu, antik çağlarda pasif ısıtma sisteminin en erken örneklerinden biridir.'
    },
    {
      text: 'Kırşehir\'de Ahi Evran Dergâhı çevresinde gelişen "Ahilik" teşkilatı, modern hangi kavramın ilk örneklerinden biri sayılır?',
      category: 'unesco', type: 'single',
      options: ['Modern futbol kulübü', 'Ticaret birliği, mesleki etik ve sosyal dayanışma örgütü — modern esnaf odaları ve ticaret odalarının atası', 'Osmanlı askeri düzeni', 'İlk posta teşkilatı'],
      correct: 1,
      wikiTitle: 'Akhism',
      imageCaption: 'Ahilik Teşkilatı — Kırşehir, 13. yüzyıl Anadolu zanaat düzeni',
      explanation: 'Ahilik, 13. yüzyılda Kırşehir merkezli olarak kurulan esnaf örgütüdür. Mesleki etik kuralları, kalite standartları, sosyal yardımlaşma ve çıraklık eğitimini kapsayan bu düzen, modern ticaret ve esnaf odalarının tarihsel atasıdır.'
    }
  ],
  'ege': [
    {
      text: 'İzmir\'in Çeşme ilçesine özgü "sakız dövmesi" geleneği neden önemlidir?',
      category: 'craft', type: 'single',
      options: ['Bir tatlı üretimi yöntemidir', 'Sakız ağacı reçinesinin elle dövülerek toplanması ve işlenmesi — 2500 yıllık bir kültürel süreklilik', 'Bir spor dalıdır', 'Boyama tekniğidir'],
      correct: 1,
      wikiTitle: 'Mastic (plant resin)',
      imageCaption: 'Sakız dövmesi — Çeşme ve Sakız adası 2500 yıllık reçine geleneği',
      explanation: 'Çeşme ve komşu Sakız adasındaki mastika (sakız) hasadı, özel dövme tekniğiyle ağaç kabuğunu yaralamanın ardından reçinenin toplanmasını kapsar. Bu 2500 yıllık gelenek, UNESCO Somut Olmayan Miras listesindedir.'
    },
    {
      text: 'Muğla\'nın Milas ilçesine özgü "Milas halısı" neden diğer Türk halılarından farklıdır?',
      category: 'craft', type: 'single',
      options: ['Yalnızca sentetik iplik kullanılır', 'Sarımsı-pembemsi tonlar ve özel "koç boynuzu" motifi ile bitkisel boyaların kullanımı bakımından benzersizdir', 'Makineyle üretilir', 'Sadece siyah-beyaz dokunur'],
      correct: 1,
      wikiTitle: 'Milas',
      imageCaption: 'Milas halısı — özgün koç boynuzu motifi ve bitkisel renkler',
      explanation: 'Milas halısı, yumuşak sarımsı-pembe tonları ve koç boynuzu sembolizmiyle tanınan özgün Ege halısıdır. Bitkisel boyaların kullanımı ve özgün motif repertuarı onu diğer Türk halılarından ayıran başlıca özelliklerdir.'
    },
    {
      text: 'Bergama\'da Osmanlı döneminden bu yana süregelen "tarakçılık" zanaatı neden kaybolmaktadır?',
      category: 'craft', type: 'single',
      options: ['Plastik tarakların bu el yapımı boynuz tarakların pazarını yok etmesi', 'Çok pahalı olduğundan', 'Yasalarla yasaklandığından', 'Hammadde kalmadığından'],
      correct: 0,
      wikiTitle: 'Bergama',
      imageCaption: 'Bergama boynuz tarakçılığı — geleneksel zanaat kayıp tehlikesinde',
      explanation: 'Bergama\'nın geleneksel boynuz tarakçılığı, çiftlik hayvanı boynuzlarının işlenerek tarak yapılması sanatıdır. Ucuz plastik tarakların piyasayı ele geçirmesiyle usta sayısı dramatik biçimde azalmıştır.'
    }
  ],
  'marmara': [
    {
      text: 'Edirne\'de 650 yıldır süregelen "yağlı güreş" geleneğinin kültürel önemi nedir?',
      category: 'music', type: 'single',
      options: ['Yalnızca bir spor etkinliğidir', 'UNESCO tarafından tescillenen, spor, müzik ve toplumsal ritüelin iç içe geçtiği yaşayan kültürel pratik', 'Son 50 yılda başlatılmış bir festivaldir', 'Bir askeri eğitim biçimidir'],
      correct: 1,
      wikiTitle: 'Oil wrestling',
      imageCaption: 'Kırkpınar Yağlı Güreşi — Edirne, UNESCO 2010',
      explanation: 'Kırkpınar Yağlı Güreş Festivali, 1362\'den beri kesintisiz düzenlenen dünyanın en eski spor etkinliklerinden biridir. Davul-zurna müziği, ağa geleneği ve güreş ritüeli ile 2010\'da UNESCO Somut Olmayan Kültürel Miras listesine alındı.'
    },
    {
      text: 'İstanbul\'un hangi geleneksel el sanatı, kâğıt yüzeyine fırlatılan boyaların yayılıp şekillenmesine dayalıdır?',
      category: 'craft', type: 'single',
      options: ['Hat sanatı', 'Ebru (kâğıt mermeri) — 16. yüzyıldan beri süregelen Osmanlı-Türk sanatı', 'Tezhip (altın yaldız)', 'Minyatür'],
      correct: 1,
      wikiTitle: 'Ebru (marbling)',
      imageCaption: 'Ebru sanatı — su yüzeyinde boyaların dans ettiği geleneksel kâğıt sanatı (UNESCO 2014)',
      explanation: 'Ebru, kitre kıvamındaki su yüzeyine özel boyaların fırlatılıp çeşitli aletlerle şekillendirilmesinin ardından kâğıda aktarılmasıyla oluşturulan sanattır. 16. yüzyıldan beri sürmekte olup 2014\'te UNESCO listesine alınmıştır.'
    },
    {
      text: 'Bursa\'nın tarihi bez hamamlarında "tellak" geleneği neden kültürel miras kapsamında değerlendirilmektedir?',
      category: 'craft', type: 'single',
      options: ['Tellaklar modern masaj teknisyenleri olduğu için', 'Yüzyıllık hamam kültürünü yaşatması, sosyal eşitlik ve dayanışma ritüelini taşıması ve nesli tükenmekte olan bir zanaat olması nedeniyle', 'Devlet tarafından desteklendiği için', 'Yalnızca turistler için yapıldığı için'],
      correct: 1,
      wikiTitle: 'Turkish bath',
      imageCaption: 'Türk hamamı tellak geleneği — sosyal ritüel ve zanaat (UNESCO 2016)',
      explanation: 'Tellak, geleneksel Türk hamamlarında köse ve kese hizmeti veren, bu zanaatı ustadan öğrenen kişidir. Hamam kültürü 2016\'da UNESCO listesine alındı; ancak geleneksel tellak eğitimi alan usta sayısı giderek azalmaktadır.'
    }
  ],
  'dogu-anadolu': [
    {
      text: 'Van Gölü havzasına özgü "Urartu kaya oyma sanatı" hangi teknikle uygulanmıştır?',
      category: 'unesco', type: 'single',
      options: ['Kil üzerine nakış', 'Bazalt ve andezit gibi sert kayaların keskin bronz aletlerle oyulup kazınması', 'Kireç üzerine fresk boyama', 'Seramik üzerine sırlama'],
      correct: 1,
      wikiTitle: 'Urartu',
      imageCaption: 'Urartu kaya oyma sanatı — Van çevresi, MÖ 9.-6. yüzyıl',
      explanation: 'Urartu uygarlığı (MÖ 9.-6. yüzyıl), doğu Anadolu\'nun sert kayaları üzerine olağanüstü kazıma ve oyma işleri bırakmıştır. Van Kalesi\'ndeki Urartu yazıtları ve kaya anıtları bu sanatın en çarpıcı örnekleridir.'
    },
    {
      text: 'Malatya\'da yüzyıllardır süregelen "kayısı kurutma" geleneğinin kültürel önemi nedir?',
      category: 'cuisine', type: 'single',
      options: ['Sadece ekonomik değer taşır', 'Güneş, rüzgar ve el işçiliğini harmanlayan bilgi sistemi; toprağa, iklime ve kültüre özgü bir gastronomik pratik', 'Fabrika üretiminin daha sağlıklı bir alternatifidir', 'UNESCO Mirası olarak tescillenmiştir'],
      correct: 1,
      wikiTitle: 'Malatya',
      imageCaption: 'Malatya kayısı kurutma geleneği — güneş, el ve bilginin birleşimi',
      explanation: 'Malatya kayısı kurutması, güneş yoğunluğunu, rüzgar yönünü ve meyvenin olgunluğunu bir arada okuyan geleneksel bilgi sistemine dayanır. Bu deneyim kuşaktan kuşağa sözlü yollarla aktarılmakta ve korunmaya muhtaç bir gastronomik pratik oluşturmaktadır.'
    },
    {
      text: 'Erzurum\'a özgü "oltu taşı oyması"nda kullanılan siyah taşın bilimsel adı nedir ve nereden çıkarılır?',
      category: 'craft', type: 'single',
      options: ['Obsidyen — Nemrut Yanardağı\'ndan', 'Lignit kömürü türevi bir taş olan "jet" — Erzurum Oltu ilçesinin belirli yataklarından', 'Bazalt — Doğu Anadolu platosundan', 'Mermer — Van dağlarından'],
      correct: 1,
      wikiTitle: 'Oltu stone',
      imageCaption: 'Oltu taşı — Erzurum\'un siyah zanaatı',
      explanation: 'Oltu taşı, lignit kökenli organik bir taş türü olan "jet"tir. Yalnızca Erzurum\'un Oltu ilçesine özgü yataklarda bulunur. El testeresi ve cilalama aşamalarını kapsayan geleneksel oyma, kuşaktan kuşağa aktarılan nadir bir zanaat olarak yaşatılmaktadır.'
    }
  ],
  'guneydogu': [
    {
      text: 'Gaziantep\'te UNESCO Gastronomi Şehri unvanını kazandıran en önemli geleneksel pratik nedir?',
      category: 'cuisine', type: 'single',
      options: ['Fabrika üretimiyle standardize edilmiş baklava', 'Baklavadan büyükanneden torununa aktarılan katmanlı yufka açma ve fıstık hazırlama ustalığı', 'Hızlı servis mutfağının gelişimi', 'Uluslararası gıda ihracatı'],
      correct: 1,
      wikiTitle: 'Gaziantep',
      imageCaption: 'Antep baklavası ustası — el yapımı yufka ve el seçimi fıstık (UNESCO 2015)',
      explanation: 'Gaziantep, 2015\'te UNESCO Yaratıcı Şehirler Ağı Gastronomi kategorisine alındı. Bunun temelinde elle açılan ince yufka katmanları, Antep fıstığının özenle seçilmesi ve sac üzerinde ustanın sezgisel pişirme becerisi yer alır — hepsi sözlü ve pratik aktarıma dayalı gizli bilgi içerir.'
    },
    {
      text: 'Mardin\'deki "telkari" (gümüş tel işçiliği) hangi teknikle uygulanır?',
      category: 'craft', type: 'single',
      options: ['Eritilmiş gümüş kalıba dökülür', 'İnce gümüş teller elle kıvrılıp lehimlenerek dantel gibi örülür', 'Gümüş levhalar preslenerek şekil verilir', 'Seramik kalıba gümüş kaplanır'],
      correct: 1,
      wikiTitle: 'Filigree',
      imageCaption: 'Mardin telkari — gümüş tel örme sanatı',
      explanation: 'Telkari, 0.3-0.5 mm kalınlığındaki saf gümüş tellerin özel aletlerle kıvrılıp bükülerek dantel görünümlü süslemelere dönüştürüldüğü hassas bir tekniktir. Mardin\'in bu özgün zanaatı, usta sayısının azalmasıyla ciddi tehdit altındadır.'
    },
    {
      text: 'Şanlıurfa\'da Hz. İbrahim\'in doğduğu yere atfedilen hangi mağara, her yıl milyonlarca ziyaretçiyi çeken yaşayan bir kültürel miras alanıdır?',
      category: 'unesco', type: 'single',
      options: ['Göbekli Tepe tünelleri', 'Balıklıgöl\'ün yanındaki Hz. İbrahim Mağarası — Peygamber doğum yeri olarak kutsal kabul edilen alan', 'Harran Üniversitesi kalıntıları', 'Nemrut\'un yan mağaraları'],
      correct: 1,
      wikiTitle: 'Sanliurfa',
      imageCaption: 'Hz. İbrahim Mağarası — Şanlıurfa, yaşayan kültürel miras',
      explanation: 'Şanlıurfa\'daki Hz. İbrahim Mağarası, İslam inancına göre Hz. İbrahim\'in doğduğu ve büyüdüğü yere yakın kutsal bir mekândır. Balıklıgöl\'ün hemen yanında yer alan bu alan, hem dini hem kültürel hem de tarihi katmanlarıyla yaşayan bir miras alanıdır.'
    }
  ]
};

// HERITAGE_QUESTIONS varsa REGIONS'a ekle
(function addHeritageQuestions(){
  if(typeof REGIONS === 'undefined') return;
  REGIONS.forEach(r=>{
    if(HERITAGE_QUESTIONS[r.id]){
      r.questions = r.questions.concat(HERITAGE_QUESTIONS[r.id]);
    }
  });
})();

if(typeof window !== 'undefined') window.HERITAGE_QUESTIONS = HERITAGE_QUESTIONS;
