import { createSlice } from "@reduxjs/toolkit";

const initialbreakss={value:4,}

export const breakssSlice=createSlice({
    name:'breaks',
    initialState:initialbreakss,
    reducers:{
        breaksIncreament:(state)=>{(state.value>=0&&state.value<10)&&(state.value+=1)},
        breaksDecreamnte:(state)=>{(state.value>0&&state.value<=10)&&(state.value-=1)},
        breaksRest:(state)=>{state.value=initialbreakss.value} 
    },
}),
{breaksIncreament,breaksDecreamnte,breaksRest}=breakssSlice.actions;

export default breakssSlice.reducer;
