class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let estr = '';

        for (const str of strs) {
            estr += str.length + '#' + str
        }
        return estr;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const result = [];

    let i = 0;

    while (i < str.length) {
        let j = i;
        while (str[j] !== '#') {
            j++;
        }
        const length = Number(str.substring(i, j));
        j++;

        result.push(str.substring(j, j+length));
        i = j+length;
        result
    }
    return result;
    }
}
