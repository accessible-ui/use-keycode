import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import useKeycode from './index'

describe('useKeycode()', () => {
  it('should call function when keycode matches', () => {
    const mock = jest.fn()

    const Component = () => {
      const ref = useKeycode(27, mock)
      return <button data-testid="btn" ref={ref} />
    }

    const result = render(<Component />)
    fireEvent.keyUp(result.getByTestId('btn'), {key: 'Escape', which: 27})
    expect(mock).toBeCalled()
  })

  it('should not call function when keycode does not match', () => {
    const mock = jest.fn()

    const Component = () => {
      const ref = useKeycode(27, mock)
      return <button data-testid="btn" ref={ref} />
    }

    const result = render(<Component />)
    fireEvent.keyUp(result.getByTestId('btn'), {key: 'Escape', which: 24})
    expect(mock).not.toBeCalled()
  })
})
