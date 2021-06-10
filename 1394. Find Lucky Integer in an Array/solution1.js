/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
    const countNumber = (arr, n)=>{
        let count = 0;
        
        for(let num of arr)
            if(num==n)
                count++;
        return count;
    }
    
    let res = [...new Set(arr)].sort((a,b)=>b-a);
    
    for(let n of res)
        if(n==countNumber(arr, n))
            return n;
    return -1;
};