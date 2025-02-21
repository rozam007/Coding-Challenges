/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let maxReach = 0;
    let lastIndex = nums.length - 1;
    
    for (let i = 0; i < nums.length; i++) {
        if (i > maxReach) return false; 
        maxReach = Math.max(maxReach, i + nums[i]);
        if (maxReach >= lastIndex) return true; 
    }
    
    return false;
};