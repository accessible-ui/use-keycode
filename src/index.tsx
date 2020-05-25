import {MutableRefObject, useRef} from 'react'
import useLayoutEffect from '@react-hook/passive-layout-effect'

export const useKeycode = (
  which: number,
  callback: (event?: KeyboardEvent) => any
): MutableRefObject<any> => useKeycodes({[which]: callback})

export const useKeycodes = (
  handlers: Record<number, (event: KeyboardEvent) => any>
): MutableRefObject<any> => {
  const ref = useRef<any>(null)
  const storedHandlers = useRef(handlers)
  storedHandlers.current = handlers

  useLayoutEffect(() => {
    const current = ref.current

    if (current) {
      const maybeCallback = (event: KeyboardEvent): void => {
        storedHandlers.current[event.which]?.(event)
      }

      current.addEventListener('keydown', maybeCallback)
      return (): void => {
        current.removeEventListener('keydown', maybeCallback)
      }
    }
  }, [ref])

  return ref
}

export default useKeycode
