# Decision, decision

## I can't decide

How many times do you find yourself unable to make up your mind about something?
JavaScript provides various ways to help you construct a program that branches
into several paths, depending on whichever choice you make. The techniques are
not guaranteed to cure you of indecision, but at least makes it seem like your
program knows when to be resolute.

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

## So many choices

You want to make more decisions? Is that a "yes", no? JavaScript provides three
more ways for your program to make decisions, each of which is suitable for
various specific situations. See whether you can use the JavaScript statements
presented in this subsection to simplify or make your code more readable.

### Ternary operator

Sometimes you find yourself writing short `if...else` statements such as the
following:

```js
/**
 * caturday.js
 *
 * Is it Caturday yet?
 *
 * @param ns The Netscript API.
 */
export async function main(ns) {
    const today = "Saturday";
    if (today === "Saturday") {
        ns.tprintf("It's Caturday.");
    } else {
        ns.tprintf("Not Caturday.");
    }
}
```

JavaScript provides the _ternary operator_ to help you simplify your short
`if...else` statements. The ternary operator is structured as follows:

```js
condition ? codeIfTrue : codeIfFalse;
```

The `condition` should be an expression that evaluates to either `true` or
`false`. If `condition` evaluates to `true`, then whatever code is in
`codeIfTrue` would be executed. Otherwise, code in `codeIfFalse` would run. For
example, you can replace the code snippet:

```js
if ("a" === "a") {
    ns.tprintf("A");
} else {
    ns.tprintf("Not A.");
}
```

with the one-liner:

```js
"a" === "a" ? ns.tprintf("A") : ns.tprintf("Not A.");
```

The result of the ternary operator can be saved for later use. All you need to
do is ensure that `codeIfTrue` and `codeIfFalse` return some kind of value. As
another example, you can simplify the above `if...else` statement as

```js
const result = "a" === "a" ? "A" : "Not A.";
ns.tprintf(result);
```

Should you be using the ternary operator instead of an `if...else` statement?
Maybe yes, maybe no. Ask yourself this question: If I replace an `if...else`
statement with a ternary operator, would the resulting code be readable to me
and/or other people? Readability is important in computer programming. You write
code not only for a computer to run, but also for other humans to read as well.
Prioritize readability as much as possible, unless you have a reason to the
contrary.

### `if...else if...else`

According to
[this page](https://web.archive.org/web/20230103034111/https://www.petplace.com/article/cats/pet-health/average-life-expectancy-cats/),
a kitten is a cat from birth to six months in human time. From seven months to
two years, a cat is known as a junior. The next stage is prime, i.e. between
three and six years. The cat enters the mature stage starting from seven years
and ends at 10 years.

Sam wants to translate the above description into JavaScript code. Fortunately,
JavaScript allows the `if` and `if...else` statements to be chained to help us
code complex decisions into our programs. The chaining takes the following
structure:

```js
if (condition1) {
    // Insert code if condition1 is true.
} else if (condition2) {
    // Insert code if condition2 is true.
} else if (condition3) {
    // Insert code if condition3 is true.
} else {
    // Insert code if all the above conditions are false.
}
```

You can have as many `else if` blocks as you want. Sam uses the above structure
to write a program about the lifespan of Tabby:

```js
/**
 * lifespan.js
 *
 * Tabby's lifespan.
 *
 * @param ns The Netscript API.
 */
export async function main(ns) {
    const age = 2;
    const name = "Tabby";
    if (0 <= age && age <= 0.5) {
        ns.tprintf(`${name} is a kitten.`);
    } else if (0.5 < age && age <= 2) {
        ns.tprintf(`${name} is a junior.`);
    } else if (2 < age && age <= 6) {
        ns.tprintf(`${name} is in the prime stage.`);
    } else if (6 < age && age <= 10) {
        ns.tprintf(`${name} is a mature.`);
    } else {
        ns.tprintf("More than a decade with Sam.");
    }
}
```

### `switch`

In the previous subsection, Sam chained together a bunch of `if` and `if...else`
statements to categorize Tabby into one of several life stages. Let's consider
the reverse situation. Suppose the life stage of Tabby is known. How would Sam
determine the age range (in human years) of Tabby?

By using the `switch` statement, of course. One version of the `switch`
statement has the following structure:

```js
switch (expression) {
    case value1:
        // Insert code here if
        // expression evaluates to value1.
        break;
    case value2:
        // Insert code here if
        // expression evaluates to value2.
        break;
    ...
    case valueN:
        // Insert code here if
        // expression evaluates to valueN.
        break;
    default:
        // Insert code here if expression does not
        // evaluate to any of the above values.
}
```

The `expression` should be valid JavaScript code that evaluates to a value. Each
of `value1`, `value2`, and so on should be one among several possible values of
`expression`. The `default` block near the end of the `switch` statement is a
fail-safe for you to handle the situation where `expression` does not evaluate
to any of the given values. If `expression` does not evaluate to any of the
expected cases, insert code within the `default` block for the, umm..., default
result of the `switch` statement. The `default` block plays a similar role to
the `else` block of an `if...else` statement.

Sam uses the `switch` statement to map from Tabby's life stage to the
corresponding age range as follows:

```js
/**
 * stage-to-age.js
 *
 * Tabby's lifespan.
 * Life stage to age range.
 *
 * @param ns The Netscript API.
 */
export async function main(ns) {
    const stage = "junior";
    let ageRange = "";
    switch (stage) {
        case "kitten":
            ageRange = "birth to 6 months";
            break;
        case "junior":
            ageRange = "7 months to 2 years";
            break;
        case "prime":
            ageRange = "3 to 6 years";
            break;
        case "mature":
            ageRange = "7 to 10 years";
            break;
        default:
            ageRange = "over 10 years";
    }
    ns.tprintf(`Tabby's age range: ${ageRange}`);
}
```

### Exercises

> _Exercise 1._ Read more about the ternary operator
> [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator).
>
> _Exercise 2._ What is readable code? Find out more
> [here](https://code.tutsplus.com/tutorials/top-15-best-practices-for-writing-super-readable-code--net-8118).
>
> _Exercise 3._ Use the ternary operator to simplify the `caturday.js` script.
>
> _Exercise 4._ Use the ternary operator to simplify the following program.

```js
/**
 * Odd or even?
 *
 * @param ns The Netscript API.
 */
export async function main(ns) {
    const n = 8;
    let parity = "";
    if (n % 2 === 0) {
        parity = "even";
    } else {
        parity = "odd";
    }
    ns.tprintf(parity);
}
```

> _Exercise 5._ From 11 to 14 human years, a cat is in its senior stage. The
> final stage of a cat's lifespan is from 15 years onward, also referred to as
> the geriatric stage. Extend the scripts `lifespan.js` and `stage-to-age.js` to
> include the above two stages of Tabby's lifespan.
>
> _Exercise 6._ Read more about the `switch` statement
> [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch).
>
> _Exercise 7._ According to
> [this site](https://web.archive.org/web/20230102072021/https://www.vet.cornell.edu/departments-centers-and-institutes/cornell-feline-health-center/health-information/feline-health-topics/how-often-should-you-feed-your-cat),
> the number of times a cat should be fed each day can depend on its age. A
> kitten from birth up to six months old (human time) requires three meals per
> day. From six months to one year, a cat matures to adulthood and should be fed
> two times a day. From one year onward, it is OK to feed a cat once a day as
> long as the cat is healthy. Tabby is currently 2 years old in human time.
> Translate the above description into JavaScript code to help Sam decide how
> many times per day to feed Tabby.
>
> _Exercise 8._ The JavaScript code

```js
const d = new Date().getDay();
```

> gives you an integer between 0 and 6, inclusive, that represents the current
> day of the week. The number 0 means Sunday, 1 corresponds to Monday, 2
> represents Tuesday, etc. Write a program to convert the result of the above
> line of code into the corresponding day of the week.

[[TOC](../README.md "Table of Contents")]
[[Previous](data.md "Data, darta, dayta")]
[[Next](function.md "Put that in a function")]

[![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-blue.svg)](http://creativecommons.org/licenses/by-nc-sa/4.0/)
