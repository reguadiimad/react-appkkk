import { useEffect, useState } from 'react';

import xSound from './sounds/x.mp3';
import oSound from './sounds/o.mp3';
import winSound from './sounds/win.mp3';
import loseSound from './sounds/lose.mp3';
import './tictacteo.css';


const initData = ["", "", "", "", "", "", "", "", ""];
const winConditions = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
const lineStatant = [[-270, 0, 0, 0, 500], [50, 0, 0, 0, 500], [370, 0, 0, 0, 500], [50, -320, 90, 0, 500], [50, 0, 90, 0, 500], [50, 0, 90, -325, 500], [45, 0, 45, 0, 600], [45, 0, -45, 0, 600]];

export default function App() {
   
    const [data, setData] = useState(initData),
    [lock, setLock] = useState(false),
    [player, setPlayer] = useState(false),
    [count, setCount] = useState(0),
    [isHover, setIsHover] = useState(false),
    [winner, setWinner] = useState(null),
    [lineStyle, setLineStyle] = useState(null),
    [result, setResault] = useState(''),
    [off, setOff] = useState(false),
    [switchx, setSwitch] = useState(false),
    xAudio = new Audio(xSound),
    oAudio = new Audio(oSound),
    loseAudio = new Audio(loseSound),
    winAudio = new Audio(winSound);

    useEffect(() => {
        xAudio.preload = 'auto';
        oAudio.preload = 'auto';
        winAudio.preload = 'auto';
        loseAudio.preload = 'auto';
    }, []);

    let handleToggle = num => {
        if (lock || data[num] !== "") return;
        setCount(c => c + 1);
        setPlayer(!player);
        const newData = [...data];
        newData[num] = player ? 'o' : 'x';
        player ? oAudio.play() : xAudio.play();
        setData(newData);
        handleWin(newData);
    },

    handleMouseMove = num => {
        if (lock) return;
        setIsHover(num);
    },

    handleMouseOut = () => {
        setIsHover(null);
    },

    handleWin = board => {
        if (count === 8 && winner===null) {
            setLock(true);
            loseAudio.play();
            setCount(0);
            setResault('Draw');
        }
        winConditions.forEach((condition, index) => {
            const [a, b, c] = condition;
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                setLock(true);
                setWinner(board[a]);
                setLineStyle(lineStatant[index]);
                winAudio.play();
                setCount(0);
                setResault((!player ? 'X' : 'O') + ' Win');
            } 

        });
    },

    handleReset = () => {
        setData(initData);
        setLock(false);
        setWinner(null);
        setPlayer(false);
        setCount(0);
        setResault('');
    },

    handleSwitch = () => {
        setSwitch(!switchx);
        setPlayer(!player);
    };

    useEffect(() => {
        const isEveryElementFilled = data.every(square => square === '');
        setOff(isEveryElementFilled);
    }, [data]);

    return (
        <>
            <h1>Tic Tac Toe</h1>
            <p>
                Player 1: <b className={switchx ? 'b' : 'c'}>{!switchx ? 'X' : 'O'}</b> <span>Player 2: <b className={switchx ? 'b' : 'c'}>{switchx ? 'X' : 'O'}</b> </span>
            </p>
            <div className='container'>
                {data.map((square, index) => (
                    <div key={index} onMouseMove={() => handleMouseMove(index)} onMouseOut={handleMouseOut} onClick={() => handleToggle(index)}>
                        {square === 'x' && <i className="fa-solid fa-xmark"></i>}
                        {square === 'o' && <i className="fa-solid fa-o o"></i>}
                        {square === '' && isHover === index && <p>{!player ? 'x' : 'o'}</p>}
                    </div>
                ))}
            </div>
            <p>
                <span>made by RGD</span>
            </p>
            <button onClick={handleReset}>Restart</button>
            <div onClick={handleSwitch} className={off ? 'switch' : 'aper'}>
                <i className="fa-solid fa-repeat "></i>
                {' '}
                Switch players
            </div>

            {winner && <Line top={lineStyle[0]} left={lineStyle[1]} rotate={lineStyle[2]} right={lineStyle[3]} width={lineStyle[4]} />}
            {(winner || result==='Draw') && <BlurredWindow result={result} />}
        </>
    );
}
const Line = ({ top, left, rotate, right, width }) => {
    return (
        <div className='winLine'>
            <div className='line' style={{
                marginTop: `${top}px`,
                marginLeft: `${left}px`,
                marginRight: `${right}px`,
                transform: `rotate(${rotate}deg)`,
                width: width,
                '--final-width': `${width}px`
            }}>
            </div>
        </div>
    );
},
BlurredWindow=({result})=>{
    let color=result==='Draw'?'rgb(255, 0, 225)':'rgb(138, 172, 25)';
    return (
      <div className="window" style={{textShadow:` 1px 0px 10px ${color}`}}>
        {result}<br/>
        
      </div>
    );
  }

