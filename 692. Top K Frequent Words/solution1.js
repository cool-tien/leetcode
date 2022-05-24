/**
    https://leetcode.com/submissions/detail/706044865/
    Runtime: 109 ms, faster than 45.85% of JavaScript online submissions for Top K Frequent Words.
    Memory Usage: 46.3 MB, less than 53.05% of JavaScript online submissions for Top K Frequent Words.

 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
 var topKFrequent = function(words, k) {
    const compare = (s1, s2) => {
        for(let i=0; i<s1.length; i++)
            if(s1[i]>s2[i])
                return 1;
            else if(s1[i]<s2[i])
                return -1;
        return s1.length-s2.length;
    }
    
    let obj = {};
    
    for(let word of words)
        obj[word]? obj[word]++: obj[word]=1;
    
    let arr = Object.entries(obj);
    arr.sort((a,b) => 
        a[1] == b[1]?
            compare(a[0], b[0]):
            b[1] - a[1]
    );
    
    return arr.slice(0, k).map(a => a[0]);
};