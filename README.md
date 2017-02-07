# typescript-boilerplate

A boilerplate for TypeScript / (node.js | browser | other) project.

- Latest `TypeScript 2.1`
- Out-of-box test with `chai` / `mocha`
- Can be easily extended for other JS runtime: Electron / ReactNative / etc

Variants:

- Basic (this master branch): enough for node.js
- [Heroku](https://github.com/jokester/node-typescript-boilerplate/tree/heroku): a simplest express.js app with heroku support
- [Webpack](https://github.com/jokester/node-typescript-boilerplate/tree/webpack)

#### Built-in scripts: Basic

Run as TypeScript (`*.ts` are compiled on the fly with [ts-node](https://github.com/TypeStrong/ts-node). Convinent for development):

```bash
# run lib-ts/index.ts
$ npm run start:ts

# run tests in lib-ts/_test_
$ npm run test:ts
```

Build and run JavaScript (recommended for production):

```bash
# compile lib-ts/**/*.ts to lib/
$ npm run build

# compile + watch for change
$ npm run build:watch

# run lib/index.js
$ npm run start

# run tests in lib/_test_
$ npm run test
```

#### License

MIT
