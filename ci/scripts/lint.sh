#!/bin/bash -eux

pushd sixteens
  npm install --unsafe-perm
  npm run lint
popd
