//return the number at a specific decimal position
function getDigit(num, i) {
    let newStr = num.toString(); 
    if (i >= newStr.length ) return 0;
    return parseInt(newStr[newStr.length-i-1]);  
  }
   
  //count the number of digits
  function digitCount(num) {
    let newStr = num.toString(); 
    return newStr.length;
  }
   
  //return the max number of digital digits in an array.
  function mostDigits(nums) {
    let maxNum = 0;
    let temp=0;
    // good luck!
    nums.forEach((item, index) => {
      temp = digitCount(item);
      maxNum = (temp > maxNum) ? temp : maxNum 
    })
    return maxNum;
  }
   
  function radixSort(nums) {
    //to check how often should we loop!
    let numberOfRounds = mostDigits(nums);
    for(let j=0; j<=numberOfRounds; j++) {
    //Creating 10 arrays inside 10 Arrays as a table to place numbers
    let digitBuckets = Array.from({length: 10}, () => []);
    //loop through each element of the array
      for(let i=0; i<nums.length; i++) {
        //here we assign the digit returned to the correct index in the digitBuckets.
        digitBuckets[getDigit(nums[i], j)].push(nums[i]);
      }
    //Here is where we copy the values of the digitBuckets using (...).
    //(...) = destructuring assignment -> destructuring because remove the parentheses
    //assignment because the values are copied
    nums = [].concat(...digitBuckets);
    }
    return nums
  }