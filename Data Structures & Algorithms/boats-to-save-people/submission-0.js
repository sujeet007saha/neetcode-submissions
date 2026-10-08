class Solution {
    /**
     * @param {number[]} people
     * @param {number} limit
     * @return {number}
     */
    numRescueBoats(people, limit) {
        people.sort((a, b) => a - b);
        let left = 0;
        let right = people.length - 1;
        let count = 0;

        while (left <= right) {
            const currentLimit = people[left] + people[right];

            if (currentLimit <= limit) {
                count++;
                left++;
                right--;
            } else {
                count++;
                right--;
            }
        }
        return count;
    }
}
