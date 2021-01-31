function findPair(array, n) {
    const hash = {};
    for (let index = 0; index < array.length; index++) {
        if (hash[array[index]]) {
            return true;
        }
        hash[array[index] - n] = 1;
        hash[array[index] + n] = 1;
    }
    return false
}