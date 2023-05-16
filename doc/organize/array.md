# Line them up

A simple way to structure your data is to line them up one after the other. In
JavaScript, this linear structure is known as an
[_array_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array),
while other programming languages call it a _list_. Think of an array or a list
like a bunch a people waiting in single file. A better analogy for an array is
as a sequence of boxes aligned in a row. Visualize the boxes like so:

```js
+-----+-----+-----+-----+-- ... --+---------+
| a_0 | a_1 | a_2 | a_3 |   ...   | a_{n-1} |
+-----+-----+-----+-----+-- ... --+---------+
```

The boxes are read from left to right. The first box has index 0 and the content
of the box is $$a_0$$, whatever that may be. The element at index 0 is called
the front of the array. The second box has index 1 and content $$a_1$$. And so
on all the way up to the last box, which has index $$n-1$$ and content
$$a_{n-1}$$. The element at index $$n-1$$ is called the end of the array. In
total, there are $$n$$ boxes and the indices of the boxes start from 0.

<!-- ====================================================================== -->

## Array construction

How do you create an array in JavaScript? A simple way is to use square
brackets. The script below creates an array of 3 elements, each of which is a
number.

```js
// bracket-array.js

/**
 * Create an array.
 *
 * @param {NS} ns The Netscript API.
 */
export async function main(ns) {
    const array = [3, 5, 7];
    ns.tprintf(`Element at index 0: ${array[0]}`);
    ns.tprintf(`Element at index 1: ${array[1]}`);
    ns.tprintf(`Element at index 2: ${array[2]}`);
    ns.tprintf(`Element at index 3: ${array[3]}`); // undefined
    ns.tprintf(`Element at index -1: ${array[-1]}`); // undefined
}
```

As shown in the above script, you use the square bracket notation to access
individual elements in an array. For the array `array` created above, the first
element is accessed as `array[0]`, the second element is accessed as `array[1]`,
and so on. The array access `array[3]` returns
[`undefined`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)
because the highest index of the array is 2, not 3. Similarly, the array access
`array[-1]` returns `undefined` as well because the lowest index of the array is
0, not -1.

Array elements can also be strings or boolean values or a mixture of data types.
The script below creates arrays whose elements are of various data types.

```js
/**
 * Arrays with elements of various data types.
 *
 * @param {NS} ns The Netscript API.
 */
export async function main(ns) {
    const colour = ["red", "green", "blue"];
    const bool = [true, false];
    const mix = [2, "b", true];
    ns.tprintf(`Array of strings: ${colour}`);
    ns.tprintf(`Array of booleans: ${bool}`);
    ns.tprintf(`Array with mixed data types: ${mix}`);
}
```

<!-- ====================================================================== -->

## Array insertion

Here are some questions you might be asking about an array:

1. How do I know the number of elements in an array? Use the property
   [`length`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length).
1. How do I check whether an array has a given element? Use the method
   [`includes()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes).
1. How do I insert an element at the front of an array? Use the method
   [`unshift()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift).
1. How do I insert an element at the end of an array? Use the method
   [`push()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push).

The script below uses the above property/methods to query and extend an array:

```js
/**
 * Query and extend an array of numbers.
 *
 * @param {NS} ns The Netscript API.
 */
export async function main(ns) {
    // Initial array.
    const array = [3, 5, 7];
    const a = 2;
    const b = 11;
    ns.tprintf(`Array initially had ${array.length} elements.`);
    ns.tprintf(`Is ${b} in array? ${array.includes(b)}`);

    // Insert element at front of array.
    array.unshift(a);
    ns.tprintf(`Added ${a} to front of array.`);
    ns.tprintf(`Array now has ${array.length} elements.`);

    // Insert element at end of array.
    array.push(b);
    ns.tprintf(`Added ${b} to end of array.`);
    ns.tprintf(`Array now has ${array.length} elements.`);
    ns.tprintf(`Is ${b} in array? ${array.includes(b)}`);
}
```

<!-- ====================================================================== -->

## Delete front and end

Removing elements from the front or end of an array is easy. Removing an element
at an arbitrary position is a bit more involved, but not difficult. Use the
method
[`shift()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift)
to remove the first element of an array. The method returns the removed element.
Similarly, use the method
[`pop()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)
to remove the last element of an array and return the removed element. Refer to
the following script for examples.

```js
/**
 * Remove elements from front and end of an array.
 *
 * @param {NS} ns The Netscript API.
 */
export async function main(ns) {
    const array = [2, 3, 5, 7, 11, 13];

    // Remove element from the front.
    const front = array.shift();
    ns.tprintf(`Removed ${front} from front of array.`);
    ns.tprintf(`Array now has ${array.length} elements.`);

    // Remove element from the end.
    const end = array.pop();
    ns.tprintf(`Removed ${end} from end of array.`);
    ns.tprintf(`Array now has ${array.length} elements.`);
}
```

<!-- ====================================================================== -->

## Delete arbitrary elements

What about deleting an arbitrary element from an array? Two simple ways are:

1. Delete an element at a given index. You do not know which element you want to
   delete, but you know you want to remove an element at a specific index. Use
   the method
   [`splice()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)
   for this situation.
1. Delete a specific element. You want to remove a particular element, but you
   do not know its index. Use the method
   [`filter()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
   for this case.

The script below demonstrates the above two ways to delete arbitrary elements.

```js
/**
 * Remove arbitrary elements from array.
 *
 * @param {NS} ns The Netscript API.
 */
export async function main(ns) {
    let array = [2, 3, 5, 7, 11, 13];

    // Remove element at given index.
    const i = 2; // Delete element at this index.
    const a = array[i];
    const howmany = 1;
    ns.tprintf(`Current array: ${array}`);
    ns.tprintf(`Element at index ${i}: ${a}`);
    array.splice(i, howmany);
    ns.tprintf(`Array after deleting ${a}: ${array}`);

    // Remove a given element.
    const b = 7;
    const notb = (x) => x !== b;
    array = array.filter(notb);
    ns.tprintf(`Array after deleting ${b}: ${array}`);
}
```

In the above script, we used the method
[`splice()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)
to remove an element at a specific index. We used the following version of
`splice()`:

```js
array.splice(index, deleteCount);
```

where `index` is the index of the element we want to delete. The parameter
`deleteCount` tells the method how many elements we want to remove starting from
`index` onward. We want to remove only the element at index `index`, hence we
replaced `deleteCount` with `1` as shown in the script. Unlike `shift()` and
`pop()`, the method `splice()` returns an array containing the deleted
element(s).

We used the method
[`filter()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
to delete an element having a specific value. The method requires a function
that returns either `true` or `false`. The usual name for such a function is
_predicate_. In the above script, our predicate is the arrow function expression
`notb`. It has one parameter and returns `true` if the passed in value is
different from the value of `b`, i.e. `7`. The method `filter()` traverses each
element of an array and passes the element to the predicate. The predicate
checks whether the given element passes a test (or tests) and return `true` or
`false` based upon the test(s). If the predicate returns `true`, then we keep
the element. Otherwise the predicate returns `false` and the element is removed.
The method `filter()` returns a copy of the array where each element passes the
test(s) of the predicate.

<!-- ====================================================================== -->

## Traversal by indices

You can use a `for` (or `while`) loop together with array indices to traverse
each element of an array. This technique requires you to create a variable to
keep track of the index of the current element. After you are done processing
the element, increment the index to process the next element. The script below
uses array index to process each element of an array.

```js
// index-walk.js

/**
 * Array traversal by indices.
 *
 * @param {NS} ns The Netscript API.
 */
export async function main(ns) {
    const colour = ["red", "orange", "yellow", "green", "blue"];
    for (let i = 0; i < colour.length; i++) {
        ns.tprintf(`Index: ${i}, colour: ${colour[i]}`);
    }
}
```

<!-- ====================================================================== -->

## Traversal by `for...of`

The
[`for...of`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)
statement simplifies the process of walking over the elements of an array. This
technique is simpler than the previous insofar as it does not require you to
explicitly keep track of an index. You use the `for...of` statement as shown
below. In each iteration of the loop, the variable `elem` has the value of the
current array element.

```js
for (const elem of array) {
    // Insert code to process each element.
}
```

Using the `for...of` statement, you can simplify the script `index-walk.js` as
follows:

```js
/**
 * Array traversal by for...of statement.
 *
 * @param {NS} ns The Netscript API.
 */
export async function main(ns) {
    const colour = ["red", "orange", "yellow", "green", "blue"];
    for (const c of colour) {
        ns.tprintf(`Colour: ${c}`);
    }
}
```

You no longer need to maintain an index as the `for...of` statement does that
for you automatically.

<!-- ====================================================================== -->

## Traversal by `forEach()`

The method
[`forEach()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
is more versatile than either of the above two techniques for array traversal.
You pass in a function to the method. The function should take one parameter. In
each iteration, the method `forEach()` passes the current array element to the
function, which would then process the given element. You can use the method
`forEach()` to process each array element as follows:

```js
/**
 * Array traversal by the method forEach().
 *
 * @param {NS} ns The Netscript API.
 */
export async function main(ns) {
    const colour = ["red", "orange", "yellow", "green", "blue"];
    const printColour = (c) => ns.tprintf(`Colour: ${c}`);
    const hasN = (c) => {
        const allLower = c.toLowerCase();
        if (allLower.includes("n")) {
            ns.tprintf(`Colour: ${c}`);
        }
    };
    colour.forEach(printColour);
    ns.tprintf('\nColour names that have "N".');
    colour.forEach(hasN);
}
```

<!-- ====================================================================== -->

## Exercises

> **Exercise 1.** Read more about arrays
> [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array).
>
> **Exercise 2.** You can also create an array by using the
> [`Array()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Array)
> constructor. Use the pattern
>
> ```js
> const array = Array(elem0, elem1, ..., elemN);
> ```
>
> to create an array having the specified elements. The above pattern expects at
> least 2 arguments. Use the `Array()` constructor to rewrite the script
> `bracket-array.js` from the section
> [_Array construction_](../organize/array.md#array-construction). What happens
> if you provide exactly 1 argument to the `Array()` constructor?
>
> **Exercise 3.** The method
> [`splice()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)
> can be used to insert a value at an arbitrary location in an array. Suppose
> you have an array `array` and you want to insert the value `v` at index `k`.
> Use the method `splice()` as follows:
>
> ```js
> array.splice(k, 0, v);
> ```
>
> to insert `v` at index `k`. This effectively shifts all elements from index
> `k` onward up by 1 position, making room for `v` to be at index `k`. Use the
> method `splice()` to create the array `[2, "b", true]`.
>
> **Exercise 4.** The square bracket notation is also handy for replacing an
> element at a specified index. Suppose you have an array called `array` and you
> want to replace the element at index `k` with a new value `v`. The square
> bracket notation allows you to use the pattern
>
> ```js
> array[k] = v;
> ```
>
> so that `array[k]` now has value `v`. Given the array
>
> ```js
> const array = ["A", "2", "C", "D"];
> ```
>
> use the square bracket notation to replace the element `"2"` with `"B"`.
> Repeat the exercise, but this time use the method
> [`splice()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice).
>
> **Exercise 5.** You have the array `const array = ["a", "b", "c", 1, 2, 3];`.
> Use the method `splice()` to delete all numbers from the array. Repeat the
> exercise, but use the method
> [`slice()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice).
>
> **Exercise 6.** Rewrite the script `index-walk.js` from the section
> [_Traversal by indices_](#traversal-by-indices) to use a `while` loop to
> traverse the elements of an array.
>
> **Exercise 7.** You have the array `const array = [2, 4, 6, 8, 10];`. Use each
> of the following techniques to sum all elements of the array. Each technique
> should produce the same sum.
>
> 1. `for` statement.
> 1. `while` statement.
> 1. `for...of` statement.
> 1. The method `forEach()`.
>
> **Exercise 8.** Consider the array:
>
> ```js
> const array = [1, 2, 1, 2, 3, 4, 5, 6, 4, 7, 8, 9, 3];
> ```
>
> Write a function to help you remove all duplicate elements from the array. You
> might find the methods
> [`slice()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)
> and
> [`findLastIndex()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findLastIndex)
> useful.
>
> **Exercise 9.** You have a small array such as
>
> ```js
> const profile = ["Sam McPherson", 27, "sushi"];
> ```
>
> Instead of using indices to access each element of the array, you can use
> [_array destructuring_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
> to access all or some elements. You know the above array has 3 elements.
> Reading from left to right, the elements can be described as a name, an age
> value, and a food preference. You can destructure the above array and print
> the elements as follows:
>
> ```js
> const [name, age, like] = profile;
> ns.tprintf(`Name: ${name}\nAge: ${age}\nLike: ${like}`);
> ```
>
> Use array destructuring to access the elements of the following arrays and
> print elements to the terminal:
>
> ```js
> const profile = ["Charlotte Chihuahua", 3, "milk bone"];
> const fruit = ["apple", "red", "round"];
> const car = ["Honda", "Civic", 2017];
> ```
>
> **Exercise 10.** You want to add each element of the array `[1, 2, 3, 4, 5]`
> to the element at the corresponding index in the array `[6, 7, 8, 9, 10]`,
> producing a new array. That is, elements at index `0` in both arrays are added
> together, elements at index `1` in both arrays are summed, and so on. Use the
> array method `forEach()` to add elements at corresponding indices in the above
> two arrays.
