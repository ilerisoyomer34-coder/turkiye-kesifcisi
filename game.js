/* ============================================================
   TÜRKİYE'Yİ KEŞFET — OYUN MOTORU v3.0
   TÜBİTAK 4006 Bilim Fuarı Projesi
   v3.0: Kategori × Bölge × Soru tipi ilerleme + SVG rozetler
   ============================================================ */
'use strict';

// ── KÜLTÜREL MİRAS KATEGORİLERİ ──────────────────────────────
const CATEGORIES = {
  unesco:  { label: 'UNESCO & Tarihi Yapılar',  icon: '🏛️', color: '#f9c74f' },
  cuisine: { label: 'Geleneksel Mutfak',         icon: '🍲', color: '#e76f51' },
  craft:   { label: 'El Sanatları & Zanaat',     icon: '🧵', color: '#a855f7' },
  music:   { label: 'Müzik, Dans & Folklor',     icon: '🎶', color: '#43e97b' },
  ai:      { label: 'Yapay Zeka & Teknoloji',    icon: '🤖', color: '#4facfe' },
};
const CATEGORY_KEYS = ['unesco','cuisine','craft','music','ai'];

// ── SORU TİPLERİ ─────────────────────────────────────────────
const QUESTION_TYPES = {
  single:   { label: 'Tek Cevap',     icon: '⚪' },
  multi:    { label: 'Çoklu Cevap',   icon: '☑️' },
  drag:     { label: 'Eşleştirme',    icon: '🔗' },
  scenario: { label: 'Senaryo',       icon: '📖' },
};
const TYPE_KEYS = ['single','multi','drag','scenario'];

// ── WİKİPEDİA GÖRSEL YÜKLEYICI ───────────────────────────────
// TR Wikipedia'yı önce dene (Türkiye konuları için daha iyi kapsama), sonra EN
const _wikiCache = {};
async function fetchWikiThumb(title) {
  if (_wikiCache[title] !== undefined) return _wikiCache[title];
  for (const lang of ['tr', 'en']) {
    try {
      const r = await fetch(
        `https://${lang}.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`,
        { headers: { 'Accept': 'application/json' } }
      );
      if (!r.ok) continue;
      const d = await r.json();
      const src = d.thumbnail?.source || d.originalimage?.source;
      if (src) { _wikiCache[title] = src; return src; }
    } catch {}
  }
  _wikiCache[title] = null;
  return null;
}

// ── BÖLGE VERİLERİ ───────────────────────────────────────────
const REGIONS = [
  {
    id: 'karadeniz', number: 1,
    name: 'Karadeniz Bölgesi',
    icon: '🏛️', color: '#72B841',
    badge: 'Osmanlı Mirası Koruyucusu',
    infoCards: [
      { label: 'UNESCO (1994)', value: 'Safranbolu' },
      { label: 'Bizans Eseri',  value: 'Sümela Manastırı' },
      { label: 'Hitit Mirası',  value: 'Hattuşaş (Çorum)' },
      { label: 'Geleneksel',   value: 'Osmanlı cumbalı evleri' },
    ],
    story: 'Profesör Tarih şifreli mesaj gönderdi: "Kaşif, Karadeniz ormanlarının derinliklerine hoş geldin! Kaya yüzüne inşa edilmiş Sümela Manastırı\'nı buldun mu? Safranbolu\'nun Osmanlı sokakları seni çağırıyor. Bu bölge binlerce yıllık kültürel mirasın bekçisi!"',
    mission: 'Safranbolu\'yu, Sümela Manastırı\'nı ve Osmanlı mimarisini keşfederek Osmanlı Mirası Koruyucusu unvanını kazan!',
    funFact: 'Safranbolu, 17. yüzyıldan kalma 2000\'den fazla tescilli Osmanlı evi ile UNESCO Dünya Mirası Listesi\'ndedir (1994). Ahşap ve taşın birlikte kullanıldığı "cumbalı evler" bu şehrin simgesidir!',
    questions: [
      {
        text: 'Safranbolu UNESCO Dünya Mirası listesine neden alınmıştır?',
        options: ['Geç Osmanlı döneminden kalma özgün kentsel mimarisi ve 2000\'den fazla tescilli konağı nedeniyle', 'Doğal plajları ve ormanları nedeniyle', 'Büyük çelik fabrikaları nedeniyle', 'Yüksek dağları ve kayak merkezleri nedeniyle'],
        correct: 0,
        wikiTitle: 'Safranbolu',
        imageCaption: 'Safranbolu — Osmanlı konakları (UNESCO, 1994)',
        explanation: 'Safranbolu (Karabük), 1994\'te UNESCO listesine girdi. Geç Osmanlı döneminden kalma 2000\'den fazla tescilli taş ve ahşap konağıyla özgün kentsel dokusunu koruyan ender şehirlerden biridir.'
      },
      {
        text: 'Sümela Manastırı nerede inşa edilmiştir ve hangi dönemden kalmadır?',
        options: ['İstanbul surları içinde — Roma dönemi', 'Bursa dağlarında — Osmanlı dönemi', 'Trabzon\'da dik kaya yüzeyine — Bizans dönemi (MS 386)', 'Ankara yakınlarında — Selçuklu dönemi'],
        correct: 2,
        wikiTitle: 'Sumela Monastery',
        imageCaption: 'Sümela Manastırı — Trabzon (MS 386, Bizans)',
        explanation: 'Sümela Manastırı, Trabzon\'un Maçka ilçesinde dik bir kaya yüzeyine inşa edilmiştir. MS 386\'da Bizans döneminde kurulan manastır, Karadeniz\'in en çarpıcı kültürel miras yapısıdır.'
      },
      {
        text: 'Osmanlı konaklarındaki "cumba" nedir?',
        options: ['Avluda bulunan mermer çeşme', 'Çatı katındaki güvercin yuvası', 'Bodrumdaki serin kiler odası', 'Üst katlarda caddeye doğru taşan çıkıntılı oda bölümü'],
        correct: 3,
        wikiTitle: 'Safranbolu',
        imageCaption: 'Safranbolu cumbalı evler — geleneksel Osmanlı mimarisi',
        explanation: 'Cumba, Osmanlı konaklarında üst katlarda caddeye doğru uzanan çıkıntılı bölümdür. Safranbolu\'daki cumbalı evler bölgenin simgesi olup UNESCO mirasının temel özelliğidir.'
      },
      {
        text: 'Hitit İmparatorluğu\'nun başkenti Hattuşaş hangi ilde bulunmaktadır?',
        options: ['Trabzon', 'Çorum (Boğazkale ilçesi)', 'Samsun', 'Sinop'],
        correct: 1,
        wikiTitle: 'Hattusa',
        imageCaption: 'Hattuşaş Aslan Kapısı — Hitit Başkenti (UNESCO, 1986)',
        explanation: 'Hattuşaş, MÖ 17.-12. yüzyıllarda Hitit İmparatorluğu\'nun başkentiydi. Çorum\'un Boğazkale ilçesinde bulunur. Aslan Kapı, Sfenks Kapı ve devasa tapınaklarıyla 1986\'da UNESCO listesine alınmıştır.'
      },
      {
        text: 'Kastamonu yazmacılığı hangi geleneksel el sanatıdır?',
        options: ['Bakır üzerine kalem oyma sanatı', 'Camın boyanarak şekil verilmesi sanatı', 'Ahşap kalıpla kumaşa baskı yapılarak desen oluşturma sanatı', 'Çini karo üzerine resim yapma sanatı'],
        correct: 2,
        wikiTitle: 'Kastamonu',
        imageCaption: 'Kastamonu — geleneksel yazmacılık ve tahta oyma',
        explanation: 'Kastamonu yazmacılığı, ahşap kalıplarla kumaşa elle baskı yapılarak oluşturulan geleneksel bir tekstil sanatıdır. Karadeniz\'in zengin ormanları ahşap el sanatlarının gelişmesine zemin hazırlamıştır.'
      }
      {
        text: 'Trabzon'a özgü geleneksel bakır kalemkârlığında ustalar hangi tekniği kullanır?',
        category: 'craft', type: 'single',
        options: ['Eritilmiş bakırı kalıba döker', 'Bakır levhayı kalemle oyar ve kazar — usta sayısı hızla azalan bu zanaat yok olma tehlikesindedir', 'Bakırı asitle eritir', 'Kalıp baskıyla seri üretir'],
        correct: 1,
        wikiTitle: 'Trabzon',
        imageCaption: 'Trabzon geleneksel bakır kalemkârlığı — unutulan zanaat',
        explanation: 'Bakır kalemkârlığı, usta ellerin bakır levhalar üzerine yaptığı gravür sanatıdır. Sanayi üretimiyle rekabet edemeyen bu zanaat, usta sayısının dramatik düşüşüyle yok olma tehlikesindedir.'
      },
      {
        text: 'Kastamonu'nun Tosya ilçesine özgü "yazma"yı diğer bölge yazmalarından ayıran özellik nedir?',
        category: 'craft', type: 'single',
        options: ['Yalnızca ipek kullanılır', 'Kalıplar tek tek elle oyulur — bu yüzden her baskı benzersiz, endüstriyel üretimle kaybolmaktadır', 'Makine baskısıyla üretilir', 'Sadece kırmızı renk kullanılır'],
        correct: 1,
        wikiTitle: 'Kastamonu',
        imageCaption: 'Tosya yazması — el oyma kalıp geleneği',
        explanation: 'Tosya yazmacılığında kalıplar tek tek el oymasıyla yapılır; bu nedenle her parça benzersizdir. Makine üretimiyle rekabet edemeyen bu zanaat yok olma tehlikesiyle karşı karşıyadır.'
      },
      {
        text: 'Sinop'ta geleneksel "lenger" büyük bakır kap hangi toplumsal amaçla kullanılırdı?',
        category: 'craft', type: 'single',
        options: ['Şarap depolamak için', 'İmece kültüründe toplu aş pişirip komşulara dağıtmak için', 'Balık tuzlamak için', 'Yağ üretmek için'],
        correct: 1,
        wikiTitle: 'Sinop',
        imageCaption: 'Sinop lenger geleneği — imece kültürünün simgesi',
        explanation: 'Lenger, Karadeniz'in imece kültüründe toplu yemek pişirip paylaşmak için kullanılan büyük bakır kaplardır. Bu gelenek ve kapların üretimi büyük ölçüde kaybolmuştur.'
      },
    ]
  },
  {
    id: 'akdeniz', number: 2,
    name: 'Akdeniz Bölgesi',
    icon: '🏺', color: '#1BBFB0',
    badge: 'Likya Kaşifi',
    infoCards: [
      { label: 'UNESCO (1988)', value: 'Xanthos-Letoon' },
      { label: 'Antik Tiyatro', value: 'Aspendos (MS 155)' },
      { label: 'Mozaik Merkezi', value: 'Hatay/Antakya' },
      { label: 'Kaya Mezarları', value: 'Likya uygarlığı' },
    ],
    story: 'Profesör Tarih heyecanla haykırır: "Kaşif! Akdeniz kıyılarına geldin — ama bu yalnızca bir tatil beldesi değil! Burada Likya Uygarlığı\'nın kayalara oyulmuş mezarları var, 2000 yıllık Aspendos Tiyatrosu hâlâ konser veriyor, Hatay\'da dünyanın en büyük mozaik müzesi seni bekliyor!"',
    mission: 'Xanthos-Letoon\'u, Aspendos Tiyatrosu\'nu ve Likya kaya mezarlarını keşfederek Likya Kaşifi unvanını kazan!',
    funFact: 'Aspendos Antik Tiyatrosu (Antalya), MS 155\'te inşa edildi ve 15.000 kişilik kapasitesiyle günümüzde opera, bale ve festival mekânı olarak aktif biçimde kullanılıyor!',
    questions: [
      {
        text: 'Xanthos-Letoon UNESCO Dünya Mirası hangi uygarlığa aittir?',
        options: ['Likya (Lykia) uygarlığına', 'Roma İmparatorluğu\'na', 'Hitit İmparatorluğu\'na', 'Bizans İmparatorluğu\'na'],
        correct: 0,
        wikiTitle: 'Xanthos',
        imageCaption: 'Xanthos Antik Kenti — Likya Uygarlığı (UNESCO, 1988)',
        explanation: 'Xanthos-Letoon, Likya uygarlığının başkenti ve kutsal merkezi olup Muğla-Antalya sınırındadır. 1988\'de UNESCO listesine alınan bu alan, Likya yazısının da çözüldüğü yerdir.'
      },
      {
        text: 'Aspendos Antik Tiyatrosu hangi özelliğiyle ünlüdür?',
        options: ['Tamamen yeraltına inşa edilmiştir', 'Yalnızca Yunan dönemine aittir', 'Dünyanın en küçük antik tiyatrosudur', '15.000 kişilik kapasitesiyle dünyanın en iyi korunmuş Roma tiyatrolarından biridir'],
        correct: 3,
        wikiTitle: 'Aspendos',
        imageCaption: 'Aspendos Tiyatrosu — Antalya (MS 155, Roma dönemi)',
        explanation: 'Antalya\'nın Serik ilçesindeki Aspendos Tiyatrosu (MS 155), dünyanın en iyi korunmuş Roma tiyatrolarından biridir. Günümüzde operalar ve festivaller için kullanılmaktadır.'
      },
      {
        text: 'Hatay Arkeoloji Müzesi hangi eserlerle dünyaca tanınmaktadır?',
        options: ['Hitit hiyeroglifleri ve taş tabletleri', 'Roma dönemine ait 1500\'den fazla özgün mozaik eseri', 'Osmanlı saray mobilyaları koleksiyonu', 'Bizans dönemine ait altın takılar'],
        correct: 1,
        wikiTitle: 'Hatay Archaeology and Ethnography Museum',
        imageCaption: 'Hatay Arkeoloji Müzesi — dünyanın en büyük mozaik koleksiyonlarından biri',
        explanation: 'Hatay Arkeoloji Müzesi, Antakya (Antioch) kazılarından çıkarılan Roma dönemine ait devasa mozaiklere ev sahipliği yapar. 1.500\'den fazla mozaik eseriyle dünyanın sayılı mozaik koleksiyonlarından biridir.'
      },
      {
        text: 'Likya kaya mezarları nasıl bir yapıya sahiptir?',
        options: ['Yer altına oyulan tünel mezarlar', 'Düz alanlara dikilen taş dikilitaşlar', 'Kaya yüzeyine oyulmuş tapınak ya da ev cephesi biçiminde anıtsal mezarlar', 'Piramit biçiminde taş yığma mezarlar'],
        correct: 2,
        wikiTitle: 'Lycian rock-cut tombs',
        imageCaption: 'Likya kaya mezarları — Kaş ve Fethiye çevresi',
        explanation: 'Likya (Muğla-Antalya arası) kaya mezarları, kayalık yüzeylere oyulmuş tapınak ya da ev cephesi görünümlü anıtsal yapılardır. Kaş, Dalyan ve Fethiye çevresinde yoğun biçimde görülürler.'
      },
      {
        text: 'Perge Antik Kenti hangi yapı topluluğuyla tanınmaktadır?',
        options: ['Anıtsal kapılar, sütunlu cadde ve büyük tiyatrosuyla', 'Devasa yeraltı şehri ve kaya kiliseleriyle', 'Altın mozaikli Bizans sarayıyla', 'Dev su kemerleri ve hamam kompleksiyle'],
        correct: 0,
        wikiTitle: 'Perge',
        imageCaption: 'Perge Antik Kenti — Antalya (Helenistik ve Roma dönemi)',
        explanation: 'Perge (Antalya/Aksu), MÖ 1000\'lere dayanan tarihiyle Helenistik ve Roma dönemlerinde önemli bir kentti. Anıtsal giriş kapısı, sütunlu merkez caddesi ve tiyatrosuyla Akdeniz\'in başlıca antik kent kalıntılarından biridir.'
      }
      {
        text: 'Antalya'nın Elmalı ilçesi kilimlerindeki "kelebek motifi" hangi tarihi geleneği yansıtır?',
        category: 'craft', type: 'single',
        options: ['Osmanlı saray süsleme sanatını', '3000 yıllık Ana tanrıça sembolizmini — yaşayan kültürel bellek olup ustalar azaldıkça yok olmaktadır', 'Selçuklu mimari motiflerini', 'Bizans döneminden kilise mozaiklerini'],
        correct: 1,
        wikiTitle: 'Antalya',
        imageCaption: 'Elmalı kilimi kelebek motifi — Anadolu Ana tanrıça mirası',
        explanation: 'Elmalı kilimlerindeki kelebek desenleri, Ana tanrıça kültünün Anadolu'daki 3000 yıllık izini taşır. Bu motifler yaşayan bir kültürel bellek olup ustalar azaldıkça bu sembolik dil de yok olma tehlikesiyle karşı karşıyadır.'
      },
      {
        text: 'Alanya'nın geleneksel "kalafatçıları" hangi teknikle ahşap tekne kaçaklarını önlerdi?',
        category: 'craft', type: 'single',
        options: ['Modern plastik dolgu ile', 'Pamuk, katran ve zeytinyağını elle tahta aralıklarına sıkıştırarak — fiberglasa geçişle artık neredeyse yok olan bir zanaat', 'Silikon kullanarak', 'Çelik perçinlerle'],
        correct: 1,
        wikiTitle: 'Alanya',
        imageCaption: 'Kalafat sanatı — geleneksel ahşap tekne su geçirmezliği',
        explanation: 'Kalafatçılık, pamuk-katran-zeytinyağı karışımını elle tahta aralıklarına sıkıştırma sanatıdır. Fiberglasa geçişle bu zanaat neredeyse tamamen yok olmuştur.'
      },
      {
        text: 'Mersin'de geleneksel "narlıdere ipliği" neden kapı önüne asılır?',
        category: 'craft', type: 'single',
        options: ['Balık ağı yapmak için', 'Nazardan korunmak ve mutluluğu evde tutmak için — modern yaşamla büyük ölçüde kaybolan bir gelenek', 'Çadır kurmak için', 'Halatlar dokumak için'],
        correct: 1,
        wikiTitle: 'Mersin',
        imageCaption: 'Mersin nazar ipliği geleneği',
        explanation: 'Narlıdere ipliği, kapı eşiklerine asılan ve nazardan koruduğuna inanılan renkli yün örgüdür. Modern yaşam tarzıyla bu koruyucu gelenek büyük ölçüde kaybolmuştur.'
      },
    ]
  },
  {
    id: 'ic-anadolu', number: 3,
    name: 'İç Anadolu Bölgesi',
    icon: '🗿', color: '#F4D03F',
    badge: 'Anadolu Medeniyetleri Uzmanı',
    infoCards: [
      { label: 'UNESCO (1985)', value: 'Göreme/Kapadokya' },
      { label: 'UNESCO (1986)', value: 'Hattuşaş — Hitit Başkenti' },
      { label: 'UNESCO (2012)', value: 'Çatalhöyük' },
      { label: 'UNESCO (1985)', value: 'Divriği Ulu Camii' },
    ],
    story: 'Profesör Tarih coşkuyla anlatır: "İç Anadolu\'ya hoş geldin! 9000 yıl önce burada ilk şehir kuruldu. Hitit İmparatorluğu bu topraklara hükmetti. Kapadokya\'nın peri bacaları Hristiyanlara sığınak oldu. Dört ayrı UNESCO Mirası bu bölgede!"',
    mission: 'Çatalhöyük\'ten Hattuşaş\'a, Kapadokya\'dan Divriği\'ye İç Anadolu\'nun dört UNESCO mirasını keşfederek Anadolu Medeniyetleri Uzmanı unvanını kazan!',
    funFact: 'Çatalhöyük (Konya), MÖ 7500\'de kurulan dünyanın en eski kentsel yerleşimlerinden biridir. Buradaki insanlar 9500 yıl önce duvara resim yapmış ve kilden heykel üretmiştir!',
    questions: [
      {
        text: 'Çatalhöyük hangi açıdan insanlık tarihi için benzersizdir?',
        options: ['Türkiye\'nin ilk camisi burada inşa edilmiştir', 'Roma\'nın Anadolu\'daki ilk sömürgesidir', 'İlk Osmanlı sarayı bu noktada kurulmuştur', 'MÖ 7500\'e tarihlenen, dünyanın en erken kentsel yerleşimlerinden biri ve ilk duvar resimleri burada bulunmuştur'],
        correct: 3,
        wikiTitle: 'Çatalhöyük',
        imageCaption: 'Çatalhöyük kazı alanı — Konya (UNESCO, 2012)',
        explanation: 'Çatalhöyük (Konya), MÖ 7500\'de kurulmuş dünyanın bilinen en eski kentsel yerleşimlerinden biridir. 2012\'de UNESCO listesine alınmış; duvar resimleri, ana tanrıça heykelcikleri ve toplu yaşam alanları ile erken insan toplumunu anlamamızı sağlar.'
      },
      {
        text: 'Hattuşaş\'taki "Aslan Kapı" neyin girişidir?',
        options: ['Roma arenasının ana girişi', 'Selçuklu dönemine ait kervansaray girişi', 'MÖ 14. yüzyılda inşa edilmiş Hitit başkentinin şehir surlarındaki törensel kapı', 'Osmanlı sarayının harem dairesi girişi'],
        correct: 2,
        wikiTitle: 'Hattusa',
        imageCaption: 'Hattuşaş Aslan Kapısı — Hitit başkenti (UNESCO, 1986)',
        explanation: 'Aslan Kapı, MÖ 14. yüzyılda inşa edilmiş Hattuşaş şehir surlarındaki törensel bir kapıdır. Kapının iki yanında aslan heykeli bulunur. Hitit İmparatorluğu\'nun başkenti olan Hattuşaş, 1986\'da UNESCO listesine alınmıştır.'
      },
      {
        text: 'Göreme Açık Hava Müzesi\'ndeki kiliseler nasıl inşa edilmiştir?',
        options: ['Tuğla ve harçla örülerek inşa edilmiştir', 'Volkanik tüf kayalarının içi oyularak oluşturulmuştur', 'Ahşap kiriş ve taşla yapılmıştır', 'Mermer bloklar üst üste dizilerek inşa edilmiştir'],
        correct: 1,
        wikiTitle: 'Göreme Open Air Museum',
        imageCaption: 'Göreme Açık Hava Müzesi — Kapadokya (UNESCO, 1985)',
        explanation: 'Göreme Açık Hava Müzesi\'ndeki kiliseler (MS 10.-13. yüzyıl), Kapadokya\'ya özgü volkanik tüf kayaları oyularak oluşturulmuştur. İçlerindeki freskler (duvar resimleri) mükemmel korunmuştur.'
      },
      {
        text: 'Divriği Ulu Camii hangi özelliğiyle Türkiye\'nin ilk UNESCO mirası olmuştur?',
        options: ['MS 1228\'de yapılan eşsiz üç boyutlu taş oymacılığı ve Selçuklu tıp evi Darüşşifa', 'Osmanlı mimarisinin en büyük kubbe sistemi', 'Bizans freskleriyle süslü Hristiyan şapeli', 'İlk ahşap minare ve Selçuklu çini sanatı'],
        correct: 0,
        wikiTitle: 'Great Mosque and Hospital of Divriği',
        imageCaption: 'Divriği Ulu Camii ve Darüşşifa — Sivas (UNESCO, 1985)',
        explanation: 'Sivas\'ın Divriği ilçesindeki Ulu Cami ve Darüşşifa (1228-29), taş oymacılığının baş yapıtı olarak Türkiye\'nin ilk UNESCO Dünya Mirası listesine alınan eseridir (1985). Kapılarındaki üç boyutlu taş işçiliği dünyada eşsizdir.'
      },
      {
        text: 'Kapadokya\'daki yeraltı şehirlerinin (Derinkuyu, Kaymaklı) yapım amacı neydi?',
        options: ['Hammadde ve tahıl depolamak için', 'Hitit döneminde altın madenciliği için', 'Roma döneminde su sarnıcı olarak kullanmak için', 'Saldırılar sırasında binlerce kişiyi saklayan, çok katlı savunma amaçlı yerleşimler'],
        correct: 3,
        wikiTitle: 'Derinkuyu underground city',
        imageCaption: 'Derinkuyu Yeraltı Şehri — Kapadokya (8 kat derinliğinde)',
        explanation: 'Kapadokya\'daki Derinkuyu ve Kaymaklı yeraltı şehirleri, Bizans döneminde Arap akınları sırasında binlerce kişiyi barındıran çok katlı savunma sığınaklarıdır. Derinkuyu 8 kat aşağıya kadar iner ve 20.000 kişiyi barındırabilirdi.'
      }
      {
        text: 'Konya'nın Karapınar'ında "alacaören" yağmur duası geleneği neden kültürel miras sayılır?',
        category: 'music', type: 'single',
        options: ['Yalnızca eğlence amaçlıdır', 'İslam öncesi ve sonrası öğeleri bir arada taşıyan, doğa-toplum ilişkisini sembolize eden ritüel olduğu için', 'Roma döneminden kaldığı kanıtlandı', 'Çiftçilere tarım bilgisi öğrettiği için'],
        correct: 1,
        wikiTitle: 'Konya',
        imageCaption: 'Anadolu yağmur duası ritüeli — tarım toplumu geleneği',
        explanation: 'Yağmur duası, İslam öncesi bereket ritüellerinin İslami duayla harmanlanan biçimidir. Kadınlar, çocuklar ve yaşlıların katıldığı bu toplu ritüel, kuşaktan kuşağa aktarılan sosyal dayanışma pratiğidir.'
      },
      {
        text: 'Nevşehir Derinkuyu yeraltı şehrinde hayvan ahırlarının en alt kata yerleştirilmesinin işlevsel nedeni nedir?',
        category: 'unesco', type: 'single',
        options: ['Hayvanları gizlemek için', 'Hayvan vücut ısısının konveksiyonla üst katlara taşınması — antik pasif ısıtma sistemi', 'Sessizliği sağlamak için', 'Hava girişi buradan olduğu için'],
        correct: 1,
        wikiTitle: 'Derinkuyu underground city',
        imageCaption: 'Derinkuyu yeraltı şehri — pasif ısıtma sistemi',
        explanation: 'Hayvanların en alt kata yerleştirilmesi tesadüf değildir; vücut ısısı konveksiyonla üst katlara taşınırdı. Bu, antik çağlarda pasif ısıtma sisteminin en erken örneklerinden biridir.'
      },
      {
        text: 'Kırşehir'deki "Ahilik" teşkilatı modern hangi kurumların tarihsel atası sayılır?',
        category: 'unesco', type: 'single',
        options: ['Modern futbol kulübü', 'Ticaret birliği, mesleki etik ve sosyal dayanışma örgütü — modern esnaf ve ticaret odalarının atası', 'Osmanlı askeri düzeni', 'İlk posta teşkilatı'],
        correct: 1,
        wikiTitle: 'Akhism',
        imageCaption: 'Ahilik Teşkilatı — 13. yüzyıl Anadolu zanaat düzeni',
        explanation: 'Ahilik, 13. yüzyılda Kırşehir merkezli olarak kurulan esnaf örgütüdür. Mesleki etik, kalite standartları, sosyal yardımlaşma ve çıraklık eğitimini kapsayan bu düzen, modern ticaret odalarının tarihsel atasıdır.'
      },
    ]
  },
  {
    id: 'ege', number: 4,
    name: 'Ege Bölgesi',
    icon: '🏟️', color: '#9B59B6',
    badge: 'Antik Dünya Kaşifi',
    infoCards: [
      { label: 'UNESCO (2015)', value: 'Efes Antik Kenti' },
      { label: 'UNESCO (2014)', value: 'Bergama/Pergamon' },
      { label: 'UNESCO (2017)', value: 'Afrodisias' },
      { label: 'UNESCO (1988)', value: 'Hierapolis-Pamukkale' },
    ],
    story: 'Profesör Tarih heyecanla bağırır: "Dört UNESCO Mirası bir arada — Ege\'ye hoş geldin! Dünya\'nın Yedi Harikası\'ndan birinin bulunduğu Efes burada. Bergama Kütüphanesi İskenderiye\'nin rakibiydi. Afrodisias\'ta heykel okulu vardı. Pamukkale\'nin travertenleri binlerce yıl insanlara şifa verdi!"',
    mission: 'Efes, Bergama, Afrodisias ve Pamukkale\'nin antik mirasını keşfederek Antik Dünya Kaşifi unvanını kazan!',
    funFact: 'Efes\'teki Celsus Kütüphanesi (MS 117), yaklaşık 12.000 rulo eser barındırıyordu ve antik dünyanın İskenderiye ile Bergama\'dan sonra üçüncü büyük kütüphanesiydi!',
    questions: [
      {
        text: 'Efes\'teki Celsus Kütüphanesi hangi dönemde inşa edilmiştir?',
        options: ['MÖ 5. yüzyılda Yunan döneminde', 'MS 2. yüzyılda Roma döneminde', '6. yüzyılda Bizans döneminde', '15. yüzyılda Osmanlı döneminde'],
        correct: 1,
        wikiTitle: 'Library of Celsus',
        imageCaption: 'Celsus Kütüphanesi — Efes (MS 117, Roma dönemi)',
        explanation: 'Efes\'teki Celsus Kütüphanesi MS 117\'de Roma döneminde inşa edilmiş olup yaklaşık 12.000 rulo el yazması eseri barındırıyordu. Cephesi bugün hâlâ ayakta duran bu yapı, antik dünyanın en önemli kütüphanelerinden biriydi.'
      },
      {
        text: 'Bergama\'da "parşömen" kâğıdı neden icat edilmiştir?',
        options: ['Mısır\'ın papirüs ihracatını engellediğinde yazı için yeni malzeme arayışına girildi', 'Roma\'nın tahta tabletleri yasaklamasıyla alternatif arandı', 'Bergama\' iklimi papirüsü bozduğu için', 'Ticari rekabeti artırmak için'],
        correct: 0,
        wikiTitle: 'Pergamon',
        imageCaption: 'Bergama/Pergamon Akropolü — İzmir (UNESCO, 2014)',
        explanation: 'Efsaneye göre Mısır, Bergama\'nın kütüphanesinin İskenderiye\'yi geçeceği korkusuyla papirüs ihracatını durdurdu. Bunun üzerine Bergamalılar hayvan derisinden "parşömen" kâğıdını geliştirdi. "Parchment" (parşömen) kelimesi Pergamon\'dan gelir.'
      },
      {
        text: 'Afrodisias Antik Kenti hangi sanat dalında antik dünyada öne çıkmıştır?',
        options: ['Altın kaplama ve kuyumculuk', 'Cam işleme ve mozaik sanatı', 'Bronz döküm ve silah yapımı', 'Mermer heykeltraşlığı ve heykel okulu'],
        correct: 3,
        wikiTitle: 'Aphrodisias',
        imageCaption: 'Afrodisias Antik Kenti — Aydın (UNESCO, 2017)',
        explanation: 'Afrodisias (Aydın), Roma döneminde ünlü bir heykel okulu barındırıyordu. Yerel mermer ocakları ve ustalar sayesinde mermer heykeltraşlık bu kentte zirveye ulaştı. Müzesinde yüzlerce özgün heykel sergilenmektedir.'
      },
      {
        text: 'Pamukkale\'deki beyaz teraskayalar (travertenler) nasıl oluşur?',
        options: ['Dağlardan akan karların donup kalmasıyla', 'Volkanik patlamalar sonucu oluşan lav tabakalarıyla', 'Kalsiyumca zengin ılıca sularının yüzeye çıkarak kireç biriktirmesiyle', 'Rüzgarın kireçtaşını aşındırmasıyla'],
        correct: 2,
        wikiTitle: 'Pamukkale',
        imageCaption: 'Pamukkale travertenleri — Denizli (UNESCO, 1988)',
        explanation: 'Pamukkale\'nin (Denizli) beyaz teraskayaları "travertenler"dir. Kalsiyum bikarbonat içeren ılıca suları yüzeye çıktıkça buharlaşır ve kireç taşı biriktirir. Bu alan üzerindeki Hierapolis Antik Kenti ile birlikte 1988\'de UNESCO listesine alınmıştır.'
      },
      {
        text: 'Troya (Truva) Antik Kenti hangi yapıyla ünlüdür ve hangi ilde bulunur?',
        options: ['Sütunlu Agora — İzmir\'de', 'Efsanevi "Truva Atı" ve kenti çevreleyen surlar — Çanakkale\'de', 'Devasa amfitiyatro — Muğla\'da', 'Renkli mozaik zemin — Manisa\'da'],
        correct: 1,
        wikiTitle: 'Troy',
        imageCaption: 'Troya (Truva) surları — Çanakkale (UNESCO, 1998)',
        explanation: 'Troya, Çanakkale\'nin Tevfikiye köyündedir. MÖ 3000\'den MS 400\'e kadar 9 farklı katmanda iskân edilmiş, Homeros\'un İlyada destanına konu olan efsanevi kenttir. Truva Atı\'nın efsanesiyle ünlüdür. 1998\'de UNESCO listesine girmiştir.'
      }
      {
        text: 'İzmir Çeşme'ye özgü "sakız dövmesi" geleneği kaç yıllık bir kültürel sürekliliği temsil eder?',
        category: 'craft', type: 'single',
        options: ['100 yıl', '500 yıl', '2500 yıl — sakız (mastika) reçinesi hasadı Antik Yunan döneminden bu yana sürmektedir', '50 yıl'],
        correct: 2,
        wikiTitle: 'Mastic (plant resin)',
        imageCaption: 'Sakız dövmesi — Çeşme, 2500 yıllık reçine geleneği',
        explanation: 'Sakız ağacı reçinesinin elle dövülerek toplanması MÖ 5. yüzyıldan beri sürmektedir. Bu 2500 yıllık gelenek, UNESCO Somut Olmayan Miras listesindedir.'
      },
      {
        text: 'Muğla Milas halısını diğer Türk halılarından ayıran temel özellik nedir?',
        category: 'craft', type: 'single',
        options: ['Yalnızca sentetik iplik kullanılır', 'Sarımsı-pembe tonlar, "koç boynuzu" motifi ve bitkisel boyalar — özgün Ege halısı', 'Makineyle üretilir', 'Yalnızca siyah-beyaz dokunur'],
        correct: 1,
        wikiTitle: 'Milas',
        imageCaption: 'Milas halısı — özgün koç boynuzu motifi ve bitkisel renkler',
        explanation: 'Milas halısı, yumuşak sarımsı-pembe tonları ve koç boynuzu sembolizmiyle tanınan özgün Ege halısıdır. Bitkisel boyalar ve özgün motif repertuarı onu diğer Türk halılarından ayırır.'
      },
      {
        text: 'Bergama'nın geleneksel "boynuz tarakçılığı" neden kaybolmaktadır?',
        category: 'craft', type: 'single',
        options: ['Plastik tarakların el yapımı boynuz tarakların pazarını yok etmesi nedeniyle', 'Çok pahalı olduğundan', 'Yasalarla yasaklandığından', 'Hammadde kalmadığından'],
        correct: 0,
        wikiTitle: 'Bergama',
        imageCaption: 'Bergama boynuz tarakçılığı — yok olma tehlikesindeki zanaat',
        explanation: 'Bergama'nın geleneksel boynuz tarakçılığı, hayvan boynuzlarının işlenerek tarak yapılması sanatıdır. Ucuz plastik tarakların piyasayı ele geçirmesiyle usta sayısı dramatik biçimde azalmıştır.'
      },
    ]
  },
  {
    id: 'marmara', number: 5,
    name: 'Marmara Bölgesi',
    icon: '🕌', color: '#F5A42A',
    badge: 'Osmanlı Başkenti Uzmanı',
    infoCards: [
      { label: 'UNESCO (1985)', value: 'İstanbul Tarihi Alanları' },
      { label: 'UNESCO (2011)', value: 'Selimiye Camii — Edirne' },
      { label: 'UNESCO (2014)', value: 'Bursa ve Cumalıkızık' },
      { label: 'UNESCO (1998)', value: 'Troya — Çanakkale' },
    ],
    story: 'Boğaz vapurunda Profesör Tarih hayranlıkla anlatır: "Osmanlı Başkenti Uzmanı adayı, Marmara\'ya hoş geldin! Dört UNESCO Mirası bu bölgede! Ayasofya 1500 yıllık, Topkapı Sarayı 400 yıl sultan görmüş, Selimiye Camii matematiksel mükemmeliyettir!"',
    mission: 'İstanbul\'un tarihi yarımadasını, Edirne\'nin Selimiye Camii\'ni ve Bursa\'nın Osmanlı mirasını keşfederek Osmanlı Başkenti Uzmanı unvanını kazan!',
    funFact: 'Ayasofya (İstanbul), MS 537\'de Bizans döneminde inşa edildi. Kubbesi 1000 yıl boyunca dünyanın en büyük kubbesi olma unvanını korudu!',
    questions: [
      {
        text: 'Ayasofya\'nın mimari açıdan en devrimci özelliği nedir?',
        options: ['MS 537\'de olağanüstü büyüklükte inşa edilen merkezi kubbe ve yarım kubbe sistemi', 'Dünyanın en uzun minareleri', 'Tamamen mermer kaplı dış cephesi', 'İki katlı revaklı avlusu'],
        correct: 0,
        wikiTitle: 'Hagia Sophia',
        imageCaption: 'Ayasofya — İstanbul (MS 537, UNESCO 1985)',
        explanation: 'Ayasofya (MS 537), dönemin tüm mühendislik bilgisini zorlayan dev merkezi kubbe sistemiyle inşa edildi. Kubbesi 1000 yıl boyunca dünyanın en büyük kubbesi olma unvanını korudu. 916 yıl Bizans katedrali, 481 yıl Osmanlı camii olarak hizmet verdi.'
      },
      {
        text: 'Mimar Sinan Selimiye Camii\'ni neden "ustalık eseri" olarak tanımlamıştır?',
        options: ['En uzun minarelere sahip olduğu için', 'En fazla çini kullanan cami olduğu için', 'Tek merkezi kubbe altında Ayasofya\'dan daha büyük iç mekan yaratıldığı için', 'İlk dört minareli cami olduğu için'],
        correct: 2,
        wikiTitle: 'Selimiye Mosque',
        imageCaption: 'Selimiye Camii — Edirne, Mimar Sinan (UNESCO, 2011)',
        explanation: 'Mimar Sinan, Selimiye\'yi (Edirne, 1575) kendi ustalık eseri olarak tanımladı. Tek merkezi kubbenin altında yarattığı iç mekan alanı Ayasofya\'nınkinden büyüktür. Dört ince minaresiyle Osmanlı mimarisinin zirvesidir.'
      },
      {
        text: 'Bursa neden Osmanlı mirası açısından özel bir öneme sahiptir?',
        options: ['Osmanlı\'nın son başkenti ve denizcilik merkezi olduğu için', 'Osmanlı padişahlarının yazlık sarayının bulunduğu yer olduğu için', 'Osmanlı\'nın Avrupa\'ya açılan kapısı ve en büyük tersanesi olduğu için', 'Osmanlı\'nın ilk başkenti (1326-1365) olup Yeşil Cami ve Yeşil Türbe gibi erken Osmanlı şaheserlerini barındırdığı için'],
        correct: 3,
        wikiTitle: 'Bursa',
        imageCaption: 'Bursa Yeşil Cami ve Türbe — erken Osmanlı mirası (UNESCO, 2014)',
        explanation: 'Bursa, 1326-1365 yılları arasında Osmanlı\'nın ilk başkentiydi. Yeşil Cami, Yeşil Türbe ve Bursa Büyük Camii erken Osmanlı mimarisinin şaheserleridir. Cumalıkızık köyüyle birlikte 2014\'te UNESCO listesine alındı.'
      },
      {
        text: 'Topkapı Sarayı\'ndaki Harem bölümü ne işlev görüyordu?',
        options: ['Yabancı elçilerin kabul edildiği resmi törenler alanı', 'Sultanın özel yaşam alanı; sultan, annesi ve ailesi burada yaşardı', 'Osmanlı hazinesinin depolandığı korunaklı bölüm', 'Saray mutfağı ve erzak depolarının bulunduğu alan'],
        correct: 1,
        wikiTitle: 'Topkapi Palace',
        imageCaption: 'Topkapı Sarayı — İstanbul (1465-1856, ~400 yıl)',
        explanation: 'Topkapı Sarayı\'nın Harem bölümü, sultanın ve ailesinin özel yaşam alanıydı. Sultan annesi (Valide Sultan) burada geniş bir otorite kullanırdı. Saray 1465\'ten 1856\'ya kadar yaklaşık 400 yıl 36 Osmanlı sultanına ev sahipliği yaptı.'
      },
      {
        text: 'Kapalıçarşı\'nın (İstanbul) özgün tarihsel işlevi neydi?',
        options: ['Ticaretin, zanaatkârlığın ve lonca sisteminin merkezlendiği kapalı çarşı', 'Osmanlı padişahlarına özel alışveriş alanı', 'Yabancı elçilerin misafir edildiği han', 'Osmanlı\'nın silah ve barut imal ettiği üretim merkezi'],
        correct: 0,
        wikiTitle: 'Grand Bazaar, Istanbul',
        imageCaption: 'Kapalıçarşı — İstanbul (1461, dünyanın en eski kapalı çarşısı)',
        explanation: 'Kapalıçarşı (1461, Fatih Sultan Mehmet), ticaret, zanaat ve lonca sisteminin merkeziydi. 61 kapalı cadde ve 4000\'den fazla dükkanıyla dünyanın bilinen en eski ve en büyük kapalı çarşılarından biridir.'
      }
      {
        text: 'Edirne'de 650 yılı aşkın süredir düzenlenen Kırkpınar Yağlı Güreşi'nin kültürel önemi nedir?',
        category: 'music', type: 'single',
        options: ['Yalnızca bir spor etkinliğidir', 'UNESCO tarafından tescillenen, spor-müzik-ritüelin iç içe geçtiği dünyanın en eski spor festivali', 'Son 50 yılda başlatılmıştır', 'Askeri eğitim biçimidir'],
        correct: 1,
        wikiTitle: 'Oil wrestling',
        imageCaption: 'Kırkpınar Yağlı Güreşi — Edirne, 1362'den beri (UNESCO 2010)',
        explanation: 'Kırkpınar, 1362'den beri kesintisiz düzenlenen dünyanın en eski spor etkinliklerinden biridir. Davul-zurna müziği, ağa geleneği ve güreş ritüeli bir arada 2010'da UNESCO listesine alındı.'
      },
      {
        text: 'İstanbul'a özgü "Ebru" sanatı nasıl uygulanır?',
        category: 'craft', type: 'single',
        options: ['Hat yazısı kumaşa nakşedilir', 'Kitre kıvamındaki su yüzeyine özel boyalar fırlatılıp çeşitli aletlerle şekillendirilir — 16. yüzyıldan beri süregelen Osmanlı-Türk sanatı (UNESCO 2014)', 'Tezhip altın yaldız kâğıda basılır', 'Minyatür fırça tekniğiyle uygulanır'],
        correct: 1,
        wikiTitle: 'Ebru (marbling)',
        imageCaption: 'Ebru sanatı — su yüzeyinde dans eden boyalar (UNESCO 2014)',
        explanation: 'Ebru, kitre kıvamındaki su yüzeyine özel boyalar fırlatılıp şekillendirilmesinin ardından kâğıda aktarılmasıyla oluşturulur. 16. yüzyıldan beri sürmekte olup 2014'te UNESCO listesine alınmıştır.'
      },
      {
        text: 'Bursa'daki geleneksel "tellak" zanaatı neden kültürel miras kapsamındadır?',
        category: 'craft', type: 'single',
        options: ['Tellaklar modern masaj teknisyenleridir', 'Yüzyıllık hamam kültürünü yaşatması, sosyal eşitlik ritüelini taşıması ve nesli tükenmekte olan bir zanaat olması nedeniyle', 'Devlet tarafından desteklendiğinden', 'Yalnızca turistler için yapıldığından'],
        correct: 1,
        wikiTitle: 'Turkish bath',
        imageCaption: 'Türk hamamı tellak geleneği — sosyal ritüel (UNESCO 2016)',
        explanation: 'Tellak, geleneksel Türk hamamlarında köse-kese hizmeti veren, bu zanaatı ustadan öğrenen kişidir. Hamam kültürü 2016'da UNESCO listesine alındı; ancak geleneksel eğitim alan usta sayısı giderek azalmaktadır.'
      },
    ]
  },
  {
    id: 'dogu-anadolu', number: 6,
    name: 'Doğu Anadolu Bölgesi',
    icon: '⛰️', color: '#5B9BD5',
    badge: 'Kadim Uygarlıklar Dedektifi',
    infoCards: [
      { label: 'UNESCO (1987)', value: 'Nemrut Dağı — Kommagene' },
      { label: 'UNESCO (2016)', value: 'Ani Harabeleri — Kars' },
      { label: 'UNESCO (2021)', value: 'Arslantepe — Malatya' },
      { label: 'Ermeni Mirası', value: 'Akdamar Kilisesi — Van' },
    ],
    story: 'Karlı dağların arasında Profesör Tarih fısıldar: "Kadim Uygarlıklar Dedektifi adayı! Tanrı başları bir dağın zirvesinde seni izliyor — Nemrut\'a hoş geldin! Kars\'ta Ani Harabeleri gizli bir medeniyetin tanığı. Malatya\'da 5500 yıllık saray var!"',
    mission: 'Nemrut\'u, Ani Harabeleri\'ni ve Arslantepe\'yi keşfederek Kadim Uygarlıklar Dedektifi unvanını kazan!',
    funFact: 'Nemrut Dağı\'nda MÖ 1. yüzyılda yaşayan Kommagene Kralı I. Antiokhus, kendini tanrılarla eşit gören devasa heykeller yaptırdı. Her biri 8-9 metre yüksekliğindeki bu başlar bugün hâlâ 2150 metrede seni bekliyor!',
    questions: [
      {
        text: 'Nemrut Dağı\'ndaki devasa taş başlar hangi hükümdar tarafından yaptırılmıştır?',
        options: ['Hitit Büyük Kral I. Suppiluliuma', 'Urartu Kral Argişti', 'Kommagene Krallığı hükümdarı I. Antiokhus (MÖ 1. yüzyıl)', 'Roma İmparatoru Traianus'],
        correct: 2,
        wikiTitle: 'Mount Nemrut',
        imageCaption: 'Nemrut Dağı — Adıyaman (UNESCO, 1987)',
        explanation: 'Nemrut Dağı\'ndaki (Adıyaman, 2150 m) tanrı ve kral başları MÖ 1. yüzyılda Kommagene Krallığı hükümdarı I. Antiokhus tarafından yaptırıldı. Hükümdar kendini tanrılarla eşit tutarak 9 metrelik heykellerle anıt mezarını inşa ettirdi. 1987\'de UNESCO listesine alındı.'
      },
      {
        text: 'Ani Harabeleri (Kars) hangi uygarlığın başkentiydi?',
        options: ['Urartu Krallığı\'nın', 'Selçuklu İmparatorluğu\'nun', 'Bizans İmparatorluğu\'nun', 'Ortaçağ Ermeni Bagratid Krallığı\'nın'],
        correct: 3,
        wikiTitle: 'Ani',
        imageCaption: 'Ani Harabeleri — Kars (UNESCO, 2016)',
        explanation: 'Ani, 10.-11. yüzyıllarda Ermeni Bagratid Krallığı\'nın başkentiydi. 100.000 kişilik nüfusuyla döneminin büyük şehirlerinden biriydi. Camileri, kiliseleri ve saraylarıyla "1001 Kilise Şehri" olarak anılırdı. 2016\'da UNESCO listesine alındı.'
      },
      {
        text: 'Arslantepe (Malatya) arkeoloji dünyasında neden öncü bir keşif alanıdır?',
        options: ['MÖ 3300\'e tarihlenen dünyanın en erken saray yapısı ve devlet organizasyonu izleri burada keşfedilmiştir', 'Türkiye\'nin en büyük Osmanlı kervansarayı burada bulunmuştur', 'İlk Hristiyan kilisesinin bu alanda inşa edildiği kanıtlanmıştır', 'Sümer çivi yazısının Anadolu\'ya bu noktadan yayıldığı kanıtlanmıştır'],
        correct: 0,
        wikiTitle: 'Arslantepe',
        imageCaption: 'Arslantepe höyüğü — Malatya (UNESCO, 2021)',
        explanation: 'Arslantepe (Malatya), MÖ 3300\'e tarihlenen dünyanın en eski saray yapılarından birine ev sahipliği yapar. Erken devlet organizasyonu, artı değer depolama ve ilk metal silahların bu bölgeden yayıldığı düşünülmektedir. 2021\'de UNESCO listesine alındı.'
      },
      {
        text: 'Akdamar Kilisesi (Van) hangi mimari özelliğiyle dünyada benzersizdir?',
        options: ['Dünyanın en yüksek rakımda inşa edilmiş kilisesidir', 'Van Gölü\'ndeki adada inşa edilmiş ve dış cephedeki kabartma İncil sahneleriyle Ermeni taş işçiliğinin zirvesidir', 'Tamamen altın mozaiklerle kaplı iç mekânıyla', 'İlk Hristiyan kilisesi olup en erken fresk boyamalarını barındırır'],
        correct: 1,
        wikiTitle: 'Cathedral of the Holy Cross, Akdamar',
        imageCaption: 'Akdamar Kilisesi — Van Gölü (MS 921)',
        explanation: 'Akdamar Kilisesi (MS 921), Van Gölü\'ndeki Akdamar Adası\'nda yer alır. Dış cephesindeki Eski ve Yeni Ahit sahnelerini konu alan kabartma heykeller, Ortaçağ Ermeni taş işçiliğinin en mükemmel örnekleridir.'
      },
      {
        text: 'Van Kalesi Urartu uygarlığı hakkında ne anlatır?',
        options: ['Osmanlı döneminde inşa edilmiş askeri garnizon olduğunu', 'Selçuklu döneminde tahıl ve su depolamak için yapıldığını', 'Bizans döneminde manastır yerleşimi olarak kullanıldığını', 'MÖ 9. yüzyılda kayaya oyulmuş yazıtları ve sarp kayalık üzerine inşa edilmiş surlarıyla Urartu Krallığı\'nın güçlü merkezi olduğunu'],
        correct: 3,
        wikiTitle: 'Van Fortress',
        imageCaption: 'Van Kalesi — Urartu dönemi (MÖ 9. yüzyıl)',
        explanation: 'Van Kalesi, MÖ 9. yüzyılda Urartu Krallığı\'nın merkezi olan Tuşpa şehrinin kalıntısıdır. Sarp kayalık üzerindeki surlar ve kaya yazıtları Urartu dilinin ve medeniyetinin en önemli belgelerinden biridir.'
      }
      {
        text: 'Erzurum "Oltu taşı" neden başka bölgelerde üretilemeyen özgün bir zanaat malzemesidir?',
        category: 'craft', type: 'single',
        options: ['Obsidyen — tüm Doğu Anadolu'da bulunur', 'Lignit kökenli "jet" taşı — yalnızca Erzurum Oltu ilçesinin belirli yataklarında bulunur', 'Bazalt — tüm platodan çıkarılır', 'Mermer — Van dağlarından getirilir'],
        correct: 1,
        wikiTitle: 'Oltu stone',
        imageCaption: 'Oltu taşı — Erzurum'un siyah, parlak zanaatı',
        explanation: 'Oltu taşı, lignit kökenli organik bir taş türü olan "jet"tir. Yalnızca Erzurum'un Oltu ilçesine özgü yataklarda bulunur. El testeresi ve cilalama ile yapılan oyma, kuşaktan kuşağa aktarılan nadir bir zanaat olarak yaşatılmaktadır.'
      },
      {
        text: 'Malatya'da yüzyıllardır süregelen "kayısı kurutma" geleneğinin kültürel önemi nedir?',
        category: 'cuisine', type: 'single',
        options: ['Yalnızca ekonomik değer taşır', 'Güneş, rüzgar ve el işçiliğini harmanlayan bilgi sistemi — toprağa, iklime ve kültüre özgü bir gastronomik pratik', 'Fabrika üretimine alternatiftir', 'UNESCO Mirası olarak tescillenmiştir'],
        correct: 1,
        wikiTitle: 'Malatya',
        imageCaption: 'Malatya kayısı kurutma geleneği — güneş ve el bilgisi',
        explanation: 'Malatya kayısı kurutması, güneş yoğunluğunu, rüzgar yönünü ve meyve olgunluğunu bir arada okuyan geleneksel bilgi sistemine dayalıdır. Bu deneyim sözlü yollarla aktarılır ve korunmaya muhtaç bir gastronomik pratik oluşturur.'
      },
      {
        text: 'Van Gölü havzasına özgü Urartu kaya oyma sanatında hangi teknik kullanılmıştır?',
        category: 'unesco', type: 'single',
        options: ['Kil üzerine nakış', 'Bazalt ve andezit gibi sert kayalar bronz aletlerle oyulup kazınmıştır', 'Kireç üzerine fresk boyama', 'Seramik üzerine sırlama'],
        correct: 1,
        wikiTitle: 'Urartu',
        imageCaption: 'Urartu kaya oyma sanatı — Van çevresi, MÖ 9.-6. yüzyıl',
        explanation: 'Urartu uygarlığı (MÖ 9.-6. yüzyıl), doğu Anadolu'nun sert kayaları üzerine olağanüstü kazıma ve oyma işleri bırakmıştır. Van Kalesi'ndeki Urartu yazıtları bu sanatın en çarpıcı örnekleridir.'
      },
    ]
  },
  {
    id: 'guneydogu', number: 7,
    name: 'Güneydoğu Anadolu Bölgesi',
    icon: '🏺', color: '#E07B6A',
    badge: 'İnsanlığın Kökenleri Uzmanı',
    infoCards: [
      { label: 'UNESCO (2018)', value: 'Göbekli Tepe — Şanlıurfa' },
      { label: 'UNESCO (2015)', value: 'Diyarbakır Surları ve Hevsel' },
      { label: 'Mozaik Müzesi', value: 'Zeugma — Gaziantep' },
      { label: 'Tarihi Kent',  value: 'Mardin taş evleri' },
    ],
    story: 'Profesör Tarih hayranlıkla anlatır: "İnsanlığın Kökenleri Uzmanı adayı — bu topraklar tüm insanlığın anayurdu! Göbekli Tepe tarımdan 6000 yıl önce inşa edildi ve tarihi yeniden yazdı. Diyarbakır\'ın siyah bazalt surları yüzyıllardır ayakta!"',
    mission: 'Göbekli Tepe\'nin insanlık tarihine katkısını, Diyarbakır surlarını ve Zeugma mozaiklerini keşfederek İnsanlığın Kökenleri Uzmanı unvanını kazan!',
    funFact: 'Göbekli Tepe (Şanlıurfa), MÖ 10.000\'e tarihlenen dünyanın en eski tapınak kompleksidir. İnşa edenler henüz çiftçi değildi — bu keşif "önce tarım, sonra din" tezini tamamen alt üst etti! 2018\'de UNESCO listesine alındı.',
    questions: [
      {
        text: 'Göbekli Tepe\'deki T biçimli dikilitaşlar neyi sembolize eder?',
        options: ['Mısır piramitleri gibi mezar anıtlarını', 'Su kaynağı ve nehir tanrılarını', 'İnsan ve tanrı figürlerini: T biçimi stilize edilmiş insan bedeni, üstteki yassı baş ise başı temsil eder', 'Gece gökyüzünü ve yıldız haritalarını'],
        correct: 2,
        wikiTitle: 'Göbekli Tepe',
        imageCaption: 'Göbekli Tepe — Şanlıurfa (UNESCO, 2018) — MÖ 10.000',
        explanation: 'Göbekli Tepe\'deki T biçimli dikilitaşların büyük çoğunluğu stilize insan figürü olarak yorumlanır: T biçimi gövde ve omuzları, üstteki yassı kısım başı temsil eder. Üzerlerindeki hayvan ve sembol kabartmaları dönemin dini inanç dünyasını yansıtır.'
      },
      {
        text: 'Diyarbakır surları hangi taştan yapılmış olup neden benzersizdir?',
        options: ['Siyah bazalt taşından; MS 4. yüzyıldan kalma, 5,5 km uzunluğu ve 72 kulesiyle Anadolu\'nun en iyi korunmuş antik surları olduğu için', 'Beyaz kireçtaşından; Türkiye\'nin en uzun şehir surları olduğu için', 'Tuğladan; Mezopotamya geleneğini yaşattığı için', 'Gri granit taşından; 10 km uzunluğuyla Çin Seddi\'nden sonra en uzun sur olduğu için'],
        correct: 0,
        wikiTitle: 'Diyarbakır',
        imageCaption: 'Diyarbakır Surları — siyah bazalt (UNESCO, 2015)',
        explanation: 'Diyarbakır surları, bölgeye özgü siyah bazalt taşından MS 4. yüzyılda inşa edilmiştir. Yaklaşık 5,5 km uzunluğu ve 72 kulesiyle Anadolu\'nun en iyi korunmuş antik kentsel surlarından biridir. Hevsel Bahçeleri ile birlikte 2015\'te UNESCO listesine alındı.'
      },
      {
        text: 'Zeugma Mozaik Müzesi\'ndeki "Çingene Kız" hangi döneme aittir ve neden önemlidir?',
        options: ['MÖ 5. yüzyıl Yunan dönemi; ilk renkli mozaik tekniği kullanıldığı için', 'MS 2. yüzyıl Roma dönemi; olağanüstü duygu ifadesi ve gerçekçiliğiyle dünyanın en ünlü portre mozaiklerinden biri olduğu için', '12. yüzyıl Bizans dönemi; altın fon üzerine yapılmış tek örnek olduğu için', '15. yüzyıl Osmanlı dönemi; çini tekniğiyle yapılmış ender eser olduğu için'],
        correct: 1,
        wikiTitle: 'Zeugma Mosaic Museum',
        imageCaption: '"Çingene Kız" mozaiği — Zeugma Müzesi, Gaziantep (MS 2. yy)',
        explanation: 'Zeugma Mozaik Müzesi\'ndeki "Çingene Kız" (MS 2. yüzyıl), gerçekçi yüz ifadesi ve derinlik hissiyle dünyanın en çarpıcı antik portre mozaiklerinden biridir. Gaziantep\'te 2011\'de açılan müze, dünyada en büyük in situ mozaik koleksiyonlarından birine sahiptir.'
      },
      {
        text: 'Mardin\'in tarihi kentsel dokusunu oluşturan yapı malzemesi ve mimari özellik nedir?',
        options: ['Kırmızı tuğla ve Mezopotamya tarzı düz çatılı yapılar', 'Ahşap ve kerpiç; geleneksel Osmanlı konak mimarisi', 'Siyah bazalt taş; Diyarbakır geleneğinin devamı olarak monoton cepheler', 'Bal-sarı kireçtaşından inşa edilmiş, ince oyma motifli taş evler ve eğimli araziyi kullanan basamaklı yerleşim dokusu'],
        correct: 3,
        wikiTitle: 'Mardin',
        imageCaption: 'Mardin tarihi kent dokusu — bal sarısı kireçtaşı evler',
        explanation: 'Mardin, bölgeye özgü sarı-bal renkli kireçtaşıyla inşa edilmiştir. Yumuşak olan bu taş ince oyma motiflerine olanak tanır. Yüksek bir tepe üzerine kurulu şehrin basamaklı, terasa yerleşim dokusu ve süslü taş cepheleri UNESCO Geçici Listesi\'ndedir.'
      },
      {
        text: 'Şanlıurfa Balıklıgöl\'ün kültürel önemi nedir?',
        options: ['Fırat Nehri\'nin kaynağı olup antik sulama kanallarının başlangıç noktasıdır', 'Asur uygarlığına ait en erken çivi yazısı tabletlerinin bulunduğu arkeolojik alan', 'İbrahimî geleneğe göre Hz. İbrahim\'in ateşe atıldığı ve Allah\'ın mucizesiyle gölün oluştuğuna inanılan kutsal mekân', 'Roma döneminde kutsal Diana tapınağının sunak havuzu olarak kullanılan yer'],
        correct: 2,
        wikiTitle: 'Balıklıgöl',
        imageCaption: 'Balıklıgöl — Şanlıurfa; "Peygamberler Şehri"nin kutsal mekânı',
        explanation: 'Balıklıgöl, İbrahimî geleneğe göre Hz. İbrahim\'in Nemrut Kral tarafından ateşe atıldığı ve Allah\'ın ateşi suya, odunları balığa çevirdiğine inanılan kutsal bir mekândır. Bu inanç Şanlıurfa\'ya "Peygamberler Şehri" unvanını kazandırmıştır.'
      }
      {
        text: 'Gaziantep'in UNESCO Gastronomi Şehri unvanının temelinde ne yatmaktadır?',
        category: 'cuisine', type: 'single',
        options: ['Fabrika üretimiyle standardize edilmiş baklava', 'Elle açılan ince yufka, el seçimi Antep fıstığı ve ustanın sezgisel pişirme bilgisi — sözlü aktarımla yaşayan gizli bilgi', 'Hızlı servis mutfağının gelişimi', 'Uluslararası gıda ihracatı'],
        correct: 1,
        wikiTitle: 'Gaziantep',
        imageCaption: 'Antep baklavası ustası — UNESCO 2015 Gastronomi Şehri',
        explanation: 'Gaziantep'in UNESCO Yaratıcı Şehirler Ağı Gastronomi unvanının temelinde elle açılan yufka katmanları, özenle seçilen fıstık ve ustanın kuşaktan kuşağa aktarılan sezgisel bilgisi yatar.'
      },
      {
        text: 'Mardin'de "telkari" (gümüş tel işçiliği) hangi teknikle uygulanır?',
        category: 'craft', type: 'single',
        options: ['Eritilmiş gümüş kalıba dökülür', '0.3-0.5 mm gümüş teller elle kıvrılıp lehimlenerek dantel gibi örülür', 'Gümüş levhalar preslenerek şekil verilir', 'Seramik kalıba gümüş kaplanır'],
        correct: 1,
        wikiTitle: 'Filigree',
        imageCaption: 'Mardin telkari — gümüş tel örme sanatı',
        explanation: 'Telkari, 0.3-0.5 mm kalınlığındaki saf gümüş tellerin özel aletlerle kıvrılıp bükülerek dantel görünümlü süslemelere dönüştürüldüğü hassas bir tekniktir. Usta sayısının azalmasıyla ciddi tehdit altındadır.'
      },
      {
        text: 'Şanlıurfa Balıklıgöl çevresindeki Hz. İbrahim Mağarası neden "yaşayan kültürel miras" sayılır?',
        category: 'unesco', type: 'single',
        options: ['Göbekli Tepe tünelleri olduğu için', 'Hz. İbrahim'in doğup büyüdüğü yere atfedilen kutsal alan — dini, kültürel ve tarihi katmanlarıyla yaşayan bir miras', 'Harran Üniversitesi kalıntıları olduğu için', 'Nemrut'un yan mağaraları olduğu için'],
        correct: 1,
        wikiTitle: 'Sanliurfa',
        imageCaption: 'Hz. İbrahim Mağarası — Şanlıurfa, yaşayan kültürel miras',
        explanation: 'Şanlıurfa'daki Hz. İbrahim Mağarası, İslam inancına göre Hz. İbrahim'in doğduğu yere yakın kutsal bir mekândır. Balıklıgöl'ün yanında yer alan bu alan, hem dini hem kültürel hem tarihi katmanlarıyla yaşayan bir miras alanıdır.'
      },
    ]
  }
];

// ── SORU ZENGINLEŞTIRME: Eski + Yeni soruları birleştir ──────
// Eski 5 soru/bölge → unesco + single olarak etiketlenir
// EXTENDED_QUESTIONS (questions-extended.js) varsa eklenir
(function enrichQuestions(){
  // Bazı eski sorular el sanatı/folklor kategorilerine daha uygun — manuel düzelt
  const legacyCategoryOverride = {
    'karadeniz': { 4: 'craft' },      // Kastamonu yazmacılığı
    'guneydogu': { 3: 'craft' },      // Mardin taş işçiliği
  };
  REGIONS.forEach(r => {
    r.questions.forEach((q, idx) => {
      if (!q.category) {
        const ov = legacyCategoryOverride[r.id];
        q.category = (ov && ov[idx]) ? ov[idx] : 'unesco';
      }
      if (!q.type) q.type = 'single';
    });
    // Yeni kategorize soruları ekle (yüklenmişse)
    if (typeof EXTENDED_QUESTIONS !== 'undefined' && EXTENDED_QUESTIONS[r.id]) {
      r.questions = r.questions.concat(EXTENDED_QUESTIONS[r.id]);
    }
  });
})();

// ── KARAKTER TİPLERİ ─────────────────────────────────────────
const CHARACTERS = {
  seyyah:   { label: 'Seyyah',   icon: '🧭', intro: 'Seyyah olarak bu bölgede her şeyi merakla keşfediyorsun.' },
  arkeolog: { label: 'Arkeolog', icon: '⛏️', intro: 'Arkeolog gözüyle tarihi katmanları deşerken bulunuyorsun burada.' },
  kasif:    { label: 'Kaşif',    icon: '🔭', intro: 'Kaşif ruhuyla bilinmezlere dalarak bu bölgeyi araştırıyorsun.' },
  tarihci:  { label: 'Tarihçi',  icon: '📜', intro: 'Tarihçi kimliğinle geçmişi günümüze bağlayan kanıtları arıyorsun.' },
};

// ── KÜLTÜREL MİRAS KARTLARI ───────────────────────────────────
const HERITAGE_CARDS = [
  { id:'sumela',    emoji:'🏛️', name:'Sümela Manastırı',   region:'karadeniz', rarity:'rare',   color:'#72B841' },
  { id:'safranbolu',emoji:'🏠', name:'Safranbolu Konağı',  region:'karadeniz', rarity:'common', color:'#72B841' },
  { id:'xanthos',   emoji:'🏺', name:'Xanthos-Letoon',     region:'akdeniz',   rarity:'rare',   color:'#1BBFB0' },
  { id:'aspendos',  emoji:'🎭', name:'Aspendos Tiyatrosu', region:'akdeniz',   rarity:'common', color:'#1BBFB0' },
  { id:'catalhoyuk',emoji:'🗿', name:'Çatalhöyük',         region:'ic-anadolu',rarity:'epic',   color:'#F4D03F' },
  { id:'kapadokya', emoji:'🏔️', name:'Kapadokya Kilisesi', region:'ic-anadolu',rarity:'rare',   color:'#F4D03F' },
  { id:'efes',      emoji:'🏛️', name:'Efes Antik Kenti',   region:'ege',       rarity:'epic',   color:'#F5A42A' },
  { id:'pamukkale', emoji:'💧', name:'Pamukkale Traverteni',region:'ege',       rarity:'rare',   color:'#F5A42A' },
  { id:'selimiye',  emoji:'🕌', name:'Selimiye Camii',     region:'marmara',   rarity:'epic',   color:'#9B59B6' },
  { id:'bursa-ipek',emoji:'🧵', name:'Bursa İpeği',        region:'marmara',   rarity:'common', color:'#9B59B6' },
  { id:'nemrut',    emoji:'👑', name:'Nemrut Dağı',        region:'dogu-anadolu',rarity:'rare', color:'#5B9BD5' },
  { id:'van-kilim', emoji:'🎨', name:'Van Kilimi',         region:'dogu-anadolu',rarity:'common',color:'#5B9BD5' },
  { id:'gobekli',   emoji:'⚱️', name:'Göbekli Tepe',       region:'guneydogu', rarity:'legendary',color:'#E07B6A' },
  { id:'antep-bak', emoji:'🍯', name:'Antep Baklavası',    region:'guneydogu', rarity:'common', color:'#E07B6A' },
];
const RARITY_COLORS = { common:'#aaa', rare:'#4facfe', epic:'#a855f7', legendary:'#f9c74f' };
const RARITY_LABELS = { common:'Yaygın', rare:'Nadir', epic:'Epik', legendary:'Efsanevi' };

// ── DİJİTAL VATANDAŞLIK SENARYOLARI ─────────────────────────
const DV_SCENARIOS = [
  {
    text: 'Sosyal medyada Türkiye'nin tarihi bir yapısına ait yanlış bilgi paylaşan bir gönderi gördün. Ne yaparsın?',
    options: [
      'Görmezden gel, önemli değil',
      'Doğru bilgiyi kaynağıyla (Wikipedia, müze sitesi) yorum olarak paylaş',
      'Gönderiyi öfkeyle eleştir',
      'Kendi yanlış bilgini ekle',
    ],
    correct: 1,
    explanation: 'Doğru bilgiyi güvenilir kaynakla nazikçe paylaşmak dijital vatandaşlığın en etkili yoludur.'
  },
  {
    text: 'Bir antik site ziyaretinde arkadaşın bir taş parçasını "hatıra olarak" almak istiyor. Tepkin ne olur?',
    options: [
      'Tamam, küçük bir parça fark etmez',
      'Bunu yapmamasını istersin — her parça mirasın bir parçasıdır ve yasadışıdır',
      'Sen de bir parça alırsın',
      'Görmezden gelirsin',
    ],
    correct: 1,
    explanation: 'Arkeolojik alanlarda herhangi bir nesne almak yasadışıdır ve kültürel mirasa zarar verir.'
  },
  {
    text: 'Bir web sitesinde eski bir Osmanlı minyatürünü "ücretsiz kullan" diye reklam gördün. Ne yaparsın?',
    options: [
      'Hemen indirip kullanırsın',
      'Telif hakkını ve kaynağını kontrol eder, gerekirse müzeden izin alırsın',
      'Paylaşıp herkese söylersin',
      'Müzeye şikâyet edersin',
    ],
    correct: 1,
    explanation: 'Dijital ortamdaki kültürel eserlerin de telif hakları vardır; kullanmadan önce lisansı kontrol etmek gerekir.'
  },
  {
    text: 'Türkiye'ye özgü bir geleneksel yemeği yabancı bir site "Yunan mutfağı" olarak tanıtıyor. Ne yaparsın?',
    options: [
      'Bir şey yapamam, uluslararası siteler böyledir',
      'Sitenin iletişim formuna tarihsel kaynaklar göstererek kibar bir düzeltme mesajı yazarsın',
      'Sosyal medyada söver geçersin',
      'Yok sayarsın',
    ],
    correct: 1,
    explanation: 'Kültürel mirası dijital ortamda da korumak için bilgili ve kibar müdahale en etkili yoldur.'
  },
  {
    text: 'Okulda bir proje için bir fotoğrafçının Türk kültürüne ait fotoğraflarını izinsiz kullanmak istiyorsun. Doğru davranış nedir?',
    options: [
      'Sadece okul ödevi, sorun olmaz',
      'Fotoğrafçıdan izin istersin veya Creative Commons lisanslı alternatif ararsın',
      'Fotoğrafı biraz değiştirip kullanırsın',
      'İnternetten rastgele başka bir fotoğraf alırsın',
    ],
    correct: 1,
    explanation: 'Okul ödevleri dahil her kullanımda telif hakkına saygı göstermek dijital vatandaşlığın temelidir.'
  },
];



// ── SES MOTORU ───────────────────────────────────────────────
const SFX = (() => {
  let ctx = null;
  const get = () => { if (!ctx) ctx = new (window.AudioContext||window.webkitAudioContext)(); return ctx; };
  function tone(f,d,t='sine',v=0.25,delay=0){
    try{
      const c=get(),o=c.createOscillator(),g=c.createGain();
      o.connect(g);g.connect(c.destination);
      o.type=t;o.frequency.value=f;
      g.gain.setValueAtTime(v,c.currentTime+delay);
      g.gain.exponentialRampToValueAtTime(0.001,c.currentTime+delay+d);
      o.start(c.currentTime+delay);o.stop(c.currentTime+delay+d+0.05);
    }catch(e){}
  }
  return {
    click()  { tone(660,0.07); },
    correct(){ tone(523,0.12);tone(659,0.12,'sine',0.25,0.13);tone(784,0.22,'sine',0.25,0.26); },
    wrong()  { tone(220,0.1,'sawtooth',0.2);tone(180,0.18,'sawtooth',0.2,0.13); },
    badge()  { [523,659,784,1047].forEach((f,i)=>tone(f,0.2,'sine',0.28,i*0.11)); },
    fanfare(){ const n=[523,523,523,415,523,659,523],d=[0.14,0.14,0.14,0.1,0.2,0.4,0.3];let t=0;n.forEach((f,i)=>{tone(f,d[i],'triangle',0.32,t);t+=d[i];}); }
  };
})();

// ── OYUN DURUMU ──────────────────────────────────────────────
const State = {
  playerName: '',
  completedRegions: {},
  currentRegion: null,
  currentQIdx: 0,
  sessionScore: 0,
  quizScore: 0,
  quizCorrect: 0,
  totalAnswered: 0,
  totalCorrect: 0,
  responseTimes: [],
  character: 'kasif',
  unlockedCards: [],
  timerInterval: null,
  timeLeft: 0,
  questionStartTime: 0,
  // v3: detaylı ilerleme — { regionId: { category: { type: {answered, correct} } } }
  progress: {},
  // Multi-select & drag için geçici durum
  multiSelected: new Set(),
  dragPairs: {},      // { leftItem: rightItem }
  dragSelectedLeft: null,

  save(){
    localStorage.setItem('tkf3', JSON.stringify({
      playerName: this.playerName,
      completedRegions: this.completedRegions,
      sessionScore: this.sessionScore,
      totalAnswered: this.totalAnswered,
      totalCorrect: this.totalCorrect,
      responseTimes: this.responseTimes,
      progress: this.progress,
    }));
  },
  load(){
    const raw = localStorage.getItem('tkf3') || localStorage.getItem('tkf2');
    if (!raw) return false;
    try {
      const d = JSON.parse(raw);
      this.playerName = d.playerName || '';
      this.completedRegions = d.completedRegions || {};
      this.sessionScore = d.sessionScore || 0;
      this.totalAnswered = d.totalAnswered || 0;
      this.totalCorrect = d.totalCorrect || 0;
      this.responseTimes = d.responseTimes || [];
      this.progress = d.progress || {};
      this.character = d.character || 'kasif';
      this.unlockedCards = d.unlockedCards || [];
      return true;
    } catch { return false; }
  },
  reset(){
    this.completedRegions={};this.sessionScore=0;
    this.totalAnswered=0;this.totalCorrect=0;this.responseTimes=[];
    this.progress={};this.character='kasif';this.unlockedCards=[];
    localStorage.removeItem('tkf2');
    localStorage.removeItem('tkf3');
  },

  // ── İlerleme kayıt yardımcısı ──
  trackAnswer(regionId, category, type, isCorrect){
    if(!this.progress[regionId]) this.progress[regionId]={};
    if(!this.progress[regionId][category]) this.progress[regionId][category]={};
    if(!this.progress[regionId][category][type]) this.progress[regionId][category][type]={answered:0,correct:0};
    this.progress[regionId][category][type].answered++;
    if(isCorrect) this.progress[regionId][category][type].correct++;
  },

  // Kategori bazında doğru/toplam (bölge için)
  categoryStats(regionId, category){
    const c = this.progress[regionId]?.[category];
    if(!c) return {answered:0, correct:0};
    return TYPE_KEYS.reduce((acc,t)=>{
      const s = c[t]||{answered:0,correct:0};
      acc.answered += s.answered; acc.correct += s.correct;
      return acc;
    },{answered:0,correct:0});
  },

  // Soru tipi bazında doğru/toplam (bölge için)
  typeStats(regionId, type){
    const r = this.progress[regionId];
    if(!r) return {answered:0, correct:0};
    return CATEGORY_KEYS.reduce((acc,c)=>{
      const s = r[c]?.[type]||{answered:0,correct:0};
      acc.answered += s.answered; acc.correct += s.correct;
      return acc;
    },{answered:0,correct:0});
  },

  // Bölge için toplam doğru oranı
  regionStats(regionId){
    return CATEGORY_KEYS.reduce((acc,c)=>{
      const s = this.categoryStats(regionId,c);
      acc.answered += s.answered; acc.correct += s.correct;
      return acc;
    },{answered:0,correct:0});
  }
};

// ── YARDIMCI ─────────────────────────────────────────────────
const $ = id => document.getElementById(id);

function showScreen(id){
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  const s=$('screen-'+id);
  if(s)s.classList.add('active');
}

function starsFor(score, maxScore){
  if(!maxScore) return 0;
  const pct = score/maxScore;
  if(pct>=0.85) return 3;
  if(pct>=0.60) return 2;
  if(pct>=0.35) return 1;
  return 0;
}
// Bir soru dizisi için olası maksimum puanı hesapla
function maxScoreFor(questions){
  return questions.reduce((sum,q)=>{
    const base = q.type==='single'?100 : q.type==='multi'?140 : q.type==='drag'?160 : 180;
    return sum + base + 60; // 60 = anında cevap bonusu
  },0);
}
function renderStars(n){ return '⭐'.repeat(n)+'☆'.repeat(3-n); }

function confetti(){
  const colors=['#72B841','#1BBFB0','#F4D03F','#F5A42A','#9B59B6','#5B9BD5','#E07B6A'];
  for(let i=0;i<70;i++){
    const c=document.createElement('div');
    c.className='confetti-piece';
    c.style.cssText=`left:${Math.random()*100}vw;background:${colors[Math.floor(Math.random()*colors.length)]};
      width:${Math.random()*10+5}px;height:${Math.random()*14+7}px;
      border-radius:${Math.random()>.5?'50%':'3px'};
      animation-duration:${Math.random()*2+2}s;animation-delay:${Math.random()*1.5}s;`;
    document.body.appendChild(c);
    c.addEventListener('animationend',()=>c.remove());
  }
}

function createParticles(){
  const c=$('particles-intro');if(!c)return;
  for(let i=0;i<28;i++){
    const p=document.createElement('div');p.className='particle';
    const sz=Math.random()*8+3;
    p.style.cssText=`width:${sz}px;height:${sz}px;left:${Math.random()*100}%;
      animation-duration:${Math.random()*10+8}s;animation-delay:${Math.random()*8}s;
      opacity:${Math.random()*0.5+0.2};
      background:hsl(${Math.random()*60+190}deg 80% 65%/0.5);`;
    c.appendChild(p);
  }
}

// ── HARİTA ──────────────────────────────────────────────────
function initMap(){
  const hoverCard=$('region-hover-card');
  const rcIcon=$('rc-icon'),rcName=$('rc-name'),rcStatus=$('rc-status');

  document.querySelectorAll('.region-polygon').forEach(el=>{
    const rid=el.dataset.region;
    const region=REGIONS.find(r=>r.id===rid);
    if(!region)return;

    if(State.completedRegions[rid]) el.classList.add('completed');

    el.addEventListener('mouseenter',()=>{
      const done=State.completedRegions[rid];
      rcIcon.textContent=region.icon;
      rcName.textContent=`${region.number}. ${region.name}`;
      rcStatus.textContent=done?` — ${region.badge} ✓ (${done.score} puan)`:' — Keşfedilmedi';
      rcStatus.style.color=done?'var(--accent)':'var(--text-dim)';
      hoverCard.style.display='flex';
    });
    el.addEventListener('mouseleave',()=>{ hoverCard.style.display='none'; });
    el.addEventListener('click',()=>{ SFX.click(); enterRegion(rid); });
  });

  // Etiket tıklaması
  document.querySelectorAll('.region-label').forEach(t=>{
    t.style.cursor='pointer';
    t.addEventListener('click',()=>{ SFX.click(); enterRegion(t.dataset.region); });
  });
}

function updateMapUI(){
  $('header-player-name').textContent=`🗺️ ${State.playerName}`;
  const done=Object.keys(State.completedRegions).length;
  $('progress-text').textContent=`${done}/7 Bölge Tamamlandı`;
  $('total-score').textContent=State.sessionScore.toLocaleString('tr-TR');

  document.querySelectorAll('.region-polygon').forEach(el=>{
    el.classList.toggle('completed',!!State.completedRegions[el.dataset.region]);
  });

  // Rozetler — kazanılanlar SVG, kazanılmamışlar gri/kilitli ön gösterim
  const strip=$('badges-strip');
  clearEl(strip);
  REGIONS.forEach(r=>{
    const earned = !!State.completedRegions[r.id];
    const wrap = el('div', {className: 'strip-badge'+(earned?' earned':' locked'), title:`${r.number}. ${r.badge}`});
    wrap.dataset.label = `${r.number}. ${r.badge}`;
    const inner = el('div', {className:'strip-badge-inner'});
    if(typeof REGION_BADGES !== 'undefined' && REGION_BADGES[r.id]){
      const tpl = new DOMParser().parseFromString(REGION_BADGES[r.id], 'image/svg+xml');
      const svg = tpl.documentElement;
      if(svg && svg.nodeName.toLowerCase()==='svg') inner.appendChild(document.importNode(svg, true));
    } else {
      inner.textContent = r.icon;
    }
    wrap.appendChild(inner);
    // İlerleme halkası — bölgenin doğru/toplam oranı
    const rs = State.regionStats(r.id);
    const totalQs = r.questions.length;
    const pct = totalQs ? Math.round(rs.correct/totalQs*100) : 0;
    const ring = el('div',{className:'strip-badge-ring'});
    ring.style.background = `conic-gradient(${r.color} ${pct*3.6}deg, rgba(255,255,255,0.08) 0deg)`;
    wrap.appendChild(ring);
    const label = el('div', {className:'strip-badge-label', text:`${rs.correct}/${totalQs}`});
    wrap.appendChild(label);
    strip.appendChild(wrap);
  });

  if(Object.keys(State.completedRegions).length===REGIONS.length)
    setTimeout(showFinalScreen,800);
}

// ── DETAYLI İLERLEME MATRİSİ ─────────────────────────────────
function openProgressMatrix(){
  const modal = $('progress-modal');
  if(!modal) return;
  const body = $('progress-modal-body');
  clearEl(body);

  // Üst: Genel özet
  const overall = el('div', {className:'pm-overall'});
  const totalQ = REGIONS.reduce((s,r)=>s+r.questions.length,0);
  const totalC = REGIONS.reduce((s,r)=>s+State.regionStats(r.id).correct,0);
  const totalA = REGIONS.reduce((s,r)=>s+State.regionStats(r.id).answered,0);
  overall.appendChild(el('div',{className:'pm-overall-row', text:`Toplam: ${totalC} doğru / ${totalA} cevaplanan / ${totalQ} soru`}));
  body.appendChild(overall);

  // Kategori başlıkları
  CATEGORY_KEYS.forEach(catKey=>{
    const cat = CATEGORIES[catKey];
    const totalCatQ = REGIONS.reduce((s,r)=>s+r.questions.filter(q=>q.category===catKey).length,0);
    const totalCatC = REGIONS.reduce((s,r)=>s+State.categoryStats(r.id,catKey).correct,0);
    const card = el('div',{className:'pm-cat-card', style:{borderColor:cat.color}});
    const header = el('div',{className:'pm-cat-header'});
    header.appendChild(el('span',{className:'pm-cat-icon', text:cat.icon, style:{color:cat.color}}));
    header.appendChild(el('div',{className:'pm-cat-title', text:cat.label}));
    header.appendChild(el('div',{className:'pm-cat-pct', text:`${totalCatC} / ${totalCatQ}`, style:{color:cat.color}}));
    card.appendChild(header);

    // Bölge satırları
    REGIONS.forEach(r=>{
      const catQs = r.questions.filter(q=>q.category===catKey);
      if(!catQs.length) return;
      const st = State.categoryStats(r.id, catKey);
      const row = el('div',{className:'pm-region-row'});
      row.appendChild(el('div',{className:'pm-region-name', text:`${r.icon} ${r.name.replace(' Bölgesi','')}`}));
      const barWrap = el('div',{className:'pm-bar-wrap'});
      // Tip bazında segmentler
      TYPE_KEYS.forEach(tk=>{
        const tQs = catQs.filter(q=>q.type===tk).length;
        if(!tQs) return;
        const tSt = (State.progress[r.id]?.[catKey]?.[tk]) || {answered:0,correct:0};
        for(let i=0;i<tQs;i++){
          const seg = el('div',{className:'pm-seg type-'+tk, title:`${QUESTION_TYPES[tk].label}`});
          if(i<tSt.correct) seg.classList.add('done');
          else if(i<tSt.answered) seg.classList.add('wrong');
          barWrap.appendChild(seg);
        }
      });
      row.appendChild(barWrap);
      row.appendChild(el('div',{className:'pm-region-stat', text:`${st.correct}/${catQs.length}`}));
      card.appendChild(row);
    });

    body.appendChild(card);
  });

  // Tip bazında özet
  const typeCard = el('div',{className:'pm-cat-card', style:{borderColor:'var(--primary)'}});
  typeCard.appendChild(el('div',{className:'pm-cat-header'}, [
    el('span',{className:'pm-cat-icon', text:'🎯'}),
    el('div',{className:'pm-cat-title', text:'Soru Tiplerine Göre'})
  ]));
  TYPE_KEYS.forEach(tk=>{
    const typ = QUESTION_TYPES[tk];
    const totalT = REGIONS.reduce((s,r)=>s+r.questions.filter(q=>q.type===tk).length,0);
    const corT = REGIONS.reduce((s,r)=>s+(CATEGORY_KEYS.reduce((c,ck)=>c+((State.progress[r.id]?.[ck]?.[tk]?.correct)||0),0)),0);
    const row = el('div',{className:'pm-region-row'});
    row.appendChild(el('div',{className:'pm-region-name', text:`${typ.icon} ${typ.label}`}));
    const bar = el('div',{className:'pm-typebar-wrap'});
    const fill = el('div',{className:'pm-typebar-fill type-'+tk, style:{width:(totalT?(corT/totalT*100):0)+'%'}});
    bar.appendChild(fill);
    row.appendChild(bar);
    row.appendChild(el('div',{className:'pm-region-stat', text:`${corT}/${totalT}`}));
    typeCard.appendChild(row);
  });
  body.appendChild(typeCard);

  modal.classList.add('open');
}
function closeProgressMatrix(){ $('progress-modal')?.classList.remove('open'); }

// ── SVG ROZET YERLEŞTİRİCİSİ ─────────────────────────────────
function injectBadgeSvg(containerId, regionId, fallbackEmoji){
  const c = $(containerId);
  if(!c) return;
  clearEl(c);
  if(typeof REGION_BADGES !== 'undefined' && REGION_BADGES[regionId]){
    // SVG'yi parse edip ekle (innerHTML kullanmadan, DOMParser ile)
    const tpl = new DOMParser().parseFromString(REGION_BADGES[regionId], 'image/svg+xml');
    const svg = tpl.documentElement;
    if(svg && svg.nodeName.toLowerCase()==='svg'){
      c.appendChild(document.importNode(svg, true));
      c.classList.add('has-svg');
      return;
    }
  }
  c.textContent = fallbackEmoji || '🏛️';
}

// ── BÖLGE GİRİŞ ─────────────────────────────────────────────
function enterRegion(rid){
  const region=REGIONS.find(r=>r.id===rid);
  if(!region)return;
  State.currentRegion=region;

  $('ri-bg').style.background=`radial-gradient(ellipse at center,${region.color}55,var(--bg-dark))`;
  $('ri-flag').textContent=region.icon;
  $('ri-flag').style.background=`${region.color}33`;
  $('ri-name').textContent=`${region.number}. ${region.name}`;
  $('ri-story-text').textContent=region.story;
  $('ri-mission').textContent=region.mission;
  // SVG rozet
  injectBadgeSvg('ri-badge-icon', region.id, region.icon);
  $('ri-badge-name').textContent=region.badge;

  // ── Bölge tamamlanmış mı? Tekrar oynamayı engelle ──
  const done = State.completedRegions[region.id];
  const startBtn = $('btn-start-quiz');
  const banner = $('ri-completed-banner');
  const detail = $('ri-completed-detail');
  const tagline = $('ri-badge-tagline');
  const missionCard = $('ri-mission-card');
  if(done){
    const pct = Math.round((done.score/(done.maxScore||1000))*100);
    if(startBtn) startBtn.style.display='none';
    if(banner) banner.style.display='flex';
    if(detail) detail.textContent = `${done.score.toLocaleString('tr-TR')} / ${(done.maxScore||1000).toLocaleString('tr-TR')} puan · Başarın %${pct} · ${renderStars(done.stars||0)}`;
    if(tagline) tagline.textContent = 'Kazandığın unvan:';
    if(missionCard) missionCard.style.display='none';
  } else {
    if(startBtn) startBtn.style.display='';
    if(banner) banner.style.display='none';
    if(tagline) tagline.textContent = 'Bu bölgeyi tamamlarsan kazanacağın unvan:';
    if(missionCard) missionCard.style.display='';
  }

  // Bilgi kartları — güvenli DOM
  const infoGrid=$('ri-info-grid');
  if(infoGrid){
    clearEl(infoGrid);
    region.infoCards.forEach(c=>{
      const card = el('div',{className:'info-card'});
      card.appendChild(el('span',{className:'info-label', text:c.label}));
      card.appendChild(el('span',{className:'info-value', text:c.value}));
      infoGrid.appendChild(card);
    });
  }

  // Kategori önizleme — bu bölgede her kategoriden kaç soru var?
  const previewWrap = $('ri-category-preview');
  if(previewWrap){
    clearEl(previewWrap);
    CATEGORY_KEYS.forEach(catKey=>{
      const count = region.questions.filter(q=>q.category===catKey).length;
      if(count===0) return;
      const stats = State.categoryStats(region.id, catKey);
      const cat = CATEGORIES[catKey];
      const chip = el('div', {className:'cat-preview-chip', style:{borderColor:cat.color, color:cat.color}});
      chip.appendChild(document.createTextNode(`${cat.icon} ${cat.label} `));
      const c = el('strong', {text:`${stats.correct}/${count}`, style:{marginLeft:'4px'}});
      chip.appendChild(c);
      previewWrap.appendChild(chip);
    });
  }

  showScreen('region-intro');
}

// ── QUIZ ─────────────────────────────────────────────────────
const Q_TIME=60;

function shuffle(arr){
  const a=[...arr];
  for(let i=a.length-1;i>0;i--){
    const j=Math.floor(Math.random()*(i+1));
    [a[i],a[j]]=[a[j],a[i]];
  }
  return a;
}

function startQuiz(){
  const r=State.currentRegion;
  // Her testte tam 10 soru: 9 rastgele (drag hariç) + 1 drag (eşleştirme) en sonda
  const QUIZ_SIZE = 10;
  const allShuffled = shuffle(r.questions);
  const dragPool    = allShuffled.filter(q => (q.type||'single') === 'drag');
  const otherPool   = allShuffled.filter(q => (q.type||'single') !== 'drag');
  const dragQ       = dragPool[0] || null;
  const others      = otherPool.slice(0, dragQ ? QUIZ_SIZE - 1 : QUIZ_SIZE);
  const picked      = dragQ ? [...others, dragQ] : others;

  State.shuffledQuestions = picked.map(q=>{
    if(q.type === 'single' || q.type === 'scenario'){
      const correctText = q.options[q.correct];
      const shuffledOpts = shuffle(q.options);
      return {...q, options: shuffledOpts, correct: shuffledOpts.indexOf(correctText)};
    }
    if(q.type === 'multi'){
      const correctTexts = (q.correct||[]).map(i => q.options[i]);
      const shuffledOpts = shuffle(q.options);
      const newCorrect = correctTexts.map(t => shuffledOpts.indexOf(t)).sort((a,b)=>a-b);
      return {...q, options: shuffledOpts, correct: newCorrect};
    }
    // drag: renderDrag içinde sağ sütun shuffle'lanıyor; sol/değer çiftleri korunur
    return {...q};
  });
  State.currentQIdx=0;State.quizScore=0;State.quizCorrect=0;
  State.quizMaxScore = maxScoreFor(State.shuffledQuestions);
  $('q-region-name').textContent=`${r.icon} ${r.name}`;
  $('q-score-live').textContent='0';

  // Noktalar
  const dots=$('q-dots');dots.innerHTML='';
  State.shuffledQuestions.forEach((_,i)=>{
    const d=document.createElement('div');
    d.className='q-dot'+(i===0?' current':'');
    d.id=`q-dot-${i}`;dots.appendChild(d);
  });

  showScreen('quiz');
  renderQuestion();
}

// Küçük yardımcılar — güvenli DOM oluşturma
function el(tag, props={}, children=[]){
  const e = document.createElement(tag);
  for(const k in props){
    if(k==='className') e.className = props[k];
    else if(k==='dataset') Object.assign(e.dataset, props[k]);
    else if(k==='style' && typeof props[k]==='object') Object.assign(e.style, props[k]);
    else if(k.startsWith('on') && typeof props[k]==='function') e.addEventListener(k.slice(2).toLowerCase(), props[k]);
    else if(k==='text') e.textContent = props[k];
    else e[k] = props[k];
  }
  for(const c of [].concat(children||[])) if(c) e.appendChild(typeof c==='string'?document.createTextNode(c):c);
  return e;
}
function clearEl(n){ while(n.firstChild) n.removeChild(n.firstChild); }

function renderQuestion(){
  const qi=State.currentQIdx,q=State.shuffledQuestions[qi];
  const total=State.shuffledQuestions.length;
  $('answer-feedback').style.display='none';

  // Header: soru sırası + kategori chip + tip chip
  const num = $('q-number');
  clearEl(num);
  num.appendChild(document.createTextNode(`Soru ${qi+1} / ${total} `));
  const cat = CATEGORIES[q.category];
  if(cat){
    const chip = el('span',{className:'q-type-chip', style:{background:cat.color+'33', color:cat.color}, text:`${cat.icon} ${cat.label}`});
    num.appendChild(chip);
  }
  const typ = QUESTION_TYPES[q.type];
  if(typ){
    const chip = el('span',{className:'q-type-chip type-'+q.type, text:`${typ.icon} ${typ.label}`});
    num.appendChild(chip);
  }

  $('q-text').textContent=q.text;

  // Görsel — loading state ile
  const wrap=$('q-image-wrap'),img=$('q-image'),cap=$('q-image-caption'),loader=$('q-image-loader');
  if(q.wikiTitle){
    // Görseli hemen göster (loading durumunda)
    wrap.style.display='flex';
    img.style.display='none';
    cap.textContent = q.imageCaption || '';
    if(loader) loader.style.display='flex';
    img.removeAttribute('src');
    fetchWikiThumb(q.wikiTitle).then(src=>{
      // Soru değişmiş olabilir — sadece hâlâ aynı sorudaysak göster
      if(State.currentQIdx !== qi) return;
      if(!src){
        if(loader){
          loader.innerHTML='';
          loader.appendChild(el('span',{text:'🖼️ Görsel bulunamadı'}));
        }
        return;
      }
      img.onload = ()=>{
        if(loader) loader.style.display='none';
        img.style.display='block';
      };
      img.onerror = ()=>{
        if(loader){
          loader.innerHTML='';
          loader.appendChild(el('span',{text:'🖼️ Görsel yüklenemedi'}));
        }
      };
      img.src = src;
    });
  } else {
    wrap.style.display='none';
  }

  // Dot güncelle
  State.shuffledQuestions.forEach((_,i)=>{
    const d=$(`q-dot-${i}`);if(!d)return;
    if(i===qi) d.className='q-dot current';
  });

  // Seçenek render'ı tipe göre
  const opts=$('q-options');
  opts.className='options-grid type-'+q.type;
  clearEl(opts);
  State.multiSelected = new Set();
  State.dragPairs = {};
  State.dragSelectedLeft = null;

  if(q.type==='multi')        renderMulti(q, opts);
  else if(q.type==='drag')    renderDrag(q, opts);
  else                        renderSingleOrScenario(q, opts);

  // Timer — her soru tipi için 60 saniye
  clearInterval(State.timerInterval);
  const tMax = 60;
  State.timeLeft=tMax;
  const bar=$('timer-bar');bar.style.width='100%';bar.classList.remove('danger');
  const secEl=$('q-timer-sec');
  if(secEl) secEl.textContent = Math.ceil(tMax);
  State.questionStartTime=Date.now();
  State.timerInterval=setInterval(()=>{
    State.timeLeft-=0.1;
    const pct=Math.max(0,(State.timeLeft/tMax)*100);
    bar.style.width=pct+'%';
    if(secEl) secEl.textContent = Math.max(0, Math.ceil(State.timeLeft));
    if(pct<30){
      bar.classList.add('danger');
      $('q-timer-num')?.classList.add('danger');
    } else {
      $('q-timer-num')?.classList.remove('danger');
    }
    if(State.timeLeft<=0){clearInterval(State.timerInterval);submitAnswer(true);}
  },100);
}

// ── TEK CEVAP / SENARYO ──────────────────────────────────────
function renderSingleOrScenario(q, opts){
  ['A','B','C','D'].forEach((letter,i)=>{
    const btn = el('button', { className: 'option-btn', onclick: () => selectSingle(i) });
    btn.appendChild(el('span', { className: 'opt-letter', text: letter }));
    btn.appendChild(document.createTextNode(q.options[i]));
    opts.appendChild(btn);
  });
}

// ── ÇOKLU CEVAP ──────────────────────────────────────────────
function renderMulti(q, opts){
  opts.appendChild(el('div', {className:'multi-hint', text:'💡 Birden fazla doğru cevap var — tümünü işaretle.'}));
  ['A','B','C','D'].forEach((letter,i)=>{
    const check = el('span', {className:'multi-check', text:'☐'});
    const btn = el('button', { className: 'option-btn multi', onclick: () => {
      if(State.multiSelected.has(i)){
        State.multiSelected.delete(i);
        btn.classList.remove('selected');
        check.textContent='☐';
      } else {
        State.multiSelected.add(i);
        btn.classList.add('selected');
        check.textContent='☑';
      }
      $('btn-submit-question').disabled = State.multiSelected.size===0;
    }});
    btn.appendChild(el('span', {className:'opt-letter', text: letter}));
    btn.appendChild(check);
    btn.appendChild(document.createTextNode(q.options[i]));
    opts.appendChild(btn);
  });
  const submit = el('button', { id:'btn-submit-question', className:'btn-primary submit-q-btn', text:'Cevabı Onayla', disabled:true, onclick:()=>submitAnswer(false) });
  opts.appendChild(submit);
}

// ── EŞLEŞTİRME ───────────────────────────────────────────────
function renderDrag(q, opts){
  const pairs = q.options.map(o => {
    const [l,r] = o.split('|').map(s=>s.trim());
    return {left:l, right:r};
  });
  const lefts = pairs.map(p=>p.left);
  const rights = shuffle(pairs.map(p=>p.right));
  q._dragPairs = pairs;

  opts.appendChild(el('div', {className:'multi-hint', text:'💡 Soldaki öğeye tıkla → sağdaki eşine tıkla. 4 çift yap.'}));

  const grid = el('div', {className:'drag-grid'});
  const leftCol = el('div', {className:'drag-col drag-left-col'});
  const midCol = el('div', {className:'drag-col drag-mid-col', id:'drag-pairs-display'});
  const rightCol = el('div', {className:'drag-col drag-right-col'});

  function refreshPairsDisplay(){
    clearEl(midCol);
    const entries = Object.entries(State.dragPairs);
    if(!entries.length){
      midCol.appendChild(el('div', {className:'drag-empty', text:'Henüz eşleşme yok'}));
      return;
    }
    entries.forEach(([l,r])=>{
      const chip = el('div', {className:'drag-pair-chip'});
      chip.appendChild(document.createTextNode(`${l} ↔ ${r} `));
      const x = el('span', {className:'pair-remove', text:'✕', onclick: ()=>{
        delete State.dragPairs[l];
        leftCol.querySelector(`button[data-val="${CSS.escape(l)}"]`)?.classList.remove('matched');
        rightCol.querySelector(`button[data-val="${CSS.escape(r)}"]`)?.classList.remove('matched');
        refreshPairsDisplay();
        $('btn-submit-question').disabled = Object.keys(State.dragPairs).length<lefts.length;
      }});
      chip.appendChild(x);
      midCol.appendChild(chip);
    });
  }

  lefts.forEach(l=>{
    const b = el('button', {className:'drag-item drag-left', dataset:{val:l}, text:l, onclick: ()=>{
      if(b.classList.contains('matched')) return;
      leftCol.querySelectorAll('.drag-left.selected').forEach(x=>x.classList.remove('selected'));
      b.classList.add('selected');
      State.dragSelectedLeft = l;
    }});
    leftCol.appendChild(b);
  });
  rights.forEach(r=>{
    const b = el('button', {className:'drag-item drag-right', dataset:{val:r}, text:r, onclick: ()=>{
      if(b.classList.contains('matched')) return;
      if(!State.dragSelectedLeft) return;
      const l = State.dragSelectedLeft;
      State.dragPairs[l] = r;
      const leftBtn = leftCol.querySelector(`button[data-val="${CSS.escape(l)}"]`);
      if(leftBtn){ leftBtn.classList.remove('selected'); leftBtn.classList.add('matched'); }
      b.classList.add('matched');
      State.dragSelectedLeft = null;
      refreshPairsDisplay();
      $('btn-submit-question').disabled = Object.keys(State.dragPairs).length<lefts.length;
    }});
    rightCol.appendChild(b);
  });

  grid.appendChild(leftCol);
  grid.appendChild(midCol);
  grid.appendChild(rightCol);
  opts.appendChild(grid);
  refreshPairsDisplay();

  const submit = el('button', { id:'btn-submit-question', className:'btn-primary submit-q-btn', text:'Cevabı Onayla', disabled:true, onclick:()=>submitAnswer(false) });
  opts.appendChild(submit);
}

// Single / scenario: anında değerlendir
function selectSingle(chosen){
  submitAnswer(false, chosen);
}

// Tüm soru tiplerini değerlendiren ortak ana fonksiyon
//   timedOut=true: süre doldu (chosen yok sayılır)
//   chosen: single/scenario için seçilen index; multi/drag için null
function submitAnswer(timedOut, chosen){
  clearInterval(State.timerInterval);
  const qi=State.currentQIdx, q=State.shuffledQuestions[qi];
  const elapsed=(Date.now()-State.questionStartTime)/1000;
  State.responseTimes.push(elapsed);
  State.totalAnswered++;

  let isOk = false;
  let userAns = null;

  if(timedOut){
    isOk = false;
  } else if(q.type==='single' || q.type==='scenario'){
    userAns = chosen;
    isOk = (chosen === q.correct);
  } else if(q.type==='multi'){
    const sel = [...State.multiSelected].sort();
    const correctArr = [...(q.correct||[])].sort();
    userAns = sel;
    isOk = (sel.length===correctArr.length && sel.every((v,i)=>v===correctArr[i]));
  } else if(q.type==='drag'){
    // q._dragPairs tüm doğru eşleşmeleri içerir
    userAns = State.dragPairs;
    isOk = q._dragPairs.every(p => State.dragPairs[p.left]===p.right);
  }

  // Görsel geri bildirim
  if(q.type==='single' || q.type==='scenario'){
    $('q-options').querySelectorAll('.option-btn').forEach((btn,i)=>{
      btn.disabled=true;
      if(i===q.correct) btn.classList.add('correct-anim');
      if(i===userAns && !isOk) btn.classList.add('wrong-anim');
    });
  } else if(q.type==='multi'){
    const correctSet = new Set(q.correct||[]);
    $('q-options').querySelectorAll('.option-btn').forEach((btn,i)=>{
      btn.disabled=true;
      if(correctSet.has(i)) btn.classList.add('correct-anim');
      else if(State.multiSelected.has(i)) btn.classList.add('wrong-anim');
    });
    const sb = $('btn-submit-question'); if(sb) sb.disabled=true;
  } else if(q.type==='drag'){
    $('q-options').querySelectorAll('.drag-left, .drag-right').forEach(b=>b.disabled=true);
    const sb = $('btn-submit-question'); if(sb) sb.disabled=true;
    // Yanlış eşleşmeleri kırmızıyla işaretle, doğruları yeşille
    const correctMap = {};
    q._dragPairs.forEach(p=>correctMap[p.left]=p.right);
    Object.entries(State.dragPairs).forEach(([l,r])=>{
      const ok = correctMap[l]===r;
      const left = $('q-options').querySelector(`.drag-left[data-val="${CSS.escape(l)}"]`);
      const right = $('q-options').querySelector(`.drag-right[data-val="${CSS.escape(r)}"]`);
      if(left) left.classList.add(ok?'correct-anim':'wrong-anim');
      if(right) right.classList.add(ok?'correct-anim':'wrong-anim');
    });
  }

  // Bölge / kategori / tip ilerlemesi
  State.trackAnswer(State.currentRegion.id, q.category, q.type, isOk);

  // Nokta güncelle
  const dot=$(`q-dot-${qi}`);
  if(dot) dot.className='q-dot '+(isOk?'correct':'wrong');

  // Puan (drag/scenario için daha yüksek)
  const baseScore = q.type==='single'?100 : q.type==='multi'?140 : q.type==='drag'?160 : 180;
  const tMax = 60;
  if(isOk){
    const bonus = Math.round((Math.max(0,State.timeLeft)/tMax)*60);
    const earned = baseScore + bonus;
    State.quizScore += earned;
    State.sessionScore += earned;
    State.quizCorrect++; State.totalCorrect++;
    SFX.correct();
  } else {
    SFX.wrong();
    if(!timedOut){
      $('q-options').classList.add('shake');
      setTimeout(()=>$('q-options').classList.remove('shake'),400);
    }
  }

  $('q-score-live').textContent=State.quizScore.toLocaleString('tr-TR');

  // Geri bildirim
  const fb=$('answer-feedback');
  $('fb-icon').textContent = isOk ? '✅' : (timedOut ? '⏰' : '❌');
  const ft=$('fb-text');
  ft.textContent = isOk ? 'Harika! Doğru cevap!' : (timedOut ? 'Süre doldu!' : 'Yanlış cevap!');
  ft.style.color = isOk ? 'var(--accent)' : 'var(--danger)';
  $('fb-explanation').textContent = q.explanation || '';
  fb.style.display='flex';
}

// Geriye uyumluluk için (eski koddan çağrılırsa)
function selectAnswer(chosen){ selectSingle(chosen); }

function nextQuestion(){
  State.currentQIdx++;
  if(State.currentQIdx>=State.shuffledQuestions.length) completeRegion();
  else renderQuestion();
}

function completeRegion(){
  const region=State.currentRegion;
  const theoreticalMax = State.quizMaxScore || maxScoreFor(State.shuffledQuestions);
  // Her bölge maksimum 1000 puana ölçekle
  const REGION_MAX = 1000;
  const scaledScore = Math.min(REGION_MAX, Math.round(State.quizScore / theoreticalMax * REGION_MAX));
  const stars = starsFor(scaledScore, REGION_MAX);
  // Toplam oturum skorunu da ölçeklendir (ham puanı çıkar, ölçekli ekle)
  State.sessionScore = State.sessionScore - State.quizScore + scaledScore;
  State.completedRegions[region.id] = { score: scaledScore, maxScore: REGION_MAX, stars, correct: State.quizCorrect };
  State.save();

  $('stars-display').textContent=renderStars(stars);
  injectBadgeSvg('bc-badge-icon', region.id, region.icon);
  $('bc-badge-name').textContent=region.badge;
  $('bc-region-name').textContent=region.name;
  $('bc-score').textContent = scaledScore.toLocaleString('tr-TR');
  const maxEl = $('bc-max-score');
  if(maxEl) maxEl.textContent = REGION_MAX.toLocaleString('tr-TR');
  // Yüzdelik gösterimi
  const pct = Math.round(scaledScore/REGION_MAX*100);
  const pctEl = $('bc-pct'); if(pctEl) pctEl.textContent = `%${pct}`;
  const pctFill = $('bc-pct-fill'); if(pctFill) pctFill.style.width = pct + '%';
  $('bc-fact').textContent=region.funFact;

  SFX.badge();confetti();
  // Miras kartları kilidi aç
  const earned = unlockCards(region.id);
  renderEarnedCards(earned);
  showScreen('region-complete');
}

// ── FİNAL ────────────────────────────────────────────────────
function showFinalScreen(){
  SFX.fanfare();confetti();setTimeout(confetti,900);
  $('final-player-name').textContent=State.playerName;
  $('fs-score').textContent=State.sessionScore.toLocaleString('tr-TR');
  const acc=State.totalAnswered>0?Math.round(State.totalCorrect/State.totalAnswered*100):0;
  $('fs-accuracy').textContent=`%${acc}`;
  const avg=State.responseTimes.length>0?(State.responseTimes.reduce((a,b)=>a+b,0)/State.responseTimes.length).toFixed(1):0;
  $('fs-time').textContent=`${avg}s`;

  const grid=$('final-badges-grid');
  if(grid){
    clearEl(grid);
    REGIONS.forEach((r,idx)=>{
      const d = State.completedRegions[r.id];
      const item = el('div', {className:'final-badge-item', style:{animationDelay:`${idx*0.1}s`}});
      const svgWrap = el('div', {className:'final-badge-svg'});
      if(typeof REGION_BADGES !== 'undefined' && REGION_BADGES[r.id]){
        const tpl = new DOMParser().parseFromString(REGION_BADGES[r.id], 'image/svg+xml');
        const svg = tpl.documentElement;
        if(svg && svg.nodeName.toLowerCase()==='svg') svgWrap.appendChild(document.importNode(svg, true));
      } else {
        svgWrap.textContent = r.icon;
      }
      item.appendChild(svgWrap);
      item.appendChild(el('div', {className:'final-badge-name', text: r.badge}));
      if(d) item.appendChild(el('div', {className:'final-badge-stars', text: renderStars(d.stars||0)}));
      grid.appendChild(item);
    });
  }

  $('cert-name').textContent=State.playerName;
  $('cert-score').textContent=State.sessionScore.toLocaleString('tr-TR');
  $('cert-date').textContent=new Date().toLocaleDateString('tr-TR',{day:'numeric',month:'long',year:'numeric'});
  // Sertifikada toplam başarı yüzdesi (7 bölge × 1000 = 7000 max)
  const TOTAL_MAX = REGIONS.length * 1000;
  const overallPct = Math.round(State.sessionScore / TOTAL_MAX * 100);
  const certPctEl = $('cert-pct'); if(certPctEl) certPctEl.textContent = `%${overallPct}`;
  const certPctFill = $('cert-pct-fill'); if(certPctFill) certPctFill.style.width = overallPct + '%';
  // Sertifikadaki rozetler — emoji yerine SVG bölge rozetleri
  const certRow = $('cert-badges-row');
  if(certRow){
    clearEl(certRow);
    REGIONS.forEach(r=>{
      const wrap = el('span',{className:'cert-badge-mini', title:r.badge});
      if(typeof REGION_BADGES !== 'undefined' && REGION_BADGES[r.id]){
        const tpl = new DOMParser().parseFromString(REGION_BADGES[r.id], 'image/svg+xml');
        const svg = tpl.documentElement;
        if(svg && svg.nodeName.toLowerCase()==='svg') wrap.appendChild(document.importNode(svg, true));
      } else {
        wrap.textContent = r.icon;
      }
      certRow.appendChild(wrap);
    });
  }

  showScreen('final');
}


// ── KARAKTER SEÇİMİ ─────────────────────────────────────────
function selectCharacter(charKey){
  State.character = charKey;
  State.save();
  initMap(); updateMapUI(); showScreen('map');
}

// ── MİRAS KARTI KİLİT AÇMA ───────────────────────────────────
function unlockCards(regionId){
  const toUnlock = HERITAGE_CARDS.filter(c => c.region === regionId && !State.unlockedCards.includes(c.id));
  toUnlock.forEach(c => State.unlockedCards.push(c.id));
  if(toUnlock.length) State.save();
  return toUnlock;
}

function renderEarnedCards(cards){
  const wrap = $('bc-cards-earned');
  if(!wrap) return;
  if(!cards || !cards.length){ wrap.innerHTML=''; return; }
  const inner = el('div',{className:'cards-earned-wrap'});
  inner.appendChild(el('h4',{text:'🃏 Yeni Kartlar Kazandın!'}));
  const list = el('div',{className:'cards-earned-list'});
  cards.forEach(c=>{
    const mini = el('div',{className:'earned-card-mini'});
    mini.appendChild(el('span',{text:c.emoji}));
    mini.appendChild(el('span',{text:c.name, style:{fontWeight:'600'}}));
    const rlabel = el('span',{text:RARITY_LABELS[c.rarity]||c.rarity});
    rlabel.style.color = RARITY_COLORS[c.rarity]||'#aaa';
    mini.appendChild(rlabel);
    list.appendChild(mini);
  });
  inner.appendChild(list);
  wrap.innerHTML='';
  wrap.appendChild(inner);
}

// ── KARTLAR EKRANI ────────────────────────────────────────────
function showCards(){
  const grid = $('heritage-grid');
  const summary = $('cards-summary');
  if(!grid) return;
  grid.innerHTML = '';
  const total = HERITAGE_CARDS.length;
  const unlocked = State.unlockedCards.length;
  if(summary) summary.textContent = `${unlocked} / ${total} kart açıldı — bölgeleri tamamlayarak hepsini topla!`;
  HERITAGE_CARDS.forEach(c=>{
    const isUnlocked = State.unlockedCards.includes(c.id);
    const item = el('div',{className:'heritage-card-item'+(isUnlocked?'':' locked')});
    item.appendChild(el('span',{className:'card-emoji', text: isUnlocked ? c.emoji : '🔒'}));
    item.appendChild(el('span',{className:'card-name',  text: isUnlocked ? c.name : '???'}));
    const rl = el('span',{className:'card-rarity', text: RARITY_LABELS[c.rarity]||c.rarity});
    rl.style.background = isUnlocked ? (RARITY_COLORS[c.rarity]+'22') : 'rgba(255,255,255,0.06)';
    rl.style.color = isUnlocked ? RARITY_COLORS[c.rarity] : '#666';
    item.appendChild(rl);
    grid.appendChild(item);
  });
  showScreen('cards');
}

// ── ÖĞRETMEN PANELİ ───────────────────────────────────────────
function showTeacher(){
  const statsWrap = $('tp-stats');
  const regionsWrap = $('tp-regions');
  if(!statsWrap || !regionsWrap) return;
  statsWrap.innerHTML = '';
  regionsWrap.innerHTML = '';

  const totalQ = REGIONS.reduce((s,r)=>s+r.questions.length, 0);
  const totalC = State.totalCorrect;
  const totalA = State.totalAnswered;
  const acc = totalA ? Math.round(totalC/totalA*100) : 0;
  const cardsCount = State.unlockedCards.length;

  const stats = [
    { val: State.sessionScore.toLocaleString('tr-TR'), lbl: 'Toplam Puan' },
    { val: `%${acc}`, lbl: 'Doğruluk Oranı' },
    { val: `${Object.keys(State.completedRegions).length}/7`, lbl: 'Tamamlanan Bölge' },
    { val: `${totalC}/${totalA}`, lbl: 'Doğru / Cevaplanan' },
    { val: cardsCount, lbl: 'Açılan Kart' },
    { val: CHARACTERS[State.character]?.label || State.character, lbl: 'Karakter' },
  ];
  stats.forEach(s=>{
    const card = el('div',{className:'tp-stat-card'});
    card.appendChild(el('div',{className:'tp-val', text:String(s.val)}));
    card.appendChild(el('div',{className:'tp-lbl', text:s.lbl}));
    statsWrap.appendChild(card);
  });

  REGIONS.forEach(r=>{
    const done = State.completedRegions[r.id];
    const pct = done ? Math.round(done.score/1000*100) : 0;
    const row = el('div',{className:'tp-region-row'});
    row.appendChild(el('span',{className:'tp-region-name', text:`${r.icon} ${r.name}`}));
    const barWrap = el('div',{className:'tp-bar-wrap'});
    const bar = el('div',{className:'tp-bar'});
    bar.style.width = pct + '%';
    bar.style.background = r.color;
    barWrap.appendChild(bar);
    row.appendChild(barWrap);
    row.appendChild(el('span',{className:'tp-pct', text: done ? `%${pct}` : '—'}));
    regionsWrap.appendChild(row);
  });

  showScreen('teacher');
}

// ── DİJİTAL VATANDAŞLIK ───────────────────────────────────────
let dvIndex = 0, dvScore = 0;

function startDigital(){
  dvIndex = 0; dvScore = 0;
  $('dv-intro').style.display = 'none';
  $('dv-result').style.display = 'none';
  $('dv-question').style.display = 'flex';
  $('dv-question').style.flexDirection = 'column';
  renderDV();
}

function renderDV(){
  const s = DV_SCENARIOS[dvIndex];
  $('dv-progress').textContent = `Senaryo ${dvIndex+1} / ${DV_SCENARIOS.length}`;
  $('dv-text').textContent = s.text;
  const optWrap = $('dv-options');
  optWrap.innerHTML = '';
  $('dv-feedback').style.display = 'none';
  $('btn-dv-next').style.display = 'none';
  s.options.forEach((opt, i) => {
    const btn = el('button',{className:'dv-option-btn', text: opt});
    btn.addEventListener('click', ()=> answerDV(i));
    optWrap.appendChild(btn);
  });
}

function answerDV(chosen){
  const s = DV_SCENARIOS[dvIndex];
  const isOk = chosen === s.correct;
  if(isOk) dvScore++;
  const buttons = $('dv-options').querySelectorAll('.dv-option-btn');
  buttons.forEach((b,i)=>{
    b.disabled = true;
    if(i===s.correct) b.classList.add('dv-correct');
    else if(i===chosen && !isOk) b.classList.add('dv-wrong');
  });
  const fb = $('dv-feedback');
  fb.textContent = (isOk ? '✅ ' : '❌ ') + s.explanation;
  fb.style.display = 'block';
  fb.style.color = isOk ? 'var(--accent)' : 'var(--danger)';
  $('btn-dv-next').style.display = '';
}

function nextDV(){
  dvIndex++;
  if(dvIndex >= DV_SCENARIOS.length){
    $('dv-question').style.display = 'none';
    const pct = Math.round(dvScore/DV_SCENARIOS.length*100);
    $('dv-result-score').textContent = `${dvScore}/${DV_SCENARIOS.length}`;
    $('dv-result-text').textContent = pct===100
      ? '🏆 Mükemmel! Dijital vatandaşlık konusunda uzmansın!'
      : pct>=60
        ? '👍 İyi iş! Dijital miras bilincin güçlü.'
        : '📚 Biraz daha öğrenmek için tekrar dene!';
    $('dv-result').style.display = 'flex';
    $('dv-result').style.flexDirection = 'column';
    $('dv-result').style.alignItems = 'center';
  } else {
    renderDV();
  }
}


// ── KÜLTÜREL MİRAS AI SOHBET ─────────────────────────────────
const AI_SYSTEM_PROMPT = `Sen "Kültürel Miras AI" adlı bir yapay zeka asistanısın. Görevin, yalnızca Türkiye'nin kültürel mirası konusunda yardımcı olmaktır.

Cevaplayabileceğin konular:
- Türkiye'deki UNESCO Dünya Mirası alanları
- Anadolu uygarlıkları ve tarihi yapılar
- Türk geleneksel el sanatları ve zanaatı
- Yöresel Türk mutfağı ve yemek kültürü
- Türk halk müziği, dansları ve folklor
- Türkiye'nin 7 coğrafi bölgesindeki kültürel özellikler
- Türkiye'deki arkeolojik alanlar ve müzeler
- Somut olmayan kültürel miras (ebru, Karagöz, sema vb.)
- Yapay zeka ve kültürel mirasın korunması

Bu konuların dışındaki sorular için şunu söyle:
"Bu konu yetkim dışında. Yalnızca Türkiye'nin kültürel mirası konularında yardımcı olabilirim. 🏛️"

Türkçe cevap ver. Kısa, bilgilendirici ve samimi ol.`;

let aiMessages = [];

async function sendAIMessage(){
  const input = $('ai-input');
  const text = input.value.trim();
  if(!text) return;

  const apiKey = ($('ai-api-key')?.value || '').trim();
  if(!apiKey){
    appendAIMessage('system', '⚠️ Lütfen önce Anthropic API anahtarınızı girin.');
    return;
  }

  input.value = '';
  appendAIMessage('user', text);
  aiMessages.push({ role: 'user', content: text });

  const sendBtn = $('ai-send-btn');
  if(sendBtn){ sendBtn.disabled = true; sendBtn.textContent = '...'; }

  try {
    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
        'anthropic-dangerous-direct-browser-access': 'true',
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 500,
        system: AI_SYSTEM_PROMPT,
        messages: aiMessages.slice(-10), // son 10 mesaj (context)
      }),
    });

    if(!res.ok){
      const err = await res.json().catch(()=>({error:{message:'Bilinmeyen hata'}}));
      throw new Error(err.error?.message || `HTTP ${res.status}`);
    }

    const data = await res.json();
    const reply = data.content?.[0]?.text || '(Yanıt alınamadı)';
    aiMessages.push({ role: 'assistant', content: reply });
    appendAIMessage('assistant', reply);
  } catch(e){
    appendAIMessage('system', `❌ Hata: ${e.message}`);
  } finally {
    if(sendBtn){ sendBtn.disabled = false; sendBtn.textContent = 'Gönder'; }
    $('ai-input')?.focus();
  }
}

function appendAIMessage(role, text){
  const log = $('ai-log');
  if(!log) return;
  const div = document.createElement('div');
  div.className = 'ai-msg ai-msg-' + role;
  if(role === 'assistant') {
    const lbl = document.createElement('div');
    lbl.className = 'ai-msg-label';
    lbl.textContent = '🏛️ Kültürel Miras AI';
    div.appendChild(lbl);
  }
  const bubble = document.createElement('div');
  bubble.className = 'ai-bubble';
  bubble.textContent = text;
  div.appendChild(bubble);
  log.appendChild(div);
  log.scrollTop = log.scrollHeight;
}

function openAIChat(){
  aiMessages = [];
  const log = $('ai-log');
  if(log){
    log.innerHTML = '';
    appendAIMessage('assistant', 'Merhaba! Ben Kültürel Miras AI. Türkiye'nin tarihi yapıları, UNESCO mirası, geleneksel el sanatları, yöresel mutfak ve halk kültürü hakkında sorularını yanıtlayabilirim. Ne öğrenmek istersin? 🏛️');
  }
  showScreen('ai-chat');
  setTimeout(()=>$('ai-input')?.focus(), 400);
}

// ── ANA BAŞLATICI ────────────────────────────────────────────
window.addEventListener('DOMContentLoaded',()=>{
  // Kayıtlı ilerlemeyi yükle (varsa)
  State.load();

  createParticles();

  // İlerleme modal wiring
  $('btn-progress-open')?.addEventListener('click',()=>{ SFX.click(); openProgressMatrix(); });
  $('btn-progress-close')?.addEventListener('click',()=>{ SFX.click(); closeProgressMatrix(); });
  $('btn-progress-back')?.addEventListener('click',()=>{ SFX.click(); closeProgressMatrix(); });
  $('pm-scrim')?.addEventListener('click',()=>{ closeProgressMatrix(); });
  $('btn-progress-reset')?.addEventListener('click',()=>{
    if(confirm('Tüm ilerlemen silinecek. Emin misin?')){
      SFX.click();
      State.reset();
      State.playerName = State.playerName; // ismi tut
      State.save();
      closeProgressMatrix();
      updateMapUI();
    }
  });

  $('btn-start').addEventListener('click',()=>{ SFX.click(); showScreen('name'); setTimeout(()=>$('player-name-input').focus(),400); });
  $('btn-about').addEventListener('click',()=>{ SFX.click(); showScreen('about'); });
  $('btn-back-intro').addEventListener('click',()=>{ SFX.click(); showScreen('intro'); });
  $('btn-back-from-about').addEventListener('click',()=>{ SFX.click(); showScreen('intro'); });
  $('player-name-input').addEventListener('keydown',e=>{ if(e.key==='Enter')$('btn-enter-game').click(); });
  $('btn-enter-game').addEventListener('click',()=>{
    const name=$('player-name-input').value.trim();
    if(!name){
      $('player-name-input').style.borderColor='var(--danger)';
      setTimeout(()=>$('player-name-input').style.borderColor='',1500);
      $('player-name-input').focus();return;
    }
    SFX.click();
    State.reset();State.playerName=name;State.save();
    showScreen('character');
  });
  $('btn-start-quiz').addEventListener('click',()=>{ SFX.click(); startQuiz(); });
  $('btn-back-map').addEventListener('click',()=>{ SFX.click(); showScreen('map'); });
  $('btn-next-q').addEventListener('click',()=>{ SFX.click(); nextQuestion(); });
  $('btn-continue-map').addEventListener('click',()=>{ SFX.click(); updateMapUI(); showScreen('map'); });
  $('btn-print-cert').addEventListener('click',()=>{ SFX.click(); window.print(); });
  $('btn-play-again').addEventListener('click',()=>{ SFX.click(); State.reset(); $('player-name-input').value=''; showScreen('intro'); });
  $('btn-install')?.addEventListener('click',()=>PWA.install());

  // Karakter seçimi
  document.querySelectorAll('.char-btn').forEach(btn=>{
    btn.addEventListener('click',()=>{
      SFX.click();
      selectCharacter(btn.dataset.char);
    });
  });

  // Ekstra butonlar — harita ekranı
  $('btn-open-cards')?.addEventListener('click',()=>{ SFX.click(); showCards(); });
  $('btn-open-digital')?.addEventListener('click',()=>{ SFX.click(); showScreen('digital'); });
  $('btn-open-teacher')?.addEventListener('click',()=>{ SFX.click(); showTeacher(); });

  // Kartlar ekranı
  $('btn-cards-back')?.addEventListener('click',()=>{ SFX.click(); showScreen('map'); });

  // Dijital vatandaşlık
  $('btn-dv-start')?.addEventListener('click',()=>{ SFX.click(); startDigital(); });
  $('btn-dv-next')?.addEventListener('click',()=>{ SFX.click(); nextDV(); });
  $('btn-dv-back-intro')?.addEventListener('click',()=>{ SFX.click(); showScreen('map'); });
  $('btn-dv-back')?.addEventListener('click',()=>{ SFX.click(); showScreen('map'); });
  $('btn-dv-again')?.addEventListener('click',()=>{ SFX.click(); startDigital(); });

  // Öğretmen paneli
  $('btn-teacher-back')?.addEventListener('click',()=>{ SFX.click(); showScreen('map'); });

  // Kültürel Miras AI
  $('btn-open-ai')?.addEventListener('click',()=>{ SFX.click(); openAIChat(); });
  $('btn-ai-back')?.addEventListener('click',()=>{ SFX.click(); showScreen('map'); });
  $('ai-send-btn')?.addEventListener('click',()=>{ sendAIMessage(); });
  $('ai-input')?.addEventListener('keydown', e=>{ if(e.key==='Enter' && !e.shiftKey){ e.preventDefault(); sendAIMessage(); }});
  // API key localStorage
  const savedKey = localStorage.getItem('kmAIKey');
  if(savedKey){ const k=$('ai-api-key'); if(k) k.value=savedKey; }
  $('ai-api-key')?.addEventListener('change', e=>{ localStorage.setItem('kmAIKey', e.target.value.trim()); });
});
