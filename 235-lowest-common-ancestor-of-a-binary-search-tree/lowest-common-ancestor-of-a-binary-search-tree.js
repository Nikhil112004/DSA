/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    let traversal = (curr , p ,q) => {
        if(!curr) return null;
        if(curr.val <  p.val && curr.val < q.val) {
           return curr.right && traversal(curr.right, p, q);
        } else if(curr.val > p.val && curr.val > q.val) {
           return curr.left && traversal(curr.left, p, q);
        } else {
        return curr;
        }
    }
    return traversal(root, p ,q);
};