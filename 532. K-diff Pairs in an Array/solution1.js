/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
    let output = 0;
    
    //  when k=0, use other method
    if(k==0){
        let obj = {};
        
        for(let i=0; i<nums.length; i++){
            if(obj[nums[i]])
                continue;
            
            //   check lastIndexOf nums[i]
            let last_idx = nums.lastIndexOf(nums[i]);
            
            if(last_idx!=i)
                output++;
            obj[nums[i]] = true;
        }
            
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