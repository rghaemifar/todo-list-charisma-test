import { FunctionComponent, useContext } from 'react'
import { TrashIcon } from '@heroicons/react/24/outline'
import { TaskType } from '../../../contexts/TodoListContext/types'
import Button from '../Button'
import Text from '../Text'
import Collapse from '../Collapse'
import { getDateWithTimeString } from '../../../utils/date'
import { DiscriptiveWindowSizeContext } from '../../../contexts/DiscriptiveWindowSizeContext'

interface ITaskProps extends TaskType {
  onRemove: (id: string) => void
}

const Task: FunctionComponent<ITaskProps> = (props) => {
  const { id, text, createdDate, onRemove } = props
  const { mobile } = useContext(DiscriptiveWindowSizeContext)
  const TEXT_MAX_LEN = mobile ? 100 : 190

  const createdAt = getDateWithTimeString(new Date(createdDate), true)

  const handleRemoveClick = () => {
    onRemove && onRemove(id)
  }

  return (
    <div className='flex justify-between items-center bg-grey-200 dark:bg-grey-700 rounded px-5 py-3 pb-2 mt-3'>
      <div>
        <Text className='font-medium'>
          {text.length > TEXT_MAX_LEN ? <Collapse>{text}</Collapse> : <>{text}</>}
        </Text>
        <Text className='mt-3 text-sm text-grey-600 dark:text-grey-400'>{createdAt}</Text>
      </div>
      <div className='flex self-start ml-4 md:ml-8 mt-2'>
        <Button iconBtn onClick={handleRemoveClick}>
          <TrashIcon width={22} className='text-white dark:text-primary' />
        </Button>
      </div>
    </div>
  )
}

export default Task
