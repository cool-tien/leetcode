/**
    Time Complexity: O(n²)
        2065 ~ 2072 ms  (20.93%)
    Space Complexity: O(1)
        41.9 ~ 42.0 MB  (100%)
    
    https://leetcode.com/problems/longest-arithmetic-subsequence/submissions/977562013/
        Runtime 2072 ms, Beats 20.93%; Memory 42.0 MB, Beats 100%; 
    https://leetcode.com/problems/longest-arithmetic-subsequence/submissions/977563796/
        Runtime 2070 ms, Beats 20.93%; Memory 41.9 MB, Beats 100%; 
    https://leetcode.com/problems/longest-arithmetic-subsequence/submissions/977564096/
        Runtime 2065 ms, Beats 20.93%; Memory 42.0 MB, Beats 100%;

 * @param {number[]} nums
 * @return {number}
 */
var longestArithSeqLength = function(nums){
    let longest = 0;
    
    for(let i=0; i<nums.length; i++){
        //  remain number length small than "longest"
        if(longest > (nums.length - i)) break;
        
        for(let j=i+1; j<nums.length; j++){
            //  remain number length small than "longest"
            if(longest > (nums.length - j)) break;

            const diff = nums[j] - nums[i];
            let next_num = nums[j] + diff;
            let idx = j + 1;
            let max = 2;
            
            while(idx < nums.length){
                if(nums[idx] === next_num){
                    next_num += diff;
                    max++;
                }
                
                idx++;
            }
            
            if(max > longest)
                longest = max;
        }
    }

    return longest;
};