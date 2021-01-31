class Graph{
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vtx){
        if(!this.adjacencyList[vtx]) this.adjacencyList[vtx] = [];
    }
 
    addEdge(vtx1, vtx2){
        if(this.adjacencyList[vtx1] && this.adjacencyList[vtx2] &&
           !this.adjacencyList[vtx1].includes(vtx2) && !this.adjacencyList[vtx2].includes(vtx1)){
               this.adjacencyList[vtx1].push(vtx2);
               this.adjacencyList[vtx2].push(vtx1);
           }
    }
}
