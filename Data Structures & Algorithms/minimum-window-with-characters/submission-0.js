class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        let left = 0;
        let minStart = 0;
        let minLength = Infinity;
        let required = t.length;
        let need = new Map();
        let window = new Map();

        for (const char of t) {
            need.set(char, (need.get(char) || 0) + 1);
        }

        for (let right = 0; right < s.length; right++) {
            let char = s[right];

            window.set(char, (window.get(char) || 0) + 1);

            if (need.has(char) && window.get(char) <= need.get(char)) {
                required--;
            }

            while (required === 0) {
                if (right - left + 1 < minLength) {
                    minLength = right - left + 1;
                    minStart = left;
                }

                const leftChar = s[left];

                window.set(leftChar, window.get(leftChar) - 1);

                if (need.has(leftChar) && need.get(leftChar) > window.get(leftChar)) {
                    required++;
                }
                left++;
            }
        }
        return minLength === Infinity ? '' : s.substring(minStart, minStart + minLength);
    }
}
