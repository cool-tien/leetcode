/**
    O(3n)
    82~108 ms
    42~42.4 ms

 * @param {string} s
 * @return {number}
 */
 const countAsterisks = s => 
    /*  
        1. split '|' to array
        2. filter not between pair of '|'
        3. regroup to arary, it elements just include one char
        4. return filter '*' count it length
    */
    s.split('|').filter((s,i) => (i%2 === 0)).join('').split('').filter(c => (c === '*')).length;