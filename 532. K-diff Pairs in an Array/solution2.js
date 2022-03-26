/**
	https://leetcode.com/submissions/detail/637607701/
	Runtime: 81 ms, faster than 87.35% of JavaScript online submissions for K-diff Pairs in an Array.
	Memory Usage: 45 MB, less than 37.35% of JavaScript online submissions for K-diff Pairs in an Array.

 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
    let output = 0;
    
    //  when k=0, use other method
    if(k==0){
        let obj = {};
        
        for(let i=0; i<nums.length; i++)
            if(obj[nums[i]])
                obj[nums[i]] += 1;
            else
                obj[nums[i]] = 1;
        
        for(let property in obj)
            if(obj[property]>=2)
                output += 1;
        return output;
    }
    
    
    nums = [...new Set(nums)].sort((a,b)=>a-b);
    
    for(let i=0; i<nums.length-1; i++)
        for(let j=i+1; j<nums.length; j++)
            //  found target++, break for
            if(nums[j]-nums[i]==k){
                output += 1;
                break;
            }
            //  nums[j++] also not the target, break for
            else if(nums[j]-nums[i]>k)
                break;
    return output;
};
