/**
    O(2n)
    73~105 ms
    43.5~43.8 MB

 * @param {number[]} nums
 * @return {number}
 */
 var countElements = function(nums) {
    let count = 0;
    let sorted = [...new Set(nums)].sort((a,b) => a-b);
    sorted.shift();
    sorted.pop();
    
    for(let num of nums)
        if(sorted.includes(num))
            count++;
    return count;
};