import initialState from '../state'
import { INCREMENT, DECREMENT } from '../actions/types';

function count(state = initialState.count, action) {
  switch (action.type) {
    case INCREMENT:
      return { 
        number: state.number + 1
      }
    case DECREMENT:
      return { 
        number: state.number - 1
      }
    default:
      return state
  }
}

export default count