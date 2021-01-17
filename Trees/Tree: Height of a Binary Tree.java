public static int height(Node root) {
    if(root == null) {
        return -1;
    }
    
    int leftHeight = height(root.left) + 1;
    int rightHeight = height(root.right) + 1;
    
    return Math.max(leftHeight, rightHeight);
}