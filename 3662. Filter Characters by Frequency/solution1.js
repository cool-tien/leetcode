/*
  https://leetcode.com/problems/filter-characters-by-frequency/submissions/1779689000/
    Runtime 0 ms Beats 100.00%
    Memory 58.25 MB Beats 11.11%
  
  # Approach
  1. Build hash map of appear.
  2. Rebuild the output with occurs fewer than k times.
*/
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var filterCharacters = function(s, k) {
  let map = new Map();
  let res = "";

  //  1. Build hash map of appear
  for(const c of s)
    map.set(c, (map.get(c) || 0) + 1);

  //  2. rebuild the output with occurs fewer than k times
  for(const c of s)
    if(map.get(c) < k)
      res += c;

  return res;
};