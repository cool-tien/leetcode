/**
    O(n)
    102~128 ms   (48.31%~77.70%)
    45.9~47.2 MB (35.14%~64.53%)

    https://leetcode.com/submissions/detail/802030706/
        Runtime: 102 ms, faster than 77.70% of JavaScript online submissions for Count Common Words With One Occurrence.
        Memory Usage: 47.2 MB, less than 35.14% of JavaScript online submissions for Count Common Words With One Occurrence.
    https://leetcode.com/submissions/detail/802055539/
        Runtime: 126 ms, faster than 49.66% of JavaScript online submissions for Count Common Words With One Occurrence.
        Memory Usage: 47.2 MB, less than 35.14% of JavaScript online submissions for Count Common Words With One Occurrence.
    https://leetcode.com/submissions/detail/802056794/
        Runtime: 128 ms, faster than 48.31% of JavaScript online submissions for Count Common Words With One Occurrence.
        Memory Usage: 45.9 MB, less than 64.53% of JavaScript online submissions for Count Common Words With One Occurrence.

 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */
 var countWords = function(words1, words2) {
    let map1 = new Map();
    let map2 = new Map();
    let count = 0;
    
    for(let word of words1)
        map1.set(word, (map1.get(word) || 0) + 1);
    for(let word of words2)
        map2.set(word, (map2.get(word) || 0) + 1);
    
    //  swap for smaller size to loop checking
    if(map1.size > map2.size)
        [map1, map2] = [map2, map1];
    
    for(let [word, appear] of map1)
        //  priority judgment
        if(appear===1 && map2.has(word) && map2.get(word)===1)
            count++;
    
    return count;
};