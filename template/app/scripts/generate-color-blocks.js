// 颜色块图片生成器
// 用于生成纯色块的 PNG 图片

const fs = require('fs');
const path = require('path');

// 生成颜色块图片
function generateColorBlock(hexColor) {
  const width = 500;
  const height = 500;
  
  // 创建 SVG
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="${hexColor}" />
    </svg>
  `;
  
  // 转换为 PNG
  const buffer = Buffer.from(svg, 'utf-8');
  
  return buffer;
}

// 创建颜色块图片目录
const colorBlockDir = path.join(__dirname, 'public', 'color-block');

// 确保目录存在
if (!fs.existsSync(colorBlockDir)) {
  fs.mkdirSync(colorBlockDir, { recursive: true });
}

// 生成所有颜色块
const colors = [
  '000000', 'ffffff', 'ff0000', '00ff00', '0000ff',
  'ffff00', 'ff00ff', '00ffff', 'ff8800',
  'ff0088', '88ff00', '0088ff', '8800ff',
  'f97316', 'ac4026', 'f6deb8', 'e8e4e8',
  'd97706', '4a90a4', '6b7280', '00bcd4',
  'f0f9da', '7c3aed', '4158d0', 'f97316'
];

colors.forEach(color => {
  const buffer = generateColorBlock(color);
  const filePath = path.join(colorBlockDir, `${color}.png`);
  fs.writeFileSync(filePath, buffer);
  console.log(`Generated: ${color}.png`);
});

console.log('Color block images generated successfully!');
