export-svg-chart [![npm](https://img.shields.io/npm/v/export-svg-chart.svg?style=flat-square)](https://www.npmjs.com/package/export-svg-chart) [![Build Status](https://img.shields.io/travis/ThibWeb/export-svg-chart.svg?style=flat-square)](https://travis-ci.org/ThibWeb/export-svg-chart) [![dependency Status](https://img.shields.io/david/ThibWeb/export-svg-chart.svg?style=flat-square)](https://david-dm.org/ThibWeb/export-svg-chart) [![devDependency Status](https://img.shields.io/david/dev/ThibWeb/export-svg-chart.svg?style=flat-square)](https://david-dm.org/ThibWeb/export-svg-chart)
================

## Install

```sh
npm install export-svg-chart --save
```

## Example

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
    fs.writeFile('basic-example.png', buffers.pngs);
});
```

http://bl.ocks.org/mbostock/raw/7341714/ becomes:

[![basic example PNG](./basic-example.png)](./basic-example.png)
[![basic example SVG](./basic-example.svg)](./basic-example.svg)
