class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set(nums);

        let longest = 0;

        for (let num of set) {
            let currentNum = num;
            let length = 1;
            if (!set.has(num-1)) {
                while (set.has(currentNum+1)) {
                    currentNum++;
                    length++;
                }
                longest = Math.max(longest, length);
            }
        }
        return longest;
    }
}
