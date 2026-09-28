class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map();

        for (const str of strs) {
            const freqCountArr = new Array(26).fill(0);

            for (const char of str) {
                freqCountArr[char.charCodeAt(0) - 97]++;
            }

            const key = freqCountArr.join('#');
            if (!map.has(key)) {
                map.set(key, [str]);
            } else {
                map.get(key).push(str);
            }
        }
        return Array.from(map.values());
    }
}
