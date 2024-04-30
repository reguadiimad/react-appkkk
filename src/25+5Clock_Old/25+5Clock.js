import React, { useState, useEffect } from 'react';
import './styleClock.scss';
import { useDispatch, useSelector } from 'react-redux';
import { ControlCenter, TheTimer} from './components';

function Timer() {
  const 
  timer=useSelector(state=>state.timer),
  breakss=useSelector(state=>state.breakss.value),
  dispatch=useDispatch();

  return (
    <div  className={timer.isRuning?'Interface PlayPhase':'Interface'} >
     <ControlCenter timer={timer.value}  breakss={breakss} dispatch={dispatch}/>
     <TheTimer timer={timer.value} breakss={breakss} isRuning={timer.isRuning} dispatch={dispatch}/> 
     {timer.isRuning&&<div className='workMode'>Work Mode</div>}
    </div>
  );
}

export default Timer;

