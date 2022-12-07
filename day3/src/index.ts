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
let add = 0
function main(arr:string[]){
	let start = 0
	let a = ''
	let b = ''
	let c = ''
	for(let el = 0; el < arr.length; el++){

		if(el % 3 === 0){
			a = arr[el]
			b = arr[el + 1]
			c = arr[el + 2]
			iterate(a,b,c)
		}
	}
	console.log('------------------------------------')
	console.error('answer -> ', add)
	console.log('------------------------------------')
}

function checkMate(a:string[], d:string){
	for(const el of a){
		if(el === d){
			return el
		}
	}	
	return 0
}

function iterate(a:string, b:string, c:string){
	// loop through a b
	let count = 0

	for(let left = 0; left < a.length; left++){

			const middle = [...b]
			const right = [...c] 
			const letter = a[left].charCodeAt(0)
			
			// console.log('found it  ', a[left], middle[left], right[left])
			const first = checkMate(middle, a[left])
			if(first != 0){
				const second = checkMate(right, first)
				if(second != 0){
					console.log(left, ' second ', first, second, ' letter ', letter, a[left])
					if( letter > 96){
						const answer = letter - 96
						console.log('-------------------------')
						console.log('capital ', middle[left], a[left])
						add += answer
						return answer
					} else if (letter < 91){
						const answer = letter - 38
						console.log('----------------------v---')
						console.log('lowercase ', middle[left], a[left])
						add += answer
						return answer
					} 
					return
				}
			}

			
	}
}