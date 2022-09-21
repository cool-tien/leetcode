/**
    O(n)
    118~215 ms   (46.97%~95.45%)
    50.3~50.9 MB (30.30%~68.18%)
    
    https://leetcode.com/submissions/detail/805306461/#/
        Runtime: 214 ms, faster than 46.97% of JavaScript online submissions for Sum of Even Numbers After Queries.
        Memory Usage: 50.5 MB, less than 65.15% of JavaScript online submissions for Sum of Even Numbers After Queries.
    https://leetcode.com/submissions/detail/805309747/#/
        Runtime: 118 ms, faster than 95.45% of JavaScript online submissions for Sum of Even Numbers After Queries.
        Memory Usage: 50.9 MB, less than 30.30% of JavaScript online submissions for Sum of Even Numbers After Queries.
    https://leetcode.com/submissions/detail/805315122/#/
        Runtime: 215 ms, faster than 46.97% of JavaScript online submissions for Sum of Even Numbers After Queries.
        Memory Usage: 50.3 MB, less than 68.18% of JavaScript online submissions for Sum of Even Numbers After Queries.

 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
 var sumEvenAfterQueries = function(nums, queries) {
    let total_even = nums.reduce((acc, num) => acc += (num%2 === 0)? num: 0, 0);
    let result = [];
    
    for(let [num, idx] of queries){
        //  original number
        let ori = nums[idx];
        nums[idx] += num;
        
        /*
            a. original = odd to even 
            b. original = even to odd
            c. original = even to even
        */
        let is_previous_odd = Math.abs(ori % 2);
        let is_current_odd = Math.abs(nums[idx] % 2);
        
        if(is_previous_odd && !is_current_odd)
            total_even += nums[idx];
        else if(!is_previous_odd && is_current_odd)
            total_even -= ori;
        else if(!is_previous_odd && !is_current_odd)
            total_even += num;
        
        result.push(total_even);
    }
    
    return result;
};