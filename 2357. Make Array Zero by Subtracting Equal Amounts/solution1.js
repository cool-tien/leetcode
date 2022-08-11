/**
    O(n²)
    84~114 ms
    43.4~44.5 MB

 * @param {number[]} nums
 * @return {number}
 */
 var minimumOperations = function(nums) {
    const existNonZero = arr => {
        for(let num of arr)
            if(num > 0)
                return true;
        return false;
    }
    
    //  rebuild nums to 
    let hash = [...new Set(nums)].sort((a,b) => a-b);
    let operate = 0;
    
    //  remove 0 (not need count 0 with operate)
    if(hash[0] === 0)
        hash.shift();
    
    while(existNonZero(hash)){
        let smallest = hash.shift();
        
        hash.map(x => x-smallest);
        //  remove 0 (not need count 0 with operate)
        if(hash.length && hash[0]===0)
            hash.shift();
        operate++;
    }
    
    return operate;
};