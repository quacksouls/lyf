# `map()`

The array method
[`map()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
takes a function, applies the function to each element of an array, and returns
a new array containing the results of the function application. Let's begin with
a small example. In the script below, we iterate over each element of an array
and add 1 to the element. The results are stored in a new array.

[import](code/add1-for.js)

As you know, JavaScript arrays have the
[`forEach()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
method. The method accepts a function and applies the function to each array
element. The method does not return the result of the function application. In
fact, the method `forEach()` returns `undefined`. To save the results of the
function application, you must insert each result into an array. Here is a
rewrite of the script [`add1-for.js`](code/add1-for.js), but using the array
method `forEach()`.

[import](code/add1-forEach.js)

The array method `map()` is like a better version of `forEach()` insofar as
`map()` returns the result of applying the provided function. The script
[`add1-forEach.js`](code/add1-forEach.js) can be rewritten by using `map()` as
follows:

[import](code/add1-map.js)

You save 1 line of code and your intention is now more clearly expressed than
when using `forEach()`.

When should you use `map()` instead of `forEach()`, and vice versa? Your
decision can be based on personal preference. Both methods essentially perform
the same task: apply a function to each array element. You can base your
decision on the difference in the outcome of each method. Do you want an array
of the results of the function application? If yes, use the method `map()`.
Otherwise, use the method `forEach()`. You can also base your decision on which
method better expresses/declares your intent.

<!-- ====================================================================== -->

## Exercises

<!-- prettier-ignore -->
{% exercise %}{% endexercise %}
Read more about the array method
[`map()` here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map).

<!-- prettier-ignore -->
{% exercise %}{% endexercise %}
Given an array of all integers between 1 and 10, inclusive, use the method
`map()` to raise each element to the power of 2.

<!-- prettier-ignore -->
{% exercise %}{% endexercise %}
Your pets database includes the age of each pet:

[import](code/pet-db.js)

Some age values are given as strings, whereas all age values should be integers.
Obtain a subset of the database where each pet object has its age as a string.
Use the array method `forEach()` to correct the age values in the subset. Repeat
the exercise, but use the array method `map()`. The
[`typeof`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)
operator might be useful.

<!-- prettier-ignore -->
{% exercise %}{% endexercise %}
Refer to the pets database from the script [`pet-db.js`](code/pet-db.js).
Extract all pet names where the corresponding pets are 1 year old.

<!-- prettier-ignore -->
{% exercise %}{% endexercise %}
Repeat [Exercise 10](../organize/array.md#vector_sum) from the section
[_Line them up_](../organize/array.md), but use `map()`.

<!-- prettier-ignore -->
{% exercise %}{% endexercise %}
The JavaScript method
[`Math.random()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)
returns a random floating point number between 0 and 1. Use `map()` to write a
function that returns an array of 10 random floating point numbers.

<!-- prettier-ignore -->
{% exercise %}{% endexercise %}
Consider the following program.

[import](code/count.js)

Rewrite the program to use `map()` to achieve the same effect.

<!-- prettier-ignore -->
{% exercise %}{% endexercise %}
Write your own function `map()` without using the array method
[`map()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map).

1. Repeat the previous 2 exercises, but use your implementation of `map()`.
1. Use your implementation of `map()` to increment the age of each pet in the
   database from the script [`pet-db.js`](code/pet-db.js).
