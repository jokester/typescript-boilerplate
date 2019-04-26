# typescript-boilerplate

Boilerplates to write stuff in TypeScript.

All variants use `jest` / `ts-jest` for testing, and `eslint + prettier` for formatting + lint.

## Variants

Browser:

- [browser-react](browser-react/)
    - based on result of [create-react-app](#)
- [browser-preact](browser-preact/)
    - based on result of [create-react-app](#), but use preact instead of react
- [mobile-react-native](mobile-react-native/)

Browser + Web Server:

- [web-nextjs](web-nextjs/)
    - based on [next-typescript](https://github.com/zeit/next-plugins/tree/master/packages/next-typescript)
    - with [next-sass](https://github.com/zeit/next-plugins/tree/master/packages/next-sass) to load sass
    - with [next-optimized-images](https://www.npmjs.com/package/next-optimized-images) to load and optimize images
    - with (somehow opinionated) dynamic routing from [next-routes](https://github.com/fridays/next-routes)
    - with a simplest stateless [server.js](web-nextjs/server.js) to do SSR with dynamic route
        - currently I am not writing server-only code in ts. Ideas/PRs welcome if you need such feature.

<!-- - [web-express-react](web-express-react/) -->

Node.js library / CLI:

- [node-lib](node-lib/)

Mobile:

- [mobile-react-native](mobile-react-native/)
    - not up-to-date. PRs welcome.
