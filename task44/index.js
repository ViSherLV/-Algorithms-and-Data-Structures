function bubbleSort(arr, comparator){
    if(typeof comparator !== 'function'){
        comparator = (v1, v2) =>{
            return v1-v2;
        }
    }
    let end = arr.length;
    let swap = true;
    while(end > 0 && swap){
        swap = false;
        for(let i = 0; i<end - 1; i++){
          if(comparator(arr[i],arr[i+1])>0){
              let tmp = arr[i+1];
              arr[i+1] = arr[i];
              arr[i] = tmp;
              swap = true;
          }
        }
      end --;
    }
    return arr;
};

const result = bubbleSort([1,2,3]);
console.log(`result`, result)