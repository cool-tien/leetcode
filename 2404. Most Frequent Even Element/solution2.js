/**
    O(n)
    87~127 ms (91.94%~97.82%)
    48.8~49.2 MB (86.49%~95.21%)
    
    https://leetcode.com/submissions/detail/801673366/
        Runtime: 87 ms, faster than 97.82% of JavaScript online submissions for Most Frequent Even Element.
        Memory Usage: 48.8 MB, less than 95.21% of JavaScript online submissions for Most Frequent Even Element.
    https://leetcode.com/submissions/detail/801680425/
        Runtime: 89 ms, faster than 97.82% of JavaScript online submissions for Most Frequent Even Element.
        Memory Usage: 49.2 MB, less than 89.32% of JavaScript online submissions for Most Frequent Even Element.
    https://leetcode.com/submissions/detail/801686141/
        Runtime: 127 ms, faster than 91.94% of JavaScript online submissions for Most Frequent Even Element.
        Memory Usage: 49.2 MB, less than 86.49% of JavaScript online submissions for Most Frequent Even Element.

 * @param {number[]} nums
 * @return {number}
 */
 var mostFrequentEven = function(nums) {
    let map = new Map();
    let num = -1;
    let freq = 0;
    
    for(let i=0; i<nums.length; i++){
        if(nums[i]%2 === 1) continue;
        
        //  appeared times in nums
        let v = (map.get(nums[i])+1) || 1;
        map.set(nums[i], v);
        
        if(v > freq){
            freq = v;
            num = nums[i];
        }
        //  same frequent, but nums[i] smaller
        else if(v === freq && num > nums[i])
            num = nums[i];
    }
    
    return num;
};