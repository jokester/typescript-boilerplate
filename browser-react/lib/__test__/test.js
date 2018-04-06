"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const foo_1 = require("../server/foo");
describe("it runs test suite in /lib-ts/__test__/", () => {
    it("tests sync function", () => {
        expect(foo_1.foo()).toEqual("foo!");
    });
    it("tests async function", (done) => tslib_1.__awaiter(this, void 0, void 0, function* () {
        expect(yield foo_1.fooAsync()).toEqual("foo!?");
        done();
    }));
});
