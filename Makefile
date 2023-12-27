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

SUMMARY = _data/summary.yml

# Build the document.
build: clean pretty
	util/process.sh
	bundle exec jekyll build

# Remove various junk files.
clean:
	rm -rf *~
	rm -rf _site/
	rm -rf _posts/
	rm -rf _tabs/
	rm -rf util/*~
	rm -rf util/ext/*~
	rm -rf util/lint/*~

# Lint and auto-format C files.
lintc:
	util/lint/c.sh

# Lint and auto-format Haskell files.
linths:
	util/lint/haskell.sh

# Lint and auto-format JavaScript files.
lintjs:
	npm run jslint

# Lint and auto-format Python files.
lintpy:
	util/lint/python.sh

# Lint and auto-format Ruby files.
lintrb:
	util/lint/ruby.sh

# Lint shell scripts.
lintsh:
	util/lint/shell.sh

# Run Prettier over Markdown files.
pretty:
	npm run clean

# View the document locally.
view: clean pretty
	# Comment out the site URL prefix.  The prefix is only required when
	# building the site on GitHub Pages.  We do not need the prefix for a
	# local preview.  Ensure you remove the changes in git when you no
	# longer need a local preview.
	sed --in-place 's/^prefix/#prefix/g' $(SUMMARY)
	util/process.sh
	bundle exec jekyll serve

.PHONY: build clean lintc linths lintjs lintpy lintrb lintsh pretty view
