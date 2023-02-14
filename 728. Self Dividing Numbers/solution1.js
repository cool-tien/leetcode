/**
    Time Complexity: 

    Space Complexity: 


    https://leetcode.com/problems/self-dividing-numbers/submissions/897543865/
        Runtime 90 ms, Beats 25.94%; Memory 48.7 MB, Beats 8.19%
    https://leetcode.com/problems/self-dividing-numbers/submissions/897545573/
        Runtime 95 ms, Beats 22.18%; Memory 48.7 MB, Beats 9.56%
    https://leetcode.com/problems/self-dividing-numbers/submissions/897545805/
        Runtime 99 ms, Beats 19.11%; Memory 49.0 MB, Beats 7.51%

 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    let result = [];

    while(left <= right){
        let set = new Set(String(left));
        
        //  0 unable to mod
        if(set.has("0")){
            left++;
            continue;
        }

        let digits = [...set].map(c => ~~c);
        let is_self_divide = true;
        
        for(let digit of digits)
            if(left % digit){
                is_self_divide = false;
            
                break;
            }
        
        if(is_self_divide)
            result.push(left);
        
        left++;
    }

    return result;
};