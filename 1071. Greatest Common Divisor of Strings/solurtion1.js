/**
    O(n)
    82 ~ 90 ms      (76.81% ~ 84.60%)
    42.2 ~ 43.0 MB  (52.17% ~ 84.78%)
    
    https://leetcode.com/problems/greatest-common-divisor-of-strings/submissions/856906616/
        Runtime 82 ms, Beats 84.60%; Memory 42.9 MB, Beats 52.17%
    https://leetcode.com/problems/greatest-common-divisor-of-strings/submissions/856908124/
        Runtime 90 ms, Beats 76.81%; Memory 42.2 MB, Beats 84.78%
    https://leetcode.com/problems/greatest-common-divisor-of-strings/submissions/856908364/
        Runtime 84 ms, Beats 82.61%; Memory 43.0 MB, Beats 52.17%

 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    //  let str2 become shorter
    if(str2.length > str1.length)
        [str1, str2] = [str2, str1];

    let divisor = 1;
    while(divisor <= str2.length){
        let is_str2_divisible = (str2.length % divisor === 0);
        let is_str1_divisible = is_str2_divisible? 
            (str1.length / (str2.length / divisor)): 
            false;

        //  str1 or str2 can't divisible
        if(!is_str1_divisible || !is_str2_divisible){
            divisor++;
            continue;
        }
        
        let str_divisor = str2.substring(0, (str2.length / divisor));
        let str1_repeat = str1.length / str_divisor.length;
        let str2_repeat = str2.length / str_divisor.length;
        //  is the str_divisor * repeat match 
        let is_str1_match = (str_divisor.repeat(str1_repeat) === str1);
        let is_str2_match = (str_divisor.repeat(str2_repeat) === str2);
        
        //  found the string able to divides both str1 and str2
        if(is_str1_match && is_str2_match)
            return str_divisor;

        divisor++;
    }

    return "";
};