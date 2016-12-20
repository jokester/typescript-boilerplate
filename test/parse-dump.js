const cheerio = require('cheerio');
const fs = require('fs');

const htmlText = fs.readFileSync(`${__dirname}/toutiao.html`).toString();

const context = cheerio.load(htmlText);

const post0 = context(".post")[0];

// console.log('POST0', post0);

const metadata = context('div.meta', post0)[0].children[0].data; // cheerio('.metadata', post0);

console.log('metadata', metadata);