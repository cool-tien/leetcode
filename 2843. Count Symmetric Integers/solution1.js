/**
    Time Complexity: O(nk)
        216 ~ 258 ms    (10.39% ~ 30.52%)
    Space Complexity: O(k)
        49.6 ~ 49.8 MB  (49.35% ~ 51.95%)

    https://leetcode.com/problems/count-symmetric-integers/submissions/1040813903/
        Runtime 223 ms, Beats 26.62%; Memory 49.6 MB, Beats 50.65%; 
    https://leetcode.com/problems/count-symmetric-integers/submissions/1040814062/
        Runtime 216 ms, Beats 30.52%; Memory 49.6 MB, Beats 51.95%;
    https://leetcode.com/problems/count-symmetric-integers/submissions/1040814126/
        Runtime 258 ms, Beats 10.39%; Memory 49.8 MB, Beats 49.35%;

 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countSymmetricIntegers = function(low, high) {
    let count = 0;

    while(low <= high){
        const str_num = low.toString();
        
        //  odd length of number are never symmetric, 
        //  reload to next minimum even number
        if(str_num.length % 2){
            low = Number("1".padEnd(low.toString().length + 1, "0") );
            
            continue;
        }
        
        //  half length of "str_num"
        const half = str_num.length / 2;
        let left = str_num.substring(0, half).split("").reduce((acc, cur) => acc + +(cur), 0);
        let right = str_num.substring(half).split("").reduce((acc, cur) => acc + +(cur), 0);
        
        if(left === right)
            count++;
        low++;
    }

    return count;
};