/**
    Time Complexity: O(1)
        60 ~ 74 ms      (26.10% ~ 88.37%)
    Space Complexity: O(1)
        44.5 ~ 45.0 MB  (27.49% ~ 79.13%)

    https://leetcode.com/problems/counter-ii/submissions/951118109/
        Runtime 70 ms, Beats 45.53%; Memory 44.9 MB, Beats 39.78%;
    https://leetcode.com/problems/counter-ii/submissions/951118182/
        Runtime 74 ms, Beats 26.10%; Memory 45.0 MB, Beats 27.49%; 
    https://leetcode.com/problems/counter-ii/submissions/951118221/
        Runtime 60 ms, Beats 88.37%; Memory 44.5 MB, Beats 79.13%; 

 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    this.init = init;    
    this.counter = init;

    this.increment = () => ++this.counter;

    this.reset = () => {
        this.counter = this.init;
        return this.counter;
    }

    this.decrement = () => --this.counter;
    
    return this;
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */