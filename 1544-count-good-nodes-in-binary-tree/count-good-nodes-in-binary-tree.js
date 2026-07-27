/**
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
var goodNodes = function(root) {
    let ans = 0;
    let traversal = (curr, max) => {
        if(curr.val >= max) {
            ++ans;
        }
        let currMax = Math.max(max, curr.val)
        curr.left && traversal(curr.left, currMax);
        curr.right && traversal(curr.right, currMax);
    }
    traversal(root, -Infinity);
    return ans;
};