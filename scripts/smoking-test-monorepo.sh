#!/usr/bin/env bash

set -ue
set -o pipefail
cd $(dirname "$0")/..

pnpm i

for d in empty next preact-spa hono; do
  pushd $d
  pnpm run lint
  pnpm run typecheck
  pnpm run format
  pnpm test
  pnpm run build
  popd
done

wait
