import { suite, test } from 'mocha-typescript';
import { expect } from 'chai';

import { foo, fooAsync } from '../';

@suite class TestSuite {
    @test
    testSync() {
        expect(foo()).to.eq("foo!");
    }

    @test
    async testAsync() {
        expect(await fooAsync()).to.eq('foo!?');
    }
}
