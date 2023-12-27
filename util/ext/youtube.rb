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

# Create a link to a YouTube video.
#
# @param id The ID of a YouTube video.
# @param title The title of the video.
# @returns A link to the video with the given ID.
def create_link(id, title)
    yt = "http://www.youtube.com/watch?v"
    img = "http://img.youtube.com/vi"
    link_fmt = 'target="_blank" rel="noopener"'
    header = format('<a href="%s=%s" %s>%s</a>', yt, id, link_fmt, title)
    image = format('<a href="%s=%s" title="%s" %s>', yt, id, title, link_fmt)
    image += format('<img src="%s/%s/0.jpg" alt="%s"></a>', img, id, title)
    return format("%s<br/>\n%s\n", header, image)
end

# Process links to YouTube videos.  The link to a YouTube video follows this
# format:
#
# yt_id="abc"
# yt_title="xyz"
#
# Replace "abc" with the video ID and replace "xyz" with the title of the
# video.  For example:
#
# yt_id="p3G5IXn0K7A"
# yt_title="The Hamsterdance Song"
#
# This script expects the following command line argument:
#
# doc := A section/chapter in the entire document.  Assumed to be located under
#     the directory "_tabs/".
def main
    doc = ARGV[0]
    id_delim = "yt_id"
    title_delim = "yt_title"
    has_id = false
    has_title = false
    id = ""
    title = ""
    content = ""
    File.foreach(doc) do |line|
        if line.strip.start_with?(id_delim)
            id = line.strip.split("=")[-1]
            id = id.scan(/^"(\S+)"$/).last[-1]
            has_id = true
            next
        end
        if line.strip.start_with?(title_delim)
            title = line.strip.split("=")[-1]
            title = title.split(/^"/)[-1]
            title = title.split(/"$/)[-1]
            has_title = true
        end
        if has_id && has_title
            content += create_link(id, title)
            has_id = false
            has_title = false
            next
        end
        content += line if !has_id && !has_title
    end
    # Overwrite the existing content of the file.
    File.write(doc, content)
end

################################################################################
# Start here
################################################################################

main
