class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number}
     */
    eraseOverlapIntervals(intervals) {
        intervals.sort((a, b) => a[1] - b[1]);
        let removedCount = 0;
        let prevEnd = intervals[0][1];

        for (let i = 1; i < intervals.length; i++) {
            if (intervals[i][0] < prevEnd) {
                removedCount++;
            } else {
                prevEnd = intervals[i][1];
            }
        }
        return removedCount;
    }
}
