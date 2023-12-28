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
 * Multiply two numbers together.
 *
 * @param {number} a A number.
 * @returns {function} A function that multiplies each number by a.
 */
function multiply(a) {
    return function (b) {
        return a * b;
    };
}

/**
 * A function that returns another function.
 *
 * @param {NS} ns The Netscript API.
 */
export async function main(ns) {
    const double = multiply(2);
    const triple = multiply(3);

    ns.tprintf("Doubling");
    ns.tprintf(`1 -> ${double(1)}`);
    ns.tprintf(`2 -> ${double(2)}`);
    ns.tprintf(`3 -> ${double(3)}`);
    ns.tprintf("\n");

    ns.tprintf("Tripling");
    ns.tprintf(`1 -> ${triple(1)}`);
    ns.tprintf(`2 -> ${triple(2)}`);
    ns.tprintf(`3 -> ${triple(3)}`);
}
