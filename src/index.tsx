import {MutableRefObject, useRef} from 'react'
import useLayoutEffect from '@react-hook/passive-layout-effect'

const useKeycode = (
  keyCode: number,
  callback: (event?: KeyboardEvent) => any
): MutableRefObject<any> => {
  const ref = useRef<any>(null)

  useLayoutEffect(() => {
    const current = ref.current

    if (current) {
      const maybeCallback = (event): void => {
        parseInt(event.code) === keyCode && callback(event)
      }
      current.addEventListener('keyup', maybeCallback)

      return (): void => {
        current.removeEventListener('keyup', maybeCallback)
      }
    }
  }, [ref.current, callback])

  return ref
}

export default useKeycode
