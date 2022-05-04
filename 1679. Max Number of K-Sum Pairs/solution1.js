/**
    https://leetcode.com/submissions/detail/692833648/

 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var maxOperations = function(nums, k) {
    //  exist pair;
    let pair = new Set();
    //  count number of exist time
    let obj = {};
    let count = 0;
    
    for(let num of nums)
        obj[num]? obj[num]++: obj[num]=1;
    
    for(let num1 in obj){
        if(pair.has(~~num1)) continue;
        
        let num2 = k - num1;
        
        if(obj[num2]){
            //  self (num1 = num2)
            if(num1 == num2)
                count += ~~(obj[num1]/2);
            else
                count += Math.min(obj[num1], obj[num2]);
            
            pair.add(~~num1);
            pair.add(~~num2);
        }
    }
    
    return count;
};