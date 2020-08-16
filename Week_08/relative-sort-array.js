/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
  // return arr1.sort((a, b) => {
  //     let ia = arr2.indexOf(a);
  //     let ib = arr2.indexOf(b);
  //     if(ia == -1 && ib == -1) {
  //         return a - b;
  //     } else if (ia == -1) {
  //         return 1;
  //     } else if (ib == -1) {
  //         return -1;
  //     } else {
  //         return ia-ib;
  //     }
  // });
  const arr2Map = new Map();
  for (let i = 0; i < arr2.length; i++) arr2Map.set(arr2[i], i);
  arr1.sort((a, b) => {
      if (arr2Map.has(a) && arr2Map.has(b)) {
          return arr2Map.get(a) - arr2Map.get(b);
      } else if (!arr2Map.has(a) && !arr2Map.has(b)) {
          return a - b;
      } else if (!arr2Map.has(a)){
          return 1;
      } else {
          return -1;
      }
  })
  return arr1;
};