/**
    Runtime: 92 ms, faster than 45.74% of JavaScript online submissions for Largest 3-Same-Digit Number in String.
    Memory Usage: 44.5 MB, less than 33.33% of JavaScript online submissions for Largest 3-Same-Digit Number in String.

 * @param {string} num
 * @return {string}
 */
 var largestGoodInteger = function(num) {
    let res = null;
    let i = 0;
    
    while(i<num.length){
        let str = num.substr(i, 3);
        
        //  good number
        if(str[0]==str[1] && str[1]==str[2]){
            let good_num = ~~str;
            
            if(good_num>res || res==null)
                res = good_num;
            i += 3;
        }
        else
            i += 1;
    }
    
    return res==null? "": res.toString().padStart(3, 0);
};