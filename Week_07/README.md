# 笔记
## 字典树 Trie
### 字典树的数据结构
1. 字典树（Trie），又称单词查找树或者键树，是一种树形结构。
2. 典型应用于统计和排序大量字符串（但不仅限于字符串），经常被用于搜索引擎统计文本词频。
3. 优点：最大限度的减少无谓的字符串的比较，比哈希表查询效率高。
### 字典树的核心思想
把要存储的单词拆分成一个个的字符，分散到节点，多叉树。
### 字典树的基本性质
1. 节点本身不存储完整单词
2. 从根节点到某一个节点，路径上经过的字符连接起来，组成该节点代表的字符串
3. 每个节点的所有子节点路径代表的字符都不相同
### Trie 代码模版
```js
class Trie {
  constructor() {
    this.children = new Map();
    this.isEnd = false;
  }

  insert(word) {
    if (!word) return;
    let node = this.children;
    for (const ch of word) {
      if (!node.has(ch)) node.set(ch, new Map());
      node = node.get(ch);
    }
    node.set('isEnd', true);
  }

  search(word) {
    if (!word) return false;
    let node = this.children;
    for (const ch of word) {
      if (!node.has(ch)) return false;
      node = node.get(ch);
    }
    return node.get('isEnd') || false;
  }

  startsWith(word) {
    if (!word) return false;
    let node = this.children;
    for (const ch of word) {
      if (!node.has(ch)) return false;
      node = node.get(ch);
    }
    return true;
  }
}
```
## 并查集