/**
    O(n)
    63~89 ms
    42.1~44.2 MB

 * @param {string} s
 * @return {number}
 */
 const countAsterisks = s => {
    let count = 0;
    let split = 0;
    
    for(let c of s){
        if(c === '|')
            split++;
        if(c === '*' && split%2 === 0)
            count++;
    }
    
    return count;
}