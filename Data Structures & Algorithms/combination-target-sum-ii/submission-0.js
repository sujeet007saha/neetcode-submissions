class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        let result = [];
        let currentCombination = [];

        candidates.sort((a, b) => a - b);

        function backTrack(index, target) {

            if (target === 0) {
                result.push([...currentCombination]);
                return;
            }

            for (let i = index; i < candidates.length; i++) {

                if (i > index && candidates[i] === candidates[i - 1]) {
                    continue;
                }

                if (candidates[i] > target) {
                    break;
                }

                currentCombination.push(candidates[i]);
                backTrack(i + 1, target - candidates[i])
                currentCombination.pop();
            }
           
        }

        backTrack(0, target);

        return result
    }
}
