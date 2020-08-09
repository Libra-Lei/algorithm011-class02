var ladderLength = function(beginWord, endWord, wordList) {
  const wordListSet = new Set(wordList);
  if (!wordListSet.has(endWord)) return 0;
  let beginSet = new Set(), endSet = new Set();
  beginSet.add(beginWord);
  endSet.add(endWord);
  let level = 1;
  while (beginSet.size) {
      const nextBeginSet = new Set();
      for (let word of beginSet) {
          for (let i = 0; i < word.length; i++) {
              for (let j = 0; j < 26; j++) {
                  const char = String.fromCharCode(97 + j);
                  if (char !== word[i]) {
                      const newWord = `${word.slice(0, i)}${char}${word.slice(i + 1)}`;
                      if (endSet.has(newWord)) return level + 1;
                      if (wordListSet.has(newWord)) {
                          nextBeginSet.add(newWord);
                          wordListSet.delete(newWord);
                      }
                  }
              }
          }
      }
      beginSet = nextBeginSet;
      level++;
      if (beginSet.size > endSet.size) {
          [beginSet, endSet] = [endSet, beginSet];
      }
  }
  return 0;
};