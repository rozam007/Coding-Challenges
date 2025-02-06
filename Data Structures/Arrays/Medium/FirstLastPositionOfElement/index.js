const searchRange = (nums, target) => {
    let left = -1, right = -1;
    let low = 0, high = nums.length - 1;

    while (low <= high) {
        let mid = Math.floor(low + (high - low) / 2);

        if (nums[mid] === target) {
            left = right = mid;
            // Expand outwards to find full range
            while (left > 0 && nums[left - 1] === target) left--;
            while (right < nums.length - 1 && nums[right + 1] === target) right++;
            return [left, right];
        }
        else if (nums[mid] < target) {
            low = mid + 1;
        }
        else {
            high = mid - 1;
        }
    }
    return [-1, -1];

};

const nums = [5, 7, 7, 8, 8, 10];
const target = 8;
searchRange(nums, target)