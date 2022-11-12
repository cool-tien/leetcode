/**
    O(2n log n)
    97~126 ms    (8.35%~61.98%)
    43.7~44.0 MB (9.67%~12.53%)

    https://leetcode.com/submissions/detail/839786049/
        Runtime: 97 ms, faster than 61.98% of JavaScript online submissions for Can Make Arithmetic Progression From Sequence.
        Memory Usage: 44 MB, less than 9.67% of JavaScript online submissions for Can Make Arithmetic Progression From Sequence.
    https://leetcode.com/submissions/detail/839787001/
        Runtime: 126 ms, faster than 8.35% of JavaScript online submissions for Can Make Arithmetic Progression From Sequence.
        Memory Usage: 44 MB, less than 10.11% of JavaScript online submissions for Can Make Arithmetic Progression From Sequence.
    https://leetcode.com/submissions/detail/839787121/
        Runtime: 103 ms, faster than 48.35% of JavaScript online submissions for Can Make Arithmetic Progression From Sequence.
        Memory Usage: 43.7 MB, less than 12.53% of JavaScript online submissions for Can Make Arithmetic Progression From Sequence.

 * @param {number[]} arr
 * @return {boolean}
 */
 var canMakeArithmeticProgression = function(arr) {
    let sorted = [...arr].sort((a, b) => a - b);
    let len = sorted.length - 1;
    let diff = sorted[1] - sorted[0];
    //  sorted array map with (x + diff )
    //  example: [1, 3, 5] = [(1 + (2 * (2-0))), (...), (...)] → [5, 5, 5]
    arr = sorted.map((x, i) => x + (diff * (len - i)));
    
    return (new Set(arr).size === 1);
};