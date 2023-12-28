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
 * Tabby's lifespan.
 *
 * @param {NS} ns The Netscript API.
 */
export async function main(ns) {
    const age = 2;
    const name = "Tabby";
    if (0 <= age && age <= 0.5) {
        ns.tprintf(`${name} is a kitten.`);
    } else if (0.5 < age && age <= 2) {
        ns.tprintf(`${name} is a junior.`);
    } else if (2 < age && age <= 6) {
        ns.tprintf(`${name} is in the prime stage.`);
    } else if (6 < age && age <= 10) {
        ns.tprintf(`${name} is a mature.`);
    } else {
        ns.tprintf("More than a decade with Sam.");
    }
}
