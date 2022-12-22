import { createContext } from 'react'
import * as types from './types'
import * as todoListActions from './Action'

export const todoListInitialState: types.todoListStateTypes = {
  todoList: [],
}

export const todoListReducer = (
  state: types.todoListStateTypes = todoListInitialState,
  action: types.todoListActionsTypes,
): any => {
  const { type, payload } = action
  switch (type) {
    case types.ADD: {
      const { text } = payload
      const prevTodoList = state.todoList
      const newTask = {
        id: prevTodoList.length,
        text,
        order: prevTodoList.length,
        createdAt: new Date(),
      }
      const todoList = [...prevTodoList, newTask]
      return { ...state, todoList }
    }
    case types.REMOVE: {
      const { id } = payload
      const prevTodoList = state.todoList
      const filteredTodoList = prevTodoList.filter((task) => task.id !== id)
      return { ...state, todoList: filteredTodoList }
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
