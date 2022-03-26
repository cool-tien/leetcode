/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    const countOne = (str) =>{
        let one = 0;
        
        for(let c of str)
            if(c=='1')
                one += 1;
        return one;
    }
    
    let res = [0];
    
    for(let i=1; i<=n; i++)
        res[i] = countOne(i.toString(2));
    return res;
};