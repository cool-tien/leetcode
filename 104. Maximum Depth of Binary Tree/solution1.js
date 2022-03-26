/**
	https://leetcode.com/submissions/detail/640928177/
	Runtime: 64 ms, faster than 98.75% of JavaScript online submissions for Maximum Depth of Binary Tree.
	Memory Usage: 45 MB, less than 23.92% of JavaScript online submissions for Maximum Depth of Binary Tree.
	
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
var maxDepth = function(root, depth=0) {
    if(root==null) return depth;
    
    return Math.max(maxDepth(root.left, depth+1), maxDepth(root.right, depth+1));
};