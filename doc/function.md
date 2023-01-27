# Put that in a function

This section is about managing your code. You will learn various ways to help
you organize your code. Organization is important not only for readability but
also to help you discover blocks of code that can be reused in multiple scripts.

## I declare

A _function_ is a bunch of code associated with a name. This is not strictly
correct, but is good enough to know without being bogged down by nuance and
minutiae. You have been using functions already. Remember `ns.tprint()` and its
cousin `ns.tprintf()`? Those are functions. The name `tprint()` encapsulates one
or multiple lines of code that does whatever it needs to in order to output a
given string to the terminal. How about our constant companion `main()`
throughout the journey so far? The name `main()` encloses a bunch of code you
wrote to perform a specific task. That leads us to the topic of how to create a
function.

A function can be created by using the _declaration_ notation. You have been
using the declaration notation already without knowing it. Recall the following
template:

```js
export async function main(ns) {
    // Insert code here.
}
```

Here, the `main()` function is created via the declaration notation. You declare
`main()` to be a function by using the keyword
[`function`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)
in front of the name. For now, ignore the keywords `export` and `async`. Use the
template below to define your own custom functions:

```js
/**
 * Explain what the function does.
 *
 * @param paramA Explain this parameter.
 * @param paramB Explain this parameter.
 * ...
 * @returns Explain the output of the function, if any.
 */
function funcName(paramA, paramB, ...) {
    // Insert code here.
}
```

Replace `funcName` with a descriptive name for your function. Your function can
take zero, one, or more parameters. Parameters are data you give to the function
to do whatever it needs to in order to generate the result you want. The
function `ns.tprint(s)` takes one parameter `s`, which is a string, and does
whatever is required to print the string to the terminal. The function
`main(ns)` also takes one parameter, the name `ns`.

In Bitburner, `ns` is a special name because `ns` allows you to use all
functions defined in Bitburner to play the game. Thus `ns.tprint()` is a
function in Bitburner and not part of the standard library of JavaScript
functions. You have already used functions from the standard JavaScript library,
e.g.
[`Math.pow()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/pow)
and
[`parseInt`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt).
You want to get technical? Listen to Tabby whisper quietly into your ear:
`Math.pow()` is not a function, it's a _method_. The difference is technical,
but the general idea is the same. You use a name to refer to multiple lines of
code that does a specific job. Anytime you need to repeat the same task, use the
function instead of writing the same code again.

You can certainly write your own function to perform exponentiation. Given a
number $b$ called the base, you raise $b$ to another number $n$ called the
exponent. You already know that the operator `**` in JavaScript is used for
exponentiation. Your custom `pow()` function might be something like this:

```js
/**
 * Raise a number to a given power.
 *
 * @param base Raise this number to a power.
 * @param exponent Raise base to this power.
 * @returns Raise base to the given exponent.
 */
function pow(base, exponent) {
    const result = base ** exponent;
    return result;
}

/**
 * Exponentiation.
 *
 * @param ns The Netscript API.
 */
export async function main(ns) {
    const n = pow(2, 3);
    ns.tprintf(`2 raised to the power of 3 is: ${n}`);
}
```

The keyword
[`return`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return)
is used to give a result to whatever function is calling the function `pow()`.
In the above example, it is the function `main()` that calls (or executes) the
function `pow()`. The result given by `pow()` is assigned to the variable `n`
and then a custom message is printed to the terminal.

Recall from the subsection [I can't decide](decide.md#i-cant-decide) that Friday
is Tabby's salmon day. Sam wants to create a function that accepts one
parameter, i.e. the day of the week. The function checks to see whether the
given day is Friday and if so then returns `true` to remind Sam to feed salmon
to Tabby. Here is Sam's script:

```js
/**
 * Is it Tabby's salmon day?
 *
 * @param day Test this day.
 * @returns True if it is Tabby's salmon day; false otherwise.
 */
function salmonDay(day) {
    if (day === "Friday") {
        return true;
    }
    return false;
}

/**
 * salmon-func.js
 *
 * Salmon day for Tabby.
 *
 * @param ns The Netscript API.
 */
export async function main(ns) {
    const today = "Friday";
    const tomorrow = "Saturday";
    if (salmonDay(today)) {
        ns.tprintf("Feed Tabby a slice of salmon.");
    }
    if (!salmonDay(tomorrow)) {
        ns.tprintf("No salmon for Tabby tomorrow.");
    }
}
```

### Exercises

> **Exercise 1.** Use the ternary operator to shorten the function `salmonDay()`
> in the script `salmon-func.js`. Shorten the function again, but without using
> the ternary operator.
>
> **Exercise 2.** Use functions to rewrite the script `lifespan.js` from the
> subsection [`if...else if...else`](decide.md#ifelse-ifelse) and the script
> `stage-to-age.js` from the subsection [`switch`](decide.md#switch).
>
> **Exercise 3.** Write a function that returns the current day of the week.
>
> **Exercise 4.** Write a function that, given a positive integer $n$, returns
> the sum of all positive integers from 1 up to and including $n$.
>
> **Exercise 5.** Write a function that reverses the digits of an integer.
>
> **Exercise 6.** Given a temperature value in Fahrenheit, its equivalent value
> in Celsius is

```math
Celsius
=
\frac{
    Fahrenheit - 32
}{
    1.8
}
```

> Write a function to convert a temperature value from Fahrenheit to Celsius.
>
> **Exercise 7.** Use the above formula to write a function that converts a
> temperature value from Celsius to Fahrenheit.
>
> **Exercise 8.** Write a function to count the number of vowels in a string.
> Create another function to count the number of distinct vowels. Test with
> these strings: `"Mississippi"` and
> `"The quick brown fox jumps over a lazy dog."`.
>
> **Exercise 9.** Write a function that, given a positive integer $n$, returns a
> random integer between 0 and $n$, inclusive.

## Bow and arrow

A second way to create a function is to define it within an expression. A
function defined in this manner is called a _function expression_ and follows
this format:

```js
/**
 * Explain the purpose of the function.
 *
 * @param paramA Explain this parameter.
 * @param paramB Explain this other parameter.
 * @param ... Any other parameters the function takes.
 * @returns Explain the return value(s) of the function, if any.
 */
const funcName = function(paramA, paramB, ...) {
    // Function body. Insert code here.
};
```

Replace `funcName` with a descriptive name for your function. You use `funcName`
the same way as if you created it via the declaration notation, i.e. execute
like this `funcName()`.

The function expression can be shortened by using the _arrow function
expression_, which follows this pattern:

```js
/**
 * Explain the purpose of the function.
 *
 * @param paramA Explain this parameter.
 * @param paramB Explain this other parameter.
 * @param ... Any other parameters the function takes.
 * @returns Explain the return value(s) of the function, if any.
 */
const funcName = (paramA, paramB, ...) => {
    // Function body. Insert code here.
};
```

The arrow function expression uses the arrow notation `=>` instead of the
`function` keyword. The parameter tuple `(paramA, paramB, ...)` can have zero,
one, or more parameters. You use the empty tuple `()` if the function does not
take any parameters.

Why do you need another way to create functions? Arrow function expressions are
useful when you need short, concise functions each of which does a specific task
well. Remember our `pow()` function from the subsection
[I declare](function.md#i-declare)? We can use arrow function expression to
shorten it as follows:

```js
/**
 * Exponentiation, but using arrow function expression.
 *
 * @param ns The Netscript API.
 */
export async function main(ns) {
    const pow = (a, b) => a ** b;
    const n = pow(2, 3);
    ns.tprintf(`2 raised to the power of 3 is: ${n}`);
}
```

Our `pow()` function above is a one-liner, which is why there is no need to
insert the starting brace `{` and the ending brace `}`. Furthermore, notice that
`pow()` is defined within another function, i.e. the `main()` function. Where is
the `return` statement? The `return` statement is implicit in a one-liner arrow
function expression.

Sometimes your arrow function expression requires multiple lines. That is when
you should enclose the function body within the braces `{` and `}`. Here is an
example:

```js
/**
 * Multiline arrow function expression.
 *
 * @param ns The Netscript API.
 */
export async function main(ns) {
    const printName = (name) => {
        if (name === "") {
            ns.tprintf("No name provided.");
            return;
        }
        ns.tprintf(`Your name is ${name}`);
    };
    printName("");
    printName("Sam");
}
```

Notice that you must insert an explicit `return` statement if your multiline
arrow function expression gives something back to the caller. In the above
example, if the given name is an empty string, then the function `printName()`
uses the `return` statement to exit the function. We could also have written the
function `printName()` by using the `if...else` statement, bypassing the
`return` statement altogether.

Here is another point worth discussing. How does the function `printName()` know
about `ns` when in fact we did not explicitly pass `ns` as an argument? The
short answer is _closure_. The function `printName()` is defined within
`main()`. Within the body of `main()` you can access `ns`. Any code within
`main()` therefore has access to `ns`, including the arrow function expression
`printName()`. If you place `printName()` outside the function `main()`, then
you must explicitly pass `ns` to `printName()` like so:

```js
/**
 * Print your name.
 */
const printName = (ns, name) => {
    if (name === "") {
        ns.tprintf("No name provided.");
        return;
    }
    ns.tprintf(`Your name is ${name}`);
};

/**
 * Multiline arrow function expression.
 *
 * @param ns The Netscript API.
 */
export async function main(ns) {
    printName(ns, "");
    printName(ns, "Sam");
}
```

### Exercises

> **Exercise 1.** Read more about function expression
> [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function).
>
> **Exercise 2.** Read more about arrow function expression
> [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions).
>
> **Exercise 3.** Use arrow function expression to simplify the script
> `salmon-func.js` from the subsection [I declare](function.md#i-declare).
>
> **Exercise 4.** Use arrow function expression to create a function that
> outputs your name to the terminal. The function takes zero arguments.
>
> **Exercise 5.** Use arrow function expression to create a function that prints
> a string as red. Write another function that prints a string as cyan.
>
> **Exercise 6.** Read more about closure
> [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures).

## Import and export

As you gain more experience in JavaScript programming, you might notice that
some of your scripts share a lot of common code. Instead of duplicating code
across multiple scripts, you want a function that does a task and use this
function in multiple scripts. Essentially you want to write a function once and
use it anywhere.

Consider the script `tabby-profile.js` from an exercise in the subsection
[String me along](data.md#string-me-along), reproduced below for reference:

```js
/**
 * tabby-profile.js
 *
 * A profile of Tabby the cat.
 *
 * @param ns The Netscript API.
 */
export async function main(ns) {
    const cyan = "\u001b[36m";
    const red = "\u001b[31m";
    const reset = "\u001b[0m";
    const name = "Name: Tabby Whiskers";
    const pic = "Pic: 🐱";
    const like = `${cyan}Likes${reset}: fish`;
    const hate = "Hates: broccoli";
    ns.tprintf(`${name}\n${pic}\n${like}\n${hate}`);
}
```

The script prints Tabby's full name, a picture of Tabby, together with what
Tabby likes and dislikes. Sam wants to output the following profile to the
terminal:

```js
/**
 * sam-profile.js
 *
 * A profile of Sam.
 *
 * @param ns The Netscript API.
 */
export async function main(ns) {
    const name = "Name: Sam McPherson";
    const like = "Likes: sushi";
    const hate = "Hates: spinach";
    ns.tprintf(`${name}\n${like}\n${hate}`);
}
```

As you can see, the scripts `tabby-profile.js` and `sam-profile.js` share a lot
of common code. In each of these scripts, you can write a function that prints
the following to the terminal: full name, like, dislike. You would then have the
same or similar function in two scripts. As you do not want to duplicate code, a
better option would be to write a function that prints a profile, then use that
function in each of the above scripts.

Some questions come to mind. Where should you place the profile function? How
are you to use the profile function in multiple scripts? You write the profile
function in a separate file. Let's call this file `util.js`, whose purpose is to
serve as a repository of utility functions that are used in multiple scripts.
Create the file `util.js` in the top-most directory like all scripts you have
created so far. For now, the content of `util.js` is like this:

```js
/**
 * Print a profile to the terminal.
 *
 * @param ns The Netscript API.
 * @param name A full name of someone or a pet.
 * @param like A string containing the likes of someone or a pet.
 * @param hate A string containing the dislikes of someone or a pet.
 */
export function profile(ns, name, like, hate) {
    const fname = `Name: ${name}`;
    const prefer = `Likes: ${like}`;
    const dislike = `Hates: ${hate}`;
    ns.tprintf(`${fname}\n${prefer}\n${dislike}`);
}
```

The keyword `export` as used above means other scripts can now use the function
`profile()`. The scripts `tabby-profile.js` and `sam-profile.js` can now be
implemented like this:

```js
import { profile } from "util.js";

/**
 * profile.js
 *
 * Output the profiles of Tabby and Sam to the terminal.
 *
 * @param ns The Netscript API.
 */
export async function main(ns) {
    profile(ns, "Tabby Whiskers", "fish", "broccoli");
    ns.tprintf("\n");
    profile(ns, "Sam McPherson", "sushi", "spinach");
}
```

The keyword `import` allows you to use functions exported by a script. You
import functions into your script like so:

```js
import { funcNameA, funcNameB, ... } from "/path/to/fileName.js";
```

The files `util.js` and `profile.js` are in the same directory, meaning that you
can replace the pattern `"/path/to/fileName.js"` with `"util.js"`. If `util.js`
is located within another directory and its absolute path is `/mydir/util.js`,
then you must replace the pattern `"/path/to/fileName.js"` with
`"/mydir/util.js"`.

[[TOC](../README.md "Table of Contents")]
[[Previous](decide.md "Decision, decision")]
[[Next](organize.md "Organize your data")]

[![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-blue.svg)](http://creativecommons.org/licenses/by-nc-sa/4.0/)
