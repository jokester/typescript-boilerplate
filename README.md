# typescript-boilerplate

A boilerplate for TypeScript projects.

- Latest `TypeScript 2.1`
- Out-of-box test with `chai` / `mocha`
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
    - No frontend framework
- [heroku](https://github.com/jokester/typescript-boilerplate/tree/heroku)
    - a simplest express.js app with heroku support
- Electron: TODO
- ReactNative: TODO

#### Built-in npm scripts

Run as TypeScript (`*.ts` are compiled on the fly with [ts-node](https://github.com/TypeStrong/ts-node). Convinent for development):

```bash
# run lib-ts/index.ts
$ npm run start:ts

# run tests in lib-ts/_test_
$ npm run test:ts

# run tslint
$ npm run tslint
```

Compile and run JavaScript (recommended for production):

```bash
# compile lib-ts/**/*.ts to lib/
$ npm run build

# compile + watch for change
$ npm run watch

# run lib/index.js
$ npm run start

# run tests in lib/_test_
$ npm run test
```

#### License

MIT
