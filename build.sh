#!/usr/bin/env bash

# Run this script to cleanse the Markdown files and convert them to
# HonKit book.

npm run clean
npx honkit build
cp -R _book/* .
