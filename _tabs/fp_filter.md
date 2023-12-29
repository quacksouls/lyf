---
title: filter
math: true
order: 30
---

You are on a quest to implement a pets database. You come up with a list of pet
names from which pet owners can choose for their pets. Your early list is
declared as an array like so:

[`pet-array.js`](https://github.com/quacksouls/lyf/blob/main/assets/src/fp/pet-array.js)
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
that begin with the letter "T". The string method [`startsWith()`][startsWith]
takes a string and determines whether that string is at the beginning of another
string. Here is an example:

[`startsWith.js`](https://github.com/quacksouls/lyf/blob/main/assets/src/fp/startsWith.js)
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

[`name-loop.js`](https://github.com/quacksouls/lyf/blob/main/assets/src/fp/name-loop.js)
```js
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

<!-- prettier-ignore-start -->
A functional approach to the above filtering problem is to use the array method
[`filter()`][filter]. The method accepts a function as an argument and the
function must return either `true` or `false`. The function passed to the method
`filter()` must be a _predicate_. The method `filter()` passes each array
element to the predicate, one at a time, and it is the predicate's job to
determine whether to keep or reject the given element. If the given element is
to be kept, then the predicate should return `true`, otherwise return
`false`. You use the string method `startsWith()` and the array method
`filter()` to rewrite the above script
[`name-loop.js`](https://github.com/quacksouls/lyf/blob/main/assets/src/fp/name-loop.js)
as follows:
<!-- prettier-ignore-end -->

[`name-filter.js`](https://github.com/quacksouls/lyf/blob/main/assets/src/fp/name-filter.js)
```js
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

<!-- prettier-ignore-start -->
In the procedural version of the script
[`name-loop.js`](https://github.com/quacksouls/lyf/blob/main/assets/src/fp/name-loop.js)
, you explain in JavaScript code what you want to do. That is, you loop over the
array of pet names and keep only those names that start with the substring
`"T"`. In the functional version shown in the script
[`name-filter.js`](https://github.com/quacksouls/lyf/blob/main/assets/src/fp/name-filter.js)
, you declare your intent, i.e. filter the names array and keep only those that
start with `"T"`. As you can see, the above functional style is shorter than the
procedural approach shown in the script
[`name-loop.js`](https://github.com/quacksouls/lyf/blob/main/assets/src/fp/name-loop.js)
. With a suitably chosen predicate name, the functional style can be more
readable than the procedural approach.
<!-- prettier-ignore-end -->

<!--=========================================================================-->

## Exercises

<!-- prettier-ignore-start -->
<strong>Exercise 1.</strong> Read more about the array method [`filter()` here][filter].
<!-- prettier-ignore-end -->

<!-- prettier-ignore-start -->
<strong>Exercise 2.</strong> Modify the scripts
[`name-loop.js`](https://github.com/quacksouls/lyf/blob/main/assets/src/fp/name-loop.js)
and
[`name-filter.js`](https://github.com/quacksouls/lyf/blob/main/assets/src/fp/name-filter.js)
to return pet names that contain the substring `"an"`, ignoring case
sensitivity. You might find the string methods [`toLowerCase()`][toLowerCase]
and [`includes()`][includes] useful.
<!-- prettier-ignore-end -->

<!-- prettier-ignore-start -->
<strong>Exercise 3.</strong> Write a function that takes 2 arguments: (1) an array `name` of pet names; and
(2) a substring `s`. The function should use the array method `filter()` to
choose a subarray of `name` such that each name in the subarray begins with the
substring `s`, and return the subarray. Rewrite the script
[`name-filter.js`](https://github.com/quacksouls/lyf/blob/main/assets/src/fp/name-filter.js)
to use your new function.
<!-- prettier-ignore-end -->

<!-- prettier-ignore-start -->
<strong>Exercise 4.</strong> You have an array of all integers between 0 and 10, inclusive. Use the
`for...of` statement to pick out even integers. Repeat the exercise, but use the
array method `filter()`.
<!-- prettier-ignore-end -->

<!-- prettier-ignore-start -->
<strong>Exercise 5.</strong> You have the following pets database, implemented as an array of objects:
<!-- prettier-ignore-end -->

[`pet-object.js`](https://github.com/quacksouls/lyf/blob/main/assets/src/fp/pet-object.js)
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

Use the array method `filter()` to pick out objects that represent dogs. Print
the resulting subarray to the terminal. You might find the method
[`JSON.stringify()`][stringify] useful. Count the number of cats in the
database. Pretend the database is too long for you to eyeball and manually
count.

<!-- prettier-ignore-start -->
<strong>Exercise 6.</strong> You have the following array:
<!-- prettier-ignore-end -->

```js
const array = ["", 2, null, 3, 5, undefined, 7, 11, 13, NaN];
```

An element of the array is said to be empty provided the element is either the
empty string or has one of these values: `null`, `undefined`, `NaN`. Use the
`for...of` statement to remove all empty elements from the above array. Repeat
the exercise, but use the array method `forEach()`. Repeat the exercise again,
but use the array method `filter()`.

<!-- prettier-ignore-start -->
<strong>Exercise 7.</strong> Use the array method `filter()` to remove duplicate elements from the following
array:
<!-- prettier-ignore-end -->

```js
const array = [2, 3, 2, 5, 7, 3, 11, 13, 1, 1, 7, 5];
```

Do not use [`Set`][set].

<!-- prettier-ignore-start -->
<strong>Exercise 8.</strong> An integer $n > 1$ is said to be [_prime_][prime] if it can only be divided by 1
and itself. Write a function to determine whether a given positive integer is
prime. The function should return `true` if the given number is prime and
`false` otherwise. Create an array of all integers between 2 and 100,
inclusive. Use the method `filter()` to determine which elements of the array
are primes.
<!-- prettier-ignore-end -->

<!-- prettier-ignore-start -->
<strong>Exercise 9.</strong> Write a function using `filter()` that determines all elements common to two
given arrays. Test your implementation using the arrays
`["ca", "au", "us", "se"]` and `["co", "ou", "ur", "rs", "se"]`.
<!-- prettier-ignore-end -->

<!-- prettier-ignore-start -->
<strong>Exercise 10.</strong> Consider the following array of names.
<!-- prettier-ignore-end -->

[`names.js`](https://github.com/quacksouls/lyf/blob/main/assets/src/fp/names.js)
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

Implement your own function `filter()` without using the array method
[`filter()`][filter]. Use your function `filter()` to obtain an array of those
names each having 3 vowels. Repeat the exercise, but obtain an array of names
each having 3 _unique_ vowels.

<!--=========================================================================-->

<!-- prettier-ignore-start -->
[filter]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
[includes]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
[prime]: https://en.wikipedia.org/wiki/Prime_number
[set]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
[startsWith]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
[stringify]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
[toLowerCase]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase
<!-- prettier-ignore-end -->
