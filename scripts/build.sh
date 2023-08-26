#!/bin/bash

rm -rf dist/*; microbundle build --entry src/index.ts --name ts-object-formatter --tsconfig tsconfig.json
