/**
  https://leetcode.com/problems/find-the-most-common-response/submissions/1747226030/
  
  Time Complexity: O(nm)
    Runtime 327 ms Beats 100.00%
  Space Complexity: O(nm)
    Memory 203.57 MB Beats 44.79%

 * @param {string[][]} responses
 * @return {string}
 */
var findCommonResponse = function(responses) {
  let map = new Map();
  let s_key = "";
  let max_count = 0;
  
  //  simply the duplicates
  for(let i=0; i<responses.length; i++)
    responses[i] = [...new Set(responses[i])];
  
  //  count the response appear
  for(const response of responses)
    for(const s of response)
      map.set(s, (map.get(s) || 0) + 1);

  //  find out the common response
  for(const [key, appear] of map){
    if(max_count === 0){
      s_key = key;
      max_count = appear;
    }
    else if(max_count < appear || (max_count === appear && s_key > key)){
      s_key = key;
      max_count = appear;
    }
  }

  return s_key;
};