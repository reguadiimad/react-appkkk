import { increament,decreamnte,play,pause,rest,start} from './redux/TimerRedux';
import { breaksIncreament,breaksDecreamnte,breaksRest} from './redux/breaksRedux';
import { useEffect, useState } from 'react';


export const ControlCenter=({timer,breakss,dispatch})=>{
    return(
    <div className='ControlCenter'>
      <h1>Pomodoro Timer</h1>
   
      <div className='Controller'>
        
        <span>
          <h2>Timer Delay</h2>
          <div className='LengthControl'>
            <p onClick={()=>dispatch(decreamnte())}>-</p>
            <b>{parseInt(timer/60)}</b>
            <p onClick={()=>dispatch(increament())}>+</p>
          </div>
        </span>
        <span>
        <h2>breaks Length</h2>
        <div className='LengthControl'>
            <p onClick={()=>dispatch(breaksDecreamnte())}>-</p>
            <b>{breakss}</b>
            <p onClick={()=>dispatch(breaksIncreament())}>+</p>
          </div>
        </span>
        
      </div>
      <div onClick={()=>{dispatch(rest());dispatch(breaksRest())}} className='rest'>
        <i class="fa-solid fa-rotate-right"></i><h4>Rest</h4>
      </div>
    </div>
    )
  },

  TheTimer=({timer,breakss,isRuning,dispatch})=>{
    
    const
    min=parseInt(timer/60),
    sec=(timer)%60,
    [animate, setAnimate] = useState(false);
    useEffect(()=>{setAnimate(true);setTimeout(() =>setAnimate(false), 200);},[timer]);
    useEffect(() => {
      let intervalId;
      
      if (isRuning) {
        intervalId = setInterval(() => {
          dispatch(start());
        }, 1000);
      } else {
        clearInterval(intervalId);
      }
  
      return () => clearInterval(intervalId);
    }, [isRuning, dispatch]);
     const [timeLeft, setTimeLeft] = useState(timer); // Convert initial time to seconds
    const [percentageComplete, setPercentageComplete] = useState(1);
    
    useEffect(() => {
      const calculateStrokeDashOffset = () => {
        const calculatedOffset = 100 - (percentageComplete * 100);
        setStrokeDashOffsetValue(calculatedOffset);
      };
      
      calculateStrokeDashOffset();
    }, [percentageComplete]);
    
    return (
      
    <div className={isRuning?'TheTimer play':'TheTimer'}>
      {
        isRuning && (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 34 34">
            <circle cx="16" cy="16" r="15.9155" className="progress-bar__background" />
            <circle
              cx="16"
              cy="16"
              r="15.9155"
              className="progress-bar__progress js-progress-bar"
              style={{ strokeDashoffset: `${strokeDashOffsetValue}%` }}
            />
          </svg>
        )
      }

      <div className='breakss'>
        {Array.from({length:10}).map((_,i)=><span className={i<breakss?'':'off'}></span>)}
      </div>
      
      <div className={isRuning?'Timer pie ':'Timer'}  >
        
        <h1><b>{min<10?'0'+min:min} : </b><b>{sec<10?'0'+sec:sec}</b></h1>
      </div>
      <div on onClick={()=>dispatch(isRuning?pause():play())}className='PlayPause'>
        <i class={isRuning?'fa-solid fa-pause':'fa-solid fa-play'}></i>
        {isRuning?'Pause':'Play'}
      </div>
    </div>
    )
  }