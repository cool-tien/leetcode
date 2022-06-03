/**
    https://leetcode.com/submissions/detail/713296584/
    Runtime: 139 ms, faster than 75.33% of JavaScript online submissions for Range Sum Query - Immutable.
    Memory Usage: 48.9 MB, less than 76.23% of JavaScript online submissions for Range Sum Query - Immutable.

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