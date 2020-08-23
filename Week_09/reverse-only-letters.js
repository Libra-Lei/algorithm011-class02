/**
 * @param {string} S
 * @return {string}
 */
 var reverseOnlyLetters = function(S) {
  if (!S || S.length < 2) return S;
  let start = 0, end = S.length - 1;
  const res = Array(S.length).fill('');
  while (start <= end) {
      while (start <= end && !isLetter(S[start])) {
          res[start] = S[start];
          start++;
      }
      while (start <= end && !isLetter(S[end])) {
          res[end] = S[end];
          end--;
      }
      if (start <= end) {
          res[start] = S[end];
          res[end] = S[start];
      }
      start++;
      end--;
  }
  return res.join('');
};

const isLetter = (char) => {
  const code = char.charCodeAt();
  return (code >= 65 && code <= 90) || (code >= 97 && code <= 122);
}