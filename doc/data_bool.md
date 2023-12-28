---
title: Bool-urns
---

> _Roy:_ (Singing) We don't need no education.\
> _Moss:_ Yes you do. You've just used a double negative.\
> --- _The IT Crowd_, season 1, episode 4, 2006

Do you like samurai? Do you like pizza? Do you like cats? If you answer yes to
all three questions, you might like [Samurai Pizza Cats][SamuraiPizzaCats]. Do
you also like banana? Perhaps you might be interested in [Bananya][Bananya].
Questions such as the above often require a yes/no answer. Yes means true, you
prefer something. No means false, you dislike something. Questions or statements
that can be answered with yes/no or true/false are said to have _boolean_
values. The two boolean values in JavaScript are `true` and `false`.

What else can you do with boolean values? A simple operation is to use the
boolean operator `!` (an exclamation mark) to negate a boolean value, thus
resulting in the opposite value. The result of `!true` is `false` because the
opposite of `true` is `false`. As you might have already guessed, the result of
`!false` is `true`.

Given a bunch of boolean values, you can use the JavaScript boolean operators
`||` and `&&` to calculate boolean results. The operator `||` means "or", i.e.
logical disjunction. In everyday English usage, the word "or" means "either this
or that". In computer programming, "or" means "this or that or both". The
following table should help to clarify the meaning of `||` and its effect when
given two boolean values. The table below uses `OR` instead of `||` because
HonKit cannot properly convert `||` when used within a Markdown table.

| `OR`    | `false` | `true` |
| :------ | :------ | :----- |
| `false` | `false` | `true` |
| `true`  | `true`  | `true` |

From the above table, the result of `false || true` is `true`, so is
`true || true`. The one and only time when `||` returns `false` is when both
operands are `false`. Take a moment to use the above table and work through the
output of the following program. Note that in each template literal below, the
result of a boolean expression is first calculated, then substituted into the
appropriate location within the output string.

:include: file="assets/src/data/bool-or.js", line=25:-

The boolean operator `&&` means "and", i.e. logical conjunction. Its result is
`true` provided that both operands are `true`. Its result is `false` for all
other cases. The table below helps to clarify the effect of `&&`.

| `&&`    | `false` | `true`  |
| :------ | :------ | :------ |
| `false` | `false` | `false` |
| `true`  | `false` | `true`  |

Unlike the expression `true || false`, the result of `true && false` is `false`.
The only time when `&&` returns `true` is the expression `true && true`. Again,
take some time to work through the boolean results of the following program.

:include: file="assets/src/data/bool-and.js", line=25:-

<!--=========================================================================-->

## Exercises

<!-- prettier-ignore-start -->
:exercise:
Simplify the statement: "I will not not read anymore."
<!-- prettier-ignore-end -->

<!-- prettier-ignore-start -->
:exercise:
What's the output of the following program? Explain why you got such output.
<!-- prettier-ignore-end -->

:include: file="assets/src/data/typeof-bool.js", line=25:-

<!-- prettier-ignore-start -->
:exercise:
Run the following program. Modify the program so the expression
`likeCat && likeTiger` returns `false`.
<!-- prettier-ignore-end -->

:include: file="assets/src/data/pet.js", line=25:-

<!-- prettier-ignore-start -->
:exercise:
What is the back of your back?
<!-- prettier-ignore-end -->

<!-- prettier-ignore-start -->
:exercise:
Determine the output of the following program.
<!-- prettier-ignore-end -->

:include: file="assets/src/data/negate.js", line=25:-

<!-- prettier-ignore-start -->
:exercise:
Examine the following image. Determine which food Tabby dislikes. Write a
program that uses boolean operators to achieve the same output as in the image.
<!-- prettier-ignore-end -->

<!-- prettier-ignore-start -->
![Food for Tabby](data/food.png "Food for Tabby")
_Food for Tabby_
<!-- prettier-ignore-end -->

<!-- prettier-ignore-start -->
:exercise:
In JavaScript, the number `0` also means `false`. Similarly, the number `1`
means `true`. When using boolean operators on these two numbers, the result is
either `0` or `1`, not `false` or `true`. For example, the result of the
expression `0 || 1` is `1`, which we know means `true`. You can use double
negation to convert `0` or `1` to their corresponding boolean values. The
expression `!!0` now evaluates to `false` and `!!1` evaluates to `true`. In the
program
:script: file="assets/src/data/bool-or.js"
above, replace `false` and `true` with `0` and `1`, respectively. Use double
negation to convert your results to their boolean values. Repeat the exercise
for the program
:script: file="assets/src/data/bool-and.js"
.
<!-- prettier-ignore-end -->

<!-- prettier-ignore-start -->
:exercise:
If the double negation operator `!!` converts an integer to its corresponding
boolean value, how would you do it the other way around? Use the function
[`Number()`][Number] Write a program that uses the function `Number()` to
determine the integer values of `true` and `false`, respectively.
<!-- prettier-ignore-end -->

<!-- prettier-ignore-start -->
:exercise:
You know that `true` and `false` are like `1` and `0`, respectively. In fact,
you can use the arithmetic operators `+`, `-`, `/`, and `*` with boolean values.
What's the output of each statement in the following program? Why do you get
such output? Why would the result of `true / false` be `Infinity`?
<!-- prettier-ignore-end -->

:include: file="assets/src/data/bool-arith.js", line=25:-

<!-- prettier-ignore-start -->
:exercise:
The word "or" in everyday English means, "Either this or that, but not both." In
computer programming, this meaning of "or" is called _exclusive or_, often
abbreviated as XOR. JavaScript does not have a boolean operator for XOR _per
se_. However, you can achieve the same effect by combining `||` with `&&`. The
XOR of two boolean variables `a` and `b` is defined as the expression
<!-- prettier-ignore-end -->

```js
(a || b) && !(a && b);
```

Fortunately, you do not need to use the above expression whenever you want to
calculate the XOR of two boolean values. JavaScript has the [_bitwise_ operator
`^`][xor], which is XOR defined for the binary values `0` and `1`. Write a
program that uses the bitwise XOR operator `^` to achieve the same output as
shown in the image below.

<!-- prettier-ignore-start -->
![Sam's pet](data/pet.png "Sam's pet")
_Sam's pet_
<!-- prettier-ignore-end -->

<!--=========================================================================-->

<!-- prettier-ignore-start -->
[Bananya]: https://en.wikipedia.org/wiki/Bananya
[Number]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
[SamuraiPizzaCats]: https://en.wikipedia.org/wiki/Samurai_Pizza_Cats
[xor]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR
<!-- prettier-ignore-end -->
