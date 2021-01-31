class MaxBinaryHeap{
    constructor(){
        this.values = [];    
    }
    insert(val){
        let currIdx, parentIdx;
        this.values.push(val);
        currIdx = this.values.length - 1;
        parentIdx = Math.floor((currIdx - 1) / 2);
        while(parentIdx >= 0 && this.values[parentIdx] < this.values[currIdx]){
            [this.values[parentIdx], this.values[currIdx]] = [this.values[currIdx], this.values[parentIdx]];
            currIdx = parentIdx;
            parentIdx = Math.floor((currIdx - 1) / 2);
        }
        return this;
    }
}