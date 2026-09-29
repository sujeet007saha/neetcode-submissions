class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const frequencyMap = new Map();

        for (const num of nums) {
            frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
        }

        const frequencyBucket = [];

        for (const [num, frequency] of frequencyMap) {
            if (!frequencyBucket[frequency]) {
                frequencyBucket[frequency] = [];
            }
            frequencyBucket[frequency].push(num);
        }

        const result = [];
        for (let i = frequencyBucket.length - 1; i > 0; i--) {
            if (frequencyBucket[i]) {
                result.push(...frequencyBucket[i]);

                if (result.length >= k) {
                    return result.slice(0, k);
                }
            }
        }
        return result;
    }
}
