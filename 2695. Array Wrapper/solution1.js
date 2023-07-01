/**
    Time Complexity: valueOf = O(n), toString = O(1)
        45 ~ 57 ms      (74.33% ~ 98.92%)
    Space Complexity: valueOf = O(n), toString = O(n)
        44.2 ~ 44.5 MB  (15.94% ~ 32.14%)
    
    https://leetcode.com/problems/array-wrapper/submissions/983870730/
        Runtime 51 ms, Beats 93.56%; Memory 44.3 MB, Beats 32.14%; 
    https://leetcode.com/problems/array-wrapper/submissions/983894198/
        Runtime 57 ms, Beats 74.33%; Memory 44.2 MB, Beats 32.14%; 
    https://leetcode.com/problems/array-wrapper/submissions/983894534/
        Runtime 45 ms, Beats 98.92%; Memory 44.5 MB, Beats 15.94%; 

 * @param {number[]} nums
 */
var ArrayWrapper = function(nums) {
    this.nums = nums;
};

ArrayWrapper.prototype.valueOf = function() {
    return this.nums.reduce((a, b) => a + b, 0);
}

ArrayWrapper.prototype.toString = function() {
    return `[${this.nums.toString()}]`;
}

/**
 * const obj1 = new ArrayWrapper([1,2]);
 * const obj2 = new ArrayWrapper([3,4]);
 * obj1 + obj2; // 10
 * String(obj1); // "[1,2]"
 * String(obj2); // "[3,4]"
 */