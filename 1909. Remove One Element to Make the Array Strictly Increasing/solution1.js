/**
    O(n²)
    169~213 ms   (14.99%~20.18%)
    48.3~48.4 MB (17.43%~18.96%)
    
    https://leetcode.com/submissions/detail/816141357/
        Runtime: 175 ms, faster than 19.27% of JavaScript online submissions for Remove One Element to Make the Array Strictly Increasing.
        Memory Usage: 48.4 MB, less than 17.43% of JavaScript online submissions for Remove One Element to Make the Array Strictly Increasing.
    https://leetcode.com/submissions/detail/816142220/
        Runtime: 169 ms, faster than 20.18% of JavaScript online submissions for Remove One Element to Make the Array Strictly Increasing.
        Memory Usage: 48.3 MB, less than 18.96% of JavaScript online submissions for Remove One Element to Make the Array Strictly Increasing.
    https://leetcode.com/submissions/detail/816142346/
        Runtime: 213 ms, faster than 14.99% of JavaScript online submissions for Remove One Element to Make the Array Strictly Increasing.
        Memory Usage: 48.3 MB, less than 18.96% of JavaScript online submissions for Remove One Element to Make the Array Strictly Increasing.

 * @param {number[]} nums
 * @return {boolean}
 */
 var canBeIncreasing = function(nums) {
    const isIncrease = nums => {
        let previous = nums[0];
        
        for(let i=1; i<nums.length; i++){
            if(previous >= nums[i])
                return false;
            
            previous = nums[i];
        }
        
        return true;
    }
    
    for(let i=0; i<nums.length; i++){
        let arr = nums.slice(0, i).concat(nums.slice(i + 1));
        
        if(isIncrease(arr))
            return true;
    }
    
    return false;
};