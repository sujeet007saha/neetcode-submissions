class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const n = nums.length;
        const result = [];
        let prefix = 1;

        for (let i=0; i<n; i++) {
            result[i] = prefix;
            prefix *= nums[i];
        }

        let sufix = 1;

        for (let i=n-1; i>=0; i--) {
            result[i] *= sufix;
            sufix *= nums[i];
        }

        return result;
    }
}
