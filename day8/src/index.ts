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

function east(row:string[], tree:number, index: number){
	let found = true
	//console.log(row, 'tree ', tree, 'index ', index)
	for(let r = 0; r < row.length; r++){
		// get the left side
		if( r === index ) return found
		if(+row[r] >= tree){
			found = false
			return found
		}
	}
	// g.visibleTress++
}
function west(row:string[], tree:number, index: number){
	let found = true
	//console.log(row, 'tree ', tree, 'index ', index)
	for(let r = index + 1; r < row.length; r++){
		// get the left side
		if(+row[r] >= tree){
			found = false
			return found
		}
	}
	return found
}
function north(arr:string[], tree:number, row: number, col:number){
	let found = true
	for(let r = row; r > 0; r--){
		console.log(arr, 'tree ', tree, 'up ', +arr[1][1], 'col', col, 'index', row, r)
		// get the left side
		if(+arr[r][col] >= tree){
			found = false
			return found
		}
	}
	return found
}
function main(str: string[] | any){
	for(let row = 0; row<str.length-1; row++){
		for(let col = 0; col < str.length-1; col++){
			const e = east(str[row+1], +str[row + 1][col + 1], col + 1)
			const w = west(str[row+1], +str[row + 1][col + 1], col + 1)
		}
			const n = north(str, +str[row + 1][col], row - 1, col)
			console.log(n)
	}
	console.log(str,g)
}

returnData()
	.then((d:string[]) => main(d))
