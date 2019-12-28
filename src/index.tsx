import {MutableRefObject, useMemo, useRef} from 'react'
import useLayoutEffect from '@react-hook/passive-layout-effect'

export const useKeycode = (
  which: number,
  callback: (event?: KeyboardEvent) => any
): MutableRefObject<any> =>
  useKeycodes(useMemo(() => ({[which]: callback}), [which, callback]))

export const useKeycodes = (
  handlers: Record<number, (event?: KeyboardEvent) => any>
): MutableRefObject<any> => {
  const ref = useRef<any>(null)

  useLayoutEffect(() => {
    const current = ref.current

    if (current) {
      const maybeCallback = (event): void => {
        handlers[parseInt(event.which)]?.(event)
      }
      current.addEventListener('keydown', maybeCallback)

      return (): void => {
        current.removeEventListener('keydown', maybeCallback)
      }
    }
  }, [ref.current, handlers])

  return ref
}

export default useKeycode
