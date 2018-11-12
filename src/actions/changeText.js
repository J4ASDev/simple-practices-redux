import { CHANGE_TEXT_TRUE, CHANGE_TEXT_FALSE } from "./types";

export function changeTextTrue() {
  console.log('True Action')
  return {
    type: CHANGE_TEXT_TRUE
  }
}

export function changeTextFalse() {
  console.log('False Action')
  return {
    type: CHANGE_TEXT_FALSE
  }
}