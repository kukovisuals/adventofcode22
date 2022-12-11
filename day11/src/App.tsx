import React from 'react';
import './App.css';
//-----------------------------------------------------------
// let initMonkey = {
//   '0': {item:[79, 98], div:23, count:0, test:[]},
//   '1': {item:[54, 65, 75, 74], div:19, count:0, test:[]},
//   '2': {item:[79, 60, 97], div:13, count:0,  test:[]},
//   '3': {item:[74], div:17, count:0, test:[]}
// }
let initMonkey = {
  '0': {item:[66, 59,64,51], div:2, count:0, test:[]},
  '1': {item:[57,61], div:7, count:0, test:[]},
  '2': {item:[86,93,80,70,71,81,56], div:11, count:0,  test:[]},
  '3': {item:[94], div:19, count:0, test:[]},
  '4': {item:[71,91,64], div:3, count:0, test:[]},
  '5': {item:[58,81,92,75,56], div:5, count:0, test:[]},
  '6': {item:[82,98,77,94,86,81], div:17, count:0, test:[]},
  '7': {item:[54,95,70,93,88,93,63,50], div:13, count:0, test:[]}
}
//----------------------------------------------------------
function App() {
  const [fileContent, setFileContent] = React.useState<string[]>([]);
  const [monkey, setMonkey] = React.useState<any>()
  //-----------------------------------------------------------
  React.useEffect(() => {
    fetchData()
    .then((d:string[]) => setFileContent(d))
  }, []);
  //-----------------------------------------------------------
  React.useEffect(() => {
    let i = 0;
    let monkeyObj
    while(i < 160){
      monkeyObj = callMonkeys(i % 8);
      i++
    }
    setMonkey(monkeyObj)
  }, []);
  console.log(monkey)

  return (
    <div>
      <div className='wrapper'>
        <div className='container'>
          <div className='list-1'>
          {fileContent && 
            fileContent.map((d:string, i:number) => 
            <Setup key={d+'-'+i} index={i} data={d}/>
          )}
          </div>
          <div className='list-2'>
            Monkey in the middle
            <MonkeyText/>
          </div>
        </div>
      </div>
    </div>
  );
}
//-----------------------------------------------------------
function MonkeyText(){
  const elfA = {
    transform: `translate(50px,50px)`
  }
  const elfB = {
    transform: `translate(250px,50px)`
  }
  const elfC = {
    transform: `translate(50px,250px)`
  }
  const elfD = {
    transform: `translate(250px,250px)`
  }
  return(
    <div className='container2'>
      <div className='list-2a' style={elfA}>
        0
      </div>
      <div className='list-2a' style={elfB}>
        1
      </div>
      <div className='list-2a' style={elfC}>
        2
      </div>
      <div className='list-2a' style={elfD}>
        3
      </div>

      <div className='board'>
        <div className='container3'>
          <div>
            Monkey 0
            <ul>
              <li> 13</li>
              <li> 13</li>
              <li> 13</li>
              <li> 13</li>
              <li> 13</li>
              <li> 13</li>
              <li> 13</li>
              <li> 13</li>
              <li> 13</li>
              <li> 13</li>
              <li> 13</li>
              <li> 13</li>
              <li> 13</li>
              <li> 13</li>
              <li> 13</li>
              <li> 13</li>
              <li> 13</li>
            </ul>
          </div>
          <div>
            Monkey 1
          </div>
          <div>
            Monkey 2
          </div>
          <div>
            Monkey 3
          </div>
        </div>
      </div>
      
    </div>
  )
}
//-----------------------------------------------------------
function callMonkeys( i:number){
  let data = Object.values(initMonkey);
  let newMonkey = initMonkey
  const type = String(i);
  let newData;
  let stackMain = data[i].item
  let stack;

  while(stackMain.length > 0){    
    switch(type){
      case '0':
        newMonkey['0'].count++;
        stack = newMonkey['0'].item.shift();
        if(stack){
          newData = Math.floor((stack * 3) / 3);
          newData % newMonkey['0'].div == 0 ? 
            newMonkey['1'].item.push(newData) : 
            newMonkey['4'].item.push(newData) 
        }
        break;
      case '1':
        newMonkey['1'].count++;
        stack = newMonkey['1'].item.shift();
        if(stack){
          newData = Math.floor((stack * 19) / 3);
          newData % newMonkey['1'].div == 0 ? 
            newMonkey['3'].item.push(newData) : 
            newMonkey['5'].item.push(newData) 
        }
        break;
      case '2':
        newMonkey['2'].count++;
        stack = newMonkey['2'].item.shift();
        if(stack){
          newData = Math.floor((stack + 2) / 3);
          newData % newMonkey['2'].div == 0 ? 
            newMonkey['4'].item.push(newData) : 
            newMonkey['0'].item.push(newData) 
        }
        break;
      case '3':
        newMonkey['3'].count++;
        stack = newMonkey['3'].item.shift();
        if(stack){
          newData = Math.floor((stack * stack) / 3);
          newData % newMonkey['3'].div == 0 ? 
            newMonkey['7'].item.push(newData) : 
            newMonkey['6'].item.push(newData) 
        }
        break;
      case '4':
        newMonkey['4'].count++;
        stack = newMonkey['4'].item.shift();
        if(stack){
          newData = Math.floor((stack + 8) / 3);
          newData % newMonkey['4'].div == 0 ? 
            newMonkey['5'].item.push(newData) : 
            newMonkey['1'].item.push(newData) 
        }
        break;
      case '5':
        newMonkey['5'].count++;
        stack = newMonkey['5'].item.shift();
        if(stack){
          newData = Math.floor((stack + 6) / 3);
          newData % newMonkey['5'].div == 0 ? 
            newMonkey['3'].item.push(newData) : 
            newMonkey['6'].item.push(newData) 
        }
        break;
      case '6':
        newMonkey['6'].count++;
        stack = newMonkey['6'].item.shift();
        if(stack){
          newData = Math.floor((stack + 7) / 3);
          newData % newMonkey['6'].div == 0 ? 
            newMonkey['7'].item.push(newData) : 
            newMonkey['2'].item.push(newData) 
        }
        break;
      case '7':
        newMonkey['7'].count++;
        stack = newMonkey['7'].item.shift();
        if(stack){
          newData = Math.floor((stack + 4) / 3);
          newData % newMonkey['7'].div == 0 ? 
            newMonkey['2'].item.push(newData) : 
            newMonkey['0'].item.push(newData) 
        }
        break;
    }
  }
  // initMonkey = newMonkey;
  // console.log('monkey 1 -> ',newMonkey)
  return newMonkey
}
//-----------------------------------------------------------
type SetupT = {
  data: string;
  index: number
}
function Setup(props:SetupT){
  const index = props.index;
  const newStyle = index % 7 == 0 ? 'monkey' : ''
  return(
    <div className={`styles ${newStyle}`}>
      <p>{props.data}</p>
    </div>
  )
}
//-----------------------------------------------------------
async function fetchData(){
  let arr = [];
  const resp = await fetch('http://localhost:3000/file.txt')
  const final = await resp.text();
  const newTxt = final.split('\n')
  // console.log(newTxt) 
  return newTxt;
}

export default App;

/*
while(stackMain.length > 0){    
    switch(type){
      case '0':
        newMonkey['0'].count++;
        stack = newMonkey['0'].item.shift();
        if(stack){
          newData = Math.floor((stack * 19) / 3);
          console.log('monkey 0-> ',newData)
          newData % 23 == 0 ? 
            newMonkey['2'].item.push(newData) : 
            newMonkey['3'].item.push(newData) 
        }
        break;
      case '1':
        newMonkey['1'].count++;
        stack = newMonkey['1'].item.shift();
        if(stack){
          newData = Math.floor((stack + 6) / 3);
          newData % 19 == 0 ? 
            newMonkey['2'].item.push(newData) : 
            newMonkey['0'].item.push(newData) 
        }
        break;
      case '2':
        newMonkey['2'].count++;
        stack = newMonkey['2'].item.shift();
        if(stack){
          newData = Math.floor((stack * stack) / 3);
          newData % 13 == 0 ? 
            newMonkey['1'].item.push(newData) : 
            newMonkey['3'].item.push(newData) 
        }
        break;
      case '3':
        newMonkey['3'].count++;
        stack = newMonkey['3'].item.shift();
        if(stack){
          newData = Math.floor((stack + 3) / 3);
          newData % 17 == 0 ? 
            newMonkey['0'].item.push(newData) : 
            newMonkey['1'].item.push(newData) 
        }
        break;
    }
  }
*/