/**
    Time Complexity: O(n log n)
        58 ~ 70 ms          (25.43% ~ 77.26%)
    Space Complexity: O(n)
        50.74 ~ 51.27 MB    (60.15% ~ 83.37%)
    
    https://leetcode.com/problems/existence-of-a-substring-in-a-string-and-its-reverse/submissions/1212224717/
        Runtime 61 ms Beats 62.84%; Memory 50.89 MB Beats 79.22%; 
    https://leetcode.com/problems/existence-of-a-substring-in-a-string-and-its-reverse/submissions/1212237357/
        Runtime 58 ms Beats 77.26%; Memory 51.27 MB Beats 60.15%; 
    https://leetcode.com/problems/existence-of-a-substring-in-a-string-and-its-reverse/submissions/1212237873/
        Runtime 70 ms Beats 25.43%; Memory 50.74 MB Beats 83.37%; 

 * @param {string} s
 * @return {boolean}
 */
var isSubstringPresent = function(s) {
    //  reverse the whole string
    let s_reverse = s.split("").reverse().join("");
    let len = s.length - 1;
    
    for(let i=0; i<len; i++){
        let substr = s.substring(i, i + 2);

        if(s_reverse.includes(substr))
            return true;
    }
    
    return false;
};