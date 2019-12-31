import {MutableRefObject, useRef} from 'react'
import useLayoutEffect from '@react-hook/passive-layout-effect'

export const useKeycode = (
  which: number,
  callback: (event?: KeyboardEvent) => any
): MutableRefObject<any> => useKeycodes({[which]: callback}, [which, callback])

export const useKeycodes = (
  handlers: Record<number, (event: KeyboardEvent) => any>,
  dependencies?: any[]
): MutableRefObject<any> => {
  const ref = useRef<any>(null)

  useLayoutEffect(
    () => {
      const current = ref.current

      if (current) {
        const maybeCallback = (event: KeyboardEvent): void => {
          handlers[event.which]?.(event)
        }
        current.addEventListener('keydown', maybeCallback)

        return (): void => {
          current.removeEventListener('keydown', maybeCallback)
        }
      }
    },
    dependencies ? [ref.current].concat(dependencies) : void 0
  )

  return ref
}

export default useKeycode
