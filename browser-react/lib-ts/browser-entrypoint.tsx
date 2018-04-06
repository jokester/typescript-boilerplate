import * as React from "react";
import * as ReactDOM from "react-dom";

import * as m from "./browser/m";
import { Greeting } from "./browser/greeting";
import { webpack_dev, haveHMR, } from "./browser/webpack-hmr";

if (webpack_dev && haveHMR(module)) {
    // dev w/ HMR: hot-reload './m' and create <li> from it
    console.info("configuring webpack HMR");
    console.info("m=", m);
    module.hot.accept("./browser/m", function () {
        console.log("accept handler get called", [].slice.call(arguments));
        console.info("m=", m);
        renderRoot(m.v);
    });
} else if (webpack_dev) {
    // dev w/o HMR
    console.info("webpack HMR not available");
} /* else do nothing in production */

renderRoot(m.v);

function renderRoot(v: number) {
    ReactDOM.render(<Greeting val={v} />, document.body.firstElementChild);
}