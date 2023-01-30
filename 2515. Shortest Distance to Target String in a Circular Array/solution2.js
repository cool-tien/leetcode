/**
    Time Complexity: O(n)
        48 ~ 67 ms      (76.90% ~ 99.78%)
    Space Complexity: O(1)
        44.3 ~ 45.1 MB  (45.65% ~ 98.48%)
    
    https://leetcode.com/problems/shortest-distance-to-target-string-in-a-circular-array/submissions/887790788/
        Runtime 67 ms, Beats 76.90%; Memory 45.1 MB, Beats 45.65%
    https://leetcode.com/problems/shortest-distance-to-target-string-in-a-circular-array/submissions/887790846/
        Runtime 60 ms, Beats 93.48%; Memory 44.3 MB, Beats 98.48%
    https://leetcode.com/problems/shortest-distance-to-target-string-in-a-circular-array/submissions/887790897/
        Runtime 48 ms, Beats 99.78%; Memory 45.0 MB, Beats 54.13%

 * @param {string[]} words
 * @param {string} target
 * @param {number} startIndex
 * @return {number}
 */
var closetTarget = function(words, target, startIndex) {
    for(let i=0; i<words.length; i++){
        let left = startIndex - i;
        //  avoid overflow in .at()
        let right = (startIndex + i) % words.length;

        if(words.at(left) === target)
            return i;
        else if(words.at(right) === target)
            return i;
    }
    
    return -1;
};