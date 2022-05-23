/**
    https://leetcode.com/submissions/detail/705356926/
    Runtime: 67 ms, faster than 83.43% of JavaScript online submissions for Custom Sort String.
    Memory Usage: 42.3 MB, less than 82.85% of JavaScript online submissions for Custom Sort String.

 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function(order, s) {
    let map = new Map();
    let res = "";
    
    for(let c of s)
        map.set(c, map.get(c)+1 || 1);
    
    for(let c of order)
        if(map.get(c) != undefined){
            res += c.repeat(map.get(c));
            map.delete(c);
        }
    
    map.forEach((val, key) => 
        res += key.repeat(val)
    );
    
    return res;
};