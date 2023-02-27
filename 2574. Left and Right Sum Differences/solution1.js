/**
    Time Complexity: O(2n)
        66 ~ 79 ms      (66.67% ~ 100%)
    Space Complexity: O(n)
        45.3 ~ 45.5 MB  (33.33%)

    https://leetcode.com/problems/left-and-right-sum-differences/submissions/905623250/
        Runtime 79 ms, Beats 66.67%; Memory 45.5 MB, Beats 33.33%
    https://leetcode.com/problems/left-and-right-sum-differences/submissions/905624327/
        Runtime 66 ms, Beats 100%; Memory 45.3 MB, Beats 33.33%
    https://leetcode.com/problems/left-and-right-sum-differences/submissions/905624494/
        Runtime 74 ms, Beats 66.67%; Memory 45.3 MB, Beats 33.33%

 * @param {number[]} nums
 * @return {number[]}
 */
var leftRigthDifference = function(nums) {
    let left = [0];
    let right = [];
    let num_left = 0;
    let num_right = 0;

    for(let i=1; i<nums.length; i++){
        num_left += nums[i - 1];
        num_right += nums.at(-(i));

        left.push(num_left);
        right[nums.length - i -1] = num_right;
    }
    right[nums.length - 1] = 0;
    
    return left.map((x, i) => Math.abs(x - right[i]));
};