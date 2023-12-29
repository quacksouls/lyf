/**
 * MIT License
 *
 * Copyright (C) 2023 Duck McSouls <quacksouls [AT] gmail [DOT] com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

class ClassName {
    // Public attributes/properties/fields. Can be modified outside of class.
    dataA;
    dataB;
    ...

    // Private attributes/properties/fields. Can't modify outside of class.
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
     * A method for working with the class' data. A function declared within
     * a class is called a method.
     */
    methodA() {
        // Code to process some data.
    }

    // Insert other method declarations here.
}
