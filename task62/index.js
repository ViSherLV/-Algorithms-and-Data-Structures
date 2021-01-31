class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinarySearchTree {
    constructor() {
      this.root = null;
    }
    insert(value) {
      if (this.root === null) {
        this.root = new Node(value);
        return this;
      } else {
        var current = this.root;
        while (true) {
          if (value < current.value) {
            if (current.left === null) {
              current.left = new Node(value);
              return this;
            } else {
              current = current.left;
            }
          } else if (value > current.value) {
            if (current.right === null) {
              current.right = new Node(value);
              return this;
            } else {
              current = current.right;
            }
          }
        }
      }
    }

depthFirstSearchPreOrder() {
    if (this.root === null)  return [];
    let array = [this.root];
    //for looping
    let temp = this.root;
    //for the right side
    let j=0;


    for(let i=0; i<2; i++) {
      //getting the values from the left side
      while(true) {
        if(temp.left !== null) {
          array.push(temp.left);
          temp = temp.left;
        } else if (i===0) {
          //here we set the seetings to do the loop from the second time;
          temp = this.root.right;
          break;
        } else {
          break;
        }
      }
       
      
      if(i === 0) {
        //getting the values from the right side
        for(let i=array.length-1; i>=j; i--) {
          if(array[i].right !== null) {
            array.push(array[i].right);
          }
        }
      } else {
        //getting the values from the right side
        let temp = null;
        for(let i=array.length-1; i>=j; i--) {
          temp = array[i].right;
          while(temp !== null) {
            array.push(temp);
            temp = temp.right;
          }
        }
      }
    //updating the right side
    j = array.length-1;
    }

    //returning only the values
    array.forEach((item, index) => {
      array[index] = item.value;
    })


    return array;             
}
DFSPreOrder() {
  let data = [];
  function traversy(node) {
    data.push(node.value);
    if(node.left) traversy(node.left);
    if(node.right) traversy(node.right);
  }
  traversy(this.root);
  return data;
}

DFSPostOrder() {
  let data = [];
  function traversy(node) {
    if(node.left) traversy(node.left);
    if(node.right) traversy(node.right);
    data.push(node.value);
  }
  traversy(this.root);
  return data;
}

DFSInOrder() {
  let data = [];
  function traversy(node) {

    if(node.left) traversy(node.left);
    data.push(node.value);
    if(node.right) traversy(node.right);      
  }
  traversy(this.root);
  return data;
}
}