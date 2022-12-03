/**
    O(1)
    118 ~ 210 ms    (31.58% ~ 89.47%)
    50.2 ~ 50.5 MB  (63.16% ~ 78.95%)

    https://leetcode.com/submissions/detail/853148649/
        Runtime: 191 ms, faster than 63.16% of JavaScript online submissions for Design Front Middle Back Queue.
        Memory Usage: 50.5 MB, less than 63.16% of JavaScript online submissions for Design Front Middle Back Queue.
    https://leetcode.com/submissions/detail/853151986/
        Runtime: 210 ms, faster than 31.58% of JavaScript online submissions for Design Front Middle Back Queue.
        Memory Usage: 50.5 MB, less than 63.16% of JavaScript online submissions for Design Front Middle Back Queue.
    https://leetcode.com/submissions/detail/853153202/
        Runtime: 118 ms, faster than 89.47% of JavaScript online submissions for Design Front Middle Back Queue.
        Memory Usage: 50.2 MB, less than 78.95% of JavaScript online submissions for Design Front Middle Back Queue.
 */
var FrontMiddleBackQueue = function() {
    this.arr = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushFront = function(val) {
    this.arr.unshift(val);
};

/** 
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushMiddle = function(val) {
    let mid = ~~(this.arr.length / 2);
    
    this.arr.splice(mid, 0, val);
};

/** 
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushBack = function(val) {
    this.arr.push(val)
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popFront = function() {
    return (this.arr.length)? this.arr.shift(): -1;
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popMiddle = function() {
    //  queue empty, return -1
    if(this.arr.length === 0) return -1;
    
    let is_even = (this.arr.length % 2 === 0);
    let mid = ~~(this.arr.length / 2) - is_even;
    
    return this.arr.splice(mid, 1);
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popBack = function() {
    return (this.arr.length)? this.arr.pop(): -1;
};

/** 
 * Your FrontMiddleBackQueue object will be instantiated and called as such:
 * var obj = new FrontMiddleBackQueue()
 * obj.pushFront(val)
 * obj.pushMiddle(val)
 * obj.pushBack(val)
 * var param_4 = obj.popFront()
 * var param_5 = obj.popMiddle()
 * var param_6 = obj.popBack()
 */