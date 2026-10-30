class Solution {
    /**
     * @param {number[]} arr
     * @return {number}
     */
    maxTurbulenceSize(arr) {
        let up = 1;
        let down = 1;
        let maxLength = 1;

        for (let i = 1; i < arr.length; i++) {
            if (arr[i] > arr[i-1]) {
                up = down + 1;
                down = 1;
            } else if (arr[i] < arr[i-1]) {
                down = up + 1;
                up = 1;
            } else {
                up = 1;
                down = 1;
            }
            maxLength = Math.max(maxLength, up, down);
        }
        return maxLength;
    }
}
