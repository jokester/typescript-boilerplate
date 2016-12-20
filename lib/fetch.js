"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
const util_1 = require("./util");
const cheerio = require("cheerio");
exports.ToutiaoURL = "https://toutiao.io";
function getTextNodes(parent) {
    return parent.children
        .filter(elem => elem.type === "text")
        .map(elem => elem.data);
}
const fullURL = /^(https?|ftp):\/\//;
/**
 * 将toutiao.io首
 */
function parseItems(toutiaoPage) {
    const context = cheerio.load(toutiaoPage);
    const items = [];
    for (const post of Array.from(context(".post"))) {
        let title, link;
        let metadata = "NO METADATA";
        const a = cheerio(".title > a", post)[0];
        if (a && a.children[0]) {
            title = getTextNodes(a).join("").trim();
            link = a.attribs.href;
        }
        const meta_tag = cheerio('.meta', post)[0];
        if (meta_tag) {
            metadata = getTextNodes(meta_tag).join('').trim();
        }
        const url = fullURL.exec(link) ? link : `${exports.ToutiaoURL}${link}`;
        if (title && link) {
            items.push({ title, url, metadata });
        }
    }
    return items;
}
exports.parseItems = parseItems;
function fetchItems() {
    return __awaiter(this, void 0, void 0, function* () {
        const text = yield util_1.http.get(exports.ToutiaoURL);
        return parseItems(text);
    });
}
exports.fetchItems = fetchItems;
