"use strict";
const tslib_1 = require("tslib");
function foo() {
    return "foo!";
}
exports.foo = foo;
function fooAsync() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return "foo!?";
    });
}
exports.fooAsync = fooAsync;
console.log(`running ${__filename}`);
//# sourceMappingURL=index.js.map