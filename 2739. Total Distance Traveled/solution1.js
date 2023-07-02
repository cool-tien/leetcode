/**
    Time Complexity: O(n)
        155 ~ 195       ( 5.72% ~ 87.19%)
    Space Complexity: O(1)
        48.9 ~ 49.5 MB  (49.43% ~ 90.16%)

    https://leetcode.com/problems/total-distance-traveled/submissions/984282537/
        Runtime 195 ms, Beats  5.72%; Memory 49.5 MB, Beats 49.43%; 
    https://leetcode.com/problems/total-distance-traveled/submissions/984336939/
        Runtime 182 ms, Beats 24.71%; Memory 49.4 MB, Beats 49.43%; 
    https://leetcode.com/problems/total-distance-traveled/submissions/984337257/
        Runtime 155 ms, Beats 87.19%; Memory 48.9 MB, Beats 90.16%; 

 * @param {number} mainTank
 * @param {number} additionalTank
 * @return {number}
 */
var distanceTraveled = function(mainTank, additionalTank) {
    let litre = 0;
    
    while(mainTank >= 5 && additionalTank){
        litre += 5;
        mainTank -= 4;
        additionalTank--;
    }

    return (litre + mainTank) * 10;
};