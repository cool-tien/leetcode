/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let res = [];
    let max = 0;
    
    for(let c of s){
        if(c=='('){
            res.push('(');
            if(res.length>max)
                max = res.length;
        }
        else if(c==')')
            res.pop();
    }
    
    return max;
};