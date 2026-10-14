class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} newInterval
     * @return {number[][]}
     */
    insert(intervals, newInterval) {
        const n = intervals.length;
        let start = newInterval[0];
        let end = newInterval[1];
        let i = 0;
        const result = [];

        while (i < n && intervals[i][1] < start) {
            result.push(intervals[i]);
            i++;
        }
        while (i < n && intervals[i][0] <= end) {
            start = Math.min(start, intervals[i][0]);
            end = Math.max(end, intervals[i][1]);
            i++;
        }
        result.push([start, end]);
        while (i < n) {
            result.push(intervals[i]);
            i++;
        }

        return result;
    }
}
