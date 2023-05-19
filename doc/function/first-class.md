# First-class function

Functions in JavaScript are
[_first-class functions_](https://developer.mozilla.org/en-US/docs/Glossary/First-class_Function).
This means that JavaScript allows you to do the following with functions:

<!-- prettier-ignore -->
- Assign a function to a variable.
- Pass a function as an argument to another function.
- Return a function as a value from another function.

You learnt from the section [_Bow and arrow_](arrow.md) that a function can be
assigned to a variable. Simply create a function expression or an arrow function
expression. What about the other features of first-class functions?

<!-- ====================================================================== -->

## Function as argument

How do you pass a function as an argument to another function? The same as how
you pass a variable as an argument to a function. You pass the function name, or
the variable to which you assigned the function expression, to another function.
It is the other function's job to invoke or call the passed in function. As an
example, consider the script [`tabby-diet.js`](code/tabby-diet.js) below.

[import](code/tabby-diet.js)

The function `main()` declares various arrow function expressions and assigns
each of them to a variable. We also declare a function called `diet()`, outside
of the function `main()`. The function `diet()` takes 2 parameters. The
parameter `func` should be a function name or a variable that has been assigned
a function expression. The parameter `food` would be used as a parameter of
`func` when we invoke the function. In fact, the purpose of `diet()` is to
invoke the function `func` and pass `food` as a parameter to `func`.

Here's another example. You want a function `funcA()` that takes another
function `funcB()` as a parameter. The function `funcA()` takes one or multiple
other parameters that are to be passed to `funcB()`. The purpose of `funcA()` is
to loop over the given parameters, except for the parameter `funcB`, and pass
each parameter to `funcB()`. The job of `funcB()` is to test the parameter given
to it, returning `true` if the test passes and `false` otherwise. As a concrete
example, consider the following program.

[import](code/character.js)

The function `keep()` takes a function `func()` as a parameter and a string
`str`. The function `func()` takes a string of one character. The job of
`keep()` is to iterate over each character of the string `str` and pass each
character to `func()`. If `func()` returns true for a given character, then
`keep()` retains the particular character, otherwise `keep()` drops the
character. Finally, `keep()` returns all characters of `str` that passes the
test implemented in `func()`.

<!-- ====================================================================== -->

## Function as return value

To return a function from another function, simply declare a function `funcB()`
within another function `funcA()` and return `funcB()` as the output of
`funcA()`. This sounds more complicated than it should be. An example should
help to clarify how to return a function.

[import](code/multiply.js)

In the above program, the function `multiply()` returns another function that
has one parameter, i.e. `b`. The purpose of the returned function is to multiply
each value of `b` by the value of `a`. In the function `main()`, we invoke
`multiply(2)` to create a function that multiplies each number by 2, hence a
doubling function. We also invoke `multiply(3)` to obtain a function that
multiplies each number by 3, thus returning a tripling function.

The mathematics example above is too boring? Let's consider the formatting of
currencies. To format a currency, you output the currency symbol followed by the
currency value. For example, in the formatted currency `$1.61`, the currency
symbol is `$` (the symbol for US dollars) and the currency value is `1.61`. The
formatted currency `$1.61` is read as, "One dollar and 61 cents in US currency."
We can write a function to format various types of currencies. However, we can
generalize the formatting function to format other types of numbers, not just
currencies. Other kinds of numbers have a prefixed symbol. A positive number can
be written as `+5.210` and a negative number can be written as `-0.42`.

<!-- The plugin gitbook-plugin-include-codeblock cannot properly handle the -->
<!-- dollar sign in the script format.js. -->

The script [`format.js`](code/format.js) declares a function to format numbers.
Within the function `format()`, we declare another function (the inner function)
that takes a number as its parameter. The inner function prefixes the given
number with the symbol passed to `format()`. This allows us to format various
types of numbers, not just currencies. In the function `main()`, we use
`format()` to create various functions to format various types of currencies.
Furthermore, `format()` is also used to create functions that can format
positive and negative numbers.

<!-- ====================================================================== -->

## Exercises

**Exercise 1.** Tabby is neutral about various foods, including apples. In the
script [`tabby-diet.js`](code/tabby-diet.js), define a function that outputs a
food about which Tabby is neutral. Use the function `diet()` to test your newly
declared function.

**Exercise 2.** Refer to the script [`character.js`](code/character.js). Define
a function that returns `true` if the character passed to it is a consonant and
returns `false` otherwise. Pass your function to the function `keep()` and test
it with the strings `strA` and `strB`.

**Exercise 3.** Declare a function called `map()` that takes 2 parameters: a
function `func()` and a string `str`. The purpose of `map()` is to iterate over
each character of `str` and pass a character to `func()`. The function `func()`
takes the character, processes it, and returns a (possibly new) character.

1. Declare a function called `reverseCase()` that reverses the case of a given
   character. If the character is uppercase, the function returns its
   corresponding lowercase and vice versa. Test `map()` with the function
   `reverseCase()` and the string `"Saturday is caturday."`.
1. Declare another function called `xOut()` that takes a character. If the
   character is a vowel, the function returns `"X"`, otherwise the function
   returns the passed in character. Test `map()` with `xOut()` and the string
   `"Everyday is caturday."`.

**Exercise 4.** In the script [`multiply.js`](code/multiply.js), rewrite the
function `multiply()` as an arrow function expression. Similarly, in the script
[`format.js`](code/format.js) rewrite the function `format()` as an arrow
function expression.

**Exercise 5.** The idea presented in the section
[_Function as return value_](first-class.md#function-as-return-value) is known
as _partial application_, which you can
[read more about here](https://www.davidbcalhoun.com/2020/javascript-bind-partial-application-and-currying/).
A related concept is _currying_, which is similar to partial application but
should not be confused with the latter concept. Read more about
[currying here](https://github.com/getify/Functional-Light-JS/blob/master/manuscript/ch3.md).

**Exercise 6.** A _higher-order function_ is a function that can take another
function as a parameter or return a function as a return value. Functions in
JavaScript are also higher-order functions. Read more about higher-order
functions [here](https://eloquentjavascript.net/05_higher_order.html) and
[here](https://jrsinclair.com/articles/2019/what-is-a-higher-order-function-and-why-should-anyone-care/).

**Exercise 7.** Declare a function `personTitle()` that accepts a person's
gender and returns a function. The returned function accepts a person's name and
addresses the person based on the provided gender. If the gender is unknown,
then address the person using the provided name only.

**Exercise 8.** You are writing a test script to help you understand how to
design a database management system for a local university. Two degrees offered
at the university are computer science and history. The computer science degree
has various required courses, two of which are "Introduction to Programming" and
"Algorithms and Data Structures". The average scores of the latter courses from
last year are 80 and 85, respectively. The history degree also has a number of
mandatory courses, including "Ancient History" and "Twentieth Century History".
The average scores of the latter courses from last year are 90 and 95,
respectively. Write a function `uniDegree()` that accepts the name of a
university degree and returns a function, which in turn takes the name of a
course and returns last year's average score of the course.

**Exercise 9.** Write a function called `loop()` to implement your own version
of the [`for` statement](../decide/loop.md#for). The function takes 4
parameters: `init`, `condition`, `update`, and `body`. The initial value of the
loop should be assigned to `init`. The remaining 3 parameters are functions. The
function `condition()` tests the loop condition. If the loop condition is
`true`, then carry on with the next iteration of the loop. Otherwise exit the
loop. The function `update()` is meant to perform any necessary updating, e.g.
update the variable that holds the initial value. The function `body()`
implements the body of the loop. Invoke your function like so
`loop(init, condition, update, body);`. Use your loop function to:

1. Print all integers between 1 and 100, inclusive.
1. Print all integers between 1 and 100, inclusive, that are multiples of 3.
1. Print all vowels in a string and the position in the string where each vowel
   is found.

**Exercise 10.** Write a function `some()` that accepts 2 parameters: `func` and
`str`. The function `some()` returns `true` if at least one character in the
string `str` satisfies the test implemented in the function `func()`. The
function `some()` returns `false` if `func()` returns `false` for each character
in `str`.

1. Use the function `some()` to determine whether a string has vowels. Use these
   test strings: `"The quick brown fox jumps over the lazy dog"` and
   `"wyrm rhythm myrrh"`.
1. Use the function `some()` to check whether a string has whitespaces. Use the
   above test strings as well as the string
   `"supercalifragilisticexpialidocious"`.
