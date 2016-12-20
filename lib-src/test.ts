import { suite, test } from 'mocha-typescript';
import { expect } from 'chai';
import { readFileSync } from 'fs';

import { parseItems } from './fetch';
import { mergeItems } from './feed';

const htmlText = readFileSync(`${__dirname}/../test/toutiao.html`).toString();

@suite class TestSuite {
    @test parseItems() {
        const items = parseItems(htmlText);
        expect(items).to.eq([]);
    }

    @test merge() {
        const items = parseItems(htmlText);
        const merged = mergeItems([], items);
        expect(merged).to.eq([]);
    }
}