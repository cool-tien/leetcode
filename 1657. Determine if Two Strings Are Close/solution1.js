/**
    Time Complexity: O(n log n)
        169 ~ 191 ms        (14.15% ~ 28.63%)
    Space Complexity: O(n + m)
        57.78 ~ 58.34 MB    ( 8.51% ~ 10.50%)

    https://leetcode.com/problems/determine-if-two-strings-are-close/submissions/1167335238/
        Runtime 169 ms Beats 28.63%; Memory 58.34 MB Beats  8.51%; 
    https://leetcode.com/problems/determine-if-two-strings-are-close/submissions/1167336162/
        Runtime 184 ms Beats 17.02%; Memory 57.78 MB Beats 10.50%; 
    https://leetcode.com/problems/determine-if-two-strings-are-close/submissions/1167336267/
        Runtime 191 ms Beats 14.15%; Memory 58.10 MB Beats  9.32%; 

 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function(word1, word2) {
    if(word1.length !== word2.length) return false;

    let obj1 = {};
    let obj2 = {};
    let appear1 = [];
    let appear2 = [];
    
    //  build map of "word1" and "word2"
    for(const c of word1)
        obj1[c]? 
            obj1[c]++: 
            obj1[c] = 1;
    for(const c of word2)
        obj2[c]? 
            obj2[c]++: 
            obj2[c] = 1;
    
    //  checking if a character of "obj1" or "obj2" not exist in another 
    for(const prop in obj1)
        if(!obj2[prop])
            return false;
    for(const prop in obj2)
        if(!obj1[prop])
            return false;
    
    appear1 = Object.values(obj1);
    appear2 = Object.values(obj2);

    appear1.sort((a, b) => a - b);
    appear2.sort((a, b) => a - b);

    for(let i=0; i<appear1.length; i++)
        if(appear1[i] !== appear2[i])
            return false;
    return true;
};