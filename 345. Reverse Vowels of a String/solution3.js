/**
    Time Complexity: O(n) 
        52 ~ 67 ms          (71.35% ~ 98.75%)
    Space Complexity: O(1) 
        54.67 ~ 55.24 MB    (13.39% ~ 16.82%)
    
    https://leetcode.com/problems/reverse-vowels-of-a-string/submissions/1156304947/
        Runtime 67 ms Beats 71.35%; Memory 55.21 MB Beats 13.39%; 
    https://leetcode.com/problems/reverse-vowels-of-a-string/submissions/1156311762/
        Runtime 52 ms Beats 98.75%; Memory 54.67 MB Beats 16.82%; 
    https://leetcode.com/problems/reverse-vowels-of-a-string/submissions/1156312062/
        Runtime 63 ms Beats 83.48%; Memory 55.24 MB Beats 13.39%; 

 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let vowel = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let l = 0;
    let r = s.length - 1;
    
    s = s.split("");
    while(l < r){
        if(vowel.includes(s[l])){
            let found = false;
            
            while(r > l && !found){
                if(vowel.includes(s[r])){
                    found = true;
                    break;
                }

                r--;
            }

            //  swap s[l] and s[r]
            if(found)
                [s[l], s[r]] = [s[r], s[l]];
        }
        else if(vowel.includes(s[r])){
            let found = false;
            
            while(r > l && !found){
                if(vowel.includes(s[l])){
                    found = true;
                    break;
                }
                    
                l++;
            }

            //  swap s[l] and s[r]
            if(found)
                [s[l], s[r]] = [s[r], s[l]];
        }
        
        l++;
        r--;
    }
    
    return s.join("");
};