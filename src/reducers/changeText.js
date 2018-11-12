import initialState from '../state'
import { CHANGE_TEXT_TRUE, CHANGE_TEXT_FALSE } from '../actions/types'

function changeText(state = initialState.changeText, action) {
  switch (action.type) {
    case CHANGE_TEXT_TRUE:
      return true
    case CHANGE_TEXT_FALSE:
      return false
    default:
      return state
  }
}

export default changeText