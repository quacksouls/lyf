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

# Link to a source file.
#
# @param dir A shortened directive, without the ":include:" or ":script:"
#     annotations.
# @returns A link to a source file as contained in the shortened directive.
def create_link(dir)
    github = "https://github.com/quacksouls/haskyll/blob/main"
    file, name, = get_field_values(dir)
    return format("[`%s`](%s/%s)\n", name, github, file)
end

# Get the content of a text file.
#
# @param file Read in this file.
# @param linefmt The line format is "a:b" and has the following meanings:
#     (1) If "a" and "b" are both "-", then include the whole source file.
#     (2) If "a" is "-" and "b" is a number n, include from the start of the
#         source file up to and including line n.
#     (3) If "a" is a number k and "b" is "-", include from line k to the end
#         of the source file.
#     (4) If "a" is a number k and "b" is a number n, include from line k up to
#         and including line n.
# @returns The content of the given file, possibly the whole file or a section.
def get_content(file, linefmt)
    start, last = linefmt.split(":")
    start = if start == "-"
                1
            else
                Integer(start)
            end
    last = if last == "-"
               10**6
           else
               Integer(last)
           end
    content = ""
    n = 1
    File.foreach(file) do |line|
        if n < start
            n += 1
            next
        end
        content += line
        n += 1
        break if n > last
    end
    return content
end

# Extract the field values.  The inclusion follows this format:
#
# :include: file="/path/to/source/file.extension", name="short name", line=a:b
#
# The field values are therefore:
#
# (1) /path/to/source/file.extension
# (2) short name
# (3) a:b
#
# @param dir A shortened directive, without the ":include:" or ":script:"
#     annotations.
# @returns An array containing only the file name and short name, without
#     annotations.
def get_field_values(dir)
    file, name, line = dir.split(",").map{ |str| str.strip }
    file = file.scan(/^file="(\S+)"$/).last[-1]
    name = name.scan(/^name="(\S+)"$/).last[-1]
    line = if line.nil?
               "-:-"
           else
               line.split("=")[-1]
           end
    return [file, name, line]
end

# Embed source code into a document.  The inclusion follows this format:
#
# :include: file="/path/to/source/file.extension", name="short name", line=a:b
#
# The source file will be included starting from line a and ending at line b.
# The source code will be placed between two sets of triple backticks.  The
# extension of the included file will be used to infer syntax highlighting.
#
# @param line A line that specifies the inclusion format.
# @returns A string containing the source code to include in our document.
def include_src(line)
    content = ""
    new_line = line.gsub(/:include:/, "").strip
    file, _, line = get_field_values(new_line)
    content += create_link(new_line)
    content += format("```%s\n", infer_language(file))
    content += get_content(file, line)
    content += "```\n"
    return content
end

# Infer the programming language from the extension of the source file.
#
# @param file Path to a source file.
# @returns The programming language of the source code.
def infer_language(file)
    lang = {
        "c" => "c",
        "hs" => "haskell",
        "js" => "js",
        "py" => "py"
    }
    ext = file.split("/")[-1]
    ext = ext.split(".")[-1]
    return unless lang.key?(ext)

    return lang[ext]
end

# Process various script-related directives.  The supported directives are:
#
# (1) Include within a section or chapter a source file that has programming
#     code.  The inclusion follows this format:
#
#     :include: file="/path/to/source/file.extension", name="short name", line=a:b
# (2) Link to a source file.  The linking follows this format:
#
#     :script: file="/path/to/source/file.extension", name="a short name"
#
# This script expects the following command line argument:
#
# doc := A section/chapter in the entire document.  Assumed to be located under
#     the directory "_tabs/".
def main
    doc = ARGV[0]
    in_delim = ":include:"
    sc_delim = ":script:"
    content = ""
    File.foreach(doc) do |line|
        if line.strip.start_with?(in_delim)
            content += include_src(line)
        elsif line.strip.start_with?(sc_delim)
            new_line = line.gsub(/:script:/, "").strip
            content += create_link(new_line)
        else
            content += line
        end
    end
    # Overwrite the existing content of the file.
    File.write(doc, content)
end

################################################################################
# Start here
################################################################################

main
