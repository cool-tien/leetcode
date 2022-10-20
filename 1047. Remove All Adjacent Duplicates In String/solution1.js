/**
    O(n)
    725~737 ms   (5.11%~7.67%)
    74.2~74.6 MB (5.11%~5.11%)

    https://leetcode.com/submissions/detail/826305112/
        Runtime: 725 ms, faster than 7.67% of JavaScript online submissions for Remove All Adjacent Duplicates In String.
        Memory Usage: 74.6 MB, less than 5.11% of JavaScript online submissions for Remove All Adjacent Duplicates In String.
    https://leetcode.com/submissions/detail/826306199/
        Runtime: 895 ms, faster than 5.11% of JavaScript online submissions for Remove All Adjacent Duplicates In String.
        Memory Usage: 74.2 MB, less than 5.11% of JavaScript online submissions for Remove All Adjacent Duplicates In String.
    https://leetcode.com/submissions/detail/826306744/
        Runtime: 737 ms, faster than 7.55% of JavaScript online submissions for Remove All Adjacent Duplicates In String.
        Memory Usage: 74.3 MB, less than 5.11% of JavaScript online submissions for Remove All Adjacent Duplicates In String.

 * @param {string} s
 * @return {string}
 */
 var removeDuplicates = function(s) {
    let i = 0;
    
    while(i < s.length){
        if(s[i] === s[i+1]){
            s = s.substring(0, i) + s.substring(i+2);
            
            if(i !== 0)
                i--;
        }
        else
            i++;
    }
    
    return s;
};