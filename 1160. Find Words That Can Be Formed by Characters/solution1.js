/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
    let count = 0;
    
    for(let w of words){
        let char = chars.split("");
        let flag = true;
        
        for(let c of w){
            let idx = char.indexOf(c);
            
            if(idx!=-1){
                char.splice(idx, 1);
            }
            else{
                flag = false;
                break;
            }
        }
        
        if(flag)
            count += w.length;
    }
    
    return count;
};