import { FunctionComponent, useRef } from 'react'
import useEventListener from '../../../hooks/useEventListener'
import Button from '../Button'
import TextField from '../TextField'

interface INewTextProps {
  name: string
  onSubmit: (value: string) => void
  placeholder?: string
  label?: string
}

const NewText: FunctionComponent<INewTextProps> = (props) => {
  const { name, onSubmit, placeholder = 'Type here..', label = 'Submit' } = props
  const textFieldRef = useRef<HTMLInputElement>(null)

  const resetTextField = () => {
    if (textFieldRef.current) textFieldRef.current.value = ''
  }

  const handleSubmit = () => {
    const value = textFieldRef.current?.value
    onSubmit && onSubmit(value || '')
    resetTextField()
  }

  const onKeyPress = (e: any) => {
    if (!e.code.includes('Enter')) return
    handleSubmit()
  }
  useEventListener('keypress', onKeyPress)

  return (
    <div className='flex'>
      <TextField
        name={name}
        ref={textFieldRef}
        placeholder={placeholder}
        autoComplete='off'
        className='mr-3'
      />
      <Button onClick={handleSubmit}>{label}</Button>
    </div>
  )
}

export default NewText
