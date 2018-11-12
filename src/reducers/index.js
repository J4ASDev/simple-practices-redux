import { combineReducers } from 'redux'

// Reducers
import songs from './songs'
import count from './count'
import changeText from './changeText'

const reducers = combineReducers({
  songs,
  count,
  changeText
})

export default reducers

