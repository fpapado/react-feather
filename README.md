## React Feather Icons

[![npm](https://img.shields.io/npm/v/@fpapado/react-feather.svg)](https://www.npmjs.com/package/@fpapado/react-feather)

Fork of [react-feather](https://github.com/carmelopullara/react-feather) with `microbundle` as the build step, and ES modules in the distribution.
Also has accessible defaults.

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

const MyComponent = () => (
  <div>
    <span>Photos</span>
    <Camera purpose="decorative"/>
  </div>
)
```

Icons can be configured with props:
```javascript
  <Camera color="red" size={48} purpose/>
```

### Purpose prop
The `purpose` prop is technically required, and allows the buttons to expose accessible defaults.
There are two options:
- "decorative", which marks the Icon to be ignored by assistive technologies;
- "standalone", which markes the Icon as content, and exposes it to assistive technlogies.

### Why would I use this?
- This package includes accessible
- `react-feather` requires path imports for bundle savings. That results in more verbose imports, and exposes distribution details. Imo, those should be opaque.
- I have not had much luck using such imports with Typescript.
- `react-feather` includes propTypes, which I do not need.

### Why would I not use this?
- You are fine with full-path imports and / or your setup supports them.
- You are using CommonJS as the authoring format and want bundle-savings via full paths; this fork does not support that.
- NPM download count is important to you.

