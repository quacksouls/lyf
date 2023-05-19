# Any comments?

Look at the program `Hello, world` again from the section
[_Your first program_](hello.md). Notice the funny line `/** @param {NS} ns */`?
It is one of various ways that JavaScript allows you to insert a comment in your
code. You start a comment with the comment opener `/**` and end the comment with
the comment closer `*/`. When the script `hello.js` runs, everything between
`/**` and `*/` will be ignored. You could also have written the comment of
`hello.js` as follows:

[import, title="hello.js"](code/hello-doc-multiline.js)

What's that funny `{NS}`? Do not worry about it for now. We will discuss it
later in the tutorial, in the chapter
[_Put that in a function_](../function/declare.md#not-my-type). You can also
write the comment like this:

[import, title="hello.js"](code/hello-doc-line.js)

The comment pattern `/** <comment goes here> */` is ideal for multiline
comments. Use this pattern to explain the purpose of a block of code. The
comment pattern `// <comment goes here>` is often used for a one-line comment, a
short description of a line or block of code. The program below illustrates the
use of the multiline and one-line documentation styles.

[import](code/greet.js)

If a computer is going to ignore comments, why would you bother to insert
comments in your script? The usual reason is documentation. A computer executes
your JavaScript code, but it is a human (most probably yourself) who would be
reading and trying to understand the code at some future time. You write code
not just for a computer, but for other humans as well. Imagine you are trying to
solve a programming problem. You struggle for a few hours, maybe a few days or
weeks. After a while, you find a clever solution and write up the solution as
JavaScript code. The code works and outputs the correct result. You move on to
another problem or some other challenge. Some time passed, probably a few weeks
or months. You come back to the code for the clever solution and have forgotten
how or why the code works. Reading the code gives you some hints, but you still
struggle to remember the name of the technique you used. If only you had written
at least a one-line comment to explain the technique. The situation is
contrived, absolutely. The message is clear: document your code. Even if it is a
one-line comment, use that single line to note the name of the (tricky or
clever) technique the code is implementing.