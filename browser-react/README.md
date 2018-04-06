# typescript-boilerplate

A boilerplate for TypeScript projects.

- Out-of-box configuration
    - http server: `express.js`
    - browser bundling: `webpack`, with hot module replacement (HMR)
    - test: `jest` (test runner) / `chai` (assertion)
    - lint: `tslint`
- Latest packages
    - TypeScript v2.6
    - webpack v3.8
    - express.js v4
- Variants for different JavaScript environments: node.js / browser / Electron
    - see **Variants** for details
- CI Integration
    - CircleCI [![CircleCI](https://circleci.com/gh/jokester/typescript-boilerplate.svg?style=svg)](https://circleci.com/gh/jokester/typescript-boilerplate)
    - codecov [![codecov](https://codecov.io/gh/jokester/typescript-boilerplate/branch/master/graph/badge.svg)](https://codecov.io/gh/jokester/typescript-boilerplate)
- Can be easily adapted to more JavaScript runtimes
    - Electron / ReactNative / you name it

## Variants

### Common

[master](https://github.com/jokester/typescript-boilerplate/tree/master) branch. All other variants are based on this.

- TypeScript compiler:
    - compile to ES6 for server
    - compile to ES5 code for browser (while using ES6 module to enable webpack tree-shaking)
- webpack
    - 2 configurations: `dev` (with hot reload) / `prod` (with code compression)
    - configured with TypeScript (`ts-loader`)
    - hot module reload
    - include browser polyfill `corejs`
- no frontend framework included
- a full-featured dev server that reloads 
- npm scripts to build and run
    - see **Built-in npm scripts** for details

Directories:

```
lib/             compiled JavaScript code
lib-ts/          TypeScript code
    server/      server-specific
    browser/     browser-specific
    common/      code shared by server / browser
public/          static assets: JS bundles, images, etc
webpack/         webpack configuations
```

(my) Develop conventions:

- TS only, when writing code:
    - run and auto-restart server with `ts-node-dev`
    - serve browser bundles with `webpack-dev-middleware`
- Compile to JS before deploy:
    - one can also simply `npm run build && npm run webpack:prod && git commit` and `git pull` in server
    - a good time to do this would be during `docker build`
- JS only (this includes server code and static assets), when running in production server

### Variant: React

[webpack-react](https://github.com/jokester/typescript-boilerplate/tree/webpack-react) branch. Contains a frontend-only React app.

### Variant: Preact

[webpack-preact](https://github.com/jokester/typescript-boilerplate/tree/webpack-preact) branch. Contains a frontend-only Preact app.

[Preact](https://preactjs.com/) is a Fast 3kB alternative to React *(v15 as of now)* with the same ES6 API.

<!--
### Variant: TODO: Fullstack

Based on **React** variant, plus:

- a http + websocket server (`express.js v4` / `ws`)
- a simplest chatroom webapp, intended to demostrate how code sharing is done

### Variant: TODO: Electron

-->

## Built-in npm scripts

### dev server

A full-featured http server that reloads when possible, most useful when writing code.

- execute server code with `ts-node` and `ts-node-dev`, restarts on code change.
- build and serve webpack bundle with `webpack-dev-middleware`, with HMR
    - try it: open `http://localhost:9000/` and modify `lib-ts/browser/m.ts`
    - note: currently server restart does not cause page to reload
- serve static assets
- can also be a startpoint of complete app server (it is but a `express.js` app)

```bash
$ npm run dev-server
```

### Build & Run for node.js

```bash
# compile lib-ts/ to lib/
$ npm run build

# compile while watching
$ npm run build:watch

# run lib-ts/server-main.ts with ts-node
$ npm run start:ts

# run lib/server-main.js with node
$ npm run start
```

### Build for browser

In all configurations, webpack bundle will be written to `public/static/browser-entrypoint.js`

```bash
# create dev bundle
$ npm run webpack

# create dev bundle, and update when file changes
$ npm run webpack:watch

# create minimized production bundle
$ npm run webpack:prod
```

### Test & Lint

```bash
# run tslint
$ npm run tslint

# let tslint fix simple warnings
$ npm run tslint:fix

# run test suites ()
$ npm run test

# re-run test suites when code changes
$ npm run test:watch

# generate coverage report in /coverage/
$ npm run test:coverage
```

(Variants may have more npm scripts, please refer to their `README.md` as well.)

#### License

MIT
