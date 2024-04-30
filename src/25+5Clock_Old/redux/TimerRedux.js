import { createSlice } from "@reduxjs/toolkit";

const initialState={value: 25*60,isRuning:false}

export const TimerSlice=createSlice({
    name:'timer',
    initialState,
    reducers:{
        increament:state=>{(state.value>=0&&state.value<60*60)&&(state.value+=60)},
        decreamnte:state=>{(state.value>61&&state.value<=60*60)&&(state.value-=60)},
        start:state=>{state.value>0&&(state.value-=1)},
        play:state=>{state.isRuning=true},
        pause:state=>{state.isRuning=false},
        rest:(state)=>{state.value=initialState.value}
    },
}),
{increament,decreamnte,rest,play,pause,start}=TimerSlice.actions;

export default TimerSlice.reducer;

