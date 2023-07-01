/**
    Time Complexity: O(1)
        46 ~ 58 ms      (48.85% ~ 96.30%)
    Space Complexity: O(1)
        41.6 ~ 42.1 MB  ( 8.91% ~ 60.30%)
    
    https://leetcode.com/problems/create-hello-world-function/submissions/983867565/
        Runtime 46 ms, Beats 96.30%; Memory 41.7 MB, Beats 60.30%; 
    https://leetcode.com/problems/create-hello-world-function/submissions/983883323/
        Runtime 56 ms, Beats 62.56%; Memory 41.6 MB, Beats 60.30%; 
    https://leetcode.com/problems/create-hello-world-function/submissions/983884907/
        Runtime 58 ms, Beats 48.85%; Memory 42.1 MB, Beats  8.91%;

 * @return {Function}
 */
const createHelloWorld = () => (...args) => "Hello World";

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */