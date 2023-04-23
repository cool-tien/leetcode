/**
    Time Complexity: O(1)
        54 ~ 64 ms      (30.19% ~ 83.48%)
    Space Complexity: O(1)
        41.8 ~ 42.3 MB  (8.6% ~ 55.28%)
    
    https://leetcode.com/problems/sleep/submissions/938145674/
        Runtime 63 ms, Beats 35.79%; Memory 42.2 MB, Beats 22.18%
    https://leetcode.com/problems/sleep/submissions/938145925/
        Runtime 54 ms, Beats 83.48%; Memory 42.3 MB, Beats 8.6%
    https://leetcode.com/problems/sleep/submissions/938145979/
        Runtime 64 ms, Beats 30.19%; Memory 41.8 MB, Beats 55.29%

 * @param {number} millis
 */
const sleep = async(millis) => new Promise(resolve => setTimeout(resolve, millis));

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */