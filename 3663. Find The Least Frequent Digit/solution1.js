/*
  https://leetcode.com/problems/find-the-least-frequent-digit/submissions/1779693653/
    Runtime 3 ms Beats 27.43%
    Memory 54.77 MB Beats 95.57%
*/
/**
 * @param {number} n
 * @return {number}
 */
var getLeastFrequentDigit = function(n) {
  let map = new Map();
  let nums = ("" + n).split("").map(c => ~~c);
  let min_freq = nums.length;
  let min_num = Infinity;

  for(const num of nums)
    map.set(num, (map.get(num) || 0) + 1);

  for(const [num, freq] of [...map]){
    if(freq === min_freq)
      min_num = Math.min(min_num, num);
    else if(freq < min_freq){
      min_freq = freq;
      min_num = num;
    }
  }

  return min_num;
};