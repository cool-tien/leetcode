/**
    O(1)
    87~115 ms 
    42.5~43.1 MB

    [2022-10-24 11:11 (UTC+8)]
    https://leetcode.com/submissions/detail/829005114/
        Runtime: 115 ms, faster than 100.00% of JavaScript online submissions for Determine if Two Events Have Conflict.
        Memory Usage: 42.5 MB, less than 100.00% of JavaScript online submissions for Determine if Two Events Have Conflict.
    https://leetcode.com/submissions/detail/829008346/
        Runtime: 87 ms, faster than 100.00% of JavaScript online submissions for Determine if Two Events Have Conflict.
        Memory Usage: 43 MB, less than 100.00% of JavaScript online submissions for Determine if Two Events Have Conflict.
    https://leetcode.com/submissions/detail/829009365/
        Runtime: 88 ms, faster than 100.00% of JavaScript online submissions for Determine if Two Events Have Conflict.
        Memory Usage: 43.1 MB, less than 100.00% of JavaScript online submissions for Determine if Two Events Have Conflict.

 * @param {string[]} event1
 * @param {string[]} event2
 * @return {boolean}
 */
var haveConflict = function(event1, event2) {
    const checkConflict = (event1, event2) => {
        let time1_s = new Date(`1900-01-01 ${event1[0]}`).getTime();
        let time1_e = new Date(`1900-01-01 ${event1[1]}`).getTime();
        let time2_s = new Date(`1900-01-01 ${event2[0]}`).getTime();

        return ( (time2_s >= time1_s) && (time2_s <= time1_e) );
    }
    
    return (checkConflict(event1, event2) || checkConflict(event2, event1));
};