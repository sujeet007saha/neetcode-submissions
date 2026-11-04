class Solution {
    /**
     * @param {number[][]} matrix
     * @return {number[][]}
     */
    transpose(matrix) {
        const rows = matrix.length;
        const cols = matrix[0].length;

        let result = Array.from(
            {length: cols},
            () => Array(rows).fill(0)
        );

        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                result[j][i] = matrix[i][j];
            }
        }

        return result;
    }
}
