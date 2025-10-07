/*
  https://leetcode.com/problems/reverse-degree-of-a-string/submissions/1793730291/
    Runtime 3 ms Beats 35.22%
    Memory 57.86 MB Beats 11.30%
*/
/**
 * @param {string} s
 * @return {number}
 */
var reverseDegree = function(s) {
  let alphabets = {};
  let last = 97 + 25;
  let idx = 1;
  let sum = 0;

  //  build reversed alphabet index list
  for(let i=last; i>=97; i--){
    const c = String.fromCharCode(i);

    alphabets[c] = idx++;
  }
    
  //  sum all product
  for(let i=0; i<s.length; i++)
    sum += (alphabets[s[i]] * (i + 1));
  
  return sum;
};