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
        return this;
    }
    
    pop(){
        if(this.length === 0) return undefined;
        let prev = null, curr = this.head;
        while(curr.next !== null){
            prev = curr;
            curr = curr.next;
        }
        this.tail = prev;
        this.length--;
        this.length === 0 ? this.head = null : prev.next = null;
        return curr;
    }
};

const SinglyLinkedList = new SinglyLinkedList();
const result = SinglyLinkedList.push(5);
console.log(`result`, result);
