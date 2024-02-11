#!/usr/bin/env bash

set -uex

TEMP_DIR=$(mktemp -d)
git archive -- HEAD | tar xv -C $TEMP_DIR
node $(dirname "$0")/materialize-deps.js $TEMP_DIR empty
