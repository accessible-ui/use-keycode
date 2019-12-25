import {MutableRefObject, useRef} from 'react'
import useLayoutEffect from '@react-hook/passive-layout-effect'

const useKeycode = (
  which: number,
  callback: (event?: KeyboardEvent) => any
): MutableRefObject<any> => {
  const ref = useRef<any>(null)

  useLayoutEffect(() => {
    const current = ref.current

    if (current) {
      const maybeCallback = (event): void => {
        parseInt(event.which) === which && callback(event)
      }
      current.addEventListener('keyup', maybeCallback)

      return (): void => {
        current.removeEventListener('keyup', maybeCallback)
      }
    }
  }, [ref.current, callback, which])

  return ref
}

export default useKeycode
