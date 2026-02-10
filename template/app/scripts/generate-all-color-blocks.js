// 批量生成所有颜色块图片（使用安全文件名）
// 基于 colornames-rgb.json 中的 4909 个专业颜色

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createCanvas } from 'canvas';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function createSimpleJPEG(hexColor) {
  const width = 500;
  const height = 500;

  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  const r = parseInt(hexColor.substring(0, 2), 16);
  const g = parseInt(hexColor.substring(2, 4), 16);
  const b = parseInt(hexColor.substring(4, 6), 16);

  ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
  ctx.fillRect(0, 0, width, height);

  return canvas.toBuffer('image/jpeg', { quality: 0.9 });
}

function rgbToHex(rgb) {
  return rgb.map(value => {
    const hex = value.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  }).join('');
}

function sanitizeFileName(name) {
  return name
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '_')
    .replace(/-+/g, '_')
    .replace(/^_+|_+$/g, '');
}

async function generateAllColorBlocks() {
  console.log('开始生成颜色块图片...\n');

  const colorDataPath = path.join(__dirname, '..', 'src', 'utils', 'colornames-rgb.json');
  const colorBlockDir = path.join(__dirname, '..', 'public', 'color-block');
  const mappingDir = path.join(__dirname, '..', 'src', 'utils');

  if (!fs.existsSync(colorBlockDir)) {
    fs.mkdirSync(colorBlockDir, { recursive: true });
  }

  const colorData = JSON.parse(fs.readFileSync(colorDataPath, 'utf8'));
  const colorNames = Object.keys(colorData);
  
  console.log(`总共有 ${colorNames.length} 个颜色需要生成\n`);

  const colorMapping = {};
  let successCount = 0;
  let errorCount = 0;

  for (let i = 0; i < colorNames.length; i++) {
    const colorName = colorNames[i];
    const rgb = colorData[colorName];
    const hexColor = rgbToHex(rgb);
    const safeName = sanitizeFileName(colorName);
    const fileName = `${safeName}.jpg`;
    const filePath = path.join(colorBlockDir, fileName);

    try {
      const buffer = createSimpleJPEG(hexColor);
      fs.writeFileSync(filePath, buffer);
      
      colorMapping[colorName] = {
        hex: hexColor,
        fileName: fileName,
        rgb: rgb,
        safeName: safeName
      };
      
      successCount++;
      
      if (i % 100 === 0) {
        console.log(`进度: ${i}/${colorNames.length} (${((i / colorNames.length) * 100).toFixed(1)}%)`);
      }
    } catch (error) {
      console.error(`生成 ${colorName} (${hexColor}) 失败:`, error.message);
      errorCount++;
    }
  }

  console.log(`\n完成! 成功: ${successCount}, 失败: ${errorCount}`);

  const mappingPath = path.join(mappingDir, 'color-block-mapping.json');
  fs.writeFileSync(mappingPath, JSON.stringify(colorMapping, null, 2));
  console.log(`\n颜色映射文件已保存到: ${mappingPath}`);
  
  const statsPath = path.join(mappingDir, 'color-block-stats.json');
  const stats = {
    totalColors: colorNames.length,
    successCount: successCount,
    errorCount: errorCount,
    generatedAt: new Date().toISOString()
  };
  fs.writeFileSync(statsPath, JSON.stringify(stats, null, 2));
  console.log(`统计信息已保存到: ${statsPath}`);
}

generateAllColorBlocks().catch(console.error);
