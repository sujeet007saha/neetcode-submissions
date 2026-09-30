class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        const maxLength = word1.length > word2.length ? word1.length : word2.length;
        let result = '';
        for (let i=0; i<maxLength; i++) {
            if (word1[i]) {
                result += word1[i];
            }
            if (word2[i]) {
                result += word2[i];
            }
        }
        return result;
    }
}
