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

A React hook for handling specific keycodes with a callback on `keyup`

## Quick Start

```jsx harmony
import useKeycode from '@accessible/use-keycode'

const Component = () => {
  // logs event when escape key is pressed
  const ref = useKeycode(27, console.log)
  return <div ref={ref} />
}
```

## API

### `useKeycode(keyCode: number, callback: (event?: KeyboardEvent) => any)`

#### Arguments

| Argument | Type                             | Default     | Required? | Description                                                                        |
| -------- | -------------------------------- | ----------- | --------- | ---------------------------------------------------------------------------------- |
| keyCode  | number                           | `undefined` | Yes       | The keyCode you want to trigger the callback                                       |
| callback | `(event?: KeyboardEvent) => any` | `undefined` | Yes       | The callback you want to trigger when the keyCode matches the latest `keyUp` event |

#### Returns `MutableRefObject<any>`

## LICENSE

MIT
