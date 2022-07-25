/**
    O(3n)
    276~352 ms
    75~75.4 MB

 * @param {number[]} arr
 * @return {number[]}
 */
 var arrayRankTransform = function(arr) {
    let sorted = [...new Set([...arr].sort((a, b) => a-b))];
    let rank = {};
    
    for(let i=0; i<sorted.length; i++)
        rank[sorted[i]] = i+1;
    for(let i=0; i<arr.length; i++)
        arr[i] = rank[arr[i]];
    
    return arr;
};