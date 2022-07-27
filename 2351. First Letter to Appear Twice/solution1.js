/**
    O(n)
    66~98 ms
    41.9~42.3 MB

 * @param {string} s
 * @return {character}
 */
 var repeatedCharacter = function(s) {
    let set = new Set();
    
    for(let c of s)
        if(set.has(c))
            return c;
        else
            set.add(c);
};