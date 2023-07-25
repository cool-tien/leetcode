/**
    Time Complexity: O(n)
        64 ~ 72 ms      (48.21% ~ 81.55%)
    Space Complexity: O(n)
        44.2 ~ 44.4 MB  (33.33% ~ 48.21%)
    
    https://leetcode.com/problems/check-if-array-is-good/submissions/1003116173/
        Runtime 66 ms, Beats 76.19%; Memory 44.4 MB, Beats 33.33%; 
    https://leetcode.com/problems/check-if-array-is-good/submissions/1003117205/
        Runtime 64 ms, Beats 81.55%; Memory 44.3 MB, Beats 36.90%; 
    https://leetcode.com/problems/check-if-array-is-good/submissions/1003119545/
        Runtime 72 ms, Beats 48.21%; Memory 44.2 MB, Beats 48.21%; 

 * @param {number[]} nums
 * @return {boolean}
 */
var isGood = function(nums) {
    let arr = new Array(nums.length - 1).fill(0);
    const last_idx = arr.length - 1;
    
    for(let i=0; i<nums.length; i++){
        const idx = nums[i] - 1;
        
        arr[idx]++;
        if(idx === last_idx){
            if(arr.at(-1) > 2)
                return false;
        }
        else if(arr[idx] >= 2)
            return false;
    }
    
    for(let i=0; i<last_idx; i++)
        if(arr[i] !== 1)
            return false;
    
    return (arr.at(-1) === 2);
};