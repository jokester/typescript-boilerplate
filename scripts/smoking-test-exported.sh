#!/usr/bin/env bash

set -ue
set -o pipefail
cd $(dirname "$0")/..

rm -rvf package.json package-lock.json node_modules */node_modules

for d in empty next preact-spa hono-worker; do
  tar xf $d.tar.xz
  pushd $d
  npm i
  npm run lint
  npm run typecheck
  npm test
  npm run build
  popd
done

wait
