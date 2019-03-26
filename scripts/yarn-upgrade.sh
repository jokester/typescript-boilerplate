#!/usr/bin/env bash

set -ue
set -o pipefail
cd $(dirname "$0")/..

yarn-upgrade () {
  pushd $d
  yarn && yarn upgrade
  popd
}

for d in node-lib web-nextjs browser-react browser-preact ; do
  echo "running 'yarn upgrade' in '$d' . see 'UPGRADE-$d.log' for result"
  yarn-upgrade $d &> "UPGRADE-$d.log" &
done

wait
