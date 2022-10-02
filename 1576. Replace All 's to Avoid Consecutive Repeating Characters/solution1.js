/**
    O(2n)
    71~119 ms    (38.75%~96.25%)
    43.7~44.2 MB (6.25%~53.75%)

    https://leetcode.com/submissions/detail/813296257/
        Runtime: 119 ms, faster than 38.75% of JavaScript online submissions for Replace All ?'s to Avoid Consecutive Repeating Characters.
        Memory Usage: 44.5 MB, less than 6.25% of JavaScript online submissions for Replace All ?'s to Avoid Consecutive Repeating Characters.
    https://leetcode.com/submissions/detail/813305850/
        Runtime: 71 ms, faster than 96.25% of JavaScript online submissions for Replace All ?'s to Avoid Consecutive Repeating Characters.
        Memory Usage: 44.2 MB, less than 15.00% of JavaScript online submissions for Replace All ?'s to Avoid Consecutive Repeating Characters.
    https://leetcode.com/submissions/detail/813310729/
        Runtime: 118 ms, faster than 38.75% of JavaScript online submissions for Replace All ?'s to Avoid Consecutive Repeating Characters.
        Memory Usage: 43.7 MB, less than 53.75% of JavaScript online submissions for Replace All ?'s to Avoid Consecutive Repeating Characters.

 * @param {string} s
 * @return {string}
 */
 var modifyString = function(s){
    let set = new Set("zyxwvutsrqponmlkjihgfedcba");
    
    //  delete appear character, remain avaiable to replace
    for(let c of s)
        set.delete(c);
        
    //  prepare number of ? need to replace
    let n = ~~(s.length / set.size) + 1;
    let arr = [...set];
    let available = Array(n).fill(arr).flat();
    let output = "";
    
    //  re-build output
    for(let c of s)
        output += (c === '?')? available.pop(): c;
    return output;
};