<hr>
<div align="center">
  <h1 align="center">
    useKeycode()
  </h1>
</div>

<p align="center">
  <a href="https://bundlephobia.com/result?p=@accessible/use-keycode">
    <img alt="Bundlephobia" src="https://img.shields.io/bundlephobia/minzip/@accessible/use-keycode?style=for-the-badge&labelColor=24292e">
  </a>
  <a aria-label="Code coverage report" href="https://codecov.io/gh/accessible-ui/use-keycode">
    <img alt="Code coverage" src="https://img.shields.io/codecov/c/gh/accessible-ui/use-keycode?style=for-the-badge&labelColor=24292e">
  </a>
  <a aria-label="Build status" href="https://travis-ci.org/accessible-ui/use-keycode">
    <img alt="Build status" src="https://img.shields.io/travis/accessible-ui/use-keycode?style=for-the-badge&labelColor=24292e">
  </a>
  <a aria-label="NPM version" href="https://www.npmjs.com/package/@accessible/use-keycode">
    <img alt="NPM Version" src="https://img.shields.io/npm/v/@accessible/use-keycode?style=for-the-badge&labelColor=24292e">
  </a>
  <a aria-label="License" href="https://jaredlunde.mit-license.org/">
    <img alt="MIT License" src="https://img.shields.io/npm/l/@accessible/use-keycode?style=for-the-badge&labelColor=24292e">
  </a>
</p>

<pre align="center">npm i @accessible/use-keycode</pre>
<hr>

A React hook for handling specific key codes with a callback on `keydown`

## Quick Start

```jsx harmony
import {useKeycode, useKeycodes} from '@accessible/use-keycode'
// one keycode
const Component = () => {
  // logs event when escape key is pressed
  const ref = useKeycode(27, console.log)
  return <div ref={ref} />
}
// several keycodes
const Component = () => {
  // logs event when escape or enter key is pressed
  const ref = useKeycodes({27: console.log, 13: console.log})
  return <div ref={ref} />
}
```

## API

### `useKeycode(which: number, callback: (event?: KeyboardEvent) => any)`

#### Arguments

| Argument | Type                             | Default     | Required? | Description                                                                              |
| -------- | -------------------------------- | ----------- | --------- | ---------------------------------------------------------------------------------------- |
| `which`  | number                           | `undefined` | Yes       | The `event.which` you want to trigger the callback                                       |
| callback | `(event?: KeyboardEvent) => any` | `undefined` | Yes       | The callback you want to trigger when the `event.which` matches the latest `keyUp` event |

#### Returns `React.MutableRefObject<any>`

### `useKeycodes(handlers: Record<number, (event?: KeyboardEvent) => any>)`

#### Arguments

| Argument   | Type                                             | Default     | Required? | Description                                                                           |
| ---------- | ------------------------------------------------ | ----------- | --------- | ------------------------------------------------------------------------------------- |
| `handlers` | `Record<number, (event?: KeyboardEvent) => any>` | `undefined` | Yes       | An object with keys matching the `event.which` you want to trigger the callback value |

#### Returns `React.MutableRefObject<any>`

## LICENSE

MIT
