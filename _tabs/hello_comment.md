---
title: Any comments?
order: 4
---

<!-- prettier-ignore-start -->
Look at the program
[`hello.js`](https://github.com/quacksouls/lyf/blob/main/assets/src/hello/hello.js)
again from the section
[Your first program](../hello_hello/). Notice the funny line
`/** @param {NS} ns */`? It is one of various ways that JavaScript allows you to
insert a comment in your code. You start a comment with the comment opener `/**`
and end the comment with the comment closer `*/`. When the script
[`hello.js`](https://github.com/quacksouls/lyf/blob/main/assets/src/hello/hello.js)
runs, everything between `/**` and `*/` will be ignored. You could also have
written the comment of
[`hello.js`](https://github.com/quacksouls/lyf/blob/main/assets/src/hello/hello.js)
as follows:
<!-- prettier-ignore-end -->

[`hello-doc-multiline.js`](https://github.com/quacksouls/lyf/blob/main/assets/src/hello/hello-doc-multiline.js)
```js
/**
 * Greetings.
 *
 * @param {NS} ns The Netscript API.
 */
export async function main(ns) {
    ns.tprint("Hello, world!");
}
```

What's that funny `{NS}`? Do not worry about it for now. We will discuss it
later in the tutorial, in the chapter
[Put that in a function](../function_declare/#not-my-type). You can also write
the comment like this:

[`hello-doc-line.js`](https://github.com/quacksouls/lyf/blob/main/assets/src/hello/hello-doc-line.js)
```js
// Greetings.
//
// @param {NS} ns The Netscript API.
export async function main(ns) {
    ns.tprint("Hello, world!");
}
```

The comment pattern `/** <comment goes here> */` is ideal for multiline
comments. Use this pattern to explain the purpose of a block of code. The
comment pattern `// <comment goes here>` is often used for a one-line comment, a
short description of a line or block of code. The program below illustrates the
use of the multiline and one-line documentation styles.

[`greet.js`](https://github.com/quacksouls/lyf/blob/main/assets/src/hello/greet.js)
```js
/**
 * More greetings.
 *
 * @param {NS} ns The Netscript API.
 */
export async function main(ns) {
    // Some greetings.
    ns.tprint("Hello!"); // Salutation.
    ns.tprint("How are you today?"); // Friendly question.
}
```

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
