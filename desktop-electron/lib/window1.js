"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ReactDOM = require("react-dom");
const m = require("./m");
const greeting_1 = require("./greeting");
const webpack_hmr_1 = require("./webpack-hmr");
if (webpack_hmr_1.webpack_dev && webpack_hmr_1.haveHMR(module)) {
    // dev w/ HMR: hot-reload './m' and create <li> from it
    console.info("configuring webpack HMR");
    console.info("m=", m);
    module.hot.accept(["./m", "./greeting"], function () {
        console.log("accept handler get called", [].slice.call(arguments));
        console.info("m=", m);
        ReactDOM.render(React.createElement(greeting_1.Greeting, { val: m.v }), document.body.firstElementChild);
    });
}
else if (webpack_hmr_1.webpack_dev) {
    // dev w/o HMR
    console.info("webpack HMR not available");
} // else: do nothing
renderRoot();
function renderRoot() {
    ReactDOM.render(React.createElement(greeting_1.Greeting, { val: m.v }), document.body.firstElementChild);
}
