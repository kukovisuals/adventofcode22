import React from 'react';
import './App.css';
//-----------------------------------------------------------
const initMonkey = {
  '0': {item:[79, 98], div:23, worry:0, test:[]},
  '1': {item:[54, 65, 75, 74], div:19, worry:0, test:[]},
  '2': {item:[79, 60, 97], div:13, worry:0, test:[]},
  '3': {item:[74], div:17, worry:0, test:[]}
}
//----------------------------------------------------------
function App() {
  const [fileContent, setFileContent] = React.useState<string[]>([]);
  const [monkey, setMonkey] = React.useState(initMonkey)
  //-----------------------------------------------------------
  React.useEffect(() => {
    fetchData()
    .then((d:string[]) => setFileContent(d))
  }, []);
  //-----------------------------------------------------------
  React.useEffect(() => {
    Object.values(initMonkey).map((d:any,i:number) => callMonkeys(d, i))
  }, []);
  //-----------------------------------------------------------
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
          </div>
        </div>
      </div>
    </div>
  );
}
//-----------------------------------------------------------
function callMonkeys(data:any, i:number){
  const type = String(i);
  // console.log(type)
  let newData = data.div;
  let tose;
  console.log(data.item)
  const stack = data.item.shift();
  switch(type){
    case '0':
      newData = stack * 19;
      tose = newData % 23 == 0 ? 
        initMonkey['2'].item.push(newData) : 
        initMonkey['3'].item.push(newData) 
      break;
    case '1':
      newData = stack + 6;
      tose = newData % 19 == 0 ? 
        initMonkey['2'].item.push(newData) : 
        initMonkey['0'].item.push(newData) 
      break;
    case '2':
      newData = stack * stack;
      tose = newData % 13 == 0 ? 
        initMonkey['1'].item.push(newData) : 
        initMonkey['3'].item.push(newData) 
      break;
    case '3':
      newData = stack + 3;
      tose = newData % 17 == 0 ? 
        initMonkey['0'].item.push(newData) : 
        initMonkey['1'].item.push(newData) 
      break;
  }
  data.div = newData
  return data
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
