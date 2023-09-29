/**
    Time Complexity: O(n)
        73 ~ 80 ms      (49.80% ~ 77.14%)
    Space Complexity: O(1)
        53.5 ~ 53.7 MB  (16.46% ~ 30.34%)
    
    https://leetcode.com/problems/monotonic-array/submissions/1061903305/
        Runtime 80 ms, Beats 49.80%; Memory 53.5 MB, Beats 30.34%; 
    https://leetcode.com/problems/monotonic-array/submissions/1061906319/
        Runtime 73 ms, Beats 77.14%; Memory 53.7 MB, Beats 16.46%; 
    https://leetcode.com/problems/monotonic-array/submissions/1061907168/
        Runtime 79 ms, Beats 54.10%; Memory 53.6 MB, Beats 22.40%; 

 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums){
    const isIncrease = (nums = []) => {
        let previous = nums[0];
        
        for(let i=1; i<nums.length; i++){
            if(previous < nums[i])
                return true;
            else if(previous > nums[i])
                return false;
            
            previous = nums[i];
        }

        return true;
    }
    
    if(nums.length === 1) return true;

    let is_increase = isIncrease(nums);
    let previous = nums[0];
    
    for(let i=1; i<nums.length; i++){
        if(is_increase){
            if(nums[i] < previous)
                return false;
        }
        else {
            if(nums[i] > previous)
                return false;
        }
        
        previous = nums[i];
    }
    
    return true;
};