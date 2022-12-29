/**
    Time Complexity: O(2n)
    Space Complexity: O(n)

    https://leetcode.com/problems/longest-palindrome/submissions/867230148/
        Runtime 53 ms, Beats 99.93%; Memory 42.5 MB, Beats 94.90%
    https://leetcode.com/problems/longest-palindrome/submissions/867231037/
        Runtime 68 ms, Beats 92.38%; Memory 42.7 MB, Beats 90.77%
    https://leetcode.com/problems/longest-palindrome/submissions/867231199/
        Runtime 52 ms, Beats 99.93%; Memory 42.5 MB, Beats 94.90%

 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let map = new Map();
    let longest = 0;
    //  count odd appear time
    let odd_count = 0;

    for(let c of s)
        map.set(c, (map.get(c) || 0) + 1);

    for(let appear of [...map.values()]){
        longest += appear;

        if(appear % 2 === 1)
            odd_count++;
    }
    
    return (odd_count >= 2)? 
        longest - (odd_count - 1): 
        longest;
};