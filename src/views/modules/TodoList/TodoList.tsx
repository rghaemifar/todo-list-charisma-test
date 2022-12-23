import { useContext } from 'react'
import { DiscriptiveWindowSizeContext } from '../../../contexts/DiscriptiveWindowSizeContext'
import { TodoListContext } from '../../../contexts/TodoListContext'
import { useDiscriptiveWindowSize } from '../../../hooks/useDiscriptiveWindowSize'
import Task from '../../components/Task/Task'

const TodoList = () => {
  const { state, actions, dispatch } = useContext(TodoListContext)
  const discriptiveWindowSize = useDiscriptiveWindowSize()

  const handleRemoveTask = (id: string) => {
    actions.remove(id)(dispatch)
  }

  return (
    <DiscriptiveWindowSizeContext.Provider value={discriptiveWindowSize}>
      <div>
        {state.todoList?.map((task) => (
          <Task {...task} key={task.id} onRemove={handleRemoveTask} />
        ))}
      </div>
    </DiscriptiveWindowSizeContext.Provider>
  )
}

export default TodoList
