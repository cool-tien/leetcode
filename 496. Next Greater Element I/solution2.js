/**
    O(nm)
    105~132 ms   (17.08%~62.61%)
    43.1~43.4 MB (78.68%~83.39%)

    https://leetcode.com/submissions/detail/830338297/
        Runtime: 105 ms, faster than 62.61% of JavaScript online submissions for Next Greater Element I.
        Memory Usage: 43.1 MB, less than 83.39% of JavaScript online submissions for Next Greater Element I.
    https://leetcode.com/submissions/detail/830338743/
        Runtime: 132 ms, faster than 17.08% of JavaScript online submissions for Next Greater Element I.
        Memory Usage: 43.4 MB, less than 78.68% of JavaScript online submissions for Next Greater Element I.
    https://leetcode.com/submissions/detail/830338850/
        Runtime: 123 ms, faster than 28.51% of JavaScript online submissions for Next Greater Element I.
        Memory Usage: 43.4 MB, less than 78.68% of JavaScript online submissions for Next Greater Element I.

 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var nextGreaterElement = function(nums1, nums2) {
    let res = [];
    
    for(let num1 of nums1){
        let idx = nums2.indexOf(num1);
        let greater = -1;
        
        while(idx < nums2.length){
            if(num1 < nums2[idx]){
                greater = nums2[idx];
                break;
            }
            
            idx++;
        }
        
        res.push(greater);
    }
    
    return res;
};