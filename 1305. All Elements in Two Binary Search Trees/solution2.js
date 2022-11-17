/**
    refer: netizen (Other Accepted Solution)

    O(2n log n)
    171 ~ 191 ms    (88.80% ~ 96.80%)
    53.1 ~ 54.19 MB (88.80% ~ 100.00%)

    https://leetcode.com/submissions/detail/845113108/
        Runtime: 171 ms, faster than 96.80% of JavaScript online submissions for All Elements in Two Binary Search Trees.
        Memory Usage: 54.1 MB, less than 88.80% of JavaScript online submissions for All Elements in Two Binary Search Trees.
    https://leetcode.com/submissions/detail/845114954/
        Runtime: 175 ms, faster than 96.80% of JavaScript online submissions for All Elements in Two Binary Search Trees.
        Memory Usage: 53.1 MB, less than 100.00% of JavaScript online submissions for All Elements in Two Binary Search Trees.
    https://leetcode.com/submissions/detail/845123346/
        Runtime: 191 ms, faster than 88.80% of JavaScript online submissions for All Elements in Two Binary Search Trees.
        Memory Usage: 53.9 MB, less than 91.20% of JavaScript online submissions for All Elements in Two Binary Search Trees.

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
    let arr = [];
    
    const tree2array = (root) => {
        if(!root) return;
        
        tree2array(root.left);
        arr.push(root.val);
        tree2array(root.right);
    }
    
    tree2array(root1);
    tree2array(root2);
    
    return arr.sort((a, b) => a - b);
};