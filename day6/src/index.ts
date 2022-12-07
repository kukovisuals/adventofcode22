import { Container } from './components/types';
import returnData from './components/fileInput';


// identify the 1 position where the 4 most recently received characters were all different
function find(arr: string[]){
	for(let i = 0; i < arr.length; i++){

		for(let j = i+1; j < arr.length; j++){
		 	// console.log(i,'winner -> ',arr[i], arr[j])
			if(arr[i] === arr[j]){
				return false
			}
		}
	}
	return true
}
function main(str: string[] | any){
	let count = [];
	for(let i = 0; i < str.length-1; i++){
		count.push(str[i])
		if(count.length > 13){
			if(find(count)){
				console.log('**********************************************')
				console.log(i + 1)
				console.log('**********************************************')
				return i + 1
			}
			count.shift()
		}
	}
}

const sanitatedData = returnData()

async function something(){
	const wtf = await sanitatedData
	main(wtf)
}
something()

console.log(sanitatedData)