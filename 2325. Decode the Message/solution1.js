/**
    O(nm) | 78~90ms
    https://leetcode.com/submissions/detail/749912840/
    Runtime: 78 ms, faster than 87.56% of JavaScript online submissions for Decode the Message.
    Memory Usage: 44.5 MB, less than 75.13% of JavaScript online submissions for Decode the Message.

 * @param {string} key
 * @param {string} message
 * @return {string}
 */
 var decodeMessage = function(key, message) {
    let arr = [...new Set(key.split("").filter(c => c!=" "))];
    let hash = {" ": " "};
    //  char code
    let code = 97;
    let decode = "";
    
    for(let c of arr)
        hash[String.fromCharCode(code++)] = c;
    //  swap(property, value)
    for(let arr of Object.entries(hash))
        hash[arr[1]] = arr[0];
    
    for(let c of message)
        decode += hash[c];
    return decode;
};