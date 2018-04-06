#!/usr/bin/env bash

set -ue

cd "$(dirname "$0")/../"

for i in *; do
  if [[ -d "$i" ]] && [[ -e "$i/yarn.lock" ]]; then
    pushd "$i"
    yarn
    popd
  fi
done
