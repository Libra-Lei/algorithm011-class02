const findCircleNum = function(M) {
  let size = M.length;
  const parent = Array(size); // Array.from(M).map((item, index) => index);
  for (let i =      0; i < size; i++) parent[i] = i;
  const find = p => {
      let root = p;
      while (parent[root] !== root) {
          root = parent[root];
      }
      // 压缩路径
      while (parent[p] !== p) {
          let x = p;
          p = parent[p];
          parent[x] = root;
      }
      return root;
  }

  const union = (p, q) => {
      const rootP = find(p);
      const rootQ = find(q);
      if (rootP === rootQ) return;
      parent[rootP] = rootQ;
      size--;
  }

  for (let i = 0; i < M.length; i++) {
      for (let j = i + 1; j < M[0].length; j++) {
          if (M[i][j]) union(i, j);
      }
  }

  return size;
};