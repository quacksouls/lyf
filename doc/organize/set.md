# No duplicates

JavaScript allows you to create an array that can hold duplicate elements. The
following array is perfectly OK:

```js
const array = [1, 2, 1, 2, 3];
```

In some cases, you do not want duplicate elements in your array. Instead of
searching the array to remove duplicate elements, a simpler solution is to use a
[_set_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set).
A set differs from an array in one fundamental aspect. Each element of a set
must be unique, whereas an array can have duplicate elements. A set is ideal for
organizing data that should be unique, e.g. ID numbers.

<!-- ====================================================================== -->

## Set construction

Use the
[`new Set()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/Set)
constructor to create a set, as per the following template:

```js
const set = new Set([elem1, elem2, ..., elemN]);
```

Pass in an array to the constructor and you should have a set whose elements are
the elements of the array. Any duplicate elements from the array would be
removed from the set. The set constructor automatically ensures the uniqueness
of each element.

The following script creates a set by using an array.

```js
// set-create.js

/**
 * Create a set.
 *
 * @param {NS} ns The Netscript API.
 */
export async function main(ns) {
    const array = [3, 3, 5, 7, 7];
    const set = new Set(array);
    const setElem = [...set]; // spread syntax
    ns.tprintf(`Original array: ${array}`);
    ns.tprintf(`Set elements: ${setElem}`);
    ns.tprintf(`How many elements? ${set.size}`);
    ns.tprintf(`Is 5 in set? ${set.has(5)}`);
}
```

Note that the array passed in to the set constructor has duplicate elements. The
set constructor automatically removes duplicate elements and creates a set whose
elements are unique. Pay special attention to the `...` notation. This is known
as the
[_spread syntax_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax).
The spread syntax allows you to expand (or get) all elements of a set. In the
above example, we used the spread syntax to get all elements of a set and
inserted those elements in an array. To query the number of elements a set has,
use the property
[`size`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/size).
You use the method
[`has()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/has)
to query whether a set has a particular element.

<!-- ====================================================================== -->

## Set insertion

The method
[`add()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/add)
allows you to insert elements into a set. You might know ahead of time all or
some of the elements of a set, in which case you should collect those elements
into an array and use the set constructor to create a set having those elements.
However, it is also possible that you do not know which other elements a set
might have. The method `add()` allows you to insert new elements as you need
them. Refer to the following script for how to use the method:

```js
// set-add.js

/**
 * Insert elements into a set.
 *
 * @param {NS} ns The Netscript API.
 */
export async function main(ns) {
    const set = new Set();
    set.add("one");
    set.add(2).add("B").add(false); // Chaining the method add().
    const setElem = [...set]; // spread syntax
    ns.tprintf(`Set elements: ${setElem}`);
}
```

Note two points. First, the elements of a set can be a mixture of data types.
One element can be a string, another element a number, and a third can be a
boolean. Second, you can chain multiple calls of the method `add()`.

<!-- ====================================================================== -->

## Set deletion

You have two options:

1. Delete an individual element from a set. Use the method
   [`delete()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/delete).
1. Delete all elements from a set. Use the method
   [`clear()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/clear).

The example below uses both techniques to delete elements from a set.

```js
// set-delete.js

/**
 * Remove elements of a set.
 *
 * @param {NS} ns The Netscript API.
 */
export async function main(ns) {
    const set = new Set([2, 3, 5, 7]);
    ns.tprintf(`Original set: ${[...set]}`);
    set.delete(3);
    ns.tprintf(`After deleting 3: ${[...set]}`);
    set.clear();
    ns.tprintf(`Remove all elements, size of set is ${set.size}`);
}
```

<!-- ====================================================================== -->

## Set traversal

Like arrays, you can use the
[`for...of`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)
statement and the method
[`forEach()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/forEach)
to traverse each element of a set. The `for...of` statement follows the format:

```js
for (const elem of set) {
    // Insert code to process each set element.
}
```

Pass a function to the method `forEach()`. The function should accept one
argument, i.e. a set element, and does whatever it needs to in order to process
the given element. The script below demonstrates both techniques for walking
over each element of a set.

```js
/**
 * Traverse each element of a set.
 *
 * @param {NS} ns The Netscript API.
 */
export async function main(ns) {
    // Set traversal by for...of statement.
    ns.tprintf("Traverse using for...of statement.");
    const set = new Set([2, 3, 5, 7]);
    for (const e of set) {
        ns.tprintf(`${e}`);
    }

    // Set traversal by method forEach().
    ns.tprintf("\nTraverse using the method forEach().");
    const addOne = (x) => {
        const y = x + 1;
        ns.tprintf(`${x} + 1 = ${y}`);
    };
    set.forEach(addOne);
}
```

<!-- ====================================================================== -->

## Exercises

**Exercise 1.** Read more about sets
[here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set#instance_methods).

**Exercise 2.** Rewrite the scripts `set-create.js` and `set-add.js` by using
each of the following loops:

1. `for` statement.
1. `for...of` statement.
1. The array method `forEach()`.

**Exercise 3.** Repeat Exercise 8 from the section [_Line them up_](array.md),
but use a set.

**Exercise 4.** Write a function that returns a random digit from 0 to 9,
inclusive. How many times do you need to call the function in order to obtain
all digits from 0 to 9?

**Exercise 5.** The _union_ of two sets $$A$$ and $$B$$, written as
$$A \cup B$$, is a set that has all elements from $$A$$ and $$B$$. Write a
function to perform set union.

**Exercise 6.** The _intersection_ of two sets $$A$$ and $$B$$, written as
$$A \cap B$$, is a set that has all elements belonging to both $$A$$ and $$B$$.
Write a function to determine the intersection of two sets.

**Exercise 7.** The _difference_ of two sets $$A$$ and $$B$$, written as
$$A \\;\backslash\\; B$$ or $$A - B$$, is a set consisting of all elements of
$$A$$ that are not in $$B$$. Write a function to perform set difference.

**Exercise 8.** The _symmetric difference_ of two sets $$A$$ and $$B$$ is a set
consisting of elements that belong to exactly one of $$A$$ or $$B$$, not both.
Using one or more functions from the above exercises, write a function to
implement the symmetric difference of two sets.

**Exercise 9.** The _Cartesian product_ of two sets $$A$$ and $$B$$, denoted as
$$A \times B$$, is a set consisting of all possible ordered pairs $$(a,\\, b)$$
where $$a \in A$$ and $$b \in B$$. Write a function to implement the Cartesian
product of two sets.

**Exercise 10.** The
[_Jaccard index_](https://en.wikipedia.org/wiki/Jaccard_index) measures the
similarity between two sets. Given two sets $$A$$ and $$B$$, the Jaccard index
$$J(A,\\, B)$$ of the sets is defined as

$$
J(A,\, B)
=
\displaystyle{
   \frac{
       |A \cap B|
   }{
       |A \cup B|
   }
}
$$

where $$|X|$$ counts the number of elements in the set $$X$$. The higher is the
value of $$J(A,\\, B)$$ the more similar are the sets. Write a function that
implements the Jaccard index. Use your function to determine the similarity
between the word night, represented as the bigram array
`["ni", "ig", "gh", "ht"]`, and the word knight as represented by the bigram
array `["kn", "ni", "ig", "gh", "ht"]`.
