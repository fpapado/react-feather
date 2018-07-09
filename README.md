## React Feather Icons

[![npm](https://img.shields.io/npm/v/@fpapado/react-feather.svg)](https://www.npmjs.com/package/@fpapado/react-feather)

Fork of [react-feather](https://github.com/carmelopullara/react-feather) with `microbundle` as the build step.

> Simply beautiful SVG icons as React components.

Designed by [colebemis](https://github.com/colebemis/) on a 24x24 grid with an emphasis on functionality, consistency and simplicity.

### Installation
```shell
npm install @fpapado/react-feather
```

### Usage

ES module imports should get tree-shaken correctly by bundlers.
This means that you ship only the icons used.

```javascript
import { Camera } from 'react-feather';

class MyClass extends React.Component {
  render() {
    return <Camera />
  }
}
```

Icons can be configured with props:
```javascript
  <Icon.AlertCircle color="red" size={48} />
```
