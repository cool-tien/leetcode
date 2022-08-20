/**
    O(n)
    78~109 ms (11.42~68.69%)
    42.1~42.4 MB (10.83%~45.99%)
    https://leetcode.com/submissions/detail/778861910/
    https://leetcode.com/submissions/detail/778861842/
    https://leetcode.com/submissions/detail/778861289/

 * @param {number[]} nums
 * @return {string[]}
 */
 var summaryRanges = function(nums) {
    let output = [];
    let i = 0;
    
    while(i < nums.length){
        let start = i;
        
        while(nums[i]+1 === nums[i+1])
            i++;
        
        (start === i)?
            output.push("" + nums[start]): 
            output.push(`${nums[start]}->${nums[i]}`);
        i++;
    }
    
    return output;
};