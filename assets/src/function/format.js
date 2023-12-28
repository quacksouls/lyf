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
 * Format a number by prefixing it with a symbol.
 *
 * @param {string} sym Prefix a number with this symbol.
 * @returns {function} A function that formats a number.
 *     Use the given prefix in each formatted number.
 */
function format(sym) {
    return function (n) {
        return `${sym}${n.toFixed(2)}`;
    };
}

/**
 * Format a number in various ways.
 *
 * @param {NS} ns The Netscript API.
 */
export async function main(ns) {
    // Format various currencies.
    const dollar = format("$");
    const euro = format("€");
    const yen = format("¥");
    ns.tprintf("Various currencies");
    ns.tprintf(`${dollar(2.71)}`);
    ns.tprintf(`${euro(3.156)}`);
    ns.tprintf(`${yen(4.201)}`);
    ns.tprintf("\n");

    // Format positive/negative numbers.
    const negative = format("-");
    const positive = format("+");
    ns.tprintf("Various numbers");
    ns.tprintf(`${negative(6.78)}`);
    ns.tprintf(`${positive(7.107)}`);
}
