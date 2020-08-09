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