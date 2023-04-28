/**
    Time Complexity: O(n)
        125 ~ 167 ms    (44.53% ~ 99.22%)
    Space Complexity: O(n)
        57.4 ~ 57.7 MB  (39.84% ~ 53.13%)
    
    https://leetcode.com/problems/maximum-number-of-integers-to-choose-from-a-range-i/submissions/940867420/
        Runtime 125 ms, Beats 99.22%; Memory 57.6 MB, Beats 42.97%; 
    https://leetcode.com/problems/maximum-number-of-integers-to-choose-from-a-range-i/submissions/940873773/
        Runtime 167 ms, Beats 44.53%; Memory 57.7 MB, Beats 39.84%; 
    https://leetcode.com/problems/maximum-number-of-integers-to-choose-from-a-range-i/submissions/940874413/
        Runtime 148 ms, Beats 79.69%; Memory 57.4 MB, Beats 53.13%; 

 * @param {number[]} banned
 * @param {number} n
 * @param {number} maxSum
 * @return {number}
 */
var maxCount = function(banned, n, maxSum) {
    let set = new Set(new Array(n).fill().map((_, i) => i + 1));
    let sum = 0;
    let count = 0;

    for(let ban of banned)
        set.delete(ban);
    
    //  convert Set to Array
    let arr = [...set];
    let idx = 0;
    while(sum < maxSum){
        if((sum + arr[idx]) <= maxSum)
            count++;
        
        sum += arr[idx];
        idx++;
    }

    return count;
};