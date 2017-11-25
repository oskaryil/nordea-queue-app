import {combineReducers} from 'redux'
import {firstReducer} from './routes/home/reducer'
import {sendCode} from './routes/nordea-redirect/reducer'


export default combineReducers({
  firstReducer,
  sendCode
})