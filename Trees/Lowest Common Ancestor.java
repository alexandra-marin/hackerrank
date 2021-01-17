// any type of tree

public static Node lca(Node root, int v1, int v2) {
        Stack<Node> pathToFirst = findPath(root, v1);
        Stack<Node> pathToSecond = findPath(root, v2);
        
        Node prev = null;
        while(!pathToFirst.isEmpty() && !pathToSecond.isEmpty()) {
            Node onFirst = pathToFirst.pop();
            Node onSecond = pathToSecond.pop();
            
            if(onFirst == onSecond) {
                prev = onFirst;
            } else {
                break;
            }
        }
        
        return prev;
    }
    
    public static Stack<Node> findPath(Node root, int data) {
        if(root == null) {
            return null;            
        }
        
        if(root.data == data) {
            Stack<Node> stack = new Stack<Node>();
            stack.push(root);
            return stack;
        }
        
        Stack<Node> left = findPath(root.left, data);
        Stack<Node> right = findPath(root.right, data);
        
        if(left != null) {
            left.push(root);
            return left;
        }

        if(right != null) {
            right.push(root);
            return right;
        }
        
        return null;
    }