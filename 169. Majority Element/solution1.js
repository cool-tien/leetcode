/**
	https://leetcode.com/submissions/detail/645691712/
	Runtime: 75 ms, faster than 85.43% of JavaScript online submissions for Majority Element.
	Memory Usage: 46.3 MB, less than 5.30% of JavaScript online submissions for Majority Element.

 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let obj = {};
    let half = parseInt(nums.length/2);
    
    if(nums.length%2==1)
        half += 1;
    
    for(let num of nums){
        obj[num]? obj[num]+=1: obj[num]=1;
        
        if(obj[num]>=half)
            return num;
    }
    
    return -1;
};