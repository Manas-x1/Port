import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const photoPath = path.resolve('public/hero-profile.jpg');
const photoBase64 = fs.readFileSync(photoPath).toString('base64');
const photoDataUri = `data:image/jpeg;base64,${photoBase64}`;

const frontSvg = `
<svg width="800" height="1200" viewBox="0 0 800 1200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="cardBg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#12131b" />
      <stop offset="50%" stop-color="#090a0e" />
      <stop offset="100%" stop-color="#050508" />
    </linearGradient>

    <linearGradient id="accentGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#ff552e" />
      <stop offset="100%" stop-color="#ff8442" />
    </linearGradient>

    <linearGradient id="holoGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#ff552e" stop-opacity="0.8" />
      <stop offset="25%" stop-color="#f8a532" stop-opacity="0.6" />
      <stop offset="50%" stop-color="#00ffff" stop-opacity="0.5" />
      <stop offset="75%" stop-color="#bf5af2" stop-opacity="0.6" />
      <stop offset="100%" stop-color="#ff552e" stop-opacity="0.8" />
    </linearGradient>

    <pattern id="dotGrid" width="24" height="24" patternUnits="userSpaceOnUse">
      <circle cx="2" cy="2" r="1.2" fill="#252736" fill-opacity="0.6" />
    </pattern>

    <clipPath id="photoClip">
      <rect x="100" y="210" width="600" height="540" rx="28" />
    </clipPath>
  </defs>

  <!-- Background Card -->
  <rect x="0" y="0" width="800" height="1200" rx="44" fill="url(#cardBg)" stroke="#232535" stroke-width="4" />
  <rect x="12" y="12" width="776" height="1176" rx="36" fill="none" stroke="rgba(255,85,46,0.22)" stroke-width="2" />

  <!-- Subtle Dot Grid -->
  <rect x="20" y="20" width="760" height="1160" rx="30" fill="url(#dotGrid)" opacity="0.45" />

  <!-- Lanyard Slot cutout area mark -->
  <rect x="330" y="32" width="140" height="18" rx="9" fill="#040406" stroke="#252736" stroke-width="2" />

  <!-- Top Header Badge -->
  <text x="100" y="115" font-family="Inter, sans-serif" font-size="20" font-weight="700" fill="#ff552e" letter-spacing="4">
    DIRECTOR PASS // 2026
  </text>
  <rect x="560" y="92" width="140" height="34" rx="17" fill="#1c1e2a" stroke="rgba(255,85,46,0.3)" stroke-width="1.5" />
  <circle cx="582" cy="109" r="6" fill="#00ff88" />
  <text x="598" y="115" font-family="Inter, sans-serif" font-size="14" font-weight="600" fill="#e2e4ef" letter-spacing="2">
    ACTIVE
  </text>

  <!-- Divider Line -->
  <line x1="100" y1="150" x2="700" y2="150" stroke="#252736" stroke-width="2" />
  <line x1="100" y1="150" x2="260" y2="150" stroke="#ff552e" stroke-width="3" />

  <!-- Photo Container with Border -->
  <g clip-path="url(#photoClip)">
    <image href="${photoDataUri}" x="100" y="210" width="600" height="540" preserveAspectRatio="xMidYMid slice" />
    <rect x="100" y="210" width="600" height="540" fill="none" stroke="rgba(255,85,46,0.3)" stroke-width="4" />
    <rect x="100" y="650" width="600" height="100" fill="linear-gradient(to top, rgba(9,10,14,0.95), transparent)" />
  </g>
  <rect x="100" y="210" width="600" height="540" rx="28" fill="none" stroke="#ff552e" stroke-width="2.5" stroke-opacity="0.4" />

  <!-- Holographic Security Chip in corner -->
  <rect x="620" y="235" width="60" height="46" rx="8" fill="url(#holoGrad)" opacity="0.85" />
  <rect x="632" y="247" width="36" height="22" rx="4" fill="none" stroke="#000" stroke-width="1.5" />

  <!-- Name & Metadata Section -->
  <text x="100" y="810" font-family="Inter, sans-serif" font-size="16" font-weight="600" fill="#9094ab" letter-spacing="3">
    VERIFIED IDENTITY
  </text>

  <text x="100" y="865" font-family="Outfit, Inter, sans-serif" font-size="52" font-weight="900" fill="#ffffff" letter-spacing="-1">
    MANAS UPADHYAY
  </text>

  <text x="100" y="908" font-family="Inter, sans-serif" font-size="20" font-weight="500" fill="#ff552e" letter-spacing="1">
    @manasxz  •  AI CONTENT &amp; 3D ARTIST
  </text>

  <!-- Tags / Chips -->
  <g transform="translate(100, 940)">
    <rect x="0" y="0" width="135" height="34" rx="8" fill="#181a24" stroke="#2a2d3e" stroke-width="1" />
    <text x="67" y="22" font-family="Inter, sans-serif" font-size="13" font-weight="700" fill="#cfd3e8" text-anchor="middle" letter-spacing="1">
      AI CINEMA
    </text>

    <rect x="150" y="0" width="125" height="34" rx="8" fill="#181a24" stroke="#2a2d3e" stroke-width="1" />
    <text x="212" y="22" font-family="Inter, sans-serif" font-size="13" font-weight="700" fill="#cfd3e8" text-anchor="middle" letter-spacing="1">
      3D VFX
    </text>

    <rect x="290" y="0" width="165" height="34" rx="8" fill="#181a24" stroke="#2a2d3e" stroke-width="1" />
    <text x="372" y="22" font-family="Inter, sans-serif" font-size="13" font-weight="700" fill="#cfd3e8" text-anchor="middle" letter-spacing="1">
      CREATIVE DIR
    </text>
  </g>

  <!-- Bottom Divider -->
  <line x1="100" y1="1010" x2="700" y2="1010" stroke="#252736" stroke-width="2" />

  <!-- Stylized Barcode & Pass ID -->
  <g transform="translate(100, 1040)">
    <!-- Barcode lines -->
    <rect x="0" y="0" width="6" height="55" fill="#ffffff" />
    <rect x="10" y="0" width="3" height="55" fill="#ffffff" />
    <rect x="18" y="0" width="10" height="55" fill="#ffffff" />
    <rect x="34" y="0" width="4" height="55" fill="#ffffff" />
    <rect x="44" y="0" width="8" height="55" fill="#ffffff" />
    <rect x="58" y="0" width="4" height="55" fill="#ffffff" />
    <rect x="68" y="0" width="12" height="55" fill="#ffffff" />
    <rect x="86" y="0" width="4" height="55" fill="#ffffff" />
    <rect x="96" y="0" width="8" height="55" fill="#ffffff" />
    <rect x="110" y="0" width="5" height="55" fill="#ffffff" />
    <rect x="120" y="0" width="10" height="55" fill="#ffffff" />
    <rect x="136" y="0" width="4" height="55" fill="#ffffff" />
    <rect x="146" y="0" width="8" height="55" fill="#ffffff" />
    <rect x="160" y="0" width="4" height="55" fill="#ffffff" />
    <rect x="170" y="0" width="14" height="55" fill="#ffffff" />
    <rect x="190" y="0" width="5" height="55" fill="#ffffff" />
    <rect x="200" y="0" width="9" height="55" fill="#ffffff" />
    <rect x="215" y="0" width="3" height="55" fill="#ffffff" />
    <rect x="224" y="0" width="10" height="55" fill="#ffffff" />
    <rect x="240" y="0" width="6" height="55" fill="#ffffff" />
    <rect x="252" y="0" width="12" height="55" fill="#ffffff" />
    <rect x="270" y="0" width="5" height="55" fill="#ffffff" />
    <rect x="282" y="0" width="10" height="55" fill="#ffffff" />
    <rect x="298" y="0" width="4" height="55" fill="#ffffff" />
    <rect x="308" y="0" width="8" height="55" fill="#ffffff" />
    <rect x="322" y="0" width="5" height="55" fill="#ffffff" />
    <rect x="334" y="0" width="12" height="55" fill="#ffffff" />
    <rect x="352" y="0" width="4" height="55" fill="#ffffff" />
    <rect x="362" y="0" width="8" height="55" fill="#ffffff" />
    <rect x="376" y="0" width="4" height="55" fill="#ffffff" />
    <rect x="386" y="0" width="12" height="55" fill="#ffffff" />

    <text x="0" y="78" font-family="Courier, monospace" font-size="14" fill="#9094ab" letter-spacing="3">
      MU-9942-2026 // ALL ACCESS PASS
    </text>

    <!-- Holographic security seal -->
    <circle cx="560" cy="35" r="30" fill="url(#holoGrad)" opacity="0.85" />
    <circle cx="560" cy="35" r="26" fill="none" stroke="#000" stroke-width="2" />
    <text x="560" y="39" font-family="Inter, sans-serif" font-size="12" font-weight="900" fill="#000" text-anchor="middle" letter-spacing="1">
      OFFICIAL
    </text>
  </g>
</svg>
`;

const backSvg = `
<svg width="800" height="1200" viewBox="0 0 800 1200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="backBg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0a0a0f" />
      <stop offset="100%" stop-color="#14151f" />
    </linearGradient>

    <pattern id="backGrid" width="32" height="32" patternUnits="userSpaceOnUse">
      <path d="M 32 0 L 0 0 0 32" fill="none" stroke="#1c1e2b" stroke-width="1" />
    </pattern>

    <linearGradient id="holoGrad2" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#ff552e" />
      <stop offset="50%" stop-color="#00ffff" />
      <stop offset="100%" stop-color="#ff8442" />
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect x="0" y="0" width="800" height="1200" rx="44" fill="url(#backBg)" stroke="#232535" stroke-width="4" />
  <rect x="12" y="12" width="776" height="1176" rx="36" fill="none" stroke="rgba(255,85,46,0.2)" stroke-width="2" />
  <rect x="20" y="20" width="760" height="1160" rx="30" fill="url(#backGrid)" />

  <!-- Magnetic Stripe Graphic -->
  <rect x="0" y="140" width="800" height="110" fill="#050608" />
  <line x1="0" y1="140" x2="800" y2="140" stroke="#1f212f" stroke-width="2" />
  <line x1="0" y1="250" x2="800" y2="250" stroke="#1f212f" stroke-width="2" />

  <!-- Center Big Monogram Logo -->
  <g transform="translate(400, 520)">
    <circle cx="0" cy="0" r="140" fill="#0d0e15" stroke="#ff552e" stroke-width="3" />
    <circle cx="0" cy="0" r="120" fill="none" stroke="#ff552e" stroke-width="1.5" stroke-dasharray="6,6" opacity="0.6" />
    
    <!-- Stylized MU Monogram -->
    <text x="0" y="36" font-family="Outfit, Inter, sans-serif" font-size="110" font-weight="900" fill="#ff552e" text-anchor="middle" letter-spacing="-4">
      MU
    </text>
  </g>

  <!-- Title & Credentials -->
  <text x="400" y="740" font-family="Outfit, Inter, sans-serif" font-size="34" font-weight="800" fill="#ffffff" text-anchor="middle" letter-spacing="2">
    MANAS UPADHYAY
  </text>
  <text x="400" y="780" font-family="Inter, sans-serif" font-size="18" font-weight="600" fill="#ff552e" text-anchor="middle" letter-spacing="4">
    PORTFOLIO &amp; CREATIVE ARCHIVE
  </text>
  <text x="400" y="820" font-family="Inter, sans-serif" font-size="15" font-weight="400" fill="#8d92a8" text-anchor="middle" letter-spacing="2">
    AI CONTENT CREATION  •  3D VFX  •  DIRECTION
  </text>

  <!-- Contact & URL info -->
  <rect x="180" y="870" width="440" height="60" rx="14" fill="#090a0f" stroke="#252738" stroke-width="1.5" />
  <text x="400" y="906" font-family="Courier, monospace" font-size="18" font-weight="700" fill="#e0e3f2" text-anchor="middle" letter-spacing="2">
    HTTPS://MANASXZ.QZZ.IO
  </text>

  <!-- Security Footer -->
  <text x="400" y="1040" font-family="Inter, sans-serif" font-size="13" font-weight="500" fill="#585c74" text-anchor="middle" letter-spacing="2">
    PROPERTY OF MANAS UPADHYAY  •  ALL RIGHTS RESERVED 2026
  </text>
  <text x="400" y="1070" font-family="Inter, sans-serif" font-size="12" font-weight="500" fill="#585c74" text-anchor="middle" letter-spacing="2">
    BASED IN INDIA  •  AVAILABLE WORLDWIDE
  </text>
</svg>
`;

async function run() {
  const outDir = path.resolve('public/assets');
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  await sharp(Buffer.from(frontSvg))
    .png()
    .toFile(path.join(outDir, 'id-card-front.png'));
  console.log('Created id-card-front.png');

  await sharp(Buffer.from(backSvg))
    .png()
    .toFile(path.join(outDir, 'id-card-back.png'));
  console.log('Created id-card-back.png');
}

run().catch(console.error);
