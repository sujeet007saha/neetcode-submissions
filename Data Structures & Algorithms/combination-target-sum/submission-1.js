class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {

        let result = [];
        let currentCombination = [];

        function backTrack(index, target) {
            if (index === nums.length || target < 0) return;

            if (target === 0) {
                result.push([...currentCombination]);
                return;
            }

            currentCombination.push(nums[index]);
            backTrack(index, target - nums[index])
            currentCombination.pop();
            backTrack(index + 1, target)
        }

        backTrack(0, target);

        return result
    }
}
