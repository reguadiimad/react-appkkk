import { useSelector,useDispatch } from "react-redux"
import { adjustTimer,isRunnigSet, timerSet, timerTic, workSessionToggle } from "./slicesReducer/timerSlice";
import { breaksAdjuster, breaksSet, breaksTic } from "./slicesReducer/breakSlice";
import { useEffect, useState } from "react";
import './style/MainStyle.scss';
import { ControlInterface, TimerInterface,UserManual} from "./TimerComponents";


export default function PomodoroTimer(){
    const 
    timer=useSelector(state=>state.timer),
    breaks=useSelector(state=>state.breaks),
    dispatch=useDispatch(),
    [userManual,setUserManual]=useState(false),
    [darkMode,setDarkMode]=useState(false),
    [blinking,setBlinking]=useState(false);
    let handleUserManual=()=>setUserManual(!userManual),
    handleDarkMode=()=>setDarkMode(!darkMode),
    initialTime=(timer.isWorkSession?timer.length*60:5*60),
    progressWidth = ((initialTime - timer.timeLeft) / initialTime) * 100;
    useEffect(()=>{
            let timerId;
            if(timer.isRunnig){
                if(timer.timeLeft>=0){
                    timerId=setTimeout(()=>dispatch(timerTic()),1000);
                    if(timer.timeLeft===0&&breaks.left>=0){
                        if(timer.isWorkSession){
                            dispatch(workSessionToggle(false));
                            dispatch(timerSet(5*60));
                            dispatch(breaksTic()); 
                        }else{
                            dispatch(workSessionToggle(true));
                            dispatch(timerSet(timer.length*60));  
                        }
                        if(timer.isWorkSession&&breaks.left===0){
                            dispatch(isRunnigSet(false));
                            dispatch(timerSet(timer.length*60));
                            dispatch(breaksSet(breaks.length));
                        }
                    }
                    
                }else{
                    dispatch(isRunnigSet(false))
                }
            }
            return ()=>clearTimeout(timerId);
        },[timer.isRunnig,timer.timeLeft]
    );
    useEffect(()=>{
        const root = document.documentElement;
        root.style.setProperty('--color1-light', darkMode ? '#495E57' : '#F5F7F8');
        root.style.setProperty('--color2-light', darkMode ? '#45474B' : '#F4CE14');
        root.style.setProperty('--color3-light', darkMode ? '#F4CE14' : '#495E57');
        root.style.setProperty('--color4-light', darkMode ? '#F5F7F8' : '#45474B');
    },[darkMode])
    useEffect(()=>{
        setBlinking(true)
        const tim=setTimeout(()=>setBlinking(false),100);
        return ()=>setBlinking(false)
    },[timer.length])
    
    return(
        <>
        <div className={timer.isRunnig?'Interface on':'Interface'} >
            
            <ControlInterface timer={timer} breaks={breaks} dispatch={dispatch} userManual={handleUserManual} darkMode={darkMode} darkModeSwitch={handleDarkMode}/>
            <TimerInterface timer={timer} breaks={breaks} dispatch={dispatch} blinking={blinking}/>
            {userManual&&<UserManual userManual={handleUserManual}/>}
            
            <div style={{width:(100-progressWidth)+'%'}} className={timer.isRunnig?'Line':'Line off'}></div>
        </div>
        </>
    )
}