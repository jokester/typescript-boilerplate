import { foo, fooAsync } from "../server/foo";
import { expect as chaiexpect } from "chai";

describe("runs test case named *.spec.ts", () => {
    it("runs", () => {
        expect(1).toEqual(1);
    });

    it("tests sync function", () => {
        expect(foo()).toEqual("foo!");
    });

    it("tests async function", async done => {
        expect(await fooAsync()).toEqual("foo!?");
        done();
    });
});
