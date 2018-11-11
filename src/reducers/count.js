import initialState from '../state'
import { INCREMENT, DECREMENT } from '../actions/types';


function count(state = initialState.count, action) {
  switch (action.type) {
    case INCREMENT:
      return state + 1
    case DECREMENT:
      return state - 1
    default:
      return state;
  }
}

export default count