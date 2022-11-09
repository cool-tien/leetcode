/** 
    O(n)
    886~1185 ms  (16.21%~20.19%)
    59.7~59.9 MB (66.97%~74.62%)

    https://leetcode.com/submissions/detail/839780038/
        Runtime: 886 ms, faster than 20.19% of JavaScript online submissions for Online Stock Span.
        Memory Usage: 59.9 MB, less than 66.97% of JavaScript online submissions for Online Stock Span.
    https://leetcode.com/submissions/detail/839788245/
        Runtime: 1039 ms, faster than 18.35% of JavaScript online submissions for Online Stock Span.
        Memory Usage: 59.7 MB, less than 74.62% of JavaScript online submissions for Online Stock Span.
    https://leetcode.com/submissions/detail/839788334/
        Runtime: 1185 ms, faster than 16.21% of JavaScript online submissions for Online Stock Span.
        Memory Usage: 59.8 MB, less than 66.97% of JavaScript online submissions for Online Stock Span.

 * 
 * /
var StockSpanner = function() {
    this.arr = [];
    
    return this;
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
    let consecutive = 1;
    let idx = this.arr.length - 1;
    
    while(idx >= 0){
        if(this.arr[idx] > price)
            break;
        
        consecutive++;
        idx--;
    }
    
    this.arr.push(price);
    return consecutive;
};

/** 
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */