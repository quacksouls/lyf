---
title: Compare the pair
math: true
---

Boolean values commonly arise when you need to compare strings, numbers, or
something else. Is the number 1 less than 2? Of course the expression $$1 < 2$$
is true. Here are some more mathematics facts:

:include: file="assets/src/data/compare.js", line=25:-

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
:exercise:
Read more about loose and strict equality [here][equality].
<!-- prettier-ignore-end -->

<!-- prettier-ignore-start -->
:exercise:
Explain why the program below gives you different answers.
<!-- prettier-ignore-end -->

:include: file="assets/src/data/same-diff.js", line=25:-

<!-- prettier-ignore-start -->
:exercise:
Why are the strings `"Meow"` and `"meow"` different? Write a program to convert
either or both strings so the resulting strings compare equal according to
`===`.
<!-- prettier-ignore-end -->

<!-- prettier-ignore-start -->
:exercise: label="exNumberConvert"
The number `123` is not strictly the same as the string `"123"`. However, you
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
:script: file="assets/src/data/parse-num.js"
below so the relevant values compare equal according to `===`.
<!-- prettier-ignore-end -->

:include: file="assets/src/data/parse-num.js", line=25:-

<!-- prettier-ignore-start -->
:exercise:
The function [`Number()`][number] provides a convenient way to convert a number
from string representation to the number data type. Repeat
[this exercise](#exNumberConvert), but using `Number()` only.
<!-- prettier-ignore-end -->

<!-- prettier-ignore-start -->
:exercise:
Instead of converting `"123"` to a number so it would compare equal to `123`,
you can use the code [`String(n)`][string] to convert the number `123` to a
string and then perform the comparison. For example, `123` would be converted to
a string like so: `String(123)`. Use `String()` to modify the program
:script: file="assets/src/data/parse-num.js"
above so the relevant values would compare equal according to `===`.
<!-- prettier-ignore-end -->

<!-- prettier-ignore-start -->
:exercise:
The inequality operators `<`, `>`, `<=`, and `>=` also work with characters of
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

:include: file="assets/src/data/dictionary.js", line=25:-

<!-- prettier-ignore-start -->
:exercise:
Two strings might have the same length, but that does not mean they are the same
string. Each character must occur at the same position in both strings. Two
strings can be similar if they have the same length and characters in
corresponding positions might differ by lowercase or uppercase. Write a program
to help you determine which of the following strings are strictly the same and
which are similar: `"n00dles"`, `"noodles"`, `"N00dles"`.
<!-- prettier-ignore-end -->

<!-- prettier-ignore-start -->
:exercise:
A quiz has 3 statements, each of which evaluates to a boolean value. The
statements are shown in the program below. Modify the program to output the
number of correct statements, using only boolean arithmetics. Insert your code
at the location shown in the program.
<!-- prettier-ignore-end -->

:include: file="assets/src/data/quiz.js", line=25:-

<!--=========================================================================-->

<!-- prettier-ignore-start -->
[equality]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness
[number]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
[parseFloat]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat
[parseInt]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
[string]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
<!-- prettier-ignore-end -->
