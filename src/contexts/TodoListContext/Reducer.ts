import { createContext } from 'react'
import * as types from './types'
import * as todoListActions from './Action'

export const todoListInitialState: types.todoListStateTypes = {
  todoList: [],
}

const setToLocalStorage = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value))
}
const getToLocalStorage = (key: string) => {
  const value = localStorage.getItem(key)
  return typeof value === 'string' ? JSON.parse(value) : null
}

export const todoListReducer = (
  state: types.todoListStateTypes = todoListInitialState,
  action: types.todoListActionsTypes,
): any => {
  const { type } = action
  switch (type) {
    case types.ADD: {
      const { text } = action.payload
      const prevTodoList = state.todoList
      const newTask = {
        id: prevTodoList.length,
        text,
        order: prevTodoList.length,
        createdAt: new Date(),
      }
      const todoList = [...prevTodoList, newTask]
      setToLocalStorage('todoList', todoList)
      return { ...state, todoList }
    }
    case types.REMOVE: {
      const { id } = action.payload
      const prevTodoList = state.todoList
      const todoList = prevTodoList.filter((task) => task.id !== id)
      setToLocalStorage('todoList', todoList)
      return { ...state, todoList }
    }
    case types.LOAD_FROM_LS: {
      const todoList = getToLocalStorage('todoList') || []
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
