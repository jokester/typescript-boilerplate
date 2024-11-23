# typescript-boilerplate

TypeScript templates I use to immediately start doing something, with opinionated configuration.

## How To Use

If you need monorepo:

start with the whole repo , duplicate or remove variant subpackages as needed

else:

start with a package subdirectory, or download ejected zip / tar.xz from Github releases.

## Variants

### `nextjs`, for a frontend + server monolith

Based on [create-next-app template](https://github.com/vercel/next.js/tree/canary/packages/create-next-app/templates/app/ts).

Plugins:

- A hand-roll alternative to [next-compose-plugins](https://github.com/cyrilwanner/next-compose-plugins)
- [next-bundle-analyzer](https://github.com/zeit/next-plugins/tree/master/packages/next-bundle-analyzer)

Libraries:

- [trpc](https://trpc.io/docs/client/nextjs/setup) for typed API
- [tailwindcss](https://tailwindcss.com/docs/installation/using-postcss)
- No CSS or UI libraries. User can freely bring own UI libraries.
- util libraries: [clsx](https://github.com/lukeed/clsx) [foxact](https://foxact.skk.moe/) [lodash-es](https://www.npmjs.com/package/lodash-es) [@jokester/ts-commonutil](https://github.com/jokester/ts-commonutil)

Not configured for serverless or SSG, I don't use Next.js for them.

### `preact-spa`, for frontend-only SPA

based on [create-vite template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-preact-ts)

Libraries:

- [tailwindcss](https://tailwindcss.com)
- [react-helmet]()
- [preact-router]()

If you need to host built assets with path rewriting,
check `hono-worker` variant,
or [serve-handler](https://github.com/vercel/serve-handler) ([example](https://github.com/jokester/limb/blob/master/server/main.ts)).

### `hono`, for node.js or edge servers

- based on [hono](https://github.com/honojs/hono)
- Capable of hosting SPA created by `preact-spa`

### `empty`, an empty npm package

- Can be used for any purpose, a new library or CLI or else.

## Conventions shared by all variants

All the variants contains a similar set of configurations and npm scripts:

- `tsconfig.json`
- `jest` / `ts-jest` for testing
- `gts` `prettier` `eslint` for linting and formatting
- `npm dev`
- `npm typecheck` / `npm typecheck:watch`
- `npm lint` / `npm lint:fix`
- `npm test` / `npm test:watch` / `npm test:coverage`
- `npm build` / `npm analyze`

The principles behind current (opinionated) settings are:

- Be strict as possible in TypeScript.
- Be close to upstream defaults

## Obsolete Variants

- `obsolete/web-gatsby`
- `obsolete/craco-react`
- `obsolete/aws-api-gateway`
- `obsolete/mobile-react-native`
- `obsolete/web-tsup`
  - Browser-only React SPA with [egoist/tsup](https://github.com/egoist/tsup)

## LICENSE

- MIT
