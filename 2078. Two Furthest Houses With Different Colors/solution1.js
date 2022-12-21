/**
    O(n²)
    70 ~ 93 ms      (50.00% ~ 82.61%)
    43.0 ~ 44.4 MB  (5.70% ~ 8.70%)
    
    https://leetcode.com/problems/two-furthest-houses-with-different-colors/submissions/862983038/
        Runtime 78 ms, Beats 71.10%; Memory 43.5 MB, Beats 7.25%
    https://leetcode.com/problems/two-furthest-houses-with-different-colors/submissions/862983518/
        Runtime 93 ms, Beats 50.00%; Memory 44.4 MB, Beats 5.70%
    https://leetcode.com/problems/two-furthest-houses-with-different-colors/submissions/862983713/
        Runtime 70 ms, Beats 82.61%; Memory 43.0 MB, Beats 8.70%

 * @param {number[]} colors
 * @return {number}
 */
var maxDistance = function(colors) {
    //  record color: {min, max} appear index
    let color_obj = {};
    let idx = 0;
    let abs = 0;

    //  build colors min and max index
    for(let color of colors){
        //  already exist
        if(color_obj[color])
            color_obj[color].max = idx
        else
            color_obj[color] = {
                min: idx, 
                max: idx
            }
        
        idx++;
    }
    
    let color_key = Object.keys(color_obj);
    
    for(let i=0; i<color_key.length; i++){
        let min = color_obj[color_key[i]].min;
        let max = -1;
        
        for(let j=0; j<color_key.length; j++)
            if(i === j) continue;
            else
                max = Math.max(max, color_obj[color_key[j]].max);

        if(max !== -1)
            abs = Math.max(abs, Math.abs(min - max));
    }

    return abs;
};