/**
    Time Complexity: O(n)
        75 ~ 80 ms          (64.54% ~ 79.99%)
    Space Complexity: O(1)
        56.34 ~ 57.19 MB    (6.04% ~ 6.56%)

    https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/submissions/1154149242/
        Runtime 75 ms Beats 79.99%; Memory 56.34 MB Beats 6.56%; 
    https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/submissions/1154151717/
        Runtime 80 ms Beats 64.54%; Memory 57.19 MB Beats 6.04%; 
    https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/submissions/1154152161/
        Runtime 80 ms Beats 64.54%; Memory 56.70 MB Beats 6.27%; 

 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let max = s.substring(0, k).split("").filter(c => vowels.includes(c)).length;
    let count_vowels = max;
    
    for(let i=k; i<s.length; i++){
        if(vowels.includes(s[i - k]))
            count_vowels--;
        if(vowels.includes(s[i]))
            count_vowels++;
        
        max = Math.max(max, count_vowels);
    }

    return max;
};