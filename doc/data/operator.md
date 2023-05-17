# Smooth operator

The usual mathematical operators you learnt in school can be used in JavaScript
to perform various calculations. Here is a list of the usual suspects together
with their corresponding symbols in JavaScript:

1. _Addition._ Add two numbers by using the addition operator `+`.
1. _Subtraction._ Take one number from another number by using the subtraction
   operator `-`.
1. _Multiplication._ The usual multiplication symbol is $$\times$$, but in
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
 * @param {NS} ns The Netscript API.
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

Recall from the section [_Cons and cat_](string.md#cons-and-cat) that you have
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
   one number by another number. For example, $$4 / 2 = 2$$ because 2 divides
   evenly into 4 with zero remainder. You would expect the JavaScript expression
   `4 % 2` to give you 0, which is correct. Now 3 does not evenly divide into 4
   because the mathematical expression $$4 / 3$$ does not result in an integer.
   How would you calculate the remainder in this case? The remainder is 1, which
   can be verified with the JavaScript expression `4 % 3`.
1. _Exponentiation._ Exponentiation is about raising a number to a power. The
   square of 4 can be written as the mathematical expression
   $$4 \times 4 = 4^2$$. You write the latter expression in JavaScript as
   `4**2`, where you use the multiplication symbol `*` twice. Why would
   JavaScript not use the caret symbol `^` for exponentiation? The reason is
   that JavaScript already reserves the symbol `^` for a different purpose. Read
   more about the
   [symbol `^` here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR).

OK, so you can use `**` to mean exponentiation. Can a similar thing be done with
the addition, subtraction, and division operators? Yes to the addition and
subtraction operators, but no to the division operator. You already know that
`//` is used to delimit a single line comment. The symbols `++` and `--` are the
increment and decrement operators, respectively. Suppose you have a variable
declared like so: `let n = 0;`. Later in your program, you might want to add 1
to `n`. You can certainly perform the addition like this: `n = n + 1`.
JavaScript allows you to write the code more compactly as `n++`, which is a
shorthand for `n = n + 1`. Similarly, you can decrement the value of `n` by 1 as
`n = n - 1` or use the shorthand notation `n--`. Time for some more facts about
Tabby the cat.

!FILENAME tabby-facts.js

```js
/**
 * Facts about Tabby.
 *
 * @param {NS} ns The Netscript API.
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

<!-- ====================================================================== -->

## Exercises

**Exercise 1.** A pizza is cut into 7 equal slices. You share the pizza with 2
friends. Each person must have the same number of slices. Write a program to
calculate the number of slices each person can have. Extend your program to
calculate the number of slices remaining after sharing the pizza equally amongst
yourself and your friends.

**Exercise 2.** How many whole weeks can there be in a full year? How many left
over days that do not form a whole week? Write a program to calculate your
answer.

**Exercise 3.** If `++` increments a numeric variable by 1, is the expression
`2++` valid in JavaScript? Why or why not? Similarly, explain why `3--` is or is
not valid JavaScript code.

**Exercise 4.** The meaning of the increment operator `++` depends on whether it
is placed on the left or right side of its operand. Suppose you declare a
variable as `let k = 3;`. You can increment `k` by 1 like this `++k`
(pre-increment) or like this `k++` (post-increment), but the effect can be
different and subtle. The pre-increment expression `++k` means you first
increment `k` by 1 then return the result, i.e. 4. In contrast, the
post-increment expression `k++` means you return the current value of `k` (i.e.
3), then increment `k` by 1. A similar comment applies to the decrement operator
`--`. In the program below, the values of `a` and `b` are different, even though
we incremented the same variable.

```js
/**
 * Pre- and post-increment.
 *
 * @param {NS} ns The Netscript API.
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

In the script `tabby-facts.js` above, remove the lines `age++;` and `can--;`.
Replace each print statement with an appropriate pre-increment or post-increment
expression, or no replacement at all.

**Exercise 5.** The increment expression `k++` is shorthand for `k = k + 1`. Is
there a similar shorthand for something like `k = k + 3`? You can replace the
expression `k = k + 3` with the shorthand `k += 3`. In general, an expression
such as `k += n` means you first add `k` and `n` together, then assign the
result to `k`. Similarly, the expression `k = k - n` can be replaced with the
shorthand `k -= n`. The expression `k = k * n` can be replaced with `k *= n`.
The expression `k = k / n` can be written more succinctly as `k /= n`. Modify
the script `tabby-facts.js` above to use one or more of the operators discussed
in this exercise.

**Exercise 6.** Refer to
[this page](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)
for details about mathematical calculations you can do in JavaScript. For
example, the function
[`Math.pow()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/pow)
allows you to raise a number to a specified exponent. Instead of the expression
`3**2` to calculate the square of 3, use the expression `Math.pow(3, 2)`. Use
the function `Math.pow()` to calculate the square of 4. Use the function
`Math.pow()` to calculate the _square root_ of 25.

**Exercise 7.** The function
[`Math.floor()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor)
gives you the integer part of a number and ignores the fractional part. For
example, given the number 2.5 the expression `Math.floor(2.5)` would return 2
because 2 is the integer part. Use `Math.floor()` in your solutions to Exercises
1 and 2 above.

**Exercise 8.** The function
[`Math.random()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)
returns a random floating point number less than one, but equal to or greater
than zero. The output of `Math.random()` is not really random _per se_ and
should not be used for cryptographic purposes. If you multiply the random
floating point number by 100 and pass the result to the function `Math.floor()`,
you should obtain a random integer at most 100. Write a program to implement the
above technique for generating a random integer at most 100.
