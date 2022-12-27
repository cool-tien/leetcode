/**
    Space complexity: O(n)
        70 ~ 79 ms      (76.14% ~ 91.42%)
    Time complexity: O(1)
        44.2 ~ 44.5 MB  (46.53% ~ 75.27%)

    https://leetcode.com/problems/fizz-buzz/submissions/866065632/
        Runtime 79 ms, Beats 76.14%; Memory 44.5 MB, Beats 46.53%
    https://leetcode.com/problems/fizz-buzz/submissions/866066685/
        Runtime 70 ms, Beats 91.42%; Memory 44.5 MB, Beats 46.53%
    https://leetcode.com/problems/fizz-buzz/submissions/866066868/
        Runtime 77 ms, Beats 78.43%; Memory 44.2 MB, Beats 75.27%

 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    const strFizzBuzz = (n) => {
        let str = "";
        let is_fizz_or_buzz = false;

        if(n % 3 === 0){
            str += "Fizz";
            is_fizz_or_buzz = true;
        }
        if(n % 5 === 0){
            str += "Buzz";
            is_fizz_or_buzz = true;
        }
        
        if(!is_fizz_or_buzz)
            str += n;

        return str;
    }

    let result = [];

    for(let i=1; i<=n; i++)
        result.push(strFizzBuzz(i));
    return result;
};