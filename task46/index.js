class Node{
    constructor(val){
        this.val = val
        this.next = null;      
    }
}
 
class SinglyLinkedList{
    constructor(val){
        this.val = val
        this.next = null;  
        this.length = 0;    
    }
    push(val){
        var newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
            this.length++;
        
        return this;
    }
    remove(index){
 
        if(index > this.length) {
            return undefined;
        }
 
        if(index === 0) {
            let temp = this.head;
            this.head = this.head.next;
            this.length--;
            return temp;
        } 
 
        let temp = this.head;
 
        for(let i=1; i<=index-1; i++) {
            temp = temp.next;
        }
 
        let returnValue = temp.next;
        temp.next = temp.next.next;
        this.length--;
 
        return returnValue;
       
    }
};

const snglyLinkedList = new SinglyLinkedList;

const rsult = snglyLinkedList.push(5).push(10).push(15).push(20);
console.log(rsult);
