/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
 var maxRepeating = function(sequence, word) {
    const repeatTimes = (sequence, word) => {
        let count = 0;
        
        while(sequence.startsWith(word)){
            sequence = sequence.substr(word.length);
            count++;
        }
        
        return count;
    }
    
    let idx = sequence.indexOf(word);
    let repeat = 0;
    let max = 0;
    
    //  reset start up index
    if(idx !== -1)
        sequence = sequence.substr(idx);
    
    while(sequence.length){
        repeat = repeatTimes(sequence, word);
        sequence = sequence.substr(1);
        max = Math.max(max, repeat);
    }
    
    return max;
};