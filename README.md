# typescript-boilerplate

A boilerplate for TypeScript projects.

- Latest `TypeScript 2.2`
- Out-of-box test with `jest` (test runner) / `mocha` (test framework) / `chai` (assertion)
- Configured webpack hot module replacement (HMR)
- Supports various JavaScript environment: node.js / browser / etc
    - see **Variants** for detail
- Can be easily extended for other JS runtime: Electron / ReactNative / etc

#### Variants

Variants have their own branches:

- [master](https://github.com/jokester/typescript-boilerplate/tree/master)
    - Basic configuration (compile + test)
    - Bundle TypeScript files with `webpack` for browser use
    - No frontend framework
    - All other variants are based on this.
- [React](https://github.com/jokester/typescript-boilerplate/tree/webpack-react)
- [Preact](https://github.com/jokester/typescript-boilerplate/tree/webpack-preact)
    - [Preact](https://preactjs.com/): Fast 3kB alternative to React with the same ES6 API.
- [heroku](https://github.com/jokester/typescript-boilerplate/tree/heroku)
    - a simplest express.js app with heroku support

TODO: Electron

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

# run test suites
$ npm run test

# re-run test suites when code changes
$ npm run test:watch

# generate coverage report in /coverage/
$ npm run test:coverage
```

###### Webpack

```bash
# create dev bundle, and update when file changes
#   lib-ts/browser-entrypoint.ts -> dev/browser-entrypoint.js
$ npm run webpack

# create and update dev bundle, with configured HotModuleReplacementPlugin
# modify lib-ts/m.ts and see how it get hot-replaced in console
$ npm run dev-server

# create minimized bundle for production
#   lib-ts/browser-entrypoint.ts -> prod/browser-entrypoint.js
$ npm run webpack:prod
```

(Variants may have more npm scripts, please refer to their `README.md` as well.)

#### License

MIT
