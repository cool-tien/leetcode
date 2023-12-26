/**
    Time Complexity: O(n log n)
    Space Complexity: O(n)

    https://leetcode.com/problems/minimum-number-game/submissions/1128538605/
        Runtime 69 ms Beats 48.47%; Memory 44.24 MB Beats 69.90%; 
    https://leetcode.com/problems/minimum-number-game/submissions/1128545219/
        Runtime 70 ms Beats 42.86%; Memory 44.70 MB Beats 22.96%; 
    https://leetcode.com/problems/minimum-number-game/submissions/1128545769/
        Runtime 59 ms Beats 89.29%; Memory 44.14 MB Beats 79.59%; 
    
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function(nums) {
    let arr = [];
    
    nums.sort((a, b) => a - b);
    
    for(let i=0; i<nums.length; i+=2){
        arr.push(nums[i+1]);
        arr.push(nums[i]);
    }
    
    return arr;
};