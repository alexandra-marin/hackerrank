function sortedInsert(head, data) {
    let newNode = new DoublyLinkedListNode(data);

    if (head == null) {
        // insert in empty list
        return newNode;
    } else if (data < head.data) {
        // insert in front of list
        newNode.next = head;
        head.prev = newNode;
        return newNode;
    } else {
        let prevSpot = null;
        let currSpot = head;

        while (currSpot != null && currSpot.data < data) {
            prevSpot = currSpot;
            currSpot = currSpot.next;
        }

        if (currSpot === null) {
            // end of list            
            prevSpot.next = newNode;
            newNode.prev = prevSpot;
        } else {
            // insert in the middle
            prevSpot.next = newNode;
            currSpot.prev = newNode;

            newNode.next = currSpot;
            newNode.prev = prevSpot;
        }

        return head;
    }
}