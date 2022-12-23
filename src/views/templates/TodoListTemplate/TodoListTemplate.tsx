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
import TodoListJsonEditor from '../../modules/TodoListJsonEditor'

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
    <Container className='py-8 relative'>
      <Text component='h3' className='text-2xl font-semibold mb-3'>
        Note now, do later =)
      </Text>
      <TodoListContext.Provider
        value={{
          state: todoListState,
          dispatch: todoListDispatch,
          actions: todoListActions,
        }}
      >
        <div className='sticky top-0 py-5 bg-white dark:bg-primary'>
          <AddTaskToList />
        </div>
        <TodoList />
        {hasTodoList && <Button onClick={handleClear}>Clear list</Button>}
        <div className='mt-8'>
          <TodoListJsonEditor />
        </div>
      </TodoListContext.Provider>
    </Container>
  )
}

export default TodoListTemplate
