/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    let obj = {};
    let arr = [];
    let res = "";
    
    for(let c of s)
        obj[c]?obj[c]+=1:obj[c]=1;
    for (const key in obj)
        arr.push({
            char: key,
            freq: obj[key]
        });
    arr.sort((a,b)=>b.freq-a.freq);
    
    for(let ele of arr)
        for(let i=0; i<ele.freq; i++)
            res += ele.char;
    return res;
};