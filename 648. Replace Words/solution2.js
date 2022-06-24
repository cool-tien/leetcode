/**
    https://leetcode.com/submissions/detail/729775183/
    Runtime: 1987 ms, faster than 5.07% of JavaScript online submissions for Replace Words.
    Memory Usage: 50.8 MB, less than 64.52% of JavaScript online submissions for Replace Words.

 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
 var replaceWords = function(dictionary, sentence) {
    dictionary = new Set(dictionary);
    sentence = sentence.split(" ");
    
    for(let i=0; i<sentence.length; i++){
        let str = "";
        
        for(let c of sentence[i]){
            str += c;
            
            if(dictionary.has(str)){
                sentence[i] = str;
                break;
            }
        }
        
    }
       
    return sentence.join(" ");
};