class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        intervals.sort((a,b) => a[0] - b[0]);
        const n = intervals.length;
        const result = [];
        let [start, end] = intervals[0];
        for (let i = 1; i < n; i++) {
            let [currStart, currEnd] = intervals[i];
            if (currStart <= end) {
                end = Math.max(end, currEnd);
            } else {
                result.push([start, end]);
                start = currStart;
                end = currEnd;
            }
        }
        result.push([start, end]);
        return result;
    }
}
