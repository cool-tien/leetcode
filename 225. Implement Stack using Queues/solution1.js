/*
    https://leetcode.com/submissions/detail/693534235/
    Runtime: 62 ms, faster than 81.69% of JavaScript online submissions for Implement Stack using Queues.
    Memory Usage: 41.9 MB, less than 61.33% of JavaScript online submissions for Implement Stack using Queues.
*/
var MyStack = function() {
    this.stack = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.stack.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    return this.stack.pop();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    return this.stack[this.stack.length - 1];
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return !this.stack.length;
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */