/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function(s) {
    let score = 0;
    
    for(let i=0; i<s.length-1; i++){
        let left = s.substr(0, i+1);
        let right = s.substr(i+1);
        let l = 0;
        let r = 0;
        
        for(let j=0; j<left.length; j++)
            if(left[j]=="0")
                l++;
        for(let j=0; j<right.length; j++)
            if(right[j]=="1")
                r++;
        score = Math.max(score, l + r);
    }
    
    return score;
};