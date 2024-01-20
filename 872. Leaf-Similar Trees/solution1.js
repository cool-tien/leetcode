/**
    Time Complexity: O(n)
        56 ~ 63 ms          (30.98% ~ 70.09%)
    Space Complexity: O(n)
        50.47 ~ 52.03 MB    (7.63%)
    
    https://leetcode.com/problems/leaf-similar-trees/submissions/1151182181/
        Runtime 63 ms Beats 30.98%; Memory 50.66 MB Beats 7.63%; 
    https://leetcode.com/problems/leaf-similar-trees/submissions/1151186750/
        Runtime 56 ms Beats 70.09%; Memory 52.03 MB Beats 7.63%; 
    https://leetcode.com/problems/leaf-similar-trees/submissions/1151187011/
        Runtime 60 ms Beats 47.11%; Memory 50.47 MB Beats 7.63%; 

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
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    let arr1 = getLeaf(root1);
    let arr2 = getLeaf(root2);

    if(arr1.length !== arr2.length) 
        return false;

    for(let i=0; i<arr1.length; i++)
        if(arr1[i] !== arr2[i])
            return false;
    return true;
};

//  DPS
const getLeaf = (root, leaf = []) => {
    if(!root) return;

    //  is leaf
    if(!root.left && !root.right)
        leaf.push(root.val);

    getLeaf(root.left, leaf);
    getLeaf(root.right, leaf);

    return leaf;
}