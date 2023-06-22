/**
    Time Complexity: O(n)
        53 ~ 60 ms      (53.61% ~ 79.52%)
    Space Complexity: O(n)
        41.5 ~ 42.4 MB  (30.12% ~ 97.59%)
    
    https://leetcode.com/problems/decrypt-string-from-alphabet-to-integer-mapping/submissions/976758917/
        Runtime 60 ms, Beats 53.61%; Memory 41.5 MB, Beats 97.59%; 
    https://leetcode.com/problems/decrypt-string-from-alphabet-to-integer-mapping/submissions/976759070/
        Runtime 58 ms, Beats 62.65%; Memory 42.0 MB, Beats 71.80%; 
    https://leetcode.com/problems/decrypt-string-from-alphabet-to-integer-mapping/submissions/976759254/
        Runtime 53 ms, Beats 79.52%; Memory 42.4 MB, Beats 30.12%; 

 * @param {string} s
 * @return {string}
 */
const freqAlphabets = s => {
    let output = "";
    const alphabets = {
        "1": "a", 
        "2": "b", 
        "3": "c", 
        "4": "d", 
        "5": "e", 
        "6": "f", 
        "7": "g", 
        "8": "h", 
        "9": "i", 
        "10#": "j", 
        "11#": "k", 
        "12#": "l", 
        "13#": "m", 
        "14#": "n", 
        "15#": "o", 
        "16#": "p", 
        "17#": "q", 
        "18#": "r", 
        "19#": "s", 
        "20#": "t", 
        "21#": "u", 
        "22#": "v", 
        "23#": "w", 
        "24#": "x", 
        "25#": "y", 
        "26#": "z", 
    };
    
    let i = s.length - 1;
    while(i >= 0){
        let num_str = s[i];

        if(s[i] === '#'){
            num_str = s.substring(i - 2, i + 1);
            i -= 3;
        }
        else
            i -= 1;
        
        output = alphabets[num_str] + output;
    }

    return output;
};