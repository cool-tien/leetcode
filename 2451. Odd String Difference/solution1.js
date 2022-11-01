/**
    O(3n)
    68~110 ms
    44.3~44.7 MB

    *** Sorry. We do not have enough accepted submissions to show distribution chart. ***
    [2022-10-30 10:40] (UTC+8)
    
    https://leetcode.com/submissions/detail/833038679/
        Runtime: 72 ms, faster than 100.00% of JavaScript online submissions for Odd String Difference.
        Memory Usage: 44.3 MB, less than 100.00% of JavaScript online submissions for Odd String Difference.
    https://leetcode.com/submissions/detail/833047645/
        Runtime: 68 ms, faster than 100.00% of JavaScript online submissions for Odd String Difference.
        Memory Usage: 44.5 MB, less than 100.00% of JavaScript online submissions for Odd String Difference.
    https://leetcode.com/submissions/detail/833048065/
        Runtime: 110 ms, faster than 100.00% of JavaScript online submissions for Odd String Difference.
        Memory Usage: 44.7 MB, less than 100.00% of JavaScript online submissions for Odd String Difference.

 * @param {string[]} words
 * @return {string}
 */
 var oddString = function(words) {
    const strChartCode = str =>
        str.split("").map(c => c.charCodeAt());
    
    let map = new Map();
    let arr_hash = words.map(s => {
        let codes = strChartCode(s);
        let prev = codes.shift();
        let diff = [];
        
        while(codes.length){
            let code = codes.shift();
            
            diff.push(code - prev);
            prev = code;
        }
        
        return [diff.join(), s];
    });
    
    let is_repeat = false;
    let repeat_hash = "";
    for(let [hash, s] of arr_hash){
        if(is_repeat && hash !== repeat_hash)
            return s;
        
        //  hash repeat
        if(map.has(hash)){
            is_repeat = true;
            repeat_hash = hash;
            
            //  the except one in the map
            if(map.size === 2){
                map.delete(hash);
                return [...map.values()][0];
            }
        }
        
        map.set(hash, s);
    }
};