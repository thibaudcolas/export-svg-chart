const fs = require('fs');
const exportSvgChart = require('../lib/export-svg-chart');

const options = {
    url: 'http://bl.ocks.org/mbostock/raw/7341714/',
    selector: '.chart',
};

exportSvgChart(options, (err, buffers) => {
    if (err) return console.log(err);

    fs.writeFile('basic-example.svg', buffers.svg);
    fs.writeFile('basic-example.png', buffers.png);
});
