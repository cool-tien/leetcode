/**
    [! Base on solution1, let Bing (GPT) optimize !]

    Time Complexity: O(n)
        79 ~ 105 ms     (35.76% ~ 98.12%)
    Space Complexity: O(n)
        46.3 ~ 46.7 MB  (32.71% ~ 56.47%)
    
    https://leetcode.com/problems/convert-an-array-into-a-2d-array-with-conditions/submissions/940979553/
        Runtime 79 ms, Beats 98.12%; Memory 46.7 MB, Beats 32.71%; 
    https://leetcode.com/problems/convert-an-array-into-a-2d-array-with-conditions/submissions/940979617/
        Runtime 94 ms, Beats 73.65%; Memory 46.5 MB, Beats 41.88%;
    https://leetcode.com/problems/convert-an-array-into-a-2d-array-with-conditions/submissions/940979663/
        Runtime 105 ms, Beats 35.76%; Memory 46.3 MB, Beats 56.47%;

 * @param {number[]} nums
 * @return {number[][]}
 */
var findMatrix = function(nums) {
    let output = [];
    let map = new Map();

    for(let num of nums){
        let idx = map.get(num) || 0;
        let arr = output[idx] || [];

        arr.push(num);
        output[idx] = arr;
        map.set(num, idx + 1);
    }
    
    return output;
};