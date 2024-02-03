/**
    Time Complexity: O(n)
        61 ~ 86 ms          (24.91% ~ 95.69%)
    Space Complexity: O(1)
        68.14 ~ 68.83 MB    (12.72% ~ 20.57%)
    
    https://leetcode.com/problems/increasing-triplet-subsequence/submissions/1164555240/
        Runtime 79 ms Beats 45.64%; Memory 68.83 MB Beats 12.72%; 
    https://leetcode.com/problems/increasing-triplet-subsequence/submissions/1164562322/
        Runtime 61 ms Beats 96.59%; Memory 68.54 MB Beats 15.16%; 
    https://leetcode.com/problems/increasing-triplet-subsequence/submissions/1164563302/
        Runtime 86 ms Beats 24.91%; Memory 68.14 MB Beats 20.57%; 

 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    let min1 = Number.MAX_SAFE_INTEGER;
    let min2 = Number.MAX_SAFE_INTEGER;

    for(const num of nums){
        if(min1 >= num)
            min1 = num;
        else if(min2 >= num)
            min2 = num;
        else
            return true;
    }

    return false;
};