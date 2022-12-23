import { FunctionComponent, HTMLAttributes, ReactNode } from 'react'
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline'
import useTheme from '../../hooks/useTheme'
import Button from '../../views/components/Button'

interface IThemeWrapperProps extends HTMLAttributes<Element> {
  children?: ReactNode
}

const themeIcons = {
  light: () => <MoonIcon width={36} className='text-white' />,
  dark: () => <SunIcon width={36} className='dark:text-primary' />,
}

const ThemeWrapper: FunctionComponent<IThemeWrapperProps> = (props) => {
  const { children } = props
  const { theme, toggleTheme } = useTheme()

  return (
    <div className='dark:bg-primary transition min-h-screen'>
      {children}
      <Button iconBtn onClick={toggleTheme} className='fixed bottom-5 right-5 shadow-2xl'>
        {themeIcons[theme]()}
      </Button>
    </div>
  )
}

export default ThemeWrapper
