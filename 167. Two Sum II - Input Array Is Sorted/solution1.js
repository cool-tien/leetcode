/**
    https://leetcode.com/submissions/detail/696526761/
    Runtime: 70 ms, faster than 78.62% of JavaScript online submissions for Two Sum II - Input Array Is Sorted.
    Memory Usage: 43.1 MB, less than 43.73% of JavaScript online submissions for Two Sum II - Input Array Is Sorted.

 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(numbers, target) {
    for(let i=numbers.length-1; i>=0; i--)
        for(let j=0; j<i; j++){
            let num = numbers[i]+numbers[j];
            
            if(num > target)
                break;
            else if(num == target)
                return [j+1, i+1];
        }
};