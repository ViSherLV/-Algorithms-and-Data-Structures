class Graph{
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        this.adjacencyList[vertex] = [];
    }
    addEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }
    removeEdge(vtx1, vtx2){
        if(this.adjacencyList[vtx1] && this.adjacencyList[vtx2] &&
           this.adjacencyList[vtx1].includes(vtx2) && this.adjacencyList[vtx2].includes(vtx1)){
               this.adjacencyList[vtx1] = this.adjacencyList[vtx1].filter(vtx => vtx !== vtx2);
               this.adjacencyList[vtx2] = this.adjacencyList[vtx2].filter(vtx => vtx !== vtx1);
           }
    }
    
    removeVertex(vtx){
        if(this.adjacencyList[vtx]){
            for(let v of this.adjacencyList[vtx]){
                this.removeEdge(v, vtx);
            }
            delete this.adjacencyList[vtx];
        }
    }
}