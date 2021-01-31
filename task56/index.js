class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
 
class Stack{
    constructor(val){
        this.first = null;
        this.last = null;  
        this.size = 0;
    }
    push(val){
        let newNode = new Node(val);
        if(!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            let temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        return ++this.size;
    }
}