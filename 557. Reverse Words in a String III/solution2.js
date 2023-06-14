/**
    Problem Link: https://leetcode.com/problems/reverse-words-in-a-string-iii/

    Time Complexity: O(n)
        71 ~ 77 ms      (46.00 ~ 73.28%)
    Space Complexity: O(n)
        48.4 ~ 48.9 MB  (30.50 ~ 63.51%)

    https://leetcode.com/problems/reverse-words-in-a-string-iii/submissions/970792112/
        Runtime 71 ms, Beats 73.28%; Memory 48.4 MB, Beats 63.51%; 
    https://leetcode.com/problems/reverse-words-in-a-string-iii/submissions/970796248/
        Runtime 77 ms, Beats 46.00%; Memory 48.9 MB, Beats 30.50%; 
    https://leetcode.com/problems/reverse-words-in-a-string-iii/submissions/970798448/
        Runtime 76 ms, Beats 50.47%; Memory 48.9 MB, Beats 30.50%; 

 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    s = s.split(" ");

    for(let i=0; i<s.length; i++){
        //  after reverse left and right site string
        let left_str = "";
        let right_str = "";
        let is_odd = (s[i].length % 2);
        let half = (is_odd)?
            parseInt(s[i].length / 2): 
            s[i].length / 2;
        
        //  build left and right string
        for(let j=0; j<half; j++){
            left_str += s[i].at(-(j + 1));
            right_str = s[i][j] + right_str;
        }

        //  if length was odd, need add middle char of the word
        const reverse_str = (is_odd)? 
            (left_str + s[i][half] + right_str): 
            left_str + right_str;
        s[i] = reverse_str;
    }
    
    return s.join(" ");
};