/**
 * @param {string} s
 * @return {boolean}
 */
var checkZeroOnes = function(s) {
    let one = 0;
    let zero = 0;
    let cur = "";
    
    for(let c of s){
        cur = cur.indexOf(c)==-1?c:cur+c;
        
        if(cur.indexOf("1")!=-1){
            if(cur.length>one)
                one = cur.length;
        }
        else{
            if(cur.length>zero)
                zero = cur.length;
        }
    }
    
    return one>zero;
};