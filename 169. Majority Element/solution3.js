/**
    Time Complexity: O(n)
        64 ~ 76 ms      (23.43% ~ 75.47%)
    Space Complexity: O(n)
        44.8 ~ 45.7 MB  (21.49% ~ 44.77%)
    
    https://leetcode.com/problems/majority-element/submissions/969302381/
        Runtime 64 ms, Beats 75.47%; Memory 45.2 MB, Beats 39.56%;
    https://leetcode.com/problems/majority-element/submissions/969304422/
        Runtime 76 ms, Beats 23.43%; Memory 44.8 MB, Beats 44.77%; 
    https://leetcode.com/problems/majority-element/submissions/969305486/
        Runtime 64 ms, Beats 75.47%; Memory 45.7 MB, Beats 21.49%; 

 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let map = new Map();
    //  min require 
    let half = ~~(nums.length / 2);

    for(const num of nums){
        map.set(num, (map.get(num) || 0) + 1);

        if(map.get(num) > half)
            return num;
    }

    return null;    
};