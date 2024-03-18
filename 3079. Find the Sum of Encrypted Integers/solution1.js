/**
    Time Complexity: O(n)
        64 ~ 68 ms          (?%)
    Space Complexity: O(1)
        50.82 ~ 51.20 MB    (?%)
    
    [Time taken: 14m 34s]
    https://leetcode.com/problems/find-the-sum-of-encrypted-integers/submissions/1206843320/
        Runtime 67 ms Beats ?%; Memory 51.13 MB Beats ?%; 
    https://leetcode.com/problems/find-the-sum-of-encrypted-integers/submissions/1206851920/
        Runtime 64 ms Beats ?%; Memory 50.82 MB Beats ?%; 
    https://leetcode.com/problems/find-the-sum-of-encrypted-integers/submissions/1206852283/
        Runtime 68 ms Beats ?%; Memory 51.20 MB Beats ?%; 

 * @param {number[]} nums
 * @return {number}
 */
var sumOfEncryptedInt = function(nums) {
    for(let i=0; i<nums.length; i++){
        //  convert into string data type
        nums[i] = nums[i].toString();
        let largest = nums[i][0];
        
        for(let j=1; j<nums[i].length; j++)
            if(nums[i][j] > largest)
                largest = nums[i][j];
        
        nums[i] = Number(largest.repeat(nums[i].length));
    }
    
    return nums.reduce((acc, cur) => acc + cur, 0);
};