# Put that in a function

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
in front of the name. For now, ignore the keywords `export` and `async`.
Instead, use the template below to define your own custom functions:

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

Your function can take zero, one, or more parameters. Parameters are data you
give to the function to do whatever it needs to in order to generate the result
you want. The function `ns.tprint(s)` takes one parameter `s`, which is a
string, and does whatever is required to print the string to the terminal. The
function `main(ns)` also takes one parameter, the name `ns`.

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

-   Bow and arrow
-   Who is anonymous?
-   What are my options?
-   Closure

[[TOC](../README.md "Table of Contents")]
[[Previous](decide.md "Decision, decision")]
[[Next](organize.md "Organize your data")]

[![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-blue.svg)](http://creativecommons.org/licenses/by-nc-sa/4.0/)
