# Let's get functional

This section discusses some basic ways to help you get started on functional
programming. Procedural and object-oriented programming are about writing
programs that specify the steps required to achieve a goal. Functional
programming is about declaring the goal you want to achieve. The procedural vs
declarative difference is the not the only principle that separates functional
programming from other ways to program. However, the above difference is
sufficient to know for now to help you get started on writing functional
JavaScript code. See
[this article](https://opensource.com/article/17/6/functional-javascript) for an
introduction to basic principles of function programming.
[This book](https://github.com/getify/Functional-Light-JS) discusses functional
programming in more depth, specifically using JavaScript.

## `filter()`

You are on a quest to implement a pets database. You come up with a list of pet
names from which pet owners can choose for their pets. Your early list is
declared as an array like so:

```js
const name = [
    "Anonymouse",
    "Charlie Chihuahua",
    "Chirp O'Tweet",
    "Frankie Frankfurt",
    "Garry Longtongue",
    "Goldie Horn",
    "Hamsuke Hamton",
    "Harry Speedbump",
    "Robbie Hopster",
    "Scratchy Meowser",
    "Tabby Whiskers",
    "Terry Terrier",
    "Woofy McBark",
];
```

Some people like their pets' names to start with a particular letter. You want a
way to choose a subarray containing pet names that begin with a given letter.
How would you do that?

Suppose you want to filter the above names array and choose only those names
that begin with the letter "T". The string method
[`startsWith()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith)
takes a string and determines whether that string is at the beginning of another
string. Here is an example:

```js
/**
 * Whether a string begins with a given substring.
 *
 * @param ns The Netscript API.
 */
export async function main(ns) {
    const name = "Sam McPherson";
    const result = name.startsWith("S");
    ns.tprintf(`Does ${name} start with "S"? ${result}`);
}
```

With the help of the string method `startsWith()`, you use a `for...of`
statement to filter the names array as follows:

```js
/**
 * name-loop.js
 *
 * Procedural style. Filtering an array of pet names. Keep only names
 * that start with "T". Use the for...of statement.
 *
 * @param ns The Netscript API.
 */
export async function main(ns) {
    const name = [
        "Anonymouse",
        "Charlie Chihuahua",
        "Chirp O'Tweet",
        "Frankie Frankfurt",
        "Garry Longtongue",
        "Goldie Horn",
        "Hamsuke Hamton",
        "Harry Speedbump",
        "Robbie Hopster",
        "Scratchy Meowser",
        "Tabby Whiskers",
        "Terry Terrier",
        "Woofy McBark",
    ];
    const nameT = [];
    for (const string of name) {
        if (string.startsWith("T")) {
            nameT.push(string);
        }
    }
    ns.tprintf(`${nameT.join("\n")}`);
}
```

A functional approach to the above filtering problem is to use the array method
[`filter()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter).
The method accepts a function as an argument and the function must return either
`true` or `false`. The function passed to the method `filter()` must be a
_predicate_. The method `filter()` passes each array element to the predicate,
one at a time, and it is the predicate's job to determine whether to keep or
reject the given element. If the given element is to be kept, then the predicate
should return `true`, otherwise return `false`. You use the string method
`startsWith()` and the array method `filter()` to rewrite the above script
`name-loop.js` as follows:

```js
/**
 * name-filter.js
 *
 * Functional style. Filtering an array of pet names. Keep only names that
 * start with "T". Use the array method filter().
 *
 * @param ns The Netscript API.
 */
export async function main(ns) {
    const name = [
        "Anonymouse",
        "Charlie Chihuahua",
        "Chirp O'Tweet",
        "Frankie Frankfurt",
        "Garry Longtongue",
        "Goldie Horn",
        "Hamsuke Hamton",
        "Harry Speedbump",
        "Robbie Hopster",
        "Scratchy Meowser",
        "Tabby Whiskers",
        "Terry Terrier",
        "Woofy McBark",
    ];
    const startsWithT = (string) => string.startsWith("T"); // predicate
    const nameT = name.filter(startsWithT);
    ns.tprintf(`${nameT.join("\n")}`);
}
```

In the procedural version of the script `name-loop.js`, you explain in
JavaScript code what you want to. That is, you loop over the array of pet names
and keep only those names that start with the substring `"T"`. In the functional
version shown in the script `name-filter.js`, you declare your intent, i.e.
filter the names array and keep only those that start with `"T"`. As you can
see, the above functional style is shorter than the procedural approach shown in
the script `name-loop.js`. With a suitably chosen predicate name, the functional
style can be more readable than the procedural approach.

### Exercises

> **Exercise 1.** Read more about the array method
> [`filter()` here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter).
>
> **Exercise 2.** Modify the scripts `name-loop.js` and `name-filter.js` to
> return pet names that contain the substring `"an"`, ignoring case sensitivity.
> You might find the string methods
> [`toLowerCase()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase)
> and
> [includes()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes)
> useful.
>
> **Exercise 3.** Write a function that takes 2 arguments: (1) an array `name`
> of pet names; and (2) a substring `s`. The function should use the array
> method `filter()` to choose a subarray of `name` such that each name in the
> subarray begins with the substring `s`, and return the subarray. Rewrite the
> script `name-filter.js` to use your new function.
>
> **Exercise 4.** You have an array of all integers between 0 and 10, inclusive.
> Use a `for...of` statement to pick out even integers. Repeat the exercise, but
> use the array method `filter()`.
>
> **Exercise 5.** You have the following pets database, implemented as an array
> of objects:

```js
const db = [
    { name: "Anonymouse", animal: "mouse" },
    { name: "Charlie Chihuahua", animal: "dog" },
    { name: "Chirp O'Tweet", animal: "bird" },
    { name: "Frankie Frankfurt", animal: "ferret" },
    { name: "Garry Longtongue", animal: "gecko" },
    { name: "Goldie Horn", animal: "fish" },
    { name: "Hamsuke Hamton", animal: "hamster" },
    { name: "Harry Speedbump", animal: "hedgehog" },
    { name: "Robbie Hopster", animal: "rabbit" },
    { name: "Scratchy Meowser", animal: "cat" },
    { name: "Tabby Whiskers", animal: "cat" },
    { name: "Terry Terrier", animal: "dog" },
    { name: "Woofy McBark", animal: "dog" },
];
```

> Use the array method `filter()` to pick out objects that represent dogs. Print
> the resulting subarray to the terminal. You might find the method
> [`JSON.stringify()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)
> useful. Count the number of cats in the database. Pretend the database is too
> long for you to eyeball and manually count.
>
> **Exercise 6.** You have the following array:

```js
const array = ["", 2, null, 3, 5, undefined, 7, 11, 13, NaN];
```

> An element of the array is said to be empty provided the element is either the
> empty string or has one of these values: `null`, `undefined`, `NaN`. Use the
> `for...of` statement to remove all empty elements from the above array. Repeat
> the exercise, but use the `forEach()` array method. Repeat the exercise again,
> but use the `filter()` array method.
>
> **Exercise 7.** Use the `filter()` array method to remove duplicate elements
> from the following array:

```js
const array = [2, 3, 2, 5, 7, 3, 11, 13, 1, 1, 7, 5];
```

> Do not use
> [`Set`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set).

## `map()`

The array method
[`map()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
takes a function, applies the function to each element of an array, and returns
a new array containing the results of the function application. Let's begin with
a small example. In the script below, we iterate over each element of an array
and add 1 to the element. The results are stored in a new array.

```js
/**
 * add1-for.js
 *
 * Add 1 to each array element. Use the for...of statement.
 *
 * @param ns The Netscript API.
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
fact, the `forEach()` method resturns `undefined`. To save the results of the
function application, you must insert each result into an array. Here is a
rewrite of the script `add1-for.js`, but using the `forEach()` array method.

```js
/**
 * add1-forEach.js
 *
 * Add 1 to each array element. Use the forEach() method.
 *
 * @param ns The Netscript API.
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
`add1-forEach.js` can rewritten by using `map()` as follows:

```js
/**
 * add1-map.js
 *
 * Add 1 to each array element. Use the map() method.
 *
 * @param ns The Netscript API.
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
of the results of the function application? If yes, use the `map()` method.
Otherwise, use the `forEach()` method. You can also base your decision on which
method better expresses/declares your intent.

### Exercises

> **Exercise 1.** Given an array of all integers between 1 and 10, inclusive,
> use the `filter()` method to raise each element to the power of 2.
>
> **Exercise 2.** Your pets database includes the age of each pet:

```js
const db = [
    { name: "Anonymouse", age: "1" },
    { name: "Charlie Chihuahua", age: 2 },
    { name: "Chirp O'Tweet", age: 1 },
    { name: "Frankie Frankfurt", age: "2" },
    { name: "Garry Longtongue", age: "1" },
    { name: "Goldie Horn", age: 1 },
    { name: "Hamsuke Hamton", age: 1 },
    { name: "Harry Speedbump", age: 2 },
    { name: "Robbie Hopster", age: 1 },
    { name: "Scratchy Meowser", age: "3" },
    { name: "Tabby Whiskers", age: 2 },
    { name: "Terry Terrier", age: 2 },
    { name: "Woofy McBark", age: "3" },
];
```

> Some age values are given as strings, whereas all age values should be
> integers. Obtain a subset of the database where each pet object has its age as
> a string. Use the `forEach()` array method to correct the age values in the
> subset. Repeat the exercise, but use the `map()` array method. The
> [`typeof`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)
> operator might be useful.

## `reduce()`

## `some()` and `every()`

[[TOC](../README.md "Table of Contents")]
[[Previous](object.md "JSON and the Argonauts")]

[![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-blue.svg)](http://creativecommons.org/licenses/by-nc-sa/4.0/)
