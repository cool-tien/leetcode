/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
 var kWeakestRows = function(mat, k) {
    return mat.map((row, idx) => {
        return {
            soldiers: row.filter((x)=>x==1).length,
            index: idx
        };
    }).sort((a, b) => a.soldiers-b.soldiers)
      .slice(0, k)
      .map(obj=>obj.index);
};