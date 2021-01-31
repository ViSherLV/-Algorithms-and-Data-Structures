function merge(arr1, arr2, comparator){
    let i = 0;
    let j = 0;
    let sortedArr = [];
    if(typeof comparator !== 'function'){
        comparator = (a, b) => a - b;
    }

    while(i < arr1.length && j < arr2.length){
        if(comparator(arr1[i], arr2[j]) <= 0){
            sortedArr.push(arr1[i]);
            i++;
        } else{
            sortedArr.push(arr2[j]);
            j++;
        }
    }
    while(i < arr1.length){
        sortedArr.push(arr1[i]);
        i++;
    }

    while(j < arr2.length){
        sortedArr.push(arr2[j]);
        j++;
    }
    return sortedArr;

}

const result = merge([1,4,5],[2,4,6,8]);
console.log(`result ${result}`);
