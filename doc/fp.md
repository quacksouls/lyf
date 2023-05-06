# Let's get functional

This chapter discusses some basic ways to help you get started on functional
programming. Procedural and object-oriented programming are about writing
programs that specify the steps required to achieve a goal. Functional
programming is about declaring the goal you want to achieve. The procedural vs
declarative difference is not the only principle that separates functional
programming from other ways to program. However, the above difference is
sufficient to know for now to help you get started on writing functional
JavaScript code. See
[this article](https://opensource.com/article/17/6/functional-javascript) for an
introduction to basic principles of functional programming.
[This blog](https://jrsinclair.com/) and
[this book](https://github.com/getify/Functional-Light-JS) discuss functional
programming in more depth, specifically using JavaScript.

<!-- prettier-ignore -->
- [`filter()`](fp.md#filter)
- [`map()`](fp.md#map)
- [`reduce()`](fp.md#reduce)

<!-- ====================================================================== -->

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
 * @param {NS} ns The Netscript API.
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
// name-loop.js

/**
 * Procedural style. Filtering an array of pet names. Keep only names
 * that start with "T". Use the for...of statement.
 *
 * @param {NS} ns The Netscript API.
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
// name-filter.js

/**
 * Functional style. Filtering an array of pet names. Keep only names that
 * start with "T". Use the array method filter().
 *
 * @param {NS} ns The Netscript API.
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
JavaScript code what you want to do. That is, you loop over the array of pet
names and keep only those names that start with the substring `"T"`. In the
functional version shown in the script `name-filter.js`, you declare your
intent, i.e. filter the names array and keep only those that start with `"T"`.
As you can see, the above functional style is shorter than the procedural
approach shown in the script `name-loop.js`. With a suitably chosen predicate
name, the functional style can be more readable than the procedural approach.

<!-- ====================================================================== -->

### Exercises

> **Exercise 1.** Read more about the array method
> [`filter()` here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter).
>
> **Exercise 2.** Modify the scripts `name-loop.js` and `name-filter.js` to
> return pet names that contain the substring `"an"`, ignoring case sensitivity.
> You might find the string methods
> [`toLowerCase()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase)
> and
> [`includes()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes)
> useful.
>
> **Exercise 3.** Write a function that takes 2 arguments: (1) an array `name`
> of pet names; and (2) a substring `s`. The function should use the array
> method `filter()` to choose a subarray of `name` such that each name in the
> subarray begins with the substring `s`, and return the subarray. Rewrite the
> script `name-filter.js` to use your new function.
>
> **Exercise 4.** You have an array of all integers between 0 and 10, inclusive.
> Use the `for...of` statement to pick out even integers. Repeat the exercise,
> but use the array method `filter()`.
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
> the exercise, but use the array method `forEach()`. Repeat the exercise again,
> but use the array method `filter()`.
>
> **Exercise 7.** Use the array method `filter()` to remove duplicate elements
> from the following array:

```js
const array = [2, 3, 2, 5, 7, 3, 11, 13, 1, 1, 7, 5];
```

> Do not use
> [`Set`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set).
>
> **Exercise 8.** An integer $n > 1$ is said to be
> [_prime_](https://en.wikipedia.org/wiki/Prime_number) if it can only be
> divided by 1 and itself. Write a function to determine whether a given
> positive integer is prime. The function should return `true` if the given
> number is prime and `false` otherwise. Create an array of all integers between
> 2 and 100, inclusive. Use the method `filter()` to determine which elements of
> the array are primes.
>
> **Exercise 9.** Write a function using `filter()` that determines all elements
> common to two given arrays. Test your implementation using the arrays
> `["ca", "au", "us", "se"]` and `["co", "ou", "ur", "rs", "se"]`.
>
> **Exercise 10.** Consider the following array of names.

```js
const name = [
    "Medusa",
    "Ioachim",
    "Shanta",
    "Vayu",
    "Ninsumun",
    "Pegasus",
    "Neilos",
    "Conchur",
    "Tethys",
    "Kadmos",
];
```

> Use `filter()` to obtain an array of those names each having 3 vowels. Repeat
> the exercise, but obtain an array of names each having 3 _unique_ vowels.

<!-- ====================================================================== -->

## `map()`

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

### Exercises

> **Exercise 1.** Read more about the array method
> [`map()` here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map).
>
> **Exercise 2.** Given an array of all integers between 1 and 10, inclusive,
> use the method `filter()` to raise each element to the power of 2.
>
> **Exercise 3.** Your pets database includes the age of each pet:

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
> a string. Use the array method `forEach()` to correct the age values in the
> subset. Repeat the exercise, but use the array method `map()`. The
> [`typeof`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)
> operator might be useful.
>
> **Exercise 4.** Refer to the pets database from Exercise 3. Extract all pet
> names where the corresponding pets are 1 year old.
>
> **Exercise 5.** Repeat Exercise 10 from the section
> [_Line them up_](organize.md#line-them-up), but use `map()`.
>
> **Exercise 6.** The JavaScript method
> [`Math.random()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)
> returns a random floating point number between 0 and 1. Use `map()` to write a
> function that returns an array of 10 random floating point numbers.
>
> **Exercise 7.** Consider the following program.

```js
/**
 * Print a number to the terminal.
 *
 * @param {NS} ns The Netscript API.
 * @param {number} n Print this number.
 */
function count(ns, n) {
    ns.tprintf(`${n}`);
}

/**
 * Count up.
 *
 * @param {NS} ns The Netscript API.
 */
export async function main(ns) {
    for (let i = 1; i < 11; i++) {
        count(ns, i);
    }
}
```

> Rewrite the program to use `map()` to achieve the same effect.

<!-- ====================================================================== -->

## `reduce()`

The basic idea of the array method
[`reduce()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
is to traverse an array, perform an operation on each element, and return a
result based on the array elements. That is, the method reduces the elements of
an array to some result. Let's explore what `reduce()` can do by implementing a
function that sums all numbers in an array:

```js
// sum-for.js

/**
 * Sum all numbers in an array. Use the for...of statement.
 *
 * @param {NS} ns The Netscript API.
 */
export async function main(ns) {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let sum = 0;
    for (const x of array) {
        sum += x;
    }
    ns.tprintf(`Array sum: ${sum}`);
}
```

Initially, the sum is 0. As we walk through each number in the array, the
variable `sum` adds to itself the current element of the array, thus
accumulating the sum as we iterate over each element. We have three numbers at
any given time:

1. _Initial value._ The value we start with prior to commencing the summation.
   Before summing, our sum is 0. Thus 0 is the initial value.
1. _Current value._ The value of the current array element we are considering.
   We step through each array element in order. At any time, we are at an index
   $i$ of the array. The current value is therefore the value of the element at
   index $i$.
1. _Accumulator._ The cumulative sum so far. If we are at index $i$ of the
   array, the accumulator at index $i$ is the sum of all array elements from
   index 0 to index $i$.

The method `reduce()` can be understood in terms of the above three numbers, as
shown by the template below:

```js
reduce((accumulator, currentValue) => {
    // Insert code here.
}, initialValue);
```

In the above version of `reduce()`, the method has two parameters. First, it
requires a function that accepts two arguments: the accumulator and the current
value. The function does whatever it needs to and returns the result of
operating on the accumulator and current value. The returned value is the
accumulator for the next element in the array. The second parameter of
`reduce()` is the initial value. We know the initial value prior to summation
is 0. At any instance during the summation, the new cumulative sum is obtained
by adding the current value to the accumulator. The script `sum-for.js` can now
be rewritten as follows:

```js
// sum-reduce.js

/**
 * Sum all numbers in an array. Use the reduce() method.
 *
 * @param {NS} ns The Netscript API.
 */
export async function main(ns) {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const initialValue = 0;
    const add = (accumulator, currentValue) => accumulator + currentValue;
    const sum = array.reduce(add, initialValue);
    ns.tprintf(`Array sum: ${sum}`);
}
```

We only save 1 line of code. Not great, but the script `sum-reduce.js` expresses
our intention of reducing the numbers of an array to their sum.

Does the array method `reduce()` work with objects? Of course. Simply provide an
array of objects. Note that the value of `currentValue` is the current object we
are considering. To perform an operation on the object, we need to take the
value of the property we care about. By way of example, consider the next
script:

```js
/**
 * Sum the age of pets.
 *
 * @param {NS} ns The Netscript API.
 */
export async function main(ns) {
    const db = [
        { name: "Charlie Chihuahua", age: 2 },
        { name: "Chirp O'Tweet", age: 1 },
        { name: "Goldie Horn", age: 1 },
        { name: "Hamsuke Hamton", age: 1 },
        { name: "Harry Speedbump", age: 2 },
        { name: "Robbie Hopster", age: 1 },
        { name: "Tabby Whiskers", age: 2 },
        { name: "Terry Terrier", age: 2 },
    ];
    const addAge = (accumulator, pet) => accumulator + pet.age;
    const initialValue = 0;
    const sum = db.reduce(addAge, initialValue);
    ns.tprintf(`Total age: ${sum}`);
}
```

The function `addAge()` is declared with two parameters: (1) an accumulator,
assumed to be a number; and (2) an object. As we are only interested in the age
of a pet, we reference the `age` property of each pet object.

<!-- ====================================================================== -->

### Exercises

> **Exercise 1.** Read more about the array method
> [`reduce()` here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce).
>
> **Exercise 2.** The initial value as given to `reduce()` is optional. If the
> initial value is omitted, the accumulator is initialized to the first element
> in the array. Processing then starts from the second element onward. Omitting
> the initial value assumes that the array has at least 1 element. Modify the
> script `sum-reduce.js` to not explicitly use an initial value.
>
> **Exercise 3.** The average of a bunch of numbers is defined as the sum of
> those numbers divided by how many numbers there are. Use a loop to calculate
> the average of the numbers in this array:

```js
const array = [2, 3, 5, 7, 11, 13, 17, 19];
```

> Repeat the exercise, but use the array method `reduce()`.
>
> **Exercise 4.** A class has 10 students, whose grades for a particular
> assignment are as given:

```js
const db = [
    { name: "Nora Teddie", grade: 95 },
    { name: "Duilio Kostis", grade: 74 },
    { name: "Constance Denis", grade: 100 },
    { name: "Alida Mora", grade: 71 },
    { name: "Katarine Cordelia", grade: 96 },
    { name: "Jaxtyn Trish", grade: 84 },
    { name: "Hajime Sixte", grade: 99 },
    { name: "Madeleine Sybille", grade: 94 },
    { name: "Cosma Sergine", grade: 97 },
    { name: "Élodie Vlasis", grade: 85 },
];
```

> How many students have grades above 80? Determine the average grade of the
> class for the particular assignment.
>
> **Exercise 5.** The accumulator in `reduce()` is not necessarily a number. The
> accumulator can be an array, a map, or a set. Use `reduce()` to raise each
> number in the following array to the power of 2.

```js
const array = [1, 2, 3, 4, 5];
```

> **Exercise 6.** Refer to the student database from Exercise 4. Choose students
> whose grades are above 90. Do not use
> [`filter()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter),
> but instead use `reduce()`.

[[TOC](../README.md "Table of Contents")]
[[Previous](object.md "JSON and the Argonauts")]
[[Next](bye.md "Wait, there's more")]

[![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-blue.svg)](http://creativecommons.org/licenses/by-nc-sa/4.0/)
