---
title: The function main()
---

<!-- prettier-ignore-start -->
Bitburner executes your script
:script: file="assets/src/hello/hello-doc-multiline.js"
starting from the line:

:include: file="assets/src/hello/hello-doc-multiline.js", line=30:30
<!-- prettier-ignore-end -->

This is the function `main()`. Don't worry yet about the segment
`export async function` or the `ns` between the parentheses. We will come back
to it later in the tutorial. All you need to know for now is `ns` is a parameter
of `main()` and `ns` encapsulates all functions defined by Bitburner for you to
interact with the game. The functions defined by Bitburner are collectively
called the [Netscript API][NetscriptAPI], which is separate from the standard
[JavaScript API][JavaScriptAPI]. Your code is to be inserted at the place shown
below:

<!-- prettier-ignore-start -->
:include: file="assets/src/hello/template.js", line=25:-
<!-- prettier-ignore-end -->

The opening brace `{` delimits the start of the function `main()`. The ending
brace `}` delimits the end of the function. Your code goes between the opening
and closing braces.

<!--=========================================================================-->

## Exercises

<!-- prettier-ignore-start -->
:exercise:
You might have guessed that the function `ns.tprint()` is Bitburner's way of
allowing you to print a message to the terminal. Let's use the function to
output a different message to the terminal. Copy the code below to another
script, say `intro.js`. Run the script from the terminal. What is printed to the
terminal?
<!-- prettier-ignore-end -->

:include: file="assets/src/hello/intro.js", line=25:-

<!-- prettier-ignore-start -->
:exercise: label="exIntro"
Edit the script
:script: file="assets/src/hello/intro.js"
so it would print your name when executed.
<!-- prettier-ignore-end -->

<!-- prettier-ignore-start -->
:exercise:
Modify your script from the [previous exercise](#exIntro) to also print your
favourite food.
<!-- prettier-ignore-end -->

<!--=========================================================================-->

<!-- prettier-ignore-start -->
[JavaScriptAPI]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference
[NetscriptAPI]: https://github.com/bitburner-official/bitburner-src/blob/stable/markdown/bitburner.ns.md
<!-- prettier-ignore-end -->
