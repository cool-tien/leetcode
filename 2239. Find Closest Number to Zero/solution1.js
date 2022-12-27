/**
    Time complexity: O(n)
        67 ~ 74 ms      (89.23% ~ 95.38%)
    Space complexity: O(n)
        46.4 ~ 47.0 MB  (8.72% ~ 9.23%)

    https://leetcode.com/problems/find-closest-number-to-zero/submissions/864558622/
        Runtime 74 ms, Beats 89.74%; Memory 46.9 MB, Beats 8.72%
    https://leetcode.com/problems/find-closest-number-to-zero/submissions/864567613/
        Runtime 75 ms, Beats 89.23%; Memory 47.0 MB, Beats 8.72%
    https://leetcode.com/problems/find-closest-number-to-zero/submissions/864567939/
        Runtime 67 ms, Beats 95.38%; Memory 46.4 MB, Beats 9.23%

 * @param {number[]} nums
 * @return {number}
 */
var findClosestNumber = function(nums) {
    let set = new Set();
    let closest = Number.MAX_VALUE;

    for(let num of nums){
        let abs = Math.abs(num);

        if(closest > abs)
            closest = abs;
        set.add(num);
    }

    return set.has(closest)? closest: -closest;
};