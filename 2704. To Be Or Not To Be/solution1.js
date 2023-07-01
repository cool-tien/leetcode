/**
    Time Complexity: O(1)
        60 ~ 61 ms      (40.15% ~ 46.64%)
    Space Complexity: O(1)
        41.9 ~ 42.6 MB  ( 6.90% ~ 50.37%)
    
    https://leetcode.com/problems/to-be-or-not-to-be/submissions/983875033/
        Runtime 61 ms, Beats 40.15%; Memory 42.6 MB, Beats  6.90%; 
    https://leetcode.com/problems/to-be-or-not-to-be/submissions/983901173/
        Runtime 61 ms, Beats 40.15%; Memory 41.9 MB, Beats 50.37%; 
    https://leetcode.com/problems/to-be-or-not-to-be/submissions/983901702/
        Runtime 60 ms, Beats 46.64%; Memory 42.3 MB, Beats  6.90%;

 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    this.toBe = function(val2){
        if(val === val2)
            return true;
        else
            throw "Not Equal";
    }

    this.notToBe = function(val2){
        if(val !== val2)
            return true;
        else
            throw "Equal";
    }

    return this;
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */