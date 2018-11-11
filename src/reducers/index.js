import { combineReducers } from 'redux'

// Reducers
import songs from './songs'
import count from './count'

const reducers = combineReducers({
  songs,
  count
})

export default reducers

