"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const mocha_typescript_1 = require("mocha-typescript");
const chai_1 = require("chai");
const _1 = require("../");
let TestSuite = class TestSuite {
    testSync() {
        chai_1.expect(_1.foo()).to.eq("foo!");
    }
    testAsync() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            chai_1.expect(yield _1.fooAsync()).to.eq('foo!?');
        });
    }
};
tslib_1.__decorate([
    mocha_typescript_1.test,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], TestSuite.prototype, "testSync", null);
tslib_1.__decorate([
    mocha_typescript_1.test,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], TestSuite.prototype, "testAsync", null);
TestSuite = tslib_1.__decorate([
    mocha_typescript_1.suite
], TestSuite);
