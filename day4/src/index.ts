var fs = require('fs');

fs.readFile('info.txt', 'utf8', (err:any, data:any) => {
    if (err) throw err;
    const newData = data.toString().split('\r\n');
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
function main(arr:string[]){
	let count = 0
	for(const el of arr){
		
		let l1 = Number(el.split(',')[0].split('-')[0])
		let l2 = Number(el.split(',')[1].split('-')[0])
		let r1 = Number(el.split(',')[0].split('-')[1])
		let r2 = Number(el.split(',')[1].split('-')[1])
		
		console.log('left -> ', l1, l2, el, ' right -> ', r1, r2)
		
		const checkA = (l1 <= l2 && r1 >= r2) 
		const checkB = (l2 <= l1 && r2 >= r1)
	
		if( checkA || checkB){
			count++
			console.log('count -> ', count)
		}
	}
	console.log('Final count -> ', count)
}
