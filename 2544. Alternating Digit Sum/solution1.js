/**
    Time Complexity: O(2n)
        51 ~ 62 ms      (85.22% ~ 98.91%)
    Space Complexity: O(1)
        41.7 ~ 41.8 MB  (89.78% ~ 93.40%)

    https://leetcode.com/problems/alternating-digit-sum/submissions/889097881/
        Runtime 51 ms, Beats 98.91%; Memory 41.7 MB, Beats 93.4%
    https://leetcode.com/problems/alternating-digit-sum/submissions/889098743/
        Runtime 62 ms, Beats 85.22%; Memory 41.7 MB, Beats 89.78%
    https://leetcode.com/problems/alternating-digit-sum/submissions/889098940/
        Runtime 60 ms, Beats 89.35%; Memory 41.8 MB, Beats 89.78%

 * @param {number} n
 * @return {number}
 */
var alternateDigitSum = function(n) {
    let nums = n.toString().split("").map(c => +c);
    let positive = 0;
    let negative = 0;

    //  count sum of positive
    for(let i=0; i<nums.length; i+=2)
        positive += nums[i];
    //  count sum of negative
    for(let i=1; i<nums.length; i+=2)
        negative += nums[i];
    
    return positive - negative;
};