/**
    Time Complexity: O(n)
        73 ~ 78 ms      (50.30% ~ 70.10%)
    Space Complexity: O(1)
        44.4 ~ 45.0 MB  (53.79% ~ 69.23%)
    
    https://leetcode.com/problems/difference-between-element-sum-and-digit-sum-of-an-array/submissions/888452296/
        Runtime 73 ms, Beats 70.10%; Memory 45.0 MB, Beats 53.79%
    https://leetcode.com/problems/difference-between-element-sum-and-digit-sum-of-an-array/submissions/888453025/
        Runtime 78 ms, Beats 50.30%; Memory 44.5 MB, Beats 66.23%
    https://leetcode.com/problems/difference-between-element-sum-and-digit-sum-of-an-array/submissions/888453248/
        Runtime 76 ms, Beats 58.83%; Memory 44.4 MB, Beats 69.23%

 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    let element_sum = 0;
    let digit_sum = 0;

    for(let num of nums){
        element_sum += num;

        //  sum digit
        for(let c of ""+num)
            digit_sum += (+c);
    }
    
    return Math.abs(element_sum - digit_sum);
};