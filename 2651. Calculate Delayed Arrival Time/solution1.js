/**
    Time Complexity: O(1)
        56 ~ 78 ms      ( 6.74% ~ 84.75%)
    Space Complexity: O(1)
        42.3 ~ 42.7 MB  (16.67% ~ 62.60%)
    
    https://leetcode.com/problems/calculate-delayed-arrival-time/submissions/938164987/
        Runtime 57 ms, Beats 81.56%; Memory 42.7 MB, Beats 16.67%; 
    https://leetcode.com/problems/calculate-delayed-arrival-time/submissions/938285971/
        Runtime 78 ms, Beats  6.74%; Memory 42.7 MB, Beats 16.67%; 
    https://leetcode.com/problems/calculate-delayed-arrival-time/submissions/938286060/
        Runtime 56 ms, Beats 84.75%; Memory 42.3 MB, Beats 62.60%;

 * @param {number} arrivalTime
 * @param {number} delayedTime
 * @return {number}
 */
const findDelayedArrivalTime = (arrivalTime, delayedTime) => 
    (arrivalTime + delayedTime) % 24;