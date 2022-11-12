/**
    O(n)
    59~80 ms     (79.09%~98.24%)
    41.9~42.1 MB (66.75%~81.36%)

    https://leetcode.com/submissions/detail/840434126/
        Runtime: 59 ms, faster than 98.24% of JavaScript online submissions for Check if One String Swap Can Make Strings Equal.
        Memory Usage: 41.9 MB, less than 81.36% of JavaScript online submissions for Check if One String Swap Can Make Strings Equal.
    https://leetcode.com/submissions/detail/840446363/
        Runtime: 80 ms, faster than 79.09% of JavaScript online submissions for Check if One String Swap Can Make Strings Equal.
        Memory Usage: 42 MB, less than 74.06% of JavaScript online submissions for Check if One String Swap Can Make Strings Equal.
    https://leetcode.com/submissions/detail/840446446/
        Runtime: 69 ms, faster than 88.92% of JavaScript online submissions for Check if One String Swap Can Make Strings Equal.
        Memory Usage: 42.1 MB, less than 66.75% of JavaScript online submissions for Check if One String Swap Can Make Strings Equal.

 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
 var areAlmostEqual = function(s1, s2) {
    if(s1 === s2) return true;
    
    let diff = 0;
    let ch1 = [];
    let ch2 = [];
    
    for(let i=0; i<s1.length; i++)
        if(s1[i] !== s2[i]){
            ch1.push(s1[i]);
            ch2.push(s2[i]);
            diff++;
            
            //  swap more than once, return false;
            if(diff > 2)
                return false;
        }
    
    return (diff === 0) || (diff === 2 && ch1[0] === ch2[1] && ch2[0] === ch1[1]);
};