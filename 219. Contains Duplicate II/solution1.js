/**
    O(n)
    1998~2281 ms (19.16%~20.12%)
    52.4~52.6 MB

 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
 var containsNearbyDuplicate = function(nums, k) {
    if(k === 0) return false;
    
    let arr = [];
    
    for(let num of nums){
        if(arr.includes(num))
            return true;
        
        if(arr.length === k)
            arr.shift();
        arr.push(num);
    }
    
    return false;
};