/**
    refer: 
        netizens (localeCompare function)

    https://leetcode.com/submissions/detail/706048924/
    Runtime: 115 ms, faster than 38.65% of JavaScript online submissions for Top K Frequent Words.
    Memory Usage: 48.2 MB, less than 16.90% of JavaScript online submissions for Top K Frequent Words.

 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
 var topKFrequent = function(words, k) {
    let obj = {};
    
    for(let word of words)
        obj[word]? obj[word]++: obj[word]=1;
    
    let arr = Object.entries(obj);
    arr.sort((a,b) => 
        a[1] == b[1]?
            a[0].localeCompare(b[0]):
            b[1] - a[1]
    );
    
    return arr.slice(0, k).map(a => a[0]);
};