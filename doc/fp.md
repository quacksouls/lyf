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

> **Exercise 1.** Read more about the array method `filter()` >
> [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter).
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

## `map()`

## `reduce()`

## `some()` and `every()`

[[TOC](../README.md "Table of Contents")]
[[Previous](object.md "JSON and the Argonauts")]

[![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-blue.svg)](http://creativecommons.org/licenses/by-nc-sa/4.0/)
