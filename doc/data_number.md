---
title: Pick a number
---

Numbers in JavaScript are represented as floating point numbers. The integer 42
and the number 42.0 have the same representation. This is convenient for working
with numbers because you do not need to worry about whether a number is an
integer or floating point.

<!-- prettier-ignore-start -->
Underneath it all, JavaScript uses 64 bits to represent each number. Why do you
need to know that each number in JavaScript is 64-bit? Usually you do not need
to care that a number is 64-bit. However, if you are working on a program that
uses very large numbers, you would have to worry about whether 64 bits are
enough for your purpose. Use the program
:script: file="assets/src/data/number.js"
below to help you determine the smallest and largest numbers that can be
represented on your computer. My computer has a 64-bit CPU and the results of
the program running on my computer are given in the comments. As you can see,
the [largest _safe_ integer][maxSafeInteger] I can have on my computer is a
little over 9 quadrillion and the [smallest _safe_ integer][minSafeInteger] is
the negative of the largest _safe_ integer.
<!-- prettier-ignore-end -->

:include: file="assets/src/data/number.js", line=25:-

Look again closely at the comments in the program. Why is the letter `e` in two
of the numbers? A number written as `5e3` or `1.5e4` is using scientific
notation. The letter `e` here means "exponent", telling you the exponent to
which you must raise `10`. Consider the number `5e3`. You write down `5`. The
part `e3` tells you to raise `10` to the power of `3`, i.e. `1000`. Now multiply
`5` by `1000` to obtain `5,000`. Thus `5e3` is a compact representation of the
expanded form `5,000`. By way of another example, the number `1.5e4` means that
you write down `1.5`. Raise `10` to the power of `4` to get `10,000`. Now
multiply `1.5` by `10,000` and you have `15,000`, which is the expanded version
of `1.5e4`. As you can see, the `e` (or scientific) notation is handy whenever
you want a compact representation for a large or small number. Do you want to
write 7 million in your program as `7000000` or as `7e6`?

<!--=========================================================================-->

## Special numbers

JavaScript defines three special numbers: [`NaN`][NaN], positive
[`Infinity`][Infinity], and [`-Infinity`][minusInfinity]. The symbol `NaN` means
Not-A-Number. It results when a number conversion fails or an operation cannot
be performed on two numbers, among other reasons. For example, you would get
`NaN` if you try to evaluate `0 / 0`. In some programming languages, attempting
to divide zero by zero would result in the immediate halt of your program.
JavaScript is lenient, but you still need to guard against having something as
absurd as `0 / 0` in your programs. The symbol `NaN` can also be accessed as
[`Number.NaN`][NumberNaN].

Positive `Infinity` is defined in JavaScript as the number greater than every
other number in the language. Similarly, the special number `-Infinity` is
defined as the number smaller than every other number. These two numbers are
useful in certain situations, but do not expect them to behave like their formal
mathematical definitions. The special numbers `Infinity` and `-Infinity` are the
same as [`Number.POSITIVE_INFINITY`][positiveInfinity] and
[`Number.NEGATIVE_INFINITY`][negativeInfinity], respectively.

<!--=========================================================================-->

## Variables

A variable in programming languages is like a named box that can hold a value.
You place a specific value into the box. Anytime you want to use the value, you
reference the name of the box. One way to create a variable in JavaScript is by
using the keyword [`let`][let]. Suppose you want to assign the number `7` to a
variable whose name is `number`. In JavaScript, you would do it like so:

:include: file="assets/src/data/variable.js", line=25:-

Note the equal sign `=`. In JavaScript, and indeed in many other programming
languages, the equal sign `=` does not mean mathematical equality like you have
been taught in mathematics classes during your school days. Instead, the equal
sign `=` is used in JavaScript to mean "assign". The statement `let number = 7;`
in effect says, "Let's create a variable called `number` and assign the number
`7` to the variable." From hereon, whenever you want the numeric value `7`, you
can use the variable `number` instead.

The keyword `let` is flexible. Once you have declared a variable using `let`,
you can assign a value to that variable. Later on in your program, you can
assign a different value to that same variable. There are cases where you do not
want a variable to have a value other than the value you first assigned it. An
example is the number of days in a week, namely 7. The number of days in a week
remain the same no matter which country you are in, unless you happen to be in a
country that uses a different kind of calendar. In JavaScript, how do you
declare as constant a variable that holds the number of days in a week? Do so
using the keyword [`const`][const], as shown in the script below.

:include: file="assets/src/data/week.js", line=25:-

<!--=========================================================================-->

## Exercises

<!-- prettier-ignore-start -->
:exercise:
Write the number `420,000,000` in terms of scientific notation.
<!-- prettier-ignore-end -->

<!-- prettier-ignore-start -->
:exercise:
Write the expanded form of the number `9.6e1`.
<!-- prettier-ignore-end -->

<!-- prettier-ignore-start -->
:exercise:
Why is the number `5e-3` different from `-5e3`?
<!-- prettier-ignore-end -->

<!-- prettier-ignore-start -->
:exercise:
[MDN Web Docs][MDNWebDocs] has up-to-date documentation about JavaScript. You
should be consulting the [JavaScript reference][JSreference] on MDN as you learn
JavaScript. Spend some time to browse through the reference now. Do not worry if
everything is incomprehensible at the moment. For now, it is more important that
you are familiar with the structure of the reference rather than its contents.
<!-- prettier-ignore-end -->

<!-- prettier-ignore-start -->
:exercise:
Read more about numbers in JavaScript [here][jsNumber].
<!-- prettier-ignore-end -->

<!-- prettier-ignore-start -->
:exercise:
JavaScript also allows you to handle huge integers that do not fit within 64
bits. Browse through the documentation of [`BigInt`][BigInt] to see what
JavaScript has to offer in terms of very large integers.
<!-- prettier-ignore-end -->

<!-- prettier-ignore-start -->
:exercise:
Create a script called `age.js`. Assign your age to a variable and print the
value of the variable to the terminal.
<!-- prettier-ignore-end -->

<!-- prettier-ignore-start -->
:exercise:
Refer to the script
:script: file="assets/src/data/week.js"
above. Uncomment the line
<!-- prettier-ignore-end -->

```js
// daysInWeek = 5;
```

Save the script and run it again. What do you get as output? Why do you get such
output?

<!-- prettier-ignore-start -->
:exercise:
Apart from using [`let`][let] and [`const`][const], a third way to declare a
variable is by using the keyword [`var`][var]. You will most likely see `var`
being used in JavaScript code sooner or later. Avoid using `var` in any
JavaScript code you write. Stick to `let` and `const` as much as possible. Read
[this article][diffLetConstVar] to learn more about the differences between
`let`, `const`, and `var`.
<!-- prettier-ignore-end -->

<!-- prettier-ignore-start -->
:exercise:
The operator [`typeof`][typeof] allows you to query the data type of a variable
or whatever value you give to the operator. Run the script below and note the
output printed to the terminal. Why does the variable `n` have the data type
`number`? Edit the script to print the data type of each of `NaN` and
`-Infinity`.
<!-- prettier-ignore-end -->

:include: file="assets/src/data/typeof.js", line=25:-

<!--=========================================================================-->

<!-- prettier-ignore-start -->
[BigInt]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt
[const]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const
[diffLetConstVar]: https://medium.com/swlh/the-difference-of-var-vs-let-vs-const-in-javascript-abe37e214d66
[Infinity]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Infinity
[jsNumber]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
[JSreference]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference
[let]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
[maxSafeInteger]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER
[MDNWebDocs]: https://developer.mozilla.org
[minSafeInteger]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MIN_SAFE_INTEGER
[minusInfinity]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Infinity
[NaN]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN
[negativeInfinity]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/NEGATIVE_INFINITY
[NumberNaN]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/NaN
[positiveInfinity]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/POSITIVE_INFINITY
[typeof]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
[var]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var
<!-- prettier-ignore-end -->
