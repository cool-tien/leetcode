/**
    O(n)
    139 ~ 195 ms    (56.92% ~ 75.33%)
    48.9 ~ 49.4 MB  (33.85% ~ 76.23%)

    https://leetcode.com/submissions/detail/713296584/
        Runtime: 139 ms, faster than 75.33% of JavaScript online submissions for Range Sum Query - Immutable.
        Memory Usage: 48.9 MB, less than 76.23% of JavaScript online submissions for Range Sum Query - Immutable.
    https://leetcode.com/submissions/detail/844966474/
        Runtime: 195 ms, faster than 56.92% of JavaScript online submissions for Range Sum Query - Immutable.
        Memory Usage: 49 MB, less than 60.34% of JavaScript online submissions for Range Sum Query - Immutable.
    https://leetcode.com/submissions/detail/845040061/
        Runtime: 180 ms, faster than 74.53% of JavaScript online submissions for Range Sum Query - Immutable.
        Memory Usage: 49.4 MB, less than 33.85% of JavaScript online submissions for Range Sum Query - Immutable.

 * @param {number[]} nums
 */
 var NumArray = function(nums) {
    this.nums = nums;
    this.sums = [nums[0]];
    
    //  build the sums map
    for(let i=1; i<nums.length; i++)
        this.sums.push(nums[i] + this.sums[i-1]);
    return this;
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    return this.sums[right] - (left? this.sums[left-1]: 0);
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */