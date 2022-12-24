/**
    O(n)
    64 ~ 66 ms      (85.43% ~ 88.58%)
    42.4 ~ 42.8 MB  (28.35% ~ 48.43%)

    https://leetcode.com/problems/remove-digit-from-number-to-maximize-result/submissions/864522416/
        Runtime 64 ms, Beats 88.58%; Memory 42.4 MB, Beats 48.43%
    https://leetcode.com/problems/remove-digit-from-number-to-maximize-result/submissions/864562500/
        Runtime 65 ms, Beats 87.10%; Memory 42.6 MB, Beats 40.16%
    https://leetcode.com/problems/remove-digit-from-number-to-maximize-result/submissions/864562831/
        Runtime 66 ms, Beats 85.43%; Memory 42.8 MB, Beats 28.35%

 * @param {string} number
 * @param {character} digit
 * @return {string}
 */
var removeDigit = function(number, digit) {
    let max = 0n;

    for(let i=0; i<number.length; i++)
        if(number[i] === digit){
            //  after remove digit at current index
            let num_str = number.substring(0, i) + number.substring(i + 1);
            let num = BigInt(num_str);
            
            if(num > max)
                max = num;
        }
    
    return max.toString();
};