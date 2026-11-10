class Solution {
    /**
     * @param {number[]} digits
     * @return {number[]}
     */
    plusOne(digits) {
        if (digits[digits.length - 1] !== 9) {
            digits[digits.length - 1] += 1;
            return digits;
        }
        let result = [];
        let carry = true;
        for (let i = digits.length - 1; i >= 0; i--) {
            if (digits[i] === 9 && carry) {
                result.push(0);
                carry = true
                if (i === 0) {
                    result.push(1);
                }
            } else if (digits[i] === 9 && !carry) {
                result.push(digits[i]);
            }
            else {
                if (carry) {

                    result.push(digits[i] + 1);
                    carry = false;
                } else {
                    result.push(digits[i]);
                }
            }
        }
        return result.reverse();
    }
}
