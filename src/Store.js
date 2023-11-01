import { configureStore } from '@reduxjs/toolkit'
import MainViewReducer from './redux/MainViewReducer'



export const Store = configureStore({
  reducer: {
    main: MainViewReducer,
  },
})