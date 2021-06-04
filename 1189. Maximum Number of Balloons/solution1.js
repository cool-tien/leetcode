/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    let count = 0;
    text = text.split("");
    
    while(text.length){
        let arr = ["b", "a", "l", "l", "o", "o", "n"];
        let flag = true;
        
        for(let c of arr){
            let idx = text.indexOf(c);
            
            if(idx!=-1)
                text.splice(idx, 1);
            else{
                flag = false;
                break;
            }
        }
        
        if(!flag)
            break;
        else
            count++;
    }
    
    return count;
};