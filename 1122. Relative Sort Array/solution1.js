/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    let map = new Map();
    let res = [], res2 = [];
    
    for(let v of arr1)
        if(map.get(v))
            map.set(v, map.get(v)+1)
        else
            map.set(v, 1)
    
    for(let v of arr2){
        if(map.get(v))
            res.push(...new Array(map.get(v)).fill(v));
        map.delete(v);
    }
    
    map.forEach((v,k)=>{
        res2.push(...new Array(v).fill(k));
    })
    res2.sort((a,b)=>a-b);
    
    return res.concat(res2);
};