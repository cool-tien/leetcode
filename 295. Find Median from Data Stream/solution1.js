/*
    Time Complexity: O(n log n)
        5683 ~ 5829 ms      (5.1%)
    Space Complexity: O(n)
        104.1 ~ 104.8 MB    (5.1%)
    
    https://leetcode.com/problems/find-median-from-data-stream/submissions/983584871/
        Runtime 5727 ms, Beats 5.1%; Memory 104.4 MB, Beats 5.1%;
    https://leetcode.com/problems/find-median-from-data-stream/submissions/983592133/
        Runtime 5829 ms, Beats 5.1%; Memory 104.1 MB, Beats 5.1%;
    https://leetcode.com/problems/find-median-from-data-stream/submissions/983593798/
        Runtime 5683 ms, Beats 5.1%; Memory 104.8 MB, Beats 5.1%;
*/
var MedianFinder = function() {
    this.arr = [];
    this.is_odd = false;

    // return this;
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    this.is_odd = !this.is_odd;

    if(num < this.arr[0])
        this.arr.unshift(num);
    else{
        this.arr.push(num);
        this.arr.sort((a, b) => a - b);
    }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    const mid = (this.is_odd)?
        ~~(this.arr.length / 2): 
        this.arr.length / 2;
    const median = (this.is_odd)?
        this.arr[mid]: 
        (this.arr[mid] + this.arr[mid -1]) / 2;
        
    return median;
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */