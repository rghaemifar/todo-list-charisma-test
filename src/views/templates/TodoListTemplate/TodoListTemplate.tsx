import { FunctionComponent, useReducer } from 'react'
import Text from '../../components/Text'
import Container from '../../layouts/Container'
import AddTaskToList from '../../modules/AddTaskToList'
import {
  TodoListContext,
  todoListInitialState,
  todoListReducer,
  todoListActions,
} from '../../../contexts/TodoListContext'

interface ITodoListTemplateProps {}

const TodoListTemplate: FunctionComponent<ITodoListTemplateProps> = () => {
  const [todoListState, todoListDispatch] = useReducer(todoListReducer, todoListInitialState)

  return (
    <Container>
      <Text component='h3' className='text-2xl font-semibold pt-10 mb-10'>
        Note now, do later =)
      </Text>
      <TodoListContext.Provider
        value={{
          state: todoListState,
          dispatch: todoListDispatch,
          actions: todoListActions,
        }}
      >
        <AddTaskToList />
      </TodoListContext.Provider>
      {todoListState.todoList?.map((task: any) => (
        <button
          className='mx-4'
          key={task.id}
          onClick={() => todoListActions.remove(task.id)(todoListDispatch)}
        >
          {task.text}
        </button>
      ))}
    </Container>
  )
}

export default TodoListTemplate
