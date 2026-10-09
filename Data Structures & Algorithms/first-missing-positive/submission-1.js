class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    firstMissingPositive(nums) {

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] <= 0 || nums[i] > nums.length) {
            nums[i] = nums.length+1;
        }
    }
    for (let i = 0; i < nums.length; i++) {
        const num = Math.abs(nums[i]) - 1;
        if (num > nums.length) continue;

        if (nums[num] > 0) {
            nums[num] = -nums[num];
        }
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0 ) {
            return i + 1;
        }
    }

    return nums.length + 1;
    }
}
