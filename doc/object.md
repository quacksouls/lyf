# JSON and the Argonauts

This chapter describes
[JavaScript Object Notation (JSON)](https://en.wikipedia.org/wiki/JSON), a way
to organize data. Using JSON, we can organize data into a collection called an
_object_. We will not cover everything about JSON, only a small number of ways
in which JSON can be used to help you model data in your programs.

## Objects and arguments

A person has a full name, age, and preferences (likes and dislikes). You want to
model the profile of a person in your program and have decided to use the latter
attributes. Consider the following early version of your program:

```js
/**
 * Print a profile to the terminal.
 *
 * @param {NS} ns The Netscript API.
 * @param {string} name A full name of someone or a pet.
 * @param {number} age The age of a person or pet.
 * @param {string} like The likes of someone or a pet.
 * @param {string} hate The dislikes of someone or a pet.
 */
function profile(ns, name, age, like, hate) {
    const fname = `Name: ${name}`;
    const howOld = `Age: ${age}`;
    const prefer = `Likes: ${like}`;
    const dislike = `Hates: ${hate}`;
    const pro = [fname, howOld, prefer, dislike].join("\n");
    ns.tprintf(`${pro}`);
}

/**
 * profile.js
 *
 * Output the profiles of Tabby and Sam to the terminal.
 *
 * @param {NS} ns The Netscript API.
 */
export async function main(ns) {
    profile(ns, "Tabby Whiskers", 2, "fish", "broccoli");
    ns.tprintf("\n");
    profile(ns, "Sam McPherson", 27, "sushi", "spinach");
}
```

The script uses the array method
[`join()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)
to insert the newline character `\n` between two adjacent array elements. What
is wrong with the script `profile.js`? Nothing, really, apart from the number of
parameters in the function `profile()`. As defined, it is not always easy to
remember the exact order in which you should pass arguments to the function
`profile()`. If you happen to write

```js
profile(ns, "Tabby Whiskers", 2, "broccoli", "fish");
```

you would mess up the order of Tabby's preferences. The above line of code says
that Tabby likes broccoli and hates fish. Now imagine you have a function that
accepts five or more arguments. Remembering the order of the arguments would
indeed be a challenge. What you want is a way to reduce the number of arguments
without reducing the amount of data passed to the function.

You can use JSON to model Tabby and Sam's profiles as follows:

```js
// Sam's profile as an object.
const sam = {
    name: "Sam McPherson",
    age: 27,
    like: "sushi",
    dislike: "spinach",
};

// Tabby's profile as an object.
const tabby = {
    name: "Tabby Whiskers",
    age: 2,
    like: "fish",
    dislike: "broccoli",
};
```

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

The script `profile.js` can now be written with objects as follows:

```js
/**
 * Print a profile to the terminal.
 *
 * @param {NS} ns The Netscript API.
 * @param {object} obj A profile object as follows:
 * {
 *     name: Full name of person/pet,
 *     age: Age of person/pet,
 *     like: What person/pet likes,
 *     dislike: What person/pet dislikes
 * }
 */
function profile(ns, obj) {
    const name = `Name: ${obj.name}`;
    const age = `Age: ${obj.age}`;
    const like = `Likes: ${obj.like}`;
    const dislike = `Hates: ${obj.dislike}`;
    const pro = [name, age, like, dislike].join("\n");
    ns.tprintf(`${pro}`);
}

/**
 * profile-object.js
 *
 * Output the profiles of Tabby and Sam to the terminal.
 * Represent each profile as an object.
 *
 * @param {NS} ns The Netscript API.
 */
export async function main(ns) {
    // Sam's profile as an object.
    const sam = {
        name: "Sam McPherson",
        age: 27,
        like: "sushi",
        dislike: "spinach",
    };
    // Tabby's profile as an object.
    const tabby = {
        name: "Tabby Whiskers",
        age: 2,
        like: "fish",
        dislike: "broccoli",
    };

    profile(ns, tabby);
    ns.tprintf("\n");
    profile(ns, sam);
}
```

The function `profile()` now takes two arguments: (1) the parameter `ns` for the
Netscript API; and (2) an object representing the profile of a person/pet. You
no longer need to remember the order of parameters that collectively represent
the profile information. In fact, `ns` itself is an object containing all
functions specific to Bitburner. These functions are collectively referred to as
the Netscript API.

### Exercises

> **Exercise 1.** JSON is formally described in the document
> [RFC 8259](https://datatracker.ietf.org/doc/html/rfc8259). Read that document
> for the technical details of JSON. However, you might want to read
> [this document](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON)
> to help you learn how to use JSON.
>
> **Exercise 2.** The RGB colour model uses various shades of red, green, and
> blue to represent a multitude of colours. In computer representation, each
> value in the RGB triplet $(r,g,b)$ is an integer between 0 and 255, inclusive.
> The table below shows various RGB triplets and their common names.

| Colour  | (R,G,B)       |
| ------- | ------------- |
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

> Write a function that accepts a common colour name as listed in the above
> table. The function returns an object representing an RGB triplet. Refer to
> [this page](https://www.rapidtables.com/web/color/RGB_Color.html) for more
> common colour names and their corresponding RGB triplets.
>
> **Exercise 3.** A car can be described using three attributes: make, model,
> and year. Write a function that accepts an object representation of the latter
> three attributes and outputs the attributes to the terminal. For example,
> given the object

```js
{
    make: "Honda",
    model: "Civic",
    year: 2017,
}
```

> the function prints the attributes to the terminal like so:

```sh
Make: Honda
Model: Civic
Year: 2017
```

> **Exercise 4.** The square bracket notation is often used when you iterate
> over the keys (or properties) of an object. Consider the object `sam` defined
> below:

```js
const sam = {
    name: "Sam McPherson",
    age: 27,
    like: "sushi",
    dislike: "spinach",
};
```

> The method
> [`Object.keys()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)
> accepts an object as its argument and returns an array of the keys of the
> given object. If `objectName` is an object passed to the method and `key` is
> an element of the returned array, use the square bracket notation
> `objectName[key]` to access the value corresponding to the given key. Use the
> [`for...of`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)
> statement or the array method
> [`forEach()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
> to iterate over the keys of the object `sam` and print the key/value pairs as
> follows:

```sh
Key: name, value: Sam McPherson
Key: age, value: 27
Key: like, value: sushi
Key: dislike, value: spinach
```

> **Exercise 5.** The method
> [`Object.values()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values)
> takes an object as its argument and returns an array of the values of the
> given object. Unlike the method
> [`Object.keys()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys),
> the method `Object.values()` does not give you the key corresponding to a
> value. Use the method `Object.values()`, together with the
> [`for...of`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)
> statement or the array method
> [`forEach()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach),
> to traverse the values of the object `sam` defined above and print the values
> to the terminal as follows:

```sh
Value: Sam McPherson
Value: 27
Value: sushi
Value: spinach
```

> **Exercise 6.** The method
> [`Object.entries()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries)
> takes an object as argument and returns an array. Each element of the array is
> an array along the format `[key, value]`, where `key` is a key of the given
> object and `value` is the value corresponding to `key`. Using the `for...of`
> statement, you typically traverse the entries of an object as follows:

```js
for (const [key, value] of Object.entries(objectName)) {
    // Insert code to process key/value pair.
}
```

> Notice in the template above that you use array destructuring. To process each
> entry via the array method `forEach()`, you might use arrow function
> expression and structure your code like so:

```js
const processEntry = (entry) => {
    const [key, value] = entry; // Array destructuring.
    // Insert code to process key/value pair.
};
Object.entries(objectName).forEach(processEntry);
```

> Use the method `Object.entries()` to iterate over the key/value pairs of the
> object below and print the key/value to the terminal.

```js
const car = {
    make: "Honda",
    model: "Civic",
    year: 2017,
};
```

> **Exercise 7.** Consider the following pets database:

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

> The database has not been updated since last year. Write a program to update
> the age of each pet.

## Objects and I/O

Objects can be written to files and be read from files. Text files are a common
means of sharing data between different programs. In Bitburner, you use the
function
[`ns.read()`](https://github.com/bitburner-official/bitburner-src/blob/dev/markdown/bitburner.ns.read.md)
to read from a text file. Use the function
[`ns.write()`](https://github.com/bitburner-official/bitburner-src/blob/dev/markdown/bitburner.ns.write.md)
to write to a text file. The script below writes an object to file. The script
then reads the object from file and compares the read object with the original
object.

```js
/**
 * object-io.js
 *
 * Write an object to file.  Read object from file.
 *
 * @param {NS} ns The Netscript API.
 */
export async function main(ns) {
    // Sam's profile as an object.
    const sam = {
        name: "Sam McPherson",
        age: 27,
        like: "sushi",
        dislike: "spinach",
    };

    const file = "sam.txt";
    const writeMode = "w";
    ns.write(file, JSON.stringify(sam), writeMode);
    const samobj = JSON.parse(ns.read(file));

    // Compare the read object with the original object.
    ns.tprintf(`Same name? ${sam.name === samobj.name}`);
    ns.tprintf(`Same age? ${sam.age === samobj.age}`);
    ns.tprintf(`Same like? ${sam.like === samobj.like}`);
    ns.tprintf(`Same dislike? ${sam.dislike === samobj.dislike}`);
}
```

The above script uses the method
[`JSON.stringify()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)
to first convert an object to its string representation, then writes the string
to file. After reading the string representation from file, the script uses the
method
[`JSON.parse()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)
to convert the string representation to an object. As you can see,
`JSON.stringify()` and `ns.write()` can be used together to save an object to
file, whereas `JSON.parse()` and `ns.read()` allow you to read an object from
file.

## Class of its own

An object can also contain a function as one of its values. You declare a
function via an arrow function expression and associate the function with a
unique key. As an example, consider the object `pet` in the script below.

```js
/**
 * Profile of a pet.
 */
const pet = {
    name: "Charlie Chihuahua",
    age: 3,
    like: (food) => {
        switch (food) {
            case "milk bone":
                return true;
            case "citrus":
                return false;
            default:
                return "neutral";
        }
    },
};

/**
 * object-func.js
 *
 * An object having a function as its value.
 *
 * @param {NS} ns The Netscript API.
 */
export async function main(ns) {
    const bone = "milk bone";
    const citrus = "citrus";
    const strawberry = "strawberry";
    ns.tprintf(`Name: ${pet.name}`);
    ns.tprintf(`Age: ${pet.age}`);
    ns.tprintf(`Likes ${bone}? ${pet.like(bone)}`);
    ns.tprintf(`Likes ${citrus}? ${pet.like(citrus)}`);
    ns.tprintf(`Likes ${strawberry}? ${pet.like(strawberry)}`);
}
```

In the script `object-func.js` above, the object `pet` associates the key `like`
to a function that takes one argument. You pass a food name to the function and
it returns whether or not the pet in question likes the food. The object `pet`
encapsulates both data and code.

JavaScript allows you to use the `class` keyword to declare an object that
encapsulates both data and code. An object declared in this manner is called a
[class](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes),
a concept from object-oriented programming. A class can be declared by using the
following template:

```js
class ClassName {
    // Public attributes/properties/fields. Can be modified outside of class.
    dataA;
    dataB;
    ...

    // Private attributes/properties/fields. Cannot be modified outside of class.
    #data1;
    #data2;
    ...

    /**
     * Use this method to create an object from the class.
     */
    constructor(paramA, paramB, ...) {
        // Code to create initial state of the object.
        this.dataA = 1;
        this.dataB = "abc";
        ...
        this.#data1 = "A string";
        this.#data2 = 42;
        ...

        // Other code goes here.
    }

    /**
     * A method for working with the class' data. A function declared within a class is
     * called a method.
     */
    methodA() {
        // Code to process some data.
    }

    // Insert other method declarations here.
}
```

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
template, the keyword `this` allows you to reference a class attribute from
within the class itself, regardless of whether the attribute is declared as
public or private. In fact, the keyword `this` can be used to reference a class'
method as well.

The script `object-func.js` above can be rewritten to use a class as follows.

```js
// pet-class.js

/**
 * A class to represent the profile of a pet.
 */
class Pet {
    name; // Name of pet. Public attribute.
    #age; // Age of pet. Private attribute.

    /**
     * Create an object to represent the profile of a pet.
     *
     * @param {string} name The name of a pet.
     * @param {number} age The pet's age.
     */
    constructor(name, age) {
        this.name = name;
        this.#age = age;
    }

    /**
     * The pet's age. The attribute #age is private, hence we require a
     * method to access the value of the attribute.
     *
     * @returns {number} The pet's age.
     */
    age() {
        return this.#age;
    }

    /**
     * Whether a pet likes a given food.
     *
     * @param {string} food Test this food.
     * @returns {any} Possible values:
     *
     *     (1) true := The pet likes the given food.
     *     (2) false := The pet does not like the given food.
     *     (3) neutral := Neutral about the given food.
     */
    like(food) {
        switch (food) {
            case "milk bone":
                return true;
            case "citrus":
                return false;
            default:
                return "neutral";
        }
    }

    /**
     * A profile of the pet.
     *
     * @returns {string} A pet's profile.
     */
    profile() {
        // Use the keyword "this" to access the class' attributes and methods.
        const name = `Name: ${this.name}`;
        const age = `Age: ${this.#age}`;
        const bone = "milk bone";
        const citrus = "citrus";
        const strawb = "strawberry";
        const likeBone = `Likes ${bone}? ${this.like(bone)}`;
        const likeCitrus = `Likes ${citrus}? ${this.like(citrus)}`;
        const likeStrawb = `Likes ${strawb}? ${this.like(strawb)}`;
        return [name, age, likeBone, likeCitrus, likeStrawb].join("\n");
    }

    /**
     * Set the pet's age. The attribute #age is private, hence cannot be accessed/modified
     * outside the class. Must declare a method to allow us to modify the attribute's value.
     *
     * @param {number} age Age of the pet.
     */
    setAge(age) {
        this.#age = age;
    }
}

/**
 * Using a class to represent the profile of a pet.
 *
 * @param {NS} ns The Netscript API.
 */
export async function main(ns) {
    const name = "";
    const age = 0;
    const pet = new Pet(name, age);
    pet.name = "Charlie Chihuahua";
    pet.setAge(3);
    ns.tprintf(`${pet.profile()}`);
}
```

As shown in the script `pet-class.js` above, use the keyword `new` to create an
object from a class. You can use the keyword `this` to reference a method of the
class from within the class itself, as can be seen in the declaration of the
method `profile()`.

### Exercises

> **Exercise 1.** Read more about classes
> [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
> and
> [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_Classes).
>
> **Exercise 2.** Declare a class called `Rectangle` whose constructor has 2
> parameters: `width` and `height`. The parameters `width` and `height` should
> be the width and height, respectively, of a rectangle. Declare a method called
> `perimeter()` whose purpose is to calculate and return the perimeter of a
> rectangle having the specified width and height. Similarly, declare a method
> called `area()` that returns the area of the rectangle.
>
> **Exercise 3.** Repeat Exercise 2 from the section
> [_Objects and arguments_](#objects-and-arguments), but use a class to
> represent the RGB colour model. Declare a method that takes a common colour
> name and returns the corresponding RGB triplet. Declare a method that does the
> opposite: take an RGB triplet and return the colour name.
>
> **Exercise 4.** A _static method_ can be used without instantiating the class
> that encapsulates the method. To declare a static method, prefix the method
> name with the `static` keyword. For example:

```js
/**
 * A class having a static method.
 */
class Rectangle {
    /**
     * A static method is declared by using the "static" keyword.
     *
     * @param {number} width The width of a rectangle.
     * @param {number} height The height of a rectangle.
     * @returns {number} The area of a rectangle having the given width and height.
     */
    static area(width, height) {
        return width * height;
    }
}

/**
 * Use a static method without instantiating a class.
 *
 * @param {NS} ns The Netscript API.
 */
export async function main(ns) {
    const width = 2;
    const height = 3;
    const area = Rectangle.area(width, height);
    ns.tprintf(`Rectangle`);
    ns.tprintf(`Width: ${width}`);
    ns.tprintf(`Height: ${height}`);
    ns.tprintf(`Area: ${area}`);
}
```

> The above script shows that you can use the static method `area()` of the
> class `Rectangle` without having to create an object of the class. Declare a
> class called `MyMath`. Declare a static method called `pow(base, exponent)`
> that raises the number `base` to the given `exponent`. Declare another static
> method called `add(a, b)` that returns the addition of `a` and `b`.
>
> **Exercise 5.** Refer to the script `pet-class.js` above. In the function
> `main()`, replace the line `pet.setAge(3);` with the line `pet.age = 3;`. Save
> the script and run it again. Why is the printed age still `0` when you have
> explicitly assigned the value `3` to the age attribute?
>
> **Exercise 6.** Repeat the above exercise, but replace the line
> `pet.setAge(3);` with `pet.#age = 3;`. Save the script and run it again. What
> did you get? Why?

[[TOC](../README.md "Table of Contents")]
[[Previous](organize.md "Organize your data")]
[[Next](fp.md "Let's get functional")]

[![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-blue.svg)](http://creativecommons.org/licenses/by-nc-sa/4.0/)
