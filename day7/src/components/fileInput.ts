const fs = require('fs');
type Command = {
  type: 'command'
  command: 'cd' | 'ls'
  argument: string | null
}

type File = {
  type: 'file'
  name: string
  size: number
}
type Directory = {
  type: 'directory'
  name: string
  size: number
  children: FileSystemNode[]
}
type FileSystemNode = Directory | File

function read(){
	return new Promise<string[]> ((resolve:any) => {

		fs.readFile('info.txt', 'utf8', (err:any, data:any) => {
			if (err) throw err;
			const newData: (Command | FileSystemNode)[]  = data.toString();
			//console.log(cleanData)
			resolve(newData)
		});
	}) 
}

async function returnData(): Promise<string[]>{
	console.log('calling')
	const result = await read()
	//console.log(result)
    return result
}



export default returnData;
