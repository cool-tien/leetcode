/**
    refer: beausorensen (netizen)
        https://leetcode.com/problems/sum-of-left-leaves/discuss/262541/Simple-Recursive-JavaScript-Solution

    O(n)
    107 ~ 113 ms    (36.53% ~ 50.93%)
    44.7 ~ 45.0 MB  (8.67% ~ 29.72%)

    https://leetcode.com/submissions/detail/845091824/
        Runtime: 113 ms, faster than 36.53% of JavaScript online submissions for Sum of Left Leaves.
        Memory Usage: 44.7 MB, less than 29.72% of JavaScript online submissions for Sum of Left Leaves.
    https://leetcode.com/submissions/detail/845094113/
        Runtime: 107 ms, faster than 50.93% of JavaScript online submissions for Sum of Left Leaves.
        Memory Usage: 44.7 MB, less than 22.29% of JavaScript online submissions for Sum of Left Leaves.
    https://leetcode.com/submissions/detail/845094195/
        Runtime: 111 ms, faster than 41.49% of JavaScript online submissions for Sum of Left Leaves.
        Memory Usage: 45 MB, less than 8.67% of JavaScript online submissions for Sum of Left Leaves.

 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
 var sumOfLeftLeaves = function(root, is_left=false) {
    if(!root) 
        return 0;
    if(!root.left && !root.right) 
        return (is_left)? root.val: 0;
    
    return sumOfLeftLeaves(root.left, true) + sumOfLeftLeaves(root.right, false);
};