/**
    Time Complexity: O(nm) 
        862 ~ 896 ms    (?% ~ ?%)
    Space Complexity: O() 
        50.4 ~ 50.8 MB  (?% ~ ?%)

    https://leetcode.com/problems/find-the-maximum-divisibility-score/submissions/934992941/
        Runtime 862 ms, Beats ? %; Memory 50.4 MB, Beats ? %;
    https://leetcode.com/problems/find-the-maximum-divisibility-score/submissions/934994328/
        Runtime 888 ms, Beats ? %; Memory 50.8 MB, Beats ? %;
    https://leetcode.com/problems/find-the-maximum-divisibility-score/submissions/934994613/
        Runtime 896 ms, Beats ? %; Memory 50.5 MB, Beats ? %;

 * @param {number[]} nums
 * @param {number[]} divisors
 * @return {number}
 */
var maxDivScore = function(nums, divisors) {
    let max = 0;
    let result = divisors[0];
    //  convert nums into Map for reduce nums length
    let map = new Map();
    
    for(let num of nums)
        map.set(num, (map.get(num) || 0) + 1);
    //  re-asset nums
    nums = [...map];

    for(let divisor of divisors){
        let count = 0;

        for(let [num, val] of nums)
            if(num % divisor === 0){
                count += val;

                if(count > max){
                    max = count;
                    result = divisor;
                }
            }
        
        if(count === max)
            result = Math.min(result, divisor);
    }

    return result;
};