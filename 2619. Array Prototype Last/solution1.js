/**
    Time Complexity: O(1)
        38 ~ 57 ms      (56.13% ~ 99.69%)
    Space Complexity: O(1)
        41.9 ~ 42.3 MB  (10.38% ~ 59.59%)
    
    https://leetcode.com/problems/array-prototype-last/submissions/933365411/
        Runtime 38 ms, Beats 99.69%; Memory 42.2 MB, Beats 26.89%
    https://leetcode.com/problems/array-prototype-last/submissions/933367888/
        Runtime 57 ms, Beats 56.13%; Memory 41.9 MB, Beats 59.59%
    https://leetcode.com/problems/array-prototype-last/submissions/933368105/
        Runtime 48 ms, Beats 94.50%; Memory 42.3 MB, Beats 10.38%

 * 
 */
Array.prototype.last = function() {
    return this.length? this[this.length - 1]: -1;
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */