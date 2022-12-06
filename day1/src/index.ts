var fs = require('fs');

fs.readFile('info.txt', 'utf8', function(err:any, data:any) {
    if (err) throw err;
    const newData = data.toString().split('\r\n');
    const cleanData = sanitate(newData)
    sumElements(cleanData)
});

function sanitate(data:string[]){
	let newData = []

	for(const el of data){
		if(el.length > 1){
			newData.push(+el)
		} else {
			newData.push(696969)
		}
	}
	return newData
}

function sumElements(arr:number[]){
	let largest = -Infinity;
	let start = 0
	for(const el of arr){
		if(el !== 696969){
			// sum elements until find "-"
			start += el;
		} else {
			if(start > largest){
				// save it as largest
				largest = start
			}
			start = 0
		}
		// continue and sum the next el after "-"
	}
	console.log(largest)	
}
