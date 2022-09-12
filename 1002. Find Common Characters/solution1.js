/**
    O(n³)
    170~204 ms (15.04%~29.57%)
    47.6~49.1 MB (37.59%~55.14%)

    https://leetcode.com/submissions/detail/797614561/
        Runtime: 204 ms, faster than 15.04% of JavaScript online submissions for Find Common Characters.
        Memory Usage: 47.6 MB, less than 55.14% of JavaScript online submissions for Find Common Characters.
    https://leetcode.com/submissions/detail/797624044/
        Runtime: 170 ms, faster than 29.57% of JavaScript online submissions for Find Common Characters.
        Memory Usage: 48.7 MB, less than 41.60% of JavaScript online submissions for Find Common Characters.
    https://leetcode.com/submissions/detail/797624253/
        Runtime: 180 ms, faster than 25.81% of JavaScript online submissions for Find Common Characters.
        Memory Usage: 49.1 MB, less than 37.59% of JavaScript online submissions for Find Common Characters.

 * @param {string[]} words
 * @return {string[]}
 */
 var commonChars = function(words) {
    let arr_map = [];
    let output = "";
    
    for(let word of words){
        let map = new Map();
        
        for(let c of word)
            map.set(c, (map.get(c)+1) || 1);
        arr_map.push(map);
    }
    
    for(let i=0; i<arr_map.length; i++){
        //  cursor map
        let map = arr_map[i];
        
        //  min = minimum of appear in the whole array map
        for(let [c, min] of [...map]){
            for(let j=0; j<arr_map.length; j++){
                //  not need check with self (same index)
                if(i === j) continue;
                
                min = Math.min(min, arr_map[j].get(c) || 0);
                
                if(!min)
                    break;
            }
            
            //  at least appear 1 time in whole array map
            if(min){
                output += c.repeat(min);
                
                //  delete the current char in whole array map
                for(let k=0; k<arr_map.length; k++)
                    arr_map[k].delete(c);
            }
        }
    }
    
    return output.split("");
};