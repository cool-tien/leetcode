/**
    Time Complexity: O(n²)
        62 ~ 70 ms          (23.62% ~ 59.30%)
    Space Complexity: O(1)
        43.39 ~ 44.11 MB    (47.74% ~ 97.99%)
    
    https://leetcode.com/problems/maximum-strong-pair-xor-i/submissions/1099739607/
        Runtime 70ms Beats 23.62%; Memory 44.11MB Beats 47.74%; 
    https://leetcode.com/problems/maximum-strong-pair-xor-i/submissions/1099741653/
        Runtime 62ms Beats 59.30%; Memory 43.39MB Beats 97.99%;
    https://leetcode.com/problems/maximum-strong-pair-xor-i/submissions/1099742090/
        Runtime 64ms Beats 50.75%; Memory 43.78MB Beats 79.90%;

 * @param {number[]} nums
 * @return {number}
 */
var maximumStrongPairXor = function(nums) {
    let max = 0;
    
    for(let i=0; i<nums.length; i++){
        for(let j=i; j<nums.length; j++){
            const [x, y] = [nums[i], nums[j]];
            const is_strong_pair = (Math.abs(x - y) <= Math.min(x, y));
            
            if(is_strong_pair){
                const xor = nums[i] ^ nums[j];
                
                max = Math.max(xor, max);
            }
        }
    }
    
    return max;
};