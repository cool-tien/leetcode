/**
    Time Complexity: O(n)
        53 ~ 72 ms      (54.78% ~ 98.70%)
    Space Complexity: O(1)
        44.6 ~ 45.0 MB  (62.61% ~ 86.30%)
    
    https://leetcode.com/problems/shortest-distance-to-target-string-in-a-circular-array/submissions/887787310/
        Runtime 53 ms, Beats 98.70%; Memory 44.6 MB, Beats 86.30%
    https://leetcode.com/problems/shortest-distance-to-target-string-in-a-circular-array/submissions/887789664/
        Runtime 63 ms, Beats 87.61%; Memory 45.0 MB, Beats 62.61%
    https://leetcode.com/problems/shortest-distance-to-target-string-in-a-circular-array/submissions/887789808/
        Runtime 72 ms, Beats 54.78%; Memory 44.7 MB, Beats 78.70%

 * @param {string[]} words
 * @param {string} target
 * @param {number} startIndex
 * @return {number}
 */
var closetTarget = function(words, target, startIndex) {
    let len = words.length;
    let distance = null;

    for(let i=0; i<len; i++){
        let left = startIndex - i;
        //  avoid overflow in .at()
        let right = (startIndex + i) % len;

        if(words.at(left) === target){
            //  compare minimum distance or first time assign distance
            distance = (distance)?
                Math.min(distance, i): i
            break;
        }
        
        if(words.at(right) === target){
            //  compare minimum distance or first time assign distance
            distance = (distance)?
                Math.min(distance, i): i
            
            break;
        }
    }
    
    return (distance === null)? -1: distance;
};