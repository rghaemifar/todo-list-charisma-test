import { ChangeEvent, FunctionComponent, useState } from 'react'
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
  const [value, setValue] = useState<string>('')

  const resetTextField = () => {
    setValue('')
  }

  const handleSubmit = () => {
    onSubmit && onSubmit(value)
    resetTextField()
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
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
        placeholder={placeholder}
        autoComplete='off'
        value={value}
        onChange={handleChange}
        className='mr-3'
      />
      <Button onClick={handleSubmit} disabled={!value}>
        {label}
      </Button>
    </div>
  )
}

export default NewText
