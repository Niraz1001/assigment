import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './reducerSlice/counterSlice'
import BoxSlice from './reducerSlice/BoxSlice'

export default configureStore({
  reducer: {
    counter: counterSlice,
    box: BoxSlice
  }
})