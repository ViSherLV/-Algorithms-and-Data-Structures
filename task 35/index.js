class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}
 
class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    
    push(val){
        let node = new Node(val);
        this.length === 0 ? this.head = node : this.tail.next = node;
        this.tail = node;
        this.length++;
    }
}