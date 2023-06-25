/**
    Time Complexity: O(1)
        62 ~ 67 ms      (11.45% ~ 82.42%)
    Space Complexity: O(1)
        40.9 ~ 41.9 MB  (60.50% ~ 99.89%)

    https://leetcode.com/problems/add-two-promises/submissions/979062475/
        Runtime 78 ms, Beats 11.45%; Memory 41.9 MB, Beats 60.50%; 
    https://leetcode.com/problems/add-two-promises/submissions/979062622/
        Runtime 67 ms, Beats 63.13%; Memory 41.6 MB, Beats 87.10%; 
    https://leetcode.com/problems/add-two-promises/submissions/979063232/
        Runtime 62 ms, Beats 82.42%; Memory 40.9 MB, Beats 99.89%;
    
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function(promise1, promise2) {
    const [num1, num2] = await Promise.all([promise1, promise2]);
    
    return num1 + num2;
};