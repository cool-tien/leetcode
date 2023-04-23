/**
    Time Complexity: O(n)
        50 ~ 72 ms      (8.34% ~ 96.28%)
    Space Complexity: O(1)
        43.8 ~ 44.8 MB  (6.37% ~ 21.93%)

    https://leetcode.com/problems/array-reduce-transformation/submissions/938283041/
        Runtime 50 ms, Beats 96.28%; Memory 43.8 MB, Beats 21.93%; 
    https://leetcode.com/problems/array-reduce-transformation/submissions/938283465/
        Runtime 72 ms, Beats  8.34%; Memory 44.8 MB, Beats  6.37%;
    https://leetcode.com/problems/array-reduce-transformation/submissions/938283567/
        Runtime 57 ms, Beats 79.75%; Memory 44.8 MB, Beats  6.37%;

 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
const reduce = (nums, fn, init) => {
    if(nums.length === 0) return init;
  
    let output = init;
  
    for(let num of nums)
      output = fn(output, num);
    return output;
  }