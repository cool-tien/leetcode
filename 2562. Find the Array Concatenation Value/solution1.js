/**
    Time Complexity: O(n)
        60 ~ 74 ms 
    Space Complexity: O(1)
        42.7 ~ 43.4 MB 

    https://leetcode.com/problems/find-the-array-concatenation-value/submissions/896851983/
        Runtime 66 ms, Beats 100%; Memory 42.7 MB, Beats 100%
    https://leetcode.com/problems/find-the-array-concatenation-value/submissions/896853315/
        Runtime 74 ms, Beats 100%; Memory 42.7 MB, Beats 100%
    https://leetcode.com/problems/find-the-array-concatenation-value/submissions/896853457/
        Runtime 60 ms, Beats 100%; Memory 43.4 MB, Beats 100%

 * @param {number[]} nums
 * @return {number}
 */
var findTheArrayConcVal = function(nums) {
    let sum = 0;
    let left = 0;
    let right = nums.length - 1;
    
    while(right >= left){
        if(left === right)
            sum += nums[left];
        else
            sum += Number(String(nums[left]) + String(nums[right]));
        
        left++;
        right--;
    }

    return sum;
};