import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import './style.scss';
import {
  CircularInput,
  CircularTrack,
  CircularProgress,
  CircularThumb,
  useCircularInputContext
} from "react-circular-input";


export default function Volume() {
  const [value, setValue] = useState(0.25);
  const [classs, setClasss] = useState('fa-solid fa-volume-off');
  const stepValue = v => Math.round(v * 10) / 10,
  vva=Math.round(stepValue(value) * 100);
  useEffect(() => {
    if (value > 0 && value <= 0.1) {
      setClasss('fa-solid fa-volume-xmark');
    } else if (value > 0.1 && value <= 0.50) {
      setClasss('fa-solid fa-volume-low');
    
    } else if (value > 0.75 && value <= 1) {
      setClasss('fa-solid fa-volume-high');
    }
  }, [value]);
  return (

      <>
      <div className="slider">
        <div className="inner" style={{color:`rgb(9,130,255,${value+0.2})`}}>
        <div className="chrat">
        <i class="fa-solid fa-volume-off"></i>
        {value>=0.1&&<span></span>}
        {value>=0.4&&<span></span>}
        {value>=0.7&&<span></span>}
        
        </div>
        <h1>{vva}</h1></div>
      <CircularInput value={stepValue(value)}onChange={setValue}>        
        <CircularProgress className="custom-progress" stroke={`rgb(9,130,255,${value+0.2})`} />
        
        <CircularThumb r={5} fill="rgba(255,255,255,0.5)" />
      </CircularInput>

      </div>

      
      </>
      
  );
}

