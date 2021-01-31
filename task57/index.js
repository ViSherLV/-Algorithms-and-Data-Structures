class Node{
    constructor(val){
        this.value = val;
        this.next = null;
    }
}
 
class Stack{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
 
    push(val){
        let node = new Node(val);
        this.size === 0 ? this.last = node : node.next = this.first;
        this.first = node;
        this.size++;
        return this.size;
    }
 
    pop(){
        let oldFirst = this.first;
        if(this.size === 0) return undefined;
        this.first = oldFirst.next;
        oldFirst.next = null;
        this.size--;
        if(this.size === 0) this.last = null;
        return oldFirst.value;
    }
};