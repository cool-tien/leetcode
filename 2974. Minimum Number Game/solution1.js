/**
    Time Complexity: O(n log n)
    Space Complexity: O(0)

    https://leetcode.com/problems/minimum-number-game/submissions/1128534450/
        Runtime 72 ms Beats 35.20%; Memory 45.16 MB Beats 11.22%; 
    https://leetcode.com/problems/minimum-number-game/submissions/1128537179/
        Runtime 74 ms Beats 26.02%; Memory 44.17 MB Beats 79.59%; 
    https://leetcode.com/problems/minimum-number-game/submissions/1128537693/
        Runtime 66 ms Beats 62.25%; Memory 44.13 MB Beats 79.59%; 

 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function(nums) {
    const end = nums.length - 1;
    
    nums.sort((a, b) => a - b);
    for(let i=0; i<end; i+=2)
        [nums[i], nums[i+1]] = [nums[i+1], nums[i]];
    return nums;
};