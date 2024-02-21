/**
    Time Complexity: O(n / 2)
        44 ~ 49 ms          (90.59% ~ 97.65%)
    Space Complexity: O(1)
        48.66 ~ 50.12 MB    (10.20% ~ 96.86%)
    
    https://leetcode.com/problems/maximum-number-of-operations-with-the-same-score-i/submissions/1181536567/
        Runtime 49 ms Beats 90.59%; Memory 48.76 MB Beats 94.90%; 
    https://leetcode.com/problems/maximum-number-of-operations-with-the-same-score-i/submissions/1181542022/
        Runtime 44 ms Beats 97.65%; Memory 48.66 MB Beats 96.86%; 
    https://leetcode.com/problems/maximum-number-of-operations-with-the-same-score-i/submissions/1181542902/
        Runtime 47 ms Beats 94.12%; Memory 50.12 MB Beats 10.20%; 

 * @param {number[]} nums
 * @return {number}
 */
var maxOperations = function(nums) {
    let same = 0;

    while(nums.length >= 2){
        const arr = nums.splice(0, 2);
        const sum_cur = (arr[0] || 0) + (arr[1] || 0);
        const sum_next = (nums[0] || 0) + (nums[1] || 0);
        
        same++;
        if(sum_cur !== sum_next)
            break;
    }
    
    return same;
};