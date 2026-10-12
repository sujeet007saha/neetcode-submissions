class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} x
     * @return {number[]}
     */
    findClosestElements(arr, k, x) {

        let left = 0; 
        let right = arr.length - 1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);

            if (arr[mid] < x) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        let l = left - 1;
        let r = left;
        const result = [];

        while (result. length < k) {
            if (l < 0) {
                result.push(arr[r]);
                r++;
            } else if(r >= arr.length) {
                result.push(arr[l]);
                l--;
            } else if (Math.abs(arr[l] - x) <= Math.abs(arr[r] - x)) {
                result.push(arr[l]);
                l--;
            } else {
                result.push(arr[r]);
                r++;
            }
        }
        result.sort((a, b) => a - b)
        return result;
    }
}
