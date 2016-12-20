import * as RSS from 'rss';
import http = require('http');
const log = require('simple-node-logger').createSimpleLogger();

import { fetchItems } from './fetch';
import { mergeItems, RSSItemOptions } from './feed';

async function createFeedServer(port: number) {

    let latestXML: string;

    let items: RSSItemOptions[] = [];

    async function updateRepo() {
        try {
            const fetched = await fetchItems();
            log.info(`fetched ${fetched.length} items`);
            const newItems = mergeItems(items, fetched);

            // generate RSS xml
            const feed = new RSS({
                title: "toutiao.io",
                description: "toutiao.io的非官方RSS repo",
                generator: "", //
                site_url: "https://toutiao.io",
                feed_url: "https://toutiao-rss.jokester.io",
                docs: "https://github.com/jokester/toutiao-rss",
                webMaster: "me@jokester.io",
                language: "zh",
            });
            for (const i of newItems) {
                feed.item(i);
            }
            const newXML = feed.xml();

            latestXML = newXML;
            items = newItems;
        } catch (e) {
            log.error(`error in updateRepo`, e);
        }
    }

    setInterval(updateRepo, 1800e3);
    setTimeout(updateRepo);

    const server = http.createServer((req, res) => {
        if (!latestXML) {
            res.statusCode = 500;
            res.end("XML not prepared");
        } else {
            res.end(latestXML);
        }
    });

    server.listen(port);
}

export function main(port: number) {
    createFeedServer(port)
        .then(() => log.info(`server created at port ${port}`))
        .catch((e) => log.error('error creating server', e));
}
