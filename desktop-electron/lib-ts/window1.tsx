import * as React from "react";
import * as ReactDOM from "react-dom";

import * as m from "./m";
import { Greeting } from "./greeting";
import { webpack_dev, haveHMR, } from "./webpack-hmr";

if (webpack_dev && haveHMR(module)) {
    // dev w/ HMR: hot-reload './m', './greeting' and re-render
    console.info("configuring webpack HMR");
    console.info("m=", m);
    module.hot.accept(["./m", "./greeting"], function () {
        console.log("accept handler get called", [].slice.call(arguments));
        console.info("m=", m);
        renderRoot();
    });
} else if (webpack_dev) {
    // dev w/o HMR
    console.info("webpack HMR not available");
} // else: do nothing

renderRoot();

function renderRoot() {
    ReactDOM.render(<Greeting val={m.v} />, document.body.firstElementChild);
}
