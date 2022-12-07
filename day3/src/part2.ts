var fs = require('fs');

fs.readFile('info.txt', 'utf8', (err:any, data:any) => {
    if (err) throw err;
    const newData = data.toString().split('\n');
	const cleanData = sanitate(newData)
	main(cleanData)
	// console.log(cleanData)
});

function sanitate(data:string[]){
	let newData = []
	for(const el of data){
		newData.push(el)
	}
	return newData
}


// 1 for Rock, 2 for Paper, and 3 for Scissors
let add = 0
function main(arr:string[]){
	let start = 0
	for(const el of arr){
		const l = el.length
		const half = Math.floor(l/2)
		const a = el.slice(0,half)
		const b = el.slice(half, l)
		iterate(a, b)
		console.log('a ', a, ' b ', b)
	}
	console.log('type -> ', add)
}

function iterate(a:string, b:string){
	// loop through a b
	for(const left of a){
		for(const right of b){
			const letter = right.charCodeAt(0)
			if(right === left && letter > 96){
				const answer = letter - 96
				// console.log(right, answer)
				add += answer
				return answer
			} else if (right === left && letter < 91){
				const answer = letter - 38
				//console.log(right, answer)
				add += answer
				return answer
			} 
		}
	}
	console.error('ooops ', a , ' b ', b)
}