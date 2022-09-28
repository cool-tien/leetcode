/**
    O(n²)
    76~125 ms    (17.34%~85.51%)
    42.5~42.9 MB (81.95%~93.11%)

    https://leetcode.com/submissions/detail/810268970/
        Runtime: 107 ms, faster than 40.86% of JavaScript online submissions for Destination City.
        Memory Usage: 42.9 MB, less than 81.95% of JavaScript online submissions for Destination City.
    https://leetcode.com/submissions/detail/810293095/
        Runtime: 76 ms, faster than 85.51% of JavaScript online submissions for Destination City.
        Memory Usage: 42.5 MB, less than 93.11% of JavaScript online submissions for Destination City.
    https://leetcode.com/submissions/detail/810294254/
        Runtime: 125 ms, faster than 17.34% of JavaScript online submissions for Destination City.
        Memory Usage: 42.8 MB, less than 84.09% of JavaScript online submissions for Destination City.

 * @param {string[][]} paths
 * @return {string}
 */
 var destCity = function(paths) {
    for(let i=0; i<paths.length; i++){
        let is_end = true;
        
        for(let j=0; j<paths.length; j++)
            if(paths[i][1] === paths[j][0]){
                is_end = false;
                break;
            }
        
        if(is_end)
            return paths[i][1];
    }
};