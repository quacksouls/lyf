# Data, darta, dayta

This section will show you various ways to juggle basic data types in
JavaScript.

## Pick a number

Numbers in JavaScript are represented as floating point numbers. The integer 42
and the number 42.0 have the same representation. This is convenient for working
with numbers because you do not need to worry about whether a number is an
integer or floating point.

Underneath it all, JavaScript uses 64 bits to represent each number. Why do you
need to know that each number in JavaScript is 64-bit? Usually you do not need
to care that a number is 64-bit. However, if you are working on a program that
uses very large numbers, you would have to worry about whether 64 bits are
enough for your purpose. Use the following program to help you determine the
smallest and largest numbers that can be represented on your computer. My
computer has a 64-bit CPU and the results of the program running on my computer
are given in the comments. As you can see, the largest _safe_ integer I can have
on my computer is a little over 9 quadrillion and the smallest _safe_ integer is
the negative of the largest _safe_ integer.

```js
/**
 * Largest and smallest numbers in JavaScript.
 *
 * @param ns The Netscript API.
 */
export async function main(ns) {
    ns.tprint(Number.MIN_VALUE); // 5e-324
    ns.tprint(Number.MIN_SAFE_INTEGER); // -9007199254740991
    ns.tprint(Number.MAX_VALUE); // 1.7976931348623157e+308
    ns.tprint(Number.MAX_SAFE_INTEGER); // 9007199254740991
}
```

Look again closely at the comments in the program. Why is the letter `e` in two
of the numbers? A number written as `5e3` or `1.5e4` is using scientific
notation. The letter `e` here means "exponent", telling you the exponent to
which you must raise `10`. Consider the number `5e3`. You write down `5`. The
part `e3` tells you to raise `10` to the power of `3`, i.e. `1000`. Now multiply
`5` by `1000` to obtain `5,000`. Thus `5e3` is a compact representation of the
expanded form `5,000`. By way of another example, the number `1.5e4` means that
you write down `1.5`. Raise `10` to the power of `4` to get `10,000`. Now
multiply `1.5` by `10,000` and you have `15,000`, which is the expanded version
of `1.5e4`. As you can see, the `e` (or scientific) notation is handy whenever
you want a compact representation for a large or small number. Do you want to
write 7 million in your program as `7000000` or as `7e6`?

### Special numbers

JavaScript defines three special numbers:
[`NaN`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN),
positive
[`Infinity`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Infinity),
and
[`-Infinity`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Infinity).
The symbol `NaN` means Not-A-Number. It results when a number conversion fails
or an operation cannot be performed on two numbers, among other reasons. For
example, you would get `NaN` if you try to evaluate `0 / 0`. In some programming
languages, attempting to divide zero by zero would result in the immediate halt
of your program. JavaScript is lenient, but you still need to guard against
having something as absurd as `0 / 0` in your programs. The symbol `NaN` can
also be accessed as
[`Number.NaN`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/NaN).

Positive `Infinity` is defined in JavaScript as the number greater than every
other number in the language. Similarly, the special number `-Infinity` is
defined as the number smaller than every other number. These two numbers are
useful in certain situations, but do not expect them to behave like their formal
mathematical definitions. The special numbers `Infinity` and `-Infinity` are the
same as
[`Number.POSITIVE_INFINITY`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/POSITIVE_INFINITY)
and
[`Number.NEGATIVE_INFINITY`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/NEGATIVE_INFINITY),
respectively.

### Variables

A variable in programming languages is like a named box that can hold a value.
You place a specific value into the box. Anytime you want to use the value, you
reference the name of the box. One way to create a variable in JavaScript is by
using the keyword
[`let`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let).
Suppose you want to assign the number `7` to a variable whose name is `number`.
In JavaScript, you would do it like so:

```js
/**
 * Create a variable and print its value.
 *
 * @param ns The Netscript API.
 */
export async function main(ns) {
    let number = 7;
    ns.tprint(number);
}
```

Note the equal sign `=`. In JavaScript, and indeed in many other programming
languages, the equal sign `=` does not mean mathematical equality like you have
been taught in mathematics classes during your school days. Instead, the equal
sign `=` is used in JavaScript to mean "assign". The statement `let number = 7;`
in effect says, "Let's create a variable called `number` and assign the number
`7` to the variable." From hereon, whenever you want the numeric value `7`, you
can use the variable `number` instead.

The keyword `let` is flexible. Once you have declared a variable using `let`,
you can assign a value to that variable. Later on in your program, you can
assign a different value to that same variable. There are cases where you do not
want a variable to have a value other than the value you first assigned it. An
example is the number of days in a week, namely 7. The number of days in a week
remain the same no matter which country you are in, unless you happen to be in a
country that uses a different kind of calendar. In JavaScript, how do you
declare as constant a variable that holds the number of days in a week? Do so
using the keyword
[`const`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const),
as shown in the script `week.js` below.

```js
/**
 * week.js
 *
 * A variable whose value can be changed and
 * another variable whose value cannot be changed.
 *
 * @param ns The Netscript API.
 */
export async function main(ns) {
    let weekend = 2;
    weekend = 3;
    const daysInWeek = 7;
    ns.tprint(weekend);
    ns.tprint(daysInWeek);
    // daysInWeek = 5;
}
```

> _Exercise 1._ Write the number `420,000,000` in terms of scientific notation.
>
> _Exercise 2._ Write the expanded form of the number `9.6e1`.
>
> _Exercise 3._ Why is the number `5e-3` different from `-5e3`?
>
> _Exercise 4._ [MDN Web Docs](https://developer.mozilla.org/) has up-to-date
> documentation about JavaScript. You should be consulting the
> [JavaScript reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)
> on MDN as you learn JavaScript. Spend some time to browse through the
> reference now. Do not worry if everything is incomprehensible at the moment.
> For now, it is more important that you are familiar with the structure of the
> reference rather than its contents.
>
> _Exercise 5._ Read more about numbers in JavaScript
> [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number).
>
> _Exercise 6._ JavaScript also allows you to handle huge integers that do not
> fit within 64 bits. Browse through the documentation of
> [`BigInt`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt)
> to see what JavaScript has to offer in terms of very large integers.
>
> _Exercise 7._ Create a script called `age.js`. Assign your age to a variable
> and print the value of the variable to the terminal.
>
> _Exercise 8._ Refer to the script `week.js` above. Uncomment the line

```js
// daysInWeek = 5;
```

> Save the script and run it again. What do you get as output? Why do you get
> such output?
>
> _Exercise 9._ Apart from using
> [`let`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)
> and
> [`const`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const),
> a third way to declare a variable is by using the keyword
> [`var`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var).
> You will most likely see `var` being used in JavaScript code sooner or later.
> Avoid using `var` in any JavaScript code you write. Stick to `let` and `const`
> as much as possible. Read
> [this article](https://medium.com/swlh/the-difference-of-var-vs-let-vs-const-in-javascript-abe37e214d66)
> to learn more about the differences between `let`, `const`, and `var`.

## String me along

A string is a sequence of characters. JavaScript gives you various ways to
create a string, some common methods being:

1. Double quotation marks. Delimit a string by using the double quotation mark
   symbol, i.e. `"`. For example, `"This string uses double quotation marks."`
1. Single quotation marks. Use the single quotation mark symbol, i.e. `'`, to
   delimit a string. An example is, `'This string uses single quotation marks.'`
1. Backticks. The backtick symbol `` ` `` works similarly to the single and
   double quotation marks. However, the backtick allows you to create more
   flexible strings when you use variables to customize your strings.

The following program uses the above techniques to create various strings.

```js
/**
 * Various ways to create strings.
 *
 * @param ns The Netscript API.
 */
export async function main(ns) {
    let pet = "cat";
    let age = 2;
    ns.tprint("I'm Sam.");
    ns.tprint('I have a cat called "Tabby".');
    ns.tprint(`My ${pet} is ${age} years old.`);
}
```

The above program shows that you can mix single and double quotation marks,
usually under special circumstances. If your string has an apostrophe or a
single quotation mark, as in `I'm`, then the string should be delimited with
double quotation marks. You can also write `"I'm Sam."` as `'I\'m Sam.'`; notice
the backslash `\`. I think the version `"I'm Sam."` is more readable than
`'I\'m Sam.'`. Remember, you are also writing JavaScript code for other humans
to read. A word in your string might be enclosed within double quotation marks,
e.g. `"Tabby"`, in which case delimit your string using single quotation marks.
You can also use backslash to get `"I have a cat called \"Tabby\"."`, but I
think this is not as readable as `'I have a cat called "Tabby".'`. Finally, use
backticks to customize your strings. You can insert the value of a variable
inside a string provided the string is delimited with backticks. Use the
placeholder `${variableName}` to insert the value of a variable, as demonstrated
in the above program. Using backticks in this manner is an example of a general
technique called template literal.

### Cons and cat

Next, let's discuss another string problem. How to concatenate, or join
together, multiple strings? Suppose you have a variable called `firstName` that
holds the string `"Tabby"`. You also have a variable called `lastName` that
holds the string `"Whiskers"`. How would you use both variables to concatenate
the strings they hold into a new string? One way is to use the mathematical
operator `+` to join the two strings, taking care to insert a space between the
first name and the last name. A second method is to use template literal as
discussed above. A third technique is to use the method
[`concat()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/concat).
Every string in JavaScript has this method. The following program uses the above
techniques to concatenate various strings.

```js
/**
 * Various ways to concatenate strings.
 *
 * @param ns The Netscript API.
 */
export async function main(ns) {
    const firstName = "Tabby";
    const lastName = "Whiskers";
    const a = firstName + " " + lastName; // Use + operator.
    const b = `${firstName} ${lastName}`; // Template literal.
    const c = firstName.concat(" ", lastName); // Method concat()
    ns.tprint(a);
    ns.tprint(b);
    ns.tprint(c);
}
```

Why so many ways to join multiple strings together? Each technique is useful in
some circumstances. For example, template literal is often used when you want to
print a custom string to the terminal. The method
[`concat()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/concat)
is used when you want to concatenate multiple strings together without
necessarily outputting the result to the terminal. There is a fourth technique
that is better suited to concatenating multiple strings, but we will postpone
its discussion to later in the tutorial.

> _Exercise 1._ Write a program to introduce yourself. Use variables and
> template literals to create strings that contain your full name, age, and
> favourite food. Print the strings to the terminal.
>
> _Exercise 2._ The newline character, written using a backslash as `\n`, can be
> used to break a string into multiple lines. The break only occurs when you
> print the string. Run the program below to see what you would get. Add two
> more items to the shopping list: dates and eggs. Insert the items into the
> same string and ensure each item appears on its own line when printed.

```js
/**
 * shopping.js
 *
 * Multi-line string.
 *
 * @param ns The Netscript API.
 */
export async function main(ns) {
    const shoppingList = "\n1. Apples\n2. Bananas\n3. Cherries";
    ns.tprint(shoppingList);
}
```

> _Exercise 3._ Read more about JavaScript strings
> [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String).
>
> _Exercise 4._ Each string has the method
> [`toLowerCase()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase),
> which is used to convert all characters in the string to lower case. Use the
> method to convert the string `"This is A String."` to lower case. Print your
> result to the terminal.
>
> _Exercise 5._ The function
> [`ns.tprint()`](https://github.com/bitburner-official/bitburner-src/blob/dev/markdown/bitburner.ns.tprint.md)
> first prints the name of the script that calls the function, followed by
> whatever you tell it to output to the terminal. Sometimes you do not want to
> print the script name because doing so messes up the formatting of your
> string. Refer to the script `shopping.js` from _Exercise 2_. We used
> `ns.tprint()` and `\n` to properly format our shopping list. Had we removed
> the very first newline character `\n` from our string, the resulting shopping
> list would be out of alignment when output to the terminal. Use the function
> [`ns.tprintf()`](https://github.com/bitburner-official/bitburner-src/blob/dev/markdown/bitburner.ns.tprintf.md)
> instead. Change the script `shopping.js` to use the function `ns.tprintf()`.
> Remember to remove the leading newline character.
>
> _Exercise 6._ Tabby Whiskers uses a Linux operating system called Tabian. This
> is what Tabby's directory tree looks like:

![Tabian file system](../image/data/tabian.png "Tabian file system")

> Write a program to print Tabby's directory tree.
>
> _Exercise 7._ Use emoji and colours to spice up your terminal output. Colour
> effect is achieved by
> [ANSI escape code](https://en.wikipedia.org/wiki/ANSI_escape_code). Suppose
> you want to colour the string `"Tabby"` as magenta. Use the escape code
> `\u001b[35m` (the sequence for magenta) to begin the colouring. End the
> colouring with the escape code `\u001b[0m`, which resets the effect of the
> previous escape code. The colouring effect is achieved as the string
> `"\u001b[35mTabby\u001b[0m"`. Emoji is much simpler; insert the emoji you want
> in your string. The following script provides a profile of Tabby.

```js
/**
 * A profile of Tabby the cat.
 *
 * @param ns The Netscript API.
 */
export async function main(ns) {
    const cyan = "\u001b[36m";
    const red = "\u001b[31m";
    const reset = "\u001b[0m";
    const name = "Name: Tabby Whiskers";
    const pic = "Pic: 🐱";
    const like = `${cyan}Likes${reset}: fish`;
    const hate = "Hates: broccoli";
    ns.tprintf(`${name}\n${pic}\n${like}\n${hate}`);
}
```

> Colour the string `"Hates"` as red. Tabby likes to play with a yarn ball. Add
> Tabby's favourite toy to its profile. Read more about ANSI escape code for
> colours
> [here](https://www.lihaoyi.com/post/BuildyourownCommandLinewithANSIescapecodes.html)
> and [here](https://gist.github.com/fnky/458719343aabd01cfb17a3a4f7296797).
>
> _Exercise 8._ Each string in JavaScript has the property `.length`, which
> tells you the number of characters in the string, including whitespace
> characters. To count the number of characters in the string
> `"Tabby Whiskers"`, use the following program:

```js
/**
 * How many characters are in Tabby's full name?
 *
 * @param ns The Netscript API.
 */
export async function main(ns) {
    const name = "Tabby Whiskers";
    ns.tprintf(name.length);
}
```

> In fact, you can shorten the program to the one-liner
> `ns.tprintf("Tabby Whiskers".length);`. Write a program to count the number of
> letters in the word `supercalifragilisticexpialidocious`. Use your program to
> calculate the number of characters in the sentence
> `The quick brown fox jumps over the lazy dog.`.

## Smooth operator

The usual mathematical operators you learnt in school can be used in JavaScript
to perform various calculations. Here is a list of the usual suspects together
with their corresponding symbols in JavaScript:

1. _Addition._ Add two numbers by using the addition operator `+`.
1. _Subtraction._ Take one number from another number by using the subtraction
   operator `-`.
1. _Multiplication._ The usual multiplication symbol is $\times$, but in
   JavaScript you use the asterisk symbol `*`.
1. _Division._ Use the forward slash symbol `/` to divide one number by another
   number.

The usual order of operation you learnt in school carries over to JavaScript.
You might prefer to make your intention clear by enclosing various parts of an
expression within parentheses. Consider the following program.

```js
/**
 * Doing arithmetics in JavaScript.
 *
 * @param ns The Netscript API.
 */
export async function main(ns) {
    const a = 1 - 2 * 3; // 1 - (2 * 3) = -5
    const b = 1 + 6 / 2; // 1 + (6 / 2) = 4
    const c = 1 - (8 / 2) * 2; // 1 - 8 / 2 * 2 = -7
    const d = (1 + 2) / (4 - 3); // 3 / 1 = 3
    ns.tprint(a);
    ns.tprint(b);
    ns.tprint(c);
    ns.tprint(d);
}
```

Recall from the subsection [Cons and cat](data.md#cons-and-cat) that you have
already been using the addition operator `+` to "add" two strings together. In
the context of strings, the operator `+` means concatenation of strings.
However, if you have numbers on either sides of the symbol `+` as in the
expression `1 + 2`, then the operator `+` means mathematical addition. What
would happen if an operand of `+` is a string while the other operand is a
number as in the expression `"abc" + 2`? JavaScript would convert the number `2`
to a string, then concatenate `"abc"` with `"2"`.

JavaScript has two other mathematical operators:

1. _Remainder._ The remainder operator (also known as the modulo operator) is
   the percent symbol `%`. The operator gives you the remainder upon dividing
   one number by another number. For example, $4 / 2 = 2$ because 2 divides
   evenly into 4 with zero remainder. You would expect the JavaScript expression
   `4 % 2` to give you 0, which is correct. Now 3 does not evenly divide into 4
   because the mathematical expression $4 / 3$ does not result in an integer.
   How would you calculate the remainder in this case? The remainder is 1, which
   can be verified with the JavaScript expression `4 % 3`.
1. _Exponentiation._ Exponentiation is about raising a number to a power. The
   square of 4 can be written as the mathematical expression $4 \times 4 = 4^2$.
   You write the latter expression in JavaScript as `4**2`, where you use the
   multiplication symbol `*` twice. Why would JavaScript not use the caret
   symbol `^` for exponentiation? The reason is that JavaScript already reserves
   the symbol `^` for a different purpose. Read more about the
   [symbol `^` here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR).

OK, so you can use `**` to mean exponentiation. Can a similar thing be done with
the addition, subtraction, and division operators? Yes to the addition and
subtraction operators, but no to the division operator. You already know that
`//` is used to delimit a single line comment. The symbols `++` and `--` are the
increment and decrement operators, respectively. Suppose you have a variable
declared like so: `let n = 0;`. Later in your program, you might want to add 1
to `n`. You can certainly perform the addition like this: `n = n + 1;`.
JavaScript allows you to write the code more compactly as `n++;`, which is a
shorthand for `n = n + 1;`. Similarly, you can decrement the value of `n` by 1
as `n = n - 1;` or use the shorthand notation `n--;`. Time for some more facts
about Tabby the cat.

```js
/**
 * tabby-facts.js
 *
 * Facts about Tabby.
 *
 * @param ns The Netscript API.
 */
export async function main(ns) {
    let age = 2;
    let can = 5;
    ns.tprintf(`Tabby is ${age} years old.`);
    age++;
    ns.tprintf(`Tabby will soon be ${age} years old.`);
    ns.tprintf(`Tabby had ${can} cans of food.`);
    can--;
    ns.tprintf(`After eating 1 can, Tabby now has ${can} cans.`);
}
```

> _Exercise 1._ A pizza is cut into 7 equal slices. You share the pizza with 2
> friends. Each person must have the same number of slices. Write a program to
> calculate the number of slices each person can have. Extend your program to
> calculate the number of slices remaining after sharing the pizza equally
> amongst yourself and your friends.
>
> _Exercise 2._ How many whole weeks can there be in a full year? How many left
> over days that do not form a whole week? Write a program to calculate your
> answer.
>
> _Exercise 3._ If `++` increments a numeric variable by 1, is the expression
> `2++;` valid in JavaScript? Why or why not? Similarly, explain why `3--;` is
> or is not valid JavaScript code.
>
> _Exercise 4._ The meaning of the increment operator `++` depends on whether it
> is placed on the left or right side of its operand. Suppose you declare a
> variable as `let k = 3;`. You can increment `k` by 1 like this `++k;`
> (pre-increment) or like this `k++;` (post-increment), but the effect can be
> different and subtle. The pre-increment expression `++k;` means you first
> increment `k` by 1 then return the result, i.e. 4. In contrast, the
> post-increment expression `k++;` means you return the current value of `k`
> (i.e. 3), then increment `k` by 1. A similar comment applies to the decrement
> operator `--`. In the program below, the values of `a` and `b` are different,
> even though we incremented the same variable.

```js
/**
 * Pre- and post-increment.
 *
 * @param ns The Netscript API.
 */
export async function main(ns) {
    let k = 3;
    const a = ++k;
    k = 3;
    const b = k++;
    ns.tprint(`Pre-increment k: ${a}`);
    ns.tprint(`Post-increment k: ${b}`);
}
```

> In the script `tabby-facts.js` above, remove the lines `age++;` and `can--;`.
> Replace each print statement with an appropriate pre-increment or
> post-increment expression, or no replacement at all.
>
> _Exercise 5._ The increment expression `k++;` is shorthand for `k = k + 1;`.
> Is there a similar shorthand for something like `k = k + 3;`? You can replace
> the expression `k = k + 3;` with the shorthand `k += 3;`. In general, an
> expression such as `k += n;` means you first add `k` and `n` together, then
> assign the result to `k`. Similarly, the expression `k = k - n;` can be
> replaced with the shorthand `k -= n;`. The expression `k = k * n;` can be
> replaced with `k *= n;`. The expression `k = k / n;` can be written more
> succinctly as `k /= n;`. Modify the script `tabby-facts.js` above to use one
> or more of the operators discussed in this exercise.
>
> _Exercise 6._ Refer to
> [this page](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)
> for details about mathematical calculations you can do in JavaScript. For
> example, the function
> [`Math.pow()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/pow)
> allows you to raise a number to a specified exponent. Instead of the
> expression `3**2;` to calculate the square of 3, use the expression
> `Math.pow(3, 2);`. Use the function `Math.pow()` to calculate the square of 4.
> Use the function `Math.pow()` to calculate the _square root_ of 25.
>
> _Exercise 7._ The function
> [`Math.floor()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor)
> gives you the integer part of a number and ignores the fractional part. For
> example, given the number 2.5 the expression `Math.floor(2.5);` would return 2
> because 2 is the integer part. Use `Math.floor()` in your solutions to
> _Exercise 1_ and _Exercise 2_ above.

## Bool-urns

## Compare the pair

[[TOC](../README.md "Table of Contents")] [[Previous](hello.md "Hello, world")]
[[Next](decide.md "Decision, decision")]

[![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-blue.svg)](http://creativecommons.org/licenses/by-nc-sa/4.0/)
