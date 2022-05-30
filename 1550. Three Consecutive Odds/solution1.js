/**
    https://leetcode.com/submissions/detail/710479315/
    Runtime: 54 ms, faster than 96.10% of JavaScript online submissions for Three Consecutive Odds.
    Memory Usage: 42.5 MB, less than 11.69% of JavaScript online submissions for Three Consecutive Odds.

 * @param {number[]} arr
 * @return {boolean}
 */
 var threeConsecutiveOdds = function(arr) {
    let count = 0;
    
    for(let num of arr){
        count = (num%2==1)? count+1: 0;
        
        if(count==3)
            return true;
    }
    
    return false;
};