/**
    Time Complexity: O(nm log(m))
        194 ~ 286 ms        (23.91% ~ 32.61%)
    Space Complexity: O(m)
        51.17 ~ 51.48 MB    (86.96% ~ 95.65%)
    
    https://leetcode.com/problems/sum-in-a-matrix/submissions/1134591348/
        Runtime 286 ms Beats 23.91%; Memory 51.24 MB Beats 95.65%; 
    https://leetcode.com/problems/sum-in-a-matrix/submissions/1134594165/
        Runtime 203 ms Beats 30.44%; Memory 51.17 MB Beats 95.65%; 
    https://leetcode.com/problems/sum-in-a-matrix/submissions/1134596084/
        Runtime 194 ms Beats 32.61%; Memory 51.48 MB Beats 86.96%; 

 * @param {number[][]} nums
 * @return {number}
 */
var matrixSum = function(nums) {
    let matrix = new Array(nums[0].length);
    
    //  sorting nums[i] to decreasing order
    for(let i=0; i<nums.length; i++)
        nums[i].sort((a, b) => b - a);
    
    //  find out each columns largest number
    for(let i=0; i<nums[0].length; i++){
        let max = 0;
        
        for(let j=0; j<nums.length; j++)
            max = Math.max(nums[j][i], max);
        matrix.push(max);
    }
    
    return matrix.reduce((a, b) => a + b, 0);
};