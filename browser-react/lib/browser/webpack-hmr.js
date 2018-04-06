"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.webpack_dev = (typeof $$webpack_dev !== "undefined") && $$webpack_dev;
function haveHMR(m) {
    return !!(m && m.hot);
}
exports.haveHMR = haveHMR;
