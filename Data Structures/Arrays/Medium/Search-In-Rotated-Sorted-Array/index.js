const search = (nums, tar) => {
    let st = 0, end = nums.length - 1;

    while (st <= end) {
        const mid = Math.floor(st + (end - st) / 2);
        if (nums[mid] === tar) return mid;

        if (nums[st] <= nums[end]) {
            if (nums[st] >= tar && tar <= nums[mid]) {
                end = mid - 1;
            }
            else {
                st = mid + 1;
            }
        }
        else {
            if (nums[mid] >= tar && tar <= nums[end]) {
                st = mid + 1;
            }
            else {
                end = mid - 1;
            }
        }
    }

    return -1;
}

const arr = [4,5,6,7,0,1,2]
console.log('result: ',search(arr, 0))