/**
    Time Complexity: O(1)
        60 ~ 71 ms      (80.87% ~ 97.39%)
    Space Complexity: O(1)
        43.8 ~ 43.9 MB  (89.57% ~ 91.30%)
    
    https://leetcode.com/problems/k-items-with-the-maximum-sum/submissions/923349324/
        Runtime 68 ms, Beats 89.57%; Memory 43.9 MB, Beats 89.57%
    https://leetcode.com/problems/k-items-with-the-maximum-sum/submissions/923350134/
        Runtime 60 ms, Beats 97.39%; Memory 43.8 MB, Beats 91.30%
    https://leetcode.com/problems/k-items-with-the-maximum-sum/submissions/923350458/
        Runtime 71 ms, Beats 80.87%; Memory 43.8 MB, Beats 89.57%

 * @param {number} numOnes
 * @param {number} numZeros
 * @param {number} numNegOnes
 * @param {number} k
 * @return {number}
 */
var kItemsWithMaximumSum = function(numOnes, numZeros, numNegOnes, k) {
    let count = 0;

    //  handle 1
    if(numOnes >= k)
        return k;
    else{
        k -= numOnes;
        count += numOnes;
    }

    //  handle 0
    if(numZeros >= k)
        return count;
    else
        k -= numZeros;

    //  handle -1
    return count + (Math.min(k, numNegOnes) * -1);
};