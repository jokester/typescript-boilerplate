/**
 * fake-react.ts: provide react-like api with preact-compat
 *
 * this minimizes difference between react / preact branch
 * and prevent webpack / tsc compilation error
 */
import * as preact from "preact";
const preactCompat = require("preact-compat");

interface FakeReactDom {
    render: typeof preact.render;
}

interface ReactLike {
    createElement: typeof preact.h;
    Component: typeof preact.Component;
}

export const ReactDOM: Readonly<typeof preact> = preactCompat;
export const React: Readonly<ReactLike> = preactCompat;