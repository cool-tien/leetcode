/**
    Problem Link: https://leetcode.com/problems/reverse-words-in-a-string-iii/description/
    
    Time Complexity: O(n)
        72 ~ 79 ms      (38.18% ~ 69.40%）
    Space Complexity: O(n)
        48.1 ~ 48.6 MB  (54.35% ~ 84.86%)

    https://leetcode.com/problems/reverse-words-in-a-string-iii/submissions/970802737/
        Runtime 72 ms, Beats 69.40%; Memory 48.6 MB, Beats 54.35%; 
    https://leetcode.com/problems/reverse-words-in-a-string-iii/submissions/970803975/
        Runtime 73 ms, Beats 64.81%; Memory 48.5 MB, Beats 63.51%; 
    https://leetcode.com/problems/reverse-words-in-a-string-iii/submissions/970804061/
        Runtime 79 ms, Beats 38.10%; Memory 48.1 MB, Beats 84.86%; 

 * @param {string} s
 * @return {string}
 */
const reverseWords = (s) => 
    s.split(" ")
        .map(x => x.split("").reverse().join(""))
        .join(" ");