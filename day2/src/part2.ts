var fs = require('fs');

fs.readFile('info.txt', 'utf8', (err:any, data:any) => {
    if (err) throw err;
    const newData = data.toString().split('\r\n');
    // const newData = data.toString().split('\n');
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

// X means you need to lose, Y means you need to end the round in a draw, 
// and Z means you need to win
function main(arr:string[]){
	let start = 0
	for(const el of arr){
		const type = el.split(' ')[0]
		const move = el.split(' ')[1]
		let temp = 0
		const l = 0
		const d = 3
		const w = 6

		switch(move){
			case 'X':
				if(type == 'A'){
					temp = l + 3;
				} else if(type == 'B'){
					temp = l + 1;
				} else if(type == 'C'){
					temp = l + 2;
				} else {
					console.error('check input ', type, move)
				}
				console.log('type -> ', move, type)
				console.log('start, temp -> ', start, temp)
				start += temp	
				break;
			case 'Y': 
				if(type == 'A'){
					temp = d + 1;
				} else if(type == 'B'){
					temp = d + 2;
				} else if(type == 'C'){
					temp = d + 3;
				} else {
					console.error('check input ', type, move)
				}
				console.log('type -> ', move, type)
				console.log('start, temp -> ', start, temp)
				start += temp
				break;
			case 'Z': 
				if(type == 'A'){
					temp = w + 2;
				} else if(type == 'B'){
					temp = w + 3;
				} else if(type == 'C'){
					temp = w + 1;
				} else {
					console.error('check input ', type, move)
				}
				console.log('type -> ', move, type)
				console.log('start, temp -> ', start, temp)
				start += temp
				break;
			default: 
				console.error('no type');
		}
	}
	console.log('answer -> ', start)
}
