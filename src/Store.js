import { configureStore } from '@reduxjs/toolkit'
import MainViewReducer from './redux/MainViewReducer'
import myStorage from './redux/myStorage'


export const Store = configureStore({
  reducer: {
    main: MainViewReducer,
    storage: myStorage
  },
})