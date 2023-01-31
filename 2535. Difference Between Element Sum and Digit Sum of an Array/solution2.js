/**
    Time Complexity: O(5n)
        68 ~ 78 ms      (50.30% ~ 84.86%)
    Space Complexity: O(1)
        46.1 ~ 46.6 MB  (26.92% ~ 38.64%)

    https://leetcode.com/problems/difference-between-element-sum-and-digit-sum-of-an-array/submissions/888456062/
        Runtime 69 ms, Beats 82.33%; Memory 46.1 MB, Beats 38.64%
    https://leetcode.com/problems/difference-between-element-sum-and-digit-sum-of-an-array/submissions/888456589/
        Runtime 78 ms, Beats 50.30%; Memory 46.1 MB, Beats 38.64%
    https://leetcode.com/problems/difference-between-element-sum-and-digit-sum-of-an-array/submissions/888456746/
        Runtime 68 ms, Beats 84.86%; Memory 46.6 MB, Beats 26.92%

 * @param {number[]} nums
 * @return {number}
 */
const differenceOfSum = nums => {
    let element_sum = nums.reduce((acc, num) => acc + num, 0);
    let digit_sum = nums.join("").split("").map(c => +c).reduce((acc, num) => acc + num, 0);
    
    return Math.abs(element_sum - digit_sum);
}