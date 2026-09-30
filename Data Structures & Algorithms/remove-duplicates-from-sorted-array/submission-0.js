class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        let length = nums.length;
        let i=1;
        let j = 0;
        while (i < length) {
            if (nums[j] !== nums[i]) {
                j++;
                nums[j] = nums[i];
            } 
            i++
        }
        return j+1;
    }
}
