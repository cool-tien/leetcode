/**
    Time Complexity: O(n)
        137 ~ 175 ms        (10.58% ~ 39.11%)
    Space Complexity: O(n)
        67.88 ~ 68.55 MB    (73.31% ~ 81.59%)
    
    https://leetcode.com/problems/maximum-level-sum-of-a-binary-tree/submissions/1155119784/
        Runtime 160 ms Beats 12.27%; Memory 68.52 MB Beats 73.31%; 
    https://leetcode.com/problems/maximum-level-sum-of-a-binary-tree/submissions/1155168970/
        Runtime 175 ms Beats 10.58%; Memory 68.55 MB Beats 73.31%; 
    https://leetcode.com/problems/maximum-level-sum-of-a-binary-tree/submissions/1155169487/
        Runtime 137 ms Beats 39.11%; Memory 67.88 MB Beats 81.59%; 

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
var maxLevelSum = function(root) {
    let queue = [root];
    let max = Number.MIN_SAFE_INTEGER;
    let level = 0;
    let ans = 0;
    
    while(queue.length){
        let sum = 0;
        level++;

        for(let i=queue.length; i>0; i--){
            let node = queue[0];
            queue.shift();
            sum += node.val;

            if(node.left)
                queue.push(node.left);
            if(node.right)
                queue.push(node.right);
        }
        
        if(sum > max){
            max = sum;
            ans = level;
        }
    }

    return ans;
};