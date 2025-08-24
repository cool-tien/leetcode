/**
    https://leetcode.com/problems/smallest-palindromic-rearrangement-i/submissions/1746251856/

    Time Complexity: O(n log n)
        Runtime 158 ms Beats 61.90%
    Space Complexity: O(n)
        Memory 67.44 MB Beats 95.24%

    # Approach
    1. Build a hash map for alphabet frequency. 
    2. Sorting the hash map with char code position descending into array. (Larger alphabet with process first)
    3. if the appear frequency is even, add the substring to head and tail of result; else split the substring into three part. 

 * 
 * @param {string} s
 * @return {string}
 */
var smallestPalindrome = function(s) {
  let map = new Map();
  let arr = [];
  let result = "";

  for(const c of s)
    map.set(c, (map.get(c) || 0) + 1);

  arr = [...map].sort((a1, a2) => a2[0].charCodeAt() - a1[0].charCodeAt());

  for(const [c, appear] of arr){
    const is_freq_odd = (appear % 2);
    let substr = (is_freq_odd)? c.repeat(appear): c.repeat(appear / 2);

    if(is_freq_odd){
      const len = result.length / 2;
      const is_freq_triple = (appear > 1);
      const sub_head = (is_freq_triple)? c.repeat((appear - 1) / 2): "";
      const sub_mid = c;
      const sub_tail = (is_freq_triple)? c.repeat((appear - 1) / 2): "";

      result = sub_head + result.substring(0, len) + sub_mid + result.substring(len) + sub_tail;
    }
    else 
      result = substr + result + substr;
  }

  return result;
};