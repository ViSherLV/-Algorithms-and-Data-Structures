function findAllDuplicates(arr){
    let fc = {},
        dupl = [];
    for(let d of arr){
        if(d in fc) dupl.push(d);
        else fc[d] = 1;
    }
    return dupl;
}


const result = findAllDuplicates([4,3,2,1,0]);
console.log(`result`, result)