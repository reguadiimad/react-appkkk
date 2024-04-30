import { useEffect, useRef, useState } from 'react';
import './QuoteDesigne.scss';
import initQuotes from './quotes.json';
import Quote from './Quote';
export default function QuoteMachine(){
    const [quote,setQuote]=useState(initQuotes[Math.floor(Math.random()*initQuotes.length)]),
    ref=useRef(null);
    useEffect(()=>{
        ref.current.classList.add('remove');
        setTimeout(() => {
        ref.current.classList.remove('remove');
        ref.current.classList.add('reveal');
        }, 500);
        return()=>ref.current.classList.remove('reveal')
    },[quote])
    return(
    <div className='body'>
        <div className='navBar'>
            <h2>Quote Machine</h2>
        </div>
        <div className='core'>
            <Quote reff={ref} quote={quote}/>
        </div>
        <div className='end'>
            <button onClick={()=>setQuote(initQuotes[Math.floor(Math.random()*initQuotes.length)])}>Next One</button>
        </div>
    </div>
    )
}
