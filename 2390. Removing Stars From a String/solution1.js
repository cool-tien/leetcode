/**
    Time Complexity: O(n)
        89 ~ 92 ms      (56.17% ~ 62.65%)
    Space Complexity: O(n)
        59.3 ~ 60.9 MB  (29.62% ~ 36.31%)

    https://leetcode.com/problems/removing-stars-from-a-string/submissions/1162516623/
        Runtime 92 ms Beats 56.17%; Memory 59.48 MB Beats 36.03%; 
    https://leetcode.com/problems/removing-stars-from-a-string/submissions/1162595433/
        Runtime 89 ms Beats 62.65%; Memory 60.90 MB Beats 29.62%; 
    https://leetcode.com/problems/removing-stars-from-a-string/submissions/1162595809/
        Runtime 89 ms Beats 62.65%; Memory 59.30 MB Beats 36.31%; 
    
    # Approach
    1. Start from right (end of) "s", looping until "i" = -1.
    2. Increase "stars" until "s[i]" is not *.
    3.
        a. If "stars" >= 1, then simulate remove action.
        b. Else current character not need remove, add it to "output".

 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {
    let output = "";
    let i = s.length - 1;
    let stars = 0;
    
    while(i >= 0){
        while(s[i] === '*'){
            stars++;
            i--;
        }

        if(stars){
            while(stars && s[i] !== '*'){
                i--;
                stars--;
            }
        }
        else{
            output = s[i] + output;
            i--;
        }
    }

    return output;
};