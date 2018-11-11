import { INCREMENT, DECREMENT } from './types'

export function onIncrement(){
  console.log("Incrementado")
  return {
    type: INCREMENT
  }
}

export function onDecrement() {
  console.log("Decreciendo")
  return {
    type: DECREMENT
  }
}