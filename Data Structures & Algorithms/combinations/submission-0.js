class Solution {
    /**
     * @param {number} n
     * @param {number} k
     * @return {number[][]}
     */
    combine(n, k) {
        let result = [];
        let currentCombination = [];

        function backTrack(start) {
            if (currentCombination.length === k) {
                result.push([...currentCombination]);
                return;
            }

            for (let i = start; i <= n; i++) {
                currentCombination.push(i);
                backTrack (i + 1);
                currentCombination.pop();
            }
        }

        backTrack(1);

        return result;
    }
}
