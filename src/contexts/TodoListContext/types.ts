import { Dispatch } from 'react'

export const ADD = 'ADD'
export const REMOVE = 'REMOVE'
export const LOAD_FROM_LS = 'LOAD_FROM_LS'
export const REPLACE = 'REPLACE'

export type todoListActionsTypes =
  | {
      type: typeof ADD
      payload: { text: string }
    }
  | {
      type: typeof REMOVE
      payload: { id: string }
    }
  | {
      type: typeof LOAD_FROM_LS
    }
  | {
      type: typeof REPLACE
      payload: { source: number; destination: number }
    }

export type TaskType = {
  uuid: string
  id: string
  text: string
  createdDate: Date
}

export type todoListStateTypes = {
  todoList: TaskType[]
}

export type todoListDispatchType = Dispatch<todoListActionsTypes>
