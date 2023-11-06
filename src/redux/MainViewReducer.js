import { createSlice } from '@reduxjs/toolkit'


export const MainViewSlice = createSlice({
    name: 'main',
    initialState: {
        create: false,
        readTodo: null,
        storage: [
            {
                'hi': false,
                'hello': false,
            }, {
                'secound': false,
                'todo': false
            }, { 'third todo': false }
        ]
    },
    reducers: {
        TodoCreate: (state, data) => {
            state.create = data.payload
        },
        TodoRead: (state, data) => {
            state.readTodo = data.payload
        },
        StorageAdd: (state, action) => {
            const index = state.readTodo;
            const key = action.payload.key;

            state.storage[index][key] = action.payload.value;
        },
        StorageNewTodo: (state) => {
            state.storage.push({});
        },
        StorageCleanEmptyTodo: (state) => {
            state.storage.pop();
        }
    },
})

export const { TodoCreate, TodoRead, StorageAdd, StorageNewTodo, StorageCleanEmptyTodo } = MainViewSlice.actions

export const selectView = state => state.main
export const selectTodo = state => state.main.readTodo
export const selectStorage = state => state.main.storage

export default MainViewSlice.reducer