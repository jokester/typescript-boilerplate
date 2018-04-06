# typescript-boilerplate

A boilerplate for TypeScript projects.

- Latest `TypeScript 2.5` / `Webpack 3`
- Out-of-box test with `jest` (test runner) / `chai` (assertion)
- Configured webpack hot module replacement (HMR)
- CircleCI / codecov.io support: [![CircleCI](https://circleci.com/gh/jokester/typescript-boilerplate.svg?style=svg)](https://circleci.com/gh/jokester/typescript-boilerplate) / [![codecov](https://codecov.io/gh/jokester/typescript-boilerplate/branch/master/graph/badge.svg)](https://codecov.io/gh/jokester/typescript-boilerplate)
- Supports various JavaScript environment: node.js / browser / etc
    - see **Variants** for detail
- Can be easily extended for other JS runtime: Electron / ReactNative / you name it

#### Variants

Variants have their own branches:

- [master](https://github.com/jokester/typescript-boilerplate/tree/master) branch
    - Basic configuration (compile + test)
    - Bundle TypeScript files with `webpack` for browser use, with HMR
    - No frontend framework
    - All other variants are based on this.
- [webpack-react](https://github.com/jokester/typescript-boilerplate/tree/webpack-react) branch
- [webpack-preact](https://github.com/jokester/typescript-boilerplate/tree/webpack-preact) branch
    - [Preact](https://preactjs.com/): Fast 3kB alternative to React with the same ES6 API.
- [electron-react](https://github.com/jokester/typescript-boilerplate/tree/electron-react) branch
    - electron + react
- [heroku](https://github.com/jokester/typescript-boilerplate/tree/heroku) branch
    - a simplest (server-only) express.js app with heroku support

#### Built-in npm scripts

###### Build & Run

```bash

# compile lib-ts/**/*.ts to lib/
$ npm run build

# compile while watching
$ npm run build:watch

# run lib-ts/index.ts
$ npm run start:ts

# run lib/index.js
$ npm run start
```

###### Test & Lint

```bash
# run tslint
$ npm run tslint

# let tslint fix simple warnings
$ npm run tslint:fix

# run test suites
$ npm run test

# re-run test suites when code changes
$ npm run test:watch

# generate coverage report in /coverage/
$ npm run test:coverage
```

###### Webpack

```bash
# create dev bundle
#   lib-ts/browser-entrypoint.ts -> dev/browser-entrypoint.js
$ npm run webpack

# create dev bundle, with file watching
#   lib-ts/browser-entrypoint.ts -> dev/browser-entrypoint.js
$ npm run webpack:watch

# host dev bundle with webpack dev-server, with file watching and HMR:
#   open http://localhost:9000/ in browser, and see how page gets updated
#   when (lib-ts/m.ts) is modified.
$ npm run dev-server

# create minimized bundle for production
#   lib-ts/browser-entrypoint.ts -> prod/browser-entrypoint.js
$ npm run webpack:prod
```

###### Electron

```bash
# run dev bundle
$ npm run electron

# run prod bundle
$ npm run electron:prod

# build prod bundle and for all platforms (with electron-packager)
$ npm run package-electron:all
```

<!-- TODO: can electron work with webpack HMR? -->

#### License

MIT
