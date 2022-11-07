/**
    O(n)
    68~118 ms    (35.87%~95.65%)
    42.7~43.3 MB (57.61%~86.41%)

    https://leetcode.com/submissions/detail/837119444/
        Runtime: 75 ms, faster than 90.76% of JavaScript online submissions for Slowest Key.
        Memory Usage: 42.9 MB, less than 82.07% of JavaScript online submissions for Slowest Key.
    https://leetcode.com/submissions/detail/837126376/
        Runtime: 118 ms, faster than 35.87% of JavaScript online submissions for Slowest Key.
        Memory Usage: 43.3 MB, less than 57.61% of JavaScript online submissions for Slowest Key.
    https://leetcode.com/submissions/detail/837126764/
        Runtime: 68 ms, faster than 95.65% of JavaScript online submissions for Slowest Key.
        Memory Usage: 42.7 MB, less than 86.41% of JavaScript online submissions for Slowest Key.

 * @param {number[]} releaseTimes
 * @param {string} keysPressed
 * @return {character}
 */
 var slowestKey = function(releaseTimes, keysPressed) {
    let slower = {
        duration: -1,
        char: ''
    }
    let durations = releaseTimes.map((x, i) => {
        let duration = releaseTimes[i] - (releaseTimes[i-1] || 0)
        
        if(duration > slower.duration){
            slower.duration = duration;
            slower.char = keysPressed[i];
        }
        else if(duration === slower.duration && keysPressed[i] > slower.char)
            slower.char = keysPressed[i];
        
        return duration;    
    });
    
    return slower.char;
};