import { createSlice } from "@reduxjs/toolkit";
const initialState={
    isRunnig:false,
    isWorkSession:true,
    length:25,
    timeLeft:25*60,
}
export const timerSlice=createSlice({
    name:'timer',
    initialState,
    reducers:{
        adjustTimer:(state,action)=>{
            state.length=Math.max(10,Math.min(60,state.length+action.payload));
            state.timeLeft=state.length*60
        },
        isRunnigSet:(state,action)=>{
            state.isRunnig=action.payload
        },
        timerTic:state=>{
            state.timeLeft-=1;
        },
        workSessionToggle:(state,action)=>{
            state.isWorkSession=action.payload;
        },
        timerSet:(state,action)=>{
            state.timeLeft=action.payload
        },
        timerReset:state=>{
            state.timeLeft=25*60;state.length=25;
            state.isRunnig=false;
        }

        
    }
});
export const {adjustTimer,isRunnigSet,timerTic,workSessionToggle,timerSet,timerReset}=timerSlice.actions;
export default timerSlice.reducer;