---
title: I declare
math: true
order: 17
---

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

[`template.js`](https://github.com/quacksouls/lyf/blob/main/assets/src/hello/template.js)
```js
/**
 * Explain what the function is trying to accomplish.
 *
 * @param {NS} ns The Netscript API.
 */
export async function main(ns) {
    // Insert your code here.
}
```

Here, the `main()` function is created via the declaration notation. You declare
`main()` to be a function by using the keyword [`function`][function] in front
of the name. For now, ignore the keywords `export` and `async`. Use the template
below to define your own custom functions:

[`func-template.js`](https://github.com/quacksouls/lyf/blob/main/assets/src/function/func-template.js)
```js
/**
 * Explain what the function does.
 *
 * @param {typeA} paramA Explain this parameter.
 * @param {typeB} paramB Explain this other parameter.
 * ...
 * @returns {typeZ} Explain the output of the function, if any.
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
functions defined in Bitburner to play the game. All functions defined by
Bitburner, and used via the name `ns`, are collectively referred to as the
[Netscript API][NetscriptAPI]. Thus `ns.tprint()` is a function in Bitburner and
not part of the standard library of JavaScript functions. You have already used
functions from the standard JavaScript library, e.g. [`Math.pow()`][pow] and
[`parseInt()`][parseInt]. You want to get technical? Listen to Tabby whisper
quietly into your ear: `Math.pow()` is not a function, it's a _method_. The
difference is technical, but the general idea is the same. You use a name to
refer to multiple lines of code that does a specific job. Anytime you need to
repeat the same task, use the function instead of writing the same code again.

<!--=========================================================================-->

## Not my type

What about the text `{typeA}` or `{NS}` in the function documentation? You have
seen the snippet `{NS}` a lot in the tutorial so far without knowing why it is
there in the documentation of the function `main()`. The text `{NS}` is meant to
document the _type_ of the parameter `ns` in the function `main()`. The word
_type_ here means _data type_, the kind of data we are dealing with. The
parameter `ns` belongs to a type called `NS` specific to the game Bitburner. You
have already learnt various data types from the chapter
[Data, darta, dayta](../data_README). Recall that _number_ is a data type,
_string_ is a data type, and _boolean_ is a data type. An example should help to
clarify data types and how to document them.

Sam writes a function to pet Tabby, as shown below.

[`pet-tabby.js`](https://github.com/quacksouls/lyf/blob/main/assets/src/function/pet-tabby.js)
```js
/**
 * Pet my house pet.
 *
 * @param {string} name My pet's name.
 * @param {number} num How many times to pet.
 * @returns {boolean} Whether the petting was successful.
 *     True if the petting was successful; false otherwise.
 */
function pet(name, num) {
    // Insert code here to pet.
}

/**
 * Petting Tabby the cat.
 *
 * @param {NS} ns The Netscript API.
 */
export async function main(ns) {
    const result = pet("Tabby", 3);
}
```

The function `pet()` takes 2 parameters: `name` and `num`. The parameter `name`
is meant to be a string that holds the name of a pet, whereas `num` is a number
that counts how many times Sam wants to do the petting. As `name` is meant to be
a string, the documentation of the function accordingly has the segment
`@param {string} name` to tell us that the data type of `name` is string.
Similarly, the segment `@param {number} num` tells us that the data type of
`num` is number. Finally, the function is meant to return a signal indicating
whether the petting was successful. The documentation snippet
`@returns {boolean}` tells us that the function `pet()` is expected to return a
boolean. Why go to all the trouble writing up documentation for the various
parameters and return type of the function `pet()`? When you call the function,
as we do in the function `main()` above, you can hover your mouse cursor over
the function name and it would show you the documentation of the function, as
illustrated in the image below.

<!-- prettier-ignore-start -->
![Doc string](function/doc.png "Doc string")
_Doc string_
<!-- prettier-ignore-end -->

As shown in the image, the documentation (as revealed when you hover your mouse
cursor over the function name) can help you to correctly use the function you
are invoking.

<!--=========================================================================-->

## More functions

You can certainly write your own function to perform exponentiation. Given a
number $b$ called the base, you raise $b$ to another number $n$ called the
exponent. You already know that the operator `**` in JavaScript is used for
exponentiation. Your custom `pow()` function might be something like this:

[`my-pow.js`](https://github.com/quacksouls/lyf/blob/main/assets/src/function/my-pow.js)
```js
/**
 * Raise a number to a given power.
 *
 * @param {number} base Raise this number to a power.
 * @param {number} exponent Raise base to this power.
 * @returns {number} Raise base to the given exponent.
 */
function pow(base, exponent) {
    const result = base ** exponent;
    return result;
}

/**
 * Exponentiation.
 *
 * @param {NS} ns The Netscript API.
 */
export async function main(ns) {
    const n = pow(2, 3);
    ns.tprintf(`2 raised to the power of 3 is: ${n}`);
}
```

The keyword [`return`][return] is used to give a result to whatever function is
calling the function `pow()`. In the above example, it is the function `main()`
that calls (or executes) the function `pow()`. The result given by `pow()` is
assigned to the variable `n` and then a custom message is printed to the
terminal.

Recall from the section [I can't decide](../decide_conditional) that Friday is
Tabby's salmon day. Sam wants to create a function that accepts one parameter,
i.e. the day of the week. The function checks to see whether the given day is
Friday and, if so, returns `true` to remind Sam to feed salmon to Tabby. Here is
Sam's script:

[`salmon-func.js`](https://github.com/quacksouls/lyf/blob/main/assets/src/function/salmon-func.js)
```js
/**
 * Is it Tabby's salmon day?
 *
 * @param {string} day Test this day.
 * @returns {boolean} True if it is Tabby's salmon day; false otherwise.
 */
function salmonDay(day) {
    if (day === "Friday") {
        return true;
    }
    return false;
}

/**
 * Salmon day for Tabby.
 *
 * @param {NS} ns The Netscript API.
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

<!--=========================================================================-->

## Exercises

<!-- prettier-ignore-start -->
<strong>Exercise 1.</strong> Use the ternary operator to shorten the function `salmonDay()` in the script
[`salmon-func.js`](https://github.com/quacksouls/lyf/blob/main/assets/src/function/salmon-func.js)
. Shorten the function again, but without using the ternary operator.
<!-- prettier-ignore-end -->

<!-- prettier-ignore-start -->
<strong>Exercise 2.</strong> Use functions to rewrite the script
[`lifespan.js`](https://github.com/quacksouls/lyf/blob/main/assets/src/decide/lifespan.js)
from the section
[The statement `if...else if...else`](../decide_choice/#the-statement-ifelse-ifelse)
and the script
[`stage-to-age.js`](https://github.com/quacksouls/lyf/blob/main/assets/src/decide/stage-to-age.js)
from the section [The statement `switch`](../decide_choice/#the-statement-switch).
<!-- prettier-ignore-end -->

<!-- prettier-ignore-start -->
<strong>Exercise 3.</strong> Write a function that returns the current day of the week.
<!-- prettier-ignore-end -->

<!-- prettier-ignore-start -->
<strong>Exercise 4.</strong> Write a function that, given a positive integer $n$, returns the sum of all
positive integers from 1 up to and including $n$.
<!-- prettier-ignore-end -->

<!-- prettier-ignore-start -->
<strong>Exercise 5.</strong> Write a function that reverses the digits of an integer.
<!-- prettier-ignore-end -->

<!-- prettier-ignore-start -->
<strong>Exercise 6.</strong> Given a temperature value in Fahrenheit, its equivalent value in Celsius is
<!-- prettier-ignore-end -->

$$
\text{Celsius}
=
\frac{
  \text{Fahrenheit} - 32
}{
  1.8
}
$$

Write a function to convert a temperature value from Fahrenheit to Celsius.

<!-- prettier-ignore-start -->
<strong>Exercise 7.</strong> Use the above formula to write a function that converts a temperature value from
Celsius to Fahrenheit.
<!-- prettier-ignore-end -->

<!-- prettier-ignore-start -->
<strong>Exercise 8.</strong> Write a function to count the number of vowels in a string. Create another
function to count the number of distinct vowels. Test with these strings:
`"Mississippi"` and `"The quick brown fox jumps over a lazy dog."`.
<!-- prettier-ignore-end -->

<!-- prettier-ignore-start -->
<strong>Exercise 9.</strong> Write a function that, given a positive integer $n$, returns a random integer
between 0 and $n$, inclusive.
<!-- prettier-ignore-end -->

<!-- prettier-ignore-start -->
<strong>Exercise 10.</strong> The [Fibonacci sequence][FibonacciSequence] is defined as follows. We have the
initial cases of $F_0 = 0$ and $F_1 = 1$. If $n > 1$, then the $n$-th Fibonacci
number $F_n$ is defined as
<!-- prettier-ignore-end -->

$$
F_n = F_{n-1} + F_{n-2}
$$

Write a function that, given an integer $n > 1$, returns the $n$-th Fibonacci
number.

<!--=========================================================================-->

<!-- prettier-ignore-start -->
[FibonacciSequence]: https://en.wikipedia.org/wiki/Fibonacci_sequence
[function]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function
[NetscriptAPI]: https://github.com/bitburner-official/bitburner-src/blob/stable/markdown/bitburner.ns.md
[parseInt]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
[pow]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/pow
[return]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return
<!-- prettier-ignore-end -->
