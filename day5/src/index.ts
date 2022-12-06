var fs = require('fs');

interface Container {
	[index:string]: string[]  
}

/*
const containers: Container = {
	'1': ['[Z]','[N]'],
	'2': ['[M]','[C]','[D]'],
	'3': ['[P]'],
}
*/
let containers:Container = {
	'1': ['[M]','[J]','[C]','[B]','[F]','[R]','[L]','[H]'],
	'2': ['[Z]','[C]','[D]'],
	'3': ['[H]','[J]','[F]','[C]','[N]','[G]','[W]'],
	'4': ['[P]','[J]','[D]','[M]','[T]','[S]','[B]'],
	'5': ['[N]','[C]','[D]','[R]','[J]'],
	'6': ['[W]','[L]','[D]','[Q]','[P]','[J]','[G]','[Z]'],
	'7': ['[P]','[Z]','[T]','[F]','[R]','[H]'],
	'8': ['[L]','[V]','[M]','[G]'],
	'9': ['[C]','[B]','[G]','[P]','[F]','[Q]','[R]','[J]'],
}


fs.readFile('info.txt', 'utf8', (err:any, data:any) => {
    if (err) throw err;
    const newData = data.toString().split('\r\n');
	const cleanData = sanitate(newData)
	//console.log(cleanData)
	main(cleanData)
});

function sanitate(data:string[]){
	let newData = []
	for(const el of data){
		newData.push(el.split(/[a-z]/).join(''))
	}
	return newData
}
function main(str: string[]){
	let count = 0
	for(const el of str){
		const wagon: string[] =  el.split(' ')
		
		let iterate = 0
		let goingTo: string = '1';
		let selectContainer: string = '1';

		for(let i = 0; i < wagon.length; i++){
			iterate = +wagon[1]
			selectContainer = wagon[3]
			goingTo = wagon[5]	
		}

		let pops = iterate
		let movedContainer:any = []
		while(pops > 0 ){
			const stack = containers[selectContainer]?.pop()
			movedContainer.push(stack)
			pops--	
		}
		const containerAdded = containers[goingTo]?.concat(movedContainer);
		containers[goingTo] = containerAdded; 
	}

	let finalContainer = []
	for(const key of Object.keys(containers)){
		const stack = containers[key].pop();
		const filterStack = stack?.replace(/\W/g, '')

		finalContainer.push(filterStack)
	}
	console.log('Final count -> ',  containers)
	
	console.log('**********************************************')
	console.log('**********************************************')
	console.log(finalContainer.join(''))
	console.log('**********************************************')
	console.log('**********************************************')
}

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