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

# Lint and auto-format Haskell files.
linths:
	util/lint/haskell.sh

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
	util/process.sh
	bundle exec jekyll serve

.PHONY: build clean lintrb linths lintsh pretty view
