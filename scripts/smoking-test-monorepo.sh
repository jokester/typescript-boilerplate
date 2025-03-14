#!/usr/bin/env bash

set -ue
set -o pipefail
cd $(dirname "$0")/..

npm i

for d in empty next preact-spa hono; do
  pushd $d
  npm run lint
  npm run typecheck
  npm run format
  npm test
  npm run build
  popd
done

wait
