const threeSumClosest = (nums, target) => {
    nums.sort((a, b) => a - b); // Sort the array for two-pointer approach

    let closestSum = Infinity;
    let minDiff = Infinity;

    for (let i = 0; i < nums.length - 2; i++) {
        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            const diff = sum - target;

            // If exact match is found, return it immediately
            if (diff === 0) {
                return sum;
            }

            // Update closest sum if new sum is closer
            if (Math.abs(diff) < Math.abs(minDiff)) {
                minDiff = diff;
                closestSum = sum;
            }

            // Move pointers based on comparison with target
            if (sum < target) {
                left++; // Increase sum
            } else {
                right--; // Decrease sum
            }
        }
    }

    return closestSum;
};


threeSumClosest([-1,2,1,-4], 1)