# Objects and arguments

A person has a full name, age, and preferences (likes and dislikes). You want to
model the profile of a person in your program and have decided to use the latter
attributes. Consider the following early version of your program:

[import](code/profile.js)

The script uses the array method
[`join()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)
to insert the newline character `\n` between two adjacent array elements. What
is wrong with the script [`profile.js`](code/profile.js)? Nothing, really, apart
from the number of parameters in the function `profile()`. As defined, it is not
always easy to remember the exact order in which you should pass arguments to
the function `profile()`. If you happen to write

```js
profile(ns, "Tabby Whiskers", 2, "broccoli", "fish");
```

you would mess up the order of Tabby's preferences. The above line of code says
that Tabby likes broccoli and hates fish. Now imagine you have a function that
accepts five or more arguments. Remembering the order of the arguments would
indeed be a challenge. What you want is a way to reduce the number of arguments
without reducing the amount of data passed to the function.

You can use JSON to model Tabby and Sam's profiles as follows:

[import](code/profile-obj.js)

Each object above is like a map. The name `sam` is like the name you assign a
map. Each of the attributes (or properties) `name`, `age`, `like`, and `dislike`
can be understood as a key. The corresponding values are, well, values
associated with keys. To retrieve the value associated with a property, use the
dot notation:

```js
objectName.propertyName;
```

Alternatively, use the square bracket notation. For example, you retrieve Sam's
full name like so:

```js
ns.tprintf(`${sam.name}`); // dot notation
ns.tprintf(`${sam["name"]}`); // square bracket notation
```

The dot notation is often used when you know the exact property name of an
object. For instance, in the object `sam` you know ahead of time it has the
property `name` and this knowledge allows you to use the dot notation like so
`sam.name`. The square bracket notation is often used when you do not know ahead
of time the exact name of an object's property. You might find yourself using
the square bracket notation when you iterate over the properties of an object.

The script [`profile.js`](code/profile.js) can now be written with objects as
follows:

[import](code/profile-object.js)

The function `profile()` now takes two arguments: (1) the parameter `ns` for the
Netscript API; and (2) an object representing the profile of a person/pet. You
no longer need to remember the order of parameters that collectively represent
the profile information. In fact, `ns` itself is an object containing all
functions specific to Bitburner. These functions are collectively referred to as
the
[Netscript API](https://github.com/bitburner-official/bitburner-src/blob/stable/markdown/bitburner.ns.md).

<!-- ====================================================================== -->

## Exercises

<!-- prettier-ignore -->
{% exercise %}{% endexercise %}
JSON is formally described in the document
[RFC 8259](https://datatracker.ietf.org/doc/html/rfc8259). Read that document
for the technical details of JSON. However, you might want to read
[this document](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON)
to help you learn how to use JSON.

<!-- prettier-ignore -->
{% exercise label="rgb" %}{% endexercise %}
The RGB colour model uses various shades of red, green, and blue to represent a
multitude of colours. In computer representation, each value in the RGB triplet
$$(r,g,b)$$ is an integer between 0 and 255, inclusive. The table below shows
various RGB triplets and their common names.

| Colour  | (R,G,B)       |
| :------ | :------------ |
| Black   | (0,0,0)       |
| Blue    | (0,0,255)     |
| Cyan    | (0,255,255)   |
| Green   | (0,128,0)     |
| Grey    | (128,128,128) |
| Indigo  | (75,0,130)    |
| Lime    | (0,255,0)     |
| Magenta | (255,0,255)   |
| Orange  | (255,165,0)   |
| Red     | (255,0,0)     |
| Violet  | (238,130,238) |
| White   | (255,255,255) |
| Yellow  | (255,255,0)   |

Write a function that accepts a common colour name as listed in the above table.
The function returns an object representing an RGB triplet. Refer to
[this page](https://www.rapidtables.com/web/color/RGB_Color.html) for more
common colour names and their corresponding RGB triplets.

<!-- prettier-ignore -->
{% exercise %}{% endexercise %}
A car can be described using three attributes: make, model, and year. Write a
function that accepts an object representation of the latter three attributes
and outputs the attributes to the terminal. For example, given the object

```js
{
    make: "Honda",
    model: "Civic",
    year: 2017,
}
```

the function prints the attributes to the terminal like so:

```sh
Make: Honda
Model: Civic
Year: 2017
```

<!-- prettier-ignore -->
{% exercise %}{% endexercise %}
The square bracket notation is often used when you iterate over the keys (or
properties) of an object. Consider the object `sam` defined below:

```js
const sam = {
    name: "Sam McPherson",
    age: 27,
    like: "sushi",
    dislike: "spinach",
};
```

The method
[`Object.keys()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)
accepts an object as its argument and returns an array of the keys of the given
object. If `objectName` is an object passed to the method and `key` is an
element of the returned array, use the square bracket notation `objectName[key]`
to access the value corresponding to the given key. Use the
[`for...of`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)
statement or the array method
[`forEach()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
to iterate over the keys of the object `sam` and print the key/value pairs as
follows:

```sh
Key: name, value: Sam McPherson
Key: age, value: 27
Key: like, value: sushi
Key: dislike, value: spinach
```

<!-- prettier-ignore -->
{% exercise %}{% endexercise %}
The method
[`Object.values()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values)
takes an object as its argument and returns an array of the values of the given
object. Unlike the method
[`Object.keys()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys),
the method `Object.values()` does not give you the key corresponding to a value.
Use the method `Object.values()`, together with the
[`for...of`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)
statement or the array method
[`forEach()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach),
to traverse the values of the object `sam` defined above and print the values to
the terminal as follows:

```sh
Value: Sam McPherson
Value: 27
Value: sushi
Value: spinach
```

<!-- prettier-ignore -->
{% exercise %}{% endexercise %}
The method
[`Object.entries()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries)
takes an object as argument and returns an array. Each element of the array is
an array along the format `[key, value]`, where `key` is a key of the given
object and `value` is the value corresponding to `key`. Using the `for...of`
statement, you typically traverse the entries of an object as follows:

```js
for (const [key, value] of Object.entries(objectName)) {
    // Insert code to process key/value pair.
}
```

Notice in the template above that you use array destructuring. To process each
entry via the array method `forEach()`, you might use arrow function expression
and structure your code like so:

```js
const processEntry = (entry) ={
    const [key, value] = entry; // Array destructuring.
    // Insert code to process key/value pair.
};
Object.entries(objectName).forEach(processEntry);
```

Use the method `Object.entries()` to iterate over the key/value pairs of the
object below and print the key/value to the terminal.

```js
const car = {
    make: "Honda",
    model: "Civic",
    year: 2017,
};
```

<!-- prettier-ignore -->
{% exercise %}{% endexercise %}
Consider the following pets database:

```js
const db = [
    { name: "Anonymouse", age: 1 },
    { name: "Chirp O'Tweet", age: 1 },
    { name: "Garry Longtongue", age: 1 },
    { name: "Goldie Horn", age: 1 },
    { name: "Hamsuke Hamton", age: 1 },
    { name: "Harry Speedbump", age: 1 },
    { name: "Robbie Hopster", age: 1 },
    { name: "Tabby Whiskers", age: 3 },
    { name: "Woofy McBark", age: 2 },
];
```

The database has not been updated since last year. Write a program to update the
age of each pet.
