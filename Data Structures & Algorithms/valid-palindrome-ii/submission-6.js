class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(s) {
        if (s.length === 1) return true;
        let left = 0;
        let right = s.length-1;

        while (left < right) {
            if (s[left].toLowerCase() !== s[right].toLowerCase()) {
                return this.isValidPalindrome(s, left+1, right) || this.isValidPalindrome(s, left, right -1);
            }
            left++; 
            right --;
        }
    return true;
    }
    isValidPalindrome(str, left, right) {
        while(left < right) {
            if (str[left] !== str[right]) {
                return false;
            }
        left++;
        right--;
        }
        return true;
    }
}
