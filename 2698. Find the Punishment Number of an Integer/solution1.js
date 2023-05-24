/**
    Time Complexity: O(n³)
        324 ~ 355 ms    (22.23% ~ 23.61%)
    Space Complexity: O(n)
        48.9 ~ 49.5 MB  (15.28% ~ 59.72%)
    
    https://leetcode.com/problems/find-the-punishment-number-of-an-integer/submissions/954255410/
        Runtime 355 ms, Beats 22.23%; Memory 48.9 MB, Beats 59.72%; 
    https://leetcode.com/problems/find-the-punishment-number-of-an-integer/submissions/956140899/
        Runtime 324 ms, Beats 23.61%; Memory 49.5 MB, Beats 15.28%; 
    https://leetcode.com/problems/find-the-punishment-number-of-an-integer/submissions/956141570/
        Runtime 354 ms, Beats 22.23%; Memory 49.5 MB, Beats 20.83%; 

 * @param {number} n
 * @return {number}
 */
var punishmentNumber = function(n) {
    function canCombine(n) {
        let x = (n * n).toString();

        function helper(s, target) {
            if (s.length === 0) {
                return target === 0;
            }
            for (let i = 0; i <= s.length; i++) {
                if (helper(s.slice(i + 1), target - parseInt(s.slice(0, i + 1)))) {
                    return true;
                }
            }
            return false;
        }

        return helper(x, n);
    }
    
    let punishment = [];
    
    for(let i=1; i<=n; i++)
        if(canCombine(i))
            punishment.push((i * i));
    return punishment.reduce((acc, cur) => acc + cur, 0);
};