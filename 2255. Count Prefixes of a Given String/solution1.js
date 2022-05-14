/**
    https://leetcode.com/submissions/detail/699256232/
    Runtime: 72 ms, faster than 81.12% of JavaScript online submissions for Count Prefixes of a Given String.
    Memory Usage: 44.9 MB, less than 9.31% of JavaScript online submissions for Count Prefixes of a Given String.

 * @param {string[]} words
 * @param {string} s
 * @return {number}
 */
 var countPrefixes = function(words, s) {
    let count = 0;
    
    for(let word of words)
        if(word === s.slice(0, word.length))
            count += 1;
    return count;
};