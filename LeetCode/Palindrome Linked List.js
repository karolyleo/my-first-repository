var isPalindrome = function(head) {
    let mid = findMiddle(head);   // find the middle of the linked list
    let last = reverse(mid)      // reverse the second half of the linked list
    let first = head              // set first pointer to the start of the linked list
    while(first && last) {       // iterate through both first and last pointers
        if(first.val !== last.val) return false   // if the values are not equal, return false as it is not a palindrome
        first = first.next         // move first pointer to the next node
        last = last.next           // move last pointer to the next node
    }
    return true                  // if all values are equal, return true as it is a palindrome
};

function findMiddle(head) {
    let slow = head               // set slow pointer to the start of the linked list
    let fast = head               // set fast pointer to the start of the linked list
    while(fast && fast.next) {   // iterate through fast pointer and its next node
        slow = slow.next           // move slow pointer to the next node
        fast = fast.next.next      // move fast pointer to the next of next node
    }
    return slow                   // return the middle node
}

function reverse(head) {
    let prev = null               // initialize prev to null
    let current = head            // set current to the start of the linked list
    while(current) {             // iterate through current node
        let next = current.next     // store next node in a variable
        current.next = prev         // set current's next node to prev
        prev = current              // set prev to current
        current = next              // set current to next node
    }
    return prev                   // return the reversed linked list
}
