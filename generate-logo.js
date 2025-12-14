// Generate Dark Forest Labs logo SVG using the original algorithm
// From dark_forest_final_logo.jsx

const particleCount = 120;
const spread = 15;
const particleSize = 1.5;
const centerX = 100;
const centerY = 100;
const targetRadius = 70;

// Seeded random for reproducibility
let seed = 42;
function seededRandom() {
  seed = (seed * 1103515245 + 12345) & 0x7fffffff;
  return seed / 0x7fffffff;
}

let particles = '';

for (let i = 0; i < particleCount; i++) {
  const angle = (Math.PI * 2 * i) / particleCount;
  const randomOffset = seededRandom() * spread;
  const distance = targetRadius + randomOffset;
  const x = (centerX + Math.cos(angle) * distance).toFixed(1);
  const y = (centerY + Math.sin(angle) * distance).toFixed(1);
  const size = (particleSize + seededRandom() * particleSize).toFixed(1);
  const opacity = (0.4 + seededRandom() * 0.6).toFixed(2);
  
  particles += `  <circle cx="${x}" cy="${y}" r="${size}" fill="#00ff88" opacity="${opacity}"/>\n`;
}

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
  <rect width="200" height="200" fill="#0a0a0a"/>
${particles}</svg>`;

console.log(svg);

