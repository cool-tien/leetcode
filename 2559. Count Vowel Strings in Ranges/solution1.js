/**
    Time Complexity: O(nm)
        147 ~ 157 ms    (46.94% ~ 63.27%)
    Space Complexity: O(n)
        70.8 ~ 72.4 MB  ( 8.16% ~ 12.25%)

    https://leetcode.com/problems/count-vowel-strings-in-ranges/submissions/940922360/
        Runtime 147 ms, Beats 63.27%; Memory 72.4 MB, Beats 8.16%; 
    https://leetcode.com/problems/count-vowel-strings-in-ranges/submissions/940923249/
        Runtime 157 ms, Beats 46.94%; Memory 70.8 MB, Beats 12.25%; 
    https://leetcode.com/problems/count-vowel-strings-in-ranges/submissions/940923349/
        Runtime 152 ms, Beats 51.20%; Memory 71.0 MB, Beats 10.20%; 

 * @param {string[]} words
 * @param {number[][]} queries
 * @return {number[]}
 */
var vowelStrings = function(words, queries) {
    let vowel = ['a', 'e', 'i', 'o', 'u'];
    let sum = 0;
    let hash = [];
    let output = [];

    for(let word of words){
        //  start and end with vowel
        let is_vowel = (vowel.includes(word.at(0)) && vowel.includes(word.at(-1)));
        
        sum += (is_vowel);
        hash.push(sum);
    }
    
    for(let [l, r] of queries){
        let prev = hash[l - 1] || 0;
        let range = hash[r];
        let count = range - prev;

        output.push(count); 
    }

    return output;
};