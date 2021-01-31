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
        return curr.val;
    }
    
    unshift(val){
        let node = new Node(val);
        this.length === 0 ? this.tail = node : node.next = this.head;
        this.head = node;
        this.length++;
        return this;
    }
    
    shift(){
        if(this.length === 0) return undefined;
        let oldHead = this.head;
        this.head = oldHead.next;
        oldHead.next = null;
        this.length--;
        if(this.length === 0) this.tail = null;
        return oldHead.val;
    }
    
    get(idx){
        if(idx < 0 || idx >= this.length) return undefined;
        let curr = this.head;
        for(let i = 0; i < idx; i++){
            curr = curr.next;
        }
        return curr;
    }
    
    set(idx, val){
        let node = this.get(idx);
        if(node === undefined) return false;
        node.val = val;
        return true;
    }
    
    insert(idx, val){
        if(idx < 0 || idx > this.length) return false;
        else if(idx === 0) this.unshift(val);
        else if(idx === this.length) this.push(val);
        else{
            let node = new Node(val);
            let prev = this.get(idx - 1);
            node.next = prev.next;
            prev.next = node;
            this.length++;
        }
        return true;
    }
    
    remove(idx){
        let prev, del;
        if(idx < 0 || idx >= this.length) return undefined;
        else if(idx === 0) return this.shift();
        else if(idx === this.length - 1) return this.pop();
        else{
            prev = this.get(idx - 1);
            del = prev.next;
            prev.next = del.next;
            del.next = null;
            this.length--;
        }
        return del;
    }
    
    reverse(){
        let prev = null, curr = this.tail, next = curr;
        let temp = this.head;
        this.head = this.tail;
        this.tail = temp;
        while(curr !== null){
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        return this;
    }
    
    rotate(num){
        num = num % this.length;
        if(num === 0) return this;
        else{
            let oldHead = this.head;
            let prev;
            if(num < 0) prev = this.get(this.length + num - 1);
            else if(num > 0) prev = this.get(num - 1);
            this.head = prev.next;
            prev.next = null;
            this.tail.next = oldHead;
            this.tail = prev;
        }
        return this;
    }
};

const list = new SinglyLinkedList();
const result = list().push(10).push(15).push(20).push(25);
console.log(`result`,result)