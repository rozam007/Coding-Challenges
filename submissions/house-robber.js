/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if(nums.length < 2) return nums[0];
    const looted = [];
    looted[0]=nums[0];
    looted[1]=Math.max(nums[0], nums[1]);

    for(let i=2; i<nums.length; i++){
        looted[i] = Math.max(looted[i-2]+nums[i], looted[i-1])
    }

    return looted[nums.length - 1]
};