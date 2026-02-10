// K-D Tree实现，用于高效搜索最相似的颜色
class KDNode {
  constructor(point, colorName, left, right) {
    this.point = point;
    this.colorName = colorName;
    this.left = left;
    this.right = right;
  }
}

class KDTree {
  constructor() {
    this.root = null;
    this.dimensions = 3; // RGB三维空间
  }
  
  // 构建K-D Tree
  build(points) {
    this.root = this.buildRecursive(points, 0);
  }
  
  buildRecursive(points, depth) {
    if (points.length === 0) return null;
    
    const axis = depth % this.dimensions;
    
    // 按当前轴排序
    points.sort((a, b) => a.point[axis] - b.point[axis]);
    
    const median = Math.floor(points.length / 2);
    const node = new KDNode(points[median].point, points[median].name);
    
    node.left = this.buildRecursive(points.slice(0, median), depth + 1);
    node.right = this.buildRecursive(points.slice(median + 1), depth + 1);
    
    return node;
  }
  
  // 搜索最近邻
  nearestNeighbor(target) {
    let best = {
      node: null,
      distance: Infinity
    };
    
    this.nearestNeighborRecursive(this.root, target, 0, best);
    
    if (best.node) {
      return {
        colorName: best.node.colorName,
        rgb: best.node.point,
        distance: best.distance
      };
    }
    
    throw new Error('No colors found in tree');
  }
  
  nearestNeighborRecursive(
    node,
    target,
    depth,
    best
  ) {
    if (!node) return;
    
    const axis = depth % this.dimensions;
    
    // 计算当前节点与目标的距离
    const distance = this.weightedEuclideanDistance(node.point, target);
    
    if (distance < best.distance) {
      best.distance = distance;
      best.node = node;
    }
    
    // 确定搜索方向
    const nextBranch = target[axis] < node.point[axis] ? node.left : node.right;
    const oppositeBranch = target[axis] < node.point[axis] ? node.right : node.left;
    
    // 递归搜索
    this.nearestNeighborRecursive(nextBranch, target, depth + 1, best);
    
    // 检查另一侧是否可能有更近的点
    const axisDistance = Math.abs(target[axis] - node.point[axis]);
    if (axisDistance < best.distance) {
      this.nearestNeighborRecursive(oppositeBranch, target, depth + 1, best);
    }
  }
  
  // 加权欧几里得距离算法（不带开平方根）
  weightedEuclideanDistance(point1, point2) {
    // 人眼对不同颜色通道的敏感度不同，使用加权
    const weights = [0.299, 0.587, 0.114]; // RGB权重
    
    let distance = 0;
    for (let i = 0; i < 3; i++) {
      const diff = point1[i] - point2[i];
      distance += weights[i] * diff * diff;
    }
    
    return distance;
  }
}

// 导出K-D Tree
module.exports = KDTree;