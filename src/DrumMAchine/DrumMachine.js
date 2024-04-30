import { useEffect, useState } from 'react';
import './DrumMachineStyle.scss';
import drumData from  './drumData.json';
import { DrumControl, DrumsButton } from './Components';
export default function DrumMachine(){


    const 
    initAudio=new Audio(drumData.drumSet1[0].url),
    [drum,setDrum]=useState([]),
    [currentAudio,setCurrentAudio]=useState(initAudio),
    [isBank,setIsBank]=useState(false),
    [power,setPower]=useState(true),
    [currentDrum,setCurrentDrum]=useState('Please do press one of the keys'),
    [volume,setVolume]=useState(0.7),



    hanlePresse=(url,key)=>{
        const audio=new Audio(url);
        audio.play();
        audio.volume=volume;
        setCurrentDrum(key);
        setCurrentAudio(audio);

    },


    handleBank=()=>setIsBank(!isBank),
    handlePower=()=>{setPower(!power);setCurrentDrum(power?'The drum is Off':'Please do press one of the keys')}
    useEffect(()=>!isBank?setDrum(drumData.drumSet1):setDrum(drumData.drumSet2),[isBank])

    return (
        <div className="DrumInterface">
            <h1>Drum Machine</h1>
            <p>Welcome to the Drum Machine app! Start creating beats by clicking on the pads below.</p>
            <div className="DrumLayers">
                
                <DrumsButton drums={drum} power={power} onPresse={hanlePresse}/>
                <DrumControl volume={volume} volumeChange={setVolume} power={power} currentDrum={currentDrum} bank={isBank} handleBank={handleBank} handlePower={handlePower}/>
            </div>
            <p className='made'><span>Made by Rgd</span></p>
        </div>
    )
}

