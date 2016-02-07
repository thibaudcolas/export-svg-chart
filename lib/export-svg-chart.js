const nightmare = require('nightmare');
const vo = require('vo');
const dataURIToBuffer = require('data-uri-to-buffer');

const saveSvgAsPngPath = require.resolve('save-svg-as-png');

const night = nightmare({ show: false });

function* getDataURIs(config) {
    yield night
        .goto(config.url)
        .inject('js', saveSvgAsPngPath)
        .wait((selector) => {
            const chart = document.querySelector(selector);

            return chart && chart.innerHTML;
        }, config.selector)
        .evaluate((selector) => {
            const chart = document.querySelector(selector);

            window.dataURIs = {};

            window.svgAsPngUri(chart, {}, uri => window.dataURIs.png = uri);
            window.svgAsDataUri(chart, {}, uri => window.dataURIs.svg = uri);
        }, config.selector)
        .wait(() => window.dataURIs.png && window.dataURIs.svg);

    const dataURIs = yield night
        .evaluate(() => window.dataURIs)
        .end();

    return dataURIs;
}

function createBuffers(dataURIs) {
    return {
        svg: dataURIToBuffer(dataURIs.svg),
        png: dataURIToBuffer(dataURIs.png),
    };
}

module.exports = vo(getDataURIs, createBuffers);
