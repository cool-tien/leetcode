/**
    Time Complexity: O(n) 
        68 ~ 75 ms          (21.61% ~ 52.08%)
    Space Complexity: O(n) 
        51.37 ~ 52.20 MB    (41.15% ~ 89.58%)
        
    [Time taken: 14m 3s]
    https://leetcode.com/problems/distribute-elements-into-two-arrays-i/submissions/1197281436/
        Runtime 71 ms Beats 38.54%; Memory 51.37 MB Beats 89.58%; 
    https://leetcode.com/problems/distribute-elements-into-two-arrays-i/submissions/1197296797/
        Runtime 75 ms Beats 21.61%; Memory 52.05 MB Beats 48.44%; 
    https://leetcode.com/problems/distribute-elements-into-two-arrays-i/submissions/1197297089/
        Runtime 68 ms Beats 52.08%; Memory 52.20 MB Beats 41.15%; 

 * @param {number[]} nums
 * @return {number[]}
 */
var resultArray = function(nums) {
    let arr1 = [nums[0]];
    let arr2 = [nums[1]];
    
    for(let i=2; i<nums.length; i++)
        (arr1.at(-1) > arr2.at(-1))? 
            arr1.push(nums[i]): 
            arr2.push(nums[i]);
    
    return arr1.concat(arr2);
};