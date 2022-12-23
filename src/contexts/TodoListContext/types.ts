import { Dispatch } from 'react'
import * as constants from './constants'

export type todoListActionsTypes =
  | {
      type: typeof constants.ADD
      payload: { text: string }
    }
  | {
      type: typeof constants.REMOVE
      payload: { id: string }
    }
  | {
      type: typeof constants.CLEAR
    }
  | {
      type: typeof constants.LOAD_FROM_LS
    }
  | {
      type: typeof constants.REPLACE
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
