"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fake_react_1 = require("./browser/fake-react");
const m = require("./browser/m");
const greeting_1 = require("./browser/greeting");
const webpack_hmr_1 = require("./browser/webpack-hmr");
if (webpack_hmr_1.webpack_dev && webpack_hmr_1.haveHMR(module)) {
    // dev w/ HMR: hot-reload './m' and create <li> from it
    console.info("configuring webpack HMR");
    console.info("m=", m);
    module.hot.accept("./browser/m", function () {
        console.log("accept handler get called", [].slice.call(arguments));
        console.info("m=", m);
        renderRoot(m.v);
    });
}
else if (webpack_hmr_1.webpack_dev) {
    // dev w/o HMR
    console.info("webpack HMR not available");
} /* else do nothing in production */
renderRoot(m.v);
function renderRoot(v) {
    fake_react_1.ReactDOM.render(fake_react_1.React.createElement(greeting_1.Greeting, { val: v }), document.body.firstElementChild);
}
