// Make an interating pointer like this: it goes forward every time till the end, 
// and then jumps to the beginning of the opposite list, and so on. Create two of these, 
// pointing to two heads. Advance each of the pointers by 1 every time, until they meet. 
// This will happen after either one or two passes.

// count the number of nodes traveled from head1-> tail1 -> head2 -> intersection point and
// head2 -> tail2-> head1 -> intersection point. Both will be equal(Draw diff types of linked 
// lists to verify this). Reason is both pointers have to travel same distances 
// head1-> IP + head2->IP before reaching IP again. So by the time it reaches IP, 
// both pointers will be equal and we have the merging point.

function findMergeNode(headA, headB) {
    let currA = headA;
    let currB = headB;

    while (currA != currB) {
        if (currA.next == null) {
            currA = headB;
        } else {
            currA = currA.next;
        }

        if (currB.next == null) {
            currB = headA;
        } else {
            currB = currB.next;
        }
    }

    return currB.data;
}