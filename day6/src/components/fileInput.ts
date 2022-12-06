const fs = require('fs');

function read(){
	return new Promise<string[]> ((resolve:any) => {

		fs.readFile('info.txt', 'utf8', (err:any, data:any) => {
			if (err) throw err;
			const newData = data.toString().split('\r\n');
			const cleanData = sanitate(newData)
			//console.log(cleanData)
			resolve(cleanData)
		});
	}) 
}

async function returnData(): Promise<string[]>{
	console.log('calling')
	const result = await read()
	console.log(result)
    return result
}

function sanitate(data:string[]){
	let newData = []
	for(const el of data){
		newData.push(el.split(/[a-z]/).join(''))
	}
	return newData
}


export default returnData;
