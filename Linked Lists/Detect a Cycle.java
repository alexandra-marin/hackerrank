boolean hasCycle(Node head) {
    Node slow = head;
    Node fast = null;
    if(head != null) {
        fast = head.next;
    }
    
    while(slow != null && fast != null && fast.next != null) {
        if(slow == fast) {
            return true;
        }
        slow = slow.next;
        fast = fast.next.next;
    }
    
    return false;
}