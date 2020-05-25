import * as React from 'react'
import useEvent from '@react-hook/event'

export const useKeycode = (
  which: number,
  onKeyDown: (event?: KeyboardEvent) => any
): React.MutableRefObject<any> => useKeycodes({[which]: onKeyDown})

export const useKeycodes = (
  listeners: Record<number, (event: KeyboardEvent) => any>
): React.MutableRefObject<any> => {
  const ref = React.useRef<any>(null)

  useEvent(ref, 'keydown', (event): void => {
    listeners[event.which]?.(event)
  })

  return ref
}

export default useKeycode
