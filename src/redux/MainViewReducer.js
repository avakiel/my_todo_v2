import { createSlice } from '@reduxjs/toolkit'


export const MainViewSlice = createSlice({
    name: 'main',
    initialState: {
        create: false,
        readTodo: null,
    },
    reducers: {
        TodoCreate: (state, data) => {
            state.create = data.payload
        },
        TodoRead: (state, data) => {
            state.readTodo = data.payload
        },
    },
})

export const { TodoCreate, TodoRead } = MainViewSlice.actions

export const selectView = state => state.main
export const selectTodo = state => state.main.readTodo

export default MainViewSlice.reducer