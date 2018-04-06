"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * server-main.ts: entrypoint of node.js http server
 *
 * - create a express.js http server
 * - serves static asset in public/
 * - serves webpack dev bundle (only in dev)
 * - can also be a startpoint of a whole web server
 */
const path = require("path");
const express = require("express");
const app = express();
if (process.env.NODE_ENV !== "production") {
    /**
     * add develop-specific middleware
     *
     * NOTE: code in this branch needs dep-only dependicies,
     * set $NODE_ENV accordingly if you don't want this
     */
    console.info("prepending webpack dev-middleware and hot-middleware");
    const webpackDevMiddleware = require("webpack-dev-middleware");
    const webpackHotMiddleware = require("webpack-hot-middleware");
    const webpack = require("webpack");
    const webpackConf = require("../webpack/dev");
    /**
     * append hot-reload client to every webpack entrypoints
     * @see https://www.npmjs.com/package/webpack-hot-middleware
     */
    for (const entryName in webpackConf.entry) {
        const origEntry = webpackConf.entry[entryName];
        const hmrEntry = "webpack-hot-middleware/client?reload=true";
        if (typeof origEntry === "string") {
            webpackConf.entry[entryName] =
                [hmrEntry, origEntry];
        }
        else if (origEntry instanceof Array) {
            webpackConf.entry[entryName] =
                [hmrEntry].concat(origEntry);
        }
        else {
            throw new Error(`could not prepend hot-middleware to entry "${entryName}"`);
        }
    }
    const compiler = webpack(webpackConf);
    app.use(webpackDevMiddleware(compiler));
    app.use(webpackHotMiddleware(compiler, {
        reload: true
    }));
}
app.use(express.static(path.join(__dirname, "../public")));
app.listen(9000, () => {
    console.log("##################################");
    console.log("#### dev-server started listening on http://localhost:9000 ");
    console.log("##################################");
});
