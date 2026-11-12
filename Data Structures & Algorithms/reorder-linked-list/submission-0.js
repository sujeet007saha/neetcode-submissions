/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head) {
        if (!head || !head.next) {
            return ;
        }

        let slow = head;
        let fast = head;

        while (fast && fast.next) {
            fast = fast.next.next;
            slow = slow.next;
        }

        let second = slow.next;
        slow.next = null;
        let prev = null;

        while (second) {
            let tempNode = second.next;
            second.next = prev;
            prev = second;
            second = tempNode;
        }

        second = prev;
        let first = head;

        while (second) {
            let firstNext = first.next;
            let secondNext = second.next;

            first.next = second;
            second.next = firstNext;
            first = firstNext;
            second = secondNext;
        }

        return head
    }
}
