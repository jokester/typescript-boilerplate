#!/usr/bin/env bash

set -ue
set -o pipefail
cd $(dirname "$0")/..

vimdiff */package.json
vimdiff */.env
vimdiff */.gitignore

vimdiff */.eslintignore
vimdiff */.eslintrc.js

vimdiff */.prettierrc.js
vimdiff */jest.config.js
vimdiff */.browserslistrc
vimdiff */tsconfig.json
