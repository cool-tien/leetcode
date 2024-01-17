/**
    //  solution refer by official editorial

    Time Complexity: O(n)
        48 ~ 73 ms          (28.62% ~ 99.69%)
    Space Complexity: O(n)
        46.00 ~ 46.75 MB    (64.47% ~ 96.23%)
    
    https://leetcode.com/problems/find-largest-value-in-each-tree-row/submissions/1148356107/
        Runtime 64 ms Beats 72.96%; Memory 46.75 MB Beats 64.47%; 
    https://leetcode.com/problems/find-largest-value-in-each-tree-row/submissions/1148365678/
        Runtime 48 ms Beats 99.69%; Memory 46.00 MB Beats 96.23%; 
    https://leetcode.com/problems/find-largest-value-in-each-tree-row/submissions/1148371156/
        Runtime 73 ms Beats 28.62%; Memory 46.40 MB Beats 88.68%; 

 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

var largestValues = function(root) {
    return (root === null)?
        []: 
        dfs(root, 0, []);
};

const dfs = (node, depth, ans = []) => {
    if(node === null) return;

    //  first visit the depth of the tree
    if(ans.length === depth)
        ans.push(node.val);
    else
        ans[depth] = Math.max(ans[depth], node.val);

    dfs(node.left, depth + 1, ans);
    dfs(node.right, depth + 1, ans);

    return ans;
}