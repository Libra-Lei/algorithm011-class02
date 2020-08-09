var numIslands = function(grid) {
  if (!grid || !grid.length) return 0;
  const m = grid.length, n = grid[0].length;
  const unionFind = new UnionFind(grid);
  for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
          if (grid[i][j] === '1') {
              if (i + 1 < m && grid[i + 1][j] === '1') {
                  unionFind.union(i * n + j, (i + 1) * n + j);
              }
              if (j + 1 < n && grid[i][j + 1] === '1') {
                  unionFind.union(i * n + j, i * n + j + 1);
              }
          }
      }
  }
  return unionFind.count;
};

class UnionFind {
  constructor(grid) {
      this.parent = [];
      this.count  = 0;
      const m = grid.length, n = grid[0].length;
      for (let i = 0; i < m; i++) {
          for (let j = 0; j < n; j++) {
              if (grid[i][j] === '1') {
                  // 转一维数组
                  this.parent[i * n + j] = i * n + j;
                  this.count++;
              }
          }
      }
  }
  find(p) {
      let root = p;
      while (this.parent[root] !== root) {
          root = this.parent[root];
      }
      // 压缩路径
      while (this.parent[p] !== p) {
          let x = p;
          p = this.parent[p];
          this.parent[x] = root;
      }
      return root;
  }
  union(p, q) {
      const rootP = this.find(p);
      const rootQ = this.find(q);
      if (rootP === rootQ) return;
      this.parent[rootP] = rootQ;
      this.count--;
  }
}