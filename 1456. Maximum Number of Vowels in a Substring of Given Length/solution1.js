/**
    Time Complexity: O(n) 
        409 ~ 415 ms        (7.25% ~ 7.42%)
    Space Complexity: O(n) 
        59.73 ~ 59.80 MB    (5.48%)

    https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/submissions/1153139718/
        Runtime 411 ms Beats 7.36%; Memory 59.78 MB Beats 5.48%; 
    https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/submissions/1153141927/
        Runtime 409 ms Beats 7.42%; Memory 59.73 MB Beats 5.48%; 
    https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/submissions/1153142775/
        Runtime 415 ms Beats 7.25%; Memory 59.80 MB Beats 5.48%; 

 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let strs = s.substring(0, k).split("");
    let max = strs.filter(c => vowels.includes(c)).length;
    let count_vowels = max;

    for(let i=k; i<s.length; i++){
        if(vowels.includes(strs[0]))
            count_vowels--;

        strs.shift();
        strs.push(s[i]);

        if(vowels.includes(s[i]))
            count_vowels++;

        max = Math.max(max, count_vowels);
    }

    return max;
};