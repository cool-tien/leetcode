/**
    https://leetcode.com/problems/find-most-frequent-vowel-and-consonant/submissions/1747212253/

    Time Complexity: O(n)
      Runtime 3 ms Beats 94.66%
    Space Complexity: O(1)
      Memory 57.52 MB Beats 32.82%
    
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function(s) {
  let set_vowel = new Set(["a", "e", "i", "o", "u"]);
  let map = new Map();
  let max_vowel = 0;
  let max_const = 0;

  for(const c of s){
    map.set(c, (map.get(c) || 0) + 1);

    if(set_vowel.has(c))
      max_vowel = Math.max(max_vowel, map.get(c));
    else
      max_const = Math.max(max_const, map.get(c));
  }

  return max_vowel + max_const;
};