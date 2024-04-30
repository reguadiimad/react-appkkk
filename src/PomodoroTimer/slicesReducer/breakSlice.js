import { createSlice } from "@reduxjs/toolkit";
const initialState={
    length:5,
    left:5,
}
export const breaksSlice=createSlice({
    name:'breaks',
    initialState,
    reducers:{
        breaksAdjuster:(state,action)=>{
            state.length=Math.max(1,Math.min(10,state.length+action.payload))
            state.left=state.length
        },
        breaksTic:state=>{
            state.left-=1
        },
        breaksSet:(state,action)=>{
            state.left=action.payload;
        },
        breaksReset:state=>{
            state.left=5;state.length=5;
        }
    }
});
export const {breaksAdjuster,breaksTic,breaksSet,breaksReset}=breaksSlice.actions;
export default breaksSlice.reducer;