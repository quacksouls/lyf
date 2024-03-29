---
title: reduce
math: true
---

The basic idea of the array method [`reduce()`][reduce] is to traverse an array,
perform an operation on each element, and return a result based on the array
elements. That is, the method reduces the elements of an array to some result.
Let's explore what `reduce()` can do by implementing a function that sums all
numbers in an array:

:include: file="assets/src/fp/sum-for.js", line=25:-

Initially, the sum is 0. As we walk through each number in the array, the
variable `sum` adds to itself the current element of the array, thus
accumulating the sum as we iterate over each element. We have three numbers at
any given time:

1. _Initial value._ The value we start with prior to commencing the summation.
   Before summing, our sum is 0. Thus 0 is the initial value.
1. _Current value._ The value of the current array element we are considering.
   We step through each array element in order. At any time, we are at an index
   $i$ of the array. The current value is therefore the value of the element at
   index $i$.
1. _Accumulator._ The cumulative sum so far. If we are at index $i$ of the
   array, the accumulator at index $i$ is the sum of all array elements from
   index 0 to index $i$.

The method `reduce()` can be understood in terms of the above three numbers, as
shown by the template below:

```js
reduce((accumulator, currentValue) => {
    // Insert code here.
}, initialValue);
```

<!-- prettier-ignore-start -->
In the above version of `reduce()`, the method has two parameters. First, it
requires a function that accepts two arguments: the accumulator and the current
value. The function does whatever it needs to and returns the result of
operating on the accumulator and current value. The returned value is the
accumulator for the next element in the array. The second parameter of
`reduce()` is the initial value. We know the initial value prior to summation
is 0. At any instance during the summation, the new cumulative sum is obtained
by adding the current value to the accumulator. The script
:script: file="assets/src/fp/sum-for.js"
can now be rewritten as follows:
<!-- prettier-ignore-end -->

:include: file="assets/src/fp/sum-reduce.js", line=25:-

<!-- prettier-ignore-start -->
We only save 1 line of code. Not great, but the script
:script: file="assets/src/fp/sum-reduce.js"
expresses our intention of reducing the numbers of an array to their sum.
<!-- prettier-ignore-end -->

Does the array method `reduce()` work with objects? Of course. Simply provide an
array of objects. Note that the value of `currentValue` is the current object we
are considering. To perform an operation on the object, we need to take the
value of the property we care about. By way of example, consider the next
script:

:include: file="assets/src/fp/pet-age.js", line=25:-

The function `addAge()` is declared with two parameters: (1) an accumulator,
assumed to be a number; and (2) an object. As we are only interested in the age
of a pet, we reference the `age` property of each pet object.

<!--=========================================================================-->

## Exercises

<!-- prettier-ignore-start -->
:exercise:
Read more about the array method [`reduce()` here][reduce].
<!-- prettier-ignore-end -->

<!-- prettier-ignore-start -->
:exercise:
The initial value as given to `reduce()` is optional. If the initial value is
omitted, the accumulator is initialized to the first element in the array.
Processing then starts from the second element onward. Omitting the initial
value assumes that the array has at least 1 element. Modify the script
:script: file="assets/src/fp/sum-reduce.js"
to not explicitly use an initial value.
<!-- prettier-ignore-end -->

<!-- prettier-ignore-start -->
:exercise:
The average of a bunch of numbers is defined as the sum of those numbers divided
by how many numbers there are. Use a loop to calculate the average of the
numbers in this array:
<!-- prettier-ignore-end -->

```js
const array = [2, 3, 5, 7, 11, 13, 17, 19];
```

Repeat the exercise, but use the array method `reduce()`.

<!-- prettier-ignore-start -->
:exercise:
A class has 10 students, whose grades for a particular assignment are as given:
<!-- prettier-ignore-end -->

:include: file="assets/src/fp/student-db.js", line=25:-

How many students have grades above 80? Determine the average grade of the class
for the particular assignment.

<!-- prettier-ignore-start -->
:exercise:
The accumulator in `reduce()` is not necessarily a number. The accumulator can
be an array, a map, or a set. Use `reduce()` to raise each number in the
following array to the power of 2.
<!-- prettier-ignore-end -->

```js
const array = [1, 2, 3, 4, 5];
```

<!-- prettier-ignore-start -->
:exercise:
Refer to the student database from the script
:script: file="assets/src/fp/student-db.js"
. Choose students whose grades are above 90. Do not use [`filter()`][filter],
but instead use `reduce()`.
<!-- prettier-ignore-end -->

<!--=========================================================================-->

<!-- prettier-ignore-start -->
[filter]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
[reduce]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
<!-- prettier-ignore-end -->
