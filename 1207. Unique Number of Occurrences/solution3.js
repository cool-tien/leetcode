/**
    Time Complexity: O(2n)
        49 ~ 51 ms      (74.66% ~ 83.30%)
    Space Complexity: O(2n)
        42.70 ~ 44.0 MB (16.18% ~ 52.90%)
    
    https://leetcode.com/problems/unique-number-of-occurrences/submissions/1148336915/
        Runtime 51 ms Beats 74.66%; Memory 43.35 MB Beats 30.25%; 
    https://leetcode.com/problems/unique-number-of-occurrences/submissions/1148379194/
        Runtime 49 ms Beats 83.30%; Memory 44.00 MB Beats 16.18%; 
    https://leetcode.com/problems/unique-number-of-occurrences/submissions/1148379551/
        Runtime 49 ms Beats 83.30%; Memory 42.70 MB Beats 52.90%; 

 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let obj = {};
    let set = new Set();

    for(const num of arr){
        obj[num]? 
            obj[num]++: 
            obj[num] = 1
    }
    
    for(const prop in obj)
        if(set.has(obj[prop]))
            return false;
        else
            set.add(obj[prop]);
    return true;
};