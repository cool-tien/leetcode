/**
    O(n)
    73~110 ms
    44.1~44.8 MB

 * @param {string[]} sentences
 * @return {number}
 */
 const mostWordsFound = (sentences) => {
    let max = 0;
    
    for(let word of sentences){
        let space = 0;
        
        for(let c of word)
            if(c === ' ')
                space++;
        
        if(space > max)
            max = space;
    }
    
    return max + 1;
}