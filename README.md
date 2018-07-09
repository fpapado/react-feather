## React Feather Icons

[![npm](https://img.shields.io/npm/v/@fpapado/react-feather.svg)](https://www.npmjs.com/package/@fpapado/react-feather)

Fork of [react-feather](https://github.com/carmelopullara/react-feather) with `microbundle` as the build step, and ES modules in the distribution.

> Simply beautiful SVG icons as React components.
> Designed by [colebemis](https://github.com/colebemis/) on a 24x24 grid with an emphasis on functionality, consistency and simplicity.

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
  <Camera color="red" size={48} />
```

### Why would I use this?
- `react-feather` requires path imports for bundle savings. That results in more verbose imports, and exposes distribution details. Imo, those should be opaque.
- I have not had much luck using such imports with Typescript.
- `react-feather` includes propTypes, which I do not need.

### Why would I not use this?
- You are fine with full-path imports and / or your setup supports them.
- You are using CommonJS as the authoring format and want bundle-savings via full paths; this fork does not support that.
- NPM download count is important to you.

