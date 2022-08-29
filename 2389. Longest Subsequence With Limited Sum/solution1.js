/**
    O(mn + 2n)
    93~159 ms
    44.3~44.6 MB

 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
 var answerQueries = function(nums, queries) {
    let hash = [];
    let res = [];
    
    nums.sort((a,b) => a-b);
    
    for(let i=0; i<nums.length; i++)
        hash.push((hash[i-1] || 0) + nums[i]);
    
    //  get the sum of nums value
    max = hash[hash.length - 1];
    
    for(let query of queries){
        let found = (query > max)? hash.length: 0;
        
        for(let i=0; i<hash.length; i++)
            if(hash[i] === query){
                found = i + 1;
                break;
            }
            else if(hash[i] > query){
                found = i;
                break;
            }
        
        res.push(found);
    }
    
    return res;
};