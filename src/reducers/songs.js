import initialState from '../state'
import { ADD_SONG } from '../actions/types';

function Songs(state = initialState.songs, action) {
  switch(action.type) {
    case ADD_SONG: 
      return [...state, action.payload]
    default:
      return state
  }
}

export default Songs