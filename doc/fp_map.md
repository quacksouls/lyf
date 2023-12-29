---
title: map
---

The array method [`map()`][map] takes a function, applies the function to each
element of an array, and returns a new array containing the results of the
function application. Let's begin with a small example. In the script below, we
iterate over each element of an array and add 1 to the element. The results are
stored in a new array.

:include: file="assets/src/fp/add1-for.js", line=25:-

<!-- prettier-ignore-start -->
As you know, JavaScript arrays have the [`forEach()`][forEach] method. The
method accepts a function and applies the function to each array element. The
method does not return the result of the function application. In fact, the
method `forEach()` returns `undefined`. To save the results of the function
application, you must insert each result into an array. Here is a rewrite of the
script
:script: file="assets/src/fp/add1-for.js"
, but using the array method `forEach()`.
<!-- prettier-ignore-end -->

:include: file="assets/src/fp/add1-forEach.js", line=25:-

<!-- prettier-ignore-start -->
The array method `map()` is like a better version of `forEach()` insofar as
`map()` returns the result of applying the provided function. The script
:script: file="assets/src/fp/add1-forEach.js"
can be rewritten by using `map()` as follows:
<!-- prettier-ignore-end -->

:include: file="assets/src/fp/add1-map.js", line=25:-

You save 1 line of code and your intention is now more clearly expressed than
when using `forEach()`.

When should you use `map()` instead of `forEach()`, and vice versa? Your
decision can be based on personal preference. Both methods essentially perform
the same task: apply a function to each array element. You can base your
decision on the difference in the outcome of each method. Do you want an array
of the results of the function application? If yes, use the method `map()`.
Otherwise, use the method `forEach()`. You can also base your decision on which
method better expresses/declares your intent.

<!--=========================================================================-->

## Exercises

<!-- prettier-ignore-start -->
:exercise:
Read more about the array method [`map()` here][map].
<!-- prettier-ignore-end -->

<!-- prettier-ignore-start -->
:exercise:
Given an array of all integers between 1 and 10, inclusive, use the method
`map()` to raise each element to the power of 2.
<!-- prettier-ignore-end -->

<!-- prettier-ignore-start -->
:exercise:
Your pets database includes the age of each pet:
<!-- prettier-ignore-end -->

:include: file="assets/src/fp/pet-db.js", line=25:-

Some age values are given as strings, whereas all age values should be integers.
Obtain a subset of the database where each pet object has its age as a string.
Use the array method `forEach()` to correct the age values in the subset. Repeat
the exercise, but use the array method `map()`. The [`typeof`][typeof] operator
might be useful.

<!-- prettier-ignore-start -->
:exercise:
Refer to the pets database from the script
:script: file="assets/src/fp/pet-db.js"
. Extract all pet names where the corresponding pets are 1 year old.
<!-- prettier-ignore-end -->

<!-- prettier-ignore-start -->
:exercise:
Repeat [Exercise 10](../organize_array/#exVectorSum) from the section
[Line them up](../organize_array), but use `map()`.
<!-- prettier-ignore-end -->

<!-- prettier-ignore-start -->
:exercise:
The JavaScript method [`Math.random()`][random] returns a random floating point
number between 0 and 1. Use `map()` to write a function that returns an array of
10 random floating point numbers.
<!-- prettier-ignore-end -->

<!-- prettier-ignore-start -->
:exercise:
Consider the following program.
<!-- prettier-ignore-end -->

:include: file="assets/src/fp/count.js", line=25:-

Rewrite the program to use `map()` to achieve the same effect.

<!-- prettier-ignore-start -->
:exercise:
Write your own function `map()` without using the array method [`map()`][map].
<!-- prettier-ignore-end -->

<!-- prettier-ignore-start -->
1. Repeat the previous 2 exercises, but use your implementation of `map()`.
1. Use your implementation of `map()` to increment the age of each pet in the
   database from the script
:script: file="assets/src/fp/pet-db.js"
.
<!-- prettier-ignore-end -->

<!--=========================================================================-->

<!-- prettier-ignore-start -->
[forEach]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
[map]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
[random]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
[typeof]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
<!-- prettier-ignore-end -->
