class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        let result = [];
        let current = [];

        function backTrack(start) {
            result.push([...current]);

            for (let i = start; i < nums.length; i++) {
                current.push(nums[i]);

                backTrack(i+1);
                current.pop();
            }
        }

        backTrack(0);
        return result;
    }
}
