/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function(s) {
    if(s.length==1) return 1;
    
    let max = 0;
    let count = 0;
    let cur = "";
    
    for(let i=0; i<s.length; i++){
        if(cur!=s[i]){
            cur = s[i];
            count = 1;
        }
        else
            count++;
        
        if(count>max)
            max = count;
    }
    
    return max;
};