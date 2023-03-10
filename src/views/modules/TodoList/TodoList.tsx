import { useContext } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { DiscriptiveWindowSizeContext } from '../../../contexts/DiscriptiveWindowSizeContext'
import { TodoListContext } from '../../../contexts/TodoListContext'
import { useDiscriptiveWindowSize } from '../../../hooks/useDiscriptiveWindowSize'
import Task from '../../components/Task/Task'

const TodoList = () => {
  const { state, actions, dispatch } = useContext(TodoListContext)
  const { todoList } = state
  const discriptiveWindowSize = useDiscriptiveWindowSize()

  const handleRemoveTask = (id: string) => {
    actions.remove(id)(dispatch)
  }

  const handleDragEnd = (result: any) => {
    actions.replace(result.source?.index, result.destination?.index)(dispatch)
  }

  if (!todoList.length) return <></>
  return (
    <DiscriptiveWindowSizeContext.Provider value={discriptiveWindowSize}>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId='droppable'>
          {(provided) => (
            <>
              <div {...provided.droppableProps} ref={provided.innerRef} className='py-5'>
                {todoList.map((task, index) => (
                  <Draggable key={task.uuid} draggableId={task.uuid} index={index}>
                    {(provided) => (
                      <div ref={provided.innerRef} {...provided.draggableProps} className='pt-3'>
                        <Task
                          {...task}
                          onRemove={handleRemoveTask}
                          dragHandleProps={provided.dragHandleProps}
                        />
                      </div>
                    )}
                  </Draggable>
                ))}
              </div>
              {provided.placeholder}
            </>
          )}
        </Droppable>
      </DragDropContext>
    </DiscriptiveWindowSizeContext.Provider>
  )
}

export default TodoList
