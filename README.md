export-svg-chart [![npm](https://img.shields.io/npm/v/export-svg-chart.svg?style=flat-square)](https://www.npmjs.com/package/export-svg-chart) [![Build Status](https://img.shields.io/travis/thibaudcolas/export-svg-chart.svg?style=flat-square)](https://travis-ci.org/thibaudcolas/export-svg-chart) [![dependency Status](https://img.shields.io/david/thibaudcolas/export-svg-chart.svg?style=flat-square)](https://david-dm.org/thibaudcolas/export-svg-chart) [![devDependency Status](https://img.shields.io/david/dev/thibaudcolas/export-svg-chart.svg?style=flat-square)](https://david-dm.org/thibaudcolas/export-svg-chart)
================

> Converts SVG+CSS charts built with front-end technologies like D3 into SVG/PNG Node buffers for server-side use.

## Install

> This package requires node 4 or above.

```sh
npm install export-svg-chart --save
```

## Example

To get SVG and PNG exports of your chart, you need to point the library towards a page that takes care of rendering it. This can be a dynamic rendering with UI elements, or an "export/print"-specific page with another skin for the chart.

```js
const fs = require('fs');
const exportSvgChart = require('export-svg-chart');

const options = {
    url: 'http://bl.ocks.org/mbostock/raw/7341714/',
    selector: '.chart',
};

exportSvgChart(options, (err, buffers) => {
    if (err) return console.log(err);

    fs.writeFile('basic-example.svg', buffers.svg);
    fs.writeFile('basic-example.png', buffers.png);
});
```

http://bl.ocks.org/mbostock/raw/7341714/ becomes:

[![basic example PNG](basic-example.png)](basic-example.png)

[Basic example SVG](basic-example.svg)

## What it does

Under the hood, this is using [Electron](http://electron.atom.io/) which uses [Chromium's rendering engine](http://www.chromium.org/developers/content-module). The export is generated with [saveSvgAsPng](https://github.com/exupero/saveSvgAsPng).

### Caveats

- saveSvgAsPng doesn't support inlining of font face definitions ([yet](https://github.com/exupero/saveSvgAsPng/pull/29)).
- If the chart is styled with ancestor selectors that are outside of it, the selectors need to be re-mapped when they are inlined. This isn't supported within this library at the moment.
