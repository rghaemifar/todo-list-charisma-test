import { FunctionComponent } from 'react'
import NewText from '../../components/NewText'

interface IAddTaskToListProps {}

const AddTaskToList: FunctionComponent<IAddTaskToListProps> = () => {
  const handleNewTask = (task: string) => {
    console.log(task)
  }
  return <NewText name='new-task' onSubmit={handleNewTask} />
}

export default AddTaskToList
