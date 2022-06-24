/**
    https://leetcode.com/submissions/detail/729763314/
    Runtime: 1785 ms, faster than 5.07% of JavaScript online submissions for Replace Words.
    Memory Usage: 50.6 MB, less than 66.36% of JavaScript online submissions for Replace Words.

 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function(dictionary, sentence) {
    sentence = sentence.split(" ");
    
    for(let i=0; i<sentence.length; i++){
        let str = "";
        
        for(let c of sentence[i]){
            let found = false;
            str += c;
            
            for(let word of dictionary)
                if(str == word){
                    sentence[i] = word;
                    
                    found = true;
                    break;
                }
            
            if(found)
                break;
        }
        
    }
       
    return sentence.join(" ");
};