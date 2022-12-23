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
import Button from '../../components/Button'

interface ITodoListTemplateProps {}

const TodoListTemplate: FunctionComponent<ITodoListTemplateProps> = () => {
  const [todoListState, todoListDispatch] = useReducer(todoListReducer, todoListInitialState)
  const hasTodoList = Boolean(todoListState.todoList.length)

  const handleClear = () => {
    todoListActions.clear()(todoListDispatch)
  }

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
        {hasTodoList && <Button onClick={handleClear}>Clear list</Button>}
      </TodoListContext.Provider>
    </Container>
  )
}

export default TodoListTemplate
