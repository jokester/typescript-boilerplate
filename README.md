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

Browser only: [web-tsup](web-tsup/)

- React SPA with [egoist/tsup](https://github.com/egoist/tsup)

---

Browser + Web Server: [web-nextjs](web-nextjs/)

- based on Next.js 13 and its builtin ts support
- contains configured plugins:
    - A hand-rollen alternative to [next-compose-plugins](https://github.com/cyrilwanner/next-compose-plugins)
    - [next-bundle-analyzer](https://github.com/zeit/next-plugins/tree/master/packages/next-bundle-analyzer)
- contains a (opinionated) static typed route definition, see [route definition](web-nextjs/src/config/typed-routes.ts) / [route consumer](web-nextjs/pages/posts/[postId].tsx)
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
