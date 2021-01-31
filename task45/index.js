function selectionSort(arr, comparator) {
    if (typeof comparator !== 'function') {
        comparator = (a, b) => {
            if (a > b) {return 1}
            else if (a < b) {return -1}
            return 0;
        }
    }
        for(let i=0; i < arr.length; i++) {
            let lowest = i
            for(let j=i+1; j < arr.length; j++) {
                if(comparator(arr[lowest], arr[j]) > 0) {
                    lowest = j
                }
            }
            if (lowest !== i) {
                let temp = arr[i];
                arr[i] = arr[lowest];
                arr[lowest] = temp;
            }
        }
        return arr;
    };

const result = selectionSort([1,2,3]);
console.log('result:', result);
