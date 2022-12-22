import * as types from './types'

export const add = (text: string) => (dispatch: types.todoListDispatchType) => {
  return dispatch({ type: types.ADD, payload: { text } })
}

export const remove = (id: string) => (dispatch: types.todoListDispatchType) => {
  return dispatch({ type: types.REMOVE, payload: { id } })
}
