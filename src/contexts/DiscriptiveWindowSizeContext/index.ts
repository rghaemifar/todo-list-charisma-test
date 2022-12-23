import { createContext } from 'react'
import { WindowSizeReturnType } from '../../types/windowSIze'

const initialState: WindowSizeReturnType = {
  mobile: true,
  tablet: false,
  desktop: false,
}

export const DiscriptiveWindowSizeContext = createContext(initialState)
