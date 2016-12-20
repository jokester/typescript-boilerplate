"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
const RSS = require("rss");
const http = require("http");
const log = require('simple-node-logger').createSimpleLogger();
const fetch_1 = require("./fetch");
const feed_1 = require("./feed");
function createFeedServer(port) {
    return __awaiter(this, void 0, void 0, function* () {
        let latestXML;
        let items = [];
        function updateRepo() {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    const fetched = yield fetch_1.fetchItems();
                    log.info(`fetched ${fetched.length} items`);
                    const newItems = feed_1.mergeItems(items, fetched);
                    // generate RSS xml
                    const feed = new RSS({
                        title: "toutiao.io",
                        description: "toutiao.io的非官方RSS repo",
                        generator: "",
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
                }
                catch (e) {
                    log.error(`error in updateRepo`, e);
                }
            });
        }
        setInterval(updateRepo, 1800e3);
        setTimeout(updateRepo);
        const server = http.createServer((req, res) => {
            if (!latestXML) {
                res.statusCode = 500;
                res.end("XML not prepared");
            }
            else {
                res.end(latestXML);
            }
        });
        server.listen(port);
    });
}
function main(port) {
    createFeedServer(port)
        .then(() => log.info(`server created at port ${port}`))
        .catch((e) => log.error('error creating server', e));
}
exports.main = main;
