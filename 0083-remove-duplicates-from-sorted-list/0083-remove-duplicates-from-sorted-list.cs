/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     public int val;
 *     public ListNode next;
 *     public ListNode(int val=0, ListNode next=null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */
public class Solution {
    public ListNode DeleteDuplicates(ListNode head) {
        if(head == null || head.next == null) return head;
        ListNode result = new ListNode(head.val);
        ListNode resultHead = result;
        while(head.next != null)
        {
            if(result.val != head.next.val)
            {
                result.next = new ListNode(head.next.val);
                result = result.next;
            }
            head = head.next;
        }
        return resultHead;
    }
}