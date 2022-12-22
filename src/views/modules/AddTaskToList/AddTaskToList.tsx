import { FunctionComponent, useContext } from 'react'
import { TodoListContext } from '../../../contexts/TodoListContext'
import NewText from '../../components/NewText'

interface IAddTaskToListProps {}

const AddTaskToList: FunctionComponent<IAddTaskToListProps> = () => {
  const { actions, dispatch } = useContext(TodoListContext)

  const handleNewTask = (task: string) => {
    if (!task) return
    actions.add(task)(dispatch)
  }
  return <NewText name='new-task' onSubmit={handleNewTask} />
}

export default AddTaskToList
