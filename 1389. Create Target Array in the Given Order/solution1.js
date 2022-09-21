/**
    O(n)
    88~114 ms    (12.80%~60.36%)
    44.3~44.7 MB ( 5.28%~6.26%)

    https://leetcode.com/submissions/detail/804919183/#/
        Runtime: 104 ms, faster than 24.76% of JavaScript online submissions for Create Target Array in the Given Order.
        Memory Usage: 44.3 MB, less than 6.26% of JavaScript online submissions for Create Target Array in the Given Order.
    https://leetcode.com/submissions/detail/804928364/#/
        Runtime: 88 ms, faster than 60.36% of JavaScript online submissions for Create Target Array in the Given Order.
        Memory Usage: 44.3 MB, less than 6.26% of JavaScript online submissions for Create Target Array in the Given Order.
    https://leetcode.com/submissions/detail/804928628/#/
        Runtime: 114 ms, faster than 12.80% of JavaScript online submissions for Create Target Array in the Given Order.
        Memory Usage: 44.7 MB, less than 5.28% of JavaScript online submissions for Create Target Array in the Given Order.

 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function(nums, index) {
    let target = [];
    
    for(let i=0; i<nums.length; i++)
        (index[i] >= target.length)?
            target.push(nums[i]):
            target = [...target.slice(0, index[i]), nums[i], ...target.slice(index[i])];
    return target;
};