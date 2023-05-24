/**
    Time Complexity: O(n) 
        152 ~ 162 ms    (67.11% ~ 89.33%)
    Space Complexity: O(n) 
        52.4 ~ 52.8 MB  (15.11% ~ 19.11%)
    
    https://leetcode.com/problems/lexicographically-smallest-palindrome/submissions/954235095/
        Runtime 161 ms, Beats 68.89%; Memory 52.4 MB, Beats 19.11%; 
    https://leetcode.com/problems/lexicographically-smallest-palindrome/submissions/956139548/
        Runtime 152 ms, Beats 89.33%; Memory 52.6 MB, Beats 17.78%; 
    https://leetcode.com/problems/lexicographically-smallest-palindrome/submissions/956139749/
        Runtime 162 ms, Beats 67.11%; Memory 52.8 MB, Beats 15.11%; 

 * @param {string} s
 * @return {string}
 */
var makeSmallestPalindrome = function(s) {
    const smallerChar = (ch1, ch2) => {
        return (ch1 <= ch2)? ch1: ch2;
    }
    
    const is_odd_len = (s.length % 2);
    const mid = (is_odd_len)? parseInt(s.length / 2): (s.length / 2) - 1;
    let palindrome = (is_odd_len)? 
        s[mid]: 
        smallerChar(s[mid], s[mid + 1]) + smallerChar(s[mid], s[mid + 1]);
    let l = mid - 1;
    let r = (is_odd_len)? (mid + 1): (mid + 2);
    
    while(l >= 0){
        const smaller = smallerChar(s[l], s[r]);
        
        palindrome = smaller + palindrome + smaller;
        l--;
        r++;
    }
    
    return palindrome;
};