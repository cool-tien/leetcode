/**
    O(n)
    94~122 ms    (13.21%~66.04%)
    42.3~43.2 MB (13.21%~81.13%)
    
    https://leetcode.com/submissions/detail/818401369/
        Runtime: 119 ms, faster than 18.87% of JavaScript online submissions for Minimum Time to Type Word Using Special Typewriter.
        Memory Usage: 42.3 MB, less than 81.13% of JavaScript online submissions for Minimum Time to Type Word Using Special Typewriter.
    https://leetcode.com/submissions/detail/818412143/
        Runtime: 122 ms, faster than 13.21% of JavaScript online submissions for Minimum Time to Type Word Using Special Typewriter.
        Memory Usage: 43.2 MB, less than 13.21% of JavaScript online submissions for Minimum Time to Type Word Using Special Typewriter.
    https://leetcode.com/submissions/detail/818412349/
        Runtime: 94 ms, faster than 66.04% of JavaScript online submissions for Minimum Time to Type Word Using Special Typewriter.
        Memory Usage: 42.3 MB, less than 74.53% of JavaScript online submissions for Minimum Time to Type Word Using Special Typewriter.

 * @param {string} word
 * @return {number}
 */
 var minTimeToType = function(word) {
    let types = [];
    //  initially pointer character = 'a'
    let ptr = 0;
    
    for(let c of word){
        let code = c.charCodeAt() - 97;
        let ptr_left = Math.abs( ((ptr + 26) - code) % 26 );
        let ptr_right = Math.abs( ((code + 26) - ptr) % 26 );
        let type = Math.min(ptr_left, ptr_right);
        
        types.push(type);
        ptr = code;
    }
    
    return word.length + types.reduce((acc, num) => acc + num, 0);
};