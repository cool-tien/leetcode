/**
    Time Limit Exceeded

 * @param {string} s
 * @param {number[]} shifts
 * @return {string}
 */
 var shiftingLetters = function(s, shifts) {
    s = s.split("").map(x => x.charCodeAt());
    shifts = shifts.map(x => x%26);
    
    for(let i=0; i<shifts.length; i++)
        for(let j=0; j<=i; j++){
            let num = s[j] + shifts[i];
            
            if(num > 122)
                num = (num % 123) + 97;
            s[j] = num;
        }
    return s.map(x => String.fromCharCode(x)).join("");
};
