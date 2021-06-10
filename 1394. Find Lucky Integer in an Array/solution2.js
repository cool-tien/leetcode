/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
    let map = new Map();
    let max = -1;
    
    for(let n of arr)
        map.has(n)?map.set(n, map.get(n)+1):map.set(n, 1);
    
    map.forEach((v,k)=>{
       if(v==k && v>=max){
           if(k>=max)
               max = k;
           else
               max = v;
       } 
    });
    
    return max;
};