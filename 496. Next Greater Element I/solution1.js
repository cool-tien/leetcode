/**
    O(nm)
    104~127 ms   (22.60%~64.22%)
    48.1~48.7 MB (5.45%~9.82%)

    https://leetcode.com/submissions/detail/830335233/
        Runtime: 104 ms, faster than 64.22% of JavaScript online submissions for Next Greater Element I.
        Memory Usage: 48.4 MB, less than 7.60% of JavaScript online submissions for Next Greater Element I.
    https://leetcode.com/submissions/detail/830336460/
        Runtime: 121 ms, faster than 32.01% of JavaScript online submissions for Next Greater Element I.
        Memory Usage: 48.1 MB, less than 9.82% of JavaScript online submissions for Next Greater Element I.
    https://leetcode.com/submissions/detail/830336783/
        Runtime: 127 ms, faster than 22.60% of JavaScript online submissions for Next Greater Element I.
        Memory Usage: 48.7 MB, less than 5.45% of JavaScript online submissions for Next Greater Element I.

 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var nextGreaterElement = function(nums1, nums2) {
    let res = [];
    
    for(let num1 of nums1){
        let idx = nums2.indexOf(num1);
        let arr = nums2.slice(idx + 1);
        let greater = -1;
        
        for(let num2 of arr)
            if(num1 < num2){
                greater = num2;
                break;
            }
        
        res.push(greater);
    }
    
    return res;
};