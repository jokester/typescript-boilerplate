#!env bash

set -uex
set -o pipefail

cd $(dirname "$0")

GENERATED_ROOT="$PWD/src/generated"

pushd ../scala-tapir
sbt "run openapi"
popd

rm -rf $GENERATED_ROOT && mkdir -pv $GENERATED_ROOT

yarn openapi-generator-cli generate \
    -g typescript-fetch             \
    -i ../scala-tapir/Todos.yaml    \
    -c ./ts-fetch-options.json      \
    -o $GENERATED_ROOT/ts-fetch

yarn openapi-generator-cli generate \
    -g typescript-rxjs              \
    -i ../scala-tapir/Todos.yaml    \
    -o $GENERATED_ROOT/ts-rx


yarn prettier --write "$GENERATED_ROOT"
