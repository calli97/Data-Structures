import { useState } from 'react';
import { Button, Form, FormControl, InputGroup } from 'react-bootstrap';


function isNumeric(str) {
  if (typeof str != "string") {return false}
  return !isNaN(str) && !isNaN(parseFloat(str)) 
}

function ListBar ({listData,listSetter}) {
    const style={
        background:"linear-gradient(to right,#04D5AF, #1964AF)"
    }
    const [number, setNumber] = useState(0)
    const pushNumber=()=>{
      if(!isNumeric(number) &&!(0==number)){
        window.alert('Not a number')
        setNumber(0) 
      }else{
        if(Number(number)>999999){
          window.alert('Max number is 999999')
          setNumber(0)
        }else{
          listSetter([Number(number),...listData])
          setNumber(0)
        }
      }
    }
    const unshiftNumber=()=>{
      if(!isNumeric(number)&&!(0==number)){
        window.alert('Not a number')
        setNumber(0)
      }else{
        if(Number(number)>999999){
          window.alert('Max number is 999999')
          setNumber(0)
        }else{
          listSetter([...listData,Number(number)])
          setNumber(0)
        }
      }
    }
    const popNumber=()=>{
      listData.shift()
      listSetter([...listData])
      setNumber(0)
    }
    const shiftNumber=()=>{
      listData.pop()
      listSetter([...listData])
      setNumber(0)
    }


  return (
    <div className="d-flex justify-content-between p-3 bg-light rounded-top" style={style}>
      <InputGroup className="mb-2" style={{width:"500px"}} id='numdata'>
        <FormControl placeholder="Number" aria-label="Number" onChange={(e)=>setNumber(e.target.value)} value={number}/>
          <Button variant="outline-success" className="btn-dark text-white" onClick={pushNumber}>Push</Button>
          <Button variant="outline-success" className="btn-dark text-white" onClick={popNumber}>Pop</Button>
          <Button variant="outline-success" className="btn-dark text-white" onClick={unshiftNumber}>Unshift</Button>
          <Button variant="outline-success" className="btn-dark text-white" onClick={shiftNumber}>Shift</Button>
      </InputGroup>
      <div>
        <Button variant="outline-danger" className="btn-danger text-white" onClick={(e)=>{listSetter([])}}>Delete</Button>
      </div>
    </div>
  );
};

export default ListBar;
