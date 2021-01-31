function stringLengthComparator(str1,str2){
    return str1.length-str2.length
}
let baseCkeck=function(a,b){
return a-b
}
function swap(arr, ind1,ind2){
[arr[ind2], arr[ind1]] = [arr[ind1], arr[ind2]];
return arr
}
function oldestToYoungest(a,b){
return b.age - a.age
}

// function that merges two sorter arrays
function merge(arr1,arr2, comparator){
// take two arrays
if(arr1.length<=0||arr2.length<=0){return console.warn('provide valid array')}
let resArr=[], i=0,j=0,end=true;


comparator= comparator!==undefined?comparator:baseCkeck
//let resComp=comparator!==undefined?comparator(arr1[i],arr2[j]):baseCheck(arr1[i]>arr2[j])
while(end){
    if(i>=arr1.length-1&&j>=arr2.length-1){
        end=false
    }
    if(comparator(arr1[i],arr2[j])<0){
        resArr.push(arr1[i])
        i++
    }
   else if(comparator(arr1[i],arr2[j])>0){
        resArr.push(arr2[j])
        j++
    }
   else if(comparator(arr1[i],arr2[j])===0){
        resArr.push(arr1[i])
        resArr.push(arr2[j])
        i++
        j++
    }
    //end condition
    if(i===arr1.length){
        for(j;j<arr2.length;j++){
            resArr.push(arr2[j])
            end=false
        }
    }else if(j===arr2.length){
        for(i;i<arr1.length;i++){
            resArr.push(arr1[i])
        }
        end=false
    }
}
return resArr
}

function mergeSort(arr,comparator){
if(arr.length===0){return []}
function splitInChunk(num){
let res=[];
for (let i=0,j=0; i<arr.length;i+=num){
    let temp = arr.slice(i,i+num)
    //handling
    if(comparator===oldestToYoungest&&temp[1]!==undefined){
       // if(temp[0].age<temp[1].age)
        if(comparator(temp[0],temp[1])>0)
        {
            swap(temp,0,1)
        }
    }
    else if(temp[0]>temp[1]){
       swap(temp,0,1)
    }

    res.push(temp)
    j++
}
return res
}
let arrays =splitInChunk(2)

let end =true;
//looping trough chunks of data

while(end){
    let i=0,j=0;
        arrays.push(merge(arrays[i],arrays[i+1],comparator))
            arrays.shift() ;arrays.shift()
    if(arrays.length<=1){
        end=false
    }
}
return arrays[0]
}