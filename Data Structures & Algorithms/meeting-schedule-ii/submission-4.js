/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {number}
     */
    minMeetingRooms(intervals) {
        if (intervals.length === 0) return 0;
        intervals.sort((a, b) => (a.start - b.start)); // Sort intervals based on start time

        const minHeap = [];

        // Insert into the min heap
        const push = (value) => {
            minHeap.push(value);

            let i = minHeap.length - 1;

            while (i > 0) {
                const parent = Math.floor((i - 1) / 2);

                if (minHeap[parent] <= minHeap[i]) break;

                [minHeap[parent], minHeap[i]] =
                    [minHeap[i], minHeap[parent]];

                i = parent;
            }
        };

        // Remove and return the minimum element
        const pop = () => {
            const min = minHeap[0];
            const last = minHeap.pop();

            if (minHeap.length > 0) {
                minHeap[0] = last;

                let i = 0;

                while (true) {
                    let smallest = i;
                    const left = 2 * i + 1;
                    const right = 2 * i + 2;

                    if (
                        left < minHeap.length &&
                        minHeap[left] < minHeap[smallest]
                    ) {
                        smallest = left;
                    }

                    if (
                        right < minHeap.length &&
                        minHeap[right] < minHeap[smallest]
                    ) {
                        smallest = right;
                    }

                    if (smallest === i) break;

                    [minHeap[i], minHeap[smallest]] =
                        [minHeap[smallest], minHeap[i]];

                    i = smallest;
                }
            }

            return min;
        };

        for (let i = 0; i < intervals.length; i++) {
            if (minHeap.length > 0 && minHeap[0] <= intervals[i].start) {
                pop();
            }
            push(intervals[i].end);
        }
        return minHeap.length;
    }
}
