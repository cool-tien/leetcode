/**
    O(n) 
    64~102 ms    (31.30%~98.47%)
    41.6~42.1 MB (51.91%~92.37%)
    
    https://leetcode.com/submissions/detail/819951131/
        Runtime: 102 ms, faster than 31.30% of JavaScript online submissions for Minimum Number of Operations to Convert Time.
        Memory Usage: 41.6 MB, less than 92.37% of JavaScript online submissions for Minimum Number of Operations to Convert Time.
    https://leetcode.com/submissions/detail/819974738/
        Runtime: 77 ms, faster than 78.63% of JavaScript online submissions for Minimum Number of Operations to Convert Time.
        Memory Usage: 42.1 MB, less than 63.36% of JavaScript online submissions for Minimum Number of Operations to Convert Time.
    https://leetcode.com/submissions/detail/819974925/
        Runtime: 64 ms, faster than 98.47% of JavaScript online submissions for Minimum Number of Operations to Convert Time.
        Memory Usage: 42.1 MB, less than 51.91% of JavaScript online submissions for Minimum Number of Operations to Convert Time.


 * @param {string} current
 * @param {string} correct
 * @return {number}
 */
 var convertTime = function(current, correct) {
    current = current.split(":")
                     .map((s, i) => i? Number(s): Number(s) * 60)
                     .reduce((acc, num) => acc + num);
    correct = correct.split(":")
                     .map((s, i) => i? Number(s): Number(s) * 60)
                     .reduce((acc, num) => acc + num);
    let diff = correct - current;
    let operation = 0;
    
    while(diff){
        if(diff >= 60)
            diff -= 60;
        else if(diff >= 15)
            diff -= 15;
        else if(diff >= 5)
            diff -= 5;
        else if(diff >= 1)
            diff -= 1;
        
        operation++;
    }
    
    return operation;
};