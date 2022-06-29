/**
    https://leetcode.com/submissions/detail/734069691/
    Runtime: 87 ms, faster than 80.25% of JavaScript online submissions for Maximum Points You Can Obtain from Cards.
    Memory Usage: 50.8 MB, less than 15.68% of JavaScript online submissions for Maximum Points You Can Obtain from Cards.

 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
 var maxScore = function(cardPoints, k) {
    if(k >= cardPoints.length)
        return cardPoints.reduce((a,b)=>a+b, 0);
    
    let left = cardPoints.slice(0, k);
    let right = cardPoints.slice(cardPoints.length-k);
    let sum = left.reduce((a,b)=>a+b);
    let max = sum;
    
    for(let i=0; i<k; i++){
        sum = sum - left.pop() + right.pop();
        
        if(sum > max)
            max = sum;
    }
    
    return max;
};