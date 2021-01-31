function digitCount(num){
    return Math.abs(num).toString().length;
}
 
function mostDigits(nums){
    let maxCount = 0;
    for(let num of nums){
        maxCount = Math.max(maxCount, digitCount(num));
    }
    return maxCount;
}