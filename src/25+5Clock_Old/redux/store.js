import { configureStore } from '@reduxjs/toolkit'
import TimerReducer from './TimerRedux';
import breaksRedux from './breaksRedux';
export const store = configureStore({
  reducer: {
    timer:TimerReducer,
    breakss:breaksRedux
},
})