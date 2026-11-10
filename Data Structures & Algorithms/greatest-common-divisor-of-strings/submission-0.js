class Solution {
    /**
     * @param {string} str1
     * @param {string} str2
     * @return {string}
     */
    gcdOfStrings(str1, str2) {
        if ((str1 + str2) !== (str2 + str1)) {
            return '';
        }

        const gcd = (a, b) => {

            while (b !== 0) {
                const temp = b;
                b = a % b;
                a = temp;
            }
            return a;
        }

        const length = gcd(str1.length, str2.length);
        return str1.substring(0, length);
    }
}
