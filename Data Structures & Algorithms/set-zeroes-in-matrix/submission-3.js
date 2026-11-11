class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    setZeroes(matrix) {
        const rows = matrix.length;
        const cols = matrix[0].length;

        let col0 = false;

        for (let i = 0; i < rows; i++) {
            if (matrix[i][0] === 0) {
                col0 = true;
            }

            for (let j = 1; j < cols; j++) {
                if (matrix[i][j] === 0) {
                    matrix[i][0] = 0;
                    matrix[0][j] = 0;
                }
            }
        }

        for (let i = rows-1; i >= 0; i--) {
            for (let j = cols-1; j >= 1; j--) {
                if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                    matrix[i][j] = 0;
                }
            }
            if (col0) {
                matrix[i][0] = 0;
            }
        }
        return matrix;
    }
}
