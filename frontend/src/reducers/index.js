import { combineReducers } from 'redux'

import postsReducer from './postsReducer'

import loginReducer from './loginReducer'

const rootReducer = combineReducers({
  posts: postsReducer,
  login: loginReducer,
})

export default rootReducer