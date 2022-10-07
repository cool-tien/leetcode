/**
    O(nm)
    90~108 ms    (29.47%~65.79%)
    43.8~44.4 MB (21.58%~49.47%)

    https://leetcode.com/submissions/detail/816876453/
        Runtime: 108 ms, faster than 39.47% of JavaScript online submissions for Maximum Number of Words You Can Type.
        Memory Usage: 43.8 MB, less than 49.47% of JavaScript online submissions for Maximum Number of Words You Can Type.
    https://leetcode.com/submissions/detail/816877513/
        Runtime: 112 ms, faster than 29.47% of JavaScript online submissions for Maximum Number of Words You Can Type.
        Memory Usage: 44.4 MB, less than 21.58% of JavaScript online submissions for Maximum Number of Words You Can Type.
    https://leetcode.com/submissions/detail/816877653/
        Runtime: 90 ms, faster than 65.79% of JavaScript online submissions for Maximum Number of Words You Can Type.
        Memory Usage: 44.1 MB, less than 27.90% of JavaScript online submissions for Maximum Number of Words You Can Type.

 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
 var canBeTypedWords = function(text, brokenLetters) {
    let brokens = brokenLetters.split("");
    let count = 0;
    
    for(let word of text.split(" ")){
        let is_broken = false;
        
        for(let c of brokens)
            if(word.includes(c)){
                is_broken = true;
                break;
            }
        
        if(!is_broken)
            count++;
    }
    
    return count;
};