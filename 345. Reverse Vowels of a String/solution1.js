/**
    O(2n)
    88~140 ms    (53.72%~91.84%)
    43.6~48.1 MB (76.45%~99.79%)
    
    https://leetcode.com/submissions/detail/513360070/
        Runtime: 92 ms, faster than 90.19% of JavaScript online submissions for Reverse Vowels of a String.
        Memory Usage: 43.6 MB, less than 99.79% of JavaScript online submissions for Reverse Vowels of a String.
    https://leetcode.com/submissions/detail/836442317/
        Runtime: 88 ms, faster than 91.84% of JavaScript online submissions for Reverse Vowels of a String.
        Memory Usage: 47.4 MB, less than 97.62% of JavaScript online submissions for Reverse Vowels of a String.
    https://leetcode.com/submissions/detail/836444255/
        Runtime: 140 ms, faster than 53.72% of JavaScript online submissions for Reverse Vowels of a String.
        Memory Usage: 48.1 MB, less than 76.45% of JavaScript online submissions for Reverse Vowels of a String.

 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let idx = [];
    let vowel = [];
    let obj = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    s = s.split("");
    
    s.forEach((x,i)=>{
        if(obj.indexOf(x)!=-1){
            idx.push(i);
            vowel.push(x);
        }
    });
    
    vowel = vowel.reverse();
    let i = 0;
    idx.forEach(x=>s[x]=vowel[i++]);
    
    return s.join("");
};