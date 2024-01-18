/**
    [Approach]

    1. Count current char repeat times.
    2. If the repeat more than 1 time, then use "splice" delete the repeat character and insert the number of string into "chars" array.

    Time Complexity: O(n)
        54 ~ 66 ms          (43.38% ~ 90.35%)    
    Space Complexity: O(1)
        43.99 ~ 44.16 MB    (79.67% ~ 88.30%)
    
    https://leetcode.com/problems/string-compression/submissions/1149338758/
        Runtime 54 ms Beats 90.35%; Memory 44.09 MB Beats 84.84%; 
    https://leetcode.com/problems/string-compression/submissions/1149351286/
        Runtime 64 ms Beats 50.94%; Memory 44.16 MB Beats 79.67%; 
    https://leetcode.com/problems/string-compression/submissions/1149351618/
        Runtime 66 ms Beats 43.38%; Memory 43.99 MB Beats 88.30%; 

 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    for(let i=0; i<chars.length; i++){
        let c = chars[i];
        let repeat = 1;
        let idx = i + 1;

        while(chars[idx] === c){
            repeat++;
            idx++;
        }

        if(repeat !== 1){
            let num_str = repeat.toString();

            chars.splice(i + 1, repeat - 1, ...num_str.split(""));
            //  adjust the "i" position
            i += num_str.length;
        }
    }
};