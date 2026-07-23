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
 * @return {number[]}
 */
var postorderTraversal = function (root) {
    let stack = [];
    let curr = root;
    let ans = [];
    let lastVisited = null;
    while (curr || stack.length) {
        while (curr) {
            stack.push(curr);
            curr = curr.left;
        }
        let peek = stack[stack.length - 1];

        if(peek.right && peek.right != lastVisited) {
            curr = peek.right;
        } else {
            ans.push(peek.val);
            lastVisited = stack.pop();
        }
    }
    return ans;
};