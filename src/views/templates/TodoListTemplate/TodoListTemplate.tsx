import { FunctionComponent, useEffect, useReducer } from 'react'
import Text from '../../components/Text'
import Container from '../../layouts/Container'
import AddTaskToList from '../../modules/AddTaskToList'
import {
  TodoListContext,
  todoListInitialState,
  todoListReducer,
  todoListActions,
} from '../../../contexts/TodoListContext'
import TodoList from '../../modules/TodoList'

interface ITodoListTemplateProps {}

const TodoListTemplate: FunctionComponent<ITodoListTemplateProps> = () => {
  const [todoListState, todoListDispatch] = useReducer(todoListReducer, todoListInitialState)

  useEffect(() => {
    todoListActions.loadTodoListFromLS()(todoListDispatch)
  }, [])

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
        <TodoList />
      </TodoListContext.Provider>
    </Container>
  )
}

export default TodoListTemplate
