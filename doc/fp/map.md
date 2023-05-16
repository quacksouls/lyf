# `map()`

The array method
[`map()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
takes a function, applies the function to each element of an array, and returns
a new array containing the results of the function application. Let's begin with
a small example. In the script below, we iterate over each element of an array
and add 1 to the element. The results are stored in a new array.

```js
// add1-for.js

/**
 * Add 1 to each array element. Use the for...of statement.
 *
 * @param {NS} ns The Netscript API.
 */
export async function main(ns) {
    const array = [1, 2, 3, 4, 5];
    const result = [];
    for (const x of array) {
        result.push(x + 1);
    }
    ns.tprintf(`${result}`);
}
```

As you know, JavaScript arrays have the
[`forEach()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
method. The method accepts a function and applies the function to each array
element. The method does not return the result of the function application. In
fact, the method `forEach()` returns `undefined`. To save the results of the
function application, you must insert each result into an array. Here is a
rewrite of the script `add1-for.js`, but using the array method `forEach()`.

```js
// add1-forEach.js

/**
 * Add 1 to each array element. Use the forEach() method.
 *
 * @param {NS} ns The Netscript API.
 */
export async function main(ns) {
    const array = [1, 2, 3, 4, 5];
    const result = [];
    const addOne = (x) => result.push(x + 1);
    array.forEach(addOne);
    ns.tprintf(`${result}`);
}
```

The array method `map()` is like a better version of `forEach()` insofar as
`map()` returns the result of applying the provided function. The script
`add1-forEach.js` can be rewritten by using `map()` as follows:

```js
// add1-map.js

/**
 * Add 1 to each array element. Use the map() method.
 *
 * @param {NS} ns The Netscript API.
 */
export async function main(ns) {
    const array = [1, 2, 3, 4, 5];
    const addOne = (x) => x + 1;
    const result = array.map(addOne);
    ns.tprintf(`${result}`);
}
```

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

> **Exercise 1.** Read more about the array method
> [`map()` here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map).
>
> **Exercise 2.** Given an array of all integers between 1 and 10, inclusive,
> use the method `map()` to raise each element to the power of 2.
>
> **Exercise 3.** Your pets database includes the age of each pet:
>
> ```js
> const db = [
>     { name: "Anonymouse", age: "1" },
>     { name: "Charlie Chihuahua", age: 2 },
>     { name: "Chirp O'Tweet", age: 1 },
>     { name: "Frankie Frankfurt", age: "2" },
>     { name: "Garry Longtongue", age: "1" },
>     { name: "Goldie Horn", age: 1 },
>     { name: "Hamsuke Hamton", age: 1 },
>     { name: "Harry Speedbump", age: 2 },
>     { name: "Robbie Hopster", age: 1 },
>     { name: "Scratchy Meowser", age: "3" },
>     { name: "Tabby Whiskers", age: 2 },
>     { name: "Terry Terrier", age: 2 },
>     { name: "Woofy McBark", age: "3" },
> ];
> ```
>
> Some age values are given as strings, whereas all age values should be
> integers. Obtain a subset of the database where each pet object has its age as
> a string. Use the array method `forEach()` to correct the age values in the
> subset. Repeat the exercise, but use the array method `map()`. The
> [`typeof`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)
> operator might be useful.
>
> **Exercise 4.** Refer to the pets database from Exercise 3. Extract all pet
> names where the corresponding pets are 1 year old.
>
> **Exercise 5.** Repeat Exercise 10 from the section
> [_Line them up_](../organize/array.md), but use `map()`.
>
> **Exercise 6.** The JavaScript method
> [`Math.random()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)
> returns a random floating point number between 0 and 1. Use `map()` to write a
> function that returns an array of 10 random floating point numbers.
>
> **Exercise 7.** Consider the following program.
>
> ```js
> /**
>  * Print a number to the terminal.
>  *
>  * @param {NS} ns The Netscript API.
>  * @param {number} n Print this number.
>  */
> function count(ns, n) {
>     ns.tprintf(`${n}`);
> }
>
> /**
>  * Count up.
>  *
>  * @param {NS} ns The Netscript API.
>  */
> export async function main(ns) {
>     for (let i = 1; i < 11; i++) {
>         count(ns, i);
>     }
> }
> ```
>
> Rewrite the program to use `map()` to achieve the same effect.
>
> **Exercise 8.** Write your own function `map()` without using the array method
> [`map()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map).
>
> 1. Repeat Exercises 6 and 7 using your implementation of `map()`.
> 1. Use your implementation of `map()` to increment the age of each pet in the
>    database from Exercise 3.
