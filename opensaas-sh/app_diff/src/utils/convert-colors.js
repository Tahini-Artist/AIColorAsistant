const fs = require('fs');

// 读取源文件
const sourceFile = '/Users/mingyuewu/Downloads/小清新壁纸/colornames.bestof.json';
const targetFile = '/Users/mingyuewu/Documents/trae_projects/lighting-layout/AIColorAsistant/colornames-rgb.json';

// 十六进制转RGB
function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? [
    parseInt(result[1], 16),
    parseInt(result[2], 16),
    parseInt(result[3], 16)
  ] : null;
}

// 读取并转换数据
const colorData = JSON.parse(fs.readFileSync(sourceFile, 'utf8'));

// 转换为对象格式
const convertedData = {};
colorData.forEach(color => {
  const rgb = hexToRgb(color.hex);
  if (rgb) {
    convertedData[color.name] = rgb;
  }
});

// 写入转换后的文件
fs.writeFileSync(targetFile, JSON.stringify(convertedData, null, 2), 'utf8');

console.log(`转换完成！共转换了 ${Object.keys(convertedData).length} 个颜色`);
console.log(`文件已保存到: ${targetFile}`);