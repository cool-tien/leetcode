/**
    O(n²)
    141~209 ms (33.53%~79.88%)
    52.7~53.1 MB (30.49%~34.15%)
    
    https://leetcode.com/submissions/detail/788448899/
    https://leetcode.com/submissions/detail/788449076/
    https://leetcode.com/submissions/detail/788448705/

 * @param {number[]} nums
 * @return {number}
 */
 var findLHS = function(nums) {
    let hash = {};
    let max = 0;
    
    for(let num of nums)
        hash[num]? hash[num]++: hash[num]=1;
    
    for(let num in hash){
        //  convert property from data type string to integer
        num = ~~num;
        let sum = 0;
        
        if(hash[num-1]){
            sum = hash[num-1] + hash[num];
            
            if(sum > max)
                max = sum;
        }
        if(hash[num+1]){
            sum = hash[num+1] + hash[num];
            
            if(sum > max)
                max = sum;
        }
    }
    
    return max;
};