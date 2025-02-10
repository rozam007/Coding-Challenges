var maxSubArray = function(nums) {
    let currSum = 0;
    let maxSum = nums[0];

    for(let num of nums){
        if(currSum < 0){
            currSum = 0;
        }
        currSum+=num;
        maxSum = Math.max(maxSum, currSum);
    }
    return maxSum;
};

maxSubArray([-2,1,-3,4,-1,2,1,-5,4])