function countZeroes(arr){
    if(arr[arr.length - 1] === 1 || !arr.length) return 0;
    if(arr[0] === 0) return arr.length;
    return  countZeroes(arr.slice(0, Math.floor(arr.length/2))) + countZeroes(arr.slice( Math.floor(arr.length/2)));
  };

  const result = countZeroes([1,1,1,1]);
  console.log(`result`, result);
  