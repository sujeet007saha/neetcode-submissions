class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    subsetXORSum(nums) {
        let total = 0;

        function backTrack(index, currentXor) {
            total += currentXor;

            for (let i = index; i < nums.length; i++) {
                backTrack(i+1, currentXor ^ nums[i]);
            }
        }
        backTrack(0, 0);

        return total;
    }
}
