/**
    O(n²)
    97~115 ms    (12.93%~47.41%)
    42.2~43.1 MB (6.90%~51.72%)

    https://leetcode.com/submissions/detail/814036137/
        Runtime: 115 ms, faster than 12.93% of JavaScript online submissions for Maximum Repeating Substring.
        Memory Usage: 43.1 MB, less than 6.90% of JavaScript online submissions for Maximum Repeating Substring.
    https://leetcode.com/submissions/detail/814640885/
        Runtime: 106 ms, faster than 32.76% of JavaScript online submissions for Maximum Repeating Substring.
        Memory Usage: 42.6 MB, less than 6.90% of JavaScript online submissions for Maximum Repeating Substring.
    https://leetcode.com/submissions/detail/814641698/
        Runtime: 97 ms, faster than 47.41% of JavaScript online submissions for Maximum Repeating Substring.
        Memory Usage: 42.2 MB, less than 51.72% of JavaScript online submissions for Maximum Repeating Substring.

 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
 var maxRepeating = function(sequence, word) {
    const repeatTimes = (sequence, word) => {
        let count = 0;
        
        while(sequence.startsWith(word)){
            sequence = sequence.substr(word.length);
            count++;
        }
        
        return count;
    }
    
    let idx = sequence.indexOf(word);
    let repeat = 0;
    let max = 0;
    
    //  reset start up index
    if(idx !== -1)
        sequence = sequence.substr(idx);
    
    while(sequence.length){
        repeat = repeatTimes(sequence, word);
        sequence = sequence.substr(1);
        max = Math.max(max, repeat);
    }
    
    return max;
};