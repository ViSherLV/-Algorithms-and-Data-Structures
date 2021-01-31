function sortedFrequency(arr, num){
    let left = 0;
    let right = arr.length - 1;
    
    while(left < right) {
        if(arr[left] < num) left++;
        if(arr[right] > num) right--;
        if(arr[left] === num && arr[right] === num) return (right - left) + 1; 
    }
    
    return -1
};

const a = sortedFrequency([1,1,2,2,2,2,3],2);
const b = sortedFrequency([1,1,2,2,2,2,3],4);

console.log(`a: ${a} b: ${b}`);