/**
    O(2n log n)
    637~810 ms   (40.27%~67.18%)
    73.0~73.2 MB (58.90%~59.60%)
    
    https://leetcode.com/submissions/detail/812741388/
        Runtime: 686 ms, faster than 63.52% of JavaScript online submissions for Find Original Array From Doubled Array.
        Memory Usage: 73.1 MB, less than 58.90% of JavaScript online submissions for Find Original Array From Doubled Array.
    https://leetcode.com/submissions/detail/812745971/
        Runtime: 810 ms, faster than 40.27% of JavaScript online submissions for Find Original Array From Doubled Array.
        Memory Usage: 73 MB, less than 59.60% of JavaScript online submissions for Find Original Array From Doubled Array.
    https://leetcode.com/submissions/detail/812746444/
        Runtime: 637 ms, faster than 67.18% of JavaScript online submissions for Find Original Array From Doubled Array.
        Memory Usage: 73.2 MB, less than 58.90% of JavaScript online submissions for Find Original Array From Doubled Array.

 * @param {number[]} changed
 * @return {number[]}
 */
var findOriginalArray = function(changed) {
    if(changed.length % 2) return [];
    
    let original = [];
    let hash = {};
    
    changed.sort((a, b) => a-b);
    for(let num of changed)
        hash[num]? hash[num]++: hash[num]=1;
    
    for(let num of changed){
        num = +num;
        let double = num + num;
        
        if(hash[num] && hash[double]){
            hash[num]--;
            hash[double]--;
            
            if(hash[num] === 0)
                delete hash[num];
            if(hash[double] === 0)
                delete hash[double];
            
            original.push(num);
        }
    }
    
    let json_str = JSON.stringify(hash, null, 0);
    return (json_str === "{}")? original: [];
};