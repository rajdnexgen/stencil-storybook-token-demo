# dstny-button



<!-- Auto Generated Below -->


## Properties

| Property          | Attribute          | Description             | Type                              | Default     |
| ----------------- | ------------------ | ----------------------- | --------------------------------- | ----------- |
| `backgroundColor` | `background-color` |                         | `"dark" \| "light" \| "primary"`  | `'light'`   |
| `disabled`        | `disabled`         |                         | `boolean`                         | `false`     |
| `label`           | `label`            |                         | `string`                          | `undefined` |
| `size`            | `size`             |                         | `"large" \| "small"`              | `'large'`   |
| `type`            | `type`             | The type of the button. | `"button" \| "reset" \| "submit"` | `'button'`  |
| `variant`         | `variant`          |                         | `string`                          | `undefined` |


## Events

| Event           | Description                          | Type                |
| --------------- | ------------------------------------ | ------------------- |
| `buttonClicked` |                                      | `CustomEvent<any>`  |
| `dstnyBlur`     | Emitted when the button loses focus. | `CustomEvent<void>` |
| `dstnyFocus`    | Emitted when the button has focus.   | `CustomEvent<void>` |


## Methods

### `setFocus() => Promise<void>`

Function to focus the Dstny Button.

#### Returns

Type: `Promise<void>`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
