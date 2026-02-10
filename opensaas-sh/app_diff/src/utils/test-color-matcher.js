// 测试颜色匹配功能
const ColorMatcher = require('./color-matcher');

// 创建颜色匹配器实例
const colorMatcher = new ColorMatcher();

// 加载颜色数据
console.log('正在加载颜色数据...');
colorMatcher.loadColorData('./colornames-rgb.json');
console.log('颜色数据加载完成！');

// 测试颜色匹配
const testColors = [
  [255, 0, 0], // 红色
  [0, 255, 0], // 绿色
  [0, 0, 255], // 蓝色
  [255, 255, 0], // 黄色
  [255, 0, 255], // 洋红
  [0, 255, 255], // 青色
  [128, 128, 128], // 灰色
  [255, 255, 255], // 白色
  [0, 0, 0] // 黑色
];

console.log('\n测试颜色匹配：');
testColors.forEach((rgb, index) => {
  try {
    const result = colorMatcher.findSimilarColor(rgb);
    console.log(`测试 ${index + 1}: RGB(${rgb.join(', ')})`);
    console.log(`  最相似的颜色: ${result.colorName}`);
    console.log(`  颜色RGB: [${result.rgb.join(', ')}]`);
    console.log(`  距离: ${result.distance.toFixed(2)}`);
    console.log('');
  } catch (error) {
    console.error(`测试 ${index + 1} 失败:`, error.message);
  }
});

console.log('测试完成！');