/**
    Time Complexity: O(n)
        43 ~ 60 ms          (27.78% ~ 96.75%)
    Space Complexity: O(n)
        48.10 ~ 49.23 MB    (59.20% ~ 81.35%)
    
    [Time taken: 13m 42s]
    https://leetcode.com/problems/custom-sort-string/submissions/1200114939/
        Runtime 43 ms Beats 96.75%; Memory 48.10 MB Beats 81.35%; 
    https://leetcode.com/problems/custom-sort-string/submissions/1200120051/
        Runtime 60 ms Beats 27.78%; Memory 49.07 MB Beats 67.58%; 
    https://leetcode.com/problems/custom-sort-string/submissions/1200121119/
        Runtime 53 ms Beats 68.84%; Memory 49.23 MB Beats 59.20%; 

 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function(order, s) {
    let map = new Map();
    let sorted = [];

    for(const c of s)
        map.set(c, (map.get(c) || 0) + 1);
        
    for(const c of order){
        if(map.has(c)){
            //  the "c" of repeat time
            let appear = map.get(c);

            sorted.push(c.repeat(appear));
            map.delete(c);
        }
    }

    //  remain items in map
    for(const [c, appear] of map)
        sorted.push(c.repeat(appear));
    
    return sorted.join("");
};