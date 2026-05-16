/* ============================================================
   BÖLGE ROZETLERİ — Inline SVG
   Her bölge için sembolik kültürel miras ikonu (200×200 viewBox)
   ============================================================ */
'use strict';

const REGION_BADGES = {

  // ── KARADENİZ: Sümela Manastırı (kayalık üzerinde) ──
  'karadeniz': `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="bg-kdz" cx="50%" cy="40%" r="65%">
        <stop offset="0%" stop-color="#a8d676"/>
        <stop offset="100%" stop-color="#4a8534"/>
      </radialGradient>
      <linearGradient id="cliff-kdz" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stop-color="#8a7d6d"/>
        <stop offset="100%" stop-color="#52483c"/>
      </linearGradient>
    </defs>
    <circle cx="100" cy="100" r="95" fill="url(#bg-kdz)" stroke="#fff" stroke-width="3"/>
    <circle cx="100" cy="100" r="95" fill="none" stroke="#2d5a1f" stroke-width="2" opacity="0.4"/>
    <!-- Sis -->
    <ellipse cx="100" cy="170" rx="85" ry="14" fill="#fff" opacity="0.25"/>
    <ellipse cx="70" cy="160" rx="40" ry="8" fill="#fff" opacity="0.4"/>
    <!-- Kayalık -->
    <path d="M 30 180 L 35 110 L 55 95 L 75 100 L 90 80 L 110 90 L 135 75 L 160 95 L 168 120 L 175 180 Z" fill="url(#cliff-kdz)" stroke="#3a3329" stroke-width="1.5"/>
    <!-- Manastır gövdesi -->
    <rect x="78" y="78" width="46" height="38" fill="#e8d4a8" stroke="#5c4a30" stroke-width="1.5"/>
    <!-- Çatı -->
    <polygon points="73,78 100,62 127,78" fill="#a8504a" stroke="#5c4a30" stroke-width="1.5"/>
    <!-- Pencereler (kemerli) -->
    <path d="M 85 92 L 85 105 L 92 105 L 92 92 A 3.5 3.5 0 0 0 85 92 Z" fill="#2d3a4a"/>
    <path d="M 96 92 L 96 105 L 103 105 L 103 92 A 3.5 3.5 0 0 0 96 92 Z" fill="#2d3a4a"/>
    <path d="M 107 92 L 107 105 L 114 105 L 114 92 A 3.5 3.5 0 0 0 107 92 Z" fill="#2d3a4a"/>
    <!-- Haç -->
    <line x1="100" y1="56" x2="100" y2="68" stroke="#fff" stroke-width="2"/>
    <line x1="96" y1="60" x2="104" y2="60" stroke="#fff" stroke-width="2"/>
    <!-- Alt yapı -->
    <rect x="68" y="116" width="64" height="22" fill="#d4be96" stroke="#5c4a30" stroke-width="1.2"/>
    <rect x="76" y="124" width="6" height="10" fill="#2d3a4a"/>
    <rect x="89" y="124" width="6" height="10" fill="#2d3a4a"/>
    <rect x="102" y="124" width="6" height="10" fill="#2d3a4a"/>
    <rect x="115" y="124" width="6" height="10" fill="#2d3a4a"/>
  </svg>`,

  // ── AKDENİZ: Likya Kaya Mezarı ──
  'akdeniz': `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="bg-akd" cx="50%" cy="40%" r="65%">
        <stop offset="0%" stop-color="#4dd6c7"/>
        <stop offset="100%" stop-color="#0a8275"/>
      </radialGradient>
      <linearGradient id="rock-akd" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stop-color="#c9a878"/>
        <stop offset="100%" stop-color="#7a5d3a"/>
      </linearGradient>
    </defs>
    <circle cx="100" cy="100" r="95" fill="url(#bg-akd)" stroke="#fff" stroke-width="3"/>
    <circle cx="100" cy="100" r="95" fill="none" stroke="#054640" stroke-width="2" opacity="0.4"/>
    <!-- Kaya yüzü -->
    <path d="M 25 175 L 30 60 L 50 50 L 70 55 L 90 45 L 115 50 L 140 48 L 165 60 L 175 175 Z" fill="url(#rock-akd)" stroke="#4a3a20" stroke-width="1.5"/>
    <!-- Mezar cephesi - alt kaide -->
    <rect x="60" y="135" width="80" height="20" fill="#e8d4a8" stroke="#4a3a20" stroke-width="1.5"/>
    <!-- Sütunlar -->
    <rect x="68" y="88" width="9" height="47" fill="#f5e8c8" stroke="#4a3a20" stroke-width="1"/>
    <rect x="89" y="88" width="9" height="47" fill="#f5e8c8" stroke="#4a3a20" stroke-width="1"/>
    <rect x="103" y="88" width="9" height="47" fill="#f5e8c8" stroke="#4a3a20" stroke-width="1"/>
    <rect x="123" y="88" width="9" height="47" fill="#f5e8c8" stroke="#4a3a20" stroke-width="1"/>
    <!-- Sütun başlıkları -->
    <rect x="65" y="85" width="15" height="5" fill="#d4be96" stroke="#4a3a20" stroke-width="1"/>
    <rect x="86" y="85" width="15" height="5" fill="#d4be96" stroke="#4a3a20" stroke-width="1"/>
    <rect x="100" y="85" width="15" height="5" fill="#d4be96" stroke="#4a3a20" stroke-width="1"/>
    <rect x="120" y="85" width="15" height="5" fill="#d4be96" stroke="#4a3a20" stroke-width="1"/>
    <!-- Üçgen alınlık -->
    <polygon points="60,85 100,55 140,85" fill="#e8d4a8" stroke="#4a3a20" stroke-width="1.5"/>
    <!-- Alınlık iç süs -->
    <circle cx="100" cy="73" r="3" fill="#a8856a"/>
    <!-- Mezar oda girişi — kemerli, alçak, gradient ile derinlik -->
    <path d="M 92 122 L 92 135 L 108 135 L 108 122 Q 100 115 92 122 Z" fill="#3a2a18" stroke="#1a1208" stroke-width="0.8"/>
    <path d="M 94 124 L 94 134 L 106 134 L 106 124 Q 100 119 94 124 Z" fill="#1f1610" opacity="0.85"/>
    <!-- Yatay tabanlar -->
    <rect x="58" y="83" width="84" height="3" fill="#a8856a"/>
    <rect x="58" y="133" width="84" height="3" fill="#a8856a"/>
  </svg>`,

  // ── İÇ ANADOLU: Peri Bacası + Hitit Aslanı ──
  'ic-anadolu': `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="bg-icd" cx="50%" cy="40%" r="65%">
        <stop offset="0%" stop-color="#fce47a"/>
        <stop offset="100%" stop-color="#c89020"/>
      </radialGradient>
      <linearGradient id="tuff-icd" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stop-color="#e8c896"/>
        <stop offset="100%" stop-color="#a8703a"/>
      </linearGradient>
    </defs>
    <circle cx="100" cy="100" r="95" fill="url(#bg-icd)" stroke="#fff" stroke-width="3"/>
    <circle cx="100" cy="100" r="95" fill="none" stroke="#6e4a10" stroke-width="2" opacity="0.4"/>
    <!-- Zemin -->
    <path d="M 10 165 Q 100 145 190 165 L 190 200 L 10 200 Z" fill="#a8703a"/>
    <!-- Sol peri bacası -->
    <path d="M 38 165 L 42 100 Q 45 90 50 90 Q 56 90 58 100 L 62 165 Z" fill="url(#tuff-icd)" stroke="#5e3a15" stroke-width="1.5"/>
    <!-- Sol şapka -->
    <ellipse cx="50" cy="88" rx="18" ry="9" fill="#7a4520" stroke="#3a1f0a" stroke-width="1.5"/>
    <!-- Orta büyük peri bacası -->
    <path d="M 85 165 L 92 70 Q 96 55 100 55 Q 104 55 108 70 L 115 165 Z" fill="url(#tuff-icd)" stroke="#5e3a15" stroke-width="1.5"/>
    <ellipse cx="100" cy="53" rx="22" ry="11" fill="#7a4520" stroke="#3a1f0a" stroke-width="1.5"/>
    <!-- Pencereler -->
    <rect x="95" y="110" width="5" height="8" fill="#1a1208" rx="1"/>
    <rect x="98" y="130" width="5" height="7" fill="#1a1208" rx="1"/>
    <!-- Sağ peri bacası -->
    <path d="M 138 165 L 142 105 Q 145 95 150 95 Q 156 95 158 105 L 162 165 Z" fill="url(#tuff-icd)" stroke="#5e3a15" stroke-width="1.5"/>
    <ellipse cx="150" cy="93" rx="16" ry="8" fill="#7a4520" stroke="#3a1f0a" stroke-width="1.5"/>
    <!-- Hitit aslanı silueti (alt sağda) -->
    <g transform="translate(125,150)">
      <ellipse cx="0" cy="8" rx="14" ry="6" fill="#3a2010" stroke="#1a0a05" stroke-width="0.8"/>
      <circle cx="-12" cy="3" r="5" fill="#3a2010" stroke="#1a0a05" stroke-width="0.8"/>
      <!-- Yele -->
      <circle cx="-12" cy="2" r="7" fill="none" stroke="#1a0a05" stroke-width="1.2" opacity="0.6"/>
      <line x1="-9" y1="6" x2="-9" y2="14" stroke="#1a0a05" stroke-width="1"/>
      <line x1="-2" y1="14" x2="-2" y2="14" stroke="#1a0a05" stroke-width="2"/>
      <line x1="7" y1="14" x2="7" y2="14" stroke="#1a0a05" stroke-width="2"/>
      <line x1="11" y1="14" x2="11" y2="14" stroke="#1a0a05" stroke-width="2"/>
      <!-- Kuyruk -->
      <path d="M 14 5 Q 20 -2 18 -8" fill="none" stroke="#1a0a05" stroke-width="1.5"/>
    </g>
  </svg>`,

  // ── EGE: Efes Celsus Kütüphanesi Cephesi ──
  'ege': `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="bg-ege" cx="50%" cy="40%" r="65%">
        <stop offset="0%" stop-color="#c894e3"/>
        <stop offset="100%" stop-color="#6a3a85"/>
      </radialGradient>
      <linearGradient id="marble-ege" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stop-color="#fff8e8"/>
        <stop offset="100%" stop-color="#d8c6a0"/>
      </linearGradient>
    </defs>
    <circle cx="100" cy="100" r="95" fill="url(#bg-ege)" stroke="#fff" stroke-width="3"/>
    <circle cx="100" cy="100" r="95" fill="none" stroke="#3a1f50" stroke-width="2" opacity="0.4"/>
    <!-- Üst kat alınlık (kırık tympanon) -->
    <polygon points="40,70 65,52 95,52 90,70" fill="url(#marble-ege)" stroke="#7a6a3a" stroke-width="1.5"/>
    <polygon points="105,70 110,52 135,52 160,70" fill="url(#marble-ege)" stroke="#7a6a3a" stroke-width="1.5"/>
    <!-- Üst kat sütunlar -->
    <rect x="48" y="72" width="6" height="22" fill="#fff8e8" stroke="#7a6a3a" stroke-width="0.8"/>
    <rect x="66" y="72" width="6" height="22" fill="#fff8e8" stroke="#7a6a3a" stroke-width="0.8"/>
    <rect x="86" y="72" width="6" height="22" fill="#fff8e8" stroke="#7a6a3a" stroke-width="0.8"/>
    <rect x="108" y="72" width="6" height="22" fill="#fff8e8" stroke="#7a6a3a" stroke-width="0.8"/>
    <rect x="128" y="72" width="6" height="22" fill="#fff8e8" stroke="#7a6a3a" stroke-width="0.8"/>
    <rect x="146" y="72" width="6" height="22" fill="#fff8e8" stroke="#7a6a3a" stroke-width="0.8"/>
    <!-- Üst entablatür -->
    <rect x="38" y="94" width="124" height="6" fill="#d8c6a0" stroke="#7a6a3a" stroke-width="1"/>
    <!-- Alt kat sütunlar (daha kalın) -->
    <rect x="44" y="102" width="9" height="50" fill="url(#marble-ege)" stroke="#7a6a3a" stroke-width="1"/>
    <rect x="68" y="102" width="9" height="50" fill="url(#marble-ege)" stroke="#7a6a3a" stroke-width="1"/>
    <rect x="92" y="102" width="9" height="50" fill="url(#marble-ege)" stroke="#7a6a3a" stroke-width="1"/>
    <rect x="116" y="102" width="9" height="50" fill="url(#marble-ege)" stroke="#7a6a3a" stroke-width="1"/>
    <rect x="140" y="102" width="9" height="50" fill="url(#marble-ege)" stroke="#7a6a3a" stroke-width="1"/>
    <!-- Sütun başlıkları (Korint stilize) -->
    <rect x="42" y="99" width="13" height="4" fill="#a8855a"/>
    <rect x="66" y="99" width="13" height="4" fill="#a8855a"/>
    <rect x="90" y="99" width="13" height="4" fill="#a8855a"/>
    <rect x="114" y="99" width="13" height="4" fill="#a8855a"/>
    <rect x="138" y="99" width="13" height="4" fill="#a8855a"/>
    <!-- Niş heykelleri (3 küçük figür) -->
    <ellipse cx="60" cy="125" rx="3.5" ry="8" fill="#a8855a" opacity="0.7"/>
    <circle cx="60" cy="115" r="2.5" fill="#a8855a" opacity="0.7"/>
    <ellipse cx="100" cy="125" rx="3.5" ry="8" fill="#a8855a" opacity="0.7"/>
    <circle cx="100" cy="115" r="2.5" fill="#a8855a" opacity="0.7"/>
    <ellipse cx="135" cy="125" rx="3.5" ry="8" fill="#a8855a" opacity="0.7"/>
    <circle cx="135" cy="115" r="2.5" fill="#a8855a" opacity="0.7"/>
    <!-- Kaide -->
    <rect x="38" y="152" width="124" height="8" fill="#a8855a" stroke="#5a3a20" stroke-width="1"/>
    <rect x="34" y="160" width="132" height="6" fill="#7a5d40" stroke="#3a2a15" stroke-width="1"/>
    <!-- Basamaklar -->
    <rect x="30" y="166" width="140" height="4" fill="#8a6b4a"/>
    <rect x="26" y="170" width="148" height="4" fill="#7a5d40"/>
  </svg>`,

  // ── MARMARA: Ayasofya Kubbe ve Minareler ──
  'marmara': `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="bg-mar" cx="50%" cy="40%" r="65%">
        <stop offset="0%" stop-color="#ffc878"/>
        <stop offset="100%" stop-color="#c47018"/>
      </radialGradient>
      <linearGradient id="dome-mar" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stop-color="#f5dba0"/>
        <stop offset="100%" stop-color="#c89060"/>
      </linearGradient>
    </defs>
    <circle cx="100" cy="100" r="95" fill="url(#bg-mar)" stroke="#fff" stroke-width="3"/>
    <circle cx="100" cy="100" r="95" fill="none" stroke="#7a4010" stroke-width="2" opacity="0.4"/>
    <!-- Sol minare -->
    <rect x="38" y="75" width="6" height="85" fill="#e8d4a8" stroke="#5e4020" stroke-width="1"/>
    <polygon points="38,75 41,55 44,75" fill="#a8654a" stroke="#5e4020" stroke-width="1"/>
    <rect x="36" y="105" width="10" height="3" fill="#7a5d3a"/>
    <line x1="41" y1="55" x2="41" y2="48" stroke="#5e4020" stroke-width="1.5"/>
    <circle cx="41" cy="46" r="1.5" fill="#a8654a"/>
    <!-- Sol-iç minare -->
    <rect x="60" y="92" width="5" height="68" fill="#e8d4a8" stroke="#5e4020" stroke-width="1"/>
    <polygon points="60,92 62.5,76 65,92" fill="#a8654a" stroke="#5e4020" stroke-width="1"/>
    <rect x="58" y="115" width="9" height="3" fill="#7a5d3a"/>
    <line x1="62.5" y1="76" x2="62.5" y2="70" stroke="#5e4020" stroke-width="1.5"/>
    <!-- Sağ-iç minare -->
    <rect x="135" y="92" width="5" height="68" fill="#e8d4a8" stroke="#5e4020" stroke-width="1"/>
    <polygon points="135,92 137.5,76 140,92" fill="#a8654a" stroke="#5e4020" stroke-width="1"/>
    <rect x="133" y="115" width="9" height="3" fill="#7a5d3a"/>
    <line x1="137.5" y1="76" x2="137.5" y2="70" stroke="#5e4020" stroke-width="1.5"/>
    <!-- Sağ minare -->
    <rect x="156" y="75" width="6" height="85" fill="#e8d4a8" stroke="#5e4020" stroke-width="1"/>
    <polygon points="156,75 159,55 162,75" fill="#a8654a" stroke="#5e4020" stroke-width="1"/>
    <rect x="154" y="105" width="10" height="3" fill="#7a5d3a"/>
    <line x1="159" y1="55" x2="159" y2="48" stroke="#5e4020" stroke-width="1.5"/>
    <circle cx="159" cy="46" r="1.5" fill="#a8654a"/>
    <!-- Yarım kubbeler -->
    <path d="M 65 130 Q 65 90 88 90 L 88 130 Z" fill="url(#dome-mar)" stroke="#5e4020" stroke-width="1.5"/>
    <path d="M 112 90 Q 135 90 135 130 L 112 130 Z" fill="url(#dome-mar)" stroke="#5e4020" stroke-width="1.5"/>
    <!-- Ana kubbe -->
    <path d="M 72 105 Q 72 60 100 60 Q 128 60 128 105 Z" fill="url(#dome-mar)" stroke="#5e4020" stroke-width="2"/>
    <!-- Kubbe alemi -->
    <line x1="100" y1="60" x2="100" y2="48" stroke="#5e4020" stroke-width="2"/>
    <circle cx="100" cy="47" r="2.5" fill="#d4a060"/>
    <path d="M 100 44 Q 102 41 104 42" fill="none" stroke="#d4a060" stroke-width="1.5"/>
    <!-- Gövde -->
    <rect x="60" y="130" width="80" height="30" fill="#e8d4a8" stroke="#5e4020" stroke-width="1.5"/>
    <!-- Pencereler -->
    <rect x="68" y="138" width="6" height="14" fill="#3a2515" rx="2"/>
    <rect x="80" y="138" width="6" height="14" fill="#3a2515" rx="2"/>
    <rect x="92" y="138" width="6" height="14" fill="#3a2515" rx="2"/>
    <rect x="104" y="138" width="6" height="14" fill="#3a2515" rx="2"/>
    <rect x="116" y="138" width="6" height="14" fill="#3a2515" rx="2"/>
    <rect x="128" y="138" width="6" height="14" fill="#3a2515" rx="2"/>
    <!-- Kubbe pencereler -->
    <rect x="84" y="92" width="3" height="8" fill="#3a2515" rx="1"/>
    <rect x="98" y="88" width="3" height="8" fill="#3a2515" rx="1"/>
    <rect x="112" y="92" width="3" height="8" fill="#3a2515" rx="1"/>
  </svg>`,

  // ── DOĞU ANADOLU: Nemrut Dağı Tanrı Başı ──
  'dogu-anadolu': `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="bg-doa" cx="50%" cy="40%" r="65%">
        <stop offset="0%" stop-color="#9ec8ef"/>
        <stop offset="100%" stop-color="#3a6890"/>
      </radialGradient>
      <linearGradient id="stone-doa" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stop-color="#b8b0a8"/>
        <stop offset="100%" stop-color="#5e564e"/>
      </linearGradient>
    </defs>
    <circle cx="100" cy="100" r="95" fill="url(#bg-doa)" stroke="#fff" stroke-width="3"/>
    <circle cx="100" cy="100" r="95" fill="none" stroke="#1f3a55" stroke-width="2" opacity="0.4"/>
    <!-- Dağ silueti -->
    <path d="M 10 175 L 40 130 L 65 145 L 90 110 L 120 130 L 150 105 L 180 140 L 195 175 Z" fill="#4a5a6a" opacity="0.5"/>
    <!-- Zemin -->
    <path d="M 10 170 Q 100 155 190 170 L 190 200 L 10 200 Z" fill="#5e564e"/>
    <!-- Kaya yığını arkası -->
    <ellipse cx="100" cy="170" rx="80" ry="20" fill="#3a3530" opacity="0.6"/>
    <!-- Tanrı başı (büyük) -->
    <ellipse cx="100" cy="115" rx="38" ry="48" fill="url(#stone-doa)" stroke="#3a3530" stroke-width="2"/>
    <!-- Saç/taç dalgaları -->
    <path d="M 62 95 Q 65 80 75 78 Q 85 70 100 68 Q 115 70 125 78 Q 135 80 138 95" fill="#7a7068" stroke="#3a3530" stroke-width="1.5"/>
    <!-- Taç şeridi -->
    <path d="M 70 90 Q 100 78 130 90 L 130 96 Q 100 84 70 96 Z" fill="#8a7560" stroke="#3a3530" stroke-width="1"/>
    <!-- Taç tepe süsü -->
    <polygon points="95,75 100,65 105,75" fill="#a8956a" stroke="#3a3530" stroke-width="1"/>
    <!-- Burun -->
    <path d="M 100 105 Q 96 118 98 130 Q 100 132 102 130 Q 104 118 100 105 Z" fill="#a8a098" stroke="#5e564e" stroke-width="1"/>
    <!-- Gözler (kapalı/derin) -->
    <ellipse cx="86" cy="110" rx="5" ry="2" fill="#3a3530"/>
    <ellipse cx="114" cy="110" rx="5" ry="2" fill="#3a3530"/>
    <!-- Kaş -->
    <path d="M 80 105 Q 86 102 92 105" fill="none" stroke="#3a3530" stroke-width="1.5"/>
    <path d="M 108 105 Q 114 102 120 105" fill="none" stroke="#3a3530" stroke-width="1.5"/>
    <!-- Sakallı çene -->
    <path d="M 80 140 Q 90 155 100 158 Q 110 155 120 140 Q 115 150 105 153 Q 100 154 95 153 Q 85 150 80 140 Z" fill="#7a7068" stroke="#3a3530" stroke-width="1"/>
    <!-- Bıyık çizgileri -->
    <path d="M 88 135 Q 95 138 100 138 Q 105 138 112 135" fill="none" stroke="#3a3530" stroke-width="1.5"/>
    <!-- Ağız -->
    <line x1="92" y1="138" x2="108" y2="138" stroke="#3a3530" stroke-width="1.5"/>
    <!-- Kırık parça -->
    <path d="M 138 105 L 145 108 L 142 115 Z" fill="#8a8078" stroke="#3a3530" stroke-width="0.8"/>
  </svg>`,

  // ── GÜNEYDOĞU ANADOLU: Göbekli Tepe T-Sütunu ──
  'guneydogu': `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="bg-gda" cx="50%" cy="40%" r="65%">
        <stop offset="0%" stop-color="#f0a890"/>
        <stop offset="100%" stop-color="#a04830"/>
      </radialGradient>
      <linearGradient id="pillar-gda" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stop-color="#d8c4a0"/>
        <stop offset="100%" stop-color="#8a6a45"/>
      </linearGradient>
    </defs>
    <circle cx="100" cy="100" r="95" fill="url(#bg-gda)" stroke="#fff" stroke-width="3"/>
    <circle cx="100" cy="100" r="95" fill="none" stroke="#5a2810" stroke-width="2" opacity="0.4"/>
    <!-- Toprak / höyük -->
    <ellipse cx="100" cy="175" rx="85" ry="20" fill="#6a4525" opacity="0.7"/>
    <ellipse cx="100" cy="178" rx="85" ry="14" fill="#4a2f15"/>
    <!-- Yan T-sütun (küçük, arkada) -->
    <rect x="42" y="100" width="14" height="65" fill="#8a6a45" stroke="#4a3015" stroke-width="1"/>
    <rect x="35" y="96" width="28" height="8" fill="#8a6a45" stroke="#4a3015" stroke-width="1"/>
    <!-- Yan T-sütun sağ -->
    <rect x="144" y="100" width="14" height="65" fill="#8a6a45" stroke="#4a3015" stroke-width="1"/>
    <rect x="137" y="96" width="28" height="8" fill="#8a6a45" stroke="#4a3015" stroke-width="1"/>
    <!-- Ana T-sütun (öndeki, büyük) -->
    <rect x="85" y="65" width="30" height="100" fill="url(#pillar-gda)" stroke="#3a2510" stroke-width="2"/>
    <!-- T üst (yatay başlık) -->
    <rect x="68" y="55" width="64" height="16" fill="url(#pillar-gda)" stroke="#3a2510" stroke-width="2"/>
    <!-- T üst yumuşatma (baş gibi) -->
    <ellipse cx="100" cy="55" rx="32" ry="5" fill="#d8c4a0" stroke="#3a2510" stroke-width="1.5"/>
    <!-- Stilize insan kol kabartmaları (sütunun yan yüzeylerinde) -->
    <path d="M 87 95 Q 84 105 86 120 L 89 120 Q 87 105 90 95 Z" fill="#5a3a15" opacity="0.5"/>
    <path d="M 113 95 Q 116 105 114 120 L 111 120 Q 113 105 110 95 Z" fill="#5a3a15" opacity="0.5"/>
    <!-- Hayvan kabartması (tilki/akrep silueti) -->
    <g transform="translate(92,130)">
      <!-- Tilki gövdesi -->
      <ellipse cx="8" cy="6" rx="10" ry="4" fill="#5a3a15" stroke="#3a2510" stroke-width="0.8"/>
      <!-- Baş -->
      <polygon points="18,4 22,2 22,9 18,8" fill="#5a3a15" stroke="#3a2510" stroke-width="0.8"/>
      <!-- Kulak -->
      <polygon points="19,2 20,-2 21,2" fill="#5a3a15"/>
      <!-- Kuyruk -->
      <path d="M -2 6 Q -8 4 -6 0" fill="none" stroke="#3a2510" stroke-width="1.5"/>
      <!-- Bacaklar -->
      <line x1="2" y1="9" x2="2" y2="13" stroke="#3a2510" stroke-width="1.2"/>
      <line x1="14" y1="9" x2="14" y2="13" stroke="#3a2510" stroke-width="1.2"/>
    </g>
    <!-- Sütun yüzeyinde dokular -->
    <line x1="89" y1="80" x2="111" y2="80" stroke="#5a3a15" stroke-width="0.5" opacity="0.5"/>
    <line x1="89" y1="155" x2="111" y2="155" stroke="#5a3a15" stroke-width="0.5" opacity="0.5"/>
    <!-- "11,500" yaşında işareti (ay yıldız sembolik) -->
    <circle cx="100" cy="63" r="2" fill="#3a2510"/>
  </svg>`
};

// Export to global (loaded via <script> before game.js)
if (typeof window !== 'undefined') window.REGION_BADGES = REGION_BADGES;
