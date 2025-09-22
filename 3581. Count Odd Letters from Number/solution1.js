/*
  https://leetcode.com/problems/count-odd-letters-from-number/submissions/1778617350/
    Runtime 4 ms Beats 40.00%
    Memory 58.37 MB Beats 10.00%
*/
/**
 * @param {number} n
 * @return {number}
 */
var countOddLetters = function(n) {
  const letters = {
    0: "zero", 
    1: "one", 
    2: "two", 
    3: "three", 
    4: "four", 
    5: "five", 
    6: "six", 
    7: "seven", 
    8: "eight", 
    9: "nine", 
  }
  const nums = ("" + n).split("").map(c => ~~c);
  let map = new Map();
  
  for(const num of nums){
    const letter = letters[num];

    for(const c of letter)
      map.set(c, (map.get(c) || 0) + 1);
  }
  
  const arr = [...map].filter(a => a[1] % 2);
  return arr.length;
};