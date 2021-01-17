function insertNodeAtPosition(head, data, position) {
    let newNode = new SinglyLinkedListNode(data);

    if (head == null) {
        // insert in empty list
        return newNode;
    } else if (position == 0) {
        // insert in front of list
        newNode.next = head;
        return newNode;
    } else {
        let prevSpot = null;
        let currSpot = head;
        let pos = 0;

        while (currSpot != null && pos < position) {
            pos++;
            prevSpot = currSpot;
            currSpot = currSpot.next;
        }

        prevSpot.next = newNode;
        newNode.next = currSpot;

        return head;
    }
}