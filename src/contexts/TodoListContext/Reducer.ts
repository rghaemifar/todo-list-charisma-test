import { createContext } from 'react'
import { v4 as uuidv4 } from 'uuid'
import * as types from './types'
import * as constants from './constants'
import * as todoListActions from './Action'
import {
  getToLocalStorage,
  removeFromLocalStorage,
  setToLocalStorage,
} from '../../utils/localStorage'

export const todoListInitialState: types.todoListStateTypes = {
  todoList: [],
}

export const todoListReducer = (
  state: types.todoListStateTypes = todoListInitialState,
  action: types.todoListActionsTypes,
): any => {
  const { type } = action
  switch (type) {
    case constants.ADD: {
      const { text } = action.payload
      const prevTodoList = Array.from(state.todoList)
      const newTask: types.TaskType = {
        text,
        id: prevTodoList.length.toString(),
        uuid: uuidv4(),
        createdDate: new Date(),
      }
      const todoList = [...prevTodoList, newTask]
      setToLocalStorage(constants.TODO_LIST_KEY, todoList)
      return { ...state, todoList }
    }
    case constants.REMOVE: {
      const { id } = action.payload
      const prevTodoList = Array.from(state.todoList)
      const todoList = prevTodoList.filter((task) => task.id !== id)
      setToLocalStorage(constants.TODO_LIST_KEY, todoList)
      return { ...state, todoList }
    }
    case constants.CLEAR: {
      removeFromLocalStorage(constants.TODO_LIST_KEY)
      return { ...state, todoList: [] }
    }
    case constants.LOAD_FROM_LS: {
      const todoList = getToLocalStorage(constants.TODO_LIST_KEY) || []
      return { ...state, todoList }
    }
    case constants.REPLACE: {
      const { source, destination } = action.payload
      const tempList = Array.from(state.todoList)
      const [removed] = tempList.splice(source, 1)
      tempList.splice(destination, 0, removed)
      const todoList = tempList.map((task, i) => ({ ...task, id: i.toString() }))
      setToLocalStorage(constants.TODO_LIST_KEY, todoList)
      return { ...state, todoList }
    }

    default:
      return state
  }
}

const TodoListContext = createContext({
  state: todoListInitialState,
  dispatch: {} as types.todoListDispatchType,
  actions: todoListActions,
})
export default TodoListContext
