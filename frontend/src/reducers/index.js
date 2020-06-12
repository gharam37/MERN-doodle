//Where we combine all reducers * We only have one but whatever xD* 
import { combineReducers } from 'redux'


import loginReducer from './loginReducer'

const rootReducer = combineReducers({
  login: loginReducer,
})

export default rootReducer