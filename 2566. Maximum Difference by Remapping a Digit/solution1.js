/**
    Time Complexity: O(2n)
        64 ~ 72 ms      (37% ~ 77%)
    Space Complexity: O(1)
        41.3 ~ 42 MB    (82% ~ 98.50%)

    https://leetcode.com/problems/maximum-difference-by-remapping-a-digit/submissions/901926043/
        Runtime 64 ms, Beats 77%; Memory 42 MB, Beats 82%
    https://leetcode.com/problems/maximum-difference-by-remapping-a-digit/submissions/901927384/
        Runtime 69 ms, Beats 53%; Memory 41.3 MB, Beats 98.50%
    https://leetcode.com/problems/maximum-difference-by-remapping-a-digit/submissions/901927579/
        Runtime 72 ms, Beats 37%; Memory 42 MB, Beats 86%

 * @param {number} num
 * @return {number}
 */
var minMaxDifference = function(num) {
    //  skip all the left side "9" digits
    const firstMaxDigit = (num) => {
        let str = num.toString();
        let i = 0;
        
        while(str[i] === "9")
            i++;
        return (i <= str.length)? str[i]: -1;
    }

    let str_num = ("" + num);
    let max_swap_digit = firstMaxDigit(num);
    let max_num = (max_swap_digit !== -1)?
        Number(str_num.replaceAll(max_swap_digit, "9")): 
        num;
    let min_swap_digit = str_num[0];
    let min_num = (min_swap_digit !== -1)?
        Number(str_num.replaceAll(min_swap_digit, "0")): 
        num;
    
    return (max_num - min_num);
};