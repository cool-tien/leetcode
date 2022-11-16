/**
    O(2n log n)
    86 ~ 175 ms     (35.01% ~ 96.23%)
    45.8 ~ 46.4 MB  (43.19% ~ 47.59%)

    https://leetcode.com/submissions/detail/844282094/
        Runtime: 175 ms, faster than 35.01% of JavaScript online submissions for Sort Integers by The Number of 1 Bits.
        Memory Usage: 46.4 MB, less than 43.19% of JavaScript online submissions for Sort Integers by The Number of 1 Bits.
    https://leetcode.com/submissions/detail/844295954/
        Runtime: 146 ms, faster than 57.44% of JavaScript online submissions for Sort Integers by The Number of 1 Bits.
        Memory Usage: 46.3 MB, less than 43.61% of JavaScript online submissions for Sort Integers by The Number of 1 Bits.
    https://leetcode.com/submissions/detail/844296082/
        Runtime: 86 ms, faster than 96.23% of JavaScript online submissions for Sort Integers by The Number of 1 Bits.
        Memory Usage: 45.8 MB, less than 47.59% of JavaScript online submissions for Sort Integers by The Number of 1 Bits.

 * @param {number[]} arr
 * @return {number[]}
 */
 var sortByBits = function(arr) {
    arr = arr.map(x => ({
        num: x, 
        bits: x.toString(2).replace(/0/g, "").length
    }));
    
    arr.sort((a, b) => (a.bits === b.bits)? 
        a.num - b.num: 
        a.bits - b.bits
    );
    
    return arr.map(obj => obj.num);
};