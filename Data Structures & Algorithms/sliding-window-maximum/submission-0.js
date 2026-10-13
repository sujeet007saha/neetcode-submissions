class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        let head = 0;
        let dequeue = [];
        let result = [];

        for (let i = 0; i < nums.length; i++) {
            if (head < dequeue.length && dequeue[head] <= i - k) {
                head++;
            }

            while (dequeue.length > head && nums[dequeue[dequeue.length - 1]] <= nums[i]) {
                dequeue.pop();
            }
            dequeue.push(i);

            if (i >= k - 1) {
                result.push(nums[dequeue[head]]);
            }
        }
        return result;
    }
}
