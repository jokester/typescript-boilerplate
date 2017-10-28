"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const m = require("./browser/m");
const webpack_hmr_1 = require("./browser/webpack-hmr");
if (webpack_hmr_1.webpack_dev && webpack_hmr_1.haveHMR(module)) {
    // dev w/ HMR: hot-reload './m' and create <li> from it
    console.info("configuring webpack HMR");
    console.info("m=", m);
    module.hot.accept("./browser/m", function () {
        console.log("accept handler get called", [].slice.call(arguments));
        console.info("m=", m);
        createLI(m.v);
    });
}
else if (webpack_hmr_1.webpack_dev) {
    // dev w/o HMR
    console.info("webpack HMR not available");
} /* else do nothing in production */
/**
 * append a <li> item to <ul>
 */
function createLI(value) {
    let ul = document.querySelector("#m-history");
    if (!ul) {
        ul = document.createElement("ul");
        ul.id = "m-history";
        document.body.appendChild(ul);
    }
    const li = document.createElement("li");
    li.innerText = `${new Date}: m = ${JSON.stringify(m)}`;
    ul.appendChild(li);
}
createLI(m.v);
