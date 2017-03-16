# typescript-boilerplate

A boilerplate for TypeScript projects.

- Latest `TypeScript 2.2`
- Out-of-box test with `mocha` (test framework) / `istanbul` (code coverage) / `chai` (assertion)
- Supports various JavaScript environment: node.js / browser / etc
    - see **Variants** for detail
- Can be easily extended for other JS runtime: Electron / ReactNative / etc

#### Variants

Variants have their own branches:

- [master](https://github.com/jokester/typescript-boilerplate/tree/master)
    - Basic configuration (node.js + TypeScript + mocha + tslint)
    - All other variants are based on this.
- [webpack](https://github.com/jokester/typescript-boilerplate/tree/webpack)
    - Bundle TypeScript files with `webpack` for browser use
    - Minimize ES6 code with [babili](https://github.com/babel/babili)
    - No frontend framework
- [webpack + React](https://github.com/jokester/typescript-boilerplate/tree/webpack-react)
- [webpack + Preact](https://github.com/jokester/typescript-boilerplate/tree/webpack-preact)
    - [Preact](https://preactjs.com/): Fast 3kB alternative to React with the same ES6 API.
- [heroku](https://github.com/jokester/typescript-boilerplate/tree/heroku)
    - a simplest express.js app with heroku support

TODO:
- Electron

#### Built-in npm scripts

Run as TypeScript (`*.ts` are compiled on the fly with [ts-node](https://github.com/TypeStrong/ts-node). Convinent for development):

```bash
# run lib-ts/index.ts
$ npm run start:ts

# run tests in lib-ts/_test_
# coverage will be generated in coverage/
$ npm run test:ts

# run tslint
$ npm run tslint
```

Compile and run JavaScript (recommended for production):

```bash
# run lib/index.js
$ npm run start

# compile lib-ts/**/*.ts to lib/
$ npm run build

# compile + watch for change
$ npm run watch

# run tests in lib/_test_
# coverage will be generated in coverage/
$ npm run test
```

(Variants may have their own npm scripts, please refer to their `README.md` as well.)

#### License

MIT
