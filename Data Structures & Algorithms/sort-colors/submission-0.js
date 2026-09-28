class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        function quickSort(left, right) {

            if (left >= right) return;

            const pivotIndex = partition(left, right);

            quickSort(left, pivotIndex - 1);
            quickSort(pivotIndex + 1, right);
        }

        function partition(left, right) {
            let pivot = nums[right];
            let i = left;

            for (let j = left; j < right; j++) {
                if (nums[j] < pivot) {
                    [nums[i], nums[j]] = [nums[j], nums[i]];
                    i++;
                }
            }
            [nums[i], nums[right]] = [nums[right], nums[i]];

            return i;
        }

        quickSort(0, nums.length - 1);

        return nums;
    }
}
