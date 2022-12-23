import { useEffect, useState } from 'react'
import { WindowSizeReturnType } from '../types/windowSIze'

function screenType(width: number): WindowSizeReturnType {
  if (!width) return { mobile: true, tablet: false, desktop: false }
  return {
    mobile: width <= 479,
    tablet: width > 479 && width <= 976,
    desktop: width > 976,
  }
}

export function useDiscriptiveWindowSize(): WindowSizeReturnType {
  const [mobile, setMobile] = useState<any>(screenType(0).mobile)
  const [tablet, setTablet] = useState<any>(screenType(0).tablet)
  const [desktop, setDesktop] = useState<any>(screenType(0).tablet)

  const handleResize = () => {
    const sizes = screenType(window.innerWidth)
    setMobile(sizes.mobile)
    setTablet(sizes.tablet)
    setDesktop(sizes.desktop)
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize)

      // Call handler right away so state gets updated with initial window size
      handleResize()

      // Remove event listener on cleanup
      return () => window.removeEventListener('resize', handleResize)
    }
  }, [])
  return { mobile, tablet, desktop }
}
