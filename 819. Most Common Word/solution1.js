/**
    O(n)
    80~126 ms (17.06%~84.76%)
    44.8~45.6 MB (16.64%~36.78%)

    https://leetcode.com/submissions/detail/792625832/
        Runtime: 111 ms, faster than 35.94% of JavaScript online submissions for Most Common Word.
        Memory Usage: 44.8 MB, less than 36.78% of JavaScript online submissions for Most Common Word.
    https://leetcode.com/submissions/detail/792644894/
        Runtime: 80 ms, faster than 84.76% of JavaScript online submissions for Most Common Word.
        Memory Usage: 45.4 MB, less than 17.90% of JavaScript online submissions for Most Common Word.
    https://leetcode.com/submissions/detail/792647464/
        Runtime: 126 ms, faster than 17.06% of JavaScript online submissions for Most Common Word.
        Memory Usage: 45.6 MB, less than 16.64% of JavaScript online submissions for Most Common Word.

 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
 var mostCommonWord = function(paragraph, banned) {
    const symbolsReplace = (str, symbols, replace=" ") => {
        let result = "";
        
        for(let c of str)
            result += symbols.includes(c)? " ": c;
        return result;
    }
    
    let symbols = "!?',;.";
    let words = symbolsReplace(paragraph.toLowerCase(), symbols).split(" ").filter(s => s!=="");
    let map = new Map();
    
    //  count appear times
    for(let word of words)
        map.set(word, (map.get(word) + 1) || 1);
    //  remove banned words
    for(let ban of banned)
        map.delete(ban);
    
    let hash = [...map];
    let output = "";
    let max = -1;
    
    for(let arr of hash)
        if(arr[1] > max){
            max = arr[1];
            output = arr[0];
        }
    
    return output;
};