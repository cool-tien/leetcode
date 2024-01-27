/**
    Time Complexity: O(n)
        42 ~ 55 ms          (53.61% ~ 97.68%)
    Space Complexity: O(n)
        50.79 ~ 51.57 MB    (5.15%)
    
    https://leetcode.com/problems/unique-number-of-occurrences/submissions/1158229133/
        Runtime 55 ms Beats 53.61%; Memory 51.57 MB Beats 5.15%; 
    https://leetcode.com/problems/unique-number-of-occurrences/submissions/1158231665/
        Runtime 54 ms Beats 59.12%; Memory 50.79 MB Beats 5.15%; 
    https://leetcode.com/problems/unique-number-of-occurrences/submissions/1158248376/
        Runtime 42 ms Beats 97.68%; Memory 51.12 MB Beats 5.15%; 

 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let obj = {};
    let res = [];
    
    for(const num of arr)
        (obj[num])? 
            obj[num]++: 
            obj[num] = 1;

    for(const prop in obj){
        if(res.includes(obj[prop]))
            return false;
            
        res.push(obj[prop]);
    }
    
    return true;
};