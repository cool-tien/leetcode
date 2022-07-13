/*
    O(n) | 163~246ms

    https://leetcode.com/submissions/detail/745696501/
    Runtime: 163 ms, faster than 96.21% of JavaScript online submissions for Smallest Number in Infinite Set.
    Memory Usage: 49.5 MB, less than 85.61% of JavaScript online submissions for Smallest Number in Infinite Set.
*/
var SmallestInfiniteSet = function() {
    this.nums = [1];
    this.biggest = 2;
};

/**
 * @return {number}
 */
SmallestInfiniteSet.prototype.popSmallest = function() {
    let smallest = this.nums.pop();
    
    if(!this.nums.length)
        this.nums.push(this.biggest++);
    return smallest;
};

/** 
 * @param {number} num
 * @return {void}
 */
SmallestInfiniteSet.prototype.addBack = function(num) {
    if(num < this.nums[0] && !this.nums.includes(num)){
        this.nums.push(num);
        this.nums.sort((a,b) => b-a);
    }
};

/** 
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */