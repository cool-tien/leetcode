/**
    Time Complexity: O(n ^ 3)
        5539 ~ 5687 ms  (13.95% ~ 16.28%)
    Space Complexity: O(1)
        42.3 ~ 42.6 MB  (100%)

    https://leetcode.com/problems/longest-arithmetic-subsequence/submissions/977556647/
        Runtime 5687 ms, Beats 13.95%; Memory 42.3 MB, Beats 100%; 
    https://leetcode.com/problems/longest-arithmetic-subsequence/submissions/977556963/
        Runtime 5539 ms, Beats 16.28%; Memory 42.5 MB, Beats 100%; 
    https://leetcode.com/problems/longest-arithmetic-subsequence/submissions/977557214/
        Runtime 5685 ms, Beats 13.95%; Memory 42.6 MB, Beats 100%; 

 * @param {number[]} nums
 * @return {number}
 */
var longestArithSeqLength = function(nums){
    let longest = 0;
    
    for(let i=0; i<nums.length; i++){
        //  remain number length small than "longest"
        if(longest > (nums.length - i)) break;
        
        for(let j=i+1; j<nums.length; j++){
            if(longest > (nums.length - j)) break;

            const diff = nums[j] - nums[i];
            let next_num = nums[j] + diff;
            let idx = j + 1;
            let max = 2;
            
            while(nums.indexOf(next_num, idx) !== -1){
                idx = nums.indexOf(next_num, idx) + 1;
                next_num += diff;
                max++;
            }
            
            if(max > longest)
                longest = max;
        }
    }

    return longest;
};