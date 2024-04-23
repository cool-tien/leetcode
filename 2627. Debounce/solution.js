/**
    Time Complexity: O(1)
        52 ~ 65 ms
    Space Complexity: O(1)
        48.25 ~ 48.77 MB
    
    https://leetcode.com/problems/debounce/submissions/1239543835/
        Runtime 65 ms; Memory 48.77 MB; 
    https://leetcode.com/problems/debounce/submissions/1239545502/
        Runtime 52 ms; Memory 48.25 MB; 
    https://leetcode.com/problems/debounce/submissions/1239545728/
        Runtime 60 ms; Memory 48.52 MB; 
 * 
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var debounce = function(fn, t) {
    let timer;
    
    return function(...args) {
        //  cancel previous timer for simulate reschedule
        clearTimeout(timer);
        timer = setTimeout(() => fn(...args), t);
    }
};