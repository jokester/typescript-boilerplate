import { foo, fooAsync } from '../';
import { expect as chaiexpect } from 'chai';

describe("it", () => {

    it("tests sync function", () => {
        expect(foo()).toEqual("foo!");
    });

    it("tests async function", async done => {
        expect(await fooAsync()).toEqual('foo!?');
        done();
    })
});
