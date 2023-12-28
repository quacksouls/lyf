---
title: Bow and arrow
math: true
---

A second way to create a function is to define it as an expression. A function
defined in this manner is called a _function expression_ and follows this
format:

:include: file="assets/src/function/exp-template.js", line=25:-

In the above template, you assign a function to a variable, namely `funcName`.
Replace `funcName` with a descriptive name that summarizes the purpose of your
function. You use `funcName` the same way as if you created it via the
declaration notation, i.e. execute like this `funcName()`.

The function expression can be shortened by using the _arrow function
expression_, which follows this pattern:

:include: file="assets/src/function/arrow-template.js", line=25:-

Similar to the template for function expression, in the template for arrow
function expression you assign a function to a variable. The arrow function
expression uses the arrow notation `=>` instead of the `function` keyword. The
parameter tuple `(paramA, paramB, ...)` can have zero, one, or more parameters.
You use the empty tuple `()` if the function does not take any parameters.

Why do you need another way to create functions? Arrow function expressions are
useful when you need short, concise functions each of which does a specific task
well. Remember our `pow()` function from the section
[I declare](../function_declare)? We can use arrow function expression to
shorten it as follows:

:include: file="assets/src/function/exp-arrow.js", line=25:-

Our `pow()` function above is a one-liner, which is why there is no need to
insert the starting brace `{` and the ending brace `}`. Furthermore, notice that
`pow()` is defined within another function, i.e. the `main()` function. Where is
the `return` statement? The `return` statement is implicit in a one-liner arrow
function expression.

Sometimes your arrow function expression requires multiple lines. That is when
you should enclose the function body within the braces `{` and `}`. Here is an
example:

:include: file="assets/src/function/multiline-arrow.js", line=25:-

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

:include: file="assets/src/function/pass-ns.js", line=25:-

As a final note, the function `printName()` does not return anything. Its only
purpose is to print a name provided to it. The documentation for the function
does not say anything about the return type. Whenever a function does not return
anything to the calling function (i.e. the caller), you can omit the
documentation for the return value(s).

<!--=========================================================================-->

## Exercises

<!-- prettier-ignore-start -->
:exercise:
Read more about function expression [here][function].
<!-- prettier-ignore-end -->

<!-- prettier-ignore-start -->
:exercise:
Read more about arrow function expression [here][arrowFunctions].
<!-- prettier-ignore-end -->

<!-- prettier-ignore-start -->
:exercise:
Use arrow function expression to simplify the script
:script: file="assets/src/function/salmon-func.js"
from the section [I declare](../function_declare).
<!-- prettier-ignore-end -->

<!-- prettier-ignore-start -->
:exercise:
Use arrow function expression to create a function that outputs your name to the
terminal. The function takes zero arguments.
<!-- prettier-ignore-end -->

<!-- prettier-ignore-start -->
:exercise:
Use arrow function expression to create a function that prints a string as red.
Write another function that prints a string as cyan.
<!-- prettier-ignore-end -->

<!-- prettier-ignore-start -->
:exercise:
Read more about closure [here][closures].
<!-- prettier-ignore-end -->

<!-- prettier-ignore-start -->
:exercise:
Use arrow function expression to define a function that returns the maximum of
two numbers. Write the corresponding arrow function expression for the minimum
of two numbers. Try to define each function as a one-liner. Do not use the
JavaScript methods [`Math.max()`][max] and [`Math.min()`][min].
<!-- prettier-ignore-end -->

<!-- prettier-ignore-start -->
:exercise:
Use arrow function expression to define a one-liner function that returns the
square root of a number. Do not use the standard JavaScript method
[`Math.sqrt()`][sqrt], but you can test your implementation against the said
method.
<!-- prettier-ignore-end -->

<!-- prettier-ignore-start -->
:exercise:
The [Hofstadter Q sequence][HofstadterSequence] has the initial values of
$Q(1) = 1$ and $Q(2) = 1$. Given an integer $n > 2$, then $Q(n)$ is defined as
<!-- prettier-ignore-end -->

$$
Q(n)
=
Q\big( n - Q(n - 1) \big)
+
Q\big( n - Q(n - 2) \big)
$$

Implement $Q(n)$ for $n \geq 1$. Test your implementation using various small
values of $n$, e.g. at most 20.

<!--=========================================================================-->

<!-- prettier-ignore-start -->
[arrowFunctions]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
[closures]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
[function]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function
[HofstadterSequence]: https://en.wikipedia.org/wiki/Hofstadter_sequence
[max]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
[min]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min
[sqrt]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt
<!-- prettier-ignore-end -->
