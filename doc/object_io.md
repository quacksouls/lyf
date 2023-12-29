---
title: Objects and I/O
---

Objects can be written to files and be read from files. Text files are a common
means of sharing data between different programs. In Bitburner, you use the
function [`ns.read()`][read] to read from a text file. Use the function
[`ns.write()`][write] to write to a text file. The script below writes an object
to file. The script then reads the object from file and compares the read object
with the original object.

:include: file="assets/src/object/object-io.js", line=25:-

The above script uses the method [`JSON.stringify()`][stringify] to first
convert an object to its string representation, then writes the string to file.
After reading the string representation from file, the script uses the method
[`JSON.parse()`][parse] to convert the string representation to an object. As
you can see, `JSON.stringify()` and `ns.write()` can be used together to save an
object to file, whereas `JSON.parse()` and `ns.read()` allow you to read an
object from file.

<!--=========================================================================-->

<!-- prettier-ignore-start -->
[parse]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse
[read]: https://github.com/bitburner-official/bitburner-src/blob/dev/markdown/bitburner.ns.read.md
[stringify]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
[write]: https://github.com/bitburner-official/bitburner-src/blob/dev/markdown/bitburner.ns.write.md
<!-- prettier-ignore-end -->
