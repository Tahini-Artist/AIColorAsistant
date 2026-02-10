const fs = require('fs');
const KDTree = require('./kdtree');

class ColorMatcher {
  constructor() {
    this.colorData = {};
    this.kdTree = new KDTree();
  }
  
  // 加载颜色数据
  loadColorData(filePath) {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    this.colorData = data;
    
    // 准备K-D Tree数据
    const points = Object.entries(data).map(([name, rgb]) => ({
      point: rgb,
      name: name
    }));
    
    // 构建K-D Tree
    this.kdTree.build(points);
  }
  
  // 查找最相似的颜色
  findSimilarColor(rgb) {
    return this.kdTree.nearestNeighbor(rgb);
  }
  
  // 获取所有颜色数据
  getColorData() {
    return this.colorData;
  }
}

// 导出ColorMatcher
module.exports = ColorMatcher;