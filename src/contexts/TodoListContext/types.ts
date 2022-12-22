import { Dispatch } from 'react'

export const ADD = 'ADD'
export const REMOVE = 'REMOVE'

export type todoListActionsTypes =
  | {
      type: 'ADD'
      payload: { text: string }
    }
  | {
      type: 'REMOVE'
      payload: { id: string }
    }

type TaskType = {
  id: string
  text: string
  order: number
  createdAt: Date
}

export type todoListStateTypes = {
  todoList: TaskType[]
}

export type todoListDispatchType = Dispatch<todoListActionsTypes>
