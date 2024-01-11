/**
    Time Complexity: O(n)
        353 ~ 389 ms        (16.61% ~ 27.43%)
    Space Complexity: O(nm)
        142.06 ~ 143.48 MB  (5.03%)
    
    https://leetcode.com/problems/join-two-arrays-by-id/submissions/1142941114/
        Runtime 389 ms Beats 16.61%; Memory 143.48 MB Beats 5.03%; 
    https://leetcode.com/problems/join-two-arrays-by-id/submissions/1142945780/
        Runtime 373 ms Beats 19.43%; Memory 142.74 MB Beats 5.03%; 
    https://leetcode.com/problems/join-two-arrays-by-id/submissions/1142946148/
        Runtime 353 ms Beats 27.43%; Memory 142.06 MB Beats 5.03%; 

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
    let arr3 = Object.entries([...map]).map((arr) => arr[1][1]);
    arr3.sort((a, b) => a.id - b.id);
    return arr3;
};