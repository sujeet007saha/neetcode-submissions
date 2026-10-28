class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums) {
        let finalPosition = nums.length - 1;

        for (let i = nums.length - 2; i >= 0 ; i--) {
            if (i + nums[i] >= finalPosition) {
                finalPosition = i;
            }
        }
        return finalPosition === 0;
    }
}
