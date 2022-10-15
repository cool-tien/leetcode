/**
    O(n + m)
    66~105 ms    (28.35%~93.70%)
    42.4~42.7 MB (13.39%~29.92%)
    
    https://leetcode.com/submissions/detail/820558419/
        Runtime: 105 ms, faster than 28.35% of JavaScript online submissions for Minimum Number of Operations to Convert Time.
        Memory Usage: 42.4 MB, less than 29.92% of JavaScript online submissions for Minimum Number of Operations to Convert Time.
    https://leetcode.com/submissions/detail/820559083/
        Runtime: 66 ms, faster than 93.70% of JavaScript online submissions for Minimum Number of Operations to Convert Time.
        Memory Usage: 42.6 MB, less than 18.90% of JavaScript online submissions for Minimum Number of Operations to Convert Time.
    https://leetcode.com/submissions/detail/820561519/
        Runtime: 102 ms, faster than 31.50% of JavaScript online submissions for Minimum Number of Operations to Convert Time.
        Memory Usage: 42.7 MB, less than 13.39% of JavaScript online submissions for Minimum Number of Operations to Convert Time.

 * @param {string} current
 * @param {string} correct
 * @return {number}
 */
 var convertTime = function(current, correct) {
    const countOperations = (diff) => {
        let _60 = ~~(diff / 60);
        let _15 = ~~((diff % 60) / 15);
        let _5 = ~~((diff % 15) / 5);
        let _1 = diff % 5;

        return _60 + _15 + _5 + _1;
    }
    
    current = current.split(":")
                     .map((s, i) => i? Number(s): Number(s) * 60)
                     .reduce((acc, num) => acc + num);
    correct = correct.split(":")
                     .map((s, i) => i? Number(s): Number(s) * 60)
                     .reduce((acc, num) => acc + num);
    
    return countOperations(correct - current);
};