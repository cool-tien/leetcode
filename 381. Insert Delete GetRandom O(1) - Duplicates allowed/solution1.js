/*
    Time Complexity: insert = O(1), remove = O(n), getRandom = O(1)
        415 ~ 446 ms        (12% ~ 72%)
    Space Complexity: O()
        105.9 ~ 107.9 MB    (68% ~ 88%)
    
    https://leetcode.com/problems/insert-delete-getrandom-o1-duplicates-allowed/submissions/988972340/
        Runtime 446 ms, Beats 12%; Memory 106.3 MB, Beats 88%; 
    https://leetcode.com/problems/insert-delete-getrandom-o1-duplicates-allowed/submissions/989036831/
        Runtime 415 ms, Beats 72%; Memory 105.9 MB, Beats 88%; 
    https://leetcode.com/problems/insert-delete-getrandom-o1-duplicates-allowed/submissions/989037723/
        Runtime 442 ms, Beats 12%; Memory 107.9 MB, Beats 68%; 

*/
var RandomizedCollection = function() {
    this.map = new Map();
    this.arr = [];
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.insert = function(val) {
    const is_exist = this.map.has(val);

    this.arr.push(val);
    this.map.set(val, (this.map.get(val) || 0) + 1);
    
    return !is_exist;
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.remove = function(val) {
    const appear = this.map.get(val) || 0;

    if(appear){
        if(appear === 1)
            this.map.delete(val);
        else
            this.map.set(val, appear - 1);
        
        this.arr.splice(this.arr.indexOf(val), 1);
        
        return true;
    }
    else
        return false;
};

/**
 * @return {number}
 */
RandomizedCollection.prototype.getRandom = function() {
    let random_id = ~~(Math.random() * this.arr.length);

    return this.arr[random_id];
};

/** 
 * Your RandomizedCollection object will be instantiated and called as such:
 * var obj = new RandomizedCollection()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */