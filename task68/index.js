class MaxBinaryHeap{
    constructor(){
        this.values = [];    
    }
    insert(val){
        //add the value
        this.values.push(val);
        let valIndex = this.values.length-1;
        let parentIndex = Math.floor((valIndex-1)/2); 
        //check if we need to bubble up (re-order heap)
        while( this.values[parentIndex] < this.values[valIndex]) {
            let temp = this.values[parentIndex];
            this.values[parentIndex] = this.values[valIndex];
            this.values[valIndex] = temp;
            //update indexes
            valIndex = parentIndex;
            parentIndex = Math.floor((valIndex-1)/2);
        }                     
    }
    extractMax() {
        //removing the max value
        this.values.shift();
        let toBeginValue = this.values.pop();
        this.values.unshift(toBeginValue);
 
        //sinkDown
        let valIndex = 0;
        let childIndexL = Math.floor(2*(valIndex)+1);
        let childIndexR = Math.floor(2*(valIndex)+2); 
        //check if we need to bubble up (re-order heap)
        while( true ) {
 
            if( (this.values[childIndexL] > this.values[valIndex]) && (this.values[childIndexL] >= this.values[childIndexR]) ) {
                //swapping
                let temp = this.values[childIndexL];
                this.values[childIndexL] = this.values[valIndex];
                this.values[valIndex] = temp;
                //updating
                valIndex = childIndexL;
                childIndexL = Math.floor(2*(valIndex)+1);
                childIndexR = Math.floor(2*(valIndex)+2);
            } else if (this.values[childIndexR] > this.values[valIndex]) {
                //swapping
                let temp = this.values[childIndexR];
                this.values[childIndexR] = this.values[valIndex];
                this.values[valIndex] = temp;
                //updating
                valIndex = childIndexR;
                childIndexL = Math.floor(2*(valIndex)+1);
                childIndexR = Math.floor(2*(valIndex)+2);
             } else {
                break;
            }
 
        }  
 
    }
 
}