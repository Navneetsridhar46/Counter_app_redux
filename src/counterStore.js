import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './counterSlice'
// const { configureStore} = require ("@reduxjs/toolkit")

const counterStore = configureStore({
    reducer: {
        counterReducer : counterSlice
    }
})

export default counterStore