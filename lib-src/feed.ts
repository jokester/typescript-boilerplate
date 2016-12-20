import { ToutiaoItem, ToutiaoURL } from './fetch';
import * as UUID from 'uuid-1345';

/**
 * types taken from .d.ts for 'rss' package
 * (they are not exported from .d.ts)
 */
export interface RSSItemOptions {
    /**
     * Title of this particular item.
     */
    title: string;
    /**
     * Content for the item. Can contain HTML but link and image
     * URLs must be absolute path including hostname.
     */
    description: string;
    /**
     * URL to the item. This could be a blog entry.
     */
    url: string;
    /**
     * A unique string feed readers use to know if an item is
     * new or has already been seen. If you use a guid never
     * change it. If you don't provide a guid then your item
     * urls must be unique.
     * Defaults to url.
     */
    guid?: string;
    /**
     * If provided, each array item will be added as a category
     * element.
     */
    categories?: string[];
    /**
     * If included it is the name of the item's creator. If not
     * provided the item author will be the same as the feed author.
     * This is typical except on multi-author blogs.
     */
    author?: string;
    /**
     * The date and time of when the item was created. Feed
     * readers use this to determine the sort order. Some readers
     * will also use it to determine if the content should be
     * presented as unread.
     * Accepts Date object or string with any format
     * JS Date can parse.
     */
    date: Date | string;
    /**
     * The latitude coordinate of the item for GeoRSS.
     */
    lat?: number;
    /**
     * The longitude coordinate of the item for GeoRSS.
     */
    long?: number;
    /**
     * Put additional elements in the item (node-xml syntax).
     */
    custom_elements?: any[];
    /**
     * An enclosure object.
     */
    enclosure?: any;
}

export function mergeItems(existing: RSSItemOptions[], fetched: ToutiaoItem[]): RSSItemOptions[] {

    const merged = existing.slice(0);

    const existing_urls = {} as { [url: string]: string };
    for (const e of existing) {
        existing_urls[e.url] = e.url;
    }

    for (const i of fetched) {
        if (existing_urls[i.url])
            continue;
        merged.unshift({
            title: i.title,
            description: i.metadata,
            url: i.url,
            // 以加入列表的时间为
            date: new Date(),
            guid: UUID.v3({ namespace: UUID.namespace.url, name: i.url })
        });
    }

    return merged.slice(0, 20);
}