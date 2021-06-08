/**
 * @param {string} text
 * @return {string}
 */
var reorderSpaces = function(text) {
    let words = text.split(" ").filter(x=>x!="");
    let words_length = words.length;
    let space_length = (text.match(/ /g) || []).length;
    let space_remain = space_length%(words_length-1);
    
    if(space_length==0)
        return text;
    else if(words_length==1){
        let new_remain = new Array(space_length).fill(" ").join("");
        
        return text.trim()+new_remain;
    }
    
    if(space_remain){
        let space = ~~(space_length/(words_length-1));
        
        let new_space = new Array(space).fill(" ").join("");
        let new_remain = new Array(space_remain).fill(" ").join("");
        return words.join(new_space)+new_remain;
    }
    else{
        let space = space_length/(words_length-1);
        
        let new_space = new Array(space).fill(" ").join("");
        return words.join(new_space);
    }
};