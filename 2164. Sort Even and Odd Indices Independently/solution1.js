/**
    O(3n)
    92~126 ms
    44.4~44.9 MB

 * @param {number[]} nums
 * @return {number[]}
 */
 var sortEvenOdd = function(nums) {
    //  odd and even index element;
    let odd = [];
    let even = [];
    let res = [];
    
    for(let i=0; i<nums.length; i++)
        (i%2 === 0)? even.push(nums[i]): odd.push(nums[i]);
    
    odd.sort((a,b) => a-b);
    even.sort((a,b) => b-a);
    
    while(odd.length || even.length){
        if(even.length)
            res.push(even.pop());
        if(odd.length)
            res.push(odd.pop());
    }
    
    return res;
};