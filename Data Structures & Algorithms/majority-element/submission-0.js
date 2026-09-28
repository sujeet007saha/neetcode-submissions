class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let count = 0;
        let candidate = null;

        for (const num of nums) {
            if (count === 0) {
                candidate = num;
            }

            if (num === candidate) {
                count++;
            } else {
                count--;
            }
        }
        return candidate
    }
}
