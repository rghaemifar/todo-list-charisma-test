import { useEffect, useRef } from 'react'

const useEventListener = (
  eventName: string,
  handler: (...args: any[]) => void,
  element?: HTMLElement,
): void => {
  const savedHandler = useRef<any>()

  useEffect(() => {
    savedHandler.current = handler
  }, [handler])

  useEffect(() => {
    if (typeof window === 'undefined') return

    const node = element || window
    const isSupported = node.addEventListener
    if (!isSupported) return

    const eventListener = (event: any) => savedHandler.current(event)
    node.addEventListener(eventName, eventListener)

    return () => {
      node.removeEventListener(eventName, eventListener)
    }
  }, [eventName, element])
}

export default useEventListener
