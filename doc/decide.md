# Decision, decision

## I can't decide

### `if` statement

Sam is writing a program to manage the meal schedule of Tabby. Every Friday, Sam
usually feeds Tabby a slice of salmon. How would Sam code the latter logic into
the program? Sam reasons as follows: If today is Friday, then give Tabby a slice
of salmon. JavaScript has the `if` statement to allow you to implement simple
reasoning in your programs. The `if` statement has the following structure:

```js
if (condition) {
    // Insert code here in case the condition is true.
}
```

Here, `condition` should be JavaScript code that evalutes to a boolean. You
often find the condition to be an expression that compares one thing with
another thing. If the condition evaluates to `true`, then you should insert code
at the specified region to handle the true case. This region is the `if` block.
The `if` block starts from the open brace `{` and ends at the closing brace `}`.
In the context of Sam's program, the condition is code that compares the current
day with the string `"Friday"`. Sam uses the following code in an early version
of the meal schedule program:

```js
/**
 * salmon-v1.js
 *
 * Salmon day for Tabby.
 *
 * @param ns The Netscript API.
 */
export async function main(ns) {
    const today = "Friday";
    const salmonDay = "Friday";
    if (today === salmonDay) {
        ns.tprintf("Today is Tabby's salmon day.");
    }
}
```

In the script `salmon-v1.js`, the condition is the expression
`today === salmonDay`, which compares two strings. If the comparison returns
`true`, then the script enters the `if` block and output the string
`"Today is Tabby's salmon day."` to the terminal.

### `if...else` statement

Let's extend the `if` statement to handle the case where the condition evaluates
to `false`. Doing so would allow Sam to write a more robust program than the
script `salmon-v1.js`. JavaScript has the `if...else` statement to allow Sam to
write code for the `if` (true) block as well as code for the `else` (false)
block. The statement follows this structure:

```js
if (condition) {
    // Insert code in case condition is true.
} else {
    // Insert code in case condition is false.
}
```

The `if...else` statement extends the `if` statement to include an `else` block.
The `else` block starts at `else {` and ends at `}`. In case the condition
evaluates to `false`, code within the `else` block would be executed. Sam now
uses the `if...else` statement to extend the meal scheduler as follows:

```js
/**
 * salmon-v2.js
 *
 * Salmon day for Tabby.
 *
 * @param ns The Netscript API.
 */
export async function main(ns) {
    const today = "Thursday";
    const tomorrow = "Friday";
    const salmonDay = "Friday";

    if (today === salmonDay) {
        ns.tprintf("Today is Tabby's salmon day.");
    } else {
        ns.tprintf("No salmon for Tabby today.");
    }

    if (tomorrow === salmonDay) {
        ns.tprintf("Tomorrow will be Tabby's salmon day.");
    } else {
        ns.tprintf("No salmon for Tabby tomorrow.");
    }
}
```

### Exercises

> _Exercise 1._ Run the scripts `salmon-v1.js` and `salmon-v2.js` to see what
> would be printed to the terminal.
>
> _Exercise 2._ Read more about the `if...else` statement
> [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else).
>
> _Exercise 3._ On Thursday, Tabby likes to eat a small bite of cheese. Modify
> the script `salmon-v2.js` so the first `if...else` statement notifies Sam
> about whether today is Tabby's cheese day.
>
> _Exercise 4._ Noon starts from 12 pm. The JavaScript code

```js
const currentHour = new Date().getHours();
```

> gives you the current hour in 24-hour format. If it is currently 8 am, then
> the result would be the number `8`. If it is 1 pm, the result would be `13`.
> Write a program to get the current hour. If it is currently 12 pm, then output
> the string `"It's high noon."` to the terminal. Otherwise print the string
> `"Not yet high noon."` for all other hours.
>
> _Exercise 5._ An integer $n$ is even provided it can be divided by 2,
> otherwise $n$ is odd. An exercise from the subsection
> [Smooth operator](data.md#smooth-operator) describes a technique to generate
> "random" integers at most 100. Write a program that uses the technique and
> decide whether the generated integer is even or odd.
>
> _Exercise 6._ According to
> [this site](https://web.archive.org/web/20230102115754/https://be.chewy.com/nutrition-food-treats-15-human-foods-that-are-safe-for-cats/)
> it is safe to feed apple, blueberry, cantaloupe, pea, pumpkin, and spinach to
> cats. Sam wants to make Monday and Wednesday as fruit days, wherein Tabby
> would be fed one of the above fruits. Tuesday and Saturday are vegetable days;
> Tabby would be fed one of the above vegetables. Given the code lines

```js
const a = "Monday";
const b = "Saturday";
```

> write a program to determine whether `a` is Tabby's fruit day, and whether `b`
> is Tabby's vegetable day. In case it is Tabby's fruit day, print the choice of
> fruits to the terminal; similarly for the vegetable day.
>
> _Exercise 7._ A four-digit year $n$ is a leap year, provided the following
> conditions are satisfied:
>
> 1. The number $n$ can be divided by 4.
> 1. The number $n$ cannot be divided by 100 or $n$ can be divided by 400. Here,
>    "or" is not exclusive or.
>
> Using the following code

```js
const year = new Date().getFullYear();
```

> to obtain the current four-digit year, write a program to determine whether
> the current year is a leap year.

[[TOC](../README.md "Table of Contents")]
[[Previous](data.md "Data, darta, dayta")]
[[Next](function.md "Put that in a function")]

[![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-blue.svg)](http://creativecommons.org/licenses/by-nc-sa/4.0/)
