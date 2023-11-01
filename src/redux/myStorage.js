import { createSlice } from '@reduxjs/toolkit'


export const myStorageSlice = createSlice({
    name: 'Storage',
    initialState: {
        storage: [['hi', 'hello'], ['second todo'], ['third todo']]
    },
    reducers: {
        StorageAdd: (state, data) => {

        }
    },
})

export const { StorageAdd } = myStorageSlice.actions

export const selectStorage = state => state.storage.storage

export default myStorageSlice.reducer