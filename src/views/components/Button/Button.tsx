import { createElement, ElementType, FunctionComponent, HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

interface IButtonProps extends HTMLAttributes<Element> {
  component?: ElementType
  iconBtn?: boolean
  disabled?: boolean
}

const Button: FunctionComponent<IButtonProps> = (props) => {
  const { component = 'button', className, iconBtn, ...otherProps } = props
  const { disabled } = otherProps

  const defaultStyle = twMerge(
    `
    bg-secondary px-6 py-2 dark:bg-grey-100 
    cursor-pointer rounded transition
    text-white dark:text-primary  
    font-medium
  `,
    disabled ? 'bg-grey-600 ' : '',
  )
  const iconBtnStyle = iconBtn ? `rounded-full px-2 py-2` : ''

  return createElement(component, {
    className: twMerge(defaultStyle, iconBtnStyle, className),
    ...otherProps,
  })
}

export default Button