/**
    Time Complexity: O(n)
        57 ~ 69 ms      (7.35% ~ 58.71%)
    Space Complexity: O(1)
        41.6 ~ 42.8 MB  (6.67% ~ 88.91%)
    
    https://leetcode.com/problems/counter/submissions/933366340/
        Runtime 59 ms, Beats 43.78%; Memory 42.3 MB, Beats 22.40%;
    https://leetcode.com/problems/counter/submissions/933366716/
        Runtime 57 ms, Beats 58.71%; Memory 42.8 MB, Beats 6.67%;
    https://leetcode.com/problems/counter/submissions/933366774/
        Runtime 69 ms, Beats 7.35%; Memory 41.6 MB, Beats 88.91%;

 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    let counter = n

    return function() {
        return counter++;
    };
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */