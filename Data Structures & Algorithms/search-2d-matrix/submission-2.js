class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        const m = matrix.length;
        const n = matrix[0].length;

        let top = 0;
        let bottom = m - 1;
        let row = -1;

        while (top <= bottom) {
            const mid = Math.floor((top + bottom) / 2);
            if (matrix[mid][0] <= target && matrix[mid][n-1] >= target) {
                row = mid;
                break;
            } else if (target < matrix[mid][0]) {
                bottom = mid - 1;
            } else {
                top = mid + 1;
            }
        }

        if (row === -1) {
            return false;
        }

        let left = 0;
        let right = n - 1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);

            if (matrix[row][mid] === target) {
                return true;
            } else if (matrix[row][mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return false;
    }
}
