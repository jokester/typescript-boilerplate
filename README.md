# typescript-boilerplate

Boilerplates to write stuff in TypeScript.

All variants use `jest` / `ts-jest` for testing, and `eslint + prettier` for formatting + lint.

## Variants

Browser:

- [browser-react](browser-react/)
    - based on result of [create-react-app](https://facebook.github.io/create-react-app/)
- [browser-preact](browser-preact/)
    - based on result of [create-react-app](https://facebook.github.io/create-react-app/), but use preact instead of react

Browser + Web Server:

- [web-nextjs](web-nextjs/)
    - based on next.js 9 and [next-typescript](https://github.com/zeit/next-plugins/tree/master/packages/next-typescript)
    - containes configured plugins:
        - [next-sass](https://github.com/zeit/next-plugins/tree/master/packages/next-sass)
        - [next-optimized-images](https://www.npmjs.com/package/next-optimized-images)
        - [next-bundle-analyzer](https://github.com/zeit/next-plugins/tree/master/packages/next-bundle-analyzer)
        - [next-source-maps](https://github.com/zeit/next-plugins/tree/master/packages/next-source-maps)
        - [next-transpile-modules](https://github.com/martpie/next-transpile-modules)
    - contains a (opinionated) static typed dynamic routing, see [route definition](web-nextjs/src/typed-routes.ts) / [route consumer](web-nextjs/pages/posts/[postId].tsx)
    - not including a custom server

Node.js library / CLI:

- [node-lib](node-lib/)

Mobile:

- [mobile-react-native](mobile-react-native/)
    - not updated recently. PRs welcome.

## LICENSE

WTFPL
