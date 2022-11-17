/**
    O(n)
    89 ~ 115 ms     (9.09% ~ 63.64%)
    41.7 ~ 42.0 MB  (64.52^ ~ 94.24%)
    
    https://leetcode.com/submissions/detail/844974917/
        Runtime: 89 ms, faster than 63.64% of JavaScript online submissions for Goal Parser Interpretation.
        Memory Usage: 41.7 MB, less than 91.24% of JavaScript online submissions for Goal Parser Interpretation.
    https://leetcode.com/submissions/detail/845042124/
        Runtime: 115 ms, faster than 9.09% of JavaScript online submissions for Goal Parser Interpretation.
        Memory Usage: 42 MB, less than 64.52% of JavaScript online submissions for Goal Parser Interpretation.
    https://leetcode.com/submissions/detail/845042259/
        Runtime: 105 ms, faster than 25.50% of JavaScript online submissions for Goal Parser Interpretation.
        Memory Usage: 41.7 MB, less than 91.24% of JavaScript online submissions for Goal Parser Interpretation.

 * @param {string} command
 * @return {string}
 */
 var interpret = function(command) {
    let output = "";
    let i = 0;
    
    while(i < command.length){
        if(command.substring(i, i+4) === "(al)"){
            output += "al";
            i += 4;
        }
        else if(command.substring(i, i+2) === "()"){
            output += "o";
            i += 2;
        }
        else{
            output += command[i];
            i += 1;
        }
    }
    
    return output;
};