/**
    O(n / 2)
    72~128 ms    (45.55%~93.95%)
    48.6~49.0 MB (18.99%~39.50%)
    
    https://leetcode.com/submissions/detail/828281449/
        Runtime: 72 ms, faster than 93.95% of JavaScript online submissions for Repeated Substring Pattern.
        Memory Usage: 48.6 MB, less than 39.50% of JavaScript online submissions for Repeated Substring Pattern.
    https://leetcode.com/submissions/detail/828346957/
        Runtime: 128 ms, faster than 45.55% of JavaScript online submissions for Repeated Substring Pattern.
        Memory Usage: 49 MB, less than 18.99% of JavaScript online submissions for Repeated Substring Pattern.
    https://leetcode.com/submissions/detail/828347522/
        Runtime: 126 ms, faster than 46.89% of JavaScript online submissions for Repeated Substring Pattern.
        Memory Usage: 48.7 MB, less than 33.11% of JavaScript online submissions for Repeated Substring Pattern.

 * @param {string} s
 * @return {boolean}
 */
 var repeatedSubstringPattern = function(s) {
    let str_len = s.length;
    let sub_len = ~~(s.length / 2);
    
    while(sub_len){
        //  the substing albe to fit will the "s" size
        if(str_len % sub_len === 0){
            let sub_str = s.substring(0, sub_len);
            
            if(s === sub_str.repeat(str_len / sub_len))
                return true;
        }
        
        sub_len--;
    }
    
    return false;
};