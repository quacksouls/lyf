#!/usr/bin/env bash

npm run clean
npx honkit build
cp -R _book/* .
