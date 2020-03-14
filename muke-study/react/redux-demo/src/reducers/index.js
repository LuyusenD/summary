import { combineReducers } from 'redux'
import conter from './conter'
import user from './user'

//集成 reducers 存放到rootReducer对象中,  用combineReducers 来处理
const rootReducer = combineReducers({
  conter,
  user
})

export default rootReducer