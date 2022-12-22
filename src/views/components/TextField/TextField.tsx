import { FunctionComponent, InputHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

interface ITextFieldProps extends InputHTMLAttributes<Element> {
  className?: string
  label?: string
}

const TextField: FunctionComponent<ITextFieldProps> = (props) => {
  const { type = 'text', name, value = '', className, ...otherProps } = props

  const defaultStyle = `outline-none border-2 rounded px-3 
    py-1 transition duration-200 w-full 
    border-grey-500 focus:border-grey-800 
    dark:bg-primary dark:border-grey-400 
    dark:focus:border-grey-200 dark:text-grey-200`

  return (
    <input
      className={twMerge(defaultStyle, className)}
      type={type}
      id={name}
      name={name}
      value={value}
      {...otherProps}
    />
  )
}

export default TextField
