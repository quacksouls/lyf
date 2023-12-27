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

# Structure the entire document by ordering the sections/chapters.  This script
# expects the following command line argument:
#
# summary := This file lists the URL of each section/chapter.
def main
    summary = ARGV[0]
    n = 0
    File.foreach(summary) do |line|
        short_name = line.scan(%r{/(\S+)/}).last[-1]
        file = format("doc/%s.md", short_name)
        new_file = format("_tabs/%s.md", short_name)
        n += 1
        ordering(file, n, new_file)
    end
end

# Insert an order number into a text file.  Ordering is required for Jekyll to
# process and properly display the order of each file.
#
# @param file Insert an order number into this text file.
# @param num Insert this order number.
# @param output Write the new contents to this file.
def ordering(file, num, output)
    ndash = 0
    has_order = false
    delimiter = "---"
    content = ""
    File.foreach(file) do |line|
        # The front matter of a document is delimited by triple dashes like so:
        #
        # ---
        # title: Best title ever
        # ---
        #
        # We expect 2 sets of triple dashes.
        ndash += 1 if line.strip == delimiter
        if ndash == 2 && !has_order
            content += "order: #{num}\n"
            has_order = true
        end
        content += line
    end
    File.write(output, content)
end

################################################################################
# Start here
################################################################################

main
