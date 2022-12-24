/**
    O(n)
    183 ~ 202 ms    (81.23% ~ 92.72%)
    54.0 ~ 54.3 MB  (24.90% ~ 52.49%)

    https://leetcode.com/problems/design-an-ordered-stream/submissions/860442589/
        Runtime 202 ms, Beats 81.23%; Memory 54.0 MB, Beats 52.49%
    https://leetcode.com/problems/design-an-ordered-stream/submissions/860443434/
        Runtime 186 ms, Beats 91.19%; Memory 54.2 MB, Beats 31.80%
    https://leetcode.com/problems/design-an-ordered-stream/submissions/860443591/
        Runtime 183 ms, Beats 92.72%; Memory 54.3 MB, Beats 24.90%

 * @param {number} n
 */
var OrderedStream = function(n) {
    this.arr = new Array(n).fill(null);
    this.max = n;
    this.idx = 1;
};

/** 
 * @param {number} idKey 
 * @param {string} value
 * @return {string[]}
 */
OrderedStream.prototype.insert = function(idKey, value) {
    let output = [];
    this.arr[idKey-1] = value;

    while(this.arr[this.idx-1]){
        output.push(this.arr[this.idx-1]);
        this.idx++;
    }
    
    return output;
};

/** 
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(idKey,value)
 */