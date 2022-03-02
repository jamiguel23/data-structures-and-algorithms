'use strict';

class Vertex {
  constructor(value) {
    this.value = value
  }
}

class Edge {
  constructor(vertex, weight) {
    this.vertex = vertex;
    this.weight = weight;
  }
}

class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(value) {
    let vertex = new Vertex(value)
    this.adjacencyList.set(vertex, []);
    return vertex;
  }

 
  addEdge(startVertex, endVertex, weight = 0) {
    if (!this.adjacencyList.has(startVertex) || !this.adjacencyList.has(endVertex)) {
      throw new Error('__ERROR__ Invalid Vertices');
    }
    const adjancancies = this.adjacencyList.get(startVertex);
    adjancancies.push(new Edge(endVertex, weight));
  }

  getVertices() {
    return this.adjacencyList;
  }

  getNeighbors(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      throw new Error('__ERROR__ Invalid Vertex', vertex);
    }
    return [...this.adjacencyList.get(vertex)];
  }

  size() {
    return this.adjacencyList.size;
  }


  bfs(startNode) {
    const queue = [];
    const visitedVertices = new Set();

    queue.push(startNode);
    visitedVertices.add(startNode);

    while (queue.length) {
      const currentNode = queue.shift();

      const neighbors = this.getNeighbors(currentNode);

      for (let neighbor of neighbors) {
        const neighborNode = neighbor.vertex;

        if (visitedVertices.has(neighborNode)) {
          continue;
        } else {
          visitedVertices.add(neighborNode)
        }
        queue.push(neighborNode);
      }

    }
    console.log('visitedNodes', visitedNodes);
    return;
  }

  dfs(startNode) {
    let startingVertex = this.getNeighbors(startNode)
    let stack = startingVertex
    let visitedNodes = new Set();
    let results = [];
    visitedNodes.add(startNode);
    let popped = stack.shift()
    console.log('popped:', popped);
    console.log('popped:', this.getNeighbors(popped.vertex));
    if(stack[0].vertex) console.log('stack[0].vertex',stack[0].vertex)
    
    while (stack) {
      // console.log('stack.vertex:', stack[0].vertex);
      // stack = stack.vertex
    }

    /*
      Push the root node into the stack
      Start a while loop while the stack is not empty
      Peek at the top node in the stack
      If the top node has unvisited children, mark the top node as visited, and then Push any unvisited children back into the stack.
      If the top node does not have any unvisited children, Pop that node off the stack
      repeat until the stack is empty.
    */
  }


}
const graph = new Graph();

// adding 'nodes/vertex'
const a = graph.addVertex('A');
const b = graph.addVertex('B');
const c = graph.addVertex('C');

graph.addEdge(a, c);
graph.addEdge(b, a);
graph.addEdge(c, b);

// console.log(graph.getNeighbors(b));
console.log(graph.size())
