/**
    Time Complexity: O(n)
        71 ~ 77 ms      (53.57% ~ 75.55%)
    Space Complexity: O(n)
        44.5 ~ 44.9 MB  (42.86% ~ 53.85%)
    
    https://leetcode.com/problems/find-maximum-number-of-string-pairs/submissions/984276740/
        Runtime 77 ms, Beats 53.57%; Memory 44.6 MB, Beats 53.85%; 
    https://leetcode.com/problems/find-maximum-number-of-string-pairs/submissions/984332226/
        Runtime 74 ms, Beats 65.93%; Memory 44.5 MB, Beats 53.85%; 
    https://leetcode.com/problems/find-maximum-number-of-string-pairs/submissions/984332490/
        Runtime 71 ms, Beats 75.55%; Memory 44.9 MB, Beats 42.86%;

 * @param {string[]} words
 * @return {number}
 */
var maximumNumberOfStringPairs = function(words) {
    let map = new Map();
    let pairs = 0;
    
    for(let word of words){
        //  this "word" already has pair
        if((map.get(word) || 0)) continue;

        const reverse = word.split("").reverse().join("");

        //  found pair
        if(map.has(word) || map.has(reverse)){
            map.set(word, 1);
            map.set(reverse, 1);

            pairs++;
        }
        else{
            map.set(word, 0);
            map.set(reverse, 0);
        }
    }
    
    return pairs;
};