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

# Extract an exercise label.
#
# @param line A line of text containing the exercise format.
# @return The label of the exercise.  The empty string if the exercise does not
#     contain a label.
def extract_label(line)
    return "" unless label?(line)

    return line.gsub(/:exercise:/, "").gsub(/label=/, "").strip
end

# Whether an exercise has a label.  A label is typically used for
# cross-referencing.
#
# @param line A line of text containing the exercise format.
# @return True if the exercise has a label; false otherwise.
def label?(line)
    return line.include?("label=")
end

# Number the exercises in a section/chapter.  Each exercise follows this
# format:
#
# :exercise:
# Insert text of the exercise.
#
# The text ":exercise:" delimits the beginning of an exercise and should be on
# its own line.  You can label an exercise in order to cross-reference it
# within the same document or from a different document.  Labelling an exercise
# is optional.  Label an exercise according to this format:
#
# :exercise: label="my_label"
# Insert text of the exercise.
#
# This script expects the following command line argument:
#
# doc := A section/chapter in the entire document.  Assumed to be located under
#     the directory "_tabs/".
def main
    doc = ARGV[0]
    ex_delim = ":exercise:"
    n = 1
    content = ""
    File.foreach(doc) do |line|
        if line.strip.start_with?(ex_delim)
            label = extract_label(line)
            prefix = label?(line) ? format("<strong id=%s>", label) : "<strong>"
            content += format("%sExercise %d.</strong> ", prefix, n)
            n += 1
        else
            content += line
        end
    end
    # Overwrite the existing content of the file.
    File.open(doc, "w") do |f|
        f.write(content)
    end
end

################################################################################
# Start here
################################################################################

main
