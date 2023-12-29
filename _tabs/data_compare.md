---
title: Compare the pair
math: true
order: 11
---

Boolean values commonly arise when you need to compare strings, numbers, or
something else. Is the number 1 less than 2? Of course the expression $$1 < 2$$
is true. Here are some more mathematics facts:

[`compare.js`](https://github.com/quacksouls/lyf/blob/main/assets/src/data/compare.js)
```js
/**
 * Comparing numbers.
 *
 * @param {NS} ns The Netscript API.
 */
export async function main(ns) {
    const a = 1;
    const b = 2;
    ns.tprintf(`${a} < ${b}? ${a < b}`);
    ns.tprintf(`${a} > ${b}? ${a > b}`);
    ns.tprintf(`${a} <= ${b}? ${a <= b}`);
    ns.tprintf(`${a} >= ${b}? ${a >= b}`);
    ns.tprintf(`${a} = ${b}? ${a === b}`);
    ns.tprintf(`${a} != ${b}? ${a !== b}`);
}
```

Carefully examine the above program. Why the triple equal signs `===`? The
operator `===` is used in JavaScript to mean strict equality. JavaScript also
uses the operator `==` (double equal signs) to compare numbers, but the
comparison is looser and not as strict as `===`. For example, JavaScript allows
you to compare a number with a string as in the expression `2 == "2"`, which is
valid JavaScript code and returns `true`. Strictly speaking, the number `2` is
different from its string representation `"2"`. The expression `2 === "2"`
returns `false`, which is what you would expect because a number is not the same
as a string. Avoid using `==` as much as possible. Stick to the strict equality
operator `===`. Similarly, JavaScript uses the operator `!==` to decide whether
two numbers are different. There is the looser version `!=`, but you should use
`!==` as much as possible.

Does JavaScript allow you to use the above operators to compare strings? Of
course. Use `===` to determine whether two strings are the same. Similarly, use
`!==` to see whether two strings are different.

<!--=========================================================================-->

## Exercises

<!-- prettier-ignore-start -->
<strong>Exercise 1.</strong> Read more about loose and strict equality [here][equality].
<!-- prettier-ignore-end -->

<!-- prettier-ignore-start -->
<strong>Exercise 2.</strong> Explain why the program below gives you different answers.
<!-- prettier-ignore-end -->

[`same-diff.js`](https://github.com/quacksouls/lyf/blob/main/assets/src/data/same-diff.js)
```js
/**
 * Same or different?
 *
 * @param {NS} ns The Netscript API.
 */
export async function main(ns) {
    const n = 2;
    const a = n != "2";
    const b = n !== "2";
    ns.tprintf(`${n} != "2"? ${a}`);
    ns.tprintf(`${n} !== "2"? ${b}`);
}
```

<!-- prettier-ignore-start -->
<strong>Exercise 3.</strong> Why are the strings `"Meow"` and `"meow"` different? Write a program to convert
either or both strings so the resulting strings compare equal according to
`===`.
<!-- prettier-ignore-end -->

<!-- prettier-ignore-start -->
<strong id="exNumberConvert">Exercise 4.</strong> The number `123` is not strictly the same as the string `"123"`. However, you
can use the JavaScript function [`parseInt(string, radix)`][parseInt] to convert
`"123"` to an integer. Replace `string` with `"123"` and replace `radix` with
the base of the number system you want to use. For now, you want to interpret
`"123"` as an integer according to the decimal number system, hence replace
`radix` with `10` to mean the decimal number system. The code
`parseInt("123", 10)` will convert `"123"` to an integer. Furthermore, if a
string such as `"123.45"` can be interpreted as a floating point number, you can
use the function [`parseFloat(string)`][parseFloat] to convert the string to a
floating point number. Using `parseFloat()` is simpler than using `parseInt()`
because `parseFloat()` always uses the decimal number system. Modify the program
[`parse-num.js`](https://github.com/quacksouls/lyf/blob/main/assets/src/data/parse-num.js)
below so the relevant values compare equal according to `===`.
<!-- prettier-ignore-end -->

[`parse-num.js`](https://github.com/quacksouls/lyf/blob/main/assets/src/data/parse-num.js)
```js
/**
 * Same or different?
 *
 * @param {NS} ns The Netscript API.
 */
export async function main(ns) {
    const a = 42;
    const b = 42.3;
    const as = "42";
    const bs = "42.3";
    ns.tprintf(`${a} = ${as}? ${a === as}`);
    ns.tprintf(`${b} = ${bs}? ${b === bs}`);
}
```

<!-- prettier-ignore-start -->
<strong>Exercise 5.</strong> The function [`Number()`][number] provides a convenient way to convert a number
from string representation to the number data type. Repeat
[this exercise](#exNumberConvert), but using `Number()` only.
<!-- prettier-ignore-end -->

<!-- prettier-ignore-start -->
<strong>Exercise 6.</strong> Instead of converting `"123"` to a number so it would compare equal to `123`,
you can use the code [`String(n)`][string] to convert the number `123` to a
string and then perform the comparison. For example, `123` would be converted to
a string like so: `String(123)`. Use `String()` to modify the program
[`parse-num.js`](https://github.com/quacksouls/lyf/blob/main/assets/src/data/parse-num.js)
above so the relevant values would compare equal according to `===`.
<!-- prettier-ignore-end -->

<!-- prettier-ignore-start -->
<strong>Exercise 7.</strong> The inequality operators `<`, `>`, `<=`, and `>=` also work with characters of
the English alphabet. Just like the integers have an ordering to tell you that
$$1 < 2$$ holds true, characters of the English alphabet have an ordering as
well, i.e. alphabetic or _lexicographic_ ordering. The letter "a" always comes
before "b" and JavaScript can confirm this dictionary ordering if you run the
code `"a" < "b"`. Here, the operator `<` means "precede". The expression
`"a" < "b"` can be read as: Does the letter "a" come before "b"? Note that in
JavaScript, an uppercase letter always precedes any lowercase letter. Modify the
program below so the result of the operator `<` is `true`. Why does the
expression `"aardvark" < "Aardvark"` return `false`?
<!-- prettier-ignore-end -->

[`dictionary.js`](https://github.com/quacksouls/lyf/blob/main/assets/src/data/dictionary.js)
```js
/**
 * A small dictionary.
 *
 * @param {NS} ns The Netscript API.
 */
export async function main(ns) {
    const a = "aardvark";
    const b = "armadillo";
    const c = "aardwolf";
    const d = "Aardvark";
    ns.tprintf(`${b} < ${a}? ${b < a}`);
    ns.tprintf(`${c} < ${a}? ${c < a}`);
    ns.tprintf(`${b} < ${c}? ${b < c}`);
    ns.tprintf(`${a} < ${d}? ${a < d}`);
}
```

<!-- prettier-ignore-start -->
<strong>Exercise 8.</strong> Two strings might have the same length, but that does not mean they are the same
string. Each character must occur at the same position in both strings. Two
strings can be similar if they have the same length and characters in
corresponding positions might differ by lowercase or uppercase. Write a program
to help you determine which of the following strings are strictly the same and
which are similar: `"n00dles"`, `"noodles"`, `"N00dles"`.
<!-- prettier-ignore-end -->

<!-- prettier-ignore-start -->
<strong>Exercise 9.</strong> A quiz has 3 statements, each of which evaluates to a boolean value. The
statements are shown in the program below. Modify the program to output the
number of correct statements, using only boolean arithmetics. Insert your code
at the location shown in the program.
<!-- prettier-ignore-end -->

[`quiz.js`](https://github.com/quacksouls/lyf/blob/main/assets/src/data/quiz.js)
```js
/**
 * How many correct solutions.
 *
 * @param {NS} ns The Netscript API.
 */
export async function main(ns) {
    const resultA = 2 < 3;
    const resultB = 37 === "37";
    const resultC = 2 === 2.0;
    // Insert code here.
}
```

<!--=========================================================================-->

<!-- prettier-ignore-start -->
[equality]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness
[number]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
[parseFloat]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat
[parseInt]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
[string]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
<!-- prettier-ignore-end -->
