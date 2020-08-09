var isValidSudoku = function(board) {
  const rows = new Map(), columns = new Map(), boxes = new Map();
  for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
          const num = board[i][j];
          if (num !== '.') {
              const boxIndex = Math.floor((i / 3)) * 3 + Math.floor(j / 3);
              if (rows.has(`${i}-${num}`) || columns.has(`${j}-${num}`) || boxes.has(`${boxIndex}-${num}`)) return false;
              rows.set(`${i}-${num}`, true);
              columns.set(`${j}-${num}`, true);
              boxes.set(`${boxIndex}-${num}`, true);
          }
      }
  }
  return true;
};