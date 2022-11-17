/**
    O(2n log n)
    1038 ~ 1462 ms  (5.60% ~ 6.40%)
    67.3 ~ 119.3 MB (5.60% ~ 7.20%)

    https://leetcode.com/submissions/detail/845104923/
        Runtime: 1462 ms, faster than 5.60% of JavaScript online submissions for All Elements in Two Binary Search Trees.
        Memory Usage: 119.3 MB, less than 5.60% of JavaScript online submissions for All Elements in Two Binary Search Trees.
    https://leetcode.com/submissions/detail/845107672/
        Runtime: 1115 ms, faster than 6.40% of JavaScript online submissions for All Elements in Two Binary Search Trees.
        Memory Usage: 119.3 MB, less than 5.60% of JavaScript online submissions for All Elements in Two Binary Search Trees.
    https://leetcode.com/submissions/detail/845107776/
        Runtime: 1038 ms, faster than 6.40% of JavaScript online submissions for All Elements in Two Binary Search Trees.
        Memory Usage: 67.3 MB, less than 7.20% of JavaScript online submissions for All Elements in Two Binary Search Trees.

 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
 var getAllElements = function(root1, root2) {
    const tree2array = root =>
        (!root)?
            []: 
            [root.val, ...tree2array(root.left), ...tree2array(root.right)];
    
    return [...tree2array(root1), ...tree2array(root2)].sort((a, b) => a - b);
};