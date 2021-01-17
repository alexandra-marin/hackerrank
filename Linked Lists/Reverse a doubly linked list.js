function reverse(head) {
    let curr = head;
    let newHead = null;

    while (curr != null) {
        let next = curr.next;
        let prev = curr.prev;
        curr.next = prev
        curr.prev = next

        newHead = curr;
        curr = next
    }

    return newHead;
}