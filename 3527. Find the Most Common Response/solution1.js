/**
  https://leetcode.com/problems/find-the-most-common-response/submissions/1747221919/

  Time Complexity: O(NM Log(NM))
    Runtime 846 ms Beats 30.21%
  Space Complexity: O(NM)
    Memory 250.34 MB Beats 27.08%

 * @param {string[][]} responses
 * @return {string}
 */
var findCommonResponse = function(responses) {
  let map = new Map();
  
  //  simply the duplicates
  for(let i=0; i<responses.length; i++)
    responses[i] = [...new Set(responses[i])];
  
  //  count the response appear
  for(const response of responses)
    for(const s of response)
      map.set(s, (map.get(s) || 0) + 1);

  //  sorting the common response
  let arr = [...map].sort((a1, a2) => {
    const s1 = a1[0];
    const s2 = a2[0];
    const freq1 = a1[1];
    const freq2 = a2[1];
    
    if(freq1 === freq2){
      if(s1 > s2) return 1;
      else return -1;
    }
    return freq2 - freq1;
  });

  return arr[0][0];
};