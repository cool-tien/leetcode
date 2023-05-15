/**
    Time Complexity: 
        60 ~ 73 ms      (?)
    Space Complexity: 
        44.0 ~ 44.2 MB  (?)

    https://leetcode.com/problems/number-of-senior-citizens/submissions/950495552/
        Runtime 61 ms, Beats ?; Memory 44.2 MB, Beats ?;
    https://leetcode.com/problems/number-of-senior-citizens/submissions/950495611/
        Runtime 73 ms, Beats ?; Memory 44.2 MB, Beats ?;
    https://leetcode.com/problems/number-of-senior-citizens/submissions/950495660/
        Runtime 60 ms, Beats ?; Memory 44.0 MB, Beats ?;

 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function(details) {
    let passengers = 0;

    for(let detail of details){
        const len = detail.length;
        const age = parseInt(detail.substring(len - 4, len -2));
        
        if(age > 60)
            passengers++;
    }

    return passengers;
};