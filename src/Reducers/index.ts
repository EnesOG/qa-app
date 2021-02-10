import { combineReducers } from '@reduxjs/toolkit'
import qaReducer from './qaReducer'
const rootReducer = combineReducers({
  qaReducer
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer;