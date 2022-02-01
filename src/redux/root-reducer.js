import { combineReducers } from 'redux'

import authReducer from './auth/reducer'
import userReducer from './user/reducer'
import trackReducer from './track/reducer'

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  track: trackReducer,
})

export default rootReducer
