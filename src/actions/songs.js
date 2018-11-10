import { ADD_SONG } from './types'

export function Songs(singing){
  return {
    type: ADD_SONG,
    payload: {
      title: singing
    }
  }
}