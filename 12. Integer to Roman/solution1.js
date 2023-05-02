/**
    Time Complexity: O(n)
        119 ~ 135 ms    (38.58% ~ 81.62%)
    Space Complexity: O(1)
        50.9 ~ 51.2 MB  (10.19% ~ 11.91%)

    https://leetcode.com/problems/integer-to-roman/submissions/942952484/
        Runtime 135 ms, Beats 38.58%; Memory 50.9 MB, Beats 11.91%; 
    https://leetcode.com/problems/integer-to-roman/submissions/942952794/
        Runtime 119 ms, Beats 81.62%; Memory 51.0 MB, Beats 10.98%; 
    https://leetcode.com/problems/integer-to-roman/submissions/942952881/
        Runtime 125 ms, Beats 66.22%, Memory 51.2 MB, Beats 10.19%; 

 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let hash = {
        "0": "", 
        "1": "I", 
        "2": "II", 
        "3": "III", 
        "4": "IV", 
        "5": "V", 
        "6": "VI", 
        "7": "VII", 
        "8": "VIII", 
        "9": "IX", 

        "10": "X", 
        "20": "XX", 
        "30": "XXX", 
        "40": "XL", 
        "50": "L", 
        "60": "LX", 
        "70": "LXX", 
        "80": "LXXX", 
        "90": "XC", 

        "100": "C", 
        "200": "CC", 
        "300": "CCC", 
        "400": "CD", 
        "500": "D", 
        "600": "DC", 
        "700": "DCC", 
        "800": "DCCC", 
        "900": "CM", 

        "1000": "M", 
        "2000": "MM", 
        "3000": "MMM", 
    }

    //  convert to string and reverse
    const str_num = num.toString().split("").reverse();
    let rome_num = "";

    for(let i=0; i<str_num.length; i++){
        if(str_num[i] !== "0"){
            const str = str_num[i].padEnd(i + 1, "0");
            rome_num = hash[str] + rome_num;
        }
    }
    
    return rome_num; 
};