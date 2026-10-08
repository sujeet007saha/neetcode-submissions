class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let left = 0;
        const count = new Array(26).fill(0);
        let maxFreq = 0;
        let result = [];

        for (let right=0; right<s.length; right++) {
            let index = s.charCodeAt(right) - 65;
            count[index]++;

            maxFreq = Math.max(maxFreq, count[index]);

            let windowLength = right-left+1;

            if (windowLength - maxFreq > k) {
                const leftIndex = s.charCodeAt(left) - 65;
                count[leftIndex]--;
                left++;
            }

            result = Math.max(result, right - left + 1);
        }
        return result;
    }
}
