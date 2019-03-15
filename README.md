# typescript-boilerplate

Boilerplates to write stuff in TypeScript.

All variants use `jest` / `ts-jest` for testing, and `eslint + prettier` for lint.

## Variants

Client:

- [browser-react](browser-react/)
    - based on result of [create-react-app](#)
- [browser-preact](browser-preact/)
    - based on result of [create-react-app](#), but using preact instead of react
- [mobile-react-native](mobile-react-native/)

Client + Web Server:

<!-- - [web-express-react](web-express-react/) -->
- [web-nextjs](web-nextjs/)
    - based on [next-typescript](https://github.com/zeit/next-plugins/tree/master/packages/next-typescript)
    - with [next-sass](https://github.com/zeit/next-plugins/tree/master/packages/next-sass) to load sass
    - with [next-optimized-images](https://www.npmjs.com/package/next-optimized-images) to load and optimize images

Node.js library / CLI:

- [node-lib](node-lib/)

Mobile:

- [mobile-react-native](mobile-react-native/)
