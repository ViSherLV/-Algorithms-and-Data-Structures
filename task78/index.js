function constructNote(message, letters){
    let fc = {},
        find = message.length;
    for(let l of message){
        if(l in fc) fc[l]++;
        else fc[l] = 1;
    }
    
    for(let l of letters){
        if(l in fc){
            fc[l]--;
            find--;
            if(fc[l] === 0) delete fc[l];
        }
    }
    if(find === 0) return true;
    return false;
};

console.log(constructNote('aa', 'abc'))