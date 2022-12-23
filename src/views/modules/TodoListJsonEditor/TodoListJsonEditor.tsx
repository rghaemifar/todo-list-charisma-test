import { ChangeEvent, FunctionComponent, useContext, useEffect, useState } from 'react'
import { TodoListContext } from '../../../contexts/TodoListContext'
import useEventListener from '../../../hooks/useEventListener'
import Text from '../../components/Text'

interface ITodoListJsonEditorProps {}

const TodoListJsonEditor: FunctionComponent<ITodoListJsonEditorProps> = () => {
  const { state, actions, dispatch } = useContext(TodoListContext)
  const { todoList } = state
  const [prettifiedJson, setPrettifiedJson] = useState('')
  const [invalidJsonError, setInvalidJsonError] = useState(false)

  const changeValue = (value: string) => {
    setInvalidJsonError(false)
    setPrettifiedJson(value)
  }

  const handleChangeJson = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value
    changeValue(value)
  }

  const applyOnTodoList = async () => {
    try {
      const list = await JSON.parse(prettifiedJson)
      actions.changeList(list)(dispatch)
    } catch (err) {
      setInvalidJsonError(true)
      console.error('Invalid JSON')
    }
  }

  const updatePrettifiedJson = async () => {
    const newValue = await JSON.stringify(todoList, null, 2)
    changeValue(newValue)
  }

  const onKeyPress = (e: any) => {
    if (!(e.code.includes('Enter') && e.ctrlKey)) return
    applyOnTodoList()
  }
  useEventListener('keypress', onKeyPress)

  useEffect(() => {
    updatePrettifiedJson()
  }, [todoList])

  const textareaStyle = `
  w-full h-96 outline-none border-2 border-grey-500 
  focus:border-grey-800 dark:bg-primary 
  dark:border-grey-400 dark:focus:border-grey-200 
  dark:text-grey-200 rounded p-2`

  return (
    <div>
      {/* @monaco-editor/react would be preferred */}
      <textarea
        className={textareaStyle}
        value={prettifiedJson}
        onChange={handleChangeJson}
        spellCheck={false}
      />
      <div className='flex gap-2'>
        <Text className='text-sm font-normal'>
          Apply json by{' '}
          <span className='bg-grey-200 dark:bg-grey-700 py-1 px-2 rounded'>Ctrl + Enter</span>
        </Text>
        {invalidJsonError && (
          <Text className='text-red-600 dark:text-red-600 text-sm font-bold'>Invalid JSON</Text>
        )}
      </div>
    </div>
  )
}

export default TodoListJsonEditor
