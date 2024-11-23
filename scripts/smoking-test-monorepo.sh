#!/usr/bin/env bash

set -ue
set -o pipefail
cd $(dirname "$0")/..

npm i

for d in empty next preact-spa hono-worker; do
  pushd $d
  npm run lint
  npm run typecheck
  npm run format
  npm test
  if [[ $d != hono-worker ]]; then
    # skip hono-worker: `wrangler build` requires login now
    npm run build
  fi
  popd
done

wait
