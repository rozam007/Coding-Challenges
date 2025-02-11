/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    for(let i=digits.length-1; i>=0; i--){
        if(digits[i] === 9){
            digits[i] = 0;
        }
        else{
            digits[i]+=1;
            return digits;
        }
    }

    const newArr = [1];

    for(let i=0; i<digits.length; i++){
        newArr[i+1] = digits[i]
    }

    return newArr;
};