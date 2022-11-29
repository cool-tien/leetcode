/**
    498 ~ 869 ms    (18.37% ~ 81.76%)
    94.2 ~ 121.0 MB (5.41% ~ 84.47%)

    https://leetcode.com/submissions/detail/851471271/
        Runtime: 498 ms, faster than 81.76% of JavaScript online submissions for Insert Delete GetRandom O(1).
        Memory Usage: 94.2 MB, less than 84.47% of JavaScript online submissions for Insert Delete GetRandom O(1).
    https://leetcode.com/submissions/detail/851473056/
        Runtime: 869 ms, faster than 18.37% of JavaScript online submissions for Insert Delete GetRandom O(1).
        Memory Usage: 121 MB, less than 5.41% of JavaScript online submissions for Insert Delete GetRandom O(1).
    https://leetcode.com/submissions/detail/851539252/
        Runtime: 852 ms, faster than 20.65% of JavaScript online submissions for Insert Delete GetRandom O(1).
        Memory Usage: 117.2 MB, less than 15.66% of JavaScript online submissions for Insert Delete GetRandom O(1).
 */
var RandomizedSet = function() {
    this.set = new Set();
    
    return this;
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    //  val exist in Set
    if(this.set.has(val))
        return false;
    else{
        this.set.add(val)
        return true;
    }
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    //  val exist in Set
    if(this.set.has(val)){
        this.set.delete(val);
        return true;
    }
    else
        return false;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    let arr = [...this.set];
    let idx = ~~(Math.random() * arr.length);
    
    return arr[idx];
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */