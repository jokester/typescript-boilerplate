#!/usr/bin/env bash

set -uex

TEMP_DIR=$(mktemp -d)
git archive -- HEAD | tar xv -C $TEMP_DIR -h

for variant in empty next preact-spa hono-worker; do
  node $(dirname "$0")/materialize-variant.js $TEMP_DIR $variant
  tar cJvf $variant.tar.xz -C $TEMP_DIR $variant
done