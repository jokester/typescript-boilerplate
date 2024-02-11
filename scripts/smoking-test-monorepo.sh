#!/usr/bin/env bash

set -ue
set -o pipefail
cd $(dirname "$0")/..

npm i

for d in empty next preact-spa hono-worker; do
  pushd $d
  npm run lint
  npm run typecheck
  npm test
  npm run build
  popd
done

wait
