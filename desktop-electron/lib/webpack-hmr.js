"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.webpack_dev = (typeof $$webpack_dev !== "undefined") && $$webpack_dev;
exports.webpack_hmr = (typeof $$webpack_hmr !== "undefined") && $$webpack_dev;
function haveHMR(m) {
    return !!(m && m.hot);
}
exports.haveHMR = haveHMR;
function ifHMR(m, callback) {
    if (haveHMR(m) && callback)
        callback(m);
}
exports.ifHMR = ifHMR;
