/**
    O(n)
    89~172 ms    (51.19%~94.64%)
    51.9~52.7 MB (37.50%~50.00%)
    
    https://leetcode.com/submissions/detail/835051978/
        Runtime: 138 ms, faster than 75.00% of JavaScript online submissions for Number of Equivalent Domino Pairs.
        Memory Usage: 52.3 MB, less than 43.45% of JavaScript online submissions for Number of Equivalent Domino Pairs.
    https://leetcode.com/submissions/detail/835054151/
        Runtime: 89 ms, faster than 94.64% of JavaScript online submissions for Number of Equivalent Domino Pairs.
        Memory Usage: 52.7 MB, less than 39.29% of JavaScript online submissions for Number of Equivalent Domino Pairs.
    https://leetcode.com/submissions/detail/835058524/
        Runtime: 172 ms, faster than 51.19% of JavaScript online submissions for Number of Equivalent Domino Pairs.
        Memory Usage: 51.9 MB, less than 50.00% of JavaScript online submissions for Number of Equivalent Domino Pairs.
    https://leetcode.com/submissions/detail/835058669/
        Runtime: 111 ms, faster than 86.31% of JavaScript online submissions for Number of Equivalent Domino Pairs.
        Memory Usage: 52.7 MB, less than 37.50% of JavaScript online submissions for Number of Equivalent Domino Pairs.

 * @param {number[][]} dominoes
 * @return {number}
 */
 var numEquivDominoPairs = function(dominoes) {
    let map = new Map();
    let pairs = 0;
    
    for(let [num1, num2] of dominoes){
        //  swap the numbers for keep the key same
        if(num1 > num2)
            [num1, num2] = [num2, num1];
        
        let key = `${num1}_${num2}`;
        
        if(map.has(key)){
            let pair = map.get(key);
            
            pairs += pair;
            map.set(key, pair + 1);
        }
        else
            map.set(key, 1);
    }
    
    return pairs;
};