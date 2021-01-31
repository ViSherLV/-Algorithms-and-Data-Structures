class Node{
    constructor(val){
        this.value = val;
        this.left = null;
        this.right = null;
    }
}
 
class BinarySearchTree{
    constructor(){
        this.root = null;
    }
 
    insert(v){
        const place = (root, val) => {
            if(root === null) return new Node(val);
            else if(val < root.value) root.left = place(root.left, val);
            else if(val > root.value) root.right = place(root.right, val);
            return root;
        }
        this.root = place(this.root, v);
        return this;
    }
 
    find(val){
        const search = (root, val) => {
            if(root === null) return undefined;
            else if(val < root.value) return search(root.left, val);
            else if(val > root.value) return search(root.right, val);
            else return root;
        }
        return search(this.root, val);
    }
    breadthFirstSearch() {
        let queue = new Queue();
        let arr = [], next;
        if(this.root === null) return arr;
        queue.enqueue(this.root);
        while(queue.size !== 0){
            next = queue.dequeue();
            if(next.left) queue.enqueue(next.left);
            if(next.right) queue.enqueue(next.right);
            arr.push(next.value);
        }
        return arr;
    }
}
 
// Queue
class QNode{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}
 
class Queue{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
 
    enqueue(val){
        let node = new QNode(val);
        this.size === 0 ? this.first = node : this.last.next = node;
        this.last = node;
        this.size++;
        return this;
    }
 
    dequeue(){
        if(this.size === 0) return undefined;
        let oldFirst = this.first;
        this.first = oldFirst.next;
        oldFirst.next = null;
        this.size--;
        if(this.size === 0) this.last = null;
        return oldFirst.val;
    }
}