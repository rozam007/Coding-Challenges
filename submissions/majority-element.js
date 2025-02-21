/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const mappings = {}
    for(let num of nums){
        mappings[num] = (mappings[num] || 0) + 1;
    }

    for(let key in mappings){
        if(mappings[key] > nums.length/2){
            return Number(key);
        }
    }
};