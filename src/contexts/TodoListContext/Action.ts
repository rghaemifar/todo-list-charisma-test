import * as types from './types'
import * as constants from './constants'

export const add = (text: string) => (dispatch: types.todoListDispatchType) => {
  return dispatch({ type: constants.ADD, payload: { text } })
}

export const remove = (id: string) => (dispatch: types.todoListDispatchType) => {
  return dispatch({ type: constants.REMOVE, payload: { id } })
}

export const clear = () => (dispatch: types.todoListDispatchType) => {
  return dispatch({ type: constants.CLEAR })
}

export const loadTodoListFromLS = () => (dispatch: types.todoListDispatchType) => {
  return dispatch({ type: constants.LOAD_FROM_LS })
}

export const replace =
  (source: number, destination: number) => (dispatch: types.todoListDispatchType) => {
    return dispatch({ type: constants.REPLACE, payload: { source, destination } })
  }

export const changeList = (list: types.TaskType[]) => (dispatch: types.todoListDispatchType) => {
  return dispatch({ type: constants.CHANGE_LIST, payload: { list } })
}
