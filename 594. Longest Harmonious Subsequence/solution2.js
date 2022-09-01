/**
    O(n)
    130~213 ms (32.32%~84.76%)
    51.3~51.7 MB (54.88%~68.90%)

    https://leetcode.com/submissions/detail/788457819/
        Runtime: 130 ms, faster than 84.76% of JavaScript online submissions for Longest Harmonious Subsequence.
        Memory Usage: 51.3 MB, less than 68.90% of JavaScript online submissions for Longest Harmonious Subsequence.
    https://leetcode.com/submissions/detail/788461494/
        Runtime: 213 ms, faster than 32.32% of JavaScript online submissions for Longest Harmonious Subsequence.
        Memory Usage: 51.3 MB, less than 68.90% of JavaScript online submissions for Longest Harmonious Subsequence.
    https://leetcode.com/submissions/detail/788461680/
        Runtime: 146 ms, faster than 75.00% of JavaScript online submissions for Longest Harmonious Subsequence.
        Memory Usage: 51.7 MB, less than 54.88% of JavaScript online submissions for Longest Harmonious Subsequence.

 * @param {number[]} nums
 * @return {number}
 */
 var findLHS = function(nums) {
    let hash = {};
    let max = 0;
    
    for(let num of nums){
        hash[num]? hash[num]++: hash[num]=1;
        
        let l = 0;
        let r = 0;
        
        if(hash[num-1])
            l = hash[num-1] + hash[num];
        if(hash[num+1])
            r = hash[num+1] + hash[num];
        
        if(l>max || r>max)
            max = (l > r)? l: r;
    }
    
    return max;
};