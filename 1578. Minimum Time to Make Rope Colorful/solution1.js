/**
    https://leetcode.com/submissions/detail/715459442/
    Runtime: 1281 ms, faster than 5.40% of JavaScript online submissions for Minimum Time to Make Rope Colorful.
    Memory Usage: 65.4 MB, less than 16.89% of JavaScript online submissions for Minimum Time to Make Rope Colorful.

 * @param {string} colors
 * @param {number[]} neededTime
 * @return {number}
 */
 var minCost = function(colors, neededTime) {
    colors = colors.split("");
    let total_time = 0;
    let i = 1;
    
    while(i<colors.length){
        //  same color
        if(colors[i]==colors[i-1]){
            //  start and end index
            let start = i-1;
            let end = i;
            
            while(colors[i]==colors[end])
                end++;
            
            colors.splice(start, end-start, colors[i]);
            let arr = neededTime.splice(start, end-start);
            let time = 0;
            let max = 0;
            
            for(let num of arr){
                time += num;
                
                if(num>max)
                    max = num;
            }
            
            neededTime.splice(start, 0, max);
            total_time += (time-max);
        }
        
        i++;
    }
    
    return total_time;
};