/**
    Time Complexity: O(n²)
        69 ~ 80 ms      (?)
    Space Complexity: O(n)
        44.5 ~ 44.8 MB  (?)

    https://leetcode.com/problems/points-that-intersect-with-cars/submissions/1046109552/
        Runtime 80 ms, Beats ?; Memory 44.5 MB, Beats; 
    https://leetcode.com/problems/points-that-intersect-with-cars/submissions/1046110834/
        Runtime 75 ms, Beats ?; Memory 44.6 MB, Beats; 
    https://leetcode.com/problems/points-that-intersect-with-cars/submissions/1046111591/
        Runtime 69 ms, Beats ?; Memory 44.8 MB, Beats; 

 * @param {number[][]} nums
 * @return {number}
 */
var numberOfPoints = function(nums) {
    let set = new Set();

    for(const [start, end] of nums)
        for(let i=start; i<=end; i++)
            set.add(i);
    return set.size;
};