import { createSlice } from '@reduxjs/toolkit'


export const MainViewSlice = createSlice({
    name: 'main',
    initialState: {
        create: false,
        readTodo: null,
        storage: [
            {
                'hi': false,
                'hello': true,
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
        StorageAdd: (state, data) => {
            const index = state.readTodo;
            const key = data.payload.key;

            state.storage[index][key] = data.payload.value;
        },
        StorageNewTodo: (state) => {
            state.storage.push({});
        },
        StorageCleanEmptyTodo: (state) => {
            state.storage.pop();
        },
        doneTodo: (state, data) => {
           
        }
    },
})

export const { TodoCreate, TodoRead, StorageAdd, StorageNewTodo, StorageCleanEmptyTodo, doneTodo } = MainViewSlice.actions

export const selectView = state => state.main
export const selectTodo = state => state.main.readTodo
export const selectStorage = state => state.main.storage

export default MainViewSlice.reducer