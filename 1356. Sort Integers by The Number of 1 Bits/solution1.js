/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function(arr) {
    arr.sort((a,b)=>{
        let diff = a.toString(2).split("").filter(x=>x=="1").length-b.toString(2).split("").filter(x=>x=="1").length;
        
        if(diff==0)
            return a-b;
        else
            return diff;
    });
    
    return arr;
};