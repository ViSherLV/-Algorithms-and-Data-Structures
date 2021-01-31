class WeightedGraph extends Graph{
    addEdge(vertex1, vertex2,weight) {
      this.adjacencyList[vertex1].push({val: vertex2, weight});
      this.adjacencyList[vertex2].push({val: vertex1, weight});
    }
    Dijkstra(start, end){
        let distances = {},
            previous = {},
            pq = new PriorityQueue(),
            vtx, distance;
        // set up
        for(let v in this.adjacencyList){
            v === start ? distances[v] = 0 : distances[v] = Infinity;
            pq.enqueue(v, distances[v]);
            previous[v] = null;
        }
        // algorithm
        while(pq.values.length !== 0){
            vtx = pq.dequeue();
            if(vtx === end) return this.makePath(previous, end);
            for(let v of this.adjacencyList[vtx]){
                distance = distances[vtx] + v.weight;
                if(distance < distances[v.val]){
                    distances[v.val] = distance;
                    previous[v.val] = vtx;
                    pq.enqueue(v.val, distances[v.val]);
                }
            }
        }
        return undefined;
    }
    
    makePath(previous, end){
        let arr = [];
        let next = end;
        while(next !== null){
            console.log(next);
            arr.push(next);
            next = previous[next];
        }
        for(let i = 0; i < Math.floor(arr.length / 2); i++){
            [arr[i], arr[arr.length - i - 1]] = [arr[arr.length - i - 1], arr[i]];
        }
        return arr;
    }
}
 
class Node{
    constructor(val,priority){
        this.val = val;
        this.priority = priority;
    }
}
 
class PriorityQueue{
    constructor(){
        this.values = [];
    }
 
    enqueue(val,priority){
        let node = new Node(val,priority);
        this.values.push(node);
        let currIdx = this.values.length - 1;
        let parentIdx = Math.floor((currIdx - 1) / 2);
        while(this.values[parentIdx] !== undefined && this.values[currIdx] !== undefined && this.values[parentIdx].priority > this.values[currIdx].priority){
            [this.values[parentIdx],this.values[currIdx]] = [this.values[currIdx],this.values[parentIdx]];
            currIdx = parentIdx;
            parentIdx = Math.floor((currIdx - 1) / 2);
        }
        return this;
    }
 
    dequeue(){
        let parentIdx = 0, leftIdx, rightIdx, minIdx, del, arr = this.values;
        if(arr.length === 0) return undefined;
        [arr[0],arr[arr.length - 1]] = [arr[arr.length - 1],arr[0]];
        del = arr.pop();
        while(minIdx !== null){
            leftIdx = 2 * parentIdx + 1;
            rightIdx = 2 * parentIdx + 2;
            minIdx = null;
            if(leftIdx < arr.length){
                if(arr[leftIdx].priority < arr[parentIdx].priority){
                    minIdx = leftIdx;
                }
            }
            if(rightIdx < arr.length){
                if((minIdx === null && arr[rightIdx].priority < arr[parentIdx].priority) || (minIdx !== null && arr[rightIdx].priority < arr[leftIdx].priority)){
                    minIdx = rightIdx;
                }
            }
            if(minIdx !== null) [arr[parentIdx],arr[minIdx]] = [arr[minIdx],arr[parentIdx]];
            parentIdx = minIdx;
        }
        this.values = arr;
        return del.val;
    }
}