/**
    https://leetcode.com/submissions/detail/710481575/
    Runtime: 1300 ms, faster than 21.88% of JavaScript online submissions for Word Subsets.
    Memory Usage: 79.5 MB, less than 34.38% of JavaScript online submissions for Word Subsets.

 * @param {string[]} words1
 * @param {string[]} words2
 * @return {string[]}
 */
 var wordSubsets = function(words1, words2) {
    const countAppear = (str, obj={}) => {
        let new_obj = {};
        
        for(let c of str)
            new_obj[c]? new_obj[c]++: new_obj[c]=1;
        for(let prop in obj)
            new_obj[prop] = new_obj[prop]? Math.max(obj[prop], new_obj[prop]): obj[prop];
        
        return new_obj;
    }
    
    let res = [];
    let obj2 = {};
    
    for(let word2 of words2)
        obj2 = countAppear(word2, obj2);
    
    for(let word1 of words1){
        let match = true;
        let obj1 = countAppear(word1);
        
        for(let prop in obj2)
            if(obj1[prop]==null || obj2[prop]>obj1[prop]){
                match = false;
                break;
            }
            
        if(match)
            res.push(word1);
    }
    
    return res;
};