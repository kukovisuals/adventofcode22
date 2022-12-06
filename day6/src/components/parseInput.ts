
const fs = require('fs');

fs.readFile('parser.txt', 'utf8', (err:any, data:any) => {
    if (err) throw err;
    const newData = data.toString().split('\r\n');
	
	// parser(newData)
});

function parser(str: string[]){

	console.log(str)
	let count = 0
	
	let newString = ''
	for(let i = 0; i<str.length; i++){

		console.log(str[i].split(' '))
		if(count < 3){
			newString += ''
		}
		count++
	}
}