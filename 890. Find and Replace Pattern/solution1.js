/**
    O(n)
    72~80 ms
    40.2~45 MB

 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
 var findAndReplacePattern = function(words, pattern) {
    let res = [];
    let p = [...new Set(pattern)];
    
    for(let i=0; i<words.length; i++){
        let map = new Map();
        let w = [...new Set(words[i])];
        
        if(p.length!=w.length)
            continue;
        
        for(let j=0; j<p.length; j++)
            map.set(w[j], p[j]);
        
        let flag = true;
        for(let j=0; j<words[i].length; j++){
            if(map.get(words[i][j])!=pattern[j]){
                flag = false;
                break;
            }
        }
        
        if(flag)
            res.push(words[i]);
    }
    
    return res;
};