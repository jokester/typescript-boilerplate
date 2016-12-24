import { suite, test } from 'mocha-typescript';
import { expect } from 'chai';

@suite class TestSuite {
    @test parseItems() {
        expect(1).to.eq(2);
    }

    @test merge() {
        const items = parseItems(htmlText);
        const merged = mergeItems([], items);
        expect(merged).to.eq([]);
    }
}
