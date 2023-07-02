/**
    Time Complexity: O(n)
        162 ~ 181 ms    (71.28% ~ 95.16%)
    Space Complexity: O(1)
        51.6 ~ 52.1 MB  (19.71% ~ 57.66%)
    
    https://leetcode.com/problems/neither-minimum-nor-maximum/submissions/984320800/
        Runtime 181 ms, Beats 71.28%; Memory 51.6 MB, Beats 57.66%; 
    https://leetcode.com/problems/neither-minimum-nor-maximum/submissions/984340539/
        Runtime 162 ms, Beats 95.16%; Memory 52.1 MB, Beats 19.71%; 
    https://leetcode.com/problems/neither-minimum-nor-maximum/submissions/984340971/
        Runtime 171 ms, Beats 86.40%; Memory 51.9 MB, Beats 33.67%; 

 * @param {number[]} nums
 * @return {number}
 */
var findNonMinOrMax = function(nums) {
    if(nums.length <= 2) return -1;

    let min = 101;
    let max = 0;
    
    for(const num of nums){
        min = Math.min(min, num);
        max = Math.max(max, num);

        if(num > min && num < max)
            return num;
    }

    for(const num of nums)
        if(num !== min && num !== max)
            return num;
    return -1;
};