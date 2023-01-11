/**
    Time Complexity: O(n)
    Space Complexity: O(n)

    https://leetcode.com/problems/same-tree/submissions/875810402/
        Runtime 63 ms, Beats 86.22%; Memory 42.3 MB, Beats 48.67%
    https://leetcode.com/problems/same-tree/submissions/875811058/
        Runtime 67 ms, Beats 76.58%; Memory 42.1 MB, Beats 70.12%
    https://leetcode.com/problems/same-tree/submissions/875811223/
        Runtime 62 ms, Beats 87.64%; Memory 42.2 MB, Beats 70.12%

 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    const checkSame = (node1, node2) => {
        if((node1 === null && node2 !== null) || (node1 !== null && node2 === null))
            return false;
        
        if(node1 === null && node2 === null)
            return true;
        return (node1.val === node2.val);
    }
    
    const compareTree = (node1, node2) => {
        if(!checkSame(node1, node2))
            return false;

        if(node1 !== null && node2 !== null){
            //  check left children
            if(!checkSame(node1.left, node2.left))
                return false;
            //  check right children
            if(!checkSame(node1.right, node2.right))
                return false;
            
            //  goto left & right children
            return compareTree(node1.left, node2.left) && compareTree(node1.right, node2.right);
        }
        
        return true;
    }

    if((p === null) && (q === null))
        return true;

    return compareTree(p, q);
};