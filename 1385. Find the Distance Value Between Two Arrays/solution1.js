/**
    O(nm)
    69 ~ 78 ms      (88.60% ~ 95.61%)
    42.6 ~ 42.8 MB  (66.67% ~ 69.74%)

    https://leetcode.com/problems/find-the-distance-value-between-two-arrays/submissions/859944955/
        Runtime 78 ms, Beats 88.60%; Memory 42.7 MB, Beats 69.74%
    https://leetcode.com/problems/find-the-distance-value-between-two-arrays/submissions/859945864/
        Runtime 72 ms, Beats 93.86%; Memory 42.6 MB, Beats 69.74%
    https://leetcode.com/problems/find-the-distance-value-between-two-arrays/submissions/859946074/
        Runtime 69 ms, Beats 95.61%; Memory 42.8 MB, Beats 66.67%

 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
var findTheDistanceValue = function(arr1, arr2, d) {
    let count = 0;

    for(let num1 of arr1){
        //  not exist absolute distance <= d
        let not_exist = true;

        for(let num2 of arr2)
            if(Math.abs(num1 - num2) <= d){
                not_exist = false;
                break;
            }
        
        if(not_exist)
            count++;
    }

    return count;
};