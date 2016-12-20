import { http } from './util';
import * as cheerio from 'cheerio';

export interface ToutiaoItem {
    title: string;
    url: string;
    metadata: string;
}

export const ToutiaoURL = "https://toutiao.io";

function getTextNodes(parent: CheerioElement) {
    return parent.children
        .filter(elem => elem.type === "text")
        .map(elem => (elem as any).data as string);
}

const fullURL = /^(https?|ftp):\/\//;

/**
 * 将toutiao.io首
 */
export function parseItems(toutiaoPage: string): ToutiaoItem[] {
    const context = cheerio.load(toutiaoPage);

    const items = [] as ToutiaoItem[];

    for (const post of Array.from(context(".post"))) {
        let title: string, link: string;
        let metadata = "NO METADATA";
        const a = cheerio(".title > a", post)[0];

        if (a && a.children[0]) {
            title = getTextNodes(a).join("").trim();
            link = (a.attribs as any).href;
        }

        const meta_tag = cheerio('.meta', post)[0];

        if (meta_tag) {
            metadata = getTextNodes(meta_tag).join('').trim();
        }

        const url = fullURL.exec(link) ? link : `${ToutiaoURL}${link}`;

        if (title && link) {
            items.push({ title, url, metadata });
        }
    }

    return items;
}

export async function fetchItems() {
    const text = await http.get(ToutiaoURL);
    return parseItems(text);
}