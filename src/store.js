import { configureStore } from "@reduxjs/toolkit";
import timerReducer from "./PomodoroTimer/slicesReducer/timerSlice";
import breaksSlice from "./PomodoroTimer/slicesReducer/breakSlice";


export const store = configureStore({
    reducer:{
        timer:timerReducer,
        breaks:breaksSlice,
    }
});