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
    public bool IsSymmetric(TreeNode root) {
        return findSymm(root.left, root.right);
    }
    public bool findSymm(TreeNode left, TreeNode right)
    {
        if(left == null || right == null) return left == right;

        return (left.val == right.val) && findSymm(left.right, right.left) && findSymm(left.left, right.right);
    }
}