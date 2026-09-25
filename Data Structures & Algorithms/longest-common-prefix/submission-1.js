class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        if (strs.length === 0) return '';
        let comPrefix = strs[0];
        let tempPref = comPrefix;

        for (let i = 0; i < strs.length - 1; i++) {
            for (let j = 0; j < comPrefix.length; j++) {
                if (comPrefix[j] !== strs[i+1][j]) {
                    tempPref = comPrefix.substring(0, j);
                    break;
                }
            }
            comPrefix = tempPref;
        }
        return comPrefix;
    }
}
