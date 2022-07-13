/*
    https://leetcode.com/submissions/detail/745665151/
    Runtime: 421 ms, faster than 26.51% of JavaScript online submissions for Smallest Number in Infinite Set.
    Memory Usage: 58.4 MB, less than 12.12% of JavaScript online submissions for Smallest Number in Infinite Set.
*/

var SmallestInfiniteSet = function() {
    this.set = new Set(new Array(1000).fill().map((x,i) => i+1));
};

/**
 * @return {number}
 */
SmallestInfiniteSet.prototype.popSmallest = function() {
    let smallest = Math.min(...[...this.set]);
    
    this.set.delete(smallest);
    return smallest;
};

/** 
 * @param {number} num
 * @return {void}
 */
SmallestInfiniteSet.prototype.addBack = function(num) {
    this.set.add(num);
};

/** 
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */