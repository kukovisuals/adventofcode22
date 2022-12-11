import React from 'react';
import './App.css';

function App() {
  const [alert, setAlert] = React.useState<any>('');
  const [count, setCount] = React.useState(0);
  const [mover, setMover] = React.useState({x: 0, y:0});
  const [mover2, setMover2] = React.useState({x: 0, y:0});
  const [offY, setOffY] = React.useState(0);
  const [offY2, setOffY2] = React.useState(0);
  const [count2, setCount2] = React.useState(0);
  //----------------------------------------
  const [rate, setRate] = React.useState(0);
  const [index, setIndex] = React.useState(0);
  //----------------------------------------
  const offSet = 30;
  const offSet2 = 17;
  const showFile = async (e:any) => {
    e.preventDefault()
    const reader = new FileReader()
    reader.onload = async (e) => { 
      if(e.target){
        const text = (e.target.result);
        setAlert(text)
      }
    };
    reader.readAsText(e.target.files[0])
  }
  //----------------------------------------
  React.useEffect(() => {
    const time = setInterval(() => {
      
      if( count > 0 && ((count + 1) % 20 == 0) ){
        setCount(0)
        setOffY(offY + 1)
      } else {
        setCount(count +  1)
      }

      if( count2 > 0 && ((count2 + 1) % 10 == 0) ){
        setCount2(0)
        setOffY2(offY2 + 1)
      } else {
        setCount2(count2 +  1)
      }
        
      setMover({
        x: count * offSet,
        y: offY * offSet,
      })
      setMover2({
        x: offY2 * 56,
        y: count2 * offSet2,
      })
      //----------------------------------------
      if(alert.length > 0){
        const newAlert = alert.split('\n')
        if(newAlert[index].length > 4){
          setRate(rate + Number(newAlert[index].split(' ')[1]) )
          console.log('r -> ', newAlert[index].split(' ')[1] )
        } else {
          setRate(rate + 1)
        }
      }
      setIndex(index +  1)
    }, 5000)
    return () => clearInterval(time)
  },[count])
  //----------------------------------------
  const styles= {
    transform: `translate(${mover.x}px, ${mover.y}px)`
  };
  const styles2= {
    transform: `translate(${mover2.x}px, ${mover2.y}px)`
  };
  console.log(index, '-------------------')
  console.log('Sum Rate -> ', rate )
  return (
    <div className="App">
       <input type="file" onChange={showFile} />
       <div className="wrapper">
        <div className="container">
          <span 
            className="mover" 
            style={styles}
          />
          {alert.length > 0 &&  alert.split('\n').map((d:string, i:number) => 
            <div className="list" key={d+'-'+i}>{i+1}</div> 
          )}
        </div>
       </div>
       <div className='divider'>
        <div className="wrapper3">
          <div className='container3'>
            <span>Cycle: {count % 20} </span>
            <span>Rate: {rate}</span>
            <span>sum</span>
          </div>
        </div>
       </div>
       <div className='wrapper2'>
        <div className='container2'>
          <span 
            className="mover2"
            style={styles2}/>
          {alert.length > 0 &&  alert.split('\n').map((d:string, i:number) => 
            <div className="list2" key={d+'-'+i}>{d}</div> 
          )}
        </div>
       </div>
    </div>
  );
}



export default App;
