/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function(s) {
    let score = 0;
    
    for(let i=0; i<s.length-1; i++){
        let left = s.substr(0, i+1).split("").filter(x=>x=="0").length;
        let right = s.substr(i+1).split("").filter(x=>x=="1").length;
        let total = left+right;
        
        if(total>score)
            score = total;
    }
    
    return score;
};