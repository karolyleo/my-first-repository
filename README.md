# Practice Repository

---
Welcome to the Practice Repository! This repository is dedicated to storing and reviewing various coding challenges from platforms such as Leetcode and freeCodeCamp. Here, you will find a collection of solved challenges that range from easy to advanced, as well as explanations. ~~for each solution~~

## Features

- A wide range of coding challenges from platforms like Leetcode and freeCodeCamp
- Solutions in multiple programming languages
- Detailed explanations for each solution
- A system for reviewing and sharing feedback on solutions

## How to Use

- Browse through the challenges by language or platform.
- Click on a specific challenge to view its solution and explanation.
- If you have feedback or suggestions for a solution, use the review feature to share your thoughts.
- If you're stuck on a challenge, check out the solutions in this repository for inspiration.
- If you want to contribute your own solutions, feel free to fork the repository and submit a pull request.

### Example

---
Given head, the head of a linked list, determine if the linked list has a cycle in it. There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.

    Example 1: Input: head = [3,2,0,-4], pos = 1 || Output: true 
Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).

    Example 2: Input: head = [1,2], pos = 0 || Output: true 
Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.

    Example 3: Input: head = [1], pos = -1 || Output: false 
Explanation: There is no cycle in the linked list.

Constraints:
The number of the nodes in the list is in the range [0, 104]. 
```-105 <= Node.val <= 105 pos is -1 || a valid index in the linked-list```.

```
var hasCycle = function(head) {
    let fast = head;
    while(fast && fast.next){
        head = head.next;
        fast = fast.next.next;
        if(fast===head)return true;
    }
    return false;
};
```

## Conclusion

We hope you find this repository helpful in your coding journey. Whether you're preparing for an interview, looking to improve your skills, or just want to have fun solving coding challenges, this repository has something for everyone. Happy coding!
