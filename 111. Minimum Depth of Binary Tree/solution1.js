/**
    https://leetcode.com/submissions/detail/711925912/
    Runtime: 251 ms, faster than 83.54% of JavaScript online submissions for Minimum Depth of Binary Tree.
    Memory Usage: 83.7 MB, less than 79.22% of JavaScript online submissions for Minimum Depth of Binary Tree.

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
 var minDepth = function(root, depth=root? 1:0) {
    if(!root)
        return depth==0? 0: Infinity;
    //  recursion exist
    else if(!root.left && !root.right)
        return depth;
    
    return Math.min(minDepth(root.left, depth+1), minDepth(root.right, depth+1));
};