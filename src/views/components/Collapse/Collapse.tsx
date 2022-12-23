import { FunctionComponent, HTMLAttributes, useState } from 'react'
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/24/outline'
import { twMerge } from 'tailwind-merge'

interface IOneWayCollapseProps extends HTMLAttributes<Element> {
  className?: string
}

const icons = {
  chevronUp: () => <ChevronUpIcon width={16} />,
  chevronDown: () => <ChevronDownIcon width={16} />,
}

const Collapse: FunctionComponent<IOneWayCollapseProps> = ({ children }) => {
  const [open, setOpen] = useState(false)
  const toggle = () => setOpen((prev) => !prev)

  return (
    <div>
      <div className={open ? '' : 'max-h-12 overflow-hidden'}>{children}</div>
      <div className='flex items-center content-center'>
        <div className='flex items-center py-2 px-1 cursor-pointer' onClick={toggle}>
          <div className='mr-1 text-sm text-grey-500 dark:text-grey-400 dark:text-grey-200'>
            {open ? 'less' : 'more'}
          </div>
          {icons[open ? 'chevronUp' : 'chevronDown']?.()}
        </div>
      </div>
    </div>
  )
}

export default Collapse
