class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const numsMap = new Map();

        for (const num of nums) {
            if (!numsMap[num]) {
                numsMap[num] = 1;
            } else {
                return true;
            }
        }
        return false;
    }
}
