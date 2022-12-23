import * as types from './types'

export const add = (text: string) => (dispatch: types.todoListDispatchType) => {
  return dispatch({ type: types.ADD, payload: { text } })
}

export const remove = (id: string) => (dispatch: types.todoListDispatchType) => {
  return dispatch({ type: types.REMOVE, payload: { id } })
}

export const loadTodoListFromLS = () => (dispatch: types.todoListDispatchType) => {
  return dispatch({ type: types.LOAD_FROM_LS })
}

export const replace =
  (source: number, destination: number) => (dispatch: types.todoListDispatchType) => {
    return dispatch({ type: types.REPLACE, payload: { source, destination } })
  }
