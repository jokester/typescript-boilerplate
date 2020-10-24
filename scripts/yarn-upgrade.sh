#!/usr/bin/env bash

set -ue
set -o pipefail
cd $(dirname "$0")/..

yarn-upgrade () {
  pushd $d
  yarn --mutex network && yarn --mutex network upgrade
  grep "^@types/" yarn.lock # to see if we need to resolve manually
  popd
}

for d in node-lib web-nextjs browser-react aws-api-gateway ; do
  echo "running 'yarn upgrade' in '$d' . see 'UPGRADE-$d.log' for result"
  yarn-upgrade $d &> "UPGRADE-$d.log" &
done

wait
