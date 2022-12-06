var fs = require('fs');

fs.readFile('info.txt', 'utf8', (err:any, data:any) => {
    if (err) throw err;
    const newData = data.toString().split('\n');
	const cleanData = sanitate(newData)
	main(cleanData)
	console.log(cleanData)
});

function sanitate(data:string[]){
	let newData = []
	for(const el of data){
		newData.push(el)
	}
	return newData
}

function main(arr:string[]){
	let start = 0
	for(const el of arr){
		const type = el.split(' ')[0]
		const move = el.split(' ')[1]
		let temp = 0
		switch(type){
			case 'A': 
				temp = a(move) + 1;
				start += temp
				// console.log('type -> ', type)	
				// console.log('move -> ', move)	
				// console.log('start -> ', start, temp, a(move) )	
				break;
			case 'B': 
				temp = b(move) + 2;
				start += temp
				break;
			case 'C': 
				temp = c(move) + 3;
				start += temp
				break;
			default: 
				console.error('no type');
		}
	}
	console.log('type -> ', start)
}
