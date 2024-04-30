import React, { useState, useEffect } from 'react';
import './Calculatrice.css';
export default function Calculatrice(){


  const[opartion,setOparation]=useState('');
  let [resault,setResault]=useState(0),
  lastCharacter=opartion.charAt(opartion.length-1);
  const operations = ['+', '-', '/', '*'];
  useEffect(()=>{
    if(!operations.includes(lastCharacter)){
      setResault(eval(opartion));
    }else{
      setResault(eval(opartion.slice(0,-1)))
    }
  },[opartion])
  
  let handelClick=(e)=>{
    const input=e.target.value;
    if (!isNaN(input) || (isNaN(input) && !operations.includes(lastCharacter))) {
        setOparation(prev => prev + input);
    }
    
    
  }
  return(
    <>
      <div className='Calculatrice'>
        <div className='resault'>
        <h1 style={{ fontSize: opartion.length >= 13 ? 36 : 65 }}>
          {resault == null ? 0 : (String(resault).includes('.') ? parseFloat(resault).toFixed(3) : resault)}
        </h1>

          <p>{opartion===''?0:opartion}</p>
        </div>
        <div className='buttons'>
          <div className='buttons1'>

            <div className='buttons11'>
              <button onClick={()=>{setOparation('');setResault(0)}}>AC</button>
              <button onClick={()=>{setOparation(opartion.slice(0,-1))}}>⌫</button>
              <button onClick={handelClick} className='type1' value={'/'} disabled={opartion===''}>/</button>
              <button onClick={handelClick} value={'7'} >7</button>
              <button onClick={handelClick} value={'8'}>8</button>
              <button onClick={handelClick} value={'9'}>9</button>
              <button onClick={handelClick} value={'4'}>4</button>
              <button onClick={handelClick} value={'5'}>5</button>
              <button onClick={handelClick} value={'6'}>6</button>
              <button onClick={handelClick} value={'1'}>1</button>
              <button onClick={handelClick} value={'2'}>2</button>
              <button onClick={handelClick} value={'3'}>3</button>
            </div>

            <div className='buttons12'>
              <button onClick={handelClick} value={'0'} disabled={lastCharacter==='/'}className='zero'>0</button>
              <button onClick={handelClick}disabled={opartion===''  || opartion.includes('.')} value={'.'}>.</button>
            </div>
    
          </div>
          <div className='buttons2'>
              <button onClick={handelClick} value={'*'} className='type1' disabled={opartion===''}>*</button>
              <button onClick={handelClick} value={'-'}  className='type1'>-</button>
              <button onClick={handelClick} value={'+'}  className='pm type1'disabled={opartion===''}>+</button>
              <button onClick={()=>setResault(eval(opartion))} disabled={operations.includes(lastCharacter)}  className='pm type2'>=</button>
          </div>
          <div></div>
        </div>
      </div>
    </>
  )
}

