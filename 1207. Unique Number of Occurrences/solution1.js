/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let obj = {}
    let res = [];
    
    for(let num of arr)
        if(obj[num])
            obj[num] += 1;
        else
            obj[num] = 1;
    
    for(let k in obj)
        res.push(obj[k]);
    
    return res.length==new Set(res).size;
};