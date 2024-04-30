
import { adjustTimer,isRunnigSet, timerReset, timerSet, timerTic, workSessionToggle } from "./slicesReducer/timerSlice";
import { breaksAdjuster, breaksReset, breaksSet, breaksTic } from "./slicesReducer/breakSlice";

export const ControlInterface = ({timer,breaks,dispatch,userManual,darkModeSwitch,darkMode}) => {
    
    return (
        <section className="ControlInterface">
            <div className="TopInterface">
                <h2>Pomodoro Timer</h2>
                <span>
                    <span className="darkMode" onClick={darkModeSwitch}>{!darkMode?'Dark ':'Light '}Mode</span>
                    <p onClick={userManual}>User Manual</p>
                    
                </span>
            </div>
            <div className="ControlSpace">
                <div className="ControlZone">
                    <p>Minutes</p>
                    <div>
                        <span onClick={()=>dispatch(adjustTimer(-1))}>-</span>
                        <h1>{timer.length}</h1>
                        <span onClick={()=>dispatch(adjustTimer(1))}>+</span>
                    </div>
                    <div className="progresse"><span style={{ width: `${((timer.length - 10) / (60 - 10)) * 89.5 + 10.5}%` }}></span>


                        <div className="names">
                            <p>10</p>
                            <p style={{ color: (timer.length > 56 && darkMode) || (timer.length <= 56 && !darkMode) ? '#495E57' : '#F5F7F8' }}>60</p>
                        </div>
                    </div>
                    
                </div>
                
                <div className="ControlZone">
                    <p>Breaks</p>
                    <div>
                        <span onClick={()=>dispatch(breaksAdjuster(-1))}>-</span>
                        <h1>{breaks.length}</h1>
                        <span onClick={()=>dispatch(breaksAdjuster(1))}>+</span>
                    </div>
                    <div className="progresse">
                        <span style={{width:`${breaks.length*10}%`}}></span>
                        <div className="names">
                            <p>1</p>
                            <p style={{color: (breaks.length < 10 && !darkMode) || (breaks.length >= 10 && darkMode) ? '#495E57' : '#F5F7F8'}}>10</p>
                        </div>
                    </div>
                    
                </div>
            </div>
            
        </section>
    );
};

export const TimerInterface = ({timer,breaks,dispatch,blinking}) => {
    let
    formatTime=(time,min)=>{
        const minutes=parseInt(time/60),seconds=time%60;
        if(min){return `${minutes < 10 ? '0' : ''}${minutes}`}
        else{return `${seconds < 10 ? '0' : ''}${seconds}`}
    }
    return (
        <section className="TimerInterface">
            
            <div className="Breaks">
            {Array.from({length:10}).map((_,i)=><div className={i<breaks.left?'':'off'}></div>)}
            </div>
            <div className={blinking?'Timer blink':'Timer'}>
            {timer.isRunnig&&<h5>{timer.isWorkSession?'Work Time':'Break Time'}</h5>}

                <h1>{formatTime(timer.timeLeft,true)}</h1>
                <h1>:</h1>
                <h1>{formatTime(timer.timeLeft,false)}</h1>
            </div>
            <div className="StartTimer">
                <div onClick={()=>{dispatch(timerReset());dispatch(breaksReset())}}>Reset</div>
                <div onClick={()=>dispatch(isRunnigSet(!timer.isRunnig))}>{timer.isRunnig?'Pause':'Start'}</div>
            </div>
            <p>
    {timer.isRunnig? 'To restart the timer, press the reset button. To pause it, click on Pause.' : 'Activate the timer section by pressing the start button.'}
</p>

        </section>
    );
},
UserManual = ({userManual}) => {
    return (
        <div className="UserManualBkg">
        <span onClick={userManual}><i class="fa-solid fa-backward"></i> back</span>
          <div className="UserManual">
          <h2>User Manual</h2>
            <div className="Instructions">
                <h3>What is the Pomodoro Technique?</h3>
                <p>The Pomodoro Technique is a time management method developed by Francesco Cirillo in the late 1980s. It uses a timer to break work into intervals, traditionally 25 minutes in length, separated by short breaks. These intervals are known as "pomodoros," named after the Italian word for tomato, as the technique was inspired by Cirillo's use of a tomato-shaped kitchen timer.</p>
                <p>The Pomodoro Technique aims to improve productivity and focus by breaking work into manageable chunks and incorporating regular breaks to prevent burnout.</p>
                <h3>How to Use the Pomodoro Timer:</h3>
                <ol>
                    <li>
                        <strong>Adjust Timer Length:</strong> Use the '+' and '-' buttons next to "Minutes" to increase or decrease the length of the work session. The timer length can be set between 10 minutes and 60 minutes.
                    </li>
                    <li>
                        <strong>Adjust Break Length:</strong> Use the '+' and '-' buttons next to "Breaks" to increase or decrease the length of the break sessions. Break length can be set between 1 minute and 10 minutes.
                    </li>
                    <li>
                        <strong>Start Timer:</strong> Once you have set your desired work and break lengths, click the "Start" button to activate the timer. The timer will start counting down from the specified work session length.
                    </li>
                    <li>
                        <strong>Pause/Resume Timer:</strong> During the work session, you can pause the timer by clicking the "Pause" button. To resume, click the "Resume" button.
                    </li>
                    <li>
                        <strong>Reset Timer:</strong> Click the "Reset" button to reset both the work session and break session lengths. This will stop the timer and reset it to the original settings.
                    </li>
                    <li>
                        <strong>Switch Theme:</strong> To toggle between light and dark themes, click the "Dark theme" checkbox located in the top interface section.
                    </li>
                </ol>
                <p>Explore the timer's features and customize it to suit your productivity needs!</p>
            </div>
          </div>
        </div>
    );
};
