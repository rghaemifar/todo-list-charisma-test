import { FunctionComponent } from 'react'
import Text from '../../components/Text'
import Container from '../../layouts/Container'
import AddTaskToList from '../../modules/AddTaskToList'

interface ITodoListTemplateProps {}

const TodoListTemplate: FunctionComponent<ITodoListTemplateProps> = () => {
  return (
    <Container>
      <Text component='h3' className='text-2xl font-semibold pt-10 mb-10'>
        Note now, do later =)
      </Text>
      <AddTaskToList />
    </Container>
  )
}

export default TodoListTemplate
