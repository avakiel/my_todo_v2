import { createSlice } from '@reduxjs/toolkit'


export const MainViewSlice = createSlice({
    name: 'main',
    initialState: {
        create: false,
        readTodo: null,
        storage: [['hi', 'hello'], ['second todo'], ['third todo']]
    },
    reducers: {
        TodoCreate: (state, data) => {
            state.create = data.payload
        },
        TodoRead: (state, data) => {
            state.readTodo = data.payload
        },
        StorageAdd: (state, data) => {
            state.storage[state.readTodo].push(data.payload)
        }
    },
})

export const { TodoCreate, TodoRead, StorageAdd} = MainViewSlice.actions

export const selectView = state => state.main
export const selectTodo = state => state.main.readTodo
export const selectStorage = state => state.main.storage

export default MainViewSlice.reducer