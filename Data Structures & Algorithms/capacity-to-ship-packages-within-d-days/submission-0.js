class Solution {
    /**
     * @param {number[]} weights
     * @param {number} days
     * @return {number}
     */
    shipWithinDays(weights, days) {
        let minCap = 0;
        let maxCap = 0;

        for (const weight of weights) {
            minCap = Math.max(minCap, weight);
            maxCap += weight;
        }

        while (minCap < maxCap) {
            const mid = Math.floor((minCap + maxCap) / 2);

            let sum = 0;
            let d = 1;

            for (const weight of weights) {
                if (sum + weight > mid) {
                    d++;
                    sum = 0;
                }
                sum += weight;
            }

            if (d > days) {
                minCap = mid + 1;
            } else {
                maxCap = mid;
            }
        }
        return minCap;
    }
}
