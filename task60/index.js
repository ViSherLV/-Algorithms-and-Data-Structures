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
}