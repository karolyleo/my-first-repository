/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     public int val;
 *     public TreeNode left;
 *     public TreeNode right;
 *     public TreeNode(int val=0, TreeNode left=null, TreeNode right=null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
public class Solution {
    public int MaxDepth(TreeNode root) {
        if(root == null) return 0;
        int maxDepth = 1, leftDepth = 1, rightDepth = 1;

        if(root.left == null && root.right == null) return maxDepth;

        if(root.left != null) leftDepth = MaxDepth(root.left);
        if(root.right != null) rightDepth = MaxDepth(root.right);
        
        return 1 + Math.Max(leftDepth, rightDepth);
    }
}