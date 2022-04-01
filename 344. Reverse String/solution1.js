/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
 var reverseString = function(s) {
    let mid = ~~(s.length/2);
    
    for(let i=0; i<mid; i++){
        let last_idx = s.length - 1 - i;
        let tmp = s[i];
        
        s[i] = s[last_idx];
        s[last_idx] = tmp;
    }
};