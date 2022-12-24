import { FunctionComponent, useContext } from 'react'
import { TrashIcon, Bars3Icon } from '@heroicons/react/24/outline'
import { TaskType } from '../../../contexts/TodoListContext/types'
import Button from '../Button'
import Text from '../Text'
import Collapse from '../Collapse'
import { getDateWithTimeString } from '../../../utils/date'
import { DiscriptiveWindowSizeContext } from '../../../contexts/DiscriptiveWindowSizeContext'
import { DraggableProvidedDragHandleProps } from 'react-beautiful-dnd'
import { twMerge } from 'tailwind-merge'

interface ITaskProps extends TaskType {
  onRemove: (id: string) => void
  dragHandleProps?: DraggableProvidedDragHandleProps | null
}

const Task: FunctionComponent<ITaskProps> = (props) => {
  const { id, text, createdDate, onRemove, dragHandleProps } = props
  const { mobile } = useContext(DiscriptiveWindowSizeContext)
  const hasDndHandle = Boolean(dragHandleProps)
  const TEXT_MAX_LEN = mobile ? 100 : 190
  const createdAt = getDateWithTimeString(new Date(createdDate), true)

  const handleRemoveClick = () => {
    onRemove && onRemove(id)
  }

  return (
    <div
      className={twMerge(
        'flex justify-between items-center bg-grey-200 dark:bg-grey-700 rounded pl-5 py-3 pb-2',
        hasDndHandle ? 'pr-3' : 'pr-5',
      )}
    >
      <div>
        <Text className='font-medium'>
          {text.length > TEXT_MAX_LEN ? <Collapse>{text}</Collapse> : <>{text}</>}
        </Text>
        <Text className='mt-3 text-sm text-grey-600 dark:text-grey-400'>
          {createdDate ? createdAt : '-'}
        </Text>
      </div>
      <div className='flex self-start ml-4 md:ml-8 mt-2'>
        <Button iconBtn onClick={handleRemoveClick}>
          <TrashIcon width={20} className='text-white dark:text-primary' />
        </Button>
        {hasDndHandle && (
          <div {...dragHandleProps} className='p-2 ml-2'>
            <Bars3Icon width={20} className='text-grey-600 dark:text-grey-400' />
          </div>
        )}
      </div>
    </div>
  )
}

export default Task
