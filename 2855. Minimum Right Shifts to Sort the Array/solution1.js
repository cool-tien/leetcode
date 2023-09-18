/**
    Time Complexity: O(n)
        59 ~ 65 ms      (?)
    Space Complexity: O(n)
        44.6 ~ 44.7 MB  (?)

    https://leetcode.com/problems/minimum-right-shifts-to-sort-the-array/submissions/1052232182/
        Runtime 64 ms, Beats ?%; Memory 44.6 MB, Beats ?%; 
    https://leetcode.com/problems/minimum-right-shifts-to-sort-the-array/submissions/1052235700/
        Runtime 65 ms, Beats ?%; Memory 44.7 MB, Beats ?%; 
    https://leetcode.com/problems/minimum-right-shifts-to-sort-the-array/submissions/1052236231/
        Runtime 59 ms, Beats ?%; Memory 44.6 MB, Beats ?%; 

 * @param {number[]} nums
 * @return {number}
 */
var minimumRightShifts = function(nums){
    let smallest = 101;
    let idx_r = -1;

    //  get smallest num and it index
    for(let i=0; i<nums.length; i++)
        if(smallest > nums[i]){
            smallest = nums[i];
            idx_r = i;
        }

    //  re-build the "nums" array
    nums = [...nums.slice(idx_r), ...nums.slice(0, idx_r)];
    
    for(let i=0; i<nums.length - 1; i++){
        if(nums[i+1] < nums[i])
            return -1;
    }
    
    return (idx_r === 0)? 
        0: (nums.length - idx_r);
};