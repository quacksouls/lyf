#!/usr/bin/env bash

################################################################################
## MIT License
##
## Copyright (C) 2023 Duck McSouls <quacksouls [AT] gmail [DOT] com>
##
## Permission is hereby granted, free of charge, to any person obtaining a copy
## of this software and associated documentation files (the "Software"), to deal
## in the Software without restriction, including without limitation the rights
## to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
## copies of the Software, and to permit persons to whom the Software is
## furnished to do so, subject to the following conditions:
##
## The above copyright notice and this permission notice shall be included in
## all copies or substantial portions of the Software.
##
## THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
## IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
## FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
## AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
## LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
## OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
## SOFTWARE.
################################################################################

# Process all parts of the document and output the results to the destination
# where Jekyll wants them.

################################################################################
# Global variables
################################################################################

# All parts of the document should be under this directory by default.
declare -r DOC=doc

# The general error code for Bash.  See this document for more details:
#
# https://tldp.org/LDP/abs/html/exitcodes.html
declare -r ERROR=1

# This file contains the structure of our entire document.
declare -r SUMMARY=_data/summary.yml

# Extract the URL of each section/chapter and place in this file.
declare -r SUMMARY_URL=_data/summary_url.yml

# Jekyll expects all parts of the document to be under this directory.
declare -r TAB=_tabs

# Our utility scripts are found under this directory.
declare -r UTIL=util

################################################################################
# Start here
################################################################################

# Some cleanup and sanity checks.
if [ ! -d "$DOC" ]; then
    echo "Directory not found: ${DOC}"
    exit "$ERROR"
fi
if [ ! -f "$SUMMARY" ]; then
    echo "File not found: ${SUMMARY}"
    exit "$ERROR"
fi
if [ -f "$SUMMARY_URL" ]; then
    rm -rf "$SUMMARY_URL"
fi
if [ -d "$TAB" ]; then
    rm -rf "$TAB"
fi

# Copy files over to the directory where Jekyll wants them.
if [ ! -d "$TAB" ]; then
    mkdir "$TAB"
fi
grep "url:" "$SUMMARY" > "$SUMMARY_URL"
ruby "${UTIL}/structure.rb" "$SUMMARY_URL"
rm -rf "$SUMMARY_URL"

# Process each section/chapter for the following:
#
# (1) Exercises.
# (2) Inclusion of source files.
# (3) Links to YouTube videos.
for i in "${TAB}"/*.md; do
    ruby "${UTIL}/ext/exercise.rb" "$i"
    ruby "${UTIL}/ext/src.rb" "$i"
    ruby "${UTIL}/ext/youtube.rb" "$i"
done

# Final cleanup?
