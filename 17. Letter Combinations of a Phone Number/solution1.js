/**
    https://leetcode.com/submissions/detail/695834520/
    Runtime: 67 ms, faster than 70.23% of JavaScript online submissions for Letter Combinations of a Phone Number.
    Memory Usage: 42.4 MB, less than 24.40% of JavaScript online submissions for Letter Combinations of a Phone Number.

 * @param {string} digits
 * @return {string[]}
 */
 var letterCombinations = function(digits) {
    if(!digits.length) return [];
    
    let phone_numbers = {
        "2": ["a", "b", "c"],
        "3": ["d", "e", "f"],
        "4": ["g", "h", "i"],
        "5": ["j", "k", "l"],
        "6": ["m", "n", "o"],
        "7": ["p", "q", "r", "s"],
        "8": ["t", "u", "v"],
        "9": ["w", "x", "y", "z"]
    }
    let output = [];
    
    if(digits.length == 1)
        return phone_numbers[digits];
    else if(digits.length == 2){
        for(let c0 of phone_numbers[digits[0]])
            for(let c1 of phone_numbers[digits[1]])
                output.push(c0 + c1);
    }
    else if(digits.length == 3){
        for(let c0 of phone_numbers[digits[0]])
            for(let c1 of phone_numbers[digits[1]])
                for(let c2 of phone_numbers[digits[2]])
                    output.push(c0 + c1 + c2);
    }
    else if(digits.length == 4){
        for(let c0 of phone_numbers[digits[0]])
            for(let c1 of phone_numbers[digits[1]])
                for(let c2 of phone_numbers[digits[2]])
                    for(let c3 of phone_numbers[digits[3]])
                        output.push(c0 + c1 + c2 + c3);
    }
    
    return output;
};