var fs = require('fs');

fs.readFile('info.txt', 'utf8', function(err:any, data:any) {
    if (err) throw err;
    const newData = data.toString().split('\r\n');
    const cleanData = sanitate(newData)
    sumElements2(cleanData)
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

function sumElements2(arr:number[]){
	let largest = -Infinity;
	let start = 0
	let calories = []
	for(const el of arr){
		if(el !== 696969){
			// sum elements until find "-"
			start += el;
		} else {
			if(start > largest){
				// save it as largest
				largest = start
			}
			calories.push(start)
			start = 0
		}

		// continue and sum the next el after "-"
	}
	const newCalories = calories
		.sort((a, b) => b - a)
		.slice(0,3)
		.reduce<number>((a, b) => a + b, 0)

	const sum = newCalories//
	console.log(sum)
	console.log(largest)	
}
