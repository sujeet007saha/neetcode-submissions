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
     * @param {number} left
     * @param {number} right
     * @return {ListNode}
     */
    reverseBetween(head, left, right) {
        if (!head || left === right) {
            return head;
        }

        let dummyNode = new ListNode(0);
        dummyNode.next = head;
        let prev = dummyNode;
        for (let i = 1; i < left; i++) {
            prev = prev.next; 
        }

        let current = prev.next;

        for (let i = 0; i < right - left; i++) {
            let nextNode = current.next
            current.next = nextNode.next;
            nextNode.next = prev.next;
            prev.next = nextNode;
        }

        return dummyNode.next;
    }
}
