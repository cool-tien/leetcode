/**
    Time Complexity: O(2n)
        61 ~ 70 ms      (44% ~ 88%)
    Space Complexity: O(1)
        41.7 ~ 42.5 MB  (43.50% ~ 93%)

    https://leetcode.com/problems/maximum-difference-by-remapping-a-digit/submissions/901932143/
        Runtime 63 ms, Beats 80%; Memory 41.7 MB, Beats 93%
    https://leetcode.com/problems/maximum-difference-by-remapping-a-digit/submissions/901932211/
        Runtime 61 ms, Beats 88%; Memory 42.5 MB, Beats 43.50%
    https://leetcode.com/problems/maximum-difference-by-remapping-a-digit/submissions/901932273/
        Runtime 70 ms, Beats 44%; Memory 42.2 MB, Beats 75.50%

 * @param {number} num
 * @return {number}
 */
var minMaxDifference = function(num) {
    //  skip all the left side "9" digits
    const firstMaxDigit = (str_num) => {
        let i = 0;

        while(str_num[i] === "9")
            i++;
        return str_num[i];
    }

    let str_num = ("" + num);
    let max_num = parseInt(str_num.replaceAll(firstMaxDigit(str_num), "9"));
    let min_num = parseInt(str_num.replaceAll(str_num[0], "0"));

    return (max_num - min_num);
};