/**
    O(n)
    229~276 ms (45.63%~69.90%)
    68.8~82.2 MB (7.77%~24.27%)

 * @param {string} s
 * @return {string}
 */
 var makeFancyString = function(s) {
    let fancy = [];
    let continuous = 1;
    
    for(let c of s){
        let last = fancy.length - 1;
        
        if(fancy[last] !== c){
            fancy.push(c);
            continuous = 1;
        }
        else{
            continuous++;
            
            if(continuous < 3)
                fancy.push(c);
        }
    }
    
    return fancy.join("");
};