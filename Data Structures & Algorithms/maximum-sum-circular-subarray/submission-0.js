class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubarraySumCircular(nums) {
        let totalSum = 0;
        let currentSum = 0;
        let maxSum = nums[0];
        let currentMin = 0;
        let minSum = Infinity;

        for (const num of nums) {
            totalSum += num;

            currentSum = Math.max(num, currentSum + num);
            maxSum = Math.max(maxSum, currentSum);

            currentMin = Math.min(num, currentMin+num);
            minSum = Math.min(minSum, currentMin);
        }

        if (maxSum < 0) {
            return maxSum;
        }

        totalSum = Math.max(maxSum, totalSum-minSum);
        return totalSum;
    }
}
