/**
    https://leetcode.com/submissions/detail/733968510/
    Runtime: 78 ms, faster than 92.19% of JavaScript online submissions for Maximum Points You Can Obtain from Cards.
    Memory Usage: 51.1 MB, less than 13.34% of JavaScript online submissions for Maximum Points You Can Obtain from Cards.

 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
 var maxScore = function(cardPoints, k) {
    if(k >= cardPoints.length)
        return cardPoints.reduce((a,b)=>a+b, 0);
    
    let left = cardPoints.slice(0, k);
    let right = cardPoints.slice(cardPoints.length-k);
    let len = left.length;
    let sum = left.reduce((a,b)=>a+b);
    let max = sum;
    
    for(let i=0; i<k; i++){
        sum = sum - left[len-i-1] + right[len-i-1];
        
        if(sum > max)
            max = sum;
    }
    
    return max;
};