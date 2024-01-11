/**
    Time Complexity: O(n)
        325 ~ 341 ms        (32.84% ~ 43.95%)
    Space Complexity: O(nm)
        116.90 ~ 118.04 MB  (34.64% ~ 41.91%)

    https://leetcode.com/problems/join-two-arrays-by-id/submissions/1142950561/
        Runtime 325 ms Beats 43.95%; Memory 117.85 MB Beats 35.72%; 
    https://leetcode.com/problems/join-two-arrays-by-id/submissions/1142956421/
        Runtime 332 ms Beats 39.06%; Memory 116.90 MB Beats 41.91%; 
    https://leetcode.com/problems/join-two-arrays-by-id/submissions/1142956895/
        Runtime 341 ms Beats 32.84%; Memory 118.04 MB Beats 34.64%; 

 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    let map = new Map();
    
    for(const obj of arr1)
        map.set(obj.id, obj);
    for(const obj of arr2){
        if(map.has(obj.id)){
            //  combine two object
            map.set(obj.id, {
                ...map.get(obj.id), 
                ...obj
            });
        }
        else
            map.set(obj.id, obj);
    }

    //  convert to array and sorting by "id"
    let arr3 = new Array(map.size);
    let i = 0;
    map.forEach((val) => arr3[i++] = val);
    
    arr3.sort((a, b) => a.id - b.id);
    return arr3;
};