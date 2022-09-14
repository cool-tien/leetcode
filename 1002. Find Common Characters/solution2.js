/**
    O(2n)
    154~164 ms (34.00%~38.46%)
    49.0~49.9 MB (29.78%~38.21%)

    https://leetcode.com/submissions/detail/799380573/
        Runtime: 163 ms, faster than 34.24% of JavaScript online submissions for Find Common Characters.
        Memory Usage: 49.6 MB, less than 30.27% of JavaScript online submissions for Find Common Characters.
    https://leetcode.com/submissions/detail/799435038/
        Runtime: 164 ms, faster than 34.00% of JavaScript online submissions for Find Common Characters.
        Memory Usage: 49.9 MB, less than 29.78% of JavaScript online submissions for Find Common Characters.
    https://leetcode.com/submissions/detail/799436159/
        Runtime: 154 ms, faster than 38.46% of JavaScript online submissions for Find Common Characters.
        Memory Usage: 49 MB, less than 38.21% of JavaScript online submissions for Find Common Characters.

 * @param {string[]} words
 * @return {string[]}
 */
 var commonChars = function(words) {
    let arr_map = [];
    let min_len = Infinity;
    //  min of map size in arr_map
    let min_idx = Infinity;
    let output = "";
    
    for(let word of words){
        let map = new Map();
        
        for(let c of word)
            map.set(c, (map.get(c)+1) || 1);
        if(min_len > map.size){
            min_len = map.size;
            min_idx = arr_map.length;
            min_map = map;
        }
        
        arr_map.push(map);
    }
    
    //  filter out the char of map not exist in whole arr_map
    for(let i=0; i<arr_map.length; i++){
        if(i === min_idx) continue;
        
        for(let [c, v] of arr_map[i])
            if(!arr_map[min_idx].has(c)){
                arr_map[min_idx].delete(c);
                arr_map[i].delete(c);
            }
    }
    
    //  build output, v = min of repeat
    for(let [c, v] of [...arr_map[min_idx]]){
        for(let i in arr_map)
            v = Math.min(v, arr_map[i].get(c));
        
        output += c.repeat(v);
    }
    
    return output.split("");
};