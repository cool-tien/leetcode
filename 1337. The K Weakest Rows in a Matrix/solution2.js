/**
 *  https://leetcode.com/submissions/detail/668258192/
 *  Runtime: 60 ms, faster than 97.77% of JavaScript online submissions for The K Weakest Rows in a Matrix.
 *  Memory Usage: 44.1 MB, less than 72.61% of JavaScript online submissions for The K Weakest Rows in a Matrix.
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
 var kWeakestRows = function(mat, k) {
    return mat.map((row, idx) => {
        return {
            soldiers: row.reduce((a,b)=>a+b),
            index: idx
        };
    }).sort((a, b) => a.soldiers-b.soldiers)
      .slice(0, k)
      .map(obj=>obj.index);
};