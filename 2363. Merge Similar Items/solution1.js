/**
    O(n + n log(n))
    124~168 ms
    49.9~50.6 MB
    
 * @param {number[][]} items1
 * @param {number[][]} items2
 * @return {number[][]}
 */
 var mergeSimilarItems = function(items1, items2) {
    let map = new Map();
    
    for(let [value, weight] of items1)
        map.set(value, weight);
    for(let [value, weight] of items2)
        map.has(value)? 
            map.set(value, map.get(value) + weight):
            map.set(value, weight);
    
    return [...map].sort((a, b) => a[0]-b[0]);
};