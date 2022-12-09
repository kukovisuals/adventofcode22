import returnData from './components/fileInput';

interface GraphType{
	[index:string]: number[]
}

class Graph{
	numberOfNodes: number;
	visibleTress: number;
	adjacentList: GraphType;
	constructor(){
	  this.numberOfNodes = 0;
	  this.visibleTress = 0;
	  this.adjacentList = {};
	}
	addVertex(node:string){
	  this.adjacentList[node] = [];
	  this.numberOfNodes++;
	}
	visibles(num:number){
		this.visibleTress = num;
	}
	checkAvailable(node:string){
		
	}
	addEdge(node1:string, node2:number){
	  this.adjacentList[node1].push(node2)
	}
	showConnections(){
	  for(const values in this.adjacentList){
		console.log(values + '--->' + this.adjacentList[values])
	  }
	}
}
const g = new Graph();

function east(row:string[], tree:string, index: number){
	// Get elements from left side
	let flip = false
	for(let r = 0; r < row.length; r++){
		console.log(row, tree, index)
	}
	g.visibleTress++
}

function main(str: string[] | any){
	const size = ( (str.length-1) * 2) + ((str[0].length-1) * 2)
	g.visibles(size)

	for(let i = 0; i<str.length-1; i++){
		for(let j = 0; j < str.length-1; j++){
			east(str[i+1], str[i + 1][j + 1], j + 1)
		}
	}
	console.log(str,g)
}

returnData()
	.then((d:string[]) => main(d))
