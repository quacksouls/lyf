# The `main()` function

Bitburner executes your script [`hello.js`](code/hello-doc-multiline.js)
starting from the line

[import:6-6, title="hello.js"](code/hello-doc-multiline.js)

This is the `main()` function. Don't worry yet about the segment
`export async function` or the `ns` between the parentheses. We will come back
to it later in the tutorial. All you need to know for now is `ns` is a parameter
of `main()` and `ns` encapsulates all functions defined by Bitburner for you to
interact with the game. The functions defined by Bitburner are collectively
called the
[Netscript API](https://github.com/bitburner-official/bitburner-src/blob/stable/markdown/bitburner.ns.md),
which is separate from the standard
[JavaScript API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference).
Your code is to be inserted at the place shown below:

[import](code/template.js)

The opening brace `{` delimits the start of the `main()` function. The ending
brace `}` delimits the end of the function. Your code goes between the opening
and closing braces.

<!-- ====================================================================== -->

## Exercises

**Exercise 1.** You might have guessed that the function `ns.tprint()` is
Bitburner's way of allowing you to print a message to the terminal. Let's use
the function to output a different message to the terminal. Copy the code below
to another script, say `intro.js`. Run the script from the terminal. What is
printed to the terminal?

[import](code/intro.js)

**Exercise 2.** Edit the script [`intro.js`](code/intro.js) so it would print
your name when executed.

**Exercise 3.** Modify your script from Exercise 2 to also print your favourite
food.
