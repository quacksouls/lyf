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

# A blank line after the license header.
#
# @param src Path to a Haskell source file.
# @returns The same file, but with a blank line after the license header.
def header_space(src)
    blank = ""
    content = blank
    prev = blank
    # rubocop:disable Layout/LineLength
    delim = "--------------------------------------------------------------------------------"
    # rubocop:enable Layout/LineLength
    ndelim = 0
    File.foreach(src) do |line|
        ndelim += 1 if line.strip.start_with?(delim) && ndelim < 2
        content += "\n" if prev == delim && ndelim == 2 && (line.strip != blank)
        content += line
        prev = line.strip
    end
    return content
end

# Miscellaneous formatting of Haskell files.  This script expects the following
# command line argument:
#
# src := A Haskell source file.  Assumed to be located under the directory
#     "assets/src/".
def main
    src = ARGV[0]
    # Overwrite the existing content of the file.
    File.write(src, header_space(src))
end

################################################################################
# Start here
################################################################################

main
