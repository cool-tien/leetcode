/*
    In the outerFunction:
    declare a Map variable

    In the innerFunction:
    - Get the input of numbers and build it to key.
    - If the "key" exist in hash map, then return the key of "fn" previous execute value.
    - When the "key" not exist in hash map, store the execute value of "fn" into hasp map.
*/
/**
    Time Complexity: O(n)
        250 ~ 293 ms        (70.79% ~ 98.11%)
    Space Complexity: O(m) [unique key]
        87.87 ~ 91.09 MB    (10.16% ~ 76.49%)
    
    https://leetcode.com/problems/memoize/submissions/1232683577/
        Runtime 250 ms Beats 98.11% of users with JavaScript; Memory 87.87 MB Beats 76.49% of users with JavaScript; 
    https://leetcode.com/problems/memoize/submissions/1232700099/
        Runtime 288 ms Beats 77.85% of users with JavaScript; Memory 91.09 MB Beats 10.16% of users with JavaScript; 
    https://leetcode.com/problems/memoize/submissions/1232700325/
        Runtime 293 ms Beats 70.79% of users with JavaScript; Memory 89.32 MB Beats 50.91% of users with JavaScript; 

 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    //  a hash map 
    let map = new Map();
    
    return function(...args) {
        //  get the input of numbers and build it to key
        let [num1, num2] = [args[0], args[1]];
        let key = `${num1}_${num2}`;

        //  if the "key" exist in hash map, then return the previous "fn" execute value
        if(map.has(key))
            return map.get(key);
        
        //  save the "fn" execute value and "key" to hash map
        map.set(key, fn(num1, num2));
        return map.get(key);
    }
}