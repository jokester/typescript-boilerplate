# typescript-boilerplate

Boilerplates to start making stuff in TypeScript, without bothered by configurations (until one really needs to).

All the variants contains:

- known-to-work configurations
    - `tsconfig.json`
    - `jest` / `ts-jest` for testing
    - `eslint` for linting
    - `prettier` for formatting
- known-to-work package versions (`yarn.lock`)
- useful npm scripts (see `package.json` in each variant for exact list)
    - `npm dev`
    - `npm typecheck` / `npm typecheck:watch`
    - `npm lint` / `npm lint:fix`
    - `npm test` / `npm test:watch` / `npm test:coverage`
    - `npm build` / `npm analyze`

## Configurations

The principles behind current (opinionated) settings are:

- Be as strict as possible in TypeScript
- When there is a upstream (like in the case of `create-react-app`), follow it
    - When some upstream configuration can and often needs to be overridden, make it explicit
- Only add really useful and non-conflicting plugins / configurations (webpack HMR for example)

## Variants

Browser only: [browser-react](browser-react/)

- based on [create-react-app / template-typescript](https://github.com/facebook/create-react-app/tree/master/packages/react-scripts/template-typescript)
- use scss instead of css
- a switch to use [preact](https://github.com/preactjs/preact) instead of React.

---

Browser + Web Server: [web-nextjs](web-nextjs/)

- based on Next.js 9.5 and its builtin ts support
- contains configured plugins:
    - [next-sass](https://github.com/zeit/next-plugins/tree/master/packages/next-sass)
    - [next-optimized-images](https://www.npmjs.com/package/next-optimized-images)
    - [next-bundle-analyzer](https://github.com/zeit/next-plugins/tree/master/packages/next-bundle-analyzer)
    - [next-source-maps](https://github.com/zeit/next-plugins/tree/master/packages/next-source-maps)
    - [next-transpile-modules](https://github.com/martpie/next-transpile-modules)
- contains a (opinionated) static typed dynamic routing, see [route definition](web-nextjs/src/typed-routes.ts) / [route consumer](web-nextjs/pages/posts/[postId].tsx)
- not including a custom server

---

Node.js library / CLI  [node-lib](node-lib/)

- an empty npm package

---

(obsolete) Mobile / React Native: [mobile-react-native](obsolete/mobile-react-native/)

- not updated recently. PRs welcome.

## LICENSE

- work from upstream repositories follows their licenses
- other contents are MIT licensed
- other contents are WTFPL licensed too
