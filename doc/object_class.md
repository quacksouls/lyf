---
title: Class of its own
---

An object can also contain a function as one of its values. You declare a
function via an arrow function expression and associate the function with a
unique key. As an example, consider the object `pet` in the script below.

:include: file="assets/src/object/object-func.js", line=25:-

<!-- prettier-ignore-start -->
In the script
:script: file="assets/src/object/object-func.js"
above, the object `pet` associates the key `like` to a function that takes one
argument. You pass a food name to the function and it returns whether or not the
pet in question likes the food. The object `pet` encapsulates both data and
code.
<!-- prettier-ignore-end -->

JavaScript allows you to use the keyword [`class`][class] to declare an object
that encapsulates both data and code. An object declared in this manner is
called a [class][classes], a concept from object-oriented programming. A class
can be declared by using the following template:

:include: file="assets/src/object/class-template.js", line=25:-

Replace `ClassName` with the name for your class. The class name should start
with a capital letter. A public attribute (or property or field) of a class is
declared with a variable name (and optionally assigned a default value). A
public attribute can be accessed both within and outside the class. A private
attribute is declared by prefixing a variable with the hash symbol `#`. A
private attribute can only be accessed within the class. To access a private
attribute from outside the class, you must declare a method that returns the
value of the private attribute. The constructor, conveniently called
`constructor`, is automatically called whenever you create an instance of the
class. What is the name of this instance? An object, of course. Use the
following template to create an instance of a class:

```js
const objectName = new ClassName(paramA, paramB, ...);
```

Again, replace `objectName` with a meaningful name for your object and replace
`ClassName` with the name of the class you are instantiating. The arguments
given will be passed to the constructor, assuming you have declared a
constructor that takes the same number of arguments. As shown in the above class
template, the keyword [`this`][this] allows you to reference a class attribute
from within the class itself, regardless of whether the attribute is declared as
public or private. In fact, the keyword `this` can be used to reference a class'
method as well.

<!-- prettier-ignore-start -->
The script
:script: file="assets/src/object/object-func.js"
above can be rewritten to use a class as follows.
<!-- prettier-ignore-end -->

:include: file="assets/src/object/pet-class.js", line=25:-

<!-- prettier-ignore-start -->
As shown in the script
:script: file="assets/src/object/pet-class.js"
above, use the keyword [`new`][new] to create an object from a class. You can
use the keyword `this` to reference a method of the class from within the class
itself, as can be seen in the declaration of the method `profile()`.
<!-- prettier-ignore-end -->

<!--=========================================================================-->

## Exercises

<!-- prettier-ignore-start -->
:exercise:
Read more about classes [here][classes] and [here][usingClasses].
<!-- prettier-ignore-end -->

<!-- prettier-ignore-start -->
:exercise:
Declare a class called `Rectangle` whose constructor has 2 parameters: `width`
and `height`. The parameters `width` and `height` should be the width and
height, respectively, of a rectangle. Declare a method called `perimeter()`
whose purpose is to calculate and return the perimeter of a rectangle having the
specified width and height. Similarly, declare a method called `area()` that
returns the area of the rectangle.
<!-- prettier-ignore-end -->

<!-- prettier-ignore-start -->
:exercise:
Repeat [this exercise](../object_argument/#exRGB) from the section
[Objects and arguments](../object_argument), but use a class to represent the
RGB colour model. Declare a method that takes a common colour name and returns
the corresponding RGB triplet. Declare a method that does the opposite: take an
RGB triplet and return the colour name.
<!-- prettier-ignore-end -->

<!-- prettier-ignore-start -->
:exercise:
A _static method_ can be used without instantiating the class that encapsulates
the method. To declare a static method, prefix the method name with the keyword
[`static`][static]. For example:
<!-- prettier-ignore-end -->

:include: file="assets/src/object/static.js", line=25:-

The above script shows that you can use the static method `area()` of the class
`Rectangle` without having to create an object of the class. Declare a class
called `MyMath`. Declare a static method called `pow(base, exponent)` that
raises the number `base` to the given `exponent`. Declare another static method
called `add(a, b)` that returns the addition of `a` and `b`.

<!-- prettier-ignore-start -->
:exercise:
Refer to the script
:script: file="assets/src/object/pet-class.js"
above. In the function `main()`, replace the line `pet.setAge(3);` with the line
`pet.age = 3;`. Save the script and run it again. Why is the printed age still
`0` when you have explicitly assigned the value `3` to the `age` attribute?
<!-- prettier-ignore-end -->

<!-- prettier-ignore-start -->
:exercise:
Repeat the previous exercise, but replace the line `pet.setAge(3);` with
`pet.#age = 3;`. Save the script and run it again. What did you get? Why?
<!-- prettier-ignore-end -->

<!--=========================================================================-->

<!-- prettier-ignore-start -->
[class]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/class
[classes]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
[new]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new
[static]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static
[this]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
[usingClasses]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_Classes
<!-- prettier-ignore-end -->
