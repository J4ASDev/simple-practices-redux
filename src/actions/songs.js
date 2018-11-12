import { ADD_SONG } from './types'

export function addSongs(singing){
  return {
    type: ADD_SONG,
    payload: {
      title: singing
    }
  }
}