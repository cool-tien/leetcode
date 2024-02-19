/**
    Time Complexity: O(n²)
        60 ~ 73 ms          (?%)
    Space Complexity: O(1)
        50.18 ~ 50.77 MB    (?%)
    
    [Time taken: 9 m 8 s]
    https://leetcode.com/problems/count-prefix-and-suffix-pairs-i/submissions/1179395827/
        Runtime 66 ms Beats ?%; Memory 50.74 MB Beats ?%; 
    https://leetcode.com/problems/count-prefix-and-suffix-pairs-i/submissions/1179403650/
        Runtime 73 ms Beats ?%; Memory 50.77 MB Beats ?%; 
    https://leetcode.com/problems/count-prefix-and-suffix-pairs-i/submissions/1179404418/
        Runtime 60 ms Beats ?%; Memory 50.18 MB Beats ?%; 

 * @param {string[]} words
 * @return {number}
 */
var countPrefixSuffixPairs = function(words) {
    const isPrefixAndSuffix = (str1, str2) => {
        const len = str1.length;
        
        return (
            str2.substring(0, len) === str1
                    &&  
            str2.substring(str2.length - len) === str1
        )
    }

    let count = 0;

    for(let i=0; i<words.length; i++)
        for(let j=i+1; j<words.length; j++)
            if(isPrefixAndSuffix(words[i], words[j]))
                count++;
    return count;
};