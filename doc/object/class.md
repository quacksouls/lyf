# Class of its own

An object can also contain a function as one of its values. You declare a
function via an arrow function expression and associate the function with a
unique key. As an example, consider the object `pet` in the script below.

```js
// object-func.js

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

<!-- ====================================================================== -->

## Exercises

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
> [_Objects and arguments_](argument.md), but use a class to represent the RGB
> colour model. Declare a method that takes a common colour name and returns the
> corresponding RGB triplet. Declare a method that does the opposite: take an
> RGB triplet and return the colour name.
>
> **Exercise 4.** A _static method_ can be used without instantiating the class
> that encapsulates the method. To declare a static method, prefix the method
> name with the `static` keyword. For example:
>
> ```js
> /**
>  * A class having a static method.
>  */
> class Rectangle {
>     /**
>      * A static method is declared by using the "static" keyword.
>      *
>      * @param {number} width The width of a rectangle.
>      * @param {number} height The height of a rectangle.
>      * @returns {number} The area of a rectangle having the given width and height.
>      */
>     static area(width, height) {
>         return width * height;
>     }
> }
>
> /**
>  * Use a static method without instantiating a class.
>  *
>  * @param {NS} ns The Netscript API.
>  */
> export async function main(ns) {
>     const width = 2;
>     const height = 3;
>     const area = Rectangle.area(width, height);
>     ns.tprintf(`Rectangle`);
>     ns.tprintf(`Width: ${width}`);
>     ns.tprintf(`Height: ${height}`);
>     ns.tprintf(`Area: ${area}`);
> }
> ```
>
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
