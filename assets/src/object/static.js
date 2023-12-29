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

/**
 * A class having a static method.
 */
class Rectangle {
    /**
     * A static method is declared by using the "static" keyword.
     *
     * @param {number} width The width of a rectangle.
     * @param {number} height The height of a rectangle.
     * @returns {number} The area of a rectangle having the given dimensions.
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
