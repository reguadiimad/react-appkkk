import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import {CircularInput,CircularProgress,CircularThumb}from "react-circular-input";

export const 
DrumsButton=({drums,power,onPresse})=>{
    return(
        <div className='DrumBottons'>
            {!power&&<div>Please turn on the "Power" button to start </div>}
            {drums.map(drum=>
                <button 
                onClick={()=>onPresse(drum.url,drum.name)}
                key={drum.id}>
                    {drum.key}
                </button>)}
        </div>
    )
},


DrumControl=({volume,volumeChange,power,currentDrum,bank,handleBank,handlePower})=>{
    return(
    <div className='DrumControl'>

        <div className='Volume_Name'>
            <div className="Volume">
                <Volume volume={volume} volumeChange={volumeChange}/>
            </div>
            <div className="Name" style={{ opacity: currentDrum.startsWith('Please')&&0.6 }}><h3>{currentDrum}</h3></div>
        </div>


        <div className='Power_Bank'>
            <div className="Bank">
                Bank
                <div onClick={handleBank} className={bank?'toggle OK':'toggle'}>
                    <span className={bank?'ok':''}></span>
                </div>
            </div>
            <div className="Power">
                Power
            <div onClick={handlePower} className={power?'toggle OK':'toggle'}>
                    <span className={power?'ok':''}></span>
                </div>
            </div>
        </div>
    </div>
    )
},Volume=({volume,volumeChange})=>{
    const stepValue=v=>Math.round(v * 10) / 10,
    theVolume=Math.round(stepValue(volume) * 100);
    let colorChange=`rgb(54, 152, 251,${(volume/2)+0.5})`;
    return(
        <div className='volumeSlider'>
            <div className='volumeInfo'>
                <div className="chrat" >
                    <i class="fa-solid fa-volume-off" style={{color:colorChange}}></i>
                    {volume>=0.1&&<span style={{background:colorChange}}></span>}
                    {volume>=0.4&&<span style={{background:colorChange}}></span>}
                    {volume>=0.7&&<span style={{background:colorChange}}></span>}
                 </div>
                <h1 style={{color:colorChange}}>{theVolume}</h1>
            </div>
            <CircularInput value={stepValue(volume)} onChange={volumeChange}>        
                <CircularProgress stroke={colorChange} />
                <CircularThumb r={5} fill="rgba(255,255,255,0.5)" />
            </CircularInput>
        </div>
    )
}
