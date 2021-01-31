function findRotatedIndex(arr, value){
    var index = -1;
    var count = 0;
    function helper(arr, start, end){
      if(start == end){
        if(arr[start] == value){
          index = count;
        }
        count++;
        return;
      }
      if(start <= end){
        let mid = Math.floor((start+end)/2);
        helper(arr, start, mid);
        helper(arr, mid+1, end);
        return;
      }
    }
    helper(arr, 0, arr.length-1);
    return index;   
  
  };

  const result = findRotatedIndex([6,7,8,9,1,2,3,4]);
  console.log(`result`, result);
  