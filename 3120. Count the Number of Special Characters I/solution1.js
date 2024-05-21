/*
    Time Complexity: O(n²)
    Space Complexity: O(n)
    
    https://leetcode.com/problems/count-the-number-of-special-characters-i/submissions/1263548702/
*/
/**
 * @param {string} word
 * @return {number}
 */
var numberOfSpecialChars = function(word) {
    let special = [];
    let set = new Set();
    
    for(const c of word){
        const key = c.toLowerCase();
        set.add(c);

        if(set.has(key) && set.has(c.toUpperCase())){
            if(!special.includes(key))
                special.push(key);
        }
    }
    
    return special.length;
};